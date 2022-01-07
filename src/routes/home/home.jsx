import ReactCalendar from '../../components/calendar/calendar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MenuContainer from '../../components/menuContainer/menuContainer';
import SideBar from '../../components/sideBar/sideBar';
import styles from './home.module.css';

const Home = ({onClick, isOpen}) => {
    const menus = [
        {
        id: 1,
        url: '',
        name: '[저염]비빔 샐러드',
        price: '7,400원'
    },
        {
        id: 2,
        url: '',
        name: '[저염]비빔 샐러드',
        price: '7,400원'
    },
        {
        id: 3,
        url: '',
        name: '[저염]비빔 샐러드',
        price: '7,400원'
    },
    ];
    
    return (
        <section className={styles.home}>
            <Header></Header>
            <main className={styles.main}>
                <section className={styles.date}>
                    <h2>1. 배송 날짜 선택</h2>
                    <ReactCalendar/>
                </section>
                <section className={styles.menu}>
                    <h2>2. 메뉴 선택</h2>
                    <div className="menuList">
                    <MenuContainer
                        subTitle="매일 구매한 신선한 재료로 당일 조리"
                        title="새벽다섯시 샐러드"
                        menus={menus}
                    />
                    <MenuContainer
                        subTitle="매일 하나씩만 받기 어려웠던"
                        title="건강 간편식"
                        menus={menus}
                    />
                    </div>
                </section>
            </main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
    );
};

export default Home;