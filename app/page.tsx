/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Home () {
  return (
    <div className="pl-12 p-2 absolute h-full w-full bg-cover bg-main-background">
      <div className='flex justify-center flex-col items-center space-y-6 h-full w-full'>
        <div className="text-6xl font-bold">
          <h1>Enchanted Realms</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-xs">
          <Button variant={'outline'}>Discord</Button>
          <Button
            variant={'outline'}
            onClick={() => {
              toast.success('Copied to clipboard!')
              navigator.clipboard.writeText('Coming soon...')
            }}
          >
            Server IP
          </Button>
          <Button variant={'outline'}>Shop</Button>
        </div>
      </div>
    </div>
  )
}
