import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../form/question.service';
import { ParserService } from '../parsing/parser.service';

// TODO TMP for testing !!
import * as xml from '../test/ebida-order-1.xml';


@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire-test.component.html',
  styleUrls: ['./questionnaire-test.component.css']
})
export class QuestionnaireTestComponent {

  questions: any[];

  constructor(
    private questionService: QuestionService,
    private parserService: ParserService,
  ) {
    let object = this.parserService.parseXmlToJson(xml.data);
    let questionnaire = this.parserService.convertToQuestionnaire(object);
    this.questions = questionService.getQuestions(questionnaire);
  }

}
