# Verify Report: Waitlist Email Notification

## Verification Status
Partial

## Checks
- Code inspection confirms the form now submits to `https://formsubmit.co/ajax/{endpoint}`.
- Code inspection confirms `name`, `email`, and `company` fields include `name` attributes.
- Code inspection confirms the success state only shows after a positive FormSubmit response payload.

## Not Run
- No local install/build executed.
- No live submission tested because FormSubmit activation requires the mailbox owner to confirm the first email.

## Operational Step Required
1. Submit the form once in production or preview.
2. Open the activation email sent by FormSubmit to `ramiro.souble@khora.ar`.
3. Confirm the form.
4. Optionally replace `NEXT_PUBLIC_FORMSUBMIT_ENDPOINT` with the obfuscated FormSubmit endpoint.
