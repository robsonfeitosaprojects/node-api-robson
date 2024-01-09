import dayjs from 'dayjs'

import { ICreateTimeDiscountDTO } from '@modules/products/dtos/ICreateTimeDiscountDTO'
const now = dayjs()
export const timeDiscountData: ICreateTimeDiscountDTO[] = [
  {
    startDate: now.add(1, 'day').toDate(),
    endDate: now.add(3, 'day').toDate(),
    discount: 30,
    status: 'actived',
  },
  {
    startDate: now.add(1, 'day').toDate(),
    endDate: now.add(5, 'day').toDate(),
    discount: 10,
    status: 'actived',
  },
  {
    startDate: now.add(1, 'day').toDate(),
    endDate: now.add(4, 'day').toDate(),
    discount: 5,
    status: 'actived',
  },
  {
    startDate: now.add(1, 'day').toDate(),
    endDate: now.add(8, 'day').toDate(),
    discount: 5,
    status: 'actived',
  },
  {
    startDate: now.add(1, 'day').toDate(),
    endDate: now.add(7, 'day').toDate(),
    discount: 5,
    status: 'actived',
  },
]
