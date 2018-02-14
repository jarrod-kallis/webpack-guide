import React from 'react';

import cssClasses from './PizzaImage.css';
import PizzaImg from '../../assets/pizza.jpg';

const PizzaImage = props => (
  <div className={cssClasses.PizzaImage}>
    <img src={PizzaImg} className={cssClasses.Image} />
  </div>
);

export default PizzaImage;
