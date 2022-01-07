import React, { useRef } from 'react';
import styles from './join.module.css';
import Button from '../button/button';
import { signUp } from '../../service/signUp';

const Join = () => {
    const nameRef = useRef();
    const idRef = useRef();
    const pwdRef = useRef();
    const pwd2Ref = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneNumRef = useRef();
    
    const handleSignUp = () => {
        const user = {
            name : nameRef.current.value || '',
            userId : idRef.current.value || '',
            password : pwdRef.current.value || '',
            password2 : pwd2Ref.current.value || '',
            email : emailRef.current.value || '',
            address : addressRef.current.value || '',
            phoneNum : phoneNumRef.current.value || '',
        }
        signUp(user);
    }

    return (
        <section className={styles.join}>
        <h1 className={styles.title}>회원 가입</h1>
        <form className={styles.inputs} method="post">
            <input ref={nameRef} className={styles.input} type="text" placeholder="이름" />
            <input ref={idRef} className={styles.input} type="text" placeholder="아이디" />
            <input ref={pwdRef} className={styles.input} type="password" placeholder="비밀번호" />
            <input ref={pwd2Ref} className={styles.input} type="password" placeholder="비밀번호 확인" />
            <input ref={emailRef} className={styles.input} type="email" placeholder="이메일" />
            <input ref={addressRef} className={styles.input} type="text" placeholder="주소" />
            <input ref={phoneNumRef} className={styles.input} type="tel" placeholder="전화번호 '-', 공백 없이 입력" />
        </form>
        <div className={styles.buttons}>
            <Button text="취소"></Button>
            <p></p>
            <Button text="회원 가입" onClick={handleSignUp}></Button>
        </div>
        </section>
    );
}

export default Join;