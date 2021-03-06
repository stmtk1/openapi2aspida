/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    resBody: Types.UserInfo & {
      settings?: Types.UserSettings
    }
  }
}
