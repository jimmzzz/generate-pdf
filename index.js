var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path')
// var html = fs.readFileSync('./test.html', 'utf8');
var options = { 
  format: 'A4',
  "base": "file:///home/www/your-asset-path/",
  "localUrlAccess": true
};

var template = path.join(__dirname, 'test.html')
  var filename = template.replace('.html', '.pdf')
  var templateHtml = fs.readFileSync(template, 'utf8')

  var image = path.join('file://', __dirname, 'logo.png')
  templateHtml = templateHtml.replace('{{logo}}', image)

pdf.create(templateHtml, options).toFile('./invoice_digi.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
