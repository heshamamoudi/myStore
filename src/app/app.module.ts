import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { TokenIntInterceptor } from './interceptors/token-int.interceptor';
import { SignupComponent } from './components/signup/signup.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    LoadingComponent,
    SignupComponent,
    ShopComponent,
    ProductComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:TokenIntInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
