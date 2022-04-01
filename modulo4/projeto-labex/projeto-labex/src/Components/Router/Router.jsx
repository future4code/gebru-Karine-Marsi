import React from "react";
import LoginPage from "./LoginPage";
import ListTripsPage from "./ListTripsPage";
import TripDetailsPage from "./TripDetailsPage";
import AdminHomePage from "./AdminHomePage";
import ApplicationFormPage from "./ApplicationFormPage";
import CreateTrip from "./CreateTrip";
import HomePage from "./HomePage";
import { BrowserRouter, Routs, Route } from "react-router-dom";

export const Router = () =>{
 return(

<BrowserRouter>
      <Routs>
        <Route index element={<HomePage />}/>
        <Route path = "trips/list" element={< ListTripsPage/>}/>
        <Route path = "trips/application" element= {<ApplicationFormPage/>}/>
        <Route path = "login " element={<LoginPage/>}/>
        <Route path = "admin/trips/list" element={<AdminHomePage/>}/>
        <Route path = "admin/trips/create" element={<CreateTrip/>}/>
        <Route path = "admin/trips/:id " element = {<TripDetailsPage/>}/>
      </Routs>
</BrowserRouter>
)
}