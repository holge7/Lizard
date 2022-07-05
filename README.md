<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="https://user-images.githubusercontent.com/96957385/167347769-4fcc6655-82f7-4cef-8c8c-eda91458df1e.png" alt="Logo" width="80" height="80">

  <h1 align="center">Lizard</h1>
   <h4 align="center">
       👋 Say goodbye to "coding" style just CNTRL + C / CNTRL + V 👋 <br>
       OR<br>
       https://res.cloudinary.com/lizardd/raw/upload/v1655465329/cdn-lizard_oanjla.js
  </h4>
</div>
<br>
<h2>🎥Video resume : <a href="https://youtu.be/vqMS9xy2kSA"> https://youtu.be/vqMS9xy2kSA </a></h2>
<h2>Manual user: 
 https://github.com/jorgeMunozCampanillas/Lizard/files/8928141/Jorge.Munoz.Lizard.User.Guide.pdf)
</h2>
<!-- ABOUT THE PROJECT -->
## About Lizard

Lizard is a page to upload components and views of the TailwindCSS framework, on this page users can upload their views and components to share them with other users of the website and in the same way copy the code of others to speed up the task of creating different components with styles.


<div align="center">


<h1># Stack #</h1>

| Front | Back | miscellany
| ------------- | ------------- | ------------- |
|<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" width="50" height="50"/><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Baboon.svg" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>|<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="50" height="50"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50" height="50"/><img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/194_Laravel-512.png" alt="laravel" width="50" height="50"/> |<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" width="50" height="50"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" width="50" height="50"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="50" height="50"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" width="50" height="50"/>|

</div>
<h1> # Front # 🖥</h1>

- Implementation of Vue.js for the creation of the SPA and reactivity of the page

- Vuex for communication between components

- Mirrorcode/html2canvas for the code editing part

- Sass as CSS preprocessor

<h1> # Back #  👨‍💻 </h1>
- Laravel 8 as the main main framework for the back-end

- mariaDB as database manager

<div align="center">
<h2>Tables</h2>

| # User | # Follw | # Post | # Favoritos | # Like
| ------------- | ------------- | ------------- | ------------- | ------------- |
|idUsu |idUsuFollower|idPost|idUsu|idUsu|idComen|
|Mail |idUsuFollw|id_Usu|idPost|idUsu|idPost|
|Name |Date|Codigo|Code||idUsu|
|Permiss ||Date|idUsu||Coment|

</div>
<div align="center">
    <h2>Model E/R</h2>
    <img src="https://user-images.githubusercontent.com/91120177/165914121-744c613f-3544-424d-896a-9bb60e166cba.jpg" width="700" height="600"/>
</div>
<h4></h4>
A user can be of 3 types: Unregistered, Registered, Administrator.

<> Unregistered user, you can:

    - See the posts that are on the page, you do not have permission for anything else.


<> Registered user, you can:

    - Make a crud of your post.
    - Like other posts.
    - Add a post to favorites to see it later.
    - Make comments on the post.
    - Follow other registered users.


<> Admin user, you can:

    - Manage everything from other users.



<h1> # Deploy # ☁</h1>
The deployment will be done in an AWS EC2 instance with the Ngix server, this instance will only have
whatever the page code is, the database will be hosted on a different server.

I will try to make the domain .com or .es but if it is not possible I will opt for a free one


<!-- GETTING STARTED -->
## Getting Started 

### Prerequisites

You need to have installed npm and composer
* npm
  ```sh
  npm install npm@latest -g
  ```
  
* xampp (or other stack like it with apache, mariaDB and php)

<a href="https://www.apachefriends.org/es/index.html">Xampp Download Page</a>

* Composer
```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
  php composer-setup.php
  php -r "unlink('composer-setup.php');"
```

or

<a href="https://getcomposer.org/download/">Composer Download Page</a>
  

### Installation 🚀

1. Clone the repo
   ```sh
     Git clone https://github.com/jorgeMunozCampanillas/Lizard
   ```
2. Install NPM packages
   ```
     npm install
   ```
3. Run NPM packages
    ```
        npm run dev
    ```
4. Launch server
   ```
       php artisan serve
   ```
   
5. Create new data base called: lizard

6. Run migrations and seeders
   ```
       php artisan migrate:refresh --seed
   ```


<!-- ROADMAP -->
## Roadmap 🏁

- [X] Login/Register
- [X] SPA
- [X] Middleware Auth
- [X] Multilanguage
- [X] Dashboard
  - [X] Users 
  - [X] Post
  
- [X] Code
  - [X] Code beautiful
  - [X] Code Crud
  - [X] Code Screenshot.

- [X] Post
  - [X] View
  - [X] Filter
  - [X] Likes



## Week
Week 1:
- User login
- User register
- User middlewares
- User Dashboard
- Some views to try vue routes

Week 2:
- Show all posts
- Show one post
- Sanctum
- Try to implement Vuex

Week 3:
- Show post from one user
- Show profiles
- Likes
- Improve security for auths

Week 4:
- Follows
- Tags
- Preview
- Multilanguage

Week 5:
- Some styles
- Search bar
- cdn

Week 6:
- Dashboard
- New Home
- New profile

<!-- ACKNOWLEDGMENTS -->
## Helpful 🙏 

- Started with codemirror: https://www.youtube.com/watch?v=oDitntruMLc
- Configure EventBus: https://stackoverflow.com/questions/61034661/vue-js-how-can-i-emit-events-between-router-view-components
- Vue Routes: https://codingpotions.com/vue-router
- Vue Middleware: https://laravelvuespa.com/middleware/middleware-overview/
- Vuex(3): https://v3.vuex.vuejs.org/guide/#the-simplest-store
- UploadImg: https://www.youtube.com/watch?v=2JteMJzNI44
- public/permiss for img: https://laravel.com/docs/8.x/filesystem
- Language Switcher: https://www.youtube.com/watch?v=CFGjn3yKMNc
