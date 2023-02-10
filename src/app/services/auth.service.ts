import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfoKey: string = 'CurrentUserInfo';

  constructor(
    private toastr: ToastrService,
  ) { }

  success(message: string) {
    this.toastr.success(message, '', { closeButton: true });
  }

  login(response: any): boolean {
    if (response) {
      localStorage.setItem(this.userInfoKey, JSON.stringify(response));
      return true;
    } else {
      return false;
    }
  }

}
