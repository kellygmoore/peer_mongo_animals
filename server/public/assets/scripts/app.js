var values = {};

$(document).ready(function(){
    console.log("Meow");
    $("#search").submit(function(event){
        event.preventDefault();



        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
            console.log(values);
        });



        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function(data){
                //console.log(data.data);
                //myData = data.object;
                appendDom(data);
            }
        })
    });
});

function appendDom(data){
    //if(values == "") {
        console.log(data.length);
        $("#showAnimal").empty();
        for (var i = 0; i < data.length; i++) {
            $("#showAnimal").append("<p>Name: " + data[i].name + "</p><p>Spirit Animal: " + data[i].spiritanimal + "</p>");
        }

}