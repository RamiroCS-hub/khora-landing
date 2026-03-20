# Functional Spec: Waitlist Email Notification

**Feature**: `001-waitlist-email-notification`
**Version**: 1.0
**Status**: Draft
**Date**: 2026-03-20

## Overview

La landing debe notificar a Khora cuando una persona completa el formulario de contacto. Cada envío válido debe generar un email operativo con los datos del lead usando un servicio externo de form backend para que el seguimiento comercial no dependa de inspeccionar logs ni de mantener infraestructura de email propia.

La experiencia del usuario final no debe degradarse: el formulario debe seguir validando nombre y email, y solo debe mostrar éxito cuando el backend confirme que el lead fue procesado correctamente.

## Actors

| Actor | Description |
|-------|-------------|
| Visitante de la landing | Persona que completa el formulario para solicitar una demo |
| Operador comercial Khora | Persona que recibe el email y hace seguimiento del lead |

## Requirements

### REQ-01: Notificar leads por email

Cada submit válido del formulario MUST generar un email operativo dirigido a `ramiro.souble@khora.ar` con los datos enviados por el visitante.

#### Scenarios

**Scenario 01: envío exitoso**
```text
Given un visitante completa nombre y email válidos en el formulario
When el backend procesa el submit con la integración de email disponible
Then Khora recibe un email con nombre, email y empresa del lead
```

**Scenario 02: falla de entrega**
```text
Given un visitante completa un formulario válido
When el backend no puede entregar el email al proveedor configurado
Then el formulario no informa éxito y muestra un error de envío
```

### REQ-02: Mantener validación y feedback del formulario

El formulario MUST seguir rechazando datos obligatorios faltantes o emails inválidos antes de confirmar el envío.

#### Scenarios

**Scenario 01: campos obligatorios ausentes**
```text
Given un visitante deja vacío el nombre o el email
When intenta enviar el formulario
Then la interfaz muestra un mensaje de validación y no procesa el lead
```

**Scenario 02: email inválido**
```text
Given un visitante ingresa un email con formato inválido
When intenta enviar el formulario
Then la interfaz muestra un error de validación y no confirma éxito
```

### REQ-03: Evitar pérdida silenciosa de leads

La API MUST fallar explícitamente cuando la integración operativa no esté configurada correctamente.

#### Scenarios

**Scenario 01: credenciales ausentes**
```text
Given el proyecto está desplegado sin las credenciales requeridas para email
When llega un submit válido al backend
Then la API responde error operativo y no reporta éxito al frontend
```

**Scenario 02: remitente inválido**
```text
Given el formulario usa un endpoint de FormSubmit no activado o inválido
When se intenta enviar el lead
Then la interfaz no informa éxito y se detecta un error operativo
```

## Brownfield Annotations

<!-- overrides: app/api/waitlist/route.ts -->
<!-- extends: components/landing/waitlist.tsx -->

## Out of Scope

- Guardar leads en una base de datos o CRM
- Enviar respuestas automáticas al visitante
- Dashboard de leads o reintentos automáticos
