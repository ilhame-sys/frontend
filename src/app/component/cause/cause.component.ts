import { Component, OnInit } from '@angular/core';
import { Cause } from 'src/app/model/cause.model';
import { CauseService } from 'src/app/service/cause.service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit {

  cause: Cause[];
  error = '';
  success = '';

  constructor(private causeService :CauseService) { }

  ngOnInit() { 
    this.getAll();
  }


  getAll(){
    this.causeService.readAllCause().subscribe((causes: Cause[])=>{
      this.cause = causes;
      console.log(this.cause);
    })
  }
}
