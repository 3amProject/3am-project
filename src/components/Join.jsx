import React, { useState } from 'react';
import Button from './Button';
import { signUp } from '../service/authService';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`;
const Input = styled.input`
    height: 2em;
    margin-bottom: 0.5em;
`;

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
            window.alert(data.message);
        })
        .catch((error)=>console.log(error));
    };

    return (
        <Section>
        <h1>회원 가입</h1>
        <Form>
            <Input required
            value={formData.name}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, name: e.target.value}))}
            type="text" placeholder="이름" />
            <Input required
            value={formData.userId}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, userId: e.target.value}))}
            type="text" placeholder="아이디" />
            <Input required
            value={formData.password}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password: e.target.value}))}
            type="password" placeholder="비밀번호" />
            <Input required
            value={formData.password2}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password2: e.target.value}))}
            type="password" placeholder="비밀번호 확인" />
            <Input required
            value={formData.email}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, email: e.target.value}))}
            type="email" placeholder="이메일" />
            <Input required
            value={formData.address}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, address: e.target.value}))}
            type="text" placeholder="주소" />
            <Input required
            value={formData.phoneNum}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, phoneNum: e.target.value}))}
            type="tel" placeholder="전화번호 '-', 공백 없이 입력" />
        </Form>
        <div>
            <Button text="취소"></Button>
            <p></p>
            <Button text="회원 가입" onClick={() => handleSignUp(formData)}></Button>
        </div>
        </Section>
    );
}

export default Join;