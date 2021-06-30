customElements.define('modal-page-perfil', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <ion-header>
    <ion-toolbar>
      <ion-title>Acerca de</ion-title>
      <ion-buttons slot="primary">
        <ion-button onClick="Cerrar()">
          <ion-icon slot="icon-only" name="close"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
  <ion-avatar>
  <img src="../img/perfil.png">
</ion-avatar>
<ion-list>
  <ion-item>
    <ion-label>Lucas Biagiotti</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Diseño y Programación Web</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Cátedra PWA</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Turno Noche</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Comisión A</ion-label>
  </ion-item>
</ion-list>
  </ion-content>`;
  }
});

function presentModalPerfil() {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page-perfil';
  modalElement.cssClass = 'my-custom-class';

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

function Cerrar() {
  const modalElement = document.querySelector('ion-modal');
  modalElement.parentNode.removeChild(modalElement);
}