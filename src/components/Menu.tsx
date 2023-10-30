import capuchino from '../assets/images/capuchino.png'
import leite from '../assets/images/leite.png'
import preito from '../assets/images/preito.png'
import { Button } from './Button'

const MENUS = [
  {
    title: 'Capuccino',
    price: 'R$ 24,00',
    desc: 'Café expresso , leite vaporizado, espuma e um toque de caramelo.',
    img: capuchino,
    bg: 'linear-gradient(203deg, #F6C7C5 4.72%, #C27D7A 102.83%)'
  },
  {
    title: 'Café ao Leite',
    price: 'R$ 16,00',
    desc: 'O clássico, amado pelos brasileiros, com um toque de sofisticação!',
    img: leite,
    bg: 'linear-gradient(203deg, rgba(250, 250, 250, 0.95) 4.72%, rgba(84, 21, 17, 0.58) 102.83%)'
  },
  {
    title: 'Café Preto',
    price: 'R$ 12,00',
    desc: 'Grãos selecionados feitos no seu método de preparo favorito.',
    img: preito,
    bg: 'linear-gradient(203deg, rgba(10, 9, 9, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 102.83%)'
  }
]

interface Props {
  className?: string
}

export default function Menu({ className = '' }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-14 px-8 lg:grid-cols-3 ${className}`}>
      {MENUS.map(menu => (
        <div
          key={menu.title}
          className="flex flex-col justify-between rounded-3xl bg-primary px-7 py-6 pt-12 text-center text-white"
          style={{ background: menu.bg }}
        >
          <div className="mb-7">
            <img src={menu.img} alt={menu.title} className="h-52 object-cover" />
            <p className="text-xl">{menu.price}</p>
            <p className="mb-6 text-2xl">{menu.title} </p>
            <p className="text-xs">{menu.desc} </p>
          </div>
          <Button> Delivery </Button>
        </div>
      ))}
    </div>
  )
}
