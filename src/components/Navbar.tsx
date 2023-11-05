const NAVBAR = ['Inicio', 'Produtos', 'Sobre', 'Blog']

export default function Navbar() {
  return (
    <>
      {NAVBAR.map(nav => (
        <a key={nav} href="" className="border-b-4 border-transparent hover:border-b-4 hover:border-primary">
          {nav}
        </a>
      ))}
    </>
  )
}
