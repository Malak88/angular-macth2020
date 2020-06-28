import { Arbitre } from 'src/app/common/arbitre';
import { ArbitresService } from 'src/app/services/arbitres.service';
import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
//import { parsePhoneNumberFromString } from 'libphonenumber-js';
//import { ICountry } from './ajouter-arbitre.component.interface';



@Component({
  selector: 'app-ajouter-arbitre',
  templateUrl: './ajouter-arbitre.component.html',
  styleUrls: ['./ajouter-arbitre.component.css']
})
export class AjouterArbitreComponent implements OnInit {

  arbitre: Arbitre = new Arbitre();
  xform: FormGroup;
  submitted = false;


  /*selectedCountry: any = 'US';
  selectedPhoneNumber: any;
  countries: any[];*/

  constructor(private arbitreService: ArbitresService,private matchesService: MatchesService,
     private router:Router) { }  //    private fb: FormBuilder, in constructor and import it 

     matches: Observable<Matches[]>;

  ngOnInit(): void {
    this.submitted = false;
    this.matchesService.getMatchesList().subscribe(data => {
      this.matches = data;
      console.log(data);
    });
    //this.fetchCountryList();
    
  }


 /* private fetchCountryList(): void {
    this.arbitreService.getCountries().subscribe((res: ICountry[]) => {
			this.countries = res;
		}, error => error);
  }*/


  arbitresaveform = new FormGroup({   
   name: new FormControl('', [Validators.required,Validators.minLength(4)]),
   phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+216?)|0)?[0-9]{8}$")]),
   email: new FormControl('', [Validators.required,Validators.email]),
   matche: new FormControl()
   });

   /*Validators.required,this._validatePhoneNumberInput.bind(this)] */
   /*  this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    ); */

   savearbitre() {
  
    this.arbitre = new Arbitre();
    this.arbitre.name = this.name.value;
    this.arbitre.telephone = this.phone.value;
    this.arbitre.email = this.email.value;

    this.arbitre.matches=new Matches();
    this.arbitre.matches.id=this.matche.value;
    
    this.submitted = true;
    this.save();
  }
  get name() {
    return this.arbitresaveform.get('name');
  }
  get phone() {
    return this.arbitresaveform.get('phone');
  }
  get email() {
    return this.arbitresaveform.get('email');
  }
  get matche() {
    return this.arbitresaveform.get('matche');
  }
  save() {
    this.arbitreService.createArbitre(this.arbitre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.arbitre = new Arbitre();
    this.gotoList();
  }

  addarbitreForm() {
    this.submitted = false;
    this.arbitresaveform.reset();
  } 

  gotoList() {
    this.router.navigate(['/arbitres']);
  
  }
  list() {
    this.router.navigate(['/arbitres']);
  
  }
/*
  _validatePhoneNumberInput(c: AbstractControl): object {
    let inputValue: string = c.value.toString();
    let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
    if(phoneNumber){
      if(phoneNumber.isValid()){
        return null;
      } else {
        return {
          phoneNumber: {
            valid: false
          }
        }
      }
    } else {
      return {
        phoneNumber: {
          valid: false
        }
      }
    }
	}

  resetPhoneNumber(event: any): void {
		this.xform.controls['phone'].setValue('');
	}

  formatPhoneNumber(event: any): void {
		let inputValue: any = this.xform.controls['phone'].value;
		let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
		if(phoneNumber){
			this.selectedPhoneNumber = phoneNumber.number;
			this.xform.controls['phone'].setValue(phoneNumber.formatInternational());
		}
	}*/
}
