  $('.menu').on('click','button',function(){
    $('.hamburger').addClass('is-active');
    $('.menu-deslizante').removeClass('fechado');
    $('.menu-deslizante').addClass('aberto');

    $('.menu').on('click','.is-active',function(){
      $('.hamburger').removeClass('is-active');
      $('.menu-deslizante').removeClass('aberto');
      $('.menu-deslizante').addClass('fechado');

    });
    $('.menu-deslizante').on('click','a',function(){
      $('.hamburger').removeClass('is-active');
      $('.menu-deslizante').removeClass('aberto');
      $('.menu-deslizante').addClass('fechado');
    })
    $(document).mouseup(function(e)
  {
      var container = $(".menu");


      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
        $('.hamburger').removeClass('is-active');
        $('.menu-deslizante').removeClass('aberto');
        $('.menu-deslizante').addClass('fechado');
      }
  });
  });
  $('.menu-deslizante').on('click','#materias-notas',function(){
    $('#outras-coisas').empty();
    $('#outras-coisas').html('<button id="materias" class="btn btn-primary">Adicionar Matérias</button><select name="ordenar-notas" id="ordnt"><option>Ordernar por:</option><option value="0">Alfabética</option><option value="1">Menor nota</option><option value="3">Menor média</option><option value="2">Maior nota</option><option value="4">Maior média</option></select>');
    criarTabela();
    checarConfig();
  });
  $('#outras-coisas').on('click','#materias',function(){

    $('#modal-titulo').html('Adicionar Matéria');
    $('#modal-texto').html('<form><label for="mat">Matéria: </label><input type="text" id="mat" placeholder="Nome da matéria"><label for="cor">Cor da matéria:</label><input type="color" id="cor"></form> ');
    $('#acoes').modal();
    $("#enviar").unbind().click(function() {

      let cnome=0;
      let ccor=0;
      for(let i=0;i<disciplinas.length;i++){
        if(disciplinas[i].nome==$('#mat').val()){
          cnome++;
        }
        if(disciplinas[i].cor==$('#cor').val()){
          ccor++;
        }
      }
      if($('#mat').val()&&cnome==0&&ccor==0){

      let novaMateria= {
        nome: $('#mat').val(),
        nota: 0,
        notamax: 0,
        provas: '',
        media: 0,
        cor: $('#cor').val()
      };

      disciplinas.push(novaMateria);
      criarTabela();
      salvar();
       $("input").val("");
     }
     else if(!$('#mat').val()&&$('#cor').val()=='#000000'){
       $('#texto-erro').html('Selecione um nome e uma cor para a matéria.');
       $('#modal-erro').modal();
     }
     else if(!$('#mat').val()){
       $('#texto-erro').html('Selecione um nome para a matéria.');
       $('#modal-erro').modal();
     }
     else if(cnome!=0){
       $('#texto-erro').html('Essa matéria já foi adicionada.');
       $('#modal-erro').modal();
     }
     else if(ccor!=0){
       $('#texto-erro').html('Essa cor já foi utilizada.');
       $('#modal-erro').modal();
     }
    });
  });
$('.menu-deslizante').on('click','#provas',function(){
    $('#modal-titulo').html('Adicionar Nota');


    $('#modal-texto').html('<form><label for="tiponota">Tipo de nota: </label><select name="tiponota" form="castform" id="tiponota"><option value="prova">Prova</option><option value="atividade">Atividade</option></select>');


    $('#modal-texto').append('<form><label for="materias">Matéria: </label><select name="materias" form="castform" id="disciplina">');
    for(let i=0;i<disciplinas.length;i++){
      $('#disciplina').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');

    }
    $('#modal-texto').append('<form><label for="nota">Nota obtida:</label><input type="number" placeholder="Nota obtida na prova" id="nota"><label for="nota-max">Nota total:</label><input type="number" placeholder="Nota máxima do teste" id="nota-max"></form>');
   $('#acoes').modal();

     $("#enviar").unbind().click(function() {
       if($('#nota').val()&&$('#nota-max').val()&&$('#disciplina').val()&&parseInt($('#nota').val())<=parseInt($('#nota-max').val())){
       let c = $('#disciplina').val();
       disciplinas[c].nota = parseFloat(disciplinas[c].nota) + parseFloat($('#nota').val());
       disciplinas[c].notamax = parseFloat(disciplinas[c].notamax) + parseFloat($('#nota-max').val());
       disciplinas[c].media = Math.floor((parseFloat(disciplinas[c].nota)/parseFloat(disciplinas[c].notamax))*100);
       if($('#tiponota').val()=='prova'){
       if(!disciplinas[c].provas){
         disciplinas[c].provas = Math.floor((parseFloat($('#nota').val())/parseFloat($('#nota-max').val()))*100);
       }
       else {
         disciplinas[c].provas = disciplinas[c].provas +"/"+ Math.floor((parseFloat($('#nota').val())/parseFloat($('#nota-max').val()))*100);
       }
     }
       criarTabela();
       salvar();

     }
    if(!$('#nota').val()||!$('#nota-max').val()||!$('#disciplina').val()){
       $('#texto-erro').html('Preencha todos os campos');
       $('#modal-erro').modal();
     }

     else if(parseFloat($('#nota').val())>parseFloat($('#nota-max').val())) {
       $('#texto-erro').html('Valores inválidos(Nota maior do que nota máxima)');
       $('#modal-erro').modal();
     }
     else {
     $('#nota').val('');
     $('#nota-max').val('');
   }
     });

});
$('.menu-deslizante').on('click','#atividades',function(){

  $('#status').empty();
  $('#outras-coisas').html('<button id="add-atv" class=" btn btn-primary ">Adicionar atividades</button><button id="rm-atv" class="btn btn-dark">Remover Atividades</button>');
    ordena();
  criarTabelaAtv();
  $("#add-atv").unbind().click(function() {
    $('#modal-titulo').html('Adicionar Atividades');
    $('#modal-texto').html('<form><label for="materias">Matéria: </label><select name="materias" form="castform" id="disciplina">');
    for(let i=0;i<disciplinas.length;i++){
      $('#disciplina').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');

    }
    $('#modal-texto').append('<form><label for="des">Descrição<em class="vermelho">*</em></label><input id="des" type="text" placeholder="Ex: Pag 32,33"><label for="atvdat">Data para entrega<em class="vermelho">*</em></label><input id="atvdat" type="date"><label for="valor">Valor da atividade(opcional)</label><input type="number" id="valor"></form>');
    $('#acoes').modal();
    $("#enviar").unbind().click(function() {
      if($('#atvdat').val()&&$('#des').val()){
      let data = $('#atvdat').val();
      let valor = $('#valor').val();
      if(!$('#valor').val()) valor= 0;
    let novaAtividade= {
      nome: disciplinas[$('#disciplina').val()].nome,
      des:  $('#des').val(),
      nota: valor,
      data: data,
      cor:  disciplinas[$('#disciplina').val()].cor
    };

    atividades.push(novaAtividade);
    ordena();
    criarTabelaAtv();

    salvarAtv();
     $("input").val("");
   }

   else if(!$('#atvdat').val()||!$('#des').val()){
     $('#texto-erro').html('Preencha os campos');
     $('#modal-erro').modal();
   }
   });
  });
  $("#rm-atv").unbind().click(function() {
    $('#modal-titulo').html('Remover Atividades');
    $('#modal-texto').html('<form><label for="materias">Matéria: </label><select name="materias" form="castform" id="disciplina-rm">');
    $('#disciplina-rm').append('<option>Selecione uma matéria</option>');
    for(let i=0;i<disciplinas.length;i++){
      $('#disciplina-rm').append('<option value="'+disciplinas[i].nome+'">'+disciplinas[i].nome+'</option>');
    }
    $('#acoes').modal();

     $(document).ready(function(){
    $("#disciplina-rm").change(function(){
      $('#form-rm').remove();
      $('#modal-texto').append('<form id="form-rm"><label for="atividades-rm">Atividades a remover: </label><select name="atividades-rm" form="castform" id="atv-rm">');

      for(let i=0;i<atividades.length;i++){
        if($('#disciplina-rm').val()==atividades[i].nome){
        $('#atv-rm').append('<option value="'+i+'">'+atividades[i].des+'</option>');
      }
    }
        $("#enviar").unbind().click(function() {
            atividades.splice($('#atv-rm'),1);
            salvarAtv();
            ordena();
            criarTabelaAtv();

        });
    });
  });

  });

  document.onkeypress = function(evt) {
      evt = evt || window.event;
      let charCode = evt.keyCode || evt.which;
      let charStr = String.fromCharCode(charCode);
      if(charStr == '´'){
        localStorage.setItem('materias','');
        localStorage.setItem('afazeres','');
        disciplinas = [];
        atividades = [];
        criarTabelaAtv();
        criarTabela();
      }
      if(charStr == ';'){
        ordena();

      }
  }
checarConfig();
});
$('.menu-deslizante').on('click','#grafico',function(){

  if(localStorage.getItem('materias')){

  for(let i=0;i<disciplinas.length;i++){
    if(disciplinas[i].provas !=''){
    window.location.href = "grafico.html";
    break;
  }
  if (i==disciplinas.length-1) {
      $('#texto-modal-fechar').html("Adicione provas que você já fez, para poder ver seu gráfico de desempenho");
      $('#modalfechar').modal();
  }
  }

}
else {
  $('#texto-modal-fechar').html("Adicione uma matéria e depois provas que você já fez, para poder ver seu gráfico de desempenho");
  $('#modalfechar').modal();
}
});

$("#config-botao").click(function(){

    $('#config-texto').html('<form id="config"> <input type="checkbox" id="escuro" name="esc" value="escuro" class="check"> <label for="escuro" class="lbcheck">Tema Preto</label><input type="checkbox" id="tabelas" name="esc" value="escuro" class="check"> <label for="tabelas" class="lbcheck">Tabela Personalizada</label> <input type="checkbox" id="cores" name="cores" value="padrao" class="check"> <label for="cores" class="lbcheck">Cor Na Média</label> </form>');
    if(conf.tema=="escuro"){
      $('#escuro').prop('checked', true);
    }
    if(conf.tabela=="personalizada"){
      $('#tabelas').prop('checked', true);
    }
    if(conf.cor=="personalizada"){
      $('#cores').prop('checked', true);
    }
    $('#configuracoes').modal();

});

$('#configuracoes').on('change','#config',function(){


  if ($('#escuro').is(":checked"))
  {
    conf.tema = "escuro";
    salvarConfig();
  }
else {
  conf.tema = "branco";
  salvarConfig();

}
if ($('#tabelas').is(":checked")){
  conf.tabela = "personalizada";
  salvarConfig();
$("#aviso").html('<strong>OBS: </strong>Para algumas mudanças serem aplicadas é necessário reiniciar a página');
}
else {
conf.tabela = "padrao";
salvarConfig();
$("#aviso").html('<strong>OBS: </strong>Para algumas mudanças serem aplicadas é necessário reiniciar a página');
}
if ($('#cores').is(":checked")){
  conf.cor = "personalizada";
  salvarConfig();
$("#aviso").html('<strong>OBS: </strong>Para algumas mudanças serem aplicadas é necessário reiniciar a página');
}
else {
conf.cor = "padrao";
salvarConfig();
$("#aviso").html('<strong>OBS: </strong>Para algumas mudanças serem aplicadas é necessário reiniciar a página');
}
checarConfig();
});
$( document ).ready(function() {
  checarConfig();
})
function checarConfig(){
  $( document ).ready(function() {

    if(conf.tema=="escuro"){
        $('header').css('background-image','url(imgs/background.png)');
        $('.aheader').css('color','white');
        $('#status').css('color','white');
        $('.menu-deslizante a').css('color','white');
        $('.menu').css('background-color','gray');
        $('.menu').css('background-color','#383838');
        $('table th').css('background-color','#383838');
        $('body').css('background-color','#131313');
        $('.menu a').css('background-color','#383838');
        $(".menu a").hover(function(){
          $(this).css("background-color", "#131313");
        }, function(){
          $(this).css("background-color", "#383838");
        });
      }
      else {
        $('header').css('background-image','url(imgs/background2.png)');
        $('.aheader').css('color','black');
        $('#status').css('color','black');

        $('.menu').css('background-color','#f4f4f4');
        $('.menu a').css('background-color','#f4f4f4');
        $('.menu-deslizante a').css('color','#131313');
        $('body').css('background-color','white');
        $('table th').css('background-color','#4CAF50');
        $(".menu a").hover(function(){
          $(this).css("background-color", "#dbdbdb");
        }, function(){
          $(this).css("background-color", "#f4f4f4");
        });
      }

});
}
$('.menu-deslizante').on('click','#horarios',function(){
  $('#status').empty();
  $('#outras-coisas').empty();
  criarTabelaHr();
});
