# veek

Serverless function integrated with Event Bridge to run Veek's check-in on next interaction time.

## Environment variables

| Name          | Description            | Encrypted |
| ------------- | ---------------------- | --------- |
| VEEK_USERNAME | Veek username (CPF)    | false     |
| VEEK_PASSWORD | Veek password (hashed) | true      |
