import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, DataContext } from "./contexts/dataContext";
import {FilterProvider,FilterContext} from './contexts/filterContext';
import { AuthProvider,AuthContext } from "./contexts/authenticationContext";

export {AuthContext};

export {DataContext,FilterContext};
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <DataProvider>
        <FilterProvider>
         <App />
        </FilterProvider>
    </DataProvider>
    </AuthProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
