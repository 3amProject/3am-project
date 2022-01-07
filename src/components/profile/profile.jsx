import styles from './profile.module.css';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const Profile = ({user}) => {
    return (
        <>
        <section className={styles.profile}>
        <h1 className={styles.title}>마이 페이지</h1>
        <ul className={styles.infos}>
            <li className={styles.info}>
                <span>이름</span>
                <span>{user && user.name}</span>
            </li>
            <li className={styles.info}>
                <span>아이디</span>
                <span>{user && user.userId}</span>
            </li>
            <li className={styles.info}>
                <span>비밀번호</span>
                <span>{user && user.password}</span>
            </li>
            <li className={styles.info}>
                <span>이메일</span>
                <span>{user && user.email}</span>
            </li>
            <li className={styles.info}>
                <span>주소</span>
                <span>{user && user.address}</span>
            </li>
            <li className={styles.info}>
                <span>전화번호</span>
                <span>{user && user.phoneNum}</span>
            </li>
        </ul>
        <div className={styles.buttons}>
            <Link to='/profileEdit'>
                <Button text="회원 정보 수정"></Button>
            </Link>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </section>
        </>
    );
}

export default Profile;