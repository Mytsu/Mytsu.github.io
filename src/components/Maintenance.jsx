import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export default function Maintenance() {
    return (
        <div
            style={{
                margin: '4em 2em 0 0',
                width: '-moz-available',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                paddingLeft: '3em'
            }}
        >
            <FontAwesomeIcon
                style={{
                    width: '3em',
                    height: '3em',
                    marginRight: '2em',
                    marginTop: '1em',
                }}
                icon={faTools}
            />
            <h1>Página em construção.</h1>
        </div>
    );
}
<div
    style={{
        margin: '4em 2em 0 0',
        width: '-moz-available',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}
>
    <FontAwesomeIcon
        style={{
            width: '3em',
            height: '3em',
            marginRight: '2em',
            marginTop: '1em',
        }}
        icon={faTools}
    />
    <h1>Página em construção.</h1>
</div>;
