import { Component, forwardRef, ViewChild } from '@angular/core';

import * as ACE from 'ace-builds';
import './modelling-languages/pddl';
import 'ace-builds/src-noconflict/theme-nord_dark';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { AceEditorComponent } from 'ng2-ace-editor';
import { ConfirmDialogService } from '@planx-planning/shared';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'planx-planning-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdeComponent),
      multi: true
    }
  ]
})
export class IdeComponent implements ControlValueAccessor {

  code = '';
  options = { maxLines: 5000, printMargin: false };
  readOnly = false;
  codeMode = 'pddl';

  @ViewChild('ace')
  private readonly aceEditor: AceEditorComponent;
  private change$: Subject<string> = new Subject<string>();

  constructor(
    private readonly confirmDialog: ConfirmDialogService
  ) {
    ACE.config.set('basePath', 'planx-ace');
  }


  onChange(code) {
    this.change$.next(code);
  }

  registerOnChange(fn: any): void {
    this.change$.asObservable().subscribe({
      next: fn
    });
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.readOnly = isDisabled;
  }

  writeValue(obj: string): void {
    this.code = obj;
  }

  onFileDropped(files: File[]) {
    // ask if it is okay to drop the file.
    const file = files[0];
    if (file?.name) {
      this.confirmDialog.openDialog(
        `Do you want to load the code from ${file.name}?`
      ).pipe(
        filter((accepted: boolean) => accepted)
      ).subscribe(() => {
        file.text().then(code => this.code = code)
          .catch((err) => console.error('unable to load File!', err));
      });
    }
  }
}
