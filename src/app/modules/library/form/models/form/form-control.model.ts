export interface FormControlAttributes {
  label: string
  name: string
  classes?: string
  type?: FormControlType
  values?: any[]
}

export class FormControlModel {
  constructor(public attribs: FormControlAttributes) {
  }

  public isSelect() {
    return this.attribs.type == "select";
  }
}

type FormControlType = "text" | "number" | "select"
