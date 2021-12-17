

/** BOILER GALERÍA SIMPLE */


/**variables */

let IMGactual=1;

let datoObra=['La libertad guiando al pueblo, Eugène Delacroix','El 3 de mayo en Madrid o Los fusilamientos, Francisco de Goya','Guernica, Pablo Picasso','La creación de Adán, Miguel Angel','La tentación de San Antonio, Salvador Dalí','Los amantes, René Magritte','Las meninas, Diego Velázquez','La persistencia de la memoria, Salvador Dalí', 'La noche estrellada, Vincent Van Gogh'];

let Estilo=['Basic','Dark','Happy'];

let Contador=0;


/**cambio de imagen */

let cambioimagen = (img, alt) => {
    let imagengrande = document.querySelector("#caja");
	imagengrande.src = img;
    imagengrande.alt = alt;
};


document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
      cambioimagen(item.src, item.alt);

      /**pie de foto */
      let pie = document.querySelector("#ficha");
      let numero = item.alt;
      let cifra = numero[7];
      pie.textContent = datoObra[cifra-1];

    })
})


/**avance imagen izquierda */

let izquierda = document.querySelector(`.izquierda`);
izquierda.addEventListener('click', event => {

    if (IMGactual>1) {
        IMGactual--;
    } else {
        IMGactual=9;
    }
    cambioimagen(`assets/images/${IMGactual}.jpg`);

    /**pie de foto */
    let pie = document.querySelector("#ficha");
    pie.textContent = datoObra[IMGactual-1];
    console.log(pie);
    });



/**avance imagen derecha */


let derecha = document.querySelector(`.derecha`);
derecha.addEventListener('click', event => {
    if (IMGactual < 9) {
    IMGactual++;
    } else {
        IMGactual = 1;
    }
    cambioimagen(`assets/images/${IMGactual}.jpg`);

    /**pie de foto */
    let pie = document.querySelector("#ficha");
    pie.textContent = datoObra[IMGactual-1];
    console.log(pie);
});


/**ocultar pie de foto*/

let muestraPie = document.querySelector('#mostrar_ficha');
muestraPie.addEventListener('click', event => {

    ocultapie = document.querySelector("#ficha");
    ocultapie.classList.toggle("oculto");
});



/**transicion de imagen*/

let transicion = document.querySelector("#caja");

transicion.addEventListener('load', event => {
    transicion.classList.remove('animacion');
    void transicion.offsetWidth;
    transicion.classList.add('animacion');
});




/**cambiar tema*/

let cambiartema = document.querySelector('#tema');
cambiartema.addEventListener('click', event => {

    if (Contador < 2) {
        Contador++;

    }else{
        Contador=0;
    }

    let apariencia=document.querySelector('#principal');
    let actual = apariencia.classList;
    apariencia.classList.replace(actual, Estilo[Contador]);

    let nombreTema=document.querySelector('#tema');
    nombreTema.textContent=`${Estilo[Contador]}`;
});
