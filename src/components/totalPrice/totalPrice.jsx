import styles from './totalPrice.module.css';

const TotalPrice = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.total}>
                <span>결제금액</span>
                <span>총</span>
            </div>
            <button className={styles.cartBtn}>장바구니</button>
        </footer>
    )
}

export default TotalPrice;