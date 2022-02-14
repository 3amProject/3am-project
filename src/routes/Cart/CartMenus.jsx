import styled from "styled-components";
import CartMenu from "./CartMenu";

const Div = styled.div`
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

const CartMenus = ({cartItems, date}) => {

    if (cartItems.length === 0) {
        return null;
    }

    return (
        <>
        {cartItems.length > 1 ?
        (<Div>
            <p>배송 날짜 : {date}</p>
            <details> 
                <summary>메뉴</summary>
                <ul>
                {cartItems.map(menu => {
                    const {id, productName, productQty} = menu;
                    return (<CartMenu
                    key={id}
                    id={id}
                    name={productName}
                    qty={productQty}
                    />);
                })}
                </ul>    
            </details>
        </Div>) :
            (<Div>
            <p>배송 날짜 : {date}</p>
            <details> 
                <summary>메뉴</summary>
                <ul>
                <CartMenu
                key={cartItems[0].id}
                id={cartItems[0].id}
                name={cartItems[0].productName}
                qty={cartItems[0].productQty}
                />
                </ul>
            </details>
        </Div>)
        }
        </>
    );
};

export default CartMenus;