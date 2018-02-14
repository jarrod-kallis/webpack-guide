import React from 'react';

import cssClasses from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const PizzaImage = props => (
  <div className={cssClasses.PizzaImage}>
    <img src={PizzaImage} className={cssClasses.Image} />
  </div>
);

export default PizzaImage;
