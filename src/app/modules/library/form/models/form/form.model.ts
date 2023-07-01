import {FormControlModel} from "./form-control.model";

interface FormAttributes {
  formControls: FormControlModel[]
}

export class FormModel {
  constructor(
    public attribs: FormAttributes,
  ) {
  }

  static empty() {
    return new FormModel({formControls: []});
  }
}
