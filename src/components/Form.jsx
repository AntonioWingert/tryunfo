import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="w-full max-w-sm m-10">
        <form className="shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4">
          <p className="block text-gray-700 font-bold mb-2 text-xl text-center">
            Adicione sua Carta

          </p>
          <label
            htmlFor="name-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Nome da Carta:
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
              placeholder="Insira aqui o nome da carta"
            />
          </label>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description-input"
          >
            Descrição da carta:
            <textarea
              name="cardDescription"
              id="description-input"
              cols="30"
              rows="5"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Insira a descrição da sua carta"
            />
          </label>
          <label
            htmlFor="attr1-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Força:
            <input
              type="number"
              name="cardAttr1"
              id="attr1-input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="p-4 w-full"
            />
          </label>
          <label
            htmlFor="attr2-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Velocidade:
            <input
              type="number"
              name="cardAttr2"
              id="attr2-input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="p-4 w-full"
            />
          </label>
          <label
            htmlFor="attr3-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Inteligencia:
            <input
              type="number"
              name="cardAttr3"
              id="attr3-input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="p-4 w-full"
            />
          </label>
          <label
            htmlFor="image-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Insira a imagem da sua Carta
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
              placeholder="cole sua url aqui"
              className="p-6 w-full text-lg"
            />
          </label>
          <label
            htmlFor="rare-input"
            className="block text-gray-700 font-bold mb-2"
          >
            Raridade:
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              className="p-4 w-full"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option selected value="muito raro">Muito raro</option>
            </select>
          </label>
          {hasTrunfo
            ? (
              <p
                data-testid="trunfo-input"
                className="block text-gray-700 font-bold mb-2 text-center m-5"
              >
                Você já tem um Super Trunfo em seu baralho

              </p>
            ) : (
              <label
                htmlFor="trunfo-input"
                className="block text-gray-700 font-bold mb-2 text-center"
              >
                SUPER TRUNFO
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="trunfo-input"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="ml-5 w-5 h-5 mt-2"
                />
              </label>
            )}
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="w-full p-5 bg-green-200"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
