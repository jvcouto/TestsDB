import React from 'react'
import { Style } from '../signup/style'
import { Link } from 'react-router-dom';



export default () => {
    return (
        <>
            <Style>
                <form>
                    <h2>Registrar</h2>
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="email" placeholder="Digite seu e-mail" />
                    <input type="password" placeholder="Digite sua senha" />
                    <input type="password" placeholder="Confirme sua senha" />
                    <button type="submit">Registrar</button>
                    <Link to="/">Já possui conta?</Link>
                </form>
            </Style>
        </>
    )
}