import styles from './editProfile.module.css';
import Button from '../button/button';
import { useRef } from 'react';

const EditProfile = ({user}) => {
    const nameRef = useRef();
    const idRef = useRef();
    const pwdRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneNumRef = useRef();
    
    return (
        <>
        <section className={styles.editProfile}>
        <h1 className={styles.title}>회원 정보 수정</h1>
        <form className={styles.infos} method="post">
            <input ref={nameRef} className={styles.input} type="text" placeholder={user && user.name} />
            <input ref={idRef} className={styles.input} type="text" placeholder={user && user.userId} />
            <input ref={pwdRef} className={styles.input} type="password" placeholder={user && user.password} />
            <input ref={emailRef} className={styles.input} type="email" placeholder={user && user.email} />
            <input ref={addressRef} className={styles.input} type="text" placeholder={user && user.address} />
            <input ref={phoneNumRef} className={styles.input} type="tel" placeholder={user && user.phoneNum} />
        </form>
        <div className={styles.buttons}>
            <Button text="저장"></Button>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </section>
        </>
    );
}

export default EditProfile;