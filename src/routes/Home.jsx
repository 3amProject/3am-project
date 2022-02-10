import { useState } from 'react';
import styled from 'styled-components';
import ReactCalendar from '../components/Calendar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MenuContainer from '../components/MenuContainer';
import SideBar from '../components/SideBar';
import TotalPrice from '../components/TotalPrice';

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
const Div = styled.div`
    margin-top: 5em;
`;
const Calendar = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3em;
`;

const Home = ({onClick, isOpen, menus}) => {
    const salads = menus.slice(0,9);
    const convenFoods = menus.slice(9);

    const [totalPrice, setTotalPrice] = useState(0);
    const [selected, setSelected] = useState([]);

    const handleAdd = (menu) => {
        const clickedMenu = {productSeq: menu.id, productQty: menu.productQty};
        setTotalPrice((oldPrice) => oldPrice*1 + menu.productPrice*1);
        setSelected((oldSelected) => {
            const updated = [...oldSelected];
            const target = updated.findIndex((v) => v.productSeq === clickedMenu.productSeq);
            if(target === -1){
                updated.push({...clickedMenu, productQty:1});
            }else{
                ++updated[target]['productQty'];
            }
            console.log(updated);
            return updated;
        });
    }

    const showPrice = (price) => {
        if(price < 1000) return `${price}원`;
        let newPrice = String(price).split('').reverse();
        newPrice.splice(3,0,',');
        return newPrice.reverse().join('') + '원';
    }

    const [date, setDate] = useState();

    return (
        <Section>
            <Header></Header>
            <Main>
            <Div>
                <h2>1. 배송 날짜 선택</h2>
                <Calendar>
                    <ReactCalendar
                    date={date}
                    onChange={(date)=>setDate(date)}
                    />
                </Calendar>
            </Div>
            <Div>
                <h2>2. 메뉴 선택</h2>
                <div className="menuList">
                <MenuContainer
                    subTitle="매일 구매한 신선한 재료로 당일 조리"
                    title="새벽다섯시 샐러드"
                    menus={salads}
                    foodImgs01={[1,2,3,4,5,6,7,8,9]}
                    onClick={handleAdd}
                    showPrice={showPrice}
                />
                <MenuContainer
                    subTitle="매일 하나씩만 받기 어려웠던"
                    title="건강 간편식"
                    menus={convenFoods}
                    foodImgs02={[10,11,12,13,14,15,16,17,18]}
                    onClick={handleAdd}
                    showPrice={showPrice}
                />
                </div>
            </Div>
            </Main>
            <TotalPrice
            totalPrice={totalPrice}
            showPrice={showPrice}
            date={date}
            selected={selected}
            />
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </Section>
    );
};

export default Home;
