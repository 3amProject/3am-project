import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';
import styles from './home.module.css';

const Home = ({onClick, isOpen}) => {
    return (
        <section className={styles.home}>
            <Header></Header>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        </section>
    );
};

export default Home;