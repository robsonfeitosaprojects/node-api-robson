import { injectable, inject } from 'tsyringe'

import path from 'path'

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider'

interface IRequest {
  name: string
  email: string
}

@injectable()
class SendEmailClientService {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute(data: IRequest): Promise<void> {
    await this.sendNewClientTerms(data)
    await this.sendSalles(data)
  }

  public async sendNewClientTerms(data: IRequest) {
    const activedTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'new_client.hbs',
    )

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      subject: '[RobsonFeitosa.dev.br] Termos de uso e condições',
      templateData: {
        file: activedTemplate,
        variables: {},
      },
    })
  }

  public async sendSalles(data: IRequest) {
    const activedTemplate = path.resolve(__dirname, '..', 'views', 'salle.hbs')

    await this.mailProvider.sendMail({
      to: {
        name: 'Robson Feitosa',
        email: 'contato@robsonfeitosa.dev.br',
      },
      subject: '[RobsonFeitosa.dev.br] Nova venda',
      templateData: {
        file: activedTemplate,
        variables: {
          name: data.name,
        },
      },
    })
  }
}

export default SendEmailClientService
