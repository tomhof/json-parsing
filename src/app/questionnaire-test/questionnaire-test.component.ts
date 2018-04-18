import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../form/question.service';
import { ParserService } from '../parsing/parser.service';

// TODO TMP for testing !!
import * as xml from '../test/ebida-order-1.xml';
import * as xml3 from '../test/ebida-order-3.xml';
import { Item } from '../model/questionnaire.model';
//

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
    this.loadTestItems();
    // this.loadQuestionnaire();
  }

  loadTestItems(): any {
    let jStr = this.parserService.parseXmlToJson(xml3.data3);
    let obj: {} = JSON.parse(jStr);
    let items: Item[] = [];
    obj['item'].forEach(o => items.push(this.parserService.extractItem(o)));
    this.questions = [];
    items.forEach(i => this.questions.push(this.questionService.getQuestionForItem(i, 0)));
  }

  loadQuestionnaire() {
    let jsonString = this.parserService.parseXmlToJson(xml.data);
    let questionnaire = this.parserService.convertToQuestionnaire(jsonString);
    this.questions = this.questionService.getQuestions(questionnaire);
  }

}
