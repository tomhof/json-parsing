import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../form/question.service';
import { ParserService } from '../parsing/parser.service';

// TODO TMP for testing !!
import * as xml from '../test-data/ebida-order-1.xml';
import * as xml3 from '../test-data/ebida-order-3.xml';
import { Item } from '../model/questionnaire.model';
import { QuestionBase } from '../form/question/question-base';
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
    //this.loadQuestionnaire();
  }

  loadTestItems(): any {
    let jStr = this.parserService.parseXmlToJson(xml3.data3);
    let obj: any = JSON.parse(jStr);
    let items: Item[] = [];
    for (let o of obj.item) {
      let i = this.parserService.extractItem(o);
      items.push(i);
    }
    this.questions = [];
    for (let i of items) {
      let question: QuestionBase<any> = this.questionService.getQuestionForItem(i, 0);
      this.questions.push(question);
    }
  }

  loadQuestionnaire() {
    let jsonString = this.parserService.parseXmlToJson(xml.data1);
    let questionnaire = this.parserService.convertToQuestionnaire(jsonString);
    this.questions = this.questionService.getQuestions(questionnaire);
  }

}
