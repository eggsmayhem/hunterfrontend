import styles from '@/styles/Home.module.css'

interface NewsProps {
    newsArray: string[];
}

function Newspaper({newsArray}: NewsProps) {
    if (newsArray.length < 1) {
        return null
    }
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.sizeIn}>
                <div className={styles.newspaper}>
                    <div className={styles.title}>
                        <h3 className={styles.h3news}>Rainy Cold</h3>  <h1 className={styles.h1news}>News for Humans</h1> <h3 className={styles.h3news}>6 A.M. Extra </h3>
                    </div>
                    <hr/>
                    <h4 className={styles.h4news}><span>Vol XVI</span><span>$3.50</span></h4>
                    <hr/>
                    <h2 className={styles.h2news}>{newsArray && newsArray[0]}</h2>
                    <p className={styles.pnews}>{newsArray && newsArray[1]}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Newspaper;