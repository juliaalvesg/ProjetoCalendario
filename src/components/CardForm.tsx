import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DynamicsInput from '../components/DynamicsInput'
import DynamicsButton from '../components/DynamicsButton'

type CardFormProps = {
    className?: string;
}
const CardForm = ({className}: CardFormProps) => {
    const [professor, setProfessor] = useState("");

    const arrayProfessores = ['oi','oi'];
    const cadastrar= () => {
        arrayProfessores.push(professor);
        console.log(arrayProfessores)
    }
    useEffect (()=> {
        cadastrar();
    })
    return (
        <div className={className}>
            <div className="cards-container">
                <h2 className='title'>Cadastro Professor</h2>
                <DynamicsInput placeholder="Digite o nome do professor..." 
                onChange={(e: any) => setProfessor(e.target.value)} />
                <DynamicsButton label='Cadastrar' onClick={() => cadastrar()}/>
                {arrayProfessores.map((professor: any) => {
                    return(
                        <h3>{arrayProfessores}</h3>
                    )
                })}
            </div>
            <div className="cards-container">
                <h2 className='title'>Cadastro de Disciplina</h2>
                <DynamicsInput placeholder="Digite o nome da disciplina..."/>
                <DynamicsButton label='Cadastrar' onClick={() => cadastrar()}/>
            </div>
            <div className="cards-container">
                <h2 className='title'>Cadastro de Turma</h2>
                <DynamicsInput placeholder="Digite o nome da turma..."/>
                <DynamicsButton label='Cadastrar' onClick={() => cadastrar()}/>
            </div>
        </div>
    )

}

export default styled(CardForm)`
display: flex;
flex-directipn: row;
justify-content: space-between;
margin: 100px;
align-items: center;
.cards-container{
    background-color: #d3d3d3;
    padding: 50px;
    border-radius: 10px;
    height: 300px;
}
`;

