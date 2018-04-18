import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../form/question.service';


@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire-test.component.html',
  styleUrls: ['./questionnaire-test.component.css']
})
export class QuestionnaireTestComponent implements OnInit {

  questions: any[];

  constructor(
    service: QuestionService,
  ) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
