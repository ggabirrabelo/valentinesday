import logo from './assets/logo.png';
import img1 from './assets/1.JPG';
import img2 from './assets/2.JPG';
import img3 from './assets/3.JPG';
import img4 from './assets/4.JPG';
import img5 from './assets/5.JPG';
import img6 from './assets/6.JPG';
import img7 from './assets/7.JPG';

import Modal from './component/Modal/Modal';

import './App.css';
import { useRef, useState } from 'react';

function App() {

  const modalRef = useRef(null);
  const [dropdown, setDropdown] = useState("hidden");
  const [text, setText] = useState("Oi meu amor");
  const [more, setMore] = useState(false);



  const toggleDropdown = (text, more) => {
    setText(text)
    setDropdown("show");
    setMore(more)
  }

  const closeDropdown = () => {
    setDropdown("hidden");
  }


  return (
    <div className="App">

      <Modal open={dropdown} close={closeDropdown} modalRef={modalRef} text={text} more={more}/>
      <header className="App-header">
      <div className="topbar">
      <div className="logo1" >
        <img src={logo}/>
      </div>
      <ul>
        <li >
          <a role="button" aria-haspopup="true" href="/">Navegar</a>
        </li>
        <li >
            <a href="/">Eu</a>
        </li>
        <li >
          <a href="/">Amo</a>
        </li>
        
        <li >
          <a href="/">Você</a>
        </li>
      </ul>

        </div>
        <div className="App-header-2">
       
        <div className='capa'>
          <img src="https://occ-0-940-1567.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABd1k93BGrrbrd-y39TY1Z6lkBSg2dE15pWgjlHHvB9rk-BC4r49KBdY5Jo7f-Y9sb1b_OS_18JWb6sPspKdE6FB9AeLdErHIlnOJaYtOf-uQTqYLgOB2xnMWWZ4Skj5tHALDSIwLDpcPDFvUMbs4Ms2z-zO4WwbjzMhyhBamqGoYgT8ggzgk.webp?r=620"/>
          <div className='text'>Gabriela vai para um rolê na casa de seu amigo e lá reencontra um antigo crush e depois de jogarem "verdade ou desafio" eles acabam se beijando. Ambos acabam se encontrando diversas vezes depois, até que alguns sentimentos confusos começam a aparecer, já que nenhum dos dois queriam algo sério. Com o passar do tempo não deu mais para fugir e naturalmente eles firmaram um relacionamento e agora a preocupação é: Na sua casa ou na minha?  </div>
          </div>

          <div className='conteudo'>
          <div className='text'>Jundiaí: top 7 em cartinhas abertas hoje</div>
          <div className='slides'>
            <img className='img1' src={img1} onClick={() => toggleDropdown('A primeira vez foi quando me peguei escolhendo seu presente, depois do seu aniversário fiquei pensando que tinha feito toda uma investigação para descobrir o que você gostaria de ganhar. Naquela hora eu não sabia, mas hoje sei que foi a primeira vez que estava me apaixonando por você.')}/>
            <img className='img2' src={img2} onClick={() => toggleDropdown('Quando saímos para ir à casa do Arthur pela primeira vez, eu me lembro perfeitamente que eu ficava te admirando e ficava feliz por você estar feliz com seus amigos, uma hora fomos para cozinha e você me chamou de amor, foi a primeira vez que fiquei ansiosa e com borboletas no estômago e nesse momento eu já sabia estar me apaixonando pela segunda vez.')}/>
            <img className='img3' src={img3} onClick={() => toggleDropdown('A terceira vez foi quando estávamos fazendo **** e você começou a fazer carinho no meu cabelo, até hoje não consigo descrever em palavras o que senti, mas foi muito especial para mim.')}/>
            <img className='img4' src={img4} onClick={() => toggleDropdown('Bom, a quarta vez foi quando estávamos tomando banho juntos na casa da minha mãe e a luz bateu no seu rosto e eu acabei me pegando olhando para você… para seu rosto… para os seus olhos e ali eu tinha me apaixonado mais uma vez.')}/>
            <img className='img5' src={img5} onClick={() => toggleDropdown('E a quinta foi quando você me perguntou se eu te amava, e apesar de estar insegura em falar o que estava sentindo, pois, a gente passara por algumas conversas pesadas, eu não hesitei em falar que sim. Nesse momento eu estava amando você. Ai fodeu: soldada abatida de fato.')}/>
            <img className='img6' src={img6} onClick={() => toggleDropdown("Nessa altura do campeonato penso que deu para perceber que eu me apaixonei por você varias vezes, então queria dizer a vez que eu amei você pela primeira vez: Sabe aquele domingo que discutimos nossa relação e no dia seguinte você veio em casa? Eu estava convicta em acabar com tudo, pois aquela relação indefinida estava me machucando muito já, então refleti muito o motivo daquilo estar me machucando e foi ali que percebi que te amava de verdade, então resolvi ser sincera com você - Que eu queria que aquilo que tínhamos andasse para algum rumo, seja para um final feliz ou não. Quando falei isso era mais um 'te amo e preciso que você decida entre ficar ou não, seja qual for sua decisão eu vou respeitar'. Eu me senti muito leve ao falar essas coisas e eu acreditava que você ao ouvir isso fosse terminar tudo, mas eu estava em paz comigo independente do que acontecesse no final, ainda bem que no fim foi um happy ending❤️")}/>
            <img className='img7' src={img7} onClick={() => toggleDropdown("Vou me apaixonar mais uma vez quando escolhermos uma data nossa, você topa?", true)}/>
          </div>
          </div>
        </div>

       
      </header>
    </div>
  );
}

export default App;
