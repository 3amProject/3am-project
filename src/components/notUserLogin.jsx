import React from 'react';
import styled from 'styled-components';
import Button from './button';

const DivComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 0em 1em 0em;
    & input {
        height: 2em;
        margin-bottom: 0.5em;          
    }
`;

const NotUserLogin = () => {
    return (
        <DivComponent>
        <input type="text" placeholder=" 주문번호"/>
        <input type="text" placeholder=" 주문자명"/>
        <Button text="확인"></Button>
        </DivComponent>
    );
}

export default NotUserLogin;