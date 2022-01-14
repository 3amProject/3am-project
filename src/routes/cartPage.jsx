import Footer from "../components/footer"
import Header from "../components/header"
import SideBar from "../components/sideBar";
import styled from "styled-components";
import CartMenus from "../components/cartMenus";

const SectionComponent = styled.section`
    height: 100vh;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const MainComponent = styled.main`
    height: 100%;
    width: 90vw;
    max-width: 700px;
    padding: 1em;
    box-sizing: border-box;
    background-color: bisque;
    overflow: scroll;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;
const ButtonsComponent = styled.div`
    background-color: pink;
    height: 4rem;
    width: 70vw;
    display: flex;
    justify-content: center;
    & button {
        width: 25%;
        margin: 0 2em;
    }
    @media screen and (max-width: 64rem) {
        width: 90vw;
        & button {
            width: 40%;
            margin: 0 0.5em;
        }
    };
`;
const CartPage = ({onClick, isOpen}) => {
    return (
        <SectionComponent>
        <Header></Header>
        <MainComponent>
            <h1>장바구니 목록</h1>
            <div>
            <CartMenus></CartMenus>
            </div>
        </MainComponent>
        <ButtonsComponent>
        <button>장바구니 비우기</button>
        <button>주문하기</button>
        </ButtonsComponent>
        <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </SectionComponent>
    );
};

export default CartPage;