window.addEventListener('load', function(){

        var btn_gravacao = document.querySelector('#btn_gravar_audio')

        var transcricao_audio = '';
        var esta_gravando = false;


        if(window.SpeechRecognition || window.webkitSpeechRecognition){
            var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition;
            var recebe_audio = new speech_api()

            recebe_audio.continuous = false;
            recebe_audio.interimResults = false;
            recebe_audio.lang = "pt-BR";

            recebe_audio.onstart = function () {
                esta_gravando = true;
                btn_gravacao.innerHTML = 'Gravando'
              }
            recebe_audio.onend = function () {
                esta_gravando = false;
                btn_gravacao.innerHTML = 'iniciar Gravação'
              }
              
              recebe_audio.onresult = function(event){
                  transcricao_audio = event.results[0][0].transcript;

                  console.log(transcricao_audio)
                  var teste = transcricao_audio.split('')
                  var result = "";
                  for(var i = 0; i<teste.length;i++){
                      if(teste[i]=="x"){
                          teste[i]="*";
                      }
                  }
                  for(var i = 0; i<teste.length;i++){
                        result += teste[i];
                      }
                      
                  
                  
                  document.getElementById("res").value = eval(result);
              }
              btn_gravacao.addEventListener("click", function(e){
                  recebe_audio.start()
              }, false)

        }else{
            console.log("Navegador não tem suporte a web speech api")
        }
},false)