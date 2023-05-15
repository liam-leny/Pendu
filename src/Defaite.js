import React from "react";
import { useLocation, Link } from "react-router-dom";
import pendu6 from './dessin/Hangman-6.png'

const Debut = () => {
  const location = useLocation();
  const motRec = location.state.mot;
  return (
    <div>
      <Affichage mot={motRec}  />
    </div>
  )


}

class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div>
      <h2>Perdu</h2>
      Le mot que vous deviez deviner était : <h4>{this.props.mot}</h4>
      <img id='pendu' src={pendu6} alt="pendu6"/>
      <br></br>
        <Link to="/">
              <button type="submit">
                Refaire une autre partie
              </button>
        </Link>
      </div>
    )
  }

}


export default Debut;