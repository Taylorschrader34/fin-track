import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Reports from "./pages/report/Reports"
import MonthlyReports from "./pages/report/reports/MonthlyReport"
import YearlyReports from "./pages/report/reports/YearlyReport"

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Reports/Monthly" element={<Reports reportType={"monthly"}/>}/>
            <Route path="Reports/Yearly" element={<Reports reportType={"yearly"}/>}/>
            <Route path="Reports" element={<Reports />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
