import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import Button from "../components/button";

const SectionComponent = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const MainComponent = styled.main`
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

const NotUserOrderPage = ({onClick, isOpen}) => {
    return (
        <SectionComponent>
        <Header></Header>
        <MainComponent>
            <h1>주문 상품 정보</h1>

            <h1>주문자 정보</h1>
            <form>
                <label htmlFor="name">이름</label>
                <input name="name" type="text" />
                <label htmlFor="address">주소</label>
                <input name="address" type="text" />
                <label htmlFor="phoneNum">전화번호</label>
                <input name="phoneNum" type="text" />
                <label htmlFor="email">이메일</label>
                <input name="email" type="email" />
            </form>
            <h1>결제 정보</h1>      
                <p>총 수량: 개</p>
                <p>총 가격: 원</p>
            <Button text="결제하기"></Button>
            <Button text="취소"></Button>
        </MainComponent>
        <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </SectionComponent>
    );
}

export default NotUserOrderPage;