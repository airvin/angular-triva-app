import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';
import { NgModule } from '@angular/core'



import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }