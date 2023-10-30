import bgMeoEnjoy from '../assets/images/bg-meoenjoy.png'

export default function MeoEnjoy() {
  return (
    <div className="flex flex-col text-white lg:flex-row">
      <div
        className="rounded-tl-5xl rounded-bl-5xl relative w-full p-11 lg:w-2/3"
        style={{ background: 'linear-gradient(203deg, rgba(84, 21, 17, 0.66) 4.72%, #F3C7C4 102.83%)' }}
      >
        <h1 className="mb-2 text-7xl font-bold">
          Meow <br /> Enjoy
        </h1>
        <hr className="h-1 w-14 bg-white mb-4" />
        <p className="mb-4">Todos os sábados e domingos</p>
        <p className="mb-4">Venha tomar o seu brunch com a gente!</p>
        <p className="text-primary">Faça uma reserva </p>
        <img src={bgMeoEnjoy} alt="bg-meoenjoy" className="absolute -right-40 -top-24" />
      </div>
      <div
        className="rounded-tr-5xl rounded-br-5xl w-full p-11 lg:w-1/3"
        style={{ background: 'linear-gradient(203deg, #8F423D 4.72%, #FFF 102.83%)' }}
      >
        <p>Onde estamos</p>
      </div>
    </div>
  )
}
