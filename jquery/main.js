$(document).ready(function () {
  $("#login").on("click", function () {
    console.log("logged");
    $("#login_form").show();
    $("#register_form").hide();
  });

  $("#register").on("click", function () {
    $("#register_form").show();
    $("#login_form").hide();
  });

  $("#butsave").on("click", function () {
    $("#butsave").attr("disabled", "disabled");
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var password = $("#password").val();
    if (name != "" && email != "" && phone != "" && password != "") {
      $.ajax({
        url: "save.php",
        type: "POST",
        data: {
          type: 1,
          name: name,
          email: email,
          phone: phone,
          password: password,
        },
        cache: false,
        success: function (dataResult) {
          var dataResult = JSON.parse(dataResult);
          if (dataResult.statusCode == 200) {
            $("#butsave").removeAttr("disabled");
            $("#register_form").find("input:text").val("");
            $("#success").show();
            $("#success").html("Registration successful !");
          } else if (dataResult.statusCode == 201) {
            $("#error").show();
            $("#error").html("Email ID already exists !");
          }
        },
      });
    } else {
      alert("Please fill all the field !");
    }
  });

  $("#butlogin").on("click", function () {
    var email = $("#email_log").val();
    var password = $("#password_log").val();
    if (email == "" && password == "") {
      alert("Please fill all the field !");
    } else {
      $.ajax({
        url: "save.php",
        type: "POST",
        data: {
          type: 2,
          email: email,
          password: password,
        },
        cache: false,
        success: function (data) {
          var data = JSON.parse(data);
          if (data.statusCode == 200) {
            $("#login_form").find("input:text").val("");
            $("#success").show();
            $("#success").html("Login successful !");
          } else if (data.statusCode == 201) $("#error").show();
          $("#error").html("Incorrect Credential ");
        },
      });
    }
  });
});
