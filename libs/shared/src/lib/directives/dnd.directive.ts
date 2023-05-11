import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

/**
 * inspired by https://github.com/progtarek/angular-drag-n-drop-directive
 */
@Directive({
  selector: '[planxPlanningDnd]'
})
export class DndDirective {
  @HostBinding('class.file-over') fileOver: boolean;
  @Output() readonly fileDropped = new EventEmitter<File[]>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
