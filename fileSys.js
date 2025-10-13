const fs = require('fs');


// This are some of the functions of this module which ae synchronous
const mypassion = fs.readFileSync('./content/fisrt.txt', 'utf-8');

fs.writeFileSync('content/subDir/second.txt', 
    '\nAm i new line that was appended',
    {flag : 'a'}
)

const secondFile = fs.readFileSync('./content/subDir/second.txt', 'utf-8');

// console.log(secondFile);

// Asynchronous function

// fs.readFile('./content/subDir/second.txt', 'utf-8', (err, data) => {
//     if(err) console.log("Error Occured : ", err );

//     console.log('Result: ', data);
// })

const writefile = (First, second) => {
    fs.writeFile('./content/third.txt', `Result: ${First}, ${second}`, (err) => {
        if(err) console.log('Error3:', err);
    
        console.log('Results: ', First, second);  
    })
}

module.exports = writefile;

console.log('I love JS');
