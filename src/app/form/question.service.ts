import { Injectable } from '@angular/core';

import { ParserService } from '../parsing/parser.service';
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

// TODO TMP for testing !!
import * as xml from '../test/ebida-order-1.xml';

const todoText = 'TODOs:\n'
  + '* <value> element f. Items im Questionnaire XML\n'
  + '* Required-Attr. im Questionnaire XML\n'
  + '  (ev. weitere Validierungen als Ausblick...)\n'
  + '* Attribut zur Unterscheidung Input/Textarea im Questionnaire XML\n'
  + '* Attribut zur Unterscheidung DropDown/RadioButtons im Questionnaire XML\n'
  + '* Struktur Questionaire.Text ?!\n';


@Injectable()
export class QuestionService {

  constructor(
    private parser: ParserService,
  ) { }

  getQuestions(): QuestionBase<any>[] {
    let object = this.parser.parseXmlToJson(xml.data);
    let q = this.parser.convertQuestionnaire(object);
    return this.toForm(q);
    // return this.getTestQuestions();
  }

  toForm(q: Questionnaire): QuestionBase<any>[] {
    let res: QuestionBase<any>[] = [];
    this.pushQuestionnaireDescriptions(q, res);
    for (let i of q.items) {
      res.push(...this.getQuestionsForItem(i, 1));
    }
    return res;
  }
  pushQuestionnaireDescriptions(q, res) {
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
  getQuestionsForItem(item: Item, nestingLevel: number): QuestionBase<any>[] {
    let res: QuestionBase<any>[] = [];
    let widget;
    switch (item.type) {
      case 'group':
        widget = new QuestionGroup({
          key: item.linkId,
          label: item.text,
        });
        (widget as QuestionGroup).nestingLevel = nestingLevel;
        for (let i of item.items) {
          widget.children.push(this.getQuestionsForItem(i, nestingLevel + 1)[0]);
        }
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
    if (widget) {
      res.push(widget);
    }
    return res;
  }

  // test
  private getTestQuestions(): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [
      new DateQuestion({
        key: 'birthday',
        label: 'Birthday',
        required: true,
        order: 1
      }),
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'eMail',
        type: 'email',
        order: 2
      }),
      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          { label: 'Male', value: 'M' },
          { label: 'Female', value: 'F' },
          { label: 'other', value: 'O' },
        ],
        order: 1
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}