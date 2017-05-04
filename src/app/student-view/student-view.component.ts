import { Component, OnInit, Input, ViewChild , Type} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/service';
import { Http, Headers } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  
})

export class StudentViewComponent  implements OnInit{
 @Input() user = true;
 userDetail = {};
 error;
 token;
  data1:any;
    cropperSettings1:CropperSettings;

    //Cropper 2 data
   data2:any;
    cropperSettings2:CropperSettings;
@ViewChild('cropper', undefined) cropper:ImageCropperComponent;
   // public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
 public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 public filePreviewPath: SafeUrl;
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  constructor(private router:Router, private auth: AuthService, private activate: ActivatedRoute, private sanitizer: DomSanitizer) { 
    //super();
         this.uploader.onAfterAddingFile = (fileItem) => {
          this.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
        }
                this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;

        this.cropperSettings1.rounded = true;
        this.cropperSettings1.fileType = 'image/jpeg';

        //this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        //this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.data1 = {};


        //Cropper settings 2
         this.cropperSettings2 = new CropperSettings();
        this.cropperSettings2.width = 200;
        this.cropperSettings2.height = 200;
        this.cropperSettings2.keepAspect = false;

        this.cropperSettings2.croppedWidth = 200;
        this.cropperSettings2.croppedHeight = 200;

        this.cropperSettings2.canvasWidth = 500;
        this.cropperSettings2.canvasHeight = 300;

        this.cropperSettings2.minWidth = 100;
        this.cropperSettings2.minHeight = 100;

        this.cropperSettings2.rounded = true;
        this.cropperSettings2.minWithRelativeToResolution = false;

        this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings2.noFileInput = true;

        this.data2 = {};

 }

  ngOnInit() {
    this.activate.queryParams.subscribe(params=>{ this.token = params['token']; console.log(params['token'])});
    console.log(this.token);
     if(localStorage.getItem('currentuser')){
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user.user.success){
     this.auth.getStudentDetail(user.user.token)
        .subscribe(
          data =>{
            if(data.success){
               this.userDetail = data.message;
            }
            else{
              this.error = data.message;
            }
          },
          error => {
         
          });
  }
}
else if(this.token){
  this.auth.getStudentDetail(this.token)
        .subscribe(
          data =>{
            if(data.success){
               this.userDetail = data.message;
            }
            else{
              this.error = data.message;
            }
          },
          error => {
         
          });
}
  else{
  this.router.navigate(['']);
}
  }
  cropped(bounds:Bounds) {
        console.log(bounds);
        console.log(this.data1);
        if(this.data1 == ''){
          console.log("fail");
          alert("failuer");
        }
    }
     fileChangeListener($event) {
     
       console.log($event.target.files[0].name);
       let name:any = $event.target.files[0].name;
       name =name.substring(name.lastIndexOf(".")+1).toLowerCase();
       if(name === "png" || name == "jpeg" || name == "jpg" || name == "pdf"){
         this.error = '';
     
        var image:any = new Image();
      
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
       
         console.log(myReader.result);
        myReader.onprogress = function(e){   
 var  buffer = myReader.result;
         var int32View = new Int32Array(buffer);
        }
       
        var that = this;
        myReader.onloadend = function (loadEvent:any) {
   
            image.src = loadEvent.target.result;
                 
            
       
            that.cropper.setImage(image);

        };

        myReader.readAsDataURL(file);
       }
       else{
         this.error = 'Image is not valid';
       
       }
    }
    success(){
      console.log(this.data1);
    }
    select(){
      console.log("success");
    }
}
//https://ciphertrick.com/2016/10/24/file-upload-with-angular2-nodejs/
//https://www.npmjs.com/package/ng2-img-cropper