import style from  './Header.module.css';

export function Header () {
  return (
    <header className={style.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}