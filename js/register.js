$(document).ready(function () {
  $("#myform").on("submit", function (e) {
    e.preventDefault();

    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();

    if (username !== "" && password !== "" && email !== "") {
      let formdata = {
        username,
        email,
        password,
      };

      $.ajax({
        url: "http://localhost/GUVI-TASK/php/register.php",
        type: "POST",
        data: formdata,
        error: function (request, text, error) {
          console.log(arguments);
          error = JSON.parse(request.responseText);
          alert(error.responseText);
          return;
        },
        success: function (response) {
          response = JSON.parse(response);
          console.log(response);
          alert(response.responseText);
          window.location.href = "login.html";
        },
      });
    }
  });
});
