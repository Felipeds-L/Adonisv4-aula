'use strict'

class Task {

  getValidadeAll(){
    return true
  }


  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }
}

module.exports = Task
