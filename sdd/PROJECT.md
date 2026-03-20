# Project Configuration

## Stack
- **Lenguaje principal**: TypeScript
- **Versión**: Next.js 16.2.0 / React 19.2.4
- **Framework**: Next.js App Router
- **Package manager**: pnpm

## Testing
- **Test runner**: none configured
- **Coverage mínimo**: 80%
- **Comando de tests**: N/A

## Linting
- **Linter**: eslint
- **Comando**: pnpm lint

## Convenciones
- **Estilo de branch**: trunk
- **Idioma de código**: inglés
- **Idioma de commits**: inglés

## Standards del proyecto
- Mantener server logic en route handlers o helpers livianos bajo `lib/`.
- No ocultar fallas operativas de integraciones externas cuando comprometen leads.
- Preferir variables de entorno explícitas para credenciales y direcciones operativas.

## Notas
- La landing usa `app/api/waitlist/route.ts` para recibir leads.
- Hoy el handler valida y opcionalmente reenvía a un webhook; no envía email directo.
