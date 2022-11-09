import React from 'react';
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

type DynamicsButtonProps = {
    className?: string;
    label?: string;
    link?: string;
    onClick?: any;
}

const DynamicsButton = ({className, label, link, onClick}:DynamicsButtonProps) => {
    // const navigate = useNavigate()

    return (
        <div className={className}>
            <button className="btn-cadastrar" onClick={() => onClick()}>{label}</button>
        </div>
    )
}

export default styled(DynamicsButton)`
    .btn-cadastrar{
        background-color: #3A8891;
        border-style: none;
        border-radius: 5px;
        color: white;
        width: 50%;
        cursor: pointer;
        padding: 5px;
        margin-top: 15px;
    }

}
`;