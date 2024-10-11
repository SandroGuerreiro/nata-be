# 'Nata's Backend Service

## What does the project do?

This service serves endpoints related to the 'Nata' project. No frontend is being provided by this application. This application receives and processes requests that will eventually be sent out by the frontend once this exists.
These endpoints use REST and will manage (CRUD) entities like establishments, reviews, comments, reactions and user accounts.

## Documentation

You can check the project documentation [here](docs).

## Table of Contents

- [How to run the project?](#how-to-run-the-project)
- [To check the endpoints documentation](#how-to-check-the-endpoints-documentation)

## How to run the project?

### To start the project (manually)

  ```
  pnpm dev
  ```

### To run the project as production with docker

  ```
  pnpm prod
  ```

## To check the endpoints documentation

Start the project and access http://localhost:3000/docs
