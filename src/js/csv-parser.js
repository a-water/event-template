const csv = require('csvtojson');
const fs = require('fs');


function parseAttendeeCsv(filePath) {

  return new Promise((resolve, reject) => {
    csv()
      .on('error', err => {
        reject();
      })
      .fromFile(filePath)
      .then(csvRow => {
        let names = [];
        csvRow.forEach(entry => {
          names.push(entry.Name);
        });
        resolve(names);
      });
  });  
}

module.exports.parseAttendeeCsv = parseAttendeeCsv;