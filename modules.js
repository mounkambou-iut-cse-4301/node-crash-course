const {people, ...rest}=require('./people');
console.log(rest.age);

const os=require('os');
console.log(os.platform(), os.homedir());