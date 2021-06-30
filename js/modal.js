customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector('ion-modal');
    var texto = '';
    for (let i = 0; i < modalElement.componentProps.videosModal.length; i++) {
      texto += modalElement.componentProps.videosModal[i] + '</br>';
      console.log(modalElement.componentProps.videosModal[i])
    }
    this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-title>Videos</ion-title>
    <ion-buttons slot="primary">
      <ion-button onClick="Cerrar()">
        <ion-icon slot="icon-only" name="close"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding modal-cont">
<h2>${modalElement.componentProps.titulo}</h2>
<h3>${modalElement.componentProps.competicion}</h3> 
${texto} 
</ion-content>`;

  }
});


function presentModal(dato, titulo, competicion) {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.cssClass = 'my-custom-class';
  modalElement.componentProps = {
    'videosModal': dato,
    'titulo': titulo,
    'competicion': competicion
  };

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

function Cerrar() {
  const modalElement = document.querySelectorAll('ion-modal');
  console.log(modalElement);
  modalElement.parentNode.removeChild(modalElement);
}