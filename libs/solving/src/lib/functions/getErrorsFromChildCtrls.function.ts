import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function getErrorsFromChildCtrls(formGroup: FormGroup): ValidationErrors | null {
  const allControllers = Object.keys(formGroup.controls);
  let errors: ValidationErrors | null = null;
  allControllers
    .map(controllerKey => [controllerKey, formGroup.controls[controllerKey]])
    .forEach(([controllerKey, controller]: [string, AbstractControl]) => {
      if (controller?.errors) {
        errors = {
          ...errors,
          [controllerKey]: controller.errors
        };
      }
    });
  return errors;
}
