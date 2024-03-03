import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

class WordChoice extends React.Component {
  constructor(props) {
    super(props);
    // value correspond au mot choisi par l'utilisateur
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const majSaisieMot = new Promise((resolve, reject) => {
      this.setState({ value: event.target.value });
      setTimeout(resolve(), 400);
    });
    event.preventDefault();
    // On vérifie que la saisie de l'utilisateur est valide
    majSaisieMot.then(() => {
      this.verificationEntree();
    });
  }

  verificationEntree() {
    // Un mot ne peut comporte que des lettres de l'alphabet minuscules ou majuscules
    if (this.state.value.match("^[a-zA-Z]*$") === null) {
      alert("Veuillez saisir un mot");
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Mot que vous souhaitez faire deviner à votre ami :<p></p>
            <input
              type="text"
              pattern="^[a-zA-Z]+$"
              placeholder="Écrivez ici votre mot"
              maxLength={30}
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </label>
          <nav>
            <p></p>
            {/*Permet de rediriger vers une autre page en envoyant des données  */}
            <Link to="/jeu" state={{ mot: this.state.value }}>
              <button className="button" type="submit">
                Lancer la partie
              </button>
            </Link>
          </nav>
        </form>
      </div>
    );
  }
}

export default WordChoice;
