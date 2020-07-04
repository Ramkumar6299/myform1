import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myform1';
  Details =[];
  myForm;

  
  constructor(private fb:FormBuilder)
  {
     this.myForm = this.fb.group({
      'Name' : this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'Email' : this.fb.control('',Validators.email),
      'DOB' : this.fb.control('',Validators.required),
      'Country' : this.fb.control('IN'),
      'Gender' : this.fb.control('',Validators.required),
      'Maritalstatus' : this.fb.control('',Validators.required),
      'Favfood' : this.fb.control('',Validators.required),
      'Address' :  this.fb.array([
          this.fb.group({
            'street' : this.fb.control('',[Validators.required,Validators.maxLength(10)]),
            'zipcode' : this.fb.control('',Validators.required)
          }),
          this.fb.group({
            'street' : this.fb.control(''),
            'zipcode' : this.fb.control('')
          }),
          this.fb.group({
            'street' : this.fb.control(''),
            'zipcode' : this.fb.control('')
          })
        ])
  })
 
  
  }
  adddata()
  {
    if(this.myForm.valid)
    {
    console.log(this.myForm.value)
    this.Details.push(this.myForm.value)
    }
    else{
      alert("Please check your inputs")
    }
 //console.log(this.Details)
  } 
  remove(index: number)
  {
    //console.log("jds")
    this.Details.splice(index, 1);
    //console.log(this.Details.values)
  } 
 
}
