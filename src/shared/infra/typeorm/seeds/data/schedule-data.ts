import Orders from '@modules/orders/infra/typeorm/entities/Order'
import ICreateScheduleDTO from '@modules/schedule/dtos/ICreateScheduleDTO'
import Professional from '@modules/users/infra/typeorm/entities/Professional'

export const scheduleData: ICreateScheduleDTO[] = [
  {
    name: 'Maquiagem',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
  },
  {
    name: 'Revisão do carro',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
  },
  {
    name: 'Troca de oléo',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
  },
  {
    name: 'Formataćão de notebook',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
  },
  {
    name: 'Instalaćão de sistema de vigilância',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
  },
]
