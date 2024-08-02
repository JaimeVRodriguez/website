import React from 'react';
import { RouterProvider } from 'react-router-dom';
import '../src/styles/Global.css'
import {appRouter} from "./routes/AppRoutes";

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
