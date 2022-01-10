import React, { useRef, useState } from 'react';
import styles from './join.module.css';
import Button from '../button/button';
import signUp from '../../service/signUp';

// const SectionComponent = styled.div`
// `;

const Join = () => {
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        password: '',
        password2: '',
        email: '',
        address: '',
        phoneNum: ''
    });
    
    const handleSignUp = (user) => {
        const userInfo = signUp(user, ['name','userId','password','password2','email','address','phoneNum']);
        userInfo.then((data) => {
            if (!!data.error) {
                window.alert(data.error);
            } else {
                data = data.data.data;
                if (data.messageType === 'success') {
                    window.location.href = '/';
                }
                window.alert(data.message);
            }
        });
    };

    return (
        <section className={styles.join}>
        <h1 className={styles.title}>회원 가입</h1>
        <form className={styles.inputs}>
            <input required
            value={formData.name}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, name: e.target.value}))}
            className={styles.input} type="text" placeholder="이름" />
            <input required
            value={formData.userId}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, userId: e.target.value}))}
            className={styles.input} type="text" placeholder="아이디" />
            <input required
            value={formData.password}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password: e.target.value}))}
            className={styles.input} type="password" placeholder="비밀번호" />
            <input required
            value={formData.password2}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password2: e.target.value}))}
            className={styles.input} type="password" placeholder="비밀번호 확인" />
            <input required
            value={formData.email}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, email: e.target.value}))}
            className={styles.input} type="email" placeholder="이메일" />
            <input required
            value={formData.address}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, address: e.target.value}))}
            className={styles.input} type="text" placeholder="주소" />
            <input required
            value={formData.phoneNum}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, phoneNum: e.target.value}))}
            className={styles.input} type="tel" placeholder="전화번호 '-', 공백 없이 입력" />
        </form>
        <div className={styles.buttons}>
            <Button text="취소"></Button>
            <p></p>
            <Button text="회원 가입" onClick={() => handleSignUp(formData)}></Button>
        </div>
        </section>
    );
}

export default Join;