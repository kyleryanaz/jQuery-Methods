$(document).ready(function(){
    $("#btnTwo").click(function(){
        $("#pTwo").toggle();
    });

    $("#btnOne").click(function(){
        $("#pOne").append(" <t>|</t>");
    });
});

// $(document).ready(function(){
    

//     $("#btn2").click(function(){
//         $("ol").append("<li>Appended item</li>");
//     });
// });