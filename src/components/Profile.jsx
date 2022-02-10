import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from '../service/authService';
import { getProfile } from '../service/authService';
import { useState, useEffect } from 'react';

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Ul = styled.ul`
    margin: 2rem 0;
`;

const handleLogout = () => {
    signOut();
    window.location.href='/login';
}

const Profile = () => {
    const [userInfo, setUserInfo] = useState();
    
    useEffect(()=>{
        getProfile().then((result) => setUserInfo(result))
        .catch((error) => console.log(error));
    },[]);
    
    return (
        <Section>
        <h1>마이 페이지</h1>
        <Ul>
            <li>
                <span>이름: </span>
                <span>{userInfo && userInfo.name}</span>
            </li>
            <li>
                <span>아이디: </span>
                <span>{userInfo && userInfo.userId}</span>
            </li>
            <li>
                <span>이메일: </span>
                <span>{userInfo && userInfo.email}</span>
            </li>
            <li>
                <span>주소: </span>
                <span>{userInfo && userInfo.address}</span>
            </li>
            <li>
                <span>전화번호: </span>
                <span>{userInfo && userInfo.phoneNum}</span>
            </li>
        </Ul>
        <div>
            <Link to='/profileEdit'>
                <Button text="회원 정보 수정"></Button>
            </Link>
            <p></p>
            <Button onClick={()=>handleLogout()} text="로그아웃"></Button>
        </div>
        </Section>
    );
}

export default Profile;