import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  progressShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  progressError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  progressValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progressTitle: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
  addProgress(number: number){
    this.progressValue.next(number);
  }
  resetProgress(){
    this.progressValue.next(0);
    setTimeout(() => {
      this.progressTitle.next(null);
    }, 200);
  }
  hideProgress(){
    this.progressShow.next(false);
    setTimeout(() => {
      this.progressTitle.next(null);
    }, 200);
  }
  showProgress(){
    this.progressShow.next(true);
    this.progressError.next(false);
  }
}
