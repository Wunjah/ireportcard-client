export class FormControlModel {
  constructor(
    /**
     * @name size column size: eg 12 -> col-12, 6 -> col-6
     */
    public classes: string,
    public label: FormControlLabel,
    public type: string,
    public name: string,
    public groupClasses?: string,
    public isGroup?: boolean
  ) {
  }
}

interface FormControlLabel {
  classes: String
}
