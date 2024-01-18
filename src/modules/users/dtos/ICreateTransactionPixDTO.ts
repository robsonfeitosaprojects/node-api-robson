export interface ICreateTransactionPixDTO {
  customer: {
    name: string
    type: string
    document: string
    email: string
    phones: {
      home_phone: {
        country_code: string
        area_code: string
        number: string
      }
    }
  }
  items: [
    {
      amount: number
      description: string
      quantity: number
    },
  ]
  payments: [
    {
      payment_method: string
      Pix: {
        expires_in: number
      }
    },
  ]
}
