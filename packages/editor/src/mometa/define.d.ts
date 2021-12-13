declare module '@@__mometa-external/react-dnd' {
  export * from 'react-dnd'
}

declare module '@@__mometa-external/react' {
  export * from 'react'
  export { default as default } from 'react'
}

declare module '@@__mometa-external/react-dom' {
  export * from 'react-dom'
  export { default as default } from 'react-dom'
}

declare module '@@__mometa-external/shared' {
  let exp: any
  export = exp

  export const useHeaderStatus: any
  export const useOveringNode: any
  export const useSelectedNode: any
  export const api: any
}

interface MometaData {
  start: any
  end: any
  name: string
  text: string
  filename: string
  emptyChildren: boolean
  hash: string
  container?: {
    text: string
    hash: string
  }
}