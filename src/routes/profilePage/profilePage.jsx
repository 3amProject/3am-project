import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SideBar from '../../components/sideBar/sideBar';
import Profile from '../../components/profile/profile';
import styles from './profilePage.module.css';

const ProfilePage = ({onClick, isOpen}) => {
    return (
        <>
        <section className={styles.profilePage}>
            <Header></Header>
            <main className={styles.main}>
                <Profile></Profile>
            </main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
        </>
    );
}

export default ProfilePage;