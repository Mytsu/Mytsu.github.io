import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubSquare,
    faLinkedin,
    faFacebookSquare,
    faTwitterSquare,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled(Card)`
    text-align: center;
    background-color: #242424;

    & > a:visited, a:link {
        text-decoration: none;
        color: white;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    height: 2em;
    width: 2em !important;
    margin: 0;
    padding: 0 0.5em 0 0.5em;
`;

export default function Introduction(props) {
    return (
        <Container className={props.className}>
            <h1>Jonathan Arantes</h1>
            <a href='https://github.com/Mytsu'>
                <Icon icon={faGithubSquare} />
            </a>
            <a href='https://www.linkedin.com/in/mytsu/'>
                <Icon icon={faLinkedin} />
            </a>
            <a href='https://www.facebook.com/JonhArantes'>
                <Icon icon={faFacebookSquare} />
            </a>
            <a href='https://twitter.com/JohnMytsu'>
                <Icon icon={faTwitterSquare} />
            </a>
            <a href='https://medium.com/@mytsu'>
                <Icon icon={faMedium} />
            </a>
            <p>
                Estudante e desenvolvedor. Atualmente trabalhando em pequenos
                projetos para preencher este portfólio.
            </p>
        </Container>
    );
}
