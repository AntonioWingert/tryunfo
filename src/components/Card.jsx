import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeCard,
    } = this.props;

    return (
      <main className="w-full max-w-sm m-10">
        <div className="shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4 h-full border-4">
          <p
            data-testid="name-card"
            className="block text-gray-700 font-bold mb-2 uppercase text-center"
          >
            {cardName}

          </p>
          <img
            src={ cardImage }
            alt="Nome da carta"
            data-testid="image-card"
            className="block text-gray-700 font-bold mb-2 w-full h-64"
          />
          <p
            data-testid="description-card"
            className="block text-gray-700 font-bold mb-2 text-center"
          >
            {cardDescription}

          </p>
          <div>
            <p
              data-testid="attr1-card"
              className="block text-gray-700 font-bold mb-2"
            >
              Força ------------
              {cardAttr1}
            </p>
            <p
              data-testid="attr2-card"
              className="block text-gray-700 font-bold mb-2"
            >
              Velocidade ----
              {cardAttr2}
            </p>
            <p
              data-testid="attr3-card"
              className="block text-gray-700 font-bold mb-2"
            >
              Inteligencia ---
              {cardAttr3}
            </p>
          </div>
          <p
            data-testid="rare-card"
            className="block text-gray-700 font-bold mb-2 capitalize"
          >
            { cardRare }

          </p>
          {cardTrunfo && (
            <p
              data-testid="trunfo-card"
              className="block text-red-700 font-bold mb-2"
            >
              Super Trunfo

            </p>
          )}
          {
            removeCard && (
              <button
                data-testid="delete-button"
                type="submit"
                onClick={ () => removeCard(cardName) }
                className="w-full p-5 bg-red-200"
              >
                Excluir
              </button>)
          }
        </div>
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeCard: PropTypes.func.isRequired,
};
