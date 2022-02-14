import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from '../../service/authService';
import { getProfile } from '../../service/authService';
import { useState, useEffect } from 'react';

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: pink;
    & .title {
        margin: 10px 0px;
        font-size: 20px;
    }
    & .subTitle {
        margin: 20px 0px;
        font-size: 18px;
    }

`;
const Ul = styled.ul`
    margin: 20px 0;
    & li {
        margin-bottom: 10px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        & .userInfoTitle {
            width: 100px;
            padding: 5px 0px;
            text-align: center;
            margin-right: 10px;
        background-color: green;
        }
    }
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
        <>
        {
        userInfo ?
        (<Section>
        <h1 className="title">마이 페이지</h1>
        <h2 className="subTitle">회원 정보</h2>
        <Ul>
            <li>
                <span className="userInfoTitle">이름</span>
                <span>{userInfo.userInfo.name}</span>
            </li>
            <li>
                <span className="userInfoTitle">아이디</span>
                <span>{userInfo.userInfo.userId}</span>
            </li>
            <li>
                <span className="userInfoTitle">이메일</span>
                <span>{userInfo.userInfo.email}</span>
            </li>
            <li>
                <span className="userInfoTitle">주소</span>
                <span>{userInfo.userInfo.address}</span>
            </li>
            <li>
                <span className="userInfoTitle">전화번호</span>
                <span>{userInfo.userInfo.phoneNum}</span>
            </li>
        </Ul>
        <h2 className="subTitle">주문 내역</h2>
        {/* {userInfo.orderHistory.length > 0 ?
        (
            user.orderHistory.length > 1 ?
            (orderHistory.map((v) => {
                //
            })) :
            ()
        ) :
        (<p></p>)
        } */}
        <div>
            <Link to='/profileEdit'>
                <Button text="회원 정보 수정" />
            </Link>
            <p></p>
            <Button onClick={()=>handleLogout()} text="로그아웃" />
        </div>
        </Section>) :
        (<Loading />)
        }
        </>);
}

export default Profile;