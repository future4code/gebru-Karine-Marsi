import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom"
import useForm from "../Hooks/useForm";
import { Base_Url } from "../Constantes/Base_Url";
import Swal from "sweetalert2";
import { ContainerLogin } from "./styleGlobal";
import { Formulario } from "./styleGlobal";
import { Header } from "./styleGlobal";


export default function LoginPage() {
    const { form, onChange } = useForm({ email: "", password: "" })


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }


    const login = (body) => {

        axios.post(`${Base_Url}/login`, body)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                Swal.fire(
                    'Olá Viajante',
                    ':🚀',
                    'success'
                )
                console.log("resposta positiva", response.data)
                navigate("/admin/trips/list")
            }).catch((err) => {
                console.log(err.response, "resposta errada")
            })
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form)

    }

    return (
        <ContainerLogin>
            <Header>
                <button onClick={() => navigate(-1)}>Voltar</button>
                <button onClick={goToHomePage}>Home</button>
                <h1>LabeX</h1>

            </Header>
            <Formulario onSubmit={onSubmitLogin}>
                <h2>Login</h2>
                <input
                    name="email"
                    type={"email"}
                    value={form.email}
                    placeholder="Email"
                    onChange={onChange}
                    required
                />
                <input
                    name="password"
                    type={"password"}
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button className="botão-enviar">Enviar</button>
            </Formulario>
        </ContainerLogin>
    )
};