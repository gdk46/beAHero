import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* components */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormDoadorComponent } from './form-doador/form-doador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaDoadorComponent } from './lista-doador/lista-doador.component';

/* Service */
import { DoadorService } from 'src/service/doador/doador.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    FormDoadorComponent,
    PageNotFoundComponent,
    ListaDoadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
  ],
  providers: [DoadorService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
