/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './inventory'
import { Methods as Methods1 } from './order'
import { Methods as Methods2 } from './order/_orderId@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/store/inventory'
  const PATH1 = '/store/order'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    inventory: {
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    order: {
      _orderId: (val0: number) => {
        const prefix0 = `${PATH1}/${val0}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch(prefix, prefix0, DELETE, option).send(),
          $delete: (option?: { config?: T }) =>
            fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}`
        }
      },
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
