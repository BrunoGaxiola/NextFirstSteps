// Utilizar Link de Next permite crear las páginas antes de que el usuario las seleccione y haga recarga completa de la página.
import Link from "next/link"
import {HomeIcon} from '@primer/octicons-react'
import ActiveLink from "../active-link/ActiveLink"

// Arreglo de elementos para items de la NavBar.
const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact Us'},
]

// Navigation Bar.
export const Navbar = () => {
  return (
    <>
    <nav className="text-lg flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href={'/'} className="flex items-center">
            <HomeIcon className="mr-2" size={16} />
            Home
        </Link>
        <div className="flex flex-1"></div>
        
        {
            // Se crean los elementos de la NavBar de forma dinámica, para agregar más a futuro.
            navItems.map( navItem => (
                <ActiveLink key={navItem.path} {...navItem} />
            ))
        }
    </nav>
    </>
  )
}

export default Navbar
