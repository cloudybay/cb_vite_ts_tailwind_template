export const assets_require = (path: string) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href
}