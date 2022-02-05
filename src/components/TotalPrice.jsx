import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
    height: 5em;
    width: 70vw;
    background-color: ghostwhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;

const TotalPrice = ({totalPrice, showPrice, date, selected}) => {
    return (
        <Footer>
            <div>
                <span>결제금액</span>
                <span>총 {showPrice(totalPrice)}</span>
            </div>
            <Link
            to='/cart'
            state={{date, selected}}
            >
            <button>장바구니에 담기</button>
            </Link>
        </Footer>
    )
}

export default TotalPrice;