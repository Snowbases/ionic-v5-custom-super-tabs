import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SuperTabButton } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChildren(SuperTabButton, { read: ElementRef }) superTabButtonElementRef: QueryList<ElementRef>;

  tabs = [
    { label: 'Minggu 1' },
    { label: 'Minggu 2' },
    { label: 'Minggu 3' },
    { label: 'Minggu 4' },
    { label: 'Minggu 5' },
    { label: 'Minggu 6' },
    { label: 'Minggu 7' },
  ];

  itemDetails = [
    {
      nama_produk: 'Produk 1',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 2',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 3',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 4',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 5',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 6',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    },
    {
      nama_produk: 'Produk 7',
      harga_jualan_unit: '0.00',
      kuantiti: '0'
    }
  ];

  activeTab: number = 0;

  constructor() { }

  ionViewDidEnter() {
    // Remove ripple effect
    this.superTabButtonElementRef.toArray().forEach((value) => value.nativeElement.shadowRoot.querySelector('ion-ripple-effect').remove());
  }

}
