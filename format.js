var fs = require('fs');
var obj;
fs.readFile('show.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  main (obj) ;

});

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function main (json){
    var price = Array.from(Array(30).keys())
    var data = json.map(function(show){
        return {
            uid : show.UID,
            title : show.title ,
            time : show.showInfo[0].time ,
            price : getRandomArbitrary(1,30) * 100 ,
            address : show.showInfo[0].location
        }
    })

    fs.writeFileSync("show.min.json",JSON.stringify(data),'utf8')
}
