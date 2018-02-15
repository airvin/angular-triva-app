import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  response = "";
  feedback = "";
  count = 0
  
  
  question: Question = {
    id: 1,
    q: "What is the capital of Australia?",
    answer: "Canberra"
  };


  constructor(private http: HttpClient){}
  
  ngOnInit() {
  }

  getQuestion() {
    return this.http.get("http://localhost:3000/getdata")
  }

}
