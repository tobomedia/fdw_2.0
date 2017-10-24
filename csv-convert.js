var fs = require('fs');

function csvJSON(csv){

    console.log(csv);
  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].replace('\r','').split(",");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].toLowerCase().replace('\r','').split(",");

    if (currentline.length>1) {

        obj['name'] = currentline[0] + '_' + currentline[1];
        obj['pin'] = currentline[2];
        // console.log(currentline);
        obj['full_name'] = currentline[0].charAt(0).toUpperCase()+currentline[0].substr(1,currentline[0].length) + ' ' + currentline[1].charAt(0).toUpperCase()+currentline[1].substr(1,currentline[1].length)

        result.push(obj);
    }

  }
  // fs.writeFile('client-pins.json', JSON.stringify(result), function(err) {
  //     if (err) throw err;
  //     console.log('The file has been saved!');
  //   })
  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
}

module.exports = csvJSON;
