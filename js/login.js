$(document).ready(function () {
  // localStorage.removeItem("email");
  var storedEmail = localStorage.getItem("email");

  if (storedEmail) {
    // If email is set, redirect to profile.html
    window.location.href = "profile.html";
    // console.log("data found in localStorage");
  } else {
    // If email is not set, you can perform other actions or leave this block empty
    $("#Submit-btn").click(function (event) {
      event.preventDefault();

      let email = $("#email").val();
      let password = $("#password").val();
      if (email === "" && password === "") {
        alert("fill the form");
        return;
      }

      let formdata = { email, password };
      // alert(JSON.stringify(formdata));
      $.ajax({
        url: "http://localhost/GUVI-TASK/php/login.php",
        type: "POST",
        // data: JSON.stringify(formdata),
        data: formdata,
        error: function (request, error) {
          console.log(arguments);
          // request = JSON.parse(request);
          // alert(`${request.responseText}`);
          console.log(request.responseText);
        },
        success: function (data) {
          console.log(data);
          localStorage.setItem("email", email);
          localStorage.removeItem("logoutTime");
          localStorage.setItem("loginTime", new Date());

          data = JSON.parse(data);

          if (data.statusCode === 200) {
            alert("logged in successfully");
            window.location.href = "profile.html";
          }
        },
      });
    });
  }
});
