// SOLUTIONS GO BELOW EACH EXERCISE
$(document).ready(function() {
// EXERCISE: Change Background

// Change the background color of '#target' by script. 
// Hint: you can use .css
$('#target').css('background-color', 'purple');

// EXERCISE: Change Parent
// Change the text in the span, a child of "#target"
// Hint: you can use .text
$('#target span').text('changed text!');
// EXERCISE: Create Clone
// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter

$('#target span').clone().insertAfter('#target span');
// EXERCISE: Use Filter
// Change background color of the second ".target"
// Hint: you can use .eq and .css
$(".target").eq(1).css("background-color", "red");


// EXERCISE: Disable Buttons
// Disable the button
// Hint: you will have to select the button and can use .attr
$('.target button').attr('disabled', 'disabled');

// EXERCISE: Uncheck CheckBoxes
// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr
$('.target input').removeAttr('checked');

// EXERCISE: Change Parent
// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo
$('#child').appendTo('#parent2');

// EXERCISE: Select A Option in A Select Box
// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr
$('#target select option').eq(1).attr('selected', 'selected')

// EXERCISE: Change Size
// Make "#target" double size
// Hint: you can use .css, .width and .height
$("#target").css("width", $("#target").width() * 2 );

$("#target").css("height",$("#target").height() * 2);

// EXERCISE: Empty Elements
// Hint: you can use .empty
// Remove all children and text of "#target"
$('.target:empty').remove();

// EXERCISE: Delay
// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert
setTimeout(function() {alert('delay')}, 1000);

// EXERCISE: Count
// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
alert($('#target').find('.child').size());

// EXERCISE: Animate
// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height
$('#target'); target.animate({ width: target.width() * 2, height: target.height() *2}, 1000);


// EXERCISE: Alternate Color
// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css
$("option").filter(":even").css({"color" : "yellow"});

// EXERCISE: All But One
// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove
$('#target').children().not('h2').remove();

// EXERCISE: Without Children
// Remove all 'div' whitch has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
$('.target:empty').remove();

});
