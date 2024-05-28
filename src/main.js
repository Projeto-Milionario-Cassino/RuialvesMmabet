import testelogo from './imgs/testelogo.png'
import wpp from './imgs/wppicon.png'
import apphorariosIcon from './imgs/apphorariosIcon.png'
import telegramicon from './imgs/telegramicon.png'
import './main.css';


function App() {
  return (
    <div className="container">
      <div className="cabecalho">
        <img src={testelogo} alt='logo site'></img>
        <h1>RUIALVESMMA</h1>
        <span>@ruialvessh</span>
      </div>
      <div className="links">
        <a href='https://bit.ly/Cadastre-se_mmabet'><img className='logobtn' src={testelogo} alt='logo'></img><p className='cadastrebtn'>CADASTRE-SE AQUI E GANHE</p></a>
        <a href='https://contate.me/ruialves_suporte'><img className='wpp' src={wpp} alt='wppicon'></img><p className='wppsupbtn'>SUPORTE 24 HORAS<br/></p></a>
        <a href='https://t.me/+t44ytUWUChM4YTQ5'><img className='telegram' src={telegramicon} alt='icontelegram'></img><p className='telegranbtn'>LUCRANDO COM RUI ALVES</p></a>
        <a href='https://rui-slots.vercel.app/'><img className='apphorarios' src={apphorariosIcon} alt='apphorarios'></img><p className='horariospbtn'>APLICATIVO DE HORÁRIOS GRÁTIS</p></a>
      </div>
      <footer>
        <span>Copyright &copy; Mmabet - Todos os direitos reservados </span>
        <span>Desenvolvido por <span className='color'>@teste</span></span>
      </footer>
    </div>
  );
}

export default App;
