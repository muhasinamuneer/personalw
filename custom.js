$(document).ready(()=>{
    $('#gform').submit((e)=>{
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "",
            data: $("#gform").serialize(),
            
          }).done(function (data) {
           alert("form submitted successfully");
           window.location.reload()
          });
    })
})