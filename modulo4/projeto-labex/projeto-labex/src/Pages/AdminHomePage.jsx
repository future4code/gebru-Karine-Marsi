import React from "react";
import {useProtectedPage} from "../Hooks/useProtectedPage";
import useRequestData from "../Hooks/useRequestData";
import {Base_Url} from "../Constantes/Base_Url";
import {useState}from  "react";
import TripDetailsPage from "./TripDetailsPage";
import { useNavigate } from "react-router-dom";
import { Header } from "./styleGlobal";
import { Button } from "./styleGlobal";


const AdminHomePage = () => {

  const [trip] = useRequestData(`${Base_Url}/trips`)
  const [id,setId] = useState("")

  useProtectedPage()
  const navigate = useNavigate ()

  const goToAdminCreatPage = () => {

    navigate ("/admin/trips/create")
  }

  const mapId = trip && trip.map((trip) => {

    return(

      <div>
        key = {trip.id} onClick{ () => setId (trip.id)}
        {trip.name}
        <TripDetailsPage id = { trip.id} trip = { trip}/>
      </div>
      
      )
    });
      
      return(

        <div>
          <Header>

            <Button onClick ={ () => navigate (-1)}> Voltar </Button>
            < Button onClick ={goToAdminCreatPage}> Criar viagem</Button>
            <h1> Labex </h1>
            </Header>

          <h2> Página Administrativa</h2>
          <div> {mapId}</div>
          
        </div>
        

)
      } 
      export default AdminHomePage; 
