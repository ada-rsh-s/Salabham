$(document).ready(function a(){
  var field1 = $("#Name").val();
  var field2 = $("#em").val();
  var field3 = $("#ph").val();
  var field4 = $("#textarea").val();
    $("#signupform").validate({
      rules:
      {
        nam:
       {
        required:true,
        minlength:3,
        maxlength:35
       },
       email:
       {
         required:true,
         email:true
       },
       phone:
       {
         required:true,
         number:true,
         minlength:10,
         maxlength:10
       },
       mess:
       {
         required:true,
         minlength:5,
         maxlength:200
       }
     },

     messages: {
      nam:
{
  minlength:"Please enter your name"
},
phone:
{

  minlength:"Please enter a valid number",
  maxlength:"Please enter a valid number"
}

    }

    })
    if(field1 == ""){
      
      return false;
    }
    if(field2 == ""){

      return false;
    }
    if(field3 == ""){
     
      return false;
    }
    if(field4 == ""){
     
      return false;
    }
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScw_ALNY3kCkI2xWdi6rGFSaBwsXcWc9w-2MJn4EKrtuJoGyw/formResponse",
      data: { "entry.1276549512": field1, "entry.583240312": field2, "entry.356386788": field3, "entry.1441079753": field4 },    
});
  document.getElementById("signupform").reset();
})
