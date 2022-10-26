import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input
            type="text"
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          <textarea
            name=""
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name=""
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            name=""
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            name=""
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select
            name=""
            id="rare-input"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name=""
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar

        </button>
      </form>
    );
  }
}
