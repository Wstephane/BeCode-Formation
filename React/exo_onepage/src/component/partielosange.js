import React, { Component } from 'react';
import Losange from './partielosange/losange';

export default class Partielosange extends Component {
  render() {
    const losanges = [
      {losange: "fas fa-jedi", color: "red"},
      {losange: "fas fa-keynote", color: "green"},
      {losange: "fas fa-pastafarianism", color: "blue"},
      {losange: "fas fa-peace", color: "color"},
      {losange: "fas fa-place-of-worship", color: "color"},
      {losange: "fas fa-khanda", color: "white"},
    ];
    return (
      <div className="Partielosange">
        <p>Prout</p>
            <ul>
              {losanges.map((losangeObject, index) =>{
                return (
                  <Losange key={'losange/' + index} losangeValue={losangeObject} />
                )
            })}
            </ul>
      </div>
    );
  }
}