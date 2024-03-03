import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import pendu0 from './dessin/Hangman-0.png'
import pendu1 from './dessin/Hangman-1.png'
import pendu2 from './dessin/Hangman-2.png'
import pendu3 from './dessin/Hangman-3.png'
import pendu4 from './dessin/Hangman-4.png'
import pendu5 from './dessin/Hangman-5.png'
import './style.css'

const Debut = () => {
  const location = useLocation();
  const motRec = location.state.mot;
  return (
    <div>
      <Affichage mot={motRec} />
    </div>
  )


}

class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mot: props.mot,
      tableau: [],
      tirets: new Array(this.props.mot.length).fill('_'),
      score: 7,
      perdu: false,
      gagné: false,
      minutePartie: Date.now(),
      secondePartie : Date.now()
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Permet de mettre à jour le tableau en récupérant la valeur 
   * @param {*} event 
   */
  handleSubmit(event) {
    // event.target[0].value :  Afin de récupérer la valeur passée par le formulaire
    const lettre = event.target[0].value;
    const lettreMaj = lettre.toUpperCase();
    // Permet de vérifier que l'utilisateur n'a pas déjà soumis cette lettre
    let lettreUnique = true;
    for (let i = 0; i < this.state.tableau.length; i++) {
      let unePaire = this.state.tableau[i];
      let uneLettre = unePaire.lettre;
      if (uneLettre === lettreMaj) {
        lettreUnique = false
      }
    }
    // Si la lettre a déjà été testé, afficher un pop-up
    if (!lettreUnique) {
      alert('Vous avez déjà saisi la lettre : '.concat(lettreMaj))
      // Sinon la rajouter dans le tableau
    } else {
      const majTabLettres = new Promise((resolve, reject) => {
        this.setState(
          { tableau: this.state.tableau.concat({ lettre: lettreMaj, id: lettreMaj }) }
        )
        setTimeout(resolve(), 400)
      })
      event.preventDefault();
      // On fait apparaitre les lettres correspondantes au bon endroit
      majTabLettres.then(() => { this.remplirTirets() })
    }
    event.preventDefault();
  }

  remplirTirets() {
    // Boolean permettant de vérifier si l'utilisateur a choisi une lettre du mot initial ou pas
    let lettreValide = false;
    // Mot à deviner
    let mot = this.state.mot;
    // Tableau des différentes tentatives de lettres
    let tableau = this.state.tableau;
    let unePaire = tableau[tableau.length - 1];
    let uneLettre = unePaire.lettre;
    for (let i = 0; i < mot.length; i++) {
      let lettreMot = mot.charAt(i);
      let lettreMotMajuscule = lettreMot.toUpperCase();
      if (lettreMotMajuscule === uneLettre) {
        lettreValide = true;
        this.setState(
          {
            tirets: this.state.tirets.fill(lettreMotMajuscule, i, i + 1)
          }
        )
      }

    }
    // Si l'utilisateur a choisi une mauvaise lettre, lui enlever un point
    if (!lettreValide) this.updateScore();
    // Sinon vérifier si il n'a pas gagné
    else this.redirectionVictoire();
  }

  updateScore() {
    this.setState(
      {
        score: this.state.score - 1
      }
    )
    this.redirectionDefaite();
  }

  /**
   * Permet de vérifier si l'utilisateur a perdu
   * Si c'est le cas, met à jour l'état, ce qui entraînera une redirection vers la page /défaite
   */
  redirectionDefaite() {
    if (this.state.score === 1) {
      this.setState(
        {
          perdu: true
        }
      )
    }
  }

  /**
   * Permet de vérifier si l'utilisateur a gagné
   * Si c'est le cas, met à jour l'état, ce qui entraînera une redirection vers la page /victoire
   */
  redirectionVictoire() {
    if (!this.state.tirets.includes('_')) {
      let end = Date.now()
      console.log(end)
      console.log(this.state.minutePartie)
      this.setState(
        {
          gagné: true,
          minutePartie : parseInt((end - this.state.minutePartie) / 1000 / 60, 10),
          secondePartie:  parseInt((end - this.state.secondePartie) / 1000 % 60, 10),
        }
      )
    }
  }



  render() {
    return (
      <div>
        Mot à deviner :
        <br></br>
        <ul>
          {this.state.tirets.map(tableau => (<ul id="text">{tableau}</ul>))}
        </ul>
        <br></br>
        {this.state.tableau.length!==0 && <>Lettre que vous avez déjà saisi</>}
        {/* Permet d'afficher un tableau, chaque élément d'un tableau doit avoir un id unique */}
        {this.state.tableau.map(tableau => (<td key={tableau.id}>{tableau.lettre}</td>))}
        <ChoixLettre tableau={this.state.tableau} updateTableau={this.handleSubmit} />
        <br></br>
        Score : {this.state.score}
        {/* {https://reactjs.org/docs/conditional-rendering.html
             Permet d'effectuer une action seulement si une condition
             est vérifié } */}
        {this.state.perdu && <Navigate to="/defaite" state={{ mot: this.state.mot }} />}
        {this.state.gagné && <Navigate to="/victoire" state={{ score: this.state.score, minute: this.state.minutePartie, seconde : this.state.secondePartie}} />}  
        {this.state.score===6 && <img id='pendu' src={pendu0} alt="pendu0"/>}
        {this.state.score===5 && <img id='pendu' src={pendu1} alt="pendu1"/>}
        {this.state.score===4 && <img id='pendu' src={pendu2} alt="pendu2"/>}
        {this.state.score===3 && <img id='pendu' src={pendu3} alt="pendu3"/>}
        {this.state.score===2 && <img id='pendu' src={pendu4} alt="pendu4"/>}
        {this.state.score===1 && <img id='pendu' src={pendu5} alt="pendu5"/>}
        
      </div>
    
    )
  }

}


/**
 * Afficher un tableau représentant toutes les lettres déjà testé
 */

/* Le nom doit OBLIGATOIREMENT commencer par une majuscule
 Warning: The tag <choixLettre> is unrecognized in this browser. 
 If you meant to render a React component, start its name with an uppercase letter. 
*/
class ChoixLettre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tableau: this.props.tableau
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateTableau = this.updateTableau.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  updateTableau(event) {
    this.props.updateTableau(event);
    this.setState({ value: '' });
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.updateTableau}>
          <label>
            <br></br>
            Veuillez choisir une nouvelle lettre :
            <p></p>
            <input type="text" value={this.state.value} onChange={this.handleChange} title="Une lettre" pattern='[a-zA-Z]' maxLength={1} required />
          </label>
          {/* Pour ne pas que l'envoie d'un formulaire redirige vers une autre page
              {The default type of a button tag is "submit" which means clicking the button will submit your form 
               (appending the ? to your url).
              To fix your example, you can add type="button" to your buttons }
            */ }
          <input className='button' type="submit" value="Envoyer" />
        </form>
      </div>
    )
  }
}


export default Debut;