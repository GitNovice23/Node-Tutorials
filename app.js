const {readFile} = require('fs');
const writefile= require('./fileSys.js');

const getFile = (path) => {
    return new Promise( (resolve, reject) => {
        // pending task that will generate either a value or an error object 
        readFile(path, 'utf-8', (err, data) => {
            if(err) reject(`Error: ${err}`);
            // if(err) reject('Error: ', err);

            resolve(`File Content: ${data}`);
        })
    })
}

const readwrite = async ()=> {
    try {
        // read content rfrom two files and then write it in the third file
        const First = await getFile('content/fisrt.txt');
        const second = await getFile('content/subDir/second.txt');
        
        writefile(First, second);
    } catch (error) {
        console.log(error);
        
    }
}


readwrite();

//  as you can see, this give us a better approach than what we had in callbackhell.js

// getFile('content/fisrt.txt')
// .then( result => console.log(result), error => console.log(error));

console.log('I love JS');
