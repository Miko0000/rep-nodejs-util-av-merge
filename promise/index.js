module.exports = function mer(){
	return new Promise((res, rej) => require("..")
		.apply(null, [ ...Array.from(arguments).slice(0, -1), function(e, r){
			if(e)
				rej(e);
			
			res(r);
		} ])
	);
}