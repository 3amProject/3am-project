import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { signOut } from '../../service/authService';
import { getProfile } from '../../service/authService';

import ProfileOrders from './ProfileOrders';
import Loading from '../../components/Loading';
import Button from '../../components/Button/Button';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    & .title {
        margin: 50px 0;
    }
    & .subTitle {
        margin: 20px 0px;
        font-size: 18px;
    }
    & .buttons {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
    }

`;
const Ul = styled.ul`
    margin: 50px 0;
    & li {
        margin-bottom: 10px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        & .userInfoTitle {
            width: 100px;
            box-sizing: border-box;
            padding: 5px 0px 5px 20px;
            font-weight: 700;
        }
    }
`;


const Profile = () => {
    const [userData, setUserData] = useState();

    const handleLogout = () => {
        signOut();
        window.location.href='/login';
    }
    
    useEffect(()=>{
        getProfile().then((result) => setUserData(result))
        .catch((error) => console.log(error));
    },[]);

    return (
        <>
        {
        userData ?
        (
        <Section>
        <h1 className="title">마이 페이지</h1>
        <h2 className="subTitle">회원 정보</h2>
        <Ul>
            <li>
                <span className="userInfoTitle">이름</span>
                <span>{userData.userInfo.name}</span>
            </li>
            <li>
                <span className="userInfoTitle">아이디</span>
                <span>{userData.userInfo.userId}</span>
            </li>
            <li>
                <span className="userInfoTitle">이메일</span>
                <span>{userData.userInfo.email}</span>
            </li>
            <li>
                <span className="userInfoTitle">주소</span>
                <span>{userData.userInfo.address}</span>
            </li>
            <li>
                <span className="userInfoTitle">전화번호</span>
                <span>{userData.userInfo.phoneNum}</span>
            </li>
        </Ul>
        <h2 className="subTitle">주문 내역</h2>
        {userData.orderHistory.length > 0 ?
        (userData.orderHistory.length > 1 ? (
            userData.orderHistory.map((v)=>{
                const { id, deliveryDate, orderTotalPrice, orders } = userData.orderHistory;
                return (
                <ProfileOrders
                key={id}
                date={deliveryDate}
                totalPrice={orderTotalPrice}
                orders={orders}
                />);
            })
        ) : 
            <ProfileOrders 
            date={userData.orderHistory[0].deliveryDate}
            totalPrice={userData.orderHistory[0].orderTotalPrice}
            orders={userData.orderHistory[0].orders}
            />
        ) 
        : <p></p>}
        <div className="buttons">
            <Button onClick={()=>{window.location.href = '/profileEdit'}} text="회원 정보 수정" />
            <Button onClick={()=>handleLogout()} text="로그아웃" />
        </div>
        </Section>) :
        (<Loading />)
        }
        </>);
}

export default Profile;