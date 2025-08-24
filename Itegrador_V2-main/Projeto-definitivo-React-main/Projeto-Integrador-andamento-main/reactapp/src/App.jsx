import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Autenticação/Home';
import Criar_Conta from './pages/Autenticação/Criar_Conta';
import Erro404 from './pages/Autenticação/Erro404';
import Esqueceu_senha from './pages/Autenticação/Esqueceu_senha';
import Tela_inicial from './pages/Home/Tela';
import Quizzes_tela from './pages/Home/Quizzes';
import Meus_Certificados from './pages/Home/Certificados';
//import Ranking_Page from './pages/Home/Ranking';
import Perfil_Page from './pages/Home/Perfil';
import QuizInfoPage from './pages/Home/Disciplinas/Desenvolvimento_Web';
import Quiz_de_Programação from './pages/Home/Disciplinas/Quizzes_de_Programação';
import QuizForm from './pages/Home/Disciplinas/Desenvolvimento_web/Quiz_Iniciado';
import DesistenciaQuiz from './pages/Home/Disciplinas/Desenvolvimento_web/desisitiu';
import Programação_Quiz from './pages/Home/Disciplinas/Quizzes_de_Programacao/Quiz_iniciado';
import Desistencia_Programacao from './pages/Home/Disciplinas/Quizzes_de_Programacao/desistiu_2';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Criar_Conta" element={<Criar_Conta/>} />
        <Route path="/Esqueceu_senha" element={<Esqueceu_senha/>} />
        <Route path="/Home/Tela" element={<Tela_inicial/>} />
        <Route path="*" element={<Erro404/>} />
        <Route path="/Home/Quizzes" element={<Quizzes_tela/>} />
        <Route path="/Home/Certificados" element={<Meus_Certificados/>} />
        <Route path="/Home/Perfil" element={<Perfil_Page/>} />
        <Route path="/Home/Disciplinas/Desenvolvimento_Web" element={<QuizInfoPage/>} />
        <Route path="/Home/Disciplinas/Quizzes_de_Programação" element={<Quiz_de_Programação/>} />
        <Route path="/Home/Disciplinas/Desenvolvimento_web/Quiz_Iniciado" element={<QuizForm/>} />
        <Route path="/Home/Disciplinas/Desenvolvimento_web/desistiu" element={<DesistenciaQuiz/>} />
        <Route path="/Home/Disciplinas/Quizzes_de_Programacao/Quiz_iniciado" element={<Programação_Quiz/>} />
        <Route path="/Home/Disciplinas/Quizzes_de_Programacao/desistiu_2" element={<Desistencia_Programacao/>} />

      </Routes>
    </BrowserRouter>
  );
}
//<Route path="/Home/Ranking" element={<Ranking_Page/>} /> //desativado (a pensar oque fazer no lugar)