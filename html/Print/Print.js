$(document).ready(function(){

    var client = new XMLHttpRequest();
client.open('GET', '../Print.md');
client.onreadystatechange = function() {
  $("p").text(client.responseText)
}
client.send();


$("scrollingDiv").scrollTop( 300 );

});
