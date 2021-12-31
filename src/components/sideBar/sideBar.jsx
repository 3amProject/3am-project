import styles from './sideBar.module.css';

const SideBar = ({onClick, isOpen}) => {
    return(
        <section className={isOpen ? styles.sideBar : styles.hidden}>
        <div className={styles.close} onClick={onClick}>
            <button className={styles.closeBtn}>
                <i className="fas fa-times"></i>
            </button>
        </div>
        <div className={styles.buttons}>
            <button className={styles.button}>회원 가입</button>
            <button className={styles.button}>로그인</button>
        </div>
        <ul className={styles.ul}>
            <li className={styles.li}>메뉴</li>
            <li className={styles.li}>고객센터</li>
        </ul>
        </section>
    );
};

export default SideBar;