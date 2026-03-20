# Proposal: Waitlist Email Notification

## Intent

El formulario de la landing hoy no garantiza que el lead termine en una bandeja operativa. El cambio agrega notificación por email para que cada envío llegue a `ramiro.souble@khora.ar` y no dependa de revisar logs o integrar otro sistema después.

## Scope

### In Scope
- Enviar un email por cada submit válido del formulario.
- Integrar el formulario con FormSubmit para recibir el lead en `ramiro.souble@khora.ar`.
- Mantener la UX actual del formulario sin redirección fuera de la landing.

### Out of Scope
- Persistencia de leads en base de datos o CRM.
- Email automático de confirmación al usuario final.
- Panel de administración, archivo histórico o reintentos avanzados.

## Approach

Eliminar la dependencia del backend propio para este flujo y enviar el formulario por AJAX a FormSubmit, que reenvía las submissions por email. Se conservará la validación y feedback actuales del componente, y se configurarán campos reservados como `_subject`, `_template` y `_replyto`. Para no exponer el email final en producción, la implementación deberá preferir el identificador "invisible email" que FormSubmit emite después de la activación.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `components/landing/waitlist.tsx` | Modified | Cambia de POST interno a AJAX contra FormSubmit |
| `app/api/waitlist/route.ts` | Removed/Bypassed | Deja de ser necesario para el submit del lead |
| `.env.example` | Optional | Puede documentar el endpoint activado de FormSubmit si se quiere dejar configurable |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| El formulario no fue activado/confirmado en FormSubmit | Med | Hacer el primer submit de activación y confirmar el email antes de producción |
| Exposición del email en el endpoint público | Med | Usar el "invisible email" de FormSubmit en lugar de la dirección plana |
| Limitaciones del servicio third-party o spam filtering | Low | Mantener validación cliente y opcionalmente agregar honeypot |

## Rollback Plan

Revertir el commit y volver al submit vía route handler propia. No hay migraciones ni cambios persistentes.

## Dependencies

- Cuenta/activación de FormSubmit para `ramiro.souble@khora.ar`
- Confirmación del endpoint o "invisible email" generado por FormSubmit

## Success Criteria

- [ ] Un submit válido genera un email a `ramiro.souble@khora.ar`
- [ ] El endpoint activo de FormSubmit está confirmado antes de producción
- [ ] El formulario mantiene validación y feedback al usuario
