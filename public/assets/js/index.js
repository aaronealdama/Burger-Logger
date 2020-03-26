$(function() {
  $(".devour").on("click", function() {
    const id = $(this).data("id");

    // Sending the PUT request
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT"
    }).then(function() {
      console.log("Changed devoured to true!");

      location.reload();
    });
  });
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      name: $("#add")
        .val()
        .trim()
    };

    // Sending POST request
    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created new burger!");
      location.reload();
    });
  });
});
