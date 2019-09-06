'use strict';

const _ = require('lodash');

function writeIn(ballot) {
  const groupedVotes = ballot.reduce((acc, vote) => {
    acc[vote] = (acc[vote] || 0) + 1;
    return acc;
  }, {});

  // check if each candidate is better positioned than the last one
  const winner = Object
    .entries(groupedVotes)
    .reduce((previousCandidate, [name, votes]) => {
      if (votes > previousCandidate.votes ||
        (votes === previousCandidate.votes && name.localeCompare(previousCandidate.name) === 1))
        return {name, votes};
      return previousCandidate;
    }, {name: '', votes: 0});

  return winner.name;
}

// Complete the csRush function below.
function csRush(n, m, css, customers, vacant_css) {

  const asc = (a, b) => a[1] - b[1];

  const available_css = css
    // filter first to avoid checking availability for every customer
    .filter(([id]) => !vacant_css.includes(id))
    .sort(asc);

  const sorted_customers = customers.sort(asc);

  const css_map = {}; // cs id > nbr of customers
  const max_css_xp = _.last(available_css)[1];
  let css_index = 0; // current cs that fulfils the required xp

  sorted_customers
    .every(([customer_id, customer_xp]) => {

      // text implies >=, but test case says >
      if (customer_xp > max_css_xp) {
        // cannot serve anyone else, just break
        return false;
      }

      let current_cs = available_css[css_index];
      while(customer_xp > current_cs[1]) {
        // go to next cs
        css_index++;
        current_cs = available_css[css_index];
      }

      const [cs_id] = current_cs;
      css_map[cs_id] = (css_map[cs_id] || 0) + 1;

      // got a match, keep going
      return true;
    });

  const css_calls = Object
    .entries(css_map) // cs_id, nbr of customers
    .sort(asc);

  if(css_calls.length === 0) {
    // no results
    // no response has been explicitly specified for this case,
    // so we just assume its a 'draw'
    return '0';
  }
  if(css_calls.length > 1 && _.nth(css_calls, -1)[1] === _.nth(css_calls, -2)[1]) {
    // draw
    return '0';
  }

  return _.last(css_calls)[0];
}

module.exports = {
  csRush,
  writeIn,
};

