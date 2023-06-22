import  { Post }  from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './style/global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Valdi Siqueira" content="lorem" />
        </main>
      </div>
    </>
  );
}

