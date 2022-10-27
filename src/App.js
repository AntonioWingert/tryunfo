import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  initialState = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    filterName: '',
    filterRarity: '',
    filterTrunfo: false,
  };

  state = {
    ...this.initialState,
    storedCards: [],
  };

  validateTxt = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    return !(
      !cardName.length
      || !cardDescription.length
      || !cardImage.length
      || !cardRare.length
    );
  };

  validateButtonAttrb = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    const sumLimit = 210;
    if (cardAttr1 + cardAttr2 + cardAttr3 > sumLimit) return false;

    const atrrbLimit = 90;
    if (cardAttr1 > atrrbLimit
      || cardAttr2 > atrrbLimit
      || cardAttr3 > atrrbLimit) return false;

    return !(cardAttr1 < 0
        || cardAttr2 < 0
        || cardAttr3 < 0);
  };

  validateBttn = () => {
    if (!this.validateButtonAttrb() || !this.validateTxt()) {
      this.setState({ isSaveButtonDisabled: true });
      return;
    }
    this.setState({ isSaveButtonDisabled: false });
  };

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    }, () => {
      this.validateBttn();
    });
  };

  isTrunfo = () => {
    const { storedCards } = this.state;
    this.setState({ hasTrunfo: storedCards.some((card) => card.cardTrunfo) });
  };

  saveState = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      storedCards,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      ...this.initialState,
      storedCards: [...storedCards, card],
    }, () => {
      this.isTrunfo();
    });
  };

  removeCard = (cardName) => {
    const { storedCards } = this.state;
    const filteredCards = storedCards
      .filter((card) => card.cardName !== cardName);
    this.setState(
      {
        storedCards: filteredCards },
      () => {
        this.isTrunfo();
      },
    );
  };

  filterTrunfoCard = () => {
    const { storedCards } = this.state;
    return storedCards
      .filter((card) => card.cardTrunfo === true);
  };

  filterCard = () => {
    const { storedCards, filterName, filterRarity } = this.state;
    if (filterRarity === 'todas') return storedCards;
    let cardFiltered;
    if (filterName && filterRarity) {
      cardFiltered = storedCards
        .filter((card) => card.cardName
          .split(' ').includes(filterName) && card.cardRare === filterRarity);
    }
    if (filterName) {
      cardFiltered = storedCards
        .filter((card) => card.cardName
          .split(' ').includes(filterName));
    }
    if (filterRarity) {
      cardFiltered = storedCards
        .filter((card) => card.cardRare === filterRarity);
    }
    return cardFiltered;
  };

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
      storedCards,
      filterName,
      filterRarity,
      filterTrunfo,
    } = this.state;

    const renderArray = () => {
      if (filterTrunfo) return this.filterTrunfoCard();
      const storedFilteredCards = this.filterCard();
      if (filterName || filterRarity) return storedFilteredCards;
      return storedCards;
    };
    return (
      <div className="flex flex-wrap justify-center mt-20">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveState }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <input
          type="text"
          data-testid="name-filter"
          name="filterName"
          value={ filterName }
          onChange={ this.onInputChange }
          disabled={ filterTrunfo }
        />
        <select
          data-testid="rare-filter"
          onChange={ this.onInputChange }
          value={ filterRarity }
          name="filterRarity"
          disabled={ filterTrunfo }
        >
          <option value="normal"> Normal</option>
          <option value="raro"> Raro</option>
          <option value="muito raro"> Muito Raro</option>
          <option value="todas"> Todas</option>
        </select>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ this.onInputChange }
            name="filterTrunfo"
            checked={ filterTrunfo }
          />
        </label>
        {
          renderArray().map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              removeCard={ this.removeCard }
            />
          ))
        }
      </div>
    );
  }
}
export default App;
