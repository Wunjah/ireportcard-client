import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component, forwardRef, Type} from "@angular/core";

export const formControlProviders = <T extends AppFormControl> (control: Type<T>) => {
  return [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => control)
    }
  ]
}

export class AppFormControl implements ControlValueAccessor {

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

}
