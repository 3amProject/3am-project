import styles from './menu.module.css';

const Menu = ({menu}) => {
    const showPrice = (price) => {
        let newPrice = String(price).split('').reverse();
        newPrice.splice(3,0,',');
        return newPrice.reverse().join('') + '원';
    }
    return (
        <div className={styles.menu}>
            <div className={styles.imgContainer}>
                <img src={menu.url} alt="img" />
            </div>
            <p className={styles.name}>{menu.name}</p>
            <div className={styles.footer}>
                <span className={styles.price}>{showPrice(menu.price)}</span>
                <button className={styles.cartBtn}>
                    <i className="fas fa-shopping-basket"></i>
                </button>
            </div>
        </div>
    )
}

export default Menu;