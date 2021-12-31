import styles from './join.module.css';

const Join = () => {
    return (
        <>
        <h1 className={styles.title}>회원 가입</h1>
        <div className={styles.inputs}>
        <input className={styles.input} type="text" placeholder="아이디" />
        <input className={styles.input} type="password" placeholder="비밀번호" />
        <input className={styles.input} type="password" placeholder="비밀번호 확인" />
        <input className={styles.input} type="text" placeholder="이름" />
        <input className={styles.input} type="text" placeholder="주소" />
        <input className={styles.input} type="tel" placeholder="전화번호" />
        </div>
        <div className={styles.buttons}>
            <Button text="취소"></Button>
            <Button text="회원 가입"></Button>
        </div>
        </>
    );
}

export default Join;