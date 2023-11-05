import { Button } from './Button'
import logo from '../assets/images/logo.png'
import { useState } from 'react'
import Drawer from './Drawer'
import Navbar from './Navbar'

interface Props {
  className?: string
}

export default function Header({ className = '' }: Props) {
  const [open, setOpen] = useState(false)

  const openDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  return (
    <div className={className}>
      <Drawer open={open} onClose={closeDrawer}>
        <ul className="flex flex-col gap-5 text-xl">
          <Navbar />
        </ul>
      </Drawer>
      <div className="relative z-10 flex items-center justify-between pr-7">
        <div className="flex items-center">
          <div className="mr-6 flex items-center text-2xl">
            <img src={logo} alt="logo" className="w-32" />
            <span className="font-bold">Meow Café </span>
          </div>
          <ul className="hidden space-x-10 text-xl md:flex">
            <Navbar />
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a className="hidden text-primary md:inline">Login</a>
          <Button variant="primary">Delivery</Button>
          <svg
            className="cursor-pointer hover:scale-125 md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={openDrawer}
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  )
}
