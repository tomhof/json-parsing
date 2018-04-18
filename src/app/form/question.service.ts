import { Injectable } from '@angular/core';

import { Questionnaire, Item } from '../model/questionnaire.model';
import { QuestionBase } from '../form/question/question-base';
import { QuestionGroup } from '../form/question/question-group';
import { DropdownQuestion } from '../form/question/question-dropdown';
import { TextboxQuestion } from '../form/question/question-textbox';
import { RadioQuestion } from '../form/question/question-radio';
import { DateQuestion } from '../form/question/question-date';
import { CheckboxQuestion } from '../form/question/question-checkbox';
import { TextareaQuestion } from '../form/question/question-textarea';
import { QuestionDescription } from '../form/question/question-description';


// TODO TMP
const todoText = 'TODOs:\n'
  + '* <value> element f. Items im Questionnaire XML\n'
  + '* Required-Attr. im Questionnaire XML\n'
  + '  (ev. weitere Validierungen als Ausblick...)\n'
  + '* Attribut zur Unterscheidung DropDown/RadioButtons im Questionnaire XML\n'
  + '* Struktur Questionaire.Text ?!\n';


@Injectable()
export class QuestionService {

  getQuestions(q: Questionnaire): QuestionBase<any>[] {
    let res: QuestionBase<any>[] = [];
    this.pushQuestionnaireDescriptions(q, res);
    for (let i of q.items) {
      res.push(this.getQuestionForItem(i, 1));
    }
    return res;
  }

  // TODO TMP labels
  private pushQuestionnaireDescriptions(q, res) {
    let group = new QuestionGroup({ key: q.id, label: 'Questionnaire Kopfdaten' });
    group.nestingLevel = 0;
    group.children.push(new QuestionDescription({ label: 'ID', value: q.id }));
    group.children.push(new QuestionDescription({ label: 'Text', value: q.text }));
    group.children.push(new QuestionDescription({ label: 'URL', value: q.url }));
    group.children.push(new QuestionDescription({ label: 'Title', value: q.title }));
    group.children.push(new QuestionDescription({ label: 'Status', value: q.status }));
    group.children.push(new QuestionDescription({ label: 'Experimental', value: q.experimental }));
    group.children.push(new QuestionDescription({ label: 'Date', value: q.date }));
    group.children.push(new QuestionDescription({ label: 'Publisher', value: q.publisher }));
    group.children.push(new QuestionDescription({ label: 'Subject Type', value: q.subjectType }));
    res.push(group);
  }

  // accessible for tests
  getQuestionForItem(item: Item, nestingLevel: number): QuestionBase<any> {
    let widget: QuestionBase<any>;
    switch (item.type) {
      case 'group':
        let groupWidget: QuestionGroup = new QuestionGroup({
          key: item.linkId,
          label: item.text,
        });
        groupWidget.nestingLevel = nestingLevel;
        for (let i of item.items) {
          groupWidget.children.push(this.getQuestionForItem(i, nestingLevel + 1));
        }
        widget = groupWidget;
        break;
      case 'string':
        widget = new TextboxQuestion({
          key: item.linkId,
          label: item.text,
        });
        break;
      case 'text':
        widget = new TextareaQuestion({
          key: item.linkId,
          label: item.text,
          rows: 12,
          span: 3,
        });
        // TODO TMP!
        if (item.linkId === 'command.examiniation.text') {
          widget.value = todoText;
        }
        break;
      case 'boolean':
        widget = new CheckboxQuestion({
          key: item.linkId,
          label: item.text,
          options: [
            { label: 'auswählen', value: true },
          ]
        });
        break;
      case 'date':
        widget = new DateQuestion({
          key: item.linkId,
          label: item.text,
        });
        break;
      case 'choice':
        let selectOptions = [];
        for (let o of item.options) {
          selectOptions.push({ label: o, value: o });
        }
        // TODO Unterscheidung Dropdown / Radio
        if (selectOptions.length > 2) {
          widget = new DropdownQuestion({
            key: item.linkId,
            label: item.text,
            options: selectOptions,
          });
        } else {
          widget = new RadioQuestion({
            key: item.linkId,
            label: item.text,
            options: selectOptions,
          });
        }
        break;
    }
    return widget;
  }

}