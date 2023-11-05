import bgHeader from '../assets/images/bg-header.png'

interface Props {
  className?: string
}

export default function Introduction({ className  = ''}: Props) {
  return (
    <div className={`mt-6 flex pl-7 ${className}`}>
      <div>
        <p className="mb-2 text-base font-bold">Sabor inesquecível</p>
        <h2 className="mb-6 text-7xl font-bold">
          Meow <br /> Café
        </h2>
        <p className="max-w-1/2 text-xs">
          Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e
          seu melhor amigo.{' '}
        </p>
      </div>
      <img
        src={bgHeader}
        alt="bg-header"
        className="absolute right-0 top-0 translate-x-1/2 object-contain md:translate-x-0"
      />
    </div>
  )
}
