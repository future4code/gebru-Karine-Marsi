import React from "react";
import { useNavigate } from "react-router-dom";
import {HomePageContainer} from "./styleGlobal";

const HomePage = () => {
  const navigate = useNavigate();
  
  const goToAdminHomePage = () => {
    navigate("login");
  };

  const goToListTripsPage = () => {
    navigate("trips/list");
  };
   const goToLoginPage = () => {

    navigate("/login");
   };
   

  return (
    <HomePageContainer>
      <h1>Labex</h1>
      <div>
        <button onClick={goToListTripsPage}>Ver Viagens</button>
        <button onClick={goToAdminHomePage}>Área Admin</button>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
