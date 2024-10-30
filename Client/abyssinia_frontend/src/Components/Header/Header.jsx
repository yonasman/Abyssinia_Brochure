import styles from './header.module.css'
function Header() {
  return (
    <>
      <div className={styles.header_container}>
          <div className={styles.abyssinia_logo}>
              <img src="" alt="" />
              <p>ABYSSINIA</p>
          </div>
          <div className={styles.header_links}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
              </ul>
          </div>
      </div>
    </>
  )
}

export default Header
