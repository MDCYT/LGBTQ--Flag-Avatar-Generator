let imageIn;
let image = null;
let canvas;
let imageorgnl = null;
const grayImage = null;
let outImage;
let pixel;
let red;
let green;
let blue;
let avgColor;

function loadImage(image2) {
  image = new SimpleImage(image2);
  imageorgnl = new SimpleImage(image2);
  canvas = document.getElementById("c1");
  document.getElementById("canvas").style.display = "block";
  image.drawTo(canvas);
}

$ = function (id) {
  return document.getElementById(id);
};

$("otherimage").onclick = function () {
  swal("Select a social network", {
    buttons: {
      github: {
        text: "Github",
        value: "github",
      },
      facebook: {
        text: "Reddit",
        value: "reddit",
      },
      twitter: {
        text: "Twitter",
        value: "twitter",
      },
    },
  }).then(async (value) => {
    switch (value) {
      case "github":
        swal({
          text: "Put your Github username",
          content: "input",
          button: {
            text: "Search!",
            closeModal: false,
          },
        })
          .then(async (name) => {
            if (!name) throw null;

            return await fetch(`https://api.github.com/users/${name}`);
          })
          .then(async (results) => {
            return results.json();
          })
          .then(async (json) => {
            const newImage = json.avatar_url;

            if (!newImage) {
              return swal("User not found!");
            }

            const getBase64FromUrl = async (url) => {
              const data = await fetch(url);
              const blob = await data.blob();
              return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                  const base64data = reader.result;
                  resolve(base64data);
                };
              });
            };

            // Create new image
            image = await getBase64FromUrl(newImage);
            loadImage(image);

            swal(
              "Ready to go!",
              "The profile picture has been loaded!",
              "success"
            );
          })
          .catch((err) => {
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
        break;

      case "twitter":
        swal({
          text: "Put your Twitter username",
          content: "input",
          button: {
            text: "Search!",
            closeModal: false,
          },
        })
          .then(async (name) => {
            if (!name) throw null;

            return await fetch(`https://unavatar.io/twitter/${name}`);
          })
          .then(async (results) => {
            return results;
          })
          .then(async (json) => {
            const newImage = json.url;

            if (!newImage) {
              return swal("User not found!");
            }

            const getBase64FromUrl = async (url) => {
              const data = await fetch(url);
              const blob = await data.blob();
              return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                  const base64data = reader.result;
                  resolve(base64data);
                };
              });
            };

            // Create new image
            image = await getBase64FromUrl(newImage);
            loadImage(image);

            swal(
              "Ready to go!",
              "The profile picture has been loaded!",
              "success"
            );
          })
          .catch((err) => {
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
        break;

      case "reddit":
        swal({
          text: "Put your Reddit username",
          content: "input",
          button: {
            text: "Search!",
            closeModal: false,
          },
        })
          .then(async (name) => {
            if (!name) throw null;

            return await fetch(`https://unavatar.io/reddit/${name}`);
          })
          .then(async (results) => {
            return results;
          })
          .then(async (json) => {
            const newImage = json.url;

            if (!newImage) {
              return swal("User not found!");
            }

            const getBase64FromUrl = async (url) => {
              const data = await fetch(url);
              const blob = await data.blob();
              return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                  const base64data = reader.result;
                  resolve(base64data);
                };
              });
            };

            // Create new image
            image = await getBase64FromUrl(newImage);
            loadImage(image);

            swal(
              "Ready to go!",
              "The profile picture has been loaded!",
              "success"
            );
          })
          .catch((err) => {
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
        break;

      default:
        break;
    }
  });
};

function doReset() {
  outImage = new SimpleImage(image);
  outImage.drawTo(canvas);
}

function checkImageLoad() {
  if (image === null) {
    swal("Error", "Please Load an Image", "error");

    return false;
  } else {
    return true;
  }
}
// Main function for Rainbow
function doRainbow() {
  if (checkImageLoad()) drawLGBT(image, canvas);
}

// Main function for Rainbow
function doAsexual() {
  if (checkImageLoad()) drawAsexual(image, canvas);
}

function doBisexual() {
  if (checkImageLoad()) drawBisexual(image, canvas);
}

function doPansexual() {
  if (checkImageLoad()) drawPansexual(image, canvas);
}

function doGay() {
  if (checkImageLoad()) drawGay(image, canvas);
}

function doLesbian() {
  if (checkImageLoad()) drawLesbian(image, canvas);
}

function doTransexual() {
  if (checkImageLoad()) drawTransexual(image, canvas);
}

function doAromantic() {
  if (checkImageLoad()) drawAromantic(image, canvas);
}

function doStraight() {
  if (checkImageLoad()) drawStraight(image, canvas);
}

function doNonBinary() {
  if (checkImageLoad()) drawNonBinary(image, canvas);
}

function doPeru() {
  if (checkImageLoad()) drawPeru(image, canvas);
}
