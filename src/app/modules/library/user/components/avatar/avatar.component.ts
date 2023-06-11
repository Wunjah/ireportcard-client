import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AvatarService} from "../../../../../services/general/avatar.service";

@Component({
  selector: 'app-avatar',
  styleUrls: ['./avatar.component.css'],
  template: `
    <img #image src="../../../../../../assets/image/avatar/default.png" alt="{{firstname + ' ' + lastname}} avatar" class="rounded-circle">
  `
})
export class AvatarComponent implements OnInit {
  @Input()
  firstname: string = "";
  @Input()
  lastname: string = "";
  class: string = "";

  @ViewChild("image")
  image!: ElementRef;


  constructor(private _avatarService: AvatarService) {
  }

  ngOnInit() {
    this._avatarService.load(this.name()).subscribe(res => {
      this.createImageFromBlob(res);
    });
  }

  private name() {
    let f = "John" , l = "Doe"
    if (this.firstname.length > 0) {
      const i = this.firstname.indexOf(" ");
      f = this.firstname.substring(0, i);
    }
    if (this.lastname.length > 0) {
      const i = this.lastname.indexOf(" ");
      l = this.lastname.substring(0, i);
    }
    return `${f} ${l}`
  }

  private createImageFromBlob(blob: Blob) {
    let reader = new FileReader()
    reader.onload = (_event) => {
      this.image.nativeElement.src = reader.result as string
      console.log(this.image)
    }
    reader.readAsDataURL(blob);
  }
}
