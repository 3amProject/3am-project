import styles from './footer.module.css';

function Footer(){
    return (
        <footer className={styles.footer}>
            <button className={styles.button}>
                <i className="fas fa-bars"></i>
            </button>
            <button className={styles.button}>
                <i className="far fa-calendar-check"></i>
            </button>
            <button className={styles.button}>
                <i className="fas fa-user"></i>
            </button>
        </footer>
    )
}

export default Footer;