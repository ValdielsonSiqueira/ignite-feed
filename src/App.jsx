import  { Post }  from './Post';
import { Header } from './components/Header';
import './style/global.css';

export function App() {
  return (
    <>
      <Header/>
      <h1>Curso</h1>
      <Post  author="Valdi Siqueira" content="lorem" />
    </>
  );
}

