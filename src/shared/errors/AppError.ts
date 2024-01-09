class AppError {
  public readonly message: string

  public readonly statusCode: number

  public readonly type?: string

  constructor(message: string, statusCode = 400, type?: string) {
    this.message = message
    this.statusCode = statusCode
  }
}

export default AppError
