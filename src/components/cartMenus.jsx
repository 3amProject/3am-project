import styled from "styled-components";
import { useLocation } from "react-router";
import CartMenu from "./cartMenu";

const DivComponent = styled.div`
    background-color: white;
    padding: 1em 2em;
    & ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 64rem) {
        padding: 0.5em;
    }
`;

const CartMenus = () => {
    const location = useLocation();
    const formatDate = (date) => new Intl.DateTimeFormat('fr-CA', {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
    }).format(date);

    return (
    <DivComponent>
    <p>배송 날짜 : {formatDate(location.state.date)}</p>
    <span>메뉴 </span>
    <i className="fas fa-chevron-down"></i>
    <ul>
        <CartMenu></CartMenu>
        <CartMenu></CartMenu>
        <CartMenu></CartMenu>
        <CartMenu></CartMenu>
        <CartMenu></CartMenu>
        <CartMenu></CartMenu>
    </ul>
    </DivComponent>
    );
}

export default CartMenus;