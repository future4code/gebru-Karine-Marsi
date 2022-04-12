import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Countries } from "../Constantes/Countries";
import useRequestData from "../Hooks/useRequestData";
import useForm from "../Hooks/useForm";
import {ApplicationContainer} from "./styleGlobal"


const ApplicationFormPage = () => {

  const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", tripId: "" })
  const [trips] = useRequestData('${Base_Url}/trips')
  const [tripId, setTripId] = useState('')

  const navigate = useNavigate();
  const gotoHomePage = () => {

    navigate('home');
  }

  const mapCountries = Countries.map((Country) => {

    return (<option value={Country} >{Country}</option>)

  })

  // const mapTrips = trips.map((trip) => {

  //   return (<option value={trip.id} >{trip.name}</option>)
  // })

  const onChangeSelect = (event) => {
    setTripId(event.target.value)
  }
  const appyToTrip = (body) => {
    axios
      .post()
      .then((response) => {
        console.log(response.data)
          .catch((error) => {
            console.log(error)
          })

      })
  }

  return (

    <ApplicationContainer>

      <header>
       
        <button onClick={() => navigate(-1)}>Voltar</button>
        <h1>Labex</h1>
        <button onClick={gotoHomePage}>Home</button>
      </header>
      <h2> Formulário de Inscrição</h2>
      <form>
       <input

          name="name"
          value={form.name}
          placeholder="Nome"
          onChange={onchange}
          required
          pattern={"^.{3,}$"}
          tittle={"O nome deve conter no mínimo 3 caracteres"} />

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
      </form>
    </ApplicationContainer>
  )
}


export default ApplicationFormPage;
