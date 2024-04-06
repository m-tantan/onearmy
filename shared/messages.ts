// HACK - in order to be able to lookup any key in `getFriendlyMessage` we need to include
// a random key so that full typing can't be inferred (leads to index signature error)
const randomKey = Math.random().toString()

// set of mappings to use for system->friendly messages
// some are pulled from error messages, others are hardcoded into the platform but kept
// here to make easier to change in the future
export const FRIENDLY_MESSAGES = {
  '': '',
  'auth/argument-error': 'Please provide a valid email',
  'auth/email-already-in-use': 'The email address is already in use',
  'auth/invalid-email': `That email address doesn't quite look right`,
  'auth/user-not-found': 'No account found, typo maybe?',
  'auth/wrong-password': 'Password does not match the user account',
  'reset email sent': 'Reset email sent, check your inbox/spam',
  'profile saved': 'Profile Saved',
  'sign-up username taken': 'Woops sorry, that Username is already taken',
  [randomKey]: randomKey,
}

/**
 * Conversion for default error messages.
 * @param systemMessage - the message text for lookup in the table.
 * This can either be a status code or full message (depending on how saved above)
 */
export const getFriendlyMessage = (systemMessage = '') => {
  const messageKey = systemMessage.toLowerCase()
  if (Object.prototype.hasOwnProperty.call(FRIENDLY_MESSAGES, messageKey)) {
    return FRIENDLY_MESSAGES[messageKey]
  } else {
    console.log(
      `%c No friendly message for [${messageKey}]`,
      'background: #222; color: #bada55',
    )
    return systemMessage
  }
}
