import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
              OnDestroy
{

  @Input('srvElement') element: { type:string; name: string; content: string} | any
  @Input() name:string | any;
  @ViewChild('heading') header:ElementRef | any;
  @ContentChild('contentParagraph') paragraph:ElementRef | any

  constructor() {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit() called")

    // Accessing DOM elements before initialization is completed will cause error during runtime.
    // console.log("Text Content: " + this.header.nativeElement.textContent)

    // Accessing DOM elements before initialization is completed will cause error during runtime.
    // console.log("Content Paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges() called")
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit() called: ng-content is projected into this component ")
    console.log("Content (Paragraph): " + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked() called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit() called");
    console.log("Text Content (header): " + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked() called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy() called")
  }
}
