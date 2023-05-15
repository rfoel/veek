# veek

[![Cron for Veek check-in](https://github.com/rfoel/veek/actions/workflows/check-in-cron.yml/badge.svg?branch=main)](https://github.com/rfoel/veek/actions/workflows/check-in-cron.yml)

Use GitHub Actions to run Veek's check-in on scheduled time. It runs automatically every 30 minutes, but you can also trigger check-ins by dispatching the [check-in-manual.yml](.github/workflows/check-in-manual.yml) action.

## Usage

Clone this repository and create a repository secret with the following JSON:

```json
[
  {
    "username": "string",
    "password": "string"
  }
]
```
