import { Component, OnInit } from '@angular/core';
import { NavHelperService } from '../../services/nav-helper.service';
import { ProductService } from '../../services/product.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends NavHelperService implements OnInit {
  public navigation = data;
  public cartlength: number | undefined;
  public wishlistlength: number | undefined;
  constructor(
    public helperService: NavHelperService,
    private productService: ProductService
  ) {
    super();
  }

  ngOnInit(): void {
    this.cartlength = this.productService.getProductsCountInCart();
    this.wishlistlength = this.productService.getProductsCountInWishlist();
    this.productService.watchStorage().subscribe((data) => {
      this.cartlength = this.productService.getProductsCountInCart();
      this.wishlistlength = this.productService.getProductsCountInWishlist();
    })
  }

}
