import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Bee } from './models/bee';
import { Post } from './models/post';
import { Company } from './models/company';
import { Address } from './models/address';
import { Geo } from './models/geo';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Todo } from './models/todo';
import { Comment } from './models/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private bees: Bee[] = [];
  private bee;
  private user;
  private cont;
  constructor(private http: Http) {
    this.loadFromJson();
  }


  loadData(usersUrl: string, postsUrl: string, albumsUrl: string, photosUrl: string, todosUrl: string, commentsUrl: string) {
    this.http.get(usersUrl).map(res => res.json()).subscribe((data) => {

      for (var user of data) {
        let company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        let address = new Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Geo
          (user.address.geo.lat, user.address.geo.lng));
        let bee = new Bee(user.id, user.name, user.username, user.email, user.phone, user.website, address
          , company, user.avatarUrl);
        this.bees.push(bee);
      }

      this.http.get(postsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let post = new Post(item.id, item.userId, item.title, item.body);
          for (var bee of this.bees) {
            if (post.getUserid() === bee.getId()) {
              bee.addPost(post);
            }
          }
        }
      });

      this.http.get(albumsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let album = new Album(item.id, item.userId, item.title);
          for (var bee of this.bees) {
            if (album.getUserid() === bee.getId()) {
              bee.setAlbum(album);
            }
          }
        }

        this.http.get(photosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl);
            for (var bee of this.bees) {
              if (photo.getAlbumId() === bee.getAlbum().getId()) {
                bee.addPhotoToAlbum(photo);
              }
            }
          }
        });

        this.http.get(todosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let todo = new Todo(item.id, item.userId, item.title, item.completed);
            for (var bee of this.bees) {
              if (todo.getUserid() === bee.getId()) {
                bee.addTodo(todo);
              }
            }
          }
        });

        this.http.get(commentsUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let comment = new Comment(item.id, item.postId, item.name, item.body, item.email);
            for (var bee of this.bees) {
              for (var post of bee.getPosts()) {
                if (post.getId() === comment.getPostId()) {
                  post.addComment(comment);
                }
              }
            }
          }
        });
      });

      //1. Agregar tu información a este usuario.
      let company = new Company('Checo', 'Be the Best', 'Just walk to the front');
      let address = new Address('San Martin', 'Siquirres', 'Limon', 'CR', new Geo
        ('0.000001', '0.000002'));
      let me = new Bee(11, 'Sergio', 'Herrera', 'sherrerad@ucenfotec.ac.cr', '83398109', 'https://www.facebook.com/sergio.hdss?lst=100001494142294%3A100001494142294%3A1497220417', address
        , company, 'http://www.ctmanager.ninja/img/imgCoders/SergioHerrera.png');
      let album = new Album(1000, 11, 'Vacaciones Photos');
      let photos = new Photo(1000, 0, 'Vacaciones1', 'https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-9/15978067_1348768021849656_392982637908174479_n.jpg?oh=5bf58994f11eb0ced70612c25fdb8e3b&oe=59A4BDD7', 'https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-9/15978067_1348768021849656_392982637908174479_n.jpg?oh=5bf58994f11eb0ced70612c25fdb8e3b&oe=59A4BDD7');
      album.addPhoto(photos);
      photos = new Photo(1000, 1, 'Vacaciones2', 'https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-9/15965057_1348775555182236_6116507048958330878_n.jpg?oh=bf7aa7917a85cfa4bbd2c35b436d22dd&oe=59D92AAA', 'https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-9/15965057_1348775555182236_6116507048958330878_n.jpg?oh=bf7aa7917a85cfa4bbd2c35b436d22dd&oe=59D92AAA');
      album.addPhoto(photos);
      me.setAlbum(album);
      this.bees.push(me);
      this.bee = this.bees[10];
      this.cont = "0";
      console.log(this.bees);
      this.user=this.bees[10];

    });

  }

  loadFromServer() {
    //Data from: https://jsonplaceholder.typicode.com/
    this.loadData('https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments');
  }

  loadFromJson() {
    this.loadData('../assets/data/users.json',
      '../assets/data/posts.json',
      '../assets/data/albums.json',
      '../assets/data/photos.json',
      '../assets/data/todos.json',
      '../assets/data/comments.json');
  }

  receivedBee(pBee) {
    this.bee = pBee;
    console.log(pBee);
  };

  receivedContentoShow(pCont) {
    this.cont = pCont;
  };


}
