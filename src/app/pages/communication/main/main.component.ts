import { Component, OnInit } from '@angular/core';
import { Chat } from '../Models/chat';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { ChatService } from '../Services/chat.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public alluser!: User[];
  check = sessionStorage.getItem('username');
  chatId: any = 0;
  chatObj: Chat = new Chat();
  public chatData: any = [];

  constructor(private router: Router, private userService: UserService, private chatService: ChatService) { }

  ngOnInit(): void {
    let all = setInterval(() => {

      this.userService.getAll().subscribe({
        next: (data)=> this.alluser=data,
      })
      })
  }


  goToChat(username: any) {
    this.chatService.getChatByFirstUserNameAndSecondUserName(username, sessionStorage.getItem("username") ?? '').subscribe(
      (data) => {
        this.chatId = data.chatId;
        sessionStorage.setItem("chatId", this.chatId);

        sessionStorage.setItem("gotochat", "false");
        this.router.navigateByUrl('/chat');
      },
      (error) => {
        if (error.status == 404) {
          this.chatObj.firstUserName = sessionStorage.getItem("username") ?? '';
          this.chatObj.secondUserName = username;
          this.chatService.createChatRoom(this.chatObj).subscribe(
            (data) => {
              this.chatData = data;
              this.chatId = this.chatData.chatId;
              sessionStorage.setItem("chatId", this.chatData.chatId);

              sessionStorage.setItem("gotochat", "false");
              this.router.navigateByUrl('/chat');
            })
        } else {

        }
      });

  }

}
