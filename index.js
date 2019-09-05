'use strict';

const _ = require('lodash');

function writeIn(ballot) {
  const isValid = vote => _.isString(vote) && vote !== '';
  // filter while iterating to avoid repeated loops
  const groupedVotes = ballot.reduce((acc, vote) => {
    if (isValid(vote)) {
      // consider that the candidate is the same regardless of case
      const key = vote.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
    }
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

  return _.startCase(winner.name);
}


module.exports = {
  writeIn
};

