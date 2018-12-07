import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController) {

    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

  }




  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
        if(i <= 50) {
          let toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();
        }

      }

      

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
