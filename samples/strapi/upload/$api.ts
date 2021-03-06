/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './files'
import { Methods as Methods2 } from './files/_id@string'
import { Methods as Methods3 } from './files/count'
import { Methods as Methods4 } from './search/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/upload'
  const PATH1 = '/upload/files'
  const PATH2 = '/upload/files/count'
  const PATH3 = '/upload/search'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    files: {
      _id: (val0: string) => {
        const prefix0 = `${PATH1}/${val0}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).json(),
          $delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}`
        }
      },
      count: {
        get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
