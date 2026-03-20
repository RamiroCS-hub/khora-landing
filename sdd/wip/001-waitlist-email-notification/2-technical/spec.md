# Technical Spec: Waitlist Email Notification

**Feature**: `001-waitlist-email-notification`
**Version**: 1.0
**Status**: Draft
**Date**: 2026-03-20
**Refs**: `1-functional/spec.md`

## Architecture Overview

El submit saldrá desde `components/landing/waitlist.tsx` directo a FormSubmit usando su endpoint AJAX. El componente seguirá validando nombre y email, enviará el payload a `https://formsubmit.co/ajax/...`, y manejará la respuesta JSON para mostrar éxito o error sin redireccionar al usuario.

```text
[Browser] -> [POST /api/waitlist]
[Browser]
  -> [client validation]
  -> [FormSubmit AJAX endpoint]
  -> [ramiro.souble@khora.ar]
```

## Architecture Decision Records

### ADR-001: Usar FormSubmit directo desde el cliente

- **Status**: Accepted
- **Context**: El usuario pidió evitar backend/email infra propia y mencionó un servicio tipo FormSubmit.
- **Decision**: Enviar el formulario directo a FormSubmit mediante su endpoint AJAX.
- **Consequences**: Se elimina código server-side para este flujo, pero la confiabilidad depende de una activación previa del endpoint y de un servicio third-party.
- **Alternatives considered**: Resend desde route handler; descartado por preferencia explícita del usuario. Mantener webhook propio; descartado por innecesario para esta necesidad.

### ADR-002: Mantener experiencia inline con AJAX

- **Status**: Accepted
- **Context**: La UX actual del formulario ya muestra estados de loading, error y éxito sin navegación.
- **Decision**: Usar el endpoint AJAX de FormSubmit en vez de `action=` clásico para conservar esa UX.
- **Consequences**: El componente sigue controlando estados localmente, pero se pierde la simplicidad máxima del submit HTML puro.
- **Alternatives considered**: Usar `form action="https://formsubmit.co/..."`; descartado porque redirige o exige más manejo de `_next`.

### ADR-003: Usar endpoint activado u "invisible email"

- **Status**: Accepted
- **Context**: FormSubmit permite usar la dirección de email plana o un identificador ofuscado.
- **Decision**: Dejar el endpoint de FormSubmit configurable y preferir el identificador ofuscado una vez activado.
- **Consequences**: Se reduce la exposición del correo, pero hay un paso manual inicial de activación.
- **Alternatives considered**: Hardcodear `ramiro.souble@khora.ar` en el endpoint público; descartado por exposición innecesaria.

## Component Design

### `components/landing/waitlist.tsx`

**Responsabilidad**: Validar el formulario, construir el payload para FormSubmit y manejar estados de loading, error y éxito.

**Interfaz pública**:
```ts
export function Waitlist(): JSX.Element
```

**Dependencias**: `@vercel/analytics`, endpoint AJAX de FormSubmit

## Data Model

Sin cambios en modelo de datos persistente ni server-side.

Payload validado:

```ts
type WaitlistLead = {
  name: string;
  email: string;
  company?: string | null;
  _subject: string;
  _template: "table";
  _captcha?: string;
  _replyto: string;
};
```

## API Contract

### `POST https://formsubmit.co/ajax/{configured-endpoint}`

**Request**:
```json
{
  "name": "Juan Perez",
  "email": "juan@empresa.com",
  "company": "Empresa SA",
  "_subject": "Nuevo lead desde khora-landing",
  "_template": "table",
  "_replyto": "juan@empresa.com"
}
```

**Response 200**:
```json
{
  "ok": true,
  "success": "true"
}
```

**Errors**:

| Status | Code | Description |
|--------|------|-------------|
| 400 | `invalid_payload` | Faltan campos o el email es inválido |
| 422/500 | `formsubmit_not_ready` | Endpoint no activado o rechazado |
| 5xx | `third_party_failure` | FormSubmit no pudo procesar la entrega |

## Error Handling

- Validación inválida: bloquear en cliente antes del submit
- Error del servicio third-party: mostrar error genérico y no marcar éxito
- Endpoint no activado: mostrar error operativo claro
- Mantener tracking del resultado desde el frontend

## Testing Strategy

- **Unit tests**: si se agrega harness luego, cubrir el mapeo del payload a FormSubmit
- **Integration tests**: mockear `fetch` y verificar respuestas de éxito/error en el componente
- **E2E tests**: no aplican en esta iteración por falta de harness

Referencia a scenarios funcionales:

| Scenario | Test type | Qué valida |
|----------|-----------|------------|
| REQ-01 Scenario 01 | integration | submit válido llega a FormSubmit y muestra éxito |
| REQ-01 Scenario 02 | integration | error del servicio no muestra éxito |
| REQ-02 Scenario 01 | unit/integration | campos faltantes no envían |
| REQ-02 Scenario 02 | unit/integration | email inválido no envía |
| REQ-03 Scenario 01 | integration | endpoint no activado no devuelve falso positivo |
| REQ-03 Scenario 02 | integration | endpoint inválido propaga error operativo |

## Non-Functional Requirements

- **Performance**: el envío debe ejecutarse dentro del presupuesto normal de una serverless function; un solo email por submit
- **Security**: preferir endpoint ofuscado de FormSubmit en lugar de email plano
- **Observability**: mantener tracking del frontend para éxito/error

## Brownfield Annotations

<!-- overrides: app/api/waitlist/route.ts -->
<!-- extends: components/landing/waitlist.tsx -->
