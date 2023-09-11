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
	loading: boolean = false;
	loginError: boolean = false;

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
		this.loading = true;
		this.loginError = false;
		const body = {
			username: this.loginForm.get('username')?.value,
			password: this.loginForm.get('password')?.value,
		};
		this.apiService.login(body).subscribe(resp => {
			this.loading = false;
			this.router.navigate(['/home']);
			sessionStorage.setItem('isAuthenticated', 'true');
		}, (error) => {
			this.loading = false;
			this.loginError = true;
			sessionStorage.setItem('isAuthenticated', 'false');
		})
	}
}
