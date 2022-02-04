import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: cadetblue;
    padding: 1em;
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
            <p>{menu.name}</p>
            <Footer>
                <span>{showPrice(menu.price)}</span>
                <Button
                onClick={()=>onClick(menu)}>
                    <i className="fas fa-shopping-basket"></i>
                </Button>
            </Footer>
        </Div>
    )
}

export default Menu;