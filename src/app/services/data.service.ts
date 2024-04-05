import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unrClass } from '../models/unr-class.model';
import { Member } from '../models/member.model';
import { Subject } from 'rxjs';

export interface Content {
  classes: unrClass[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Content | undefined;
  private dataStream: Subject<Content> = new Subject<Content>();
  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get('https://emerson-fleming.github.io/Data/ttrd_data.json').subscribe(data => {
      this.data = <Content>data;
      this.dataStream.next(this.data);
    });
  }

  getUNRClassData(className: string): unrClass | undefined {
    const collClasses: unrClass[] = this.data?.classes ?? [];
    return collClasses.find((x) => x.name === className);
  }
  getMemberData(memberName: string, className: string): Member | undefined {
    const collMembers: Member[] = this.getUNRClassData(className)?.members ?? [];
    return collMembers.find((x) => x.name === memberName);
  }

  public get getData() {
    return this.data;
  }

  public get getDataStream() {
    return this.dataStream;
  }

/*  public get getClasses() {
    this.loadData();
    return this.data.classes;
  }*/
  //page
  // foreach (unrClass in srv.classe s) {
  //   <UNRClass name="unrClass.name" />
  //}

  //class
  //name
  //foreach(member in srv.getUNRClassData(name).members) {
  //  <Member name="member.name" />
  //}

  //member

}
