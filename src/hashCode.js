const json = require('./rawInvites.json');

var hash = function(s) {
	var a = 1, c = 0, h, o;
	if (s) {
		a = 0;
		for (h = s.length - 1; h >= 0; h--) {
			o = s.charCodeAt(h);
			a = (a<<6&268435455) + o + (o<<14);
			c = a & 266338304;
			a = c!==0?a^c>>21:a;
		}
	}
	return String(a);
};

const withHashCode = json.reduce((prev, curr)=> {
	const hashedCode = hash(curr.code);
	prev[hashedCode] = {
		...curr,
		hash: hashedCode,
		code: undefined,
	};
	return prev;
}, {});
// const uniques = [...new Set(withHashCode.map(item => item.hash))];
// console.log("Is Unique: ", uniques.length === withHashCode.length );
console.log(JSON.stringify(withHashCode, null, 4));