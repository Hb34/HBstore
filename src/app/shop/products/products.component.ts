import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products = [];
  prefUrlImage = "http://backend/images/products/";
  prodSub: Subscription;

  constructor(private prodService: ProductsService) {

   }
  ngOnDestroy() {
    this.prodSub.unsubscribe();
  }

  ngOnInit(): void {
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data) => {
        this.products = data;
      });
      this.prodService.emitProducts();
  }

}
