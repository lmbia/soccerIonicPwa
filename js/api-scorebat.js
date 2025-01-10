window.addEventListener('load', () => {

    const url = 'https://www.scorebat.com/video-api/v1/';
    const fetchPromise = fetch(`${url}`);

    fetchPromise.then(response => {
        if (response.status != 200) {
            console.log('Parece que hubo un error ' + response.status);
            return;
        } else {
            console.log('Response: ' + response);
            /* response.json().then(data => console.log(data)); */
            let spinner = document.querySelector('.mi-spinner');
            spinner.remove();
            return response.json();
        }
    }).then(result => {
        console.log('Result: ' + result);

        dibujarSlide(result);
        dibujarUltimosPartidos(result);
        dibujarBotonAdd();
        abrirModal(result);

        /* Search Bar */
        let input = document.querySelector('.searchbar-input');
        input.addEventListener('keydown', function (event) {
            if (event.keyCode == 13) {
                let palabra = input.value;
                if (input.value != '' && input.value != 0) {
                    let arrayVideo = [];
                    for (let i = 0; i < result.length; i++) {
                        let palabraEncontrada = result[i].title.toUpperCase().trim().indexOf(palabra.toUpperCase().trim());
                        if (palabraEncontrada !== -1) {
                            console.log('Encontre la palabr en ', result[i].title, palabraEncontrada);
                            arrayVideo.push(`${result[i].videos[0].embed}`);
                        }
                    }
                    presentModal(arrayVideo, titulo = '', competicion = '');
                }
            }
        })
    }).catch(err => console.log('Hubo un error: ', err));
})