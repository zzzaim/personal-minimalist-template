module.exports = {
  plugins: {
    "posthtml-lorem": {},
    "posthtml-inline-svg": {
      cwd: process.cwd() + "/src",
      tag: "image"
    }
  }
};
