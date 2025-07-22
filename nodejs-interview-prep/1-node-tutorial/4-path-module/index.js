// path modules provide utilies for  working with file and directory path 

 const path = require('path')


 // to get the directory name 
 console.log(`Directory Name:`,path.dirname(__filename))

 // to get file name 
 console.log(`File Name:`,path.basename(__filename))

 // to get the file extension
  console.log(`File Name:`,path.extname(__filename))

  // combine multiple path segment to create one absolute path


  const joinPath = path.join('/user','/document','/node')

  console.log('Joined Path:',joinPath)

// this path  exits or not  and then we are going to resolve thsi path 
  const resolvPath = path.resolve('user','documents','node') 

  console.log("Resolve Path",resolvPath)

// to normalizing the path 
  const normalizePath = path.normalize('/user/.docmuents/../node/project')
  console.log("normalizePath",normalizePath)