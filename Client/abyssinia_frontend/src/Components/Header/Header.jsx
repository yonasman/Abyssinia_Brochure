import styles from './header.module.css'
import logo from '../../assets/Images/aby_circle_logo.png'
function Header() {
  return (
    <>
      <div className={styles.header_container}>
          <div className={styles.abyssinia_logo}>
              <img src={logo} alt="abyssinia logo" />
          </div>
          <div className={styles.header_links}>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About us</li>
                <li>Contact</li>
              </ul>
          </div>
      </div>
    </>
  )
}

export default Header
