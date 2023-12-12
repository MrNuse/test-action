const fs = require('fs');
const path = require('path');

const folderName = '.nx';

const fileName = 'test.txt';

const folderPath = path.join(__dirname, folderName);

if(fs.existsSync(folderPath)) {
  console.log("folder already Exists creating a new mock file inside the nx directory");

  const timestamp = new Date().toISOString().replace(/[-T:]/g, '').split('.')[0];
  const newFileName = `test_${timestamp}.txt`;
  const filePath = path.join(folderPath, newFileName);

  fs.writeFile(filePath, 'Questo è un file di test con timestamp!', (err) => {
    if (err) {
      console.error('Errore nella creazione del file:', err);
    } else {
      console.log('Nuovo file creato con successo:', filePath);
    }
  });
} else {

  
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
}