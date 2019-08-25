// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //Click event for adding a burger.
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //Grab burger name from form field.
        //When user submits burger name, set devoured state to false.
        let newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0
        };

        // Send the POST request using ajax.
        $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    //Click event to throw away/delete burger.
    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
    
        // Send the DELETE request using ajax.
        $.ajax("/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    //Click event for "Devour me" button.
    $(".change-devour").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
    
        let newDevourState = {
          devoured: "true"
        };
    
        // Send the PUT request using ajax.
        $.ajax("/burgers/update/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });   
});
