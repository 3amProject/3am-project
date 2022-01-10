import { useState } from 'react';
import ReactCalendar from '../../components/calendar/calendar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MenuContainer from '../../components/menuContainer/menuContainer';
import SideBar from '../../components/sideBar/sideBar';
import TotalPrice from '../../components/totalPrice/totalPrice';
import styles from './home.module.css';

const Home = ({onClick, isOpen}) => {
    const menus = [
        {
        id: 1,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
        {
        id: 2,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
        {
        id: 3,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
        {
        id: 4,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
        {
        id: 5,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
        {
        id: 6,
        url: '/img/salad.png',
        name: '[저염]비빔 샐러드',
        price: 7400
    },
    ];

    const [totalPrice, setTotalPrice] = useState(0);
    const handleTotalPrice = (price) => {
        setTotalPrice((oldPrice) => oldPrice + price);
    }
    const showPrice = (price) => {
        if(price < 1000) return `${price}원`;
        let newPrice = String(price).split('').reverse();
        newPrice.splice(3,0,',');
        return newPrice.reverse().join('') + '원';
    }
    
    return (
        <section className={styles.home}>
            <Header></Header>
            <main className={styles.main}>
            <div className={styles.section1}>
                <h2 className={styles.dateTitle}>1. 배송 날짜 선택</h2>
                <div className={styles.calendar}>
                <ReactCalendar/>
                </div>
            </div>
            <div className={styles.section2}>
                <h2>2. 메뉴 선택</h2>
                <div className="menuList">
                <MenuContainer
                    subTitle="매일 구매한 신선한 재료로 당일 조리"
                    title="새벽다섯시 샐러드"
                    menus={menus}
                    onClick={handleTotalPrice}
                    showPrice={showPrice}
                />
                <MenuContainer
                    subTitle="매일 하나씩만 받기 어려웠던"
                    title="건강 간편식"
                    menus={menus}
                    onClick={handleTotalPrice}
                    showPrice={showPrice}
                />
                </div>
            </div>
            </main>
            <TotalPrice
            totalPrice={totalPrice}
            showPrice={showPrice}
            />
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
    );
};

export default Home;