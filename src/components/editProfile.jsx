import Button from './button';
import { useRef } from 'react';
import styled from 'styled-components';

const SectionComponent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`;
const InputComponent = styled.input`
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
        <SectionComponent>
        <h1>회원 정보 수정</h1>
        <FormComponent>
            <InputComponent ref={nameRef} type="text" placeholder={user && user.name} />
            <InputComponent ref={idRef} type="text" placeholder={user && user.userId} />
            <InputComponent ref={pwdRef} type="password" placeholder={user && user.password} />
            <InputComponent ref={emailRef} type="email" placeholder={user && user.email} />
            <InputComponent ref={addressRef} type="text" placeholder={user && user.address} />
            <InputComponent ref={phoneNumRef} type="tel" placeholder={user && user.phoneNum} />
        </FormComponent>
        <div>
            <Button text="저장"></Button>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </SectionComponent>
    );
}

export default EditProfile;