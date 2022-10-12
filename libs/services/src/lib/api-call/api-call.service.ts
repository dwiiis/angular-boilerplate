import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface QueryParams {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 
  private readonly END_POINT: any; // usually get this from enviroment !!
  constructor(private http: HttpClient) {
  
  }
  getJson(path: any){
    return this.http.get<any>(path)
    .toPromise()
    .then(res => <any[]>res.data)
    .then(data => { return data; });
  }
  
  /**
   * 
   * @param id 
   * @param route 
   * @param qp 
   * @param method 
   * @param url 
   * @returns 
  */
  getRemove<returnType>(
    id: string | null,
    route: string,
    qp: QueryParams = {},
    method: 'get' | 'delete' = 'get',
    url: string
  ): Observable<returnType> {
    const cfqu = this.correctFormatForQueryUrl(qp);
    return this.http[method](
      `${url}${route}${id ? '/' + id : ''}${cfqu}`
    ) as Observable<returnType>;
  }

  /**
   * this method will patch or post to any route
   * you choose
   * 
   * 
   * *********************************** HOW TO USE THIS POST PACTH *********************************************************
    // create a post with data
    this.apiCallService
      .postPatch<Post>('posts', { title: 'po', body: 'bar', userId: 1 }, 'urlbaseapi'
      .subscribe({
        next: console.log,
        error: console.error
      });
      
     // https://api.monev.co/posts?userId=1&test1=yes&test2=no
    // update all the posts with a userId = 1, test1 = yes & test2 = no
    this.apiCallService
      .postPatch<Post>('posts', { title: 'rowad' }, null, 'patch', {
        userId: 1,
        test1: 'yes',
        test2: 'no'
      },
      'urlbaseapi'
      )
      .subscribe({
        next: console.log,
        error: console.error
      });
      
      
      // https://api.monev.co/posts/1
    // PATCH where post has an id of 1
    this.apiCallService
      .postPatch<Post>('posts', { title: 'rowad' }, 1, 'patch', null, 'urlbaseapi')
      .subscribe({
        next: console.log,
        error: console.error
      });
      }
    }
   * 
   * 
   * 
   */
  /**
   * 
   * @param route 
   * @param data 
   * @param id 
   * @param method 
   * @param qp 
   * @param url 
   * @returns 
  */
   postUpdate<returnType>(
    route: string,
    data: any,
    id: any = null,
    method: 'post' | 'put' | 'patch' | 'delete' = 'post',
    qp: QueryParams = {},
    url: string
  ): Observable<returnType> {
    const cfqu = this.correctFormatForQueryUrl(qp);
    return this.http[method](
      `${url}${route}${id ? '/' + id : ''}${cfqu}`,
      data
    ) as Observable<returnType>;
  }

  /**
   * In the return we will attach the '?' if the user provides a query params
   * and if the user provides a null we do not need to map the array to
   * anything, we just simply returns ''.
   * if there qp dose has some keys an values
   * e.g
   * const z = {userId: 1, name: 'rowad'} then
   * this method will return ["userId=1", "name=rowad"]
   */
   private correctFormatForQueryUrl(qp: QueryParams): string {
    if (!qp || qp == null) {
      return '';
    }
    const qpAsStr = this.mapQueryParamsToUrl(qp);
    return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
  }

  /**
   * e.g :
   * const z = {userId: 1, name: 'rowad'} then
   * this method will return ["userId=1", "name=rowad"]
   */
  private mapQueryParamsToUrl(qp: QueryParams): Array<string> {
    return Object.keys(qp).map((key: string) => {
      return `${key}=${qp[key]}`;
    });
  }
  
}
