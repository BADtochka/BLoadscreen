import config from "config";
import YouTubePlayer from "youtube-player";
export const player = YouTubePlayer("video-player");

async function startAutoPlay() {
  const muted = localStorage.getItem("muted");

  if (muted !== null) {
    await player.setVolume(0);
  } else {
    await player.setVolume(config.defaultVolume);
  }

  await player.loadVideoById(config.videoID);
  await player.playVideo();
  document.onclick = async () => {
    await player.playVideo();
  };
}

startAutoPlay();
