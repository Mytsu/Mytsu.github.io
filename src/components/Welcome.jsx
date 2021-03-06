import React from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';
import TechStack from './TechStack';

const Container = styled.div`
    height: 100vh;
    width: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;

const Intro = styled(Introduction)`
    width: 30%;
    margin: 0 0 2em 3em;
    align-self: end;

    @media (max-width: 1200px) {
        width: auto;
        align-self: center;
        margin: auto 0 auto 0;
    }
`;

const Tech = styled(TechStack)`
    display: flex;
    align-self: end;
    align-items: end;
    justify-content: center;
    justify-self: end;
    width: 10em;
    margin: 0 0 2em 0;
    gap: 1em;
    border: none;

    @media(max-width: 1200px) {
        align-self: center;
        justify-self: center;
    }
`;

export default function Welcome(props) {
    return (
        <Container className={props.className}>
            <Intro />
            <Tech />
        </Container>
    );
}
