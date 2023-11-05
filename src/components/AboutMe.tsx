import bgCoffee from '../assets/images/bg-coffee.png'

interface Props {
  className?: string
}

export default function AboutMe({ className = '' }: Props) {
  return (
    <div className={`relative flex flex-col items-center justify-center px-8 ${className}`}>
      <img src={bgCoffee} alt="bg-coffee" className="absolute left-0 top-0 w-full" />
      <h1 className="mb-10 mt-40 w-fit border-b-2 border-primary text-center text-4xl"> Cafés</h1>
      <p className="mb-10 text-center">
        Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados.{' '}
      </p>
      <p className="text-base font-bold">{`Veja Todos >`} </p>
    </div>
  )
}
