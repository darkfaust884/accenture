import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { StorageService } from 'src/app/services/storage.service'
// import { HttpService } from 'src/app/services/http.service'
import { AuthConstants } from '../config/auth-constants'

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  status_httpService_update_headers = false
  constructor(
    private router: Router,
    // private httpService: HttpService,
    private storageService: StorageService
  ) {

  }

  async get_token_and_id() {
    // Возвращаем токен из хранилища
    let res = await this.storageService.get(AuthConstants.AUTH)
    if(res != false)
      return { token: res.token, id_user: res.id }
    return false
  }

}
