import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/services/api-login.service';

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
		private loginService: ApiLoginService
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
		this.router.navigate(['/home']);
		this.loginService.login(body).subscribe(resp => {
			console.log(resp)
		}, (error) => {
			console.log(error);
		})
	}
}