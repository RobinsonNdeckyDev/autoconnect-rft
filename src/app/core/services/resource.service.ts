import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(
    protected fb: FormBuilder,
    protected api: ApiService,
    // protected modal: any,
    protected loader: LoaderService,
    protected message: MessageService
  ) {}

  getResource() {
    const pathname = window.location.pathname;
    const pathParts = pathname.split('/');

    const last: any = [...pathParts].pop();
    const model = Number.isNaN(+last) ? last : pathParts[pathname.length - 2];

    return {
      model,
      endpoint: `${environment.base_url}/${model}`,
    };
  }

  getApi() {
    return this.api;
  }

  getFormBuilder() {
    return this.fb;
  }

  getModal() {
    // return this.modal;
  }

  getLoader() {
    return this.loader;
  }

  getMessage() {
    return this.message;
  }
}
