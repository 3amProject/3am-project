import styled from "styled-components";
import CartMenu from "./CartMenu";
import { useState, useEffect } from "react";
import { getCart } from "../service/authService";
import Loading from './Loading';

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

const CartMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        getCart()
        .then((result) => setMenus(result))
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
        {
        menus ?
        (<Div>
        <p>배송 날짜 : {menus[0]["deliveryDate"]}</p>
        <details> 
            <summary>메뉴</summary>
            <ul>
            {menus.map(menu => (
            <CartMenu
            key={menu.id}
            menu={menu}
            ></CartMenu>
            ))}
            </ul>    
        </details>
        </Div>) :
        (<Loading/>)
        }
        </>
    );
}

export default CartMenus;