# veek

Serverless function integrated with Event Bridge to run Veek's check-in on scheduled time.

## Usage

Create an event rule with a fixed rate of `30 minutes` and with a constant JSON being the following:

```json
{
  "username": "string",
  "password": "string"
}
```
