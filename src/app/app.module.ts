import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { EntrydetailComponent } from './entrydetail/entrydetail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { EntryFormComponent } from './entry-form/entry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntrydetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    EntryFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
