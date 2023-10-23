import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from 'lucide-react'

import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo an personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          {/* name */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinícius" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Fernandes" />
                </Input.Root>
              </div>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <MailIcon className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="vinicius@email.com"
              />
            </Input.Root>
          </div>

          {/* photo */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* role */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Dev" />
            </Input.Root>
          </div>

          {/* country */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          {/* timezone */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          {/* bio */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <BoldIcon
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ItalicIcon
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <LinkIcon
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListIcon
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrderedIcon
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia.
                I specialist in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* portfolio projects */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
