import React from 'react';
import Calculator from '../Calculator';
import '../../scss/bootstrap.scss';

export default function App() {
  return (
    <div className="container d-flex flex-column align-items-center pt-5">
      <div className="text-center">
        <h1 className="display-1">Soul Starter</h1>
        <p className="lead mb-4">Find the best Dark Souls 3 starter class.</p>
      </div>
      <Calculator />
    </div>
  );
}