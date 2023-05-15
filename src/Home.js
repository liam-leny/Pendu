import { Link } from 'react-router-dom';
import React from 'react';


class Affichage extends React.Component {
  render() {
    return (
      <div>
        <div className='titre'>
          Bienvenue sur le jeu du pendu
        </div>
        <br></br>
        <form>
          <label>
            Veuillez choisir votre mode de jeu
          </label>
          <nav>
            <p></p>
            {/*Permet de rediriger vers une autre page */}
            <Link to="/duo">
              <button type="submit">
                Deux joueurs
              </button>
            </Link>
            <Link to="/solo">
              <button type="submit">
                Un joueur
              </button>
            </Link>
          </nav>
        </form>
      </div>

    );
  }
}


export default Affichage;
