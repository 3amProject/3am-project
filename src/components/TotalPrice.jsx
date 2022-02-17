import styled from "styled-components";
import { putInCart } from "../service/authService";

const Div = styled.div`
    width: 70vw;
    background-color: ghostwhite;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    & div {
        padding-left: 15px;
    }
    & button {
        font-size: 16px;
        color: var(--lightBeige);
        background-color: black;
        padding: 15px 30px;
        cursor: pointer;
    }
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
        if(date === undefined){
            window.alert('날짜를 선택해주세요.');
            return;
        }
        if(selected.length < 1){
            window.alert('상품을 선택해주세요.');
            return;
        }

        const newDate = formatDate(date);
        selected.forEach((v)=>{
            // 각 obj에 date 삽입
            v['deliveryDate'] = newDate;
        });
        const cartList = await putInCart(selected);
        if(cartList && cartList?.data?.code === 'SC003'){
            window.alert(cartList.data.message);
            return cartList;
        }
    }

    return (
        <Div>
            <div>
                <span>결제금액 </span>
                <span>총 {showPrice(totalPrice)}</span>
            </div>
            <button onClick={()=>handlePutInCart()}>장바구니에 담기</button>
        </Div>
    )
}

export default TotalPrice;