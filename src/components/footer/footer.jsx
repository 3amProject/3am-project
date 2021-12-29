import styles from './footer.module.css';

function Footer(){
    return (
        <footer className={styles.footer}>
            <button>
                <i className="fas fa-bars"></i>
            </button>
            <button>
                <i className="far fa-calendar-check"></i>
            </button>
            <button>
                <i className="fas fa-user"></i>
            </button>
        </footer>
    )
}

export default Footer;