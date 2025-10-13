const { readFile, writeFile} = require('fs');

readFile('./content/fisrt.txt',"utf-8" ,(err,data) => {
    if(err) {
        console.log("Error1: ", err);
        return
    }

    // if no error
    const First = data;

    readFile('./content/subDir/second.txt', "Utf-8" ,(err, data) => {
        if(err) {
            console.log("Error2: ", err);
            return;
        }
        // if no error
        const second = data;

        writeFile('./content/third.txt', `Result: ${First}, ${second}`, (err) => {
            if(err) console.log('Error3:', err);

            console.log('Results: ', First, second);  
        })
    })

})

console.log('I love JS');


