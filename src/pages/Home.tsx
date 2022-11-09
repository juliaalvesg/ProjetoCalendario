import React from 'react';
import styled from 'styled-components'

import CardForm from '../components/CardForm'

type HomeProps = {
    className?: string;
}

const Home = ({className}: HomeProps) => {
    return (
        <div className={className}>
            <CardForm />
        </div>
    )
}

export default styled(Home)`

`;

