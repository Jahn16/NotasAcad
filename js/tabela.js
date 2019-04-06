
let atividades = [];
let disciplinas = [];
let horarios = []
let conf = {
  tema: "branco",
  tabela: "padrao",
  cor: "padrao"
};
if(localStorage.getItem('materias')){
  disciplinas = JSON.parse(localStorage.getItem('materias'));
}
if(localStorage.getItem('afazeres')){
atividades = JSON.parse(localStorage.getItem('afazeres'));
}
if(localStorage.getItem('config')){
  conf = JSON.parse(localStorage.getItem('config'));
}
if(localStorage.getItem('horas')){
  horarios = JSON.parse(localStorage.getItem('horas'));
}
function criarTabela() {
        $('#tabela').empty();
        var tabela_estoque = document.getElementById('tabela');


        var tbl = document.createElement("table");
          let titulos =  document.createElement("tr");
          tbl.appendChild(titulos);
          let mat = document.createElement("th");
          titulos.appendChild(mat);
          mat.appendChild( document.createTextNode('MATÉRIA'));
          let nota = document.createElement("th");
          titulos.appendChild(nota);
          nota.appendChild( document.createTextNode('NOTA'));
          let media = document.createElement("th");
          titulos.appendChild(media);
          media.appendChild( document.createTextNode('MEDIA'));


        for (var r = 0; r < disciplinas.length; r++) {
            var row = document.createElement("tr");
            row.setAttribute('id','tr'+r);

             for (var c = 0; c < 3; c++) {
                var cell = document.createElement("td");

                if ( c==0) var cellText = document.createTextNode(disciplinas[r].nome);
                else if (c==1) var cellText = document.createTextNode(disciplinas[r].nota.toFixed(1));
                 else if(c==2) var cellText = document.createTextNode(disciplinas[r].media+'%');
                 if(conf.tabela == "personalizada"){
                if (c==0){
                  cell.style.color = disciplinas[r].cor;
                }
              }
              if(conf.cor=="personalizada"){
              if(c==2){
                if(disciplinas[r].media<60){
                cell.style.color = "red";
                cell.style.opacity = (100/disciplinas[r].media/10)+0.45;
              }
              else {
                cell.style.color = "#3caa2c";
                cell.style.opacity = disciplinas[r].media/100;
              }
              }
            }

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

  tbl.appendChild(row);
        }

     tabela_estoque.appendChild(tbl);
     if(disciplinas!=''){

     for(let i=0;i<disciplinas.length;i++){
       if(disciplinas[i].media>=60&&i==disciplinas.length-1){
         $('#status').html('<strong>STATUS:</strong>  APROVADO');
       }
       else if(disciplinas[i].media<60){
           for(let i=0;i<disciplinas.length;i++){
            if(100-(disciplinas[i].notamax-disciplinas[i].nota)<60){
               $('#status').html('<strong>STATUS:</strong>  EM EXAME FINAL');
               break;
            }
            else if(i==disciplinas.length-1){
               $('#status').html('<strong>STATUS:</strong>  CURSANDO');
            }

           }
         break;

       }
     }
   }
}


function criarTabelaAtv() {
        $('#tabela').empty();

        var tabela_estoque = document.getElementById('tabela');


        var tbl = document.createElement("table");
          let titulos =  document.createElement("tr");

          tbl.appendChild(titulos);

          let mat = document.createElement("th");
          titulos.appendChild(mat);
          mat.appendChild( document.createTextNode('MATÉRIA'));
          let des = document.createElement("th");
          titulos.appendChild(des);
          des.appendChild( document.createTextNode('DESCRIÇÃO'));
          let nota = document.createElement("th");
          titulos.appendChild(nota);
          nota.appendChild( document.createTextNode('VALOR'));

          let media = document.createElement("th");
          titulos.appendChild(media);
          media.appendChild( document.createTextNode('DIAS RESTANTES'));


        for (var r = 0; r < atividades.length; r++) {
            var row = document.createElement("tr");


             for (var c = 0; c < 4; c++) {
                var cell = document.createElement("td");
                cell.style.borderColor =  atividades[r].cor;
                if ( c==0) var cellText = document.createTextNode(atividades[r].nome);
                else if(c==1) var cellText = document.createTextNode(atividades[r].des);
                else if (c==2) var cellText = document.createTextNode(atividades[r].nota);
                else if(c==3) var cellText = document.createTextNode(acharData(atividades[r].data));
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

  tbl.appendChild(row);
        }

     tabela_estoque.appendChild(tbl);
}
function criarTabelaHr() {
        $('#tabela').empty();

        var tabela_estoque = document.getElementById('tabela');


        var tbl = document.createElement("table");
            let titulos =  document.createElement("tr");

          tbl.appendChild(titulos);


          let vaz = document.createElement("th");
          titulos.appendChild(vaz);

          let seg = document.createElement("th");
          titulos.appendChild(seg);
          seg.appendChild( document.createTextNode('Segunda'));
          let ter = document.createElement("th");
          titulos.appendChild(ter);
          ter.appendChild( document.createTextNode('Terça'));
          let qua = document.createElement("th");
          titulos.appendChild(qua);
          qua.appendChild( document.createTextNode('Quarta'));
          let qui = document.createElement("th");
          titulos.appendChild(qui);
          qui.appendChild( document.createTextNode('Quinta'));
          let sex = document.createElement("th");
          titulos.appendChild(sex);
          sex.appendChild( document.createTextNode('Sexta'));





        for (var r = 0; r < 12; r++) {
            var row = document.createElement("tr");
            let hora = document.createElement("th");
            row.appendChild(hora);
            if(r==0){
              hora.appendChild( document.createTextNode('07:00'));
            }
            else if(r==1){
              hora.appendChild( document.createTextNode('07:50'));
            }
            else if(r==2){
              hora.appendChild( document.createTextNode('08:50'));
            }
            else if(r==3){
              hora.appendChild( document.createTextNode('09:40'));
            }
            else if(r==4){
              hora.appendChild( document.createTextNode('10:40'));
            }
            else if(r==5){
              hora.appendChild( document.createTextNode('11:30'));
            }
            else if(r==6){
              hora.appendChild( document.createTextNode('13:00'));
            }
            else if(r==7){
              hora.appendChild( document.createTextNode('13:50'));
            }
            else if(r==8){
              hora.appendChild( document.createTextNode('14:50'));
            }
            else if(r==9){
              hora.appendChild( document.createTextNode('15:40'));
            }
            else if(r==10){
              hora.appendChild( document.createTextNode('16:40'));
            }
            else if(r==11){
              hora.appendChild( document.createTextNode('17:30'));
            }


             for (var c = 0; c < 5; c++) {
               let x = c+r*5;
                var cell = document.createElement("td");
                var div = document.createElement("div");
                div.setAttribute("class", x);
                var cellText = document.createElement("select");
                cellText.setAttribute("id", x);
                div.appendChild(cellText);
                cell.appendChild(div);
                row.appendChild(cell);

            }

  tbl.appendChild(row);

        }



     tabela_estoque.appendChild(tbl);
     if(!horarios[0]){
     $('#0').append('<option>Selecione</option>');
     $('#0').append('<option>Vago</option>');
   for(let i=0;i<disciplinas.length;i++){

     $('#0').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');

     }

}
  else {

       $('.0').html(horarios[0]);
  }
  if(!horarios[1]){
  $('#1').append('<option>Selecione</option>');
  $('#1').append('<option>Vago</option>');
  for(let i=0;i<disciplinas.length;i++){

  $('#1').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
  }

}
  else {

    $('.1').html(horarios[1]);
}
  if(!horarios[1]){
    $('#1').append('<option>Selecione</option>');
    $('#1').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#1').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.2').html(horarios[2]);
  }
  if(!horarios[2]){
    $('#2').append('<option>Selecione</option>');
    $('#2').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#2').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.2').html(horarios[2]);
  }
  if(!horarios[3]){
    $('#3').append('<option>Selecione</option>');
    $('#3').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#3').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.3').html(horarios[3]);
  }
  if(!horarios[4]){
    $('#4').append('<option>Selecione</option>');
    $('#4').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#4').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.4').html(horarios[4]);
  }
  if(!horarios[5]){
    $('#5').append('<option>Selecione</option>');
    $('#5').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#5').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.5').html(horarios[5]);
  }
  if(!horarios[6]){
    $('#6').append('<option>Selecione</option>');
    $('#6').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#6').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.6').html(horarios[6]);
  }
  if(!horarios[7]){
    $('#7').append('<option>Selecione</option>');
    $('#7').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#7').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.7').html(horarios[7]);
  }
  if(!horarios[8]){
    $('#8').append('<option>Selecione</option>');
    $('#8').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#8').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.8').html(horarios[8]);
  }
  if(!horarios[9]){
    $('#9').append('<option>Selecione</option>');
    $('#9').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#9').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.9').html(horarios[9]);
  }
  if(!horarios[10]){
    $('#10').append('<option>Selecione</option>');
    $('#10').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#10').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.10').html(horarios[10]);
  }
  if(!horarios[11]){
    $('#11').append('<option>Selecione</option>');
    $('#11').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#11').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.11').html(horarios[11]);
  }
  if(!horarios[12]){
    $('#12').append('<option>Selecione</option>');
    $('#12').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#12').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.12').html(horarios[12]);
  }
  if(!horarios[13]){
    $('#13').append('<option>Selecione</option>');
    $('#13').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#13').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.13').html(horarios[13]);
  }
  if(!horarios[14]){
    $('#14').append('<option>Selecione</option>');
    $('#14').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#14').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.14').html(horarios[14]);
  }
  if(!horarios[15]){
    $('#15').append('<option>Selecione</option>');
    $('#15').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#15').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.15').html(horarios[15]);
  }
  if(!horarios[16]){
    $('#16').append('<option>Selecione</option>');
    $('#16').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#16').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.16').html(horarios[16]);
  }
  if(!horarios[17]){
    $('#17').append('<option>Selecione</option>');
    $('#17').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#17').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.17').html(horarios[17]);
  }
  if(!horarios[18]){
    $('#18').append('<option>Selecione</option>');
    $('#18').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#18').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.18').html(horarios[18]);
  }
  if(!horarios[19]){
    $('#19').append('<option>Selecione</option>');
    $('#19').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#19').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.19').html(horarios[19]);
  }
  if(!horarios[20]){
    $('#20').append('<option>Selecione</option>');
    $('#20').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#20').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.20').html(horarios[20]);
  }
  if(!horarios[21]){
    $('#21').append('<option>Selecione</option>');
    $('#21').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#21').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.21').html(horarios[21]);
  }
  if(!horarios[22]){
    $('#22').append('<option>Selecione</option>');
    $('#22').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#22').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.22').html(horarios[22]);
  }
  if(!horarios[23]){
    $('#23').append('<option>Selecione</option>');
    $('#23').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#23').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.23').html(horarios[23]);
  }
  if(!horarios[24]){
    $('#24').append('<option>Selecione</option>');
    $('#24').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#24').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.24').html(horarios[24]);
  }
  if(!horarios[25]){
    $('#25').append('<option>Selecione</option>');
    $('#25').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#25').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.25').html(horarios[25]);
  }
  if(!horarios[26]){
    $('#26').append('<option>Selecione</option>');
    $('#26').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#26').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.26').html(horarios[26]);
  }
  if(!horarios[27]){
    $('#27').append('<option>Selecione</option>');
    $('#27').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#27').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.27').html(horarios[27]);
  }
  if(!horarios[28]){
    $('#28').append('<option>Selecione</option>');
    $('#28').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#28').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.28').html(horarios[28]);
  }
  if(!horarios[29]){
    $('#29').append('<option>Selecione</option>');
    $('#29').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#29').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.29').html(horarios[29]);
  }
  if(!horarios[30]){
    $('#30').append('<option>Selecione</option>');
    $('#30').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#30').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.30').html(horarios[30]);
  }
  if(!horarios[31]){
    $('#31').append('<option>Selecione</option>');
    $('#31').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#31').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.31').html(horarios[31]);
  }
  if(!horarios[32]){
    $('#32').append('<option>Selecione</option>');
    $('#32').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#32').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.32').html(horarios[32]);
  }
  if(!horarios[33]){
    $('#33').append('<option>Selecione</option>');
    $('#33').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#33').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.33').html(horarios[33]);
  }
  if(!horarios[34]){
    $('#34').append('<option>Selecione</option>');
    $('#34').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#34').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.34').html(horarios[34]);
  }
  if(!horarios[35]){
    $('#35').append('<option>Selecione</option>');
    $('#35').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#35').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.35').html(horarios[35]);
  }
  if(!horarios[36]){
    $('#36').append('<option>Selecione</option>');
    $('#36').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#36').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.36').html(horarios[36]);
  }
  if(!horarios[37]){
    $('#37').append('<option>Selecione</option>');
    $('#37').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#37').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.37').html(horarios[37]);
  }
  if(!horarios[38]){
    $('#38').append('<option>Selecione</option>');
    $('#38').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#38').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.38').html(horarios[38]);
  }
  if(!horarios[39]){
    $('#39').append('<option>Selecione</option>');
    $('#39').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#39').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.39').html(horarios[39]);
  }
  if(!horarios[40]){
    $('#40').append('<option>Selecione</option>');
    $('#40').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#40').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.40').html(horarios[40]);
  }
  if(!horarios[41]){
    $('#41').append('<option>Selecione</option>');
    $('#41').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#41').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.41').html(horarios[41]);
  }
  if(!horarios[42]){
    $('#42').append('<option>Selecione</option>');
    $('#42').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#42').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.42').html(horarios[42]);
  }
  if(!horarios[43]){
    $('#43').append('<option>Selecione</option>');
    $('#43').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#43').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.43').html(horarios[43]);
  }
  if(!horarios[44]){
    $('#44').append('<option>Selecione</option>');
    $('#44').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#44').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.44').html(horarios[44]);
  }
  if(!horarios[45]){
    $('#45').append('<option>Selecione</option>');
    $('#45').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#45').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.45').html(horarios[45]);
  }
  if(!horarios[46]){
    $('#46').append('<option>Selecione</option>');
    $('#46').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#46').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.46').html(horarios[46]);
  }
  if(!horarios[47]){
    $('#47').append('<option>Selecione</option>');
    $('#47').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#47').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.47').html(horarios[47]);
  }
  if(!horarios[48]){
    $('#48').append('<option>Selecione</option>');
    $('#48').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#48').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.48').html(horarios[48]);
  }
  if(!horarios[49]){
    $('#49').append('<option>Selecione</option>');
    $('#49').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#49').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.49').html(horarios[49]);
  }
  if(!horarios[50]){
    $('#50').append('<option>Selecione</option>');
    $('#50').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#50').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.50').html(horarios[50]);
  }
  if(!horarios[51]){
    $('#51').append('<option>Selecione</option>');
    $('#51').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#51').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.51').html(horarios[51]);
  }
  if(!horarios[52]){
    $('#52').append('<option>Selecione</option>');
    $('#52').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#52').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.52').html(horarios[52]);
  }
  if(!horarios[53]){
    $('#53').append('<option>Selecione</option>');
    $('#53').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#53').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.53').html(horarios[53]);
  }
  if(!horarios[54]){
    $('#54').append('<option>Selecione</option>');
    $('#54').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#54').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.54').html(horarios[54]);
  }
  if(!horarios[55]){
    $('#55').append('<option>Selecione</option>');
    $('#55').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#55').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.55').html(horarios[55]);
  }
  if(!horarios[56]){
    $('#56').append('<option>Selecione</option>');
    $('#56').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#56').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.56').html(horarios[56]);
  }
  if(!horarios[57]){
    $('#57').append('<option>Selecione</option>');
    $('#57').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#57').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.57').html(horarios[57]);
  }
  if(!horarios[58]){
    $('#58').append('<option>Selecione</option>');
    $('#58').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#58').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.58').html(horarios[58]);
  }
  if(!horarios[59]){
    $('#59').append('<option>Selecione</option>');
    $('#59').append('<option>Vago</option>');
    for(let i=0;i<disciplinas.length;i++){

      $('#59').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
  }
  else {

  $('.59').html(horarios[59]);
  }
  checarConfig();
}

  $('#tabela').on('change','#0',function(){
    let valor =   $('#0').val();
    if(valor=='Vago'){
      valor = ' '
    }
    horarios[0] = valor;
    salvarHr();
    criarTabelaHr();
});
$('#tabela').on('change','#1',function(){
  let valor =   $('#1').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[1] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#2',function(){
  let valor =   $('#2').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[2] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#3',function(){
  let valor =   $('#3').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[3] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#4',function(){
  let valor =   $('#4').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[4] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#5',function(){
  let valor =   $('#5').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[5] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#6',function(){
  let valor =   $('#6').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[6] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#7',function(){
  let valor =   $('#7').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[7] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#8',function(){
  let valor =   $('#8').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[8] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#9',function(){
  let valor =   $('#9').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[9] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#10',function(){
  let valor =   $('#10').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[10] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#11',function(){
  let valor =   $('#11').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[11] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#12',function(){
  let valor =   $('#12').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[12] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#13',function(){
  let valor =   $('#13').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[13] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#14',function(){
  let valor =   $('#14').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[14] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#15',function(){
  let valor =   $('#15').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[15] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#16',function(){
  let valor =   $('#16').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[16] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#17',function(){
  let valor =   $('#17').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[17] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#18',function(){
  let valor =   $('#18').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[18] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#19',function(){
  let valor =   $('#19').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[19] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#20',function(){
  let valor =   $('#20').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[20] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#21',function(){
  let valor =   $('#21').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[21] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#22',function(){
  let valor =   $('#22').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[22] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#23',function(){
  let valor =   $('#23').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[23] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#24',function(){
  let valor =   $('#24').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[24] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#25',function(){
  let valor =   $('#25').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[25] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#26',function(){
  let valor =   $('#26').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[26] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#27',function(){
  let valor =   $('#27').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[27] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#28',function(){
  let valor =   $('#28').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[28] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#29',function(){
  let valor =   $('#29').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[29] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#30',function(){
  let valor =   $('#30').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[30] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#31',function(){
  let valor =   $('#31').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[31] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#32',function(){
  let valor =   $('#32').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[32] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#33',function(){
  let valor =   $('#33').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[33] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#34',function(){
  let valor =   $('#34').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[34] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#35',function(){
  let valor =   $('#35').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[35] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#36',function(){
  let valor =   $('#36').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[36] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#37',function(){
  let valor =   $('#37').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[37] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#38',function(){
  let valor =   $('#38').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[38] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#39',function(){
  let valor =   $('#39').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[39] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#40',function(){
  let valor =   $('#40').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[40] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#41',function(){
  let valor =   $('#41').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[41] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#42',function(){
  let valor =   $('#42').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[42] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#43',function(){
  let valor =   $('#43').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[43] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#44',function(){
  let valor =   $('#44').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[44] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#45',function(){
  let valor =   $('#45').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[45] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#46',function(){
  let valor =   $('#46').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[46] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#47',function(){
  let valor =   $('#47').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[47] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#48',function(){
  let valor =   $('#48').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[48] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#49',function(){
  let valor =   $('#49').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[49] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#50',function(){
  let valor =   $('#50').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[50] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#51',function(){
  let valor =   $('#51').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[51] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#52',function(){
  let valor =   $('#52').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[52] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#53',function(){
  let valor =   $('#53').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[53] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#54',function(){
  let valor =   $('#54').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[54] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#55',function(){
  let valor =   $('#55').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[55] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#56',function(){
  let valor =   $('#56').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[56] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#57',function(){
  let valor =   $('#57').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[57] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#58',function(){
  let valor =   $('#58').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[58] = valor;
  salvarHr();
  criarTabelaHr();
});
$('#tabela').on('change','#59',function(){
  let valor =   $('#59').val();
  if(valor=='Vago'){
    valor = ' '
  }
  horarios[59] = valor;
  salvarHr();
  criarTabelaHr();
});
window.onload=criarTabela;

function salvar(){
  localStorage.setItem('materias',JSON.stringify(disciplinas));
}
function salvarAtv(){
  localStorage.setItem('afazeres',JSON.stringify(atividades));
}
function salvarConfig(){
  localStorage.setItem('config',JSON.stringify(conf));
}
function salvarHr(){
  localStorage.setItem('horas',JSON.stringify(horarios));
}
function pegar() {
  return localStorage.getItem('materias');
}
function acharData(data){
today=new Date()


var datetwo = new Date(data);

return Math.ceil((datetwo - today)  / 1000 / 60 / 60 / 24);
 }

 function ordena(){
   let temp;
      for(let c=0;c<atividades.length;c++){
        if(acharData(atividades[c].data)<=0){
          atividades.splice(c,1);
        }
      }
      for(let i=0; i<atividades.length; i++){
          let mi = i;

          for(let j = i + 1; j<atividades.length; j++) {
              if(acharData(atividades[j].data) < acharData(atividades[mi].data))
                  mi = j;

          }

          temp = atividades[i];
          atividades[i] = atividades[mi];
          atividades[mi] = temp;
        }

        salvarAtv();

  };
  function ordenaMat(valor){
      let temp;
      if(valor==0){
        for(let i=0; i<disciplinas.length; i++){
            let mi = i;

            for(let j = i + 1; j<disciplinas.length; j++) {
                if((disciplinas[j].nome[0]) < disciplinas[mi].nome[0])
                    mi = j;

            }

            temp = disciplinas[i];
            disciplinas[i] = disciplinas[mi];
            disciplinas[mi] = temp;
          }
      }
    if(valor==1){
    for(let i=0; i<disciplinas.length; i++){
        let mi = i;

        for(let j = i + 1; j<disciplinas.length; j++) {
            if((disciplinas[j].nota) < disciplinas[mi].nota)
                mi = j;

        }

        temp = disciplinas[i];
        disciplinas[i] = disciplinas[mi];
        disciplinas[mi] = temp;
      }
    }
    if(valor==2){
    for(let i=0; i<disciplinas.length; i++){
        let mi = i;

        for(let j = i + 1; j<disciplinas.length; j++) {
            if((disciplinas[j].nota) > disciplinas[mi].nota)
                mi = j;

        }

        temp = disciplinas[i];
        disciplinas[i] = disciplinas[mi];
        disciplinas[mi] = temp;
      }
    }
    if(valor==3){
    for(let i=0; i<disciplinas.length; i++){
        let mi = i;

        for(let j = i + 1; j<disciplinas.length; j++) {
            if((disciplinas[j].media) < disciplinas[mi].media)
                mi = j;

        }

        temp = disciplinas[i];
        disciplinas[i] = disciplinas[mi];
        disciplinas[mi] = temp;
      }
    }
    if(valor==4){
    for(let i=0; i<disciplinas.length; i++){
        let mi = i;

        for(let j = i + 1; j<disciplinas.length; j++) {
            if((disciplinas[j].media) > disciplinas[mi].media)
                mi = j;

        }

        temp = disciplinas[i];
        disciplinas[i] = disciplinas[mi];
        disciplinas[mi] = temp;
      }
    }
      criarTabela();
  }
  Notification.requestPermission();
  for(let c=0;c<atividades.length;c++){
    if(acharData(atividades[c].data)==1){
      let e =new Notification("Falta um dia", {
      body: atividades[c].des + " de " +atividades[c].nome
      });
      e.onclick = function(){

        $('#outras-coisas').html('<button id="add-atv" class="btn btn-dark">Adicionar atividades</button>');
        ordena();
        criarTabelaAtv();
    }

    }
  }
  $( document ).ready(function() {
      $('#outras-coisas').on('change','#ordnt',function(){
        ordenaMat($('#ordnt').val());
      })
  });
