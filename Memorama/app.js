document.addEventListener('DOMContentLoaded',()=>{

   
    const imagenes = [
        {'name':'loro',
        'img':'imagenes/loro.jpg'
        },
        {'name':'gato',
        'img':'imagenes/gato.jpg'
        },
        {'name':'perro',
        'img':'imagenes/perro.jpg'
        },
        {'name':'simio',
        'img':'imagenes/simio.jpg'
        },
        {'name':'loro',
        'img':'imagenes/loro.jpg'
        },
        {'name':'gato',
        'img':'imagenes/gato.jpg'
        },
        {'name':'perro',
        'img':'imagenes/perro.jpg'
        },
        {'name':'simio',
        'img':'imagenes/simio.jpg'
        },
    ];

    let imgElegida = [];
    let imgElegidaID = [];
    let tarjetas = document.querySelector('.tarjetas'),
    numeroIntentosGanados = [],
    intentos = document.querySelector('.resultado');
    
    imagenes.sort(()=> .5 - Math.random());

    const crearCuadro = () =>{

        for(i=0;i<imagenes.length;i++){
            const img = document.createElement('img');
            img.setAttribute('src','imagenes/incognita.jpg');
            img.setAttribute('data-id',i);
            img.setAttribute('style','width:200px');
            tarjetas.appendChild(img);
            img.addEventListener('click',descubrirImg)
        }
    }

     descubrirImg = (e) => {
        if(e.target.getAttribute('src') == 'imagenes/incognita.jpg'){
            let imgId = e.target.getAttribute('data-id');
            imgElegida.push(imagenes[imgId].name);
            imgElegidaID.push(imgId);
            e.target.setAttribute('src',imagenes[imgId].img);
            e.target.setAttribute('click','1');
        }
        if(imgElegida.length==2){
            setTimeout(compararImg,50);
        }
    }

    function compararImg (e){
        let imagen = document.querySelectorAll('img');
        const opcionUnoId = imgElegidaID[0];
        const opcionDosId = imgElegidaID[1];
        if(imgElegida[0] === imgElegida[1]){
            alert('si');
            numeroIntentosGanados.push(1);
            imagen[opcionUnoId].setAttribute('src','data:image/png;base64,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');
            imagen[opcionDosId].setAttribute('src','data:image/png;base64,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');
        }else{
            alert('fallaste');
            imagen[opcionUnoId].setAttribute('src','imagenes/incognita.jpg');
            imagen[opcionDosId].setAttribute('src','imagenes/incognita.jpg');
        }
        imgElegida = [];
        imgElegidaID = [];
        intentos.textContent = numeroIntentosGanados.length;
        if(numeroIntentosGanados.length === imagenes.length / 2){
            intentos.textContent='Ganaste';
            
        }
    }

    
    crearCuadro();
});


