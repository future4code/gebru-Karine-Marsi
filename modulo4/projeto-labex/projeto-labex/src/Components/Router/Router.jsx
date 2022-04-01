import React from "react";
import LoginPage from "../Pages/LoginPage";
import ListTripsPage from "../Pages/ListTripsPage";
import TripDetailsPage from "..Pages/TripDetails";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTrip from "../Pages/CreateTrip";
import HomePage from "../Pages/HomePage";
import { BrowserRouter,Routs, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routs>
        <Route index element={<HomePage />} />
        <Route path="trips/list" element={<ListTripsPage />} />
        <Route path="trips/application" element={<ApplicationFormPage />} />
        <Route path="login " element={<LoginPage />} />
        <Route path="admin/trips/list" element={<AdminHomePage />} />
        <Route path="admin/trips/create" element={<CreateTrip />} />
        <Route path="admin/trips/:id " element={<TripDetailsPage />} />
      </Routs>
    </BrowserRouter>
  );
};
