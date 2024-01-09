import ICreateProfessionalDTO from '@modules/users/dtos/ICreateProfessionalDTO'
import ICreateTimeIntervalsDTO from '@modules/users/dtos/ICreateTimeIntervalsDTO'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import ICreateUserSettingsDTO from '@modules/users/dtos/ICreateUserSettingsDTO'

export const settingsProfessionalData: ICreateUserSettingsDTO[] = Array.from(
  { length: 12 },
  () => ({
    level: 2,
    actived: true,
  }),
)

export const usersProfessionalData: ICreateUserDTO[] = [
  {
    name: 'João',
    email: 'joao@example.com',
    password: '123123',
  },
  {
    name: 'Gabriel',
    email: 'gabriel@example.com',
    password: '123123',
  },
  {
    name: 'Joel',
    email: 'joel@example.com',
    password: '123123',
  },
  {
    name: 'Mauricio',
    email: 'mauricio@example.com',
    password: '123123',
  },
  {
    name: 'Maria',
    email: 'maria@example.com',
    password: '123123',
  },
  {
    name: 'Lucas',
    email: 'lucas@example.com',
    password: '123123',
  },
  {
    name: 'Luiza',
    email: 'luiza@example.com',
    password: '123123',
  },
  {
    name: 'Jaime',
    email: 'jaime@example.com',
    password: '123123',
  },
  {
    name: 'Bruno',
    email: 'bruno@example.com',
    password: '123123',
  },
  {
    name: 'Luiz',
    email: 'luiz@example.com',
    password: '123123',
  },
  {
    name: 'Miguel',
    email: 'miguel@example.com',
    password: '123123',
  },
]

export const professionalData: ICreateProfessionalDTO[] = [
  {
    name: 'João',
    function: 'Mecânico',
    actived: true,
  },
  {
    name: 'Gabriel',
    function: 'Mecânico',
    actived: true,
  },
  {
    name: 'Joel',
    function: 'Cabelereiro',
    actived: true,
  },
  {
    name: 'Mauricio',
    function: 'Cabelereiro',
    actived: true,
  },
  {
    name: 'Maria',
    function: 'Técnica em TI',
    actived: true,
  },
  {
    name: 'Lucas',
    function: 'Técnico em seguranća',
    actived: true,
  },
  {
    name: 'Luiza',
    function: 'Maquiadora',
    actived: true,
  },
  {
    name: 'Jaime',
    function: 'Dentista',
    actived: true,
  },
  {
    name: 'Bruno',
    function: 'Jardineiro',
    actived: true,
  },
  {
    name: 'Luiz',
    function: 'Jardineiro',
    actived: true,
  },
  {
    name: 'Miguel',
    function: 'Vendedor',
    actived: true,
  },
]

export const timeIntervals = [
  {
    time_start_in_minutes_one: 480,
    time_end_in_minutes_one: 720,
    time_start_in_minutes_two: 840,
    time_end_in_minutes_two: 1080,
    week_day: 1,
    professional_id: '',
  },
  {
    time_start_in_minutes_one: 480,
    time_end_in_minutes_one: 720,
    time_start_in_minutes_two: 840,
    time_end_in_minutes_two: 1080,
    week_day: 2,
    professional_id: '',
  },
  {
    time_start_in_minutes_one: 480,
    time_end_in_minutes_one: 720,
    time_start_in_minutes_two: 840,
    time_end_in_minutes_two: 1080,
    week_day: 3,
    professional_id: '',
  },
  {
    time_start_in_minutes_one: 480,
    time_end_in_minutes_one: 720,
    time_start_in_minutes_two: 840,
    time_end_in_minutes_two: 1080,
    week_day: 4,
    professional_id: '',
  },
  {
    time_start_in_minutes_one: 480,
    time_end_in_minutes_one: 720,
    time_start_in_minutes_two: 840,
    time_end_in_minutes_two: 1080,
    week_day: 5,
    professional_id: '',
  },
]
