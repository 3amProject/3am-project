import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteProduct, minusProductQty, plusProductQty } from '../service/noAuthService';

const Li = styled.li`
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

const CartMenu = ({menu}) => {
    const [productQty, setProductQty] = useState();
    
    if(menu){
        setProductQty(+menu.productQty);
    }

    const handleQtyMinus = async() => {
        setProductQty((old)=>old-1);
        const res = await minusProductQty(menu.id);
        if(res){
            window.alert(res.message);
        }
    }

    const handleQtyPlus = async() => {
        setProductQty((old)=>old+1);
        const res = await plusProductQty(menu.id);
        if(res){
            window.alert(res.message);
        }
    }

    const removeProdut = async() => {
        if(!window.confirm('상품을 삭제하시겠습니까?')){
            return;
        } else {
            const res = await deleteProduct(menu.id);
            if(res){
                window.alert(res.message);
            }
        }
    }

    return (
        <Li>
            <button onClick={()=>removeProdut()}>
                <i className="fas fa-minus"></i>
            </button>
            <p>{menu && menu.productName}</p>
            <div>
                <button onClick={()=>handleQtyMinus()}>-</button>
                <input type="number" min="1" step="1" value={productQty}/>
                <button onClick={()=>handleQtyPlus()}>+</button>
            </div>
        </Li>
    );
}

export default CartMenu;