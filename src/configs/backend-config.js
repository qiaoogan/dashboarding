let host

switch (process.env.DASHBOARDING_ENV) {
    case "containerized":
        host = `http://${process.env.DASHBOARDING_BACKEND_HOST}:${process.env.DASHBOARDING_BACKEND_PORT}`
        break
    default:
        host = 'http://localhost:3101'
        break
} 

export default {

  HOST: host,
  TABLE_BATH_PATH: "/tables",
  TABLE_BOOK_PATH: "/stock/book",
  SETTINGS_BATH_PATH: "/settings",
  SETTINGS_ACCOUNT_PATH: "/account",
  SETTINGS_ACCOUNT_DEFAULT_PATH: "/account/default",
}

