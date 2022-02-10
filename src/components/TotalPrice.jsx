import styled from "styled-components";
import { putInCart } from "../service/authService";

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
    const formatDate = (date) => new Intl.DateTimeFormat('fr-CA', {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
    }).format(date);

    const handlePutInCart = async() => {
        if(date && selected){
            const newDate = formatDate(date);
            selected.forEach((v)=>{
                // 각 obj에 date 삽입
                v['deliveryDate'] = newDate;
            });
            const cartList = await putInCart(selected);
            return cartList;
        }
    }

    return (
        <Footer>
            <div>
                <span>결제금액</span>
                <span>총 {showPrice(totalPrice)}</span>
            </div>
            <button onClick={()=>handlePutInCart()}>장바구니에 담기</button>
        </Footer>
    )
}

export default TotalPrice;