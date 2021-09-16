var versTomb=[];
var aktObjektum={cím:"",szerző:"",vers:"",kép:""};

$(function(){

    aktObjektum = {cím:"Metró",szerző:"Varró Dániel",vers:"Részlet: <br> Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,<br>kívánom, bárha lett vón.<br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig..<br>",kép:"metro.jpg"};
    versTomb.push(aktObjektum);
    aktObjektum = {cím:"Nyúliskola",szerző:"Romhányi József",vers:"Részlet: <br> Erdőszélen nagy a móka, mulatság,<br>iskolába gyűlnek mind a nyulacskák.<br>A tanító ott középen az a nyúl,<br>kinek füle leghosszabbnak bizonyul.<br>Kezdi az oktatást egy fej káposztával,<br>Hallgatják is tátott szájjal.<br>",kép:"nyuliskola.jpg"};
    versTomb.push(aktObjektum);
    
    for (var i=0; i < versTomb.length ; i++) {
        $("article").append('<button class="latszik">'+ versTomb[i]["cím"]+'</button>');
    }
    for (var i = 0; i < versTomb.length; i++){
        $("article").append('<div class="nemlatszik"><h3>'+versTomb[i]["cím"]+'</h3><p>'+versTomb[i]["vers"]+'</p><p>'+versTomb[i]["szerző"]+'</p></div>');
    }
    $(".latszik").click(jelenit);
    
   
  }); 

  function jelenit(){
    if($(this).text()=="Metró"){
        $(".nemlatszik").eq(0).addClass("latszik");
        $(".nemlatszik").eq(1).removeClass("latszik");
    }
    if($(this).text()=="Nyúliskola"){
        $(".nemlatszik").eq(1).addClass("latszik");
        $(".nemlatszik").eq(0).removeClass("latszik");
    }
    
  }