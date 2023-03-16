const RPGgames = videogames.filter(game => game.genders.includes('RPG'));

const avgScore = RPGgames.reduce((total, game) => total + game.score, 0) / RPGgames.length;

console.log(avgScore);
