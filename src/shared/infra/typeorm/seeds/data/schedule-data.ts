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
    professional_id: '',
  },
  {
    name: 'Revisão do carro',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
    professional_id: '',
  },
  {
    name: 'Troca de oléo',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
    professional_id: '',
  },
  {
    name: 'Formataćão de notebook',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
    professional_id: '',
  },
  {
    name: 'Instalaćão de sistema de vigilância',
    date: new Date(),
    observations: '',
    order: {} as Orders,
    professional: {} as Professional,
    professional_id: '',
  },
]
