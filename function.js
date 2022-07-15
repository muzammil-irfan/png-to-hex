const fs = require("fs");
//enter file address from this function root directory. If image is in the same root then just paste the name of image
const imageFunction = (imageAddress) => {
  const imageBuffer = fs.readFileSync(`./${imageAddress}`);
  const imageHex = imageBuffer.toString("hex");
  fs.writeFile(
    `${imageAddress.slice(
      0,
      imageAddress.length - imageAddress.includes("jpeg") ? 5 : 4
    )}.txt`, //slice is used here to remove extension of image
    imageHex,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File created successfully");
      }
    }
  );
};
imageFunction("zebra.jpg"); //If image is in the same directory then put image name only
