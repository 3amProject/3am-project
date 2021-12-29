import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './home.module.css';

function Home() {
    return (
        <section className={styles.home}>
            <Header></Header>
            <Footer></Footer>
        </section>
    );
}

export default Home;