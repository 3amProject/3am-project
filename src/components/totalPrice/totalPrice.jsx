import styles from './totalPrice.module.css';

const TotalPrice = ({totalPrice, showPrice}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.total}>
                <span>결제금액</span>
                <span>총 {showPrice(totalPrice)}</span>
            </div>
            <button className={styles.cartBtn}>장바구니</button>
        </footer>
    )
}

export default TotalPrice;