import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdfComponent } from './tdf/tdf.component';
import { RdfComponent } from './rdf/rdf.component';
import { TaskComponent } from './task/task.component';
import { FilelistComponent} from './filelist/filelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    RdfComponent,
    TaskComponent,
    FilelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
