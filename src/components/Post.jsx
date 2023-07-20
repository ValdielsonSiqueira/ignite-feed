import { useState } from 'react'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ post: { author, content, publishedAt } }) {
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const [comments, setComments] = useState(['Muito bom! Parabéns!!!']);
  const [newCommentText, setNewCommentText] = useState('');

  function handlerCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handlerNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="22 de Junho às 19:43" dateTime="2023-06-22 19:43:30">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm} onSubmit={handlerCreateNewComment}>
        <strong>Deixe seu feedback!</strong>
        <textarea name="comment" placeholder="Deixe seu commentario" value={newCommentText} onChange={handlerNewCommentChange} />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment
              key={comment}
              content={comment} 
              />
            ))
        }
      </div>
    </article>
  )
}