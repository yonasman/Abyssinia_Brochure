import styles from './ServicesWrapper.module.css'
import tutorImage from '../../assets/Images/tutor.png'
import ServiceCard from '../ServiceCard/ServiceCard'
import trainingImg from '../../assets/Images/online-course.png'
import examPrep from '../../assets/Images/exam-prep.png'
import remedialPrep from '../../assets/Images/remedial.png'
import gatImage from '../../assets/Images/gatimage.png'
import premiumImage from '../../assets/Images/premium-class.png'

function ServicesWrapper() {
    let serviceInfo = [
        {
            id: 1,
            image: tutorImage,
            title: "Abyssinia In-person and online tutoring",
            desc:"We offer personalized tutoring for students from Kindergarten to Grade 12, available both in-person and online"
        },
        {
            id: 2,
            image: trainingImg,
            title: "Abyssinia Digital Training",
            desc:"Unlock your potential with our hands-on training programs in Graphics Design, Programming, Digital Marketing, and more."
        },
        {
            id: 3,
            image: examPrep,
            title: "Abyssinia Exam Preparation",
            desc:"Prepare for success with Abyssinia’s specialized exam prep for Grade 12, Grade 6, SAT, Duolingo, IELTS, and more."
        },
        {
            id: 4,
            image: remedialPrep,
            title: "Abyssinia Remedial Prep",
            desc:"Abyssinia offers targeted remedial support and exam preparation to help students strengthen foundational skills and excel academically."
        },
        {
            id: 5,
            image: gatImage,
            title: "Abyssinia GAT Prep",
            desc:"Master the Graduate Admission Test (GAT) with Abyssinia’s comprehensive prep program. Our expert-led sessions focus on critical reasoning, quantitative skills, and analytical writing, and more."
        },
        {
            id: 6,
            image: premiumImage,
            title: "Abyssinia Premium Tutoring & Training",
            desc:"Experience top-tier learning with our services. We offer personalized, one-on-one instruction across all subjects, including exam preparation, and others"
        }
    ]
  return (
    <>
        <h1>Services</h1>
        <div className={styles.servicesWrapper}>
        {serviceInfo.map((info) => (
            <div key={info.id}>
                <ServiceCard image={info.image} title={info.title} desc={info.desc}/>
            </div>
        ))}
      </div>
    </>
  )
}

export default ServicesWrapper
