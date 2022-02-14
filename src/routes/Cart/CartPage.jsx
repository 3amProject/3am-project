import Footer from "../../components/Footer";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import Loading from '../../components/Loading';
import styled from "styled-components";
import CartMenus from "./CartMenus";
import { useEffect, useState } from "react";
import { getCart } from "../../service/authService";
import { deleteAllProduct} from "../../service/noAuthService";

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
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [deliveryDate, setDeliveryDate] = useState();
    
    const formatDate = (date) => {
        if(date === ''){
            return '';
        }

        return date.slice(0,10);
    }

    const removeAllProdut = async() => {
        if(!window.confirm('장바구니를 비우시겠습니까?')){
            return;
        } 
        
        const res = await deleteAllProduct();
        if(res && res?.data?.message){
            window.alert(res.message);        
        }
    }

    useEffect(()=>{
        getCart().then((res)=>{
            const obj = res[0] || {};
            const {deliveryDate = ''} = obj;

            setCartItems(res);
            setDeliveryDate(formatDate(deliveryDate));

            setTimeout(() => {
                setLoading(false);
            }, 500);
        });
    },[]);
    
    if (loading) {
        return <Loading/>;
    }

    return (
    <Section>
        <Header/>
        <Main>
            <h1>장바구니 목록</h1>
            {cartItems.length === 0 ? <h3>장바구니가 비었습니다.</h3> :
            (
                <>
                    <CartMenus 
                        cartItems={cartItems} 
                        date={deliveryDate}
                    />

                    <Buttons>
                        <button onClick={()=>removeAllProdut()}>장바구니 비우기</button>
                            <button onClick={()=>{
                                window.location.href = '/orderType';
                            }}>주문하기</button>
                    </Buttons>
                </>
            )
            }
        </Main>
        <Footer onClick={onClick} isOpen={isOpen} />
        <SideBar onClick={onClick} isOpen={isOpen} />
    </Section>
    );
};

export default CartPage;