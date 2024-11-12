import styles from './footer.module.css'
import logo from '../../assets/Images/aby_circle_logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.contents_container}>
        <div className={styles.left_footer_wrapper}>
                <img src={logo} alt="abyssinia logo" />
                <p>Abyssinia Tutors and Training Center is an educational institution offering a wide range of learning experiences, from foundational education to specialized skill development, empowering learners of all ages to achieve academic and personal growth.</p>
                <div className={styles.social_media_icons_wrapper}>
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaInstagram/></a>
                    <a href=""><FaLinkedin/></a>
                    <a href=""><FaTelegram/></a>
                    <a href=""><FaTiktok/></a>
                </div>
            </div>
            <div className={styles.right_footer_wrapper}>
              <div className={styles.left_links_wrapper}>
                <p>About</p>
                  <ul>
                      <a href="#"><li>Home</li></a>
                      <a href="#"><li>Services</li></a>
                      <a href="#"><li>Contact</li></a>
                      <a href="#"><li>Team</li></a>
                  </ul>
              </div>
              <div className={styles.right_links_wrapper}>
              <p>Help</p>
                <ul>
                    <a href="#"><li>Privacy Policy</li></a>
                    <a href="#"><li>Terms and conditions</li></a>
                    <a href="#"><li>Partners</li></a>
                </ul>
              </div>
            </div>
        </div>
        <p>&copy;2024 All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
