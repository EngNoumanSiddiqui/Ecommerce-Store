import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EFormControl, IDynamicForm } from 'src/app/models/form.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: IDynamicForm;
  dynamicCase = EFormControl;

  url: string = 'https://dummyjson.com/auth/login';
  username: any;
  password: any;
  email: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(){
    this.initilizeForm();
  }

  initilizeForm(){
    this.form = {
      formSections: [
        {
          name: "E-Store Account",
          fields: [
            {
              label: "User Name",
              field: "username",
              value: "",
              control: EFormControl.INPUT
            },
            {
              label: "Enter Email",
              field: "email",
              value: "",
              control: EFormControl.EMAIL
            },
            {
              label: "Enter Password",
              field: "password",
              value: "",
              control: EFormControl.PASSWORD
            },
          ]
        }
      ]
    }
  }

  onFormLogin() {
    const fieldMap: { [key: string]: (value: any) => any } = {
      username: (value) => (this.username = value),
      email: (value) => (this.email = value),
      password: (value) => (this.password = value),
    };

    this.form.formSections?.forEach((formSection) => {
      formSection.fields?.forEach((field) => {
        const setField = field.field ? fieldMap[field.field] : undefined;
        if (setField) {
          setField(field.value);
        }
      });
    });


    fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      username: this.username,
      email: this.email,
      password: this.password,
    })
    }).then(res => res.json()).then((response)=>{
      if (response) {
        this.route.queryParams.subscribe((params: any) => {
          this.authService.success('Successfully Login.');
          this.authService.login(response);
          if(params) {
            this.router.navigate(['products']);
          }
        });
      }
    });
  }

}
