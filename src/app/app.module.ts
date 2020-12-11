import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlterarComponent } from './vehicle/alterar/alterar.component';
import { CadastroComponent } from './vehicle/cadastro/cadastro.component';
import { ConsultaComponent } from './vehicle/consulta/consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from './vehicle/service/vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
import {NgxPaginationModule} from 'ngx-pagination';
import { InterceptorModule } from './interceptor.module';
@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    AlterarComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,    
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    InterceptorModule

    ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
