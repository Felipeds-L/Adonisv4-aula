'use strict'

class Session {
  getValidadeAll(){
    return true
  }

  get rules () {
    return {
      email: 'required!email',
      password: 'required'
    }
  }
}

module.exports = Session
