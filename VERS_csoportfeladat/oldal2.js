var aktObj = {cím : "", szerző : "", vers : "", kép : ""};
var objTomb = [];
var vanE = false;

$(function(){
    aktObjektum = {cím:"Nyúliskola",szerző:"Romhányi József",vers:"Részlet: <br> Erdőszélen nagy a móka, mulatság,<br>iskolába gyűlnek mind a nyulacskák.<br>A tanító ott középen az a nyúl,<br>kinek füle leghosszabbnak bizonyul.<br>Kezdi az oktatást egy fej káposztával,<br>Hallgatják is tátott szájjal.<br>",kép:"nyuliskola.jpg"};
    objTomb.push(aktObjektum);
    aktObjektum = {cím:"Metró",szerző:"Varró Dániel",vers:"Részlet: <br> Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,<br>kívánom, bárha lett vón.<br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig..<br>",kép:"metro.jpg"};
    objTomb.push(aktObjektum);
    console.log(objTomb);
    $("#gomb").click(versetKiir);
});

function versetKiir(){
    if (vanE == false){
        for (var i = 0; i < objTomb.length; i++) {
            $("article").append('<div><h3>'+objTomb[i]["cím"]+'</h3><p>'+objTomb[i]["vers"]+'</p><p>'+objTomb[i]["szerző"]+'</p></div>');
        }
        vanE = true;
    }else{
        $("article").empty();
        vanE = false;
    }
}