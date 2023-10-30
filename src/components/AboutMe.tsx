import bgCoffee from '../assets/images/bg-coffee.png'

interface Props {
  className?: string
}

export default function AboutMe({ className = ''  }: Props) {
  return (
    <div className={`flex justify-center relative flex-col items-center px-8 ${className}`}>
      <img src={bgCoffee} alt="bg-coffee" className="absolute w-full top-0 left-0"/>
      <h1 className="text-center text-4xl mb-10 border-b-2 mt-40 border-primary w-fit"> Cafés</h1>
      <p className="text-center mb-10">Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados. </p>
      <p className="text-base font-bold">{`Veja Todos >`} </p>
    </div>
  )
}
