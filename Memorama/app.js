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
        {'name':'incognita',
        'img':'imagenes/incognita.jpg'
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
        {'name':'incognita',
        'img':'imagenes/incognita.jpg'
        },
    ];

    let imgElegida = [];
    let imgElegidaID = [];
    let tarjetas = document.querySelector('.tarjetas');

    const crearCuadro = () =>{

        for(i=0;i<imagenes.length;i++){
            const img = document.createElement('img');
            img.setAttribute('src','imagenes/incognita.jpg');
            img.setAttribute('data-id',i);
            img.setAttribute('style','border-color:#000');
            img.setAttribute('style','border-width: 5px;');
            img.setAttribute('style',' border-style: solid;');
            img.setAttribute('style','width:200px')
            tarjetas.appendChild(img);
        }
    }

    // const comparar = () =>{
    //     let img = 
    // }
    
    
    crearCuadro();
});


