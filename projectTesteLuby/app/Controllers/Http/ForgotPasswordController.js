'use strict'
const User = use('App/Models/User');
const crypto = require('crypto');
const Mail = use('Mail')

class ForgotPasswordController {
  async store( { request, response }){
    try{
      const email = request.input('email');
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_time = new Date()

      await user.save()

      await Mail.send(
        ['views.emails.forgot_password'],
        {
          email: user.email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from('felipe.leite@luby.software', 'Felipe | Luby')
            .subject('recuperação de senha')
        }
      )

    }catch(err){
      return response.status(err.status).send( { error: {message: 'Algo não deu certo, o email está correto? '}})
    }
  }
}

module.exports = ForgotPasswordController
