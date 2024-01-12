import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    {
        message: "Enter the URL: ",
        name: "URL",
    },
    
    ])
    .then((answers) => {
        const url = answers.URL
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr_image.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
      
        } else {
      
    }
  });