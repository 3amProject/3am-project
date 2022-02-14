import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Button from '../../components/Button';
import { getOrderPage, postOrder } from "../../service/authService";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const Section = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const Main = styled.main`
    background-color: beige;
    width: 50vw;
    max-width: 500px;
    & form {
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;

const UserOrderPage = ({onClick, isOpen}) => {
    const [userOrderInfo, setUserOrderInfo] = useState();

    useEffect(()=>{
        getOrderPage()
        .then((result)=>setUserOrderInfo(result));
    },[]);

    const getTotalQty = () => {
        if(userOrderInfo.cartList){
            const list = userOrderInfo.cartList.map((v)=>v.productQty);
            const sum = list.reduce((prev, curr) => prev + curr);
            return sum;
        }
    }

    const getTotalPrice = () => {
        if(userOrderInfo.cartList){
            const list = userOrderInfo.cartList.map((v)=>v.totalPrice);
            const sum = list.reduce((prev, curr) => prev + curr);
            return sum;
        }
    }

    const handleOrder = async() => {
        if(!window.confirm('결제를 진행하시겠습니까?')){
            alert('결제를 취소하였습니다');
        } else {
            const res = await postOrder();
            if(res){
                window.alert('주문이 완료되었습니다 🥳');
                return res;
            }
        }
    }

    return (
        <>
        {userOrderInfo ? 
        (
        <Section>
        <Header/>
        <Main>
            <h1>주문 상품 정보</h1>
            <ul>
                {userOrderInfo.cartList.map((v)=>{
                    const {productName, productQty, totalPrice} = v;
                    return (
                    <li>
                        <p>{productName}</p>
                        <p>{productQty}</p>
                        <p>{totalPrice}</p>
                    </li>);
                })}
            </ul>
            <h1>주문자 정보</h1>
            <ul>
            <li>
                <span>이름</span>
                <span>{userOrderInfo.userInfo.name}</span>
            </li>
            <li>
                <span>주소</span>
                <span>{userOrderInfo.userInfo.address}</span>
            </li>
            <li>
                <span>전화번호</span>
                <span>{userOrderInfo.userInfo.phoneNum}</span>
            </li>
            <li>
                <span>이메일</span>
                <span>{userOrderInfo.userInfo.email}</span>
            </li>
            </ul>
            <h1>결제 정보</h1>      
                <p>총 수량: {getTotalQty()}개</p>
                <p>총 가격: {getTotalPrice()}원</p>
            <Button onClick={()=>handleOrder()} text="결제하기" />
            <Link to='/'>
            <Button text="취소" />
            </Link>
        </Main>
        <Footer onClick={onClick} isOpen={isOpen} />
        <SideBar onClick={onClick} isOpen={isOpen} />
        </Section>
        ) :
        (<Loading />)
        }
        </>
    );
}

export default UserOrderPage;