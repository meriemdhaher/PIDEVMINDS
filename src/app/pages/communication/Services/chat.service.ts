import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Chat } from '../Models/chat';
import { Message } from '../Models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl = "http://localhost:8089";


  constructor(private httpClient: HttpClient) { }
  updateChat(message: Message, chatId: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl + "/chats/message/" + `${chatId}`, message);
  }

  getChatById(chatId: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "getById" + chatId)
  }

  createChatRoom(chat: Chat): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "addChat", chat);
  }

  getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
    return this.httpClient.get<Chat>(this.baseUrl + "getChatByFirstUserNameAndSecondUserName/{firstUserName}/{secondUserName}" + '?firstUserName=' + firstUserName + '&secondUserName=' + secondUserName)
  }

  getChatByFirstUserNameOrSecondUserName(username: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "getChatByFirstUserNameAndSecondUserName/{username}" + username)
  }

}
