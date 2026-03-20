# Implementation Progress: Waitlist Email Notification

## Date
2026-03-20

## Completed
- Switched the landing waitlist form to submit directly to FormSubmit via AJAX.
- Added reserved FormSubmit fields: `_subject`, `_template`, `_replyto`, `_url`.
- Added `name` attributes to visible form fields so FormSubmit includes them in the email.
- Documented `NEXT_PUBLIC_FORMSUBMIT_ENDPOINT` in `.env.example`.
- Removed the now-unused internal route handler at `app/api/waitlist/route.ts`.

## Pending
- Confirm the first activation email from FormSubmit.
- Optionally replace the public email endpoint with FormSubmit's obfuscated endpoint after activation.

## Notes
- Current default destination is `ramiro.souble@khora.ar`.
- The frontend still tracks validation, success, and error events with Vercel Analytics.
