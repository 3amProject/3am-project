import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Join from '../../components/join/join';
import SideBar from '../../components/sideBar/sideBar';
import styles from './joinPage.module.css';

const JoinPage = ({onClick, isOpen, userAuth}) => {
    return(
        <>
        <section className={styles.joinPage}>
            <Header></Header>
            <main className={styles.main}>
            <Join userAuth={userAuth}></Join>
            </main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
        </>
    );
}

export default JoinPage;