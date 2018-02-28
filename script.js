$(document).ready(function(){

    $("#btnAddClass").click(function(){
        $("#pAddClass").addClass("negative");
    });

    $("#btnAnimate").click(function(){
        $("#pAnimate")
        .animate({ 'right': "+=24"}, 250)
        .animate({ 'right': "-=48"}, 250)
        .animate({ 'right': "+=24"}, 250);
    })
   
    $("#btnAppend").click(function(){
        $("#pAppend").append(" <t>.</t>");
    });
    
    $("#btnToggle").click(function(){
        $("#pToggle").toggle();
    });
});