var Memory = require('./../js/memory.js').memoryModule;
var choose = require('./../js/memory.js').chooseModule;
var selectedArray = [];

$(document).ready(function() {

  $("img").onclick(function(event)
  {
    event.preventDefault();
    $('.card').flip({
    axis: 'y',
    trigger: 'click'
    });
    var value = $(this).parent().parent().children("input").val();
    console.log(value);
    var count = choose(value);
    selectedArray.push(value);
    console.log(count);
  });
});
