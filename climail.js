//climail.js - a node.js command line email client designed for interactive or piped input
//Unlicense - For more information, please refer to <http://unlicense.org/>
//This is a Preston Austin playground project, only fools rush in
//https://github.com/prestonaustin/climail.git

//gather up dependencies
//TODO: figure out how to build this crap into node projects most conveniently
var readline = require('readline'); //we're going to be driven by line input events (piped or interactive), https://nodejs.org/api/readline.html
var util = require('util'); //I think readline needs this, https://nodejs.org/api/util.html
//var nodemailer = require('nodemailer'); //an SMTP handler, https://nodemailer.com/, https://github.com/nodemailer/nodemailer

//bootstrap command line io and capture input events
var rl = readline.createInterface({  //open up standard input and output
    input  : process.stdin,
    output : process.stdout
});
rl.on('line', doLine); //on every line of input, call doline with it

//handle events
function doLine(line) {
  header  = line.replace(/(^[^:]*):.*/,'$1').trim(); //everything up through the first :, or just everything
  content = line.replace(/^[^:]*:(.*)/,'$1').trim(); //everything after the first :, or just everything
  console.log('header:',header,'content:',content);
  switch(header){
    case line.trim() : {console.log('Adding line to text body:',line)}; break; //if the header is the whole line, it's just body content
    case "SEND"      : {console.log('sending...')}; break; //send the email (and exit if no further input to process?)
    case "to"        : {console.log('Adding recipient:',content)}; break; //append recipients idempotently
    case "from"      : {console.log('Setting from:',content)}; break; //re/set the sender
    case "cc"        : {console.log('Adding cc: recipient:',content)}; break; //append recipients idempotently
    case "bcc"       : {console.log('Adding bcc: recipient:',content)}; break; //append recipients idempotently
    case "subject"   : {console.log('Setting "subject:" to',content)}; break; //re/set the subject
    case "text"      : {console.log('Adding line to text body:',content)}; break; //append this input to body
    case "html"      : {console.log('Adding line to html body:',content)}; break; //append this input to html body
    case "attach"    : {console.log('Pushing object to attachments:',content)}; break; //fetch the url/path or package data as an attachment
  };
};
