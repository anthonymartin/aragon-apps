const ARAGON_OS_ERRORS = {
  APP_AUTH_FAILED: 'APP_AUTH_FAILED',
  INIT_ALREADY_INITIALIZED: 'INIT_ALREADY_INITIALIZED',
  INIT_NOT_INITIALIZED: 'INIT_NOT_INITIALIZED',
  RECOVER_DISALLOWED: 'RECOVER_DISALLOWED',
  EVMCALLS_INVALID_LENGTH: 'EVMCALLS_INVALID_LENGTH'
}

const VOTING_ERRORS = {
  VOTING_NO_VOTE: 'VOTING_NO_VOTE',
  VOTING_CHANGE_SUPPORT_PCTS: 'VOTING_CHANGE_SUPPORT_PCTS',
  VOTING_CHANGE_QUORUM_PCTS: 'VOTING_CHANGE_QUORUM_PCTS',
  VOTING_CHANGE_SUPP_TOO_BIG: 'VOTING_CHANGE_SUPP_TOO_BIG',
  VOTING_CANNOT_VOTE: 'VOTING_CANNOT_VOTE',
  VOTING_CANNOT_DELEGATE_VOTE: 'VOTING_CANNOT_DELEGATE_VOTE',
  VOTING_CANNOT_EXECUTE: 'VOTING_CANNOT_EXECUTE',
  VOTING_CANNOT_FORWARD: 'VOTING_CANNOT_FORWARD',
  VOTING_NO_VOTING_POWER: 'VOTING_NO_VOTING_POWER',
  VOTING_INVALID_OVERRULE_WINDOW: 'VOTING_INVALID_OVERRULE_WINDOW',
  VOTING_INVALID_QUIET_ENDING_PERIOD: 'VOTING_INVALID_QUIET_ENDING_PERI',
  VOTING_INVALID_QUIET_ENDING_EXTENSION: 'VOTING_INVALID_QUIET_ENDING_EXT',
  VOTING_INVALID_EXECUTION_DELAY: 'VOTING_INVALID_EXECUTION_DELAY',
}

module.exports = {
  ARAGON_OS_ERRORS,
  VOTING_ERRORS
}
