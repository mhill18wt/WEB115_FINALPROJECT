// Function to generate meal plan based on user input
    function generateMealPlan() {
      // Fetch user input from the form
      var breakfast = document.getElementById("breakfast").value;
      var snack1 = document.getElementById("snack1").value;
      var lunch = document.getElementById("lunch").value;
      var snack2 = document.getElementById("snack2").value;
      var dinner = document.getElementById("dinner").value;

       // Validate email address
      var email = document.getElementById("email").value;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("error-message").innerText = "Please enter a valid email address.";
        return;
      }

      // Open a new window for the generated meal plan
      var newWindow = window.open();
      
      // Write HTML content to the new window
      newWindow.document.write("<!DOCTYPE html>");
      newWindow.document.write("<html>");
      newWindow.document.write("<head>");
      newWindow.document.write("<title>Generated Meal Plan</title>");
      newWindow.document.write("</head>");
      newWindow.document.write("<body>");
      newWindow.document.write("<h2>Generated Meal Plan</h2>");
      newWindow.document.write("<p><strong>Breakfast:</strong> " + breakfast + "</p>");
      newWindow.document.write("<p><strong>Snack 1:</strong> " + snack1 + "</p>");
      newWindow.document.write("<p><strong>Lunch:</strong> " + lunch + "</p>");
      newWindow.document.write("<p><strong>Snack 2:</strong> " + snack2 + "</p>");
      newWindow.document.write("<p><strong>Dinner:</strong> " + dinner + "</p>");
      newWindow.document.write("</body>");
      newWindow.document.write("</html>");
    }