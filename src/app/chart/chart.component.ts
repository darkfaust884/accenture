import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  datas = [1, 5, 20, 15, 30, 32, 45, 55, 66]
  chartLabelss = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


  equipment_status = 'null'
  employee_at_work = 'null'
  load = '89.6'
  temp = '123 °С'
  id: any
company_id = ''

  constructor() {

  }
  

  


  chartData = [
    {
      data: this.datas,
      label: 'Работа агрегата',
      backgroundColor: [
        'rgba(143, 143, 143, .5)',
      ],
      borderColor: [
        'rgba(25, 5, 25, .5)',
      ],
      borderWidth: 1
    }
  ];


  chartLabels = this.chartLabelss;

  chartOptions = {
    responsive: true
  };

  

  ngOnInit(): void {

 
}

  array = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Степан",
      "middle_name": "Аккумулятор",
      "last_name": "Жандарм",
      "phone": "89969242111",
      "organization": "Фалангос",
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Мария",
      "middle_name": "Петровна",
      "last_name": "Ангуляр",
      "phone": "89946758132",
      "organization": "Мордобой",
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Лидия",
      "middle_name": "Валерьевна",
      "last_name": "Шихан",
      "phone": "89969942121",
      "organization": "Артмангал",
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Валера",
      "middle_name": "Выхлопной",
      "last_name": "Патрубкин",
      "phone": "89854242789",
      "organization": "Диргорвань",
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "Сигизмунд",
      "middle_name": "Шаханович",
      "last_name": "Бардель",
      "phone": "89969457841",
      "organization": "ПапиросыОрг",
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "ЛилВаня",
      "middle_name": "Бревовидный",
      "last_name": "Топор",
      "phone": "89978436594",
      "organization": "Ыртышман",
    }
  ]
}

