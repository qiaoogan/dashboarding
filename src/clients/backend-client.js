import * as httpUtls from '@/utils/http-utils'
import backendConfig from '@/configs/backend-config'

const buildUrl = (bathPath, resourcePath) => {
  return `${backendConfig.HOST}${bathPath}${resourcePath}`
}

export const getBooks = async () => {
  const url = buildUrl(backendConfig.TABLE_BATH_PATH, backendConfig.TABLE_BOOK_PATH)

  return await httpUtls.get(url)

}

export const getAccount = async () => {
  const url = buildUrl(backendConfig.SETTINGS_BATH_PATH, backendConfig.SETTINGS_ACCOUNT_PATH)

  return await httpUtls.get(url)
}

export const updateAccount = async data => {
  const url = buildUrl(backendConfig.SETTINGS_BATH_PATH, backendConfig.SETTINGS_ACCOUNT_PATH)
  
  return await httpUtls.put(url, data)

}


