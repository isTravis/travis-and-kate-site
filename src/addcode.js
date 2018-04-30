const json = require('./rawInvites.json');

const withCode = json.map((item)=> {
	return {
		...item,
		code: `${Math.floor(Math.random()*90000) + 10000}`,
	};
});
const uniques = [...new Set(withCode.map(item => item.code))];
console.log("Is Unique: ", uniques.length === withCode.length );
console.log(JSON.stringify(withCode, null, 4));