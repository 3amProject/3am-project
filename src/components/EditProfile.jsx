import Button from './Button';
import { useRef } from 'react';
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
    margin: 2rem 0;
`;
const Input = styled.input`
    margin-top: 0.5em;
`;

const EditProfile = ({user}) => {
    const nameRef = useRef();
    const idRef = useRef();
    const pwdRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneNumRef = useRef();
    
    return (
        <Section>
        <h1>회원 정보 수정</h1>
        <Form>
            <Input ref={nameRef} type="text" placeholder={user && user.name} />
            <Input ref={idRef} type="text" placeholder={user && user.userId} />
            <Input ref={pwdRef} type="password" placeholder={user && user.password} />
            <Input ref={emailRef} type="email" placeholder={user && user.email} />
            <Input ref={addressRef} type="text" placeholder={user && user.address} />
            <Input ref={phoneNumRef} type="tel" placeholder={user && user.phoneNum} />
        </Form>
        <div>
            <Button text="저장"></Button>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </Section>
    );
}

export default EditProfile;