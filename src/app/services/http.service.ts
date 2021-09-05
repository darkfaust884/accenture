import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FeedService } from './feed.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders()
  options = { headers: this.headers, withCredintials: false, 'Content-type': 'application/json' }

  id_user = 0

  constructor(private http: HttpClient, private feedService: FeedService) {
    console.log('СЕРВИС HTTP ЗАПУЩЕН!')
    this.set_token()
  }

  post(serviceName: string, data: any) {
    console.log('POST запрос сюда: ', serviceName)
    // Запишем все ключи, готовим post запрос. ТОКЕН и поле id_user добавляются автоматически!
    let form = new FormData()
    let keys = Object.keys(data)
    data.id_user = this.id_user
    for(let i = 0; i < keys.length; i++) {
      form.append(keys[i], data[keys[i]])
    }
    let address = 'https://kotirovki.this-demo.ru/api/'
    const url = address + serviceName
    return this.http.post<any>(url, data, this.options)
  }

  get(path: string, data: any) {
    console.log('GET запрос сюда: ', path)
    let address = 'https://kotirovki.this-demo.ru/api/'
    const url = address + path
    data.id_user = this.id_user
    return this.http.get<any>(url, { headers: this.headers, withCredentials: false, params: data })
  }

  async set_token() {
    if(this.feedService.status_httpService_update_headers == true) {
      return
    }
    console.log('обновляю заголовки.... (http)')
    let res = await this.feedService.get_token_and_id()
    if (res == false)
      return
    this.id_user = res.id_user
    this.headers = new HttpHeaders().set('Authorization', res.token);
    this.options = { headers: this.headers, withCredintials: false, 'Content-type': 'application/json' }
    this.feedService.status_httpService_update_headers = true
    console.log("\nЗАГОЛОВКИ ОБНОВЛЕНЫ")
    return
  }

}
