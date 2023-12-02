function checkLogin() {
  let storedMail = localStorage.getItem("email");
  console.log(storedMail);
  if (storedMail === null) {
    // if user log in session not present in localStorage then user need to log-in
    window.location.href = "login.html";
    return;
  } else {
    return storedMail;
  }
}

checkLogin();

function profileView(storedMail) {
  let formdata = { email: storedMail };
  $.ajax({
    url: "http://localhost/GUVI-TASK/php/profile.php",
    type: "POST",
    data: formdata,
    error: function (request, text, error) {
      console.log(arguments);
      error = JSON.parse(request.responseText);
      alert(error.responseText);
      console.log(error);
      return;
    },
    success: function (response) {
      response = JSON.parse(response);

      let reponseText = response?.data?.set;

      $("#show-name").html(reponseText?.name),
        $("#show-email").html(reponseText?.email),
        $("#show-age").html(reponseText?.age),
        $("#show-contact").html(reponseText?.contact),
        $("#show-gender").html(reponseText?.gender),
        $("#show-dob").html(reponseText?.dob);

      $("#name").val(reponseText.name),
        $("#email").val(reponseText.email),
        $("#age").val(reponseText.age),
        $("#contact").val(reponseText.contact),
        $("#gender").val(reponseText.gender),
        $("#dob").val(reponseText.dob);
    },
  });
}

$(document).ready(function () {
  let storedMail = checkLogin();
  profileView(storedMail);
  $("#logout").click(function () {
    // Remove email from localStorage
    localStorage.removeItem("email");
    localStorage.setItem("logoutTime", new Date());
    localStorage.removeItem("loginTime");
    window.location.href = "login.html";
  });

  $("#myform").on("submit", function (e) {
    e.preventDefault();

    // let storedMail = checkLogin();
    // profileView(storedMail);

    let formdata = {
      name: $("#name").val(),
      email: $("#email").val(),
      age: $("#age").val(),
      contact: $("#contact").val(),
      gender: $("#gender").val(),
      dob: $("#dob").val(),
    };

    console.log(formdata);

    $.ajax({
      type: "POST",
      url: "http://localhost/GUVI-TASK/php/profile.php", // Replace with your PHP script URL
      data: formdata,
      success: function (response) {
        console.log("Success: " + response);
        response = JSON.parse(response);
        console.log(response);
        alert(response.responseText);

        let reponseText = response?.data?.set;

        $("#show-name").html(reponseText?.name),
          $("#show-email").html(reponseText?.email),
          $("#show-age").html(reponseText?.age),
          $("#show-contact").html(reponseText?.contact),
          $("#show-gender").html(reponseText?.gender),
          $("#show-dob").html(reponseText?.dob);

        $("#name").val(reponseText.name),
          $("#email").val(reponseText.email),
          $("#age").val(reponseText.age),
          $("#contact").val(reponseText.contact),
          $("#gender").val(reponseText.gender),
          $("#dob").val(reponseText.dob);
      },
      error: function (error) {
        console.error("Error: " + JSON.stringify(error));
        console.log(error);
        // Handle error (if needed)
      },
    });
  });
});
//   });
// });

//     alert("form submitted");
//     let t = document.getElementById("name").value;

//     console.log(t);

//     let localEmail = localStorage.getItem("email");
//     console.log(localEmail);

//     // console.log(formData);

//     if (name !== "" && password !== "" && email !== "") {
//       let formdata = {
//         username,
//         email,
//         password,
//       };

//       $.ajax({
//         url: "http://localhost/GUVI-TASK/php/register.php",
//         type: "POST",
//         data: formdata,
//         error: function (request, text, error) {
//           console.log(arguments);
//           error = JSON.parse(request.responseText);
//           alert(error.responseText);
//           return;
//         },
//         success: function (response) {
//           response = JSON.parse(response);
//           console.log(response);
//           alert(response.responseText);
//           window.location.href = "login.html";
//         },
//       });
//     } else {
//       console.log(formData);
//     }
//   });
// });

// $(document).ready(function () {
//   $("#myform").on("submit", function (e) {
//     e.preventDefault();
//     alert("fadsfasldkjflasjdflkjasldflasjf");

//     console.log(formData);

//     // Your additional code...
//   });
// });

// $(document).ready(function () {
//   $("#myform").on("submit", function (e) {
//     e.preventDefault();

//     let dob = $("#contact").val();
//     let email = $("#email").val();

//     // Collect form data
//     let formData = {
//       name: $("#name").val(),
//       email: $("#email").val(),
//       age: $("#age").val(),
//       contact: $("#contact").val(),
//       gender: $("#gender").val(),
//       dob: $("#dob").val(),
//     };
//     console.log("gkjdshflgkjhsdklfgjhsdklhgksldj" + email);
//     console.log(dob);

//     console.log(formData);

//         $.ajax({
//           url: "http://localhost/GUVI-TASK/php/register.php",
//           type: "POST",
//           data: formdata,
//           error: function (request, text, error) {
//             console.log(arguments);
//             error = JSON.parse(request.responseText);
//             alert(error.responseText);
//             return;
//           },
//           success: function (response) {
//             response = JSON.parse(response);
//             console.log(response);
//             alert(response.responseText);
//             window.location.href = "login.html";
//           },
//         });
//       }
//   });
// });
