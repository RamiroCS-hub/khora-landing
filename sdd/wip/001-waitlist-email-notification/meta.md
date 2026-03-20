# Meta: Waitlist Email Notification

## Identificación
- **ID**: 001
- **Slug**: 001-waitlist-email-notification
- **Tipo**: feature
- **Estado**: verifying

## Resumen
Enviar un email operativo a `ramiro.souble@khora.ar` cuando un lead complete el formulario de la landing.

## Stack detectado
- **Lenguaje**: TypeScript
- **Framework**: Next.js App Router
- **Test runner**: none configured
- **Linter**: eslint

## Git
- **Branch**: feature/waitlist-email-notification
- **Base branch**: main

## Artefactos
- [x] 1-functional/spec.md
- [x] 2-technical/spec.md
- [x] 3-tasks/tasks.json
- [x] 4-implementation/progress.md
- [x] 5-verify/report.md

## Fechas
- **Creada**: 2026-03-20
- **Última actualización**: 2026-03-20
- **Completada**: —

## Notas
- El formulario actual ya valida cliente y servidor.
- La API actual usa `WAITLIST_WEBHOOK_URL` como integración opcional.
- La opción propuesta actual es FormSubmit para evitar backend de email propio.
