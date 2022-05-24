import React from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import useRequestData from "../Hooks/useRequestData";
import { Base_Url } from "../Constantes/Base_Url";
import { useState } from "react";
import TripDetailsPage from "./TripDetailsPage";
import { useNavigate } from "react-router-dom";
import { ApplicationContainer, Cards, ContainerCards } from "./styleGlobal";

const AdminHomePage = () => {
  const [trip] = useRequestData(`${Base_Url}/trips`);
  const [id, setId] = useState("");

  useProtectedPage();
  const navigate = useNavigate();

  const goToAdminCreatPage = () => {
    navigate("/admin/trips/create");
  };

  const mapId =
    trip &&
    trip.map((trip) => {
      return (
        <Cards key = {trip.id} onClick= {() => setId(trip.id)}>
          
          {trip.name}
          <TripDetailsPage id={trip.id} trip={trip} />
        </Cards>
      );
    });

  return (
    <ApplicationContainer>
      <header>
        <button onClick={() => navigate(-1)}> Voltar </button>
        <h1> Labex </h1>
        <button onClick={goToAdminCreatPage}> Criar viagem</button>
      </header>
{/* 
      <h2> Página Administrativa</h2> */}
      <ContainerCards>{mapId}</ContainerCards>
    </ApplicationContainer>
  );
};
export default AdminHomePage;
