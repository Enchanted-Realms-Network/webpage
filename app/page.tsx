'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Home () {
  return (
    <div className="pl-12 p-2 absolute h-full w-full bg-cover bg-main-background">
      <div className='flex justify-center flex-col items-center space-y-6 h-full w-full'>
        <div className="text-6xl font-bold">
          <h1>Enchanted Realms</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-xs">
          <Link href={siteConfig.links.discord}><Button variant={'outline'}>Discord</Button></Link>
          <Button
            variant={'outline'}
            onClick={() => {
              toast.success('Copied to clipboard!')
              navigator.clipboard.writeText('play.enchantedrealms.org')
            }}
          >
            Server IP
          </Button>
          <Link href={siteConfig.links.shop}><Button variant={'outline'}>Shop</Button></Link>
        </div>
      </div>
    </div>
  )
}
