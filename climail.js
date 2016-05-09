var readline = require('readline'); //we're going to be accepting input from cl
var util = require('util'); //I think readline needs this
//var nodemailer = require('nodemailer');



var rl = readline.createInterface({  //open up standard input.
    input  : process.stdin,
    output : process.stdout
});


rl.on('line', doLine); //on every line of input, call doline with it

function doLine(line) {
  header  = line.replace(/(^[^:]*):.*/,'$1').trim();
  content = line.replace(/^[^:]*:(.*)/,'$1').trim();
  console.log('header:',header,'content:',content);
  switch(header){
    case line.trim() : {console.log('Adding line to text body:',line)}; break;
    case "SEND"      : {console.log('sending...')}; break;
    case "to"        : {console.log('Adding recipient:',content)}; break;
    case "from"      : {console.log('Setting from:',content)}; break;
    case "cc"        : {console.log('Adding cc: recipient:',content)}; break;
    case "bcc"       : {console.log('Adding bcc: recipient:',content)}; break;
    case "subject"   : {console.log('Setting "subject:" to',content)}; break;
    case "text"      : {console.log('Adding line to text body:',content)}; break;
    case "html"      : {console.log('Adding line to html body:',content)}; break;
    case "attach"    : {console.log('Pushing object to attachments:',content)}; break;
  };
};
