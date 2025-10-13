const express = require('express');
const app = express();
//  or app = require('express')();

const path = require('path');


const products = [
    {
        id: 1,
        name: 'soap',
        price: 850,
        desc: 'for bathing'
    },
     {
        id: 2,
        name: 'toothbrush',
        price: 250,
        desc: 'use to brush the teeth'
    },
     {
        id: 3,
        name: 'Towel',
        price: 1550,
        desc: 'use to clean up after bathing'
    }
]

app.use(express.static('./Public'));

// listen to get request from the browser
app.get('endpoint', (req, res) => {
    if(endpoint === '/') {
        res.status(200).send('<h1>Home page</h1>');
        console.log('request received, event  triggered successfully');
        
    }
    else if(endpoint === '/products'){
        /* if status code not provided, express set it 
        up but it good practice doing by yourself so as to have control over the program */
        res.json(products);
    }
    else if(endpoint === '/products/:prodID'){
        const {prodID} = req.params;

        const filteredProd = products.find( (product, ID) => prodID === ID );
        res.status(200).send(filteredProd);
    }
    else if(endpoint === '/about') {
        res.send('<p class = "para">Welcome too our website, let us drive you through the history of our Business </p>')
    }
    else{
        res.send('Opps, page not found')
    }
})