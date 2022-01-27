import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './button';
import login from '../service/login';

const DivComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 0em 1em 0em;
    & input {
        height: 2em;
        margin-bottom: 0.5em;          
    }
    & form {
        display: flex;
        justify-content: space-between;
        margin-top: 1em;
        & div {
            display: flex;
            align-items: center;
        }
    }
`;
const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
    & div {
        display: flex;
        justify-content: center;
        margin: 0.5em 0em;
        & span {
            border-right: 1px solid black;
        }
        & button {
            background-color: transparent;
            border: none;
            &: hover {
                cursor: pointer;
            }
        }
    }
`;

const Login = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    })

    const handleLogin = (user) => {
        const data = login(user);
        if(!!data.error){
            window.alert(data.error);
        } else {
            window.location.href = '/';
        }
    }

    return (
        <>
        <DivComponent>
            <input required
            value={formData.userId}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, userId: e.target.value}))}
            type="text" placeholder=" 아이디"/>
            <input required
            value={formData.password}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password: e.target.value}))}
            type="password" placeholder=" 비밀번호"/>
            <form>
                <div>
                <input type="checkbox" name="checkId"/>
                <label htmlFor="checkId">아이디 저장</label>
                </div>
                <div>
                <input type="checkbox" name="checkOUserOrder"/>
                <label htmlFor="checkLogin">자동 로그인</label>
                </div>
            </form>
        </DivComponent>
        <FooterComponent>
            <Button text="로그인" onClick={() => handleLogin(formData)}></Button>
            <div>
                <button>아이디 찾기</button>
                <span></span>
                <button>비밀번호 찾기</button>
            </div>
            <Link to='/join'>
                <Button text="회원 가입"></Button>
            </Link>
        </FooterComponent>
        </>
    );
}

export default Login;