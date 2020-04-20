import React, { useState } from 'react';
import Stat from './Stat';

const sortClasses = (classes, statValues) => {
  const result = [];

  for (const gameClass of classes) {
    let minimumLevel = gameClass.level;

    for (const [stat, value] of Object.entries(statValues)) {
      if (value > gameClass.stats[stat]) {
        minimumLevel += value - gameClass.stats[stat]; 
      }
    }

    result.push([gameClass.name, minimumLevel]);
  }

  result.sort((a, b) => a[1] > b[1]);

  return result;
}

export default function Calculator({ stats, classes }) {
  // Map the stats to have a value of 0.
  const [statValues, setStatValues] = useState(stats.reduce((result, item) => {
    result[item] = 0;
    return result;
  }, {}));

  return (
    <form className="d-flex justify-content-center flex-column flex-sm-row">
      <div className="d-flex flex-column">
        {stats.map((stat, index) => {
          return <Stat key={index} updateValue={value => setStatValues({ ...statValues, [stat]: value })} >{stat}</Stat>
        })}
      </div>
      <ol className="p-0">
        {
          sortClasses(classes, statValues).map((result, index) => {
            return <li className="list-group-item" key={index}>{result[0]} ({result[1]})</li>
          })
        }
      </ol>
    </form>
  );
}