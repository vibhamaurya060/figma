
import React from 'react'
import '../../styles/navbar.css';
import Image from 'next/image';
import Logo from '../../public/image/logo-w.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navTop'>
      
        <Image src={Logo} alt="logo" className='logo' />
     
        <form className="search-form">
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="search-box"
            />
            <button type="submit" className="search-button">
              <Image src="/image/search-lg.png" alt="search" className='search-icon' width={24} height={24} />
            </button>
          </div>
        </form>
        <div className='bulb-box'>
          <Image src="/image/lightbulb-01.png" alt="bulb" width={18} height={18} className='bulb' />
          <span className='bulb-text'>Inspirations</span>
        </div>
        <div className='like-box'>
          <Image src="/image/heart.png" alt="heart" width={20} height={20} className='heart' />
          <span className='mes'>Mes favoris</span>
          <button className='button-24'>24</button>
        </div>
        <div className='shopping-box'>
          <Image src="/image/shopping-cart-01.png" alt="shopping" width={20} height={20} className='shopping-cart-icon' />
          <span className='panier'>Panier</span>
        </div>
        <div className='profile-box'>
        <div className='profile'></div>
        <span className='fr'>FR</span>
        <Image src="/image/chevron-down.png" alt="chevron-down" width={10} height={10} className='chevron-down' />

        </div>
        
      </div>
      <div className='navBottom'>
        <ul className='nav-links'>
          <li className='art'>ART DE LA TABLE</li>
          <li>MOBILIER</li>
          <li>NAPPAGE</li>
          <li>MATERIEL DE SALLE</li>
          <li>CUISINE</li>
          <li>BARBECUE</li>
          <li>TENTE</li>
          <li>CHAUFFAGE</li>
          <li>PODIUM - PISTE DE DANSE</li>
          <li>SON ET LUMIERE</li>
          <li>PACKS</li>
          <li>CONSOMMABLES</li>
        </ul>
        <div className='underline'></div>
      </div>
    </nav>
  )
}

export default Navbar