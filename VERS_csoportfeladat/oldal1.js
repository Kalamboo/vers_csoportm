var versTomb = [
    {
        cim:"A Hegyi Zsupsz",
        szerző:"Keresztesi János",
        vers:"A Hegyi Zsupsz egy nagy, kövér,<br>nehézkes léptű, lomha lény,<br>és lenn a völgyben él szegény.<br><br>A hegyre nem megy föl soha.<br>A Kőszáli Puff rokona.",
        kep:"hegyizsupsz.PNG"
    }
];
var kepMegjelenit = 0;

$(function(){

    // html elembe tartalom elhelyezése
    $("article").empty();
    $("article").append("<div class='vers1'></div>")
    for (let i = 0; i < versTomb.length; i++) {
        const element = versTomb[i];
        $(".vers1").append("<div><h3>"+element["cim"]+"</h3><p>"+element["vers"] + "</p><p>" + element["szerző"] + "</p></div>");
    }
    $(".vers1 h3").on("mouseenter", esemeny);
});

function esemeny(){
    if(kepMegjelenit == 0){
        const element = versTomb[0];
        $(".vers1").append('<img src="'+element["kep"]+'" alt="vers1">');
        kepMegjelenit = 1;
    }
}