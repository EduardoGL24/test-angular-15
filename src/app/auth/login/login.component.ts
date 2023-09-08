import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private apiService: ApiService
	) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm() {
		this.loginForm = this.formBuilder.group({
			username: 'carlos.oviedo',
			password: '$oyAdmin666',
		});
	}

	login() {
		const body = {
			username: this.loginForm.get('username')?.value,
			password: this.loginForm.get('password')?.value,
		};
		this.apiService.login(body).subscribe(resp => {
			this.router.navigate(['/home']);
			console.log(resp)
		}, (error) => {
			console.log(error);
		})
	}
}
