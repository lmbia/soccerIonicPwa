function dibujarSlide(result) {
    let slide = document.querySelector('.swiper-wrapper');
    for (let i = 0; i < 3; i++) {
        slide.innerHTML += `<ion-slide class="swiper-slide">
    <ion-card class="abrir-modal" data-set="${result[i].title}"><img src="${result[i].thumbnail}" alt="">
    </ion-card>
</ion-slide>`;
    }
}


function dibujarUltimosPartidos(result) {
    let ultimosPartidos = document.querySelector('.ultimos-partidos');
    for (let i = 3; i < result.length; i++) {
        ultimosPartidos.innerHTML += `<ion-card class="abrir-modal" data-set="${result[i].title}">
        <ion-card-header>
            <ion-card-subtitle>${result[i].competition.name}</ion-card-subtitle>
            <ion-card-title>${result[i].title}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <img src="${result[i].thumbnail}" alt="">
        </ion-card-content>
    </ion-card>`;
    }
}


function abrirModal(result) {
    let modal = document.querySelectorAll('.abrir-modal');

    modal.forEach(function (elem) {
        elem.addEventListener('click', function () {

            for (let i = 0; i < result.length; i++) {
                if (result[i].title === elem.dataset.set) {
                    let arrayVideo = [];
                    let competicion = result[i].competition.name;
                    let titulo = result[i].videos[0].title;
                    arrayVideo.push(`${result[i].videos[0].embed}`);

                    presentModal(arrayVideo, titulo, competicion);
                }
            }
        })
    })
}

function dibujarBotonAdd() {
    let botonAdd = document.querySelector('.btn-add');
    botonAdd.innerHTML += `<ion-fab vertical="bottom" horizontal="end" slot="fixed">
            
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
            <ion-fab-button class="btn-perfil">
              <ion-icon name="information-circle-outline"></ion-icon>
            </ion-fab-button>
        </ion-fab-list>
        
   
</ion-fab>`;

    let btn = document.querySelector('.btn-perfil');
    btn.addEventListener('click', function () {
        presentModalPerfil();
    })
}