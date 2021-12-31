import styles from './profile.module.css';
import Button from '../button/button';

const Profile = () => {
    return (
        <>
        <section className={styles.profile}>
        <h1 className={styles.title}>마이 페이지</h1>
        <ul className={styles.infos}>
            <li className={styles.info}>
                <span>이름</span>
                <span></span>
            </li>
            <li className={styles.info}>
                <span>아이디</span>
                <span></span>
            </li>
            <li className={styles.info}>
                <span>비밀번호</span>
                <span></span>
            </li>
            <li className={styles.info}>
                <span>주소</span>
                <span></span>
            </li>
            <li className={styles.info}>
                <span>전화번호</span>
                <span></span>
            </li>
        </ul>
        <div className={styles.buttons}>
            <Button text="회원 정보 수정"></Button>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </section>
        </>
    );
}

export default Profile;