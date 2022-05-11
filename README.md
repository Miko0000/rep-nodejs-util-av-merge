# util-av-merge

Merge a video file with an audio file

## syntax
```js
mer(pathToVideo, pathToAudio, pathForResult, callback);

[String: pathToVideo]
	A string pointing to the video file

[String: pathToAudio]
	A string pointing to the audio file

[String: pathForResult]
	A string pointing to the location reserved to be used to write the resulting video

[Function: callback(error, result)]
	Function to call upon processing the video
		[Error: error]
			Error object returned by the process

		[String: result]
			A String pointing to the (result) file location
```

## example usage
```js
function callback(err, res){
	if(err)
		throw err;

	const video = res;
	// do something with the video
};

void mer(
	"video.mp4", "audio.mp3", "result.mp4",
	callback
);
```

## dependency
[FFMPEG](https://ffmpeg.org/) installed and accessible by nodejs `require("child_process").spawn`