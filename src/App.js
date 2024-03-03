import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Home";
import Jeu from "./Jeu";
import Defaite from "./Defaite";
import Victoire from "./Victoire";
import Duo from "./Duo";
import Solo from "./Solo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*La route initiale est obligatoire et correspond au menu du site*/}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jeu" element={<Jeu />} />
        <Route exact path="/defaite" element={<Defaite />} />
        <Route exact path="/victoire" element={<Victoire />} />
        <Route exact path="/duo" element={<Duo />} />
        <Route exact path="/solo" element={<Solo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
