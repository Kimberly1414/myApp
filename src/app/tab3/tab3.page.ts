import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contName="";
  contNumber="";
  contacts: any = [];
  constructor(public alertCtrl: AlertController)  {}

  save() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();
  }
  clearField() {
    this.contName = "";
    this.contNumber = "";
  }
  async confirm(cont) {
    const confirm = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Please confirm Deletion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Confirm',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index,1);
            }
        }
        }
      ]
    } );

    await confirm.present();
  }

}
