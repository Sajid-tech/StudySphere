// in package we can install third party libraries and write scripts etc.. manage dependices and devdepencies and contain meta data of your projects 

// npm init or npm init -y (not ask anything here default template)

// dependencies :- required in production 

// devDependecies: only required in local developement and testing 


const loadsh = require('loadsh')

const names= ['sajid','hussain','majid','alex','ranjit']


const capitalize = loadsh.map(names,loadsh.capitalize)

console.log("capitalize",capitalize)