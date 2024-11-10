import styles from './footer.module.css'
import logo from '../../assets/Images/aby_circle_logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
            <div>
                <img src={logo} alt="abyssinia logo" />
                <p>Abyssinia Tutors and Training Center is an educational institution offering a wide range of learning experiences, from foundational education to specialized skill development, empowering learners of all ages to achieve academic and personal growth.</p>
                <div>
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaInstagram/></a>
                    <a href=""><FaLinkedin/></a>
                    <a href=""><FaTelegram/></a>
                    <a href=""><FaTiktok/></a>
                </div>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
      </div>
    </>
  )
}

export default Footer
