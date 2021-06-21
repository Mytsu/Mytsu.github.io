import React, { Component } from 'react';
import styled from 'styled-components';

const colors = {
    font: '#fff',
};

const Container = styled.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: ${colors.font};
    height: 3.5em;
    font-size: 16px;
    display: flex;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
`;

const Title = styled.h1`
    margin: 0;
    margin-left: 0.75em;
    font-size: 2em;
    align-self: center;
`;

const Spacer = styled.div`
    margin: 0;
    flex-grow: 1;
    height: 1px;
`;

const Link = styled.a`
    color: ${colors.font};
    font-size: 1.15em;
    margin-left: 1em;
    margin-right: 1em;
    align-self: center;

    &:visited,
    &:link {
        text-decoration: none;
        color: ${colors.font};
    }
`;

export class Header extends Component {
    render() {
        return (
            <Container>
                <Title>~</Title>
                <Spacer />
                <Link href='#'>Link 1</Link>
                <Link href='#'>Link 2</Link>
                <Link href='#'>Link 3</Link>
            </Container>
        );
    }
}

export default Header;
