import { Link } from 'react-router-dom';
import React from 'react';
import './style.css'


class Affichage extends React.Component {
  render() {
    return (
      <div>
        <div className='title'>
          Bienvenue sur le jeu du pendu
        </div>
        <br></br>
        <form>
          <label >
            Combien de joueurs êtes vous ?
          </label>
          <nav>
            <p></p>
            {/*Permet de rediriger vers une autre page */}
            <Link to="/duo">
              <button className='button' type="submit">
                Deux joueurs
              </button>
            </Link>
            <Link to="/solo">
              <button className='button' type="submit">
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
