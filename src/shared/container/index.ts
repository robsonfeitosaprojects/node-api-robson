import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUserSettingsRepository from '@modules/users/repositories/IUserSettingsRepository'
import UserSettingsRepository from '@modules/users/infra/typeorm/repositories/UserSettingsRepository'

import IUserTransactionsRepository from '@modules/users/repositories/IUserTransactionsRepository'
import UserTransactionsRepository from '@modules/users/infra/typeorm/repositories/UserTransactionsRepository'

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository'
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository'

import IAddressRepository from '@modules/users/repositories/IAddressRepository'
import AddressRepository from '@modules/users/infra/typeorm/repositories/AddressRepository'

import ICommentRepository from '@modules/users/repositories/ICommentRepository'
import CommentRepository from '@modules/users/infra/typeorm/repositories/CommentRepository'

import ICreditCardRepository from '@modules/users/repositories/ICreditCardRepository'
import CreditCardRepository from '@modules/users/infra/typeorm/repositories/CreditCardRepository'

import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'

import ISettingsRepository from '@modules/settings/repositories/ISettingsRepository'
import SettingsRepository from '@modules/settings/infra/typeorm/repositories/SettingsRepository'

import IProductsRepository from '@modules/products/repositories/IProductsRepository'
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository'

import ICategoriesRepository from '@modules/products/repositories/ICategoriesRepository'
import CategoriesRepository from '@modules/products/infra/typeorm/repositories/CategoriesRepository'

import IWishRepository from '@modules/products/repositories/IWishRepository'
import WishRepository from '@modules/products/infra/typeorm/repositories/WishRepository'

import ICouponRepository from '@modules/products/repositories/ICouponRepository'
import CouponRepository from '@modules/products/infra/typeorm/repositories/CouponRepository'

import IOrderStatusRepository from '@modules/orders/repositories/IOrderStatusRepository'
import OrderStatusRepository from '@modules/orders/infra/typeorm/repositories/OrderStatusRepository'

import IProductDataRepository from '@modules/products/repositories/IProductDataRepository'
import ProductDataRepository from '@modules/products/infra/typeorm/repositories/ProductDataRepository'

import IProductAttributesRepository from '@modules/products/repositories/IProductAttributesRepository'
import ProductAttributesRepository from '@modules/products/infra/typeorm/repositories/ProductAttributesRepository'

import ProductVariationsRespository from '@modules/products/infra/typeorm/repositories/ProductVariationsRespository'
import IProductVariationsRespository from '@modules/products/repositories/IProductVariationsRespository'

import IArchiveRepository from '@modules/archives/repositories/IArchiveRepository'
import ArchiveRepository from '@modules/archives/infra/typeorm/repositories/ArchiveRepository'

import ProductProviderRepository from '@modules/products/infra/typeorm/repositories/ProductProviderRepository'
import IProductProviderRepository from '@modules/products/repositories/IProductProviderRepository'

import TimeDiscountRepository from '@modules/products/infra/typeorm/repositories/TimeDiscountRepository'
import ITimeDiscountRepository from '@modules/products/repositories/ITimeDiscountRepository'

import TeamRepository from '@modules/users/infra/typeorm/repositories/TeamRepository'
import ITeamRepository from '@modules/users/repositories/ITeamRepository'

import IProfessionalRepository from '@modules/users/repositories/IProfessionalRepository'
import ProfessionalRepository from '@modules/users/infra/typeorm/repositories/ProfessionalRepository'

import ITimeIntervalsRepository from '@modules/users/repositories/ITimeIntervalsRepository'
import TimeIntervalsRepository from '@modules/users/infra/typeorm/repositories/TimeIntervalsRepository'

import ScheduleRepository from '@modules/schedule/infra/typeorm/repositories/ScheduleRepository'
import IScheduleRepository from '@modules/schedule/repositories/IScheduleRepository'
import OrderProductRepository from '@modules/orders/infra/typeorm/repositories/OrderProductRepository'
import IOrderProductRepository from '@modules/orders/repositories/IOrderProductRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUserSettingsRepository>(
  'UserSettingsRepository',
  UserSettingsRepository,
)

container.registerSingleton<IUserTransactionsRepository>(
  'UserTransactionsRepository',
  UserTransactionsRepository,
)

container.registerSingleton<ICommentRepository>(
  'CommentRepository',
  CommentRepository,
)

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
)

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
)

container.registerSingleton<ICreditCardRepository>(
  'CreditCardRepository',
  CreditCardRepository,
)

container.registerSingleton<IUsersTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)

container.registerSingleton<ISettingsRepository>(
  'SettingsRepository',
  SettingsRepository,
)

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
)

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<IWishRepository>('WishRepository', WishRepository)

container.registerSingleton<ICouponRepository>(
  'CouponRepository',
  CouponRepository,
)

container.registerSingleton<IOrderStatusRepository>(
  'OrderStatusRepository',
  OrderStatusRepository,
)

container.registerSingleton<IProductDataRepository>(
  'ProductDataRepository',
  ProductDataRepository,
)

container.registerSingleton<IProductAttributesRepository>(
  'ProductAttributesRepository',
  ProductAttributesRepository,
)

container.registerSingleton<IProductVariationsRespository>(
  'ProductVariationsRespository',
  ProductVariationsRespository,
)

container.registerSingleton<IArchiveRepository>(
  'ArchiveRepository',
  ArchiveRepository,
)

container.registerSingleton<IProductProviderRepository>(
  'ProductProviderRepository',
  ProductProviderRepository,
)

container.registerSingleton<ITimeDiscountRepository>(
  'TimeDiscountRepository',
  TimeDiscountRepository,
)

container.registerSingleton<IProfessionalRepository>(
  'ProfessionalRepository',
  ProfessionalRepository,
)

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository)

container.registerSingleton<ITimeIntervalsRepository>(
  'TimeIntervalsRepository',
  TimeIntervalsRepository,
)

container.registerSingleton<IScheduleRepository>(
  'ScheduleRepository',
  ScheduleRepository,
)

container.registerSingleton<IOrderProductRepository>(
  'OrderProductRepository',
  OrderProductRepository,
)
