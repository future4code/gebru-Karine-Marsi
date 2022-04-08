import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Countries } from "../constantes/Countries";
import useRequestData from "../hooks/useRequestData";
import useForm from "../hooks/useForm";
import useForm from "../hooks/useForm";


const ApplicationFormPage = () => {
  
  const {form, onChange,cleanFields}= useForm ({name:"", age:"",applicationText,"", profession: "", country: "" })
  const [trips] = useRequestData('${Base_Url}/trips')
  const [tripId, setTripId] = useState('')

  const navigate = useNavigate();
  const gotoHomePage =() =>{

  navigate('home');
  }

  const mapCountries = Countries.map((Country)) => {

    return (<option value={country} >{ country}</option>)
  }

  const onChangeSelect = (event) => {
    setTripId(event.target.value)
  }
const appyToTrip= (body) =>{
  axios
  .post()
  .then((response) =>{
    console.log (response.data)
    .catch ((error) =>{
      console.log (error)
    })

  })
};


return( 

<ApplicationFormPage>

  <header>
    <h1>Labex</h1>
    <Button onClick={()=> navigate (-1)}>Voltar</Button>
    <Button onClick={gotoHomePage}>Home</Button>
  </header>
<h2> Formulário de Inscrição</h2>
<Formulario onSubmit={sendForm}>
  <select>
    onChange {onChangeSelect}>
    <option>Selecione um destino </option>
    {mapId}
  </select>
  <input>

  name= "name"
  value ={form.name}
  placerolder= "Nome"
  onChange= {onchange}
  required
  pattern ={"^.{3,}$"}
  tittle= {"O nome deve conter no mínimo 3 caracteres"}
  </input>
  <input
                    name="age"
                    value={form.age}
                    placeholder="Idade"
                    onChange={onChange}
                    type={"number"}
                    required
                    min={18}

                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    placeholder="Texto de Aplicação"
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto precisa ter no mínimo 30 caracteres"}

                />
                <input
                    name="profession"
                    value={form.profession}
                    placeholder="Profissão"
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão precisa ter no mínimo 10 caracteres"}

                />

                <select
                    onChange={onChange}
                    name="country"
                >
                    <option>
                        País:
                    </option>
                    {mapCountries}
                </select>
                <button >Enviar</button>
            </Formulario>
        </ApplicationFormPage>
    )
};

export default ApplicationFormPage;
