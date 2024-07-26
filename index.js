function superbowlWin(record) {
  // Iterate over each game record
  for (let game of record) {
      // Check if the team is the Denver Broncos and they won
      if (game.team === 'Denver Broncos' && game.result === 'W') {
          return game.year; // Return the year of the win
      }
  }
  // If no win is found, return undefined
  return undefined;
}

// Example usage
const record = [
  { year: 1997, team: 'Denver Broncos', result: 'W' },
  { year: 1998, team: 'Denver Broncos', result: 'W' },
  { year: 1999, team: 'Denver Broncos', result: 'L' },
  { year: 2015, team: 'Denver Broncos', result: 'W' }
];

console.log(superbowlWin(record)); // Output: 1997
