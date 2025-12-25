import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonGrid, IonCol, IonRow, IonLabel, IonIcon, IonList, IonItem } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonGrid, IonCol, IonRow, IonLabel, IonIcon, IonList, IonItem],

=======
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonLabel, IonCard, IonCardContent, IonList, IonInput, IonButton, IonItem, IonIcon, IonCol, IonRow, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonLabel, IonList, IonInput, IonButton, IonItem, IonCol, IonRow, IonIcon, IonCard, IonCardContent, IonButtons]
>>>>>>> connexion
})
export class accueilPage implements OnInit {
  nom: string = '';

<<<<<<< HEAD
  constructor(private http: HttpClient,private navCtrl: NavController ) {}

  goToReservation() { this.navCtrl.navigateForward('/home'); }

   ngOnInit() {
      // Récupérer toutes les réservations
      this.http.get<any[]>('http://localhost:3000/home')
        .subscribe(home => {
          if (home.length > 0) {
            // Ici on prend la dernière réservation
            const lasthome = home[home.length - 1];
            this.nom = lasthome.nom;
          }
        });
=======
  constructor(private router: Router, private auth: AuthService) {

  }
  currentUser: any;
  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
>>>>>>> connexion
    }

  showMessage1() {
    alert('Bienvenue sur le bouton secondaire');
  }

<<<<<<< HEAD
  showMessage2() {
    alert('Tout ce que tu fais, moi je le fais en mieux');
  }

  showMessage3() {
    alert('Bienvenue sur le bouton principal');
  }

  doSomething() {
    console.log('Bouton cliqué !');
    alert('BSB LA MALA_GANG');
  }
action(msg: string) {
    alert(msg);
  }

  //action(icone: string) {
  //  this.router.navigate(['/reservations']);
   // console.log('Clic sur l’icône', icone);

  //}
=======
  navigateToReservation() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

>>>>>>> connexion
}
