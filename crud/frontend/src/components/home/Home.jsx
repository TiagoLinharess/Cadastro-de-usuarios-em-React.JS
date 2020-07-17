import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon='home' title='Início'
        subtitle='Projeto cadastro de usuários em React.js'>
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção
            de um cadastro de usuários desenvolvido em React
        </p>
    </Main>