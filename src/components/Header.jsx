import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className="bg-black text-white px-4 flex justify-items-baseline justify-between p-y-2">



      <h1 className="text-2xl font-semibold">Aayush Shrestha</h1>

      <nav className="space-x-5">
        <NavLink to={'/about'}>About</NavLink>
        <NavLink>Contact</NavLink>

      </nav>

    </header>
  )
}
export default Header