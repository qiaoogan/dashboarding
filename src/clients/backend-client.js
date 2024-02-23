import * as httpUtls from '@/utils/http-utils'
import backendConfig from '@/configs/backend-config'

const buildUrl = (bathPath, resourcePath) => {
  return `${backendConfig.HOST}${bathPath}${resourcePath}`
}

export const getBooks = async () => {
  const url = buildUrl(backendConfig.TABLE_BATH_PATH, backendConfig.TABLE_BOOK_PATH)

  return await httpUtls.get(url)

}

export const getDefaultAccount = async () => {
  const url = buildUrl(backendConfig.SETTINGS_BATH_PATH, backendConfig.SETTINGS_ACCOUNT_DEFAULT_PATH)

  return await httpUtls.get(url)
}

export const searchAccount = async aid => {
  const url = buildUrl(backendConfig.SETTINGS_BATH_PATH, backendConfig.SETTINGS_ACCOUNT_PATH) + `?aid=${aid}`

  return await httpUtls.get(url)
}

export const updateAccount = async data => {
  const url = buildUrl(backendConfig.SETTINGS_BATH_PATH, backendConfig.SETTINGS_ACCOUNT_PATH)
  
  return await httpUtls.put(url, data)

}


