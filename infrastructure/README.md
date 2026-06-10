# Infrastructure

This folder contains the backend for the contact form.

- `lambda/index.mjs` → Lambda function (SES email sender)
- `template.yaml` → SAM template (Lambda + API Gateway + IAM)

## Deploy with SAM

```bash
sam build
sam deploy --guided