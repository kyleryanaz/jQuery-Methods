$(document).ready(function(){

    $("#h5AddClass").click(function(){
        $("#pAddClass").addClass("negative");
    });

    $("#h5Animate").click(function(){
        $("#pAnimate")
        .animate({ right: "+=24" }, 250)
        .animate({ right: "-=48"}, 250)
        .animate({ right: "+=24"}, 250);
    })
   
    $("#h5Append").click(function(){
        $("#pAppend").append(" <t>.</t>");
    });
    
    $("#h5Toggle").click(function(){
        $("#pToggle").toggle();
    });
});