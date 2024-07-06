const fs = require('fs');
const path = require('path');

const filesToClean = [
  path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
  path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick-theme.css'),
];

filesToClean.forEach((filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    const cleanedData = data.replace(/@charset\s+["'][^"']*["'];/g, '');
    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
        return;
      }
      console.log(`Cleaned @charset from ${filePath}`);
    });
  });
});
