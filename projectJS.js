// Function to generate meal plan based on user input
  function generateMealPlan() {
      // Get user input from the form for each day of the week
      var mon_breakfast = document.getElementById("mon_breakfast").value;
      var mon_snack1 = document.getElementById("mon_snack1").value;
      var mon_lunch = document.getElementById("mon_lunch").value;
      var mon_snack2 = document.getElementById("mon_snack2").value;
      var mon_dinner = document.getElementById("mon_dinner").value;

      var tue_breakfast = document.getElementById("tue_breakfast").value;
      var tue_snack1 = document.getElementById("tue_snack1").value;
      var tue_lunch = document.getElementById("tue_lunch").value;
      var tue_snack2 = document.getElementById("tue_snack2").value;
      var tue_dinner = document.getElementById("tue_dinner").value;

      var wed_breakfast = document.getElementById("wed_breakfast").value;
      var wed_snack1 = document.getElementById("wed_snack1").value;
      var wed_lunch = document.getElementById("wed_lunch").value;
      var wed_snack2 = document.getElementById("wed_snack2").value;
      var wed_dinner = document.getElementById("wed_dinner").value;

      var thu_breakfast = document.getElementById("thu_breakfast").value;
      var thu_snack1 = document.getElementById("thu_snack1").value;
      var thu_lunch = document.getElementById("thu_lunch").value;
      var thu_snack2 = document.getElementById("thu_snack2").value;
      var thu_dinner = document.getElementById("thu_dinner").value;

      var fri_breakfast = document.getElementById("fri_breakfast").value;
      var fri_snack1 = document.getElementById("fri_snack1").value;
      var fri_lunch = document.getElementById("fri_lunch").value;
      var fri_snack2 = document.getElementById("fri_snack2").value;
      var fri_dinner = document.getElementById("fri_dinner").value;

      var sat_breakfast = document.getElementById("sat_breakfast").value;
      var sat_snack1 = document.getElementById("sat_snack1").value;
      var sat_lunch = document.getElementById("sat_lunch").value;
      var sat_snack2 = document.getElementById("sat_snack2").value;
      var sat_dinner = document.getElementById("sat_dinner").value;

      var sun_breakfast = document.getElementById("sun_breakfast").value;
      var sun_snack1 = document.getElementById("sun_snack1").value;
      var sun_lunch = document.getElementById("sun_lunch").value;
      var sun_snack2 = document.getElementById("sun_snack2").value;
      var sun_dinner = document.getElementById("sun_dinner").value;

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
      newWindow.document.write("<script type='text/javascript' src='projectJS.js'></script>");
      newWindow.document.write("</head>");
      newWindow.document.write("<body>");
      newWindow.document.write("<h2 style='text-align: center;'>Meal Plan for the upcoming week.</h2>");
      newWindow.document.write("<table id='mealPlan' style='border-collapse: collapse; width: 100%;'>");
      newWindow.document.write("<tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Day</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Breakfast</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Snack 1</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Lunch</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Snack 2</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Dinner</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Monday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + mon_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + mon_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + mon_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + mon_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + mon_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Tuesday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + tue_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + tue_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + tue_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + tue_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + tue_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Wednesday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + wed_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + wed_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + wed_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + wed_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + wed_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Thursday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + thu_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + thu_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + thu_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + thu_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + thu_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Friday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + fri_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + fri_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + fri_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + fri_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + fri_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Saturday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sat_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sat_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sat_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sat_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sat_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px; background-color: #f2f2f2;'>Sunday</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sun_breakfast + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sun_snack1 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sun_lunch + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sun_snack2 + "</th>");
      newWindow.document.write("<th style='border: 1px solid #dddddd; text-align: center; padding: 8px;'>" + sun_dinner + "</th>");
      newWindow.document.write("</tr>");
      newWindow.document.write("</table><br>");
      newWindow.document.write("<input type='button' class='hideOnPrint' value='Print Meal Plan' onclick='printMealPlan()''>");
      newWindow.document.write("<input type='button' class='hideOnPrint' value='Recreate Meal Plan' onclick='updateMealPlan()''>");
      newWindow.document.write("</body>");
      newWindow.document.write("</html>");
    };


function clearInputs(event) {
    // Clear the entire meal plan 
    document.getElementById("mon_breakfast").value = "";
    document.getElementById("mon_snack1").value = "";
    document.getElementById("mon_lunch").value = "";
    document.getElementById("mon_snack2").value = "";
    document.getElementById("mon_dinner").value = "";

    document.getElementById("tue_breakfast").value = "";
    document.getElementById("tue_snack1").value = "";
    document.getElementById("tue_lunch").value = "";
    document.getElementById("tue_snack2").value = "";
    document.getElementById("tue_dinner").value = "";

    document.getElementById("wed_breakfast").value = "";
    document.getElementById("wed_snack1").value = "";
    document.getElementById("wed_lunch").value = "";
    document.getElementById("wed_snack2").value = "";
    document.getElementById("wed_dinner").value = "";

    document.getElementById("thu_breakfast").value = "";
    document.getElementById("thu_snack1").value = "";
    document.getElementById("thu_lunch").value = "";
    document.getElementById("thu_snack2").value = "";
    document.getElementById("thu_dinner").value = "";

    document.getElementById("fri_breakfast").value = "";
    document.getElementById("fri_snack1").value = "";
    document.getElementById("fri_lunch").value = "";
    document.getElementById("fri_snack2").value = "";
    document.getElementById("fri_dinner").value = "";

    document.getElementById("sat_breakfast").value = "";
    document.getElementById("sat_snack1").value = "";
    document.getElementById("sat_lunch").value = "";
    document.getElementById("sat_snack2").value = "";
    document.getElementById("sat_dinner").value = "";

    document.getElementById("sun_breakfast").value = "";
    document.getElementById("sun_snack1").value = "";
    document.getElementById("sun_lunch").value = "";
    document.getElementById("sun_snack2").value = "";
    document.getElementById("sun_dinner").value = "";

    // Prevent submitting the form
    event.preventDefault();
};

function printMealPlan() {
  window.print();
};

function updateMealPlan() {
  // Redirect to the main HTML page
  window.location.href = "finalProject.html"; 
};
