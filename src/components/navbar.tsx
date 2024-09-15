import React from 'react'
import { ModeToggle } from './theme-toogle-button'
import Link from 'next/link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function Navbar() {

  return (
    <nav className='flex justify-between'>
      <Link href="/">
      <h1 className='font-bold text-2xl'>
        TaskMaster
      </h1>
      </Link>
      <div className='flex gap-x-2 items-center'>
        <Button>
          <Link href="/new">
            Create task
          </Link>
        </Button>
        <ModeToggle/>
      </div>
    </nav>
  )
}

export default Navbar
