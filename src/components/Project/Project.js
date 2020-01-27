import React from "react";

import "./Project.scss";

const Project = props => {
  return (
    <div className="work__project">
      <div className="work__project-title">Social News</div>
      <img
        className="work__project-img"
        src={require("../../assets/img/projects/social-news.png")}
        alt="project-social-news"
      />
      <a
        href="https://social-news-ztf.herokuapp.com/"
        className="work__project-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.language === "ru" ? "Демо" : "Demo"}
      </a>
      <a
        href="https://github.com/ZefirTheFear/-social-news"
        className="work__project-github-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </a>
      <div className="work__project-description">
        <pre>
          {props.language === "ru"
            ? `Сайт социально-общественных новостей. Проект написан с использованием React, Node.js(Express) и MongoDB(Mongoose). Около 10000 строк кода. Короткий перечень функционала:
- регистрация/авторизация пользователей с использованием JWT
- создание постов/комментов с использованием rich text editor
- возможность лайкать/дислайкать посты/комменты
- возможность игнора/подписки на пользователей, создания заметок о них
- реализован поиск постов по тегам
- возможность для админа или модера редактировать/удалять посты/комменты
- фронтенд и бэкенд валидация данных
              `
            : `Social news site. Project is written using React, Node.js(Express) and MongoDB(Mongoose). Approximately 10 000 lines of code. Short list of functional:
- registration/authorization of users with JWT
- creation of posts/comments using rich text editor
- possibility to like/dislike post/comment
- possibility to subscribe/ignore user and to create note about user
- implemented search for posts by tags
- possibility for admin and moderator to edit or to delete posts/comments
- frontend and backend data validation
              `}
        </pre>
      </div>
    </div>
  );
};

export default Project;
