import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{
    message:"Type in your URL",
    name:"URL"
}])

.then((answer)=>{
    const url=answer.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt",url,(err)=>{
        if (err) throw err;
        console.log("THE FILE HAS BEEN SAVED");
    });
})

