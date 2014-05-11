// ==UserScript==
// @include       http://ideone.com/*
// ==/UserScript==

window.document.onclick =  function(event){
  var output = document.getElementById("output-text");
  if (output == null) {
    return;
  }
  var answer = output.innerHTML.replace(/[\n\r]/g, "");
  if (answer == "ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz") {
    console.log("OK");
  } else {
    console.log("NG");
  }
}
