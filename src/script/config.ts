const config = {
  // Video ID for background audio playing.
  // Can find it from https://www.youtube.com/watch?v=VIDEOIDHERE
  videoID: "wZexQtMd-UI",

  // Background audio volume.
  // Range: 0-100.
  defaultVolume: 10,

  // Images blur.
  // Values in px.
  blurValue: 10,

  // Images opacity.
  // Range: 0-1.
  opacity: 0.5,

  // Images fade interval (in seconds).
  interval: 5,

  // Loadscreen title.
  title: "Server Name",

  // Logo name in /static/ path.
  logoName: "logo.png",

  // Images name in public folder.
  // eg: ["img1.png", "img2.png"]
  images: ["blob.svg", "blob2.svg", "blob3.svg", "blob4.svg", "blob5.svg", "blob6.svg"],

  // Randomize images order.
  randomizeImages: true,

  // Socials links.
  socials: {
    boosty: "https://boosty.to/cotfw",
    discord: "https://discord.gg/MZGpAuZe42",
    vk: "https://vk.com/cotfw",
  },
};

export default config;
