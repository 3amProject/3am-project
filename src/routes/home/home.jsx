import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';
import styles from './home.module.css';

const Home = () => {
    const [isOpen, setState] = useState(false);
    const toggleSideBar = () => {
        setState(isOpen => !isOpen);
    }
    return (
        <section className={styles.home}>
            <Header></Header>
            <SideBar onClick={toggleSideBar} isOpen={isOpen}></SideBar>
            <Footer onClick={toggleSideBar} isOpen={isOpen}></Footer>
        </section>
    );
};

export default Home;