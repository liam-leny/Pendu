import React from "react";
import { useLocation, Link } from "react-router-dom";

const Debut = () => {
  const location = useLocation();
  const scoreRec = location.state.score;
  const minuteRec = location.state.minute;
  const secondeRec = location.state.seconde;
  return (
    <div>
      <Affichage score={scoreRec} minute={minuteRec} seconde={secondeRec}  />
    </div>
  )


}

class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {     
      minute : props.minute,
      seconde: props.seconde,
 
    }
    console.log('Minute : ' + this.props.minute)
    console.log('Seconde : ' + this.props.seconde)

  }




  render() {
    return (
      <div>
      <h2>Gagné</h2>
      Vous avez réussi avec un score de : <h4>{this.props.score}</h4> 
      Avec un temps de {this.state.minute}<>&nbsp;</>
      {(this.props.minute===0 || this.props.minute===1) ? <>minute</> :  <>minutes</>} 
      <>&nbsp;</>et {this.state.seconde}<>&nbsp;</>
      {(this.props.seconde===0 || this.props.seconde===1) ? <>seconde</> :  <>secondes</>} 
      {this.props.score===10 &&  <h3>Félicitation, un score parfait ! Beaucoup de chance ? Un instinct extraordinaire ? Un brin de tricherie ? </h3>}
      {this.props.score===1 && <h3>La révélation, bien joué ! </h3>}
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