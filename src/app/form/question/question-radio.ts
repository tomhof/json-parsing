import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {

  controlType = 'radio';
  options: { key: string, value: string }[] = [];

  constructor(initArgs: {} = {}) {
    super(initArgs);
    this.options = initArgs['options'] || [];
  }
}