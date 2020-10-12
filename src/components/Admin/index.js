import React, { useState } from "react";
import LoginAdmin from "./LoginAdmin";
import Dashboard from "./Dashboard";

function Admin() {
  const [admin, setAdmin] = useState(null);
  return <div>{admin ? <Dashboard /> : <LoginAdmin />}</div>;
}

export default Admin;
