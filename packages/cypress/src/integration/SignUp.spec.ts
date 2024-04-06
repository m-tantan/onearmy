import { FRIENDLY_MESSAGES } from 'oa-shared'

import { generatedId } from '../utils/TestUtils'

// existing user already created in auth system
const authUser = {
  username: 'howto_reader',
  email: 'howto_reader@test.com',
  password: 'test1234',
  confirmPassword: 'test1234',
}
const newUser = {
  username: `CI_${generatedId(5)}`.toLocaleLowerCase(),
  email: `CI_${generatedId(5)}@test.com`.toLocaleLowerCase(),
  password: 'test1234',
  confirmPassword: 'test1234',
}

beforeEach(() => {
  cy.visit('/sign-up')
})

const fillSignupForm = (form: typeof authUser) => {
  const { username, email, password, confirmPassword } = form
  cy.get('[data-cy=username]').clear().type(username)
  cy.get('[data-cy=email]').clear().type(email)
  cy.get('[data-cy=password]').clear().type(password)
  cy.get('[data-cy=confirm-password]').clear().type(confirmPassword)
  cy.get('[data-cy=consent]').check()
}

describe('[Sign-up - existing user]', () => {
  it('prevent duplicate name', () => {
    fillSignupForm(authUser)
    cy.get('[data-cy=submit]').click()
    cy.contains(FRIENDLY_MESSAGES['sign-up username taken']).should('be.exist')
  })
  it('prevent duplicate email', () => {
    const user = { ...authUser, username: `new_username_${generatedId(5)}` }
    fillSignupForm(user)
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=error-msg]')
      .contains(FRIENDLY_MESSAGES['auth/email-already-in-use'])
      .should('be.exist')
  })
})

describe('[Sign-up - new user]', () => {
  it('create new account', () => {
    fillSignupForm(newUser)
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', 'sign-up-message')
    cy.get('div').contains('Sign up successful').should('be.visible')
    cy.get('[data-cy=user-menu]')
  })
  it('sign in as new user', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=email]').type(newUser.email)
    cy.get('[data-cy=password]').type(newUser.password)
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=user-menu]')
  })

  after(() => {
    cy.log('clearing user from auth')
    cy.deleteCurrentUser()
  })
})

describe('[Sign-up - authenticated user]', () => {
  it('redirects to home page', () => {
    cy.login('howto_reader@test.com', 'test1234')
    cy.visit('/sign-up').url().should('include', '/')
  })
})

describe('[All account types', () => {
  it('[Can update username and password]', () => {
    const { email, username, password } = newUser
    const newEmail = `${username}-super_cool@test.com`
    const newPassword = '<dfbss73DF'

    cy.step('Go to settings page')
    cy.login(email, password)
    cy.visit('/settings')

    cy.step('Update Email')
    cy.get('[data-cy="changeEmailButton"]').click()
    cy.get('[data-cy="changeEmailForm"]')
      .contains(`Current email address: ${email}`)
      .should('be.visible')
    cy.get('[data-cy="newEmail"]').clear().type(newEmail)
    cy.get('[data-cy="password"]').clear().type(password)
    cy.get('[data-cy="changeEmailSubmit"]').click()
    cy.get('[data-cy="changeEmailContainer"')
      .contains(`Email changed to ${newEmail}`)
      .should('be.visible')

    cy.step('Update Password')
    cy.get('[data-cy="changePasswordButton"]').click()
    cy.get('[data-cy="oldPassword"]').clear().type(password)
    cy.get('[data-cy="newPassword"]').clear().type(newPassword)
    cy.get('[data-cy="repeatNewPassword"]').clear().type(newPassword)
    cy.get('[data-cy="changePasswordSubmit"]').click()
    cy.get('[data-cy="changePasswordContainer"')
      .contains(`Password changed`)
      .should('be.visible')
  })
})
