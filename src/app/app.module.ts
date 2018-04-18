import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParserService } from './parsing/parser.service';
import { QuestionService } from './form/question.service';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './form/dynamic-form-question/dynamic-form-question.component';
import { QuestionnaireTestComponent } from './questionnaire-test/questionnaire-test.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    QuestionnaireTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    QuestionService,
    ParserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
