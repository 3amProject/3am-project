import styles from './header.module.css';

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <i className="fas fa-shipping-fast"></i>
                <span> 새벽세시</span>
            </div>
            <div className={styles.right}>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </header>
    )
}

export default Header;