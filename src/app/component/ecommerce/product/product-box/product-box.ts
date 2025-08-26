import {
  ChangeDetectorRef,
  Component,
  inject,
  output,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../../shared/model/product.model';
import { ProductBoxFilterService } from '../../../../shared/services/ecommerce/product-box-filter.service';
import { ProductService } from '../../../../shared/services/ecommerce/product.service';
import { QuickView } from '../quick-view/quick-view';

@Component({
  selector: 'app-product-box',
  imports: [RouterModule, NgbRatingModule, QuickView],
  templateUrl: './product-box.html',
  styleUrls: ['./product-box.scss'],
})
export class ProductBox {
  readonly ConfirmationModal = viewChild<QuickView>('confirmationModal');

  readonly productDetail = output<Products>();

  public rateing = 5;
  public product!: string;
  public listData: Products[] = [];

  public sidebaron: boolean = false;
  public show: boolean = false;
  public open: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  private ProductService = inject(ProductService);
  private modalService = inject(NgbModal);
  private ProductBoxFilterService = inject(ProductBoxFilterService);
  private cd = inject(ChangeDetectorRef);
  public config = inject(NgbRatingConfig);

  constructor() {
    // Configure rating
    this.config.max = 5;
    this.config.readonly = true;
  }

  openMediaFilter() {
    if (this.show == false && this.sidebaron == false && this.open == false) {
      this.show = true;
      this.sidebaron = true;
      this.open = true;
    } else {
      this.show = false;
      this.sidebaron = false;
      this.open = false;
    }
  }

  openProductDetail(content: TemplateRef<NgbModal>, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.ProductService.getProduct(id).subscribe(product => {
      if (product) {
        this.productDetail.emit(product);
      }
    });
  }

  ngOnInit() {
    this.ProductService.products().subscribe(data => {
      this.listData = data;
    });
  }

  ngDoCheck() {
    this.col_xl_12 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_2 = this.ProductBoxFilterService.col_xl_2;
    this.col_sm_3 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_3 = this.ProductBoxFilterService.col_xl_3;
    this.xl_4 = this.ProductBoxFilterService.xl_4;
    this.col_sm_4 = this.ProductBoxFilterService.col_sm_4;
    this.col_xl_4 = this.ProductBoxFilterService.col_xl_4;
    this.col_sm_6 = this.ProductBoxFilterService.col_sm_6;
    this.col_xl_6 = this.ProductBoxFilterService.col_xl_6;
  }
}
