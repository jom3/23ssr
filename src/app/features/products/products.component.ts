import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private readonly dataSvc = inject(DataService)
  products$ = this.dataSvc.getAllProducts();
}
