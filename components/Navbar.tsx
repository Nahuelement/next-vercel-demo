
import { ActiveLink } from "./ActiveLink"
import styles from './navbar.module.css'
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <div>
        <nav className={styles['menu-contain']}>
          {
            menuItems.map((link,i)=>(
              <ActiveLink 
              key={i}
              text = {link.text}
              href={link.href}
              />
            )

            )
          }
     
</nav>
    </div>
  )
}
