'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import ServerLogo from '@/public/serverlogo.jpg'
import Image from 'next/image'
import DiscordLogo from '@/public/icons8-discord.svg'
import ShoppingTrolley from '@/public/icons8-shopping-trolley-64.png'
import * as React from 'react'
import { toast } from 'sonner'

export function NavTab () {
  const pathName = usePathname()

  return (
        <div className={'border-b border-border/40 p-2 flex flex-row justify-between items-center mr-4'}>
            <div className="pl-12 flex flex-row items-center space-x-6">
                <Link href={'/'} className="flex items-center space-x-2">
                    <Image src={ServerLogo} width={32} height={32} alt="Server Logo" className='rounded-sm'/>
                    <span className="font-bold">
                        {siteConfig.name}
                    </span>
                </Link>
                <nav className="flex items-center text-sm gap-6">
                    <Link href={'/'} className={pathName === '/' ? 'underline underline-offset-4' : ''}>Home</Link>
                    <Link href={'/docs'} className={pathName === '/docs' ? 'underline underline-offset-4' : ''}>Documentation</Link>
                    <Link href={'/changelog'} className={pathName === '/changelog' ? 'underline underline-offset-4' : ''}>Changelog</Link>
                    <Link href={'/policy'} className={pathName === '/policy' ? 'underline underline-offset-4' : ''}>Policy</Link>
                    <p className='font-bold space-x-2'>
                        Server IP: <span 
                        className='text-blue-500 underline hover:cursor-pointer'
                        onClick={() => {
                            toast.success('Copied to clipboard!')
                            navigator.clipboard.writeText('play.enchantedrealms.org')
                        }}
                        >
                            play.enchantedrealms.org
                        </span>
                    </p>
                </nav>
            </div>
            <div className="flex gap-4">
                <Link href={siteConfig.links.discord}>
                    <Image src={DiscordLogo} width={24} height={24} alt="Discord Logo" />
                </Link>
                <Link href={siteConfig.links.shop}>
                    <Image src={ShoppingTrolley} width={24} height={24} alt="Discord Logo" />
                </Link>
            </div>
        </div>
  )
}
