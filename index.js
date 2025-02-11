import qr from "qr-image";
import fs from "fs";
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        message: "Type in your URL!",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
