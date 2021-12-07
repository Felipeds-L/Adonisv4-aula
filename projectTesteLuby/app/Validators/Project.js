'use strict'

class Project {

  getValidadeAll(){
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
}

module.exports = Project
