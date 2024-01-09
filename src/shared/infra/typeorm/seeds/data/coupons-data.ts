import ICreateCouponDTO from '@modules/products/dtos/ICreateCouponDTO'
import dayjs from 'dayjs'

function dateValidation(day: number) {
  return dayjs().add(day, 'day').toDate()
}

export const couponsData: ICreateCouponDTO[] = [
  {
    validation: dateValidation(3),
    status: 'available',
    discount: 60,
    code_coupon: '4DKQ37P',
  },
  {
    validation: dateValidation(6),
    status: 'available',
    discount: 20,
    code_coupon: '4DDS37P',
  },
  {
    validation: dateValidation(4),
    status: 'available',
    discount: 15,
    code_coupon: '4DK5S7P',
  },
  {
    validation: dateValidation(20),
    status: 'available',
    discount: 5,
    code_coupon: '2DKQ37P',
  },
  {
    validation: dateValidation(11),
    status: 'available',
    discount: 50,
    code_coupon: '1DKQJ7P',
  },
  {
    validation: dateValidation(9),
    status: 'available',
    discount: 30,
    code_coupon: '7DKQ378',
  },
  {
    validation: dateValidation(2),
    status: 'available',
    discount: 12,
    code_coupon: '4DKQ37P',
  },
]
