import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    padding: 1em;
    & .name {
        margin: 10px 0;
        height: 50px;
        line-height: 20px;
    }
    position: relative;
`;
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Button = styled.button`
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 1rem;
    &: hover {
        cursor: pointer;
    }
`;

const Menu = ({menu, onClick, showPrice, imgUrl}) => {
    return (
        <Div>
            <div>
                <img src={imgUrl} alt="img" />
            </div>
            <p className="name">{menu.productName}</p>
            <Footer>
                <span>{showPrice(menu.productPrice)}</span>
                <Button
                onClick={()=>onClick(menu)}>
                    <i className="fas fa-shopping-basket"></i>
                </Button>
            </Footer>
        </Div>
    )
}

export default Menu;