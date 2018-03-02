import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  
  response: string;
  feedback: string;
  
  question: Question = {
    id: 1,
    qn: "What is the capital of Australia?",
    answer: "Canberra"
  };

  prevQuestions = QUESTIONS;


  constructor(){}
  
  ngOnInit() {
  }

  onEnter() {
    if (this.response == this.question.answer) {
      this.feedback = "Correct!";
    }
  }

}
