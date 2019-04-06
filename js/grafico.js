let disciplinas = [

];
if(localStorage.getItem('materias')){
  disciplinas = JSON.parse(localStorage.getItem('materias'));
}

$(document).ready(function () {


	var graphData = [{

			data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
			color: '#71c73e'
		},
	];

  let c;
  for(let i=0;i<disciplinas.length;i++){
    if(disciplinas[i].provas!=''){

     if(JSON.stringify(disciplinas[i].provas).search('/')==-1){
        c =[disciplinas[i].provas];
     }
     else {
         c = disciplinas[i].provas.split("/");
     }

     break;
   }
}

  let graf = "[ ";
  for(let i=0;i<c.length;i++){
    if(i<c.length-1){
  	graf += "[ "+(i+1)+" , "+c[i]+"],";
  }
  else {
    graf += "[ "+(i+1)+" , "+c[i]+"]";
  }
  }
  graf += " ]";
  graphData[0].data = JSON.parse(graf);
if(c.length!=1){
  $.plot($('#graph-lines'), graphData, {
    series: {
      points: {
        show: true,
        radius: 5
      },
      lines: {
        show: true
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 50,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 0
    },
    yaxis: {
      tickSize: 10
    }

  });


  $.plot($('#graph-bars'), graphData, {
    series: {
      bars: {
        show: true,
        barWidth: .9,
        align: 'center'
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 50,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 0
    },
    yaxis: {
      tickSize: 10
    }
  });
}
else {
  $.plot($('#graph-lines'), graphData, {
    series: {
      points: {
        show: true,
        radius: 5
      },
      lines: {
        show: true
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 50,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 0
    },
    yaxis: {
      tickSize: 1
    }

  });


  $.plot($('#graph-bars'), graphData, {
    series: {
      bars: {
        show: true,
        barWidth: .9,
        align: 'center'
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 50,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 0
    },
    yaxis: {
      tickSize: 10
    }
  });
}


	$('#graph-bars').hide();

	$('#lines').on('click', function (e) {

		$('#bars').removeClass('active');
		$('#graph-bars').fadeOut();
		$(this).addClass('active');
		$('#graph-lines').fadeIn();
		e.preventDefault();

	});

	$('#bars').on('click', function (e) {
		$('#lines').removeClass('active');
		$('#graph-lines').fadeOut();
		$(this).addClass('active');
		$('#graph-bars').fadeIn().removeClass('hidden');
		e.preventDefault();
	});


	function showTooltip(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css({
			top: y - 16,
			left: x + 20
		}).appendTo('body').fadeIn();
	}

	var previousPoint = null;

	$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$('#tooltip').remove();
				var x = item.datapoint[0],
					y = item.datapoint[1];
					showTooltip(item.pageX, item.pageY,"Tirou "+ y + '% na ' + x + 'º prova');
			}
		} else {
			$('#tooltip').remove();
			previousPoint = null;
		}
	});
  $('#selecao').html('<form><select name="materias" form="castform" id="disciplinas">');
  for(let i=0;i<disciplinas.length;i++){
    if(disciplinas[i].provas!=''){
    $('#disciplinas').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');
  }
  }

    $("#selecao").on('change',"#disciplinas",function(){
      let c;
      if(JSON.stringify(disciplinas[$("#disciplinas").val()].provas).search('/')==-1){
         c =[disciplinas[$("#disciplinas").val()].provas];
      }
      else {
         c = disciplinas[$("#disciplinas").val()].provas.split("/");
      }
      let graf = "[ ";
      for(let i=0;i<c.length;i++){
        if(i<c.length-1){
        graf += "[ "+(i+1)+" , "+c[i]+"],";
      }
      else {
        graf += "[ "+(i+1)+" , "+c[i]+"]";
      }
      }
      graf += " ]";
      graphData[0].data = JSON.parse(graf);
      if(c.length!=1){
        $.plot($('#graph-lines'), graphData, {
          series: {
            points: {
              show: true,
              radius: 5
            },
            lines: {
              show: true
            },
            shadowSize: 0
          },
          grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 50,
            hoverable: true
          },
          xaxis: {
            tickColor: 'transparent',
            tickDecimals: 0
          },
          yaxis: {
            tickSize: 10
          }

        });


        $.plot($('#graph-bars'), graphData, {
          series: {
            bars: {
              show: true,
              barWidth: .9,
              align: 'center'
            },
            shadowSize: 0
          },
          grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 50,
            hoverable: true
          },
          xaxis: {
            tickColor: 'transparent',
            tickDecimals: 0
          },
          yaxis: {
            tickSize: 10
          }
        });
      }
      else {
        $.plot($('#graph-lines'), graphData, {
          series: {
            points: {
              show: true,
              radius: 5
            },
            lines: {
              show: true
            },
            shadowSize: 0
          },
          grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 50,
            hoverable: true
          },
          xaxis: {
            tickColor: 'transparent',
            tickDecimals: 0
          },
          yaxis: {
            tickSize: 1
          }

        });


        $.plot($('#graph-bars'), graphData, {
          series: {
            bars: {
              show: true,
              barWidth: .9,
              align: 'center'
            },
            shadowSize: 0
          },
          grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 50,
            hoverable: true
          },
          xaxis: {
            tickColor: 'transparent',
            tickDecimals: 0
          },
          yaxis: {
            tickSize: 10
          }
        });
      }
    });
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
      });
    });
    $('.menu-deslizante').on('click','#provas',function(){



        $('#modal-titulo').html('Adicionar Provas');
        $('#modal-texto').empty();
        $('#modal-texto').html('<form><label for="materias">Matéria: </label><select name="materias" form="castform" id="disciplina">');
        for(let i=0;i<disciplinas.length;i++){
          $('#disciplina').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');

        }
          $('#obs').empty();
         $('#modal-texto').append('<form><label for="nota">Nota na prova:</label><input type="number" placeholder="Nota obtida na prova" id="nota"><label for="nota-max">Nota total:</label><input type="number" placeholder="Nota máxima do teste" id="nota-max"></form>');
         $('#acoes').modal();
         $("#enviar").unbind().click(function() {

           if($('#nota').val()&&$('#nota-max').val()&&$('#disciplina').val()&&parseInt($('#nota').val())<=parseInt($('#nota-max').val())){
           let c = $('#disciplina').val();

           $('#disciplinas').val(1);
           disciplinas[c].nota = parseInt(disciplinas[c].nota) + parseInt($('#nota').val());
           disciplinas[c].notamax = parseInt(disciplinas[c].notamax) + parseInt($('#nota-max').val());
           disciplinas[c].media = Math.floor((parseInt(disciplinas[c].nota)/parseInt(disciplinas[c].notamax))*100);
           if(!disciplinas[c].provas){
             disciplinas[c].provas = Math.floor((parseInt($('#nota').val())/parseInt($('#nota-max').val()))*100);
           }
           else {
             disciplinas[c].provas = disciplinas[c].provas +"/"+ Math.floor((parseInt($('#nota').val())/parseInt($('#nota-max').val()))*100);
           }

           salvar();

           $('#selecao').html('<form><select name="materias" form="castform" id="disciplinas">');
           for(let i=0;i<disciplinas.length;i++){
             if(disciplinas[i].provas!=''){
             $('#disciplinas').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');
           }
           }
           $('#disciplinas').val(c);
         }
         else if(!$('#nota').val()||!$('#nota-max').val()||!$('#disciplina').val()){
           $('#texto-erro').html('Preencha os campos');
           $('#modal-erro').modal();
         }
         else if(parseInt($('#nota').val())>parseInt($('#nota-max').val())){
           $('#texto-erro').html('Valores inválidos(Nota maior do que nota máxima)');
           $('#modal-erro').modal();
         }

         $('#nota').val('');
         $('#nota-max').val('');
         let c;
         if(JSON.stringify(disciplinas[$("#disciplina").val()].provas).search('/')==-1){
            c =[disciplinas[$("#disciplina").val()].provas];
         }
         else {
            c = disciplinas[$("#disciplina").val()].provas.split("/");
         }
         let graf = "[ ";
         for(let i=0;i<c.length;i++){
           if(i<c.length-1){
           graf += "[ "+(i+1)+" , "+c[i]+"],";
         }
         else {
           graf += "[ "+(i+1)+" , "+c[i]+"]";
         }
         }
         graf += " ]";
         graphData[0].data = JSON.parse(graf);
         if(c.length!=1){
           $.plot($('#graph-lines'), graphData, {
             series: {
               points: {
                 show: true,
                 radius: 1
               },
               lines: {
                 show: true
               },
               shadowSize: 0
             },
             grid: {
               color: '#646464',
               borderColor: 'transparent',
               borderWidth: 50,
               hoverable: true
             },
             xaxis: {
               tickColor: 'transparent',
               tickDecimals: 0
             },
             yaxis: {
               tickSize: 10
             }

           });


           $.plot($('#graph-bars'), graphData, {
             series: {
               bars: {
                 show: true,
                 barWidth: .9,
                 align: 'center'
               },
               shadowSize: 0
             },
             grid: {
               color: '#646464',
               borderColor: 'transparent',
               borderWidth: 50,
               hoverable: true
             },
             xaxis: {
               tickColor: 'transparent',
               tickDecimals: 0
             },
             yaxis: {
               tickSize: 10
             }
           });
         }
         else {
           $.plot($('#graph-lines'), graphData, {
             series: {
               points: {
                 show: true,
                 radius: 5
               },
               lines: {
                 show: true
               },
               shadowSize: 0
             },
             grid: {
               color: '#646464',
               borderColor: 'transparent',
               borderWidth: 50,
               hoverable: true
             },
             xaxis: {
               tickColor: 'transparent',
               tickDecimals: 0
             },
             yaxis: {
               tickSize: 1
             }

           });


           $.plot($('#graph-bars'), graphData, {
             series: {
               bars: {
                 show: true,
                 barWidth: .9,
                 align: 'center'
               },
               shadowSize: 0
             },
             grid: {
               color: '#646464',
               borderColor: 'transparent',
               borderWidth: 50,
               hoverable: true
             },
             xaxis: {
               tickColor: 'transparent',
               tickDecimals: 0
             },
             yaxis: {
               tickSize: 10
             }
           });
         }
         });

    });
    $('.menu-deslizante').on('click','#materias',function(){
      atualizar();
      $('#modal-titulo').html('Adicionar Matéria');
      $('#obs').html('<strong>OBS:</strong> Para a matéria aparecer no gráfico é preciso adicionar provas a ela');
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
});
function atualizar() {
 disciplinas = [  ];
  if(localStorage.getItem('materias')){
    disciplinas = JSON.parse(localStorage.getItem('materias'));
  }
  $('#selecao').html('<form><select name="materias" form="castform" id="disciplinas">');
  for(let i=0;i<disciplinas.length;i++){
    if(disciplinas[i].provas!=''){
    $('#disciplinas').append('<option value="'+i+'">'+disciplinas[i].nome+'</option>');
  }
  }
  return JSON.parse(localStorage.getItem('materias'));
}
function salvar(){
  localStorage.setItem('materias',JSON.stringify(disciplinas));
}
// Código do menu.js e do tabela.js
let conf = {
  tema: "branco",
  tabela: "padrao",
  cor: "padrao"
};
if(localStorage.getItem('config')){
  conf = JSON.parse(localStorage.getItem('config'));
}
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

function salvarConfig(){
  localStorage.setItem('config',JSON.stringify(conf));
}

checarConfig();

function checarConfig(){
  $( document ).ready(function() {

    if(conf.tema=="escuro"){
        $('header').css('background-image','url(imgs/background.png)');
        $('.aheader').css('color','white');
        $('#status').css('color','white');
        $('.menu-deslizante a').css('color','white');
        $('.menu').css('background-color','gray');
        $('.menu').css('background-color','#383838');

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


        $('.menu').css('background-color','#f4f4f4');
        $('.menu a').css('background-color','#f4f4f4');
        $('.menu-deslizante a').css('color','#131313');
        $('body').css('background-color','white');

        $(".menu a").hover(function(){
          $(this).css("background-color", "#dbdbdb");
        }, function(){
          $(this).css("background-color", "#f4f4f4");
        });
      }

});
}
