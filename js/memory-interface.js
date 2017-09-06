var Memory = require('./../js/memory.js').memoryModule;
var choose = require('./../js/memory.js').chooseModule;
var randomImageGenerator = require('./../js/memory.js').randomModule;
var selectedArray = [];



$(document).ready(function() {
	console.log("Amar1");
	
	randomImageGenerator();
  $('.card').flip({
    axis: 'y',
    trigger: 'click'
    });
	
  $("img").click(function(event)
  {
	  
    event.preventDefault();
    
    var value = $(this).parent().parent().children("input").val();
    console.log(value);
    var count = choose(value);
    selectedArray.push(value);
    console.log(count);
  });
});
