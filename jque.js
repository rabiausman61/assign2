$(function()
{
    $("#add").click(productUpdate);
    $("#reset").click(formClear);
    $("#update").click(productUpdate);
   
  
});

function productsAdd() {
    $("#m").append("<tr>" +
        "<td>" + $("#fname").val() + "</td>"  +
        "<td>" + $("#age").val() + "</td>" +
        "<td>" +$("input[name='gender']:checked").val() + "</td>" +

    "<td>" + $("#city option:selected").text() + "</td>" + 
    "<td>" +
        "<button id='del' onclick='productdel(this)' > Delete" +
        "</button>"
         + 
        "<button id='up' onclick='' onclick='updatetoform();' > Update" +
        "</button>"
         + 
        "</td>" +
        "</tr>");
}
function productdel(ctl) {
    $(ctl).parents("tr").remove();
}
        
function productUpdate() {
   
  
        productsAdd();
        formClear();
    


}


function updatetoform(ctl){

        row = $(ctl).parents("tr");
        var cols = row.children("td");
        $("fname").val($(cols[1]).text())=$("#m").fname;
        $("#age").val($(cols[2]).text());

       
    
}
function formClear() {
    $("#fname").val("");
    $("#age").val("");
    $("#gender").val("");
    $("#city").val("");
    selectedRow=null;
  
}
var selectedRow = null

