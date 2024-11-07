import styles from './serviceCard.module.css'

function ServiceCard({image,altText,title,desc}) {
  return (
    <>
        <div className={styles.cardContainer}>
            <div>
                <img src={image} alt={altText} />
            </div>
            <div>
                <p>{title}</p>
                <p>{desc}</p>
            </div>
        </div>
    </>
  )
}

export default ServiceCard
