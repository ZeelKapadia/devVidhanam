import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProvideService {

    serviceLists = [
        { img: "assets/img/s1.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
        { img: "assets/img/s2.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
        { img: "assets/img/s3.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
        { img: "assets/img/s4.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
        { img: "assets/img/s5.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
        { img: "assets/img/s6.jpg", title: "Mel apeirian salutatus scripserit ex", place: "Californiya , United State", time: "08.00 - 11.30", description: "Mel apeirian salutatus scripserit ex, omnesque aliquando moderatius cum et. Affert euismod scaevola qui cu." },
    ];

    getServices() {
        return this.serviceLists.slice();
    }
    getService(index: number) {
        return this.serviceLists.slice()[index];
    }
}
