'use client';
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.css'
const NavBar = ()=>{
    const currentRoute = usePathname();
    console.log(currentRoute);
    const active = 'nav-link link-primary';
    const inactive='nav-link';
    return(<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(currentRoute==='/') ? active : inactive} aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={(currentRoute==='/about') ? active : inactive} href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={(currentRoute==='/contact') ? active : inactive} href="/contact">Contact</Link>
          </li> 
        </ul>
      </div>
    </div>
  </nav>);
}
export default NavBar;