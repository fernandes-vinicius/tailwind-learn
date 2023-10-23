'use client'

import React from 'react'

export type RootProps = React.ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = React.createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = React.useId()
  const [files, setFiles] = React.useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => React.useContext(FileInputContext)
