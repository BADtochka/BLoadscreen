import { tryCatch } from "badlib";
import config from "config";
export const player = document.querySelector("#player") as HTMLAudioElement;

async function startAutoPlay() {
  if (!player) return;
  const muted = localStorage.getItem("muted");

  if (muted) {
    player.volume = 0;
  } else {
    player.volume = config.defaultVolume / 100;
  }

  player.src = config.audioLink;
  tryCatch(player.play());
  document.onclick = async () => {
    player.play();
  };
}

startAutoPlay();
