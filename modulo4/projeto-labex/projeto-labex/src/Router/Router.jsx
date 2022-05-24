import React from "react";
import LoginPage from "../Pages/LoginPage";
import ListTripsPage from "../Pages/ListTripsPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import HomePage from "../Pages/HomePage";
import { BrowserRouter,Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="trips/list" element={<ListTripsPage />} />
        <Route path="trips/application/:id" element={<ApplicationFormPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin/trips/list" element={<AdminHomePage />} />
        <Route path="admin/trips/create" element={<CreateTripPage />} />
        <Route path="admin/trips/:id " element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
