<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script
  src="http://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
</script>
$(document).ready(function(){
$( "#search" ).click(function(e) {
  console.log("Danielle");
  e.preventDefault();
  if($("#cardField").val() == "") { return;}
  var myurl= "/getcard?q=";
  var multiverseIDs = [];
  myurl += $("#cardField").val();
  console.log(myurl);
  $.getJSON(myurl,function(data) {
    console.log(data);
    var everything = "";
    $.each(data.cards, function(i,item) {
      if (item.imageUrl){
        console.log(item.imageUrl);
        everything += "<br><img src='" + item.imageUrl + "'<br>";
        multiverseIDs += item.id;
        console.log(item.id);
      }
    }); 
    $("#images").html(everything);
  })
});
});