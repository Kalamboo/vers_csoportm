var versTomb = [];
var aktObjektum = {cím: "", szerző: "", vers: "", kép: ""};

$(function () {

    aktObjektum = {cím: "Metró", szerző: "Varró Dániel", vers: "Részlet: <br> Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,<br>kívánom, bárha lett vón.<br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig..<br>", kép: "kepek/metro.jpg"};
    versTomb.push(aktObjektum);
    aktObjektum = {cím: "Nyúliskola", szerző: "Romhányi József", vers: "Részlet: <br> Erdőszélen nagy a móka, mulatság,<br>iskolába gyűlnek mind a nyulacskák.<br>A tanító ott középen az a nyúl,<br>kinek füle leghosszabbnak bizonyul.<br>Kezdi az oktatást egy fej káposztával,<br>Hallgatják is tátott szájjal.<br>", kép: "kepek/nyuliskola.jpg"};
    versTomb.push(aktObjektum);


    $("article div").eq(0).append('<img src="' + versTomb[0]["kép"] + '" class="Metro">');
    $("article div").eq(2).append('<img src="' + versTomb[1]["kép"] + '" class="Nyuliskola">');
    $("article div").eq(1).append('<div class="nemlatszik"><h3>' + versTomb[0]["cím"] + '</h3><p>' + versTomb[0]["vers"] + '</p><p>' + versTomb[0]["szerző"] + '</p></div>');
    $("article div").eq(4).append('<div class="nemlatszik"><h3>' + versTomb[1]["cím"] + '</h3><p>' + versTomb[1]["vers"] + '</p><p>' + versTomb[1]["szerző"] + '</p></div>');

   
    $("article img").mouseover(jelenit);


});

function jelenit() {

   if($(this).hasClass("Metro")){
        $(".nemlatszik").eq(0).addClass("latszik");
    }
    if($(this).hasClass("Nyuliskola")){
          $(".nemlatszik").eq(1).addClass("latszik");
    }


}