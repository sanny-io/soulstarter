import React from 'react';
import Calculator from './Calculator';
import data from '../../data';

export default function (props) {
  return <Calculator stats={data.stats} classes={data.classes} {...props} />
}