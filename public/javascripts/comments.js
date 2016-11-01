$(document).ready(function(){
  $("#serialize").click(function(){
      console.log("in serialize");
      var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);

      var url = "comment";
	$.ajax({
	url:url,
	type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
	    $("#done").html(textStatus);
	}
      })
  });

  $("#deleteAll").click(function() {
        console.log("in delete******");
        var url = "comment";
        $.ajax({
        url:url,
        type: "DELETE"
        })
        $("#comments").html("");
    });

    $("#getThem").click(function() {
    $.getJSON('comment', function(data) {
      console.log("here comes the sun");
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });

});
