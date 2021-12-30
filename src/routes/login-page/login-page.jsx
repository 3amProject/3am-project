import React from 'react';
import Button from '../../components/button/button';
import styles from './login-page.module.css';

const LoginPage = () => {
    return(
        <div className={styles.loginPage}>
        <section className={styles.login}>
            <header className={styles.header}>
            <button className={styles.closeBtn}>
                <i className="fas fa-times"></i>
            </button>
                <h1>로그인</h1>
                <div className={styles.buttons}>
                    <button className={styles.typeSelectBtn}>회원</button>
                    <button className={styles.typeSelectBtn}>비회원</button>
                </div>
            </header>
            <main className={styles.main}>
                <input type="text" className={styles.idInput} placeholder=" 아이디"/>
                <input type="text" className={styles.pwInput} placeholder=" 비밀번호"/>
                <div className={styles.checks}>
                    <div className={styles.check}>
                    <input type="checkbox" name="checkId" className={styles.checkId}/>
                    <label htmlFor="checkId"> 아이디 저장</label>
                    </div>
                    <div className={styles.check}>
                    <input type="checkbox" name="checkLogin" className={styles.checkLogin}/>
                    <label htmlFor="checkLogin"> 자동 로그인</label>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <Button className={styles.loginBtn} text="로그인"></Button>
                <div className={styles.findBtns}>
                    <button className={styles.findIdBtn}>아이디 찾기</button>
                    <button className={styles.findPwBtn}>비밀번호 찾기</button>
                </div>
                <Button className={styles.loginBtn} text="회원 가입"></Button>
            </footer>
        </section>
        </div>
    )
}

export default LoginPage;