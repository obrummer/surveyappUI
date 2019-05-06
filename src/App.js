import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from 'axios';

class App extends Component {

  json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Choose your department.",
        "isRequired": true,
        "choices": [
         {
          "value": "Administration",
          "text": "Administration"
         },
         {
          "value": "Investments",
          "text": "Investments"
         },
         {
          "value": "Marketing",
          "text": "Marketing"
         },
         {
          "value": "Operations",
          "text": "Operations"
         },
         {
          "value": "Sales",
          "text": "Sales"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "It is safe to try new approaches, to innovate, to be vulnerable, to share my ideas at work.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "When I make a mistake, I am corrected with respect, and the desire to help me improve.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question13",
        "title": "I have the tools and resources necessary to perform my work to the best of my ability.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question14",
        "title": "I understand the expectations of me and my performance.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question15",
        "title": "I trust my team members and colleagues to support my and the company's success.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question16",
        "title": "I am motivated by, and find meaning in, the company's mission, vision, and values.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question17",
        "title": "I receive acknowledgement and appreciation at work.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question18",
        "title": "I have a career development path that the company supports.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page10",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question19",
        "title": "I feel I matter to the company. I am making a difference here.",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     },
     {
      "name": "page11",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question20",
        "title": "Would you refer your friends to work at your company?",
        "isRequired": true,
        "choices": [
         {
          "value": 1,
          "text": "True"
         },
         {
          "value": 0,
          "text": "False"
         }
        ]
       }
      ]
     }
    ],
    "showProgressBar": "bottom",
    "goNextPageAutomatic": true
   }


 onComplete(survey, options) {
  axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    data: survey.data
  }); 
  //Write survey results into database
  console.log(survey.data);
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {
  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
 }
} 

export default App

