import { Component, OnInit } from "@angular/core";
import { categories } from "../categories";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  categories = categories;
  products;
  categoryIdFromRoute;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryIdFromRoute = Number(routeParams.get("categoryId"));
    this.products = this.categories.find(
      category => category.id === this.categoryIdFromRoute
    ).products;
  }
}
