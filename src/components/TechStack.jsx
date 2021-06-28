import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faNodeJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons';

const Icon = styled(FontAwesomeIcon)`
    height: 3em;
    width: 3em !important;
`;

function TechStack(props) {
    return (
        <Card className={props.className}>
            <Icon icon={faAngular} />
            <Icon icon={faReact} />
            <Icon icon={faNodeJs} />
        </Card>
    );
}

export default TechStack;
