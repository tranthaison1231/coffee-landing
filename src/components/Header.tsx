import { Button } from "./Button";
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between pr-7">
      <div className="flex items-center">
        <div className="mr-6 flex items-center text-2xl">
          <img src={logo} alt="logo" className="w-32" />
          <span className="font-bold">Meow Café </span>
        </div>
        <ul className="hidden space-x-10 text-xl md:flex">
          <a href="" className="border-b-4 border-primary">
            Início
          </a>
          <a href="">Produtos</a>
          <a href="">Sobre</a>
        </ul>
      </div>
      <div className="space-x-4 flex items-center">
        <a className="hidden text-primary md:inline">Login</a>
        <Button variant="primary">Delivery</Button>
        <svg
          className="md:hidden cursor-pointer hover:scale-125"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </div>
    </div>
  )
}
