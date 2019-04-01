$(document).ready(function(){
  $("#groceries").submit(function(event){
    var groceries = ["thing1", "thing2", "thing3", "thing4", "thing5"];
    var items = [];

    groceries.forEach(function (grocery) {
      var itemval = $("#" + grocery).val();
      items.push(itemval);
    })
    items.sort();

    //forEACH function is below:
    // var upperCaseList = [];
    // groceries.forEach(function(groceryItem) {
    //   upperCaseList.push(groceryItem.toUpperCase());
    // });

//map function is below:

    var upperCaseList = items.map(function(item){
      return item.toUpperCase();
    });

    upperCaseList.forEach(function(item){
      if (item != ""){
      $("#listOfGroceries").append("<li>" + item + "</li>");}
    });

    $("#main").fadeOut(4000, function () {
      $("#list").slideDown(4000);      
    });

    event.preventDefault();
  });
});
