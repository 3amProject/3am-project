import Footer from "../components/footer"
import Header from "../components/header"
import SideBar from "../components/sideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
const DivComponent = styled.div`
    background-color: white;
    padding: 1em 2em;
    & li {
        background-color: pink;
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5em;
        & input {
            width: 1em;
        }
    }
    @media screen and (max-width: 64rem) {
        padding: 0.5em;
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
    const location = useLocation();
    const formatDate = (date) => new Intl.DateTimeFormat('fr-CA', {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
    }).format(date);

    return (
        <SectionComponent>
        <Header></Header>
        <MainComponent>
            <h1>장바구니 목록</h1>
            <div>
                <input type="checkbox" />
                <DivComponent>
                    <p>배송 날짜 : {formatDate(location.state.date)}</p>
                    <span>메뉴 </span>
                    <i className="fas fa-chevron-down"></i>
                    <ul>
                        <li>
                            <span>불고기 샐러드</span>
                            <div>
                                <button>-</button>
                                <input type="text" placeholder="3"/>
                                <button>+</button>
                            </div>
                        </li>
                    </ul>
                </DivComponent>
            </div>
        </MainComponent>
        <ButtonsComponent>
        <button>선택 삭제</button>
        <button>비우기</button>
        </ButtonsComponent>
        <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </SectionComponent>
    );
};

export default CartPage;