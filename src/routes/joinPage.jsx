import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Join from '../components/Join';
import SideBar from '../components/SideBar';

const Section = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const Main = styled.main`
    width: 50vw;
    max-width: 500px;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;

const JoinPage = ({onClick, isOpen}) => {
    return(
        <Section>
            <Header></Header>
            <Main>
                <Join></Join>
            </Main>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </Section>
    );
}

export default JoinPage;