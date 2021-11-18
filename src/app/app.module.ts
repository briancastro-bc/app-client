import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { SpinnerModule } from './components/shared/components/spinner/spinner.module';
import { ServerInterceptor } from './interceptors/server.interceptor';
import { SharedModule } from './components/shared/shared.module';
import { SidebarModule } from './components/shared/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      timeOut: 3000
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NavbarModule,
    FooterModule,
    SpinnerModule,
    SidebarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
