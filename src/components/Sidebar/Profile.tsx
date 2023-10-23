/* eslint-disable @next/next/no-img-element */

import { LogOutIcon } from 'lucide-react'

import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/fernandes-vinicius.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vinícius Fernandes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          viniciusfernandes6991@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOutIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}
