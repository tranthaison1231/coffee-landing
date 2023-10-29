import Header from "./components/Header";
import Introduction from "./components/Introduction";

export default function App() {
  return (
    <div className="bg-background font-poppins text-primary">
      <div className="relative mx-auto max-w-6xl sm:py-16">
        <Header />
        <Introduction />
      </div>
    </div>
  )
}
