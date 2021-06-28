import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding-left: 2em;
    padding-right: 2em;
`;

function Card(props) {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    );
}

export default Card;
