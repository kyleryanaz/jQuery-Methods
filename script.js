$(document).ready(function(){

    $(".addClass").add("#addId").css("background-color", "DarkTurquoise");

    $(document).ready(function(){
        $("#addClass").click(function(){
            $("#dunderMifflin").addClass("negative");
        });
    });
   
    $("#btnAppend").click(function(){
        $("#pAppend").append(" <t>|</t>");
    });
    
    $("#btnToggle").click(function(){
        $("#pToggle").toggle();
    });
});