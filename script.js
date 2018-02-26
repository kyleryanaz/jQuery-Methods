$(document).ready(function(){
    $("#btnOne").click(function(){
        $("#pOne").append(" <t>|</t>");
    });
    
    $("#btnTwo").click(function(){
        $("#pTwo").toggle();
    });
});