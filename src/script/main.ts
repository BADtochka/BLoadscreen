import config from "config";
import { player } from "./player";
import { splide } from "./splide";

// #region PARSING IMAGES

function createSlide(imgName: string) {
  const slide = document.createElement("li");
  slide.classList.add("splide__slide");
  const image = document.createElement("img");
  image.src = `/images/${imgName}`;
  slide.append(image);
  return slide;
}

const images = config.images;

images.forEach((image) => {
  splide.add(createSlide(image));
});
nextSlide();

function nextSlide() {
  if (config.randomizeImages) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return splide.go(randomIndex);
  }
  splide.go("+1");
}

setInterval(nextSlide, config.interval * 1000);
// #endregion

// #region INIT DATA AND STYLES

declare const window: Window & {
  invokeNative: (action: string, params?: any) => void;
};

document.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", (e: any) => {
    e.preventDefault();

    if (window.invokeNative) {
      window.invokeNative("openUrl", e.target.href);
    } else {
      window.open(e.target.href);
    }
  });
});

const title = document.querySelector(".info__title") as HTMLHeadingElement;
const root = document.querySelector(":root") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const progressBar = document.querySelector(".loading__progress__bar") as HTMLDivElement;

const boosty = document.querySelector(".links .boosty") as HTMLAnchorElement;
const discord = document.querySelector(".links .discord") as HTMLAnchorElement;
const vk = document.querySelector(".links .vk") as HTMLAnchorElement;

boosty.href = config.socials.boosty;
discord.href = config.socials.discord;
vk.href = config.socials.vk;

const muteButton = document.querySelector(".mute__button") as HTMLImageElement;
const muted = localStorage.getItem("muted");

root.style.setProperty("--blur", `${config.blurValue}px`);
root.style.setProperty("--opacity", `${config.opacity}`);

title.innerText = config.title;

logo.src = `/static/${config.logoName}`;

function changeMuteButton(muted: string | null) {
  if (muted) {
    muteButton.classList.add("active");
  } else {
    muteButton.classList.remove("active");
  }
}

changeMuteButton(muted);

// #endregion

// #region Volume

async function switchMute() {
  const muted = localStorage.getItem("muted");

  if (muted) {
    await player.setVolume(config.defaultVolume);
    localStorage.removeItem("muted");
    changeMuteButton(null);
  } else {
    localStorage.setItem("muted", "true");
    await player.setVolume(0);
    changeMuteButton("true");
  }
}

muteButton.addEventListener("click", async () => {
  switchMute();
});

window.addEventListener("keypress", () => {
  switchMute();
});

// #endregion

window.addEventListener("message", function (event) {
  if (event.data.eventName === "loadProgress") {
    progressBar.style.width = `${event.data.loadFraction * 100}%`;
  }
});
