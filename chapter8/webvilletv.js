var position=0;
window.onload = function(){
	playList = ["video/preroll",
				"video/areyoupopular",
				"video/destinationearth"
			];
	video =  document.getElementById("video");
	video.addEventListener("ended",nextVideo,false);
	video.src= playList[position] + getFormatExtesnion();
	video.load();
	video.play();
}
function nextVideo() {
	position++;
	if(position >= playList.length){
		position = 0;
	}
	video.src = playList[position] + getFormatExtesnion();
	video.load();
	video.play();
}
function getFormatExtesnion(){
	if(video.canPlayType("video/mp4") != ""){
		return ".mp4";
	}else if(video.canPlayType("video/webm") != ""){
		return ".webm";
	}else if(video.canPlayType("video/ogg") != ""){
		return ".ogv";
	}
}