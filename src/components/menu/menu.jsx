import styles from './menu.module.css';

const Menu = ({menu}) => {
    console.log(menu);
    return (
        <div className={styles.menu}>
            <div className={styles.imgContainer}>
                <img src={menu.url} alt="" />
            </div>
            <p className={styles.name}>{menu.name}</p>
            <div className={styles.footer}>
                <span className={styles.price}>{menu.price}</span>
                <button>
                    <i className="fas fa-shopping-basket"></i>
                </button>
            </div>
        </div>
    )
}

export default Menu;