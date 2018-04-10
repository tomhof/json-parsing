import { Injectable } from '@angular/core';
import { Item, Questionnaire } from './questionnaire.model';

@Injectable()
export class ToObjectParserService {

  constructor() { }

  convertQuestionnaire(str: string): Questionnaire {
    let obj = JSON.parse(str);
    obj = obj.Questionnaire;
    let q = this.extractQuestionnaireHeader(obj);
    q.items = [];
    obj.item.forEach(i => q.items.push(this.extractItem(i)));
    return q;
  }

  extractQuestionnaireHeader(obj: any): Questionnaire {
    let q = new Questionnaire();
    q.id = obj.id._attributes.value;
    let text = 'Status: [' + obj.text.status._attributes.value + '] - Note: [' + obj.text.div.pre._text + ']';
    q.text = text;
    q.url = obj.url._attributes.value;
    // TODO ...
    return q;
  }

  // accessible for tests
  extractItem(obj: any): Item {
    let item: Item = new Item();
    item.linkId = obj.linkId._attributes.value;
    item.text = obj.text._attributes.value;
    item.type = obj.type._attributes.value;
    if (obj.option) {
      item.options = obj.option.map(o => o.valueString._attributes.value);
    }
    if (obj.item) {
      item.items = [];
      for (let i of obj.item) {
        item.items.push(this.extractItem(i));
      }
    }
    return item;
  }

}
