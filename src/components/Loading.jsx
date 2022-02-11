import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    & h1 {
        margin: 0;
        padding: 0;
    }
`;

const Loading = () => {
    return(
        <Div>
            <h1>Loading...👽</h1>
        </Div>
    )
}

export default Loading;