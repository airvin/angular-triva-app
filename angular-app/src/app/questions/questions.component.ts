import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  
  response: string;
  feedback: string;
  

  question: Question;

  prevQuestions = QUESTIONS;


  constructor(private questionService: QuestionService){}
  
  ngOnInit() {
    this.getQuestion();
  }

  onEnter() {
    if (this.response == this.question.answer) {
      this.feedback = "Correct!";
      setTimeout(() => this.getQuestion(), 1000);

    }
  }

  getQuestion(): void {
    this.question = this.questionService.getQuestion();
    this.feedback = "";
    this.response = "";
  }

}
