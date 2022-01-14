import React from 'react';
import styled from 'styled-components';

const LiComponent = styled.li`
    background-color: pink;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;
    & input {
        width: 1em;
    }
    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const CartMenu = (props) => {
    return (
        <LiComponent>
            <button>
                <i className="fas fa-minus"></i>
            </button>
            <p>불고기 샐러드</p>
            <div>
                <button>-</button>
                <input type="number" min="1" step="1"/>
                <button>+</button>
            </div>
        </LiComponent>
    );
}

export default CartMenu;