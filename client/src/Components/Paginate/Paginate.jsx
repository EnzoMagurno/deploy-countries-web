import { useSelector } from 'react-redux'
import styles from './Paginate.module.css'
import left from './assets/left.svg'
import right from './assets/right.svg'

const Paginate = ({ pages, next, prev }) => {
    let numPage = useSelector(state => state.numPage)
    return (
        <div className={styles.paginate}>

            {numPage > 1 ? (
                <div className={styles.arrow}>
                    <img src={left} alt="left arrow" onClick={prev} className={styles.image} />
                    <p className={styles.paragraph} onClick={prev}>{numPage - 1}</p>

                </div>

            ) : null}

            <h2>{numPage}</h2>

            {numPage < pages ? (

                <div className={styles.arrow}>
                    <p className={styles.paragraph} onClick={next}>{numPage + 1}</p>
                    <img src={right} alt="right arrow" onClick={next} className={styles.image} />
                </div>

            ) : null}

        </div >
    )
}

export default Paginate
