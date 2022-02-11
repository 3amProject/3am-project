import Footer from "../components/Footer";
import Header from "../components/Header"
import SideBar from "../components/SideBar";
import styled from "styled-components";
import CartMenus from "../components/CartMenus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart } from "../service/authService";
import { deleteAllProduct } from "../service/noAuthService";

const Section = styled.section`
    height: 100vh;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const Main = styled.main`
    height: 100%;
    width: 90vw;
    max-width: 700px;
    padding: 1em;
    box-sizing: border-box;
    background-color: bisque;
    overflow: scroll;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;
const Buttons = styled.div`
    background-color: pink;
    height: 4rem;
    width: 70vw;
    display: flex;
    justify-content: center;
    & button {
        width: 25%;
        margin: 0 2em;
    }
    & a {
        width: 25%;
        display: flex;
        & button {
            width: 100%;
        }
    }
    @media screen and (max-width: 64rem) {
        width: 90vw;
        & button {
            width: 40%;
            margin: 0 0.5em;
        }
    };
`;

const CartPage = ({onClick, isOpen}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        getCart()
        .then((result)=>setCartItems(result))
        .catch((error)=>console.log(error));
    },[getCart]);

    const removeAllProdut = async() => {
        if(!window.confirm('장바구니를 비우시겠습니까?')){
            return;
        } else {
            const res = await deleteAllProduct();
            if(res){
                window.alert(res.message);
            }
        }
    }

    return (
        <Section>
        <Header></Header>
        <Main>
            <h1>장바구니 목록</h1>
            <div>
            {cartItems && cartItems.length === 0 ? 
            <h3>장바구니가 비었습니다.</h3> :
            <CartMenus></CartMenus>
            }
            </div>
        </Main>
        <Buttons>
        <button onClick={()=>removeAllProdut()}>장바구니 비우기</button>
        <Link to='/orderType'>
        <button>주문하기</button>
        </Link>
        </Buttons>
        <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </Section>
    );
};

export default CartPage;