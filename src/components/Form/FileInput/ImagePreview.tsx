'use client'

import React from 'react'
import { UserIcon } from 'lucide-react'

import { useFileInput } from './Root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = React.useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <UserIcon className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      src={previewURL}
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
