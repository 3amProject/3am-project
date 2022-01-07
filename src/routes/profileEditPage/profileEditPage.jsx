import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SideBar from '../../components/sideBar/sideBar';
import styles from './profileEditPage.module.css';
import EditProfile from '../../components/editProfile/editProfile';

const ProfileEditPage = ({onClick, isOpen}) => {
    return (
        <>
        <section className={styles.profilePage}>
            <Header></Header>
            <main className={styles.main}>
                <EditProfile></EditProfile>
            </main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </section>
        </>
    );
}

export default ProfileEditPage;