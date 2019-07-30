// Declare Variables/Arrays
var fifties = $('.fifties');
  var fiftiesArtists = ["Elvis Presley", "Frank Sinatra", "Little Richard"];
var sixties = $('.sixties');
  var sixtiesArtists = ["The Beatles", "Led Zepplin", "The Rolling Stones"];
var seventies = $('.seventies');
  var seventiesArtists = ["David Bowie", "Queen", "Elton John"];
var eighties = $('.eighties');
  var eightiesArtists = ["Madonna", "Michael Jackson", "Prince"];
var nineties = $('.nineties');
  var ninetiesArtists = ["Nirvana", "Spice Girls", "Backstreet Boys"];
var thousands = $('.thousands');
  var thousandsArtists = ["Green Day", "Britney Spears", "Coldplay"];
var tens = $('.tens');
  var tensArtists = ["Billie Eilish", "Ed Sheeran", "Twenty One Pilots"]
var output=$('h2')

//Create function/button
fifties.on("click", fiftiesMessage);
sixties.on("click", sixtiesMessage);
seventies.on("click", seventiesMessage);
eighties.on("click", eightiesMessage);
nineties.on("click", ninetiesMessage);
thousands.on("click", thousandsMessage);
tens.on("click", tensMessage);

function fiftiesMessage(){
  var fiftiesA = Math.floor(Math.random() * fiftiesArtists.length);
  output.text(fiftiesArtists[fiftiesA])
}

function sixtiesMessage(){
  var sixtiesA = Math.floor(Math.random() * sixtiesArtists.length);
  output.text(sixtiesArtists[sixtiesA])
}

function seventiesMessage(){
  var seventiesA = Math.floor(Math.random() * seventiesArtists.length);
  output.text(seventiesArtists[seventiesA])
}

function eightiesMessage(){
  var eightiesA = Math.floor(Math.random() * eightiesArtists.length);
  output.text(eightiesArtists[eightiesA])
}

function ninetiesMessage(){
  var ninetiesA = Math.floor(Math.random() * ninetiesArtists.length);
  output.text(ninetiesArtists[ninetiesA])
}

function thousandsMessage(){
  var thousandsA = Math.floor(Math.random() * thousandsArtists.length);
  output.text(thousandsArtists[thousandsA])
}

function tensMessage(){
  var tensA = Math.floor(Math.random() * tensArtists.length);
  output.text(tensArtists[tensA])
}
