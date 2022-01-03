import ReactCalendar from '../../components/calendar/calendar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';
import styles from './home.module.css';

const Home = ({onClick, isOpen}) => {
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
                </section>
            </main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
    );
};

export default Home;