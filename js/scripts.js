$(document).ready(function(){
  $("#groceries").submit(function(event){
    var thing1 = $("#thing1").val();
    var thing2 = $("#thing2").val();
    var thing3 = $("#thing3").val();
    var thing4 = $("#thing4").val();
    var thing5 = $("#thing5").val();
    var groceries = [thing1, thing2, thing3, thing4, thing5];

    //forEACH function is below:
    var upperCaseList = [];
    groceries.forEach(function(groceryItem) {
      upperCaseList.push(groceryItem.toUpperCase());
    });

//map function is below:
    var upperCaseList = groceries.map(function(groceries){
      return groceries.toUpperCase();
    });

    $("#list").show();
    $("#display").text(thing1 + ", " + thing2 + ", " + thing3 + ", " + thing4 + " and " + thing5 + ".");

    $("#1").text(upperCaseList[0]);
    $("#2").text(upperCaseList[1]);
    $("#3").text(upperCaseList[2]);
    $("#4").text(upperCaseList[3]);
    $("#5").text(upperCaseList[4]);

    event.preventDefault();
  });
});
