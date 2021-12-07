'use strict'

class User {

  getValidadeAll(){
    return true
  }


  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = User
