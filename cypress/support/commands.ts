/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { loginUI, loginUICredentials } from "./login.functions"

Cypress.Commands.add('loginUI', loginUI)
Cypress.Commands.add('loginUICredentials', loginUICredentials)

