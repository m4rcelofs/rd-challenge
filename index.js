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


module.exports = {
  writeIn
};

