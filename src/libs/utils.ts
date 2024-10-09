export {}

declare global {
  interface Window {
    assets_require(path: string): string
  }
}

window.assets_require = (path: string) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href
}