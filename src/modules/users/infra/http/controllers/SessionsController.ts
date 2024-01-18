import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import AuthenticationUserService from '@modules/users/services/AuthenticateUserService'

export default class SessionsControler {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authenticateUser = container.resolve(AuthenticationUserService)

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    })

    return res.json({ user: classToClass(user), token })
  }
}
