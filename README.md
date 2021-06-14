# veek

Serverless function integrated with Event Bridge to run Veek's check-in on scheduled time.

## Usage

Create an event rule with a fixed rate of `55 minutes` and with a constant JSON being the following:

```
{ username: string, password: string }
```
