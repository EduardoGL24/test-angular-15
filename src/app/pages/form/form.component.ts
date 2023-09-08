import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  personalInformationForm!: FormGroup;
  booksReadLastMonths!: FormArray;
  maritalStatuses: any = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.setUpForm();
  }
  
  ngOnInit(): void {
    this.getMaritalStatuses();
    this.listenChanges();
  }

  setUpForm(){
    this.personalInformationForm = this.fb.group({
      nombres: ['', [Validators.required, this.validateSpacing]],
      apellidos: ['', [Validators.required, this.validateSpacing]],
      fumas: [false, Validators.required],
      actualmentePracticasLectura: [false, Validators.required],
      librosLeidosUltimosTresMeses: this.fb.array([]),
      estadoCivil: [null],
    });
  }

  listenChanges(){
    this.personalInformationForm
    .get('actualmentePracticasLectura')?.valueChanges.subscribe((value) => {
      if (value) {
        this.booksReadLastMonths.enable();
      } else {
        this.booksReadLastMonths.disable();
      }
    });

    this.booksReadLastMonths = this.personalInformationForm.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  validateSpacing(control: any) {
    if (control.value && control.value.trim() !== control.value) {
      return { spacing: true };
    }
    return null;
  }

  addNewBook() {
    const books = this.personalInformationForm.get('librosLeidosUltimosTresMeses') as FormArray;
    books.push(this.fb.control('', Validators.required));
  }

  deleteBook(index: number) {
    const books = this.personalInformationForm.get('librosLeidosUltimosTresMeses') as FormArray;
    books.removeAt(index);
  }

  getMaritalStatuses(){
    this.apiService.getList().subscribe(resp => {
			console.log(resp)
      this.maritalStatuses = resp;
		}, (error) => {
			console.log(error);
		})
  }

  onSubmit() {
    console.log(this.personalInformationForm.value);
    
  }

}
