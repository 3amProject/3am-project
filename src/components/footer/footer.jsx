import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = ({onClick}) => {
    return (
        <footer className={styles.footer}>
            <button className={styles.button} onClick={onClick}>
                <i className="fas fa-bars"></i>
            </button>
            <Link to="/">
            <button className={styles.button}>
                <i className="far fa-calendar-check"></i>
            </button>
            </Link>
            <Link to="/profile">
            <button className={styles.button}>
                <i className="fas fa-user"></i>
            </button>
            </Link>
        </footer>
    )
};

export default Footer;