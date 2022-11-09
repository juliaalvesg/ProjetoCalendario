import React from 'react';
import styled from 'styled-components'

type DynamicsInputProps = {
    className?: string;
    placeholder?: string;
    onChange?: any;
}

const DynamicsInput = ({className, placeholder,onChange}:DynamicsInputProps) => {
    return (
        <div className={className}>
            <input placeholder={placeholder} onChange={onChange} className="input"></input>
        </div>
    )
}

export default styled(DynamicsInput)`
    .input{
        background-color: transparent;
        border-style: none;
    }
`;