import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question/question-base';
import { QuestionGroup } from './question/question-group';


@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let controls: {} = {};
    questions.forEach(question => this.addFormControlForQuestion(question, controls));
    return new FormGroup(controls);
  }

  addFormControlForQuestion(question: QuestionBase<any>, controls: {}) {
    if (question.controlType === 'group') {
      controls[question.key] = new FormControl(); // Dummy
      (question as QuestionGroup).children.forEach(question => this.addFormControlForQuestion(question, controls));
    } else {
      controls[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    }
  }
}