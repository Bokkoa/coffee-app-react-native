import { User } from '../../Domain/entities/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { ApiDelivery } from '../datasource/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../datasource/remote/models/ResponseApiDelivery';

export class AuthRepositoryImpl implements AuthRepository {
  
  async register(user: User): Promise<any> {
    try{
      const res = await ApiDelivery.post<ResponseApiDelivery>('/users', user)
      return Promise.resolve({ error: undefined, result: res.data })

    } catch (err) {
      let e = (err as Error).message
      console.log('Err: ', e)
      return Promise.resolve({ error: e, result: undefined })
    }
  }

}