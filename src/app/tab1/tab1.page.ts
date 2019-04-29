import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from "@ionic-native/local-notifications/ngx";
import { headersToString } from 'selenium-webdriver/http';
import { scheduled } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  scheduled = [];
  constructor(private plt: Platform, private localnotifications: LocalNotifications, private alertcnt: AlertController) {
    this.plt.ready().then(() => {
      this.localnotifications.on('click').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
      this.localnotifications.on('trigger').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    })
  }
  scheduleNotification() {
    this.localnotifications.schedule
      ({
        id: 1,
        title: 'Attention',
        text: 'Local Notification',
        data: { mydata: 'My data is here' },
        trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }

      });
  }
  recurringNotification() {
    this.localnotifications.schedule
      ({
        id: 2,
        title: 'Recuring',
        text: 'Local Notification',
        data: { mydata: 'My data is here' },
        trigger: { every: ELocalNotificationTriggerUnit.MINUTE }

      });
  }
  repeatingDaily() {
    this.localnotifications.schedule
      ({
        id: 4,
        title: 'Good Morning',
        text: 'Local Notification',
        data: { mydata: 'My data is here' },
        trigger: { every: { hour: 11, minute: 59 } }

      });
  }
  getAll() {
    this.localnotifications.getAll().then(res => {
      this.scheduled = res;
    })

  }
  showAlert(header, sub, msg) {
    this.alertcnt.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['ok']

    }).then(alert => alert.present());

  }
}
