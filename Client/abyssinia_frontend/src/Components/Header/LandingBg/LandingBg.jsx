import styles from '../LandingBg/LandingBg.module.css'
import { useState, useEffect } from 'react'

function LandingBg() {
    const fullText = ["Abyssinia Tutors And Training Center","Empowering Minds, Shaping Futures!"]
    const typingSpeed = 100;
    const deletingSpeed = 100; 
    const delayBetweenCycles = 1000 // delay before restarting looping
    const cursorBlinkSpeed = 600

    // initialize different states of text
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting]  = useState(false)
    const [charIndex, setCharIndex] = useState(0)
    const [textIndex, setTextIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(()=> {
        let timer;
        let currentText = fullText[textIndex]

        if(isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0,-1))
                setCharIndex((prev) => prev - 1)

                // when finish deleting
                if(charIndex === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % fullText.length);
                }
            },deletingSpeed)
        } else {
            timer = setTimeout(() => {
                setDisplayedText(currentText.slice(0,charIndex + 1))
                setCharIndex((prev) => prev + 1)
                
                if(charIndex === currentText.length - 1) {
                    setTimeout(() => setIsDeleting(true), delayBetweenCycles)
                }
            },typingSpeed)
        }
        return () => clearTimeout(timer);
        
    },[charIndex, isDeleting, fullText,textIndex])

    // toggle cursor every cursor blink
    useEffect(() => {
        const cursorTimer =  setInterval(() => {
            setShowCursor((prev) => !prev)
        },cursorBlinkSpeed)
        return () => clearInterval(cursorTimer);
    },[])

  return (
    <>
      <div className={styles.landingBgContainer}>
        <p className={styles.aby_text}>{displayedText}<span className={showCursor ? styles.visible : styles.hidden}>|</span></p>
      </div>
    </>
  )
}

export default LandingBg
