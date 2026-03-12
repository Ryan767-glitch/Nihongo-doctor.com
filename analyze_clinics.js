const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/1/.gemini/antigravity/scratch/recovered/src/data/clinics.json', 'utf8'));

const continents = [...new Set(data.map(c => c.continent))];
console.log('Continents:', continents);

const lastId = Math.max(...data.map(c => parseInt(c.id) || 0));
console.log('Last ID:', lastId);
