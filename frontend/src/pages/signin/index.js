import React from 'react'
import img from "../../assets/prova.png"
import { Link } from 'react-router-dom'
import { Style } from '../signin/style'
import useForm from '../../hooks/useForm'



export default () => {
    const { values, handleChange, handleSubmit } = useForm()

    const chamadaapi = () => {
        console.log(values)
    }



    return (
        <>
            <Style>
                <img src={img} alt="TestsDB"></img>
                <form onSubmit={handleSubmit(chamadaapi)}>
                    <h2>Login</h2>
                    <input name="email" type="email" onChange={handleChange} placeholder="Digite seu e-mail" required />
                    <input name="senha" type="password" onChange={handleChange} placeholder="Digite sua senha" required />
                    <button type="submit">Acessar</button>
                    <Link to="/signup">Ainda não possui conta? Registre-se aqui!</Link>
                </form>
            </Style>
        </>
    )
}