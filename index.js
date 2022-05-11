/*
	util-av-merge
	
	Merge an audio file with a video file
	
	usage
		function callback(err, res){
			if(err)
				// do something with err
			
			// do something with res
		};
		
		const options = {
			
		};
		
		void mer(
			"path-to-video.vext", "path-to-audio.aext", "path-to-write.rext",
			options, callback
		);
*/

const { spawn } = require("node:child_process");

module.exports = function mer(vp, ap, op, cb){	
	const cp = spawn("ffmpeg",
		(`-i $0 -i $1 -c:v copy -map 0:v:0 -map 1:a:0 -shortest ${op}`)
			.split(/ +/)
			.map(el => {
				if(el[0] == '$')
					return arguments[el.slice(1)];
				return el;
			})
	);
	const err = new Error();
	err.name = "av-merge-error";
	
	cp.stderr.on("data", data => 
		err.message += data.toString()
	);
	
	cp.on("exit", code => {
		if(code == 0)
			return cb(null, op);
		
		err.code = code;
		cb(err, null);
	});
}