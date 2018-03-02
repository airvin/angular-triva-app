import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionService {
  index = 0;
  constructor() { }

  getQuestion(): Question {
    if(this.index==QUESTIONS.length-1) {
      this.index=0;
    } else {
      this.index++;
    }
    return QUESTIONS[this.index];
  }
}
