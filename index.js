const fs = require('fs');

fs.readFile('./package.json', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        let info = {
            contenidoStr: data.toString(),
            contenidoObj: JSON.parse(data),
            size: data.length
        }
        console.log(info);
        fs.writeFile('./Info.txt', JSON.stringify(info), 'utf8', (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('Info.txt creado');
            }
        })
    }    
})
