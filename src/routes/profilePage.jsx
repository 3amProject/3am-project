import Header from '../components/header';
import Footer from '../components/footer';
import SideBar from '../components/sideBar';
import Profile from '../components/profile';
import styled from 'styled-components';

const SectionComponent = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const MainComponent = styled.main`
    width: 50vw;
    max-width: 500px;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;

const ProfilePage = ({onClick, isOpen}) => {
    return (
        <SectionComponent>
            <Header></Header>
            <MainComponent>
                <Profile></Profile>
            </MainComponent>
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
        <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </SectionComponent>
    );
}

export default ProfilePage;