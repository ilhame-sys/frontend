import { Component, OnInit } from '@angular/core';
import { Cause } from 'src/app/model/cause.model';
import { CauseService } from 'src/app/service/cause.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause-single',
  templateUrl: './cause-single.component.html',
  styleUrls: ['./cause-single.component.scss']
})
export class CauseSingleComponent implements OnInit {
  causes: Cause[];
  error = "";
  success = "";
  id: string;

  constructor(
    private causeService: CauseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCause();
  }

  getCause() {
    const $id = this.route.snapshot.paramMap.get('id');
    this.causeService.readCause($id).subscribe((causes: Cause[]) => {
      this.causes = causes;
      console.log(this.causes);
    });
  }
}