
import Logo from '../../imagens/logo.svg';
import './estilo.css';

function logo () {
    return (
        <div className='logo'>
            <img 
                src={Logo} 
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default logo;