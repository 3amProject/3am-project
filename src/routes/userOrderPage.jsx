import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Button from '../components/Button';

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
    return (
        <Section>
        <Header></Header>
        <Main>
            <h1>주문 상품 정보</h1>
            
            <h1>주문자 정보</h1>
            <ul>
            <li>
                <span>이름</span>
                <span>{user && user.name}</span>
            </li>
            <li>
                <span>주소</span>
                <span>{user && user.address}</span>
            </li>
            <li>
                <span>전화번호</span>
                <span>{user && user.phoneNum}</span>
            </li>
            <li>
                <span>이메일</span>
                <span>{user && user.email}</span>
            </li>
            </ul>
            <h1>결제 정보</h1>      
                <p>총 수량: 개</p>
                <p>총 가격: 원</p>
            <Button text="결제하기"></Button>
            <Button text="취소"></Button>
        </Main>
        <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </Section>
    );
}

export default UserOrderPage;