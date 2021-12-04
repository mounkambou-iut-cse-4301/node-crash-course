const fs = require("fs");

// Reading files
// fs.readFile('./docs/blog1.txt',(err, data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// })

//Writing files
// const name='heollo abdel';
// fs.writeFile('./docs/blog1.txt',name,()=>{
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt',name,()=>{
//     console.log('file was written');
// })

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//delete
if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}