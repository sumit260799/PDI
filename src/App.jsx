import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, InspectorList, EquipmentList, CallList } from "./pages";
import UserLayout from "./Layouts/UserLayout";
import { DashboardContent } from "./components";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<DashboardContent />} />
          <Route path="/inspector-list" element={<InspectorList />} />
          <Route path="/equipment-list" element={<EquipmentList />} />
          <Route path="/call-list" element={<CallList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
