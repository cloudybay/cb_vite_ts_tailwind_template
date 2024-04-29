import i18n from "./i18n"

export const i18nRoute = (to: any) => {
  return {
    ...to,
    query: {
      ...to.query,
      lang: i18n.global.locale.value,
    }
  }
}

export const page404 = () => {
  return {
    name: 'NotFound',
    query: {
      'path': encodeURI(location.pathname),
      'search': encodeURI(location.search)
    }
  }
}

export const page500 = () => {
  return {
    name: 'InternalServerError',
    query: {
      'path': encodeURI(location.pathname),
      'search': encodeURI(location.search)
    }
  }
}
