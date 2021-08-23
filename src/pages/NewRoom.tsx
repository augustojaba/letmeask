import { Link } from 'react-router-dom';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';

import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';
import illustrationImg from '../assets/images/illustration.svg';
import '../styles/auth.scss';

export function NewRoom() {

    //const { user } = useAuth();

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="QA Illustration" />
                <strong>Crie salas Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>

            </main>
        </div>
    )
}