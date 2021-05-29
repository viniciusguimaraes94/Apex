import { Component, OnInit } from '@angular/core';
import { Professor } from '../Models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public tituloProfessores = 'Professores';
  public professorSelecionado: Professor = new Professor();

  public professores = [
    { id: 1, nome:'Diego', disciplina: 'C#'},
    { id: 2, nome:'Professor2', disciplina: 'Java'},
    { id: 3, nome:'Professor3', disciplina: 'Python'}

  ];

  

  constructor() { }

  ngOnInit() {
  }

  selecionarProfessor(professor: Professor) {
    this.professorSelecionado = professor;
  }
  voltar() {
      this.professorSelecionado = new Professor();
  }

}
