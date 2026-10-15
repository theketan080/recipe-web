import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex  items-center justify-center gap-x-10 textt-sm mb-10">

      <NavLink className={(e)=>e.isActive ? "text-red-300" :""} to="/">Home</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-300": "" } to="/recipes">Recipes</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-300" :""} to="/create-recipe">Create Recipe</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-300" :""} to="/fav">Favourite</NavLink>


    </div>
  )
}

export default Navbar
