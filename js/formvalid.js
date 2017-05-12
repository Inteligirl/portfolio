/*
Name: Tammy Gibson
Current Date: 3/9/2017
Class.section: CGS1821.0M1
Assignment: website built by you about a topic of your choosing
Language: jQuery
Purpose: To validate my contact form
Includes:
*/

  
/* first name validation*/
$(document).ready(function() {
$("#Fname").change(function() {
  var x = $("#Fname").val();
  var firstPattern = /^[a-zA-Z]{1,50}$/;
  
  /* get id test on pattern*/
  if (firstPattern.test(x)) {
    $("#Fname").parent().next("");
  }
  
  /* test id to see if empty. NOTE could have combined
  both false statements into one OR conditional*/
  else if ($("#Fname").val() == "") {
    $("#Fname") .parent().next("Required input");
  }
  
  /* id entry failed test pattern */
  else {
    $("#Fname").parent().next("Only letters allowed");
}
});

/* last name validation*/
$("#Lname").change(function() {
  var x = $("#Lname").val();
  var lastPattern = /^[a-zA-Z]{1,50}$/;
  
  /* get id test on pattern*/
  if (lastPattern.test(x)) {
   $("#Lname").next().text("");
  }
  
  /* test id to see if empty. NOTE could have combined
  both false statements into one OR conditional*/
  else if ($("#Lname").val() == "") {
    $("#Lname").next().text("Required input");
  }
  
  /* id entry failed test pattern */
  else {
    $("#Lname").next().text("Only letters allowed");
}
});
/* email address validation*/
$("#emailAddie").change(function() {
  var x = $("#emailAddie").val();
  var lastPattern = /^[a-zA-Z0-9]{1,25}[@][a-zA-Z0-9]{1,25}[.][a-zA-Z]{2,4}$/;
  
  /* get id test on pattern*/
  if (lastPattern.test(x)) {
   $("#emailAddie").next().text("");
  }
  
  /* test id to see if empty. NOTE could have combined
  both false statements into one OR conditional*/
  else if ($("#emailAddie").val() == "") {
    $("#emailAddie").next().text("Required input");
  }
  
  /* id entry failed test pattern */
  else {
    $("#emailAddie").next().text("Invalid entry, use format youremail@email.com");
}
});

/* zip validation*/
$("#Zip").change(function() {
  var x = $("#Zip").val();
  var lastPattern = /^\d{5}$/;
  
  /* get id test on pattern*/
  if (lastPattern.test(x)) {
   $("#Zip").next().text("");
  }
  
  /* test id to see if empty. NOTE could have combined
  both false statements into one OR conditional*/
  else if ($("#Zip").val() == "") {
    $("#Zip").next().text("Required input");
  }
  
  /* id entry failed test pattern */
  else {
    $("#Zip").next().text("Invalid input, use 5 digit zip code");
}
});
/* phone validation*/
$("#phoneNum").change(function() {
  var x = $("#phoneNum").val();
  var lastPattern = /^\d{3}[\-]\d{3}[\-]\d{4}$/;
  
  /* get id test on pattern*/
  if (lastPattern.test(x)) {
   $("#phoneNum").next().text("");
  }
  
  /* test id to see if empty. NOTE could have combined
  both false statements into one OR conditional*/
  else if ($("#phoneNum").val() == "") {
    $("#phoneNum").next().text("Required input");
  }
  
  /* id entry failed test pattern */
  else {
    $("#phoneNum").next().text("Invalid entry, use format 123-123-1234");
}
});


});