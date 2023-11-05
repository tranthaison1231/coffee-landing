import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Menu from './components/Menu'
import MeoEnjoy from './components/MeoEnjoy'

export default function App() {
  return (
    <div className="bg-background font-poppins text-primary">
      <div className="relative mx-auto max-w-6xl sm:py-16">
        <Header />
        <Introduction />
      </div>
      <AboutMe />
      <div className="mx-auto mt-12 max-w-6xl sm:py-16">
        <Menu className="mb-32" />
        <MeoEnjoy />
      </div>
    </div>
  )
}
