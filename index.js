const fs = require('fs');
const path = require('path');

const folderName = '.nx';

const fileName = 'test.txt';

const folderPath = path.join(__dirname, folderName);

fs.mkdir(folderPath, (err) => {
  if (err) {
    console.error('Errore nella creazione della cartella:', err);
  } else {
    console.log('Cartella creata con successo:', folderPath);


    const filePath = path.join(folderPath, fileName);


    fs.writeFile(filePath, 'Questo è un file di test!', (err) => {
      if (err) {
        console.error('Errore nella creazione del file:', err);
      } else {
        console.log('File creato con successo:', filePath);
      }
    });
  }
});