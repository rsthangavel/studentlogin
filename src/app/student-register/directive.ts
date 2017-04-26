import { Directive, Input, ElementRef,HostListener, HostBinding, Renderer, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: `[sapp]`,
    inputs : ['colour:sapp', 'bgColor'],
    host : {
        '(click)': 'test($event)'
    },
})
export class Dir{
   @Input() inc:number = 0;
   @Output()
   user = new EventEmitter();
     @HostListener('click',['$event'])
   onclick(event){
        const confirmed =  window.confirm('Are you sure');
        if(confirmed){
       location.href = 'https://google.com'
        }
   };
   @HostBinding('style.backgroundColour')
   c_color = "blue";
   constructor(private el:ElementRef){
     this.el = el;
    
 
   }
   
   test(event:any){
      return window.confirm('Are you sure');
   }
   @Input('sort') 
   sort(value){
     
   }
    set colour(color:string){
        console.log(color);
    this.el.nativeElement.style.color = color;
  }
   
  set bgColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
