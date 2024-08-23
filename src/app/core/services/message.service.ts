import { Injectable } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // constructor(private message: any) {}

  // Permet d'afficher un massage
  createMessage(type: SweetAlertIcon, message: string): void {
    Swal.fire({
      position: 'top-end',
      toast: true,
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#3C476D',
      color: '#fff',
    });
  }
}
