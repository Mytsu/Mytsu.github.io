import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    width: 30%;
    height: 30vh;
    margin-top: 20%;
    margin-left: 3em;
    padding-left: 2em;
`;

export default function Introduction() {
    return <Container>
        <h1>Touché</h1>
    </Container>;
}
