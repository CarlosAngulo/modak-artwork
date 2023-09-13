import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { IFieldMessage } from '../models/fields.model';

@Injectable({
  providedIn: 'root'
})
export class FieldMessagesService {

  private fieldMessages: {[key: string]: IFieldMessage} = {
    valid: {
      message: 'login.messages.pristine',
      error: false,
    },
    pristine: {
      message: 'login.messages.pristine',
      error: false,
    },
    required: {
      message: 'login.messages.required',
      error: true,
    },
    pattern: {
      message: 'login.messages.pattern',
      error: true,
    },
    minlength: {
      message: 'login.messages.minlength',
      error: true,
    }
  };

  constructor() {}

  getDefaultMessage(): IFieldMessage {
    return  this.fieldMessages['pristine'];
  }

  getFieldMessage(errors: ValidationErrors | null): IFieldMessage {
    if (errors === null) return this.fieldMessages['valid'];
    
    return this.fieldMessages[Object.keys(errors)[0]];
  }
}
