import React, { Component } from 'react'
import { Container, NavLink, Navbar, Nav } from 'react-bootstrap'
import fon from './Photo2/Rectangle 10.svg'
import Cloud1 from './Photo2/klipartz.com - 2020-12-29T161810 1.svg'
import BGHand from './Photo2/klipartz.com - 2020-12-31T140129 2.svg'
import Hand from './Photo2/сжатые-кулаки-поднятые-в-векторе-протеста-119409103 1.svg'
import ShyHand from './Photo2/вапшгри 3.svg'
import BlackSmth from './Photo2/Rectangle 108.svg'
import GreenDot1 from './Photo2//klipartz.com - 2020-12-31T140129 3.svg'
import Cloud2 from './Photo2/цытата м сити.svg'
import ShyMan from './Photo2/вапшгри 4.svg'
import blackShy from './Photo2/klipartz 6.svg'
import Men from './Photo2/Group 2.svg'
import BlackBG from './Photo2/Rectangle 110.svg'
import Exp from './Photo2/опыт.svg'
import Way from './Photo2/решения.svg'
import proj from './Photo2/проекты.svg'
import GreenBG from './Photo2/klipartz.com - 2020-12-29T214525.svg'
import Car from './Photo2/машина.svg'
import Cloud3 from './Photo2/цитата м сити.svg'
import fabric from './Photo2/klipartz 7.svg'
import JS from './Photo2/Group 54.svg'
import CSharp from './Photo2/Group 55.svg'
import CSS from './Photo2/Group 56.svg'
import PHP from './Photo2/Group 57.svg'
import MySQL from './Photo2/Group 58.svg'
import Word from './Photo2/Group 59.svg'
import BOOT from './Photo2/Group 60.svg'
import HTML from './Photo2/Group 61.svg'
import Ae from './Photo2/Group 62.svg'
import Figma from './Photo2/Group 63.svg'
import PS from './Photo2/Group 64.svg'
import Il from './Photo2/Group 65.svg'
import Sputnik from './Photo2/СПУТНИК КАРТИНКА.svg'
import ShySputnik from './Photo2/Mask Group 56.svg'
import BlackStick from './Photo2/Rectangle 128.svg'
import start from './Photo2/кнопка.svg'
import Cloud4 from './Photo2/цытата.svg'
import fonGreen from './Photo2/Rectangle 28.svg'
import Eye from './Photo2/глаз картинка.svg'
import Stick1 from './Photo2/Rectangle 129.svg'
import Ugol1 from './Photo2/Vector 62.svg'
import Ugol2 from './Photo2/Vector 64.svg'
import BlackDot from './Photo2/klipartz.com - 2020-12-29T221737 1.svg'
import Brain from './Photo2/мозг картинка.svg'
import heart from './Photo2/сердце картинка.svg'
import Mail from './Photo2/почтомат картинка.svg'
import SendMail from './Photo2/Group 66.svg'
import BlackLine from './Photo2/Rectangle 126.svg'
import kvadratik from './Photo/Rectangle 12.svg'
import polosochka from './Photo/Rectangle 11.svg'
import { Link, useLocation } from 'react-router-dom';

export default class AboutUs extends Component {
  state = {
    hovered: false,
  };
  handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  setHovered = (value) => {
    this.setState({ hovered: value });
  };

  render() {
    const { hovered } = this.state;
    return (
        <>
      <div>
        <Container className="ms-50">
            <img src={fon} style={{position:"absolute", marginLeft:"-300px"}} />
            <img src={Cloud1}style={{position:"absolute", marginLeft:"-300px",marginTop:"400px"}} />
            <img src={BGHand} style={{position:"absolute", marginLeft:"450px",marginTop:"158px", width:"1002px", zIndex:"3"}}/>
            <img src={Hand} style={{position:"absolute", marginLeft:"650px", marginTop:"220px", zIndex:"4"}} />
            <img src={ShyHand} style={{position:"absolute",marginLeft:"400px",zIndex:"2", marginTop:"40px" }}/>
            <h1 style={{position:"absolute", fontSize:"80px", fontWeight:"699", marginTop:"150px", marginLeft:"100px"}} >Про нас</h1>
            <p style={{position:"absolute", marginTop:"270px", marginLeft:"100px", fontSize:"20px"}} >Веб-дизайн студия MariupolCity.com <br/>
            стабильно работающая на рынке IT-услуг<br/>
            компания, которой реализовано более 200<br/>
            интернет-проектов для украинских,<br/>
            российских и западных заказчиков.</p>
            <img src={BlackSmth} style={{position:"absolute",marginLeft:"400px", marginTop:"650px", zIndex:"6"}}/>
            <img src={GreenDot1} style={{position:"absolute",marginLeft:"450px", marginTop:"670px", zIndex:"2"}}/>
        </Container>
        <Container className="ms-50">
            <img src={Cloud2} style={{position:"absolute",marginTop:"620px", marginLeft:"350px", zIndex:"6"}} />
            <img src={ShyMan} style={{position:"absolute", marginTop:"880px",marginLeft:"-310px"}} />
            <img src={blackShy} style={{position:"absolute", marginTop:"990px",marginLeft:"-170px"}}/>
            <img src={Men}  style={{position:"absolute", marginTop:"820px", marginLeft:"20px"}}/> 
            <h1 style={{position:"absolute",marginTop:"940px", marginLeft:"750px", zIndex:"6", fontSize:"80px", fontWeight:"699"}}>Наши <br/>принципы</h1>
            <p style={{position:"absolute",marginTop:"1160px", marginLeft:"750px", zIndex:"6"}}>Сотрудничая с бизнесом мы подбираем максимально<br/> эффективные инструменты исходя из поставленных задач. Мы <br/>тестируем нишу клиента и постоянно вносим корректировки в<br/> стратегию продвижения, оценивая и анализируя все наши <br/>действия. Мы ориентируемся на результат, максимальную<br/> эффективность и пользу для клиента.<br/> 
            <br/>
Наш главный результат, это результаты и известность наших<br/> клиентов в своей нише.</p>
        </Container>
            <Container className="ms-50">
                <img src={BlackBG} style={{position:"relative", marginLeft:"-300px", marginTop:"1460px"}}/>
                <img src={Exp} style={{position:"absolute", marginLeft:"50px", marginTop:"-300px"}} />
                <img src={Way} style={{position:"absolute", marginLeft:"530px", marginTop:"-300px"}}/>
                <img src={proj} style={{position:"absolute", marginLeft:"1010px", marginTop:"-300px"}}/>
            </Container>
            <Container className="ms-50">
                <img src={GreenBG} style={{position:"absolute", marginLeft:"50px",marginTop:"-50px", zIndex:"-1"}}/>
                <img src={Car} style={{position:"absolute", marginTop:"340px"}}/>
                <img src={Cloud3} style={{position:"absolute", marginTop:"120px", marginLeft:"300px"}}/>
                <img src={fabric} style={{position:"absolute", marginTop:"840px", marginLeft:"50px"}}/>
                <h1 style={{position:"absolute", marginLeft:"750px",marginTop:"200px", fontSize:"30px", fontWeight:"1000"}}>Индивидуальный подход</h1>
                <p style={{position:"absolute", marginLeft:"750px",marginTop:"250px"}}>к каждому Клиенту, не на словах, а подтвержденный <br/>делом, высокий уровень качества выпускаемой <br/>продукции, позволяют добиться максимального<br/> результата. Наша задача заключается в использовании <br/>своего опыта, знаний и технологий для решения<br/> маркетинговых и рекламных задач .</p>
                <h1  style={{position:"absolute", marginLeft:"750px",marginTop:"450px", fontSize:"30px", fontWeight:"1000"}}>Наши сотрудники</h1>
                <p style={{position:"absolute", marginLeft:"750px",marginTop:"500px"}}>обладают тремя важными качествами - честностью,<br/> ответственностью, стремлением быть лучшими в своем <br/>деле. Эти качества являются залогом прочных и<br/> долгосрочных отношений с нашими Клиентами.</p>
                <h1 style={{position:"absolute", marginLeft:"750px",marginTop:"650px", fontSize:"30px", fontWeight:"1000"}}>Многие из Заказчиков</h1>
                <p style={{position:"absolute", marginLeft:"750px",marginTop:"700px",}}>студии являются постоянными Клиентами, из года в год,<br/> доверяя свои новые проекты, что безусловно говорит о <br/>качестве работы нашей веб-дизайн cтудии.</p>
                <h1 style={{position:"absolute", marginTop:"1050px", marginLeft:"50px", fontSize:"80px", fontWeight:"699"}} >Технологии</h1>            
                <p style={{position:"absolute", marginTop:"1170px", marginLeft:"50px", fontSize:"20px"}}>Которые мы используем - это основа нашей работы то с<br/> помощью чего творяться чудеса создания сайта, дизайна</p>
                <img src={JS} style={{position:"absolute", marginLeft:"650px", marginTop:"950px"}}/>
                <img src={CSharp} style={{position:"absolute", marginLeft:"850px", marginTop:"950px"}}/>
                <img src={CSS} style={{position:"absolute", marginLeft:"1050px", marginTop:"950px"}} />
                <img src={PHP} style={{position:"absolute", marginLeft:"650px", marginTop:"1150px"}}/>
                <img src={MySQL} style={{position:"absolute", marginLeft:"850px", marginTop:"1150px"}} />
                <img src={Word} style={{position:"absolute", marginLeft:"1050px", marginTop:"1150px"}}/>
                <img src={BOOT} style={{position:"absolute", marginLeft:"50px", marginTop:"1350px"}}/>
                <img src={HTML} style={{position:"absolute", marginLeft:"250px", marginTop:"1350px"}}/>
                <img src={Ae} style={{position:"absolute", marginLeft:"450px", marginTop:"1350px"}} />
                <img src={Figma} style={{position:"absolute", marginLeft:"650px", marginTop:"1350px"}} />
                <img src={PS}  style={{position:"absolute", marginLeft:"850px", marginTop:"1350px"}}/>
                <img src={Il} style={{position:"absolute", marginLeft:"1050px", marginTop:"1350px"}} />
                <img src={Sputnik} style={{position:"absolute", marginLeft:"100px", marginTop:"1650px"}}/>
                <img src={ShySputnik}style={{position:"absolute", marginLeft:"-300px", marginTop:"1800px", zIndex:"-1"}} />
                <h1 style={{position:"absolute", marginLeft:"440px", marginTop:"1650px", zIndex:"1", fontSize:"30px", fontWeight:"699"}}>Наша спутниковая тарелка<br/>
                передает очень важную информацию!</h1>
                <p style={{position:"absolute", marginLeft:"442px", marginTop:"1750px", zIndex:"1", fontSize:"20px"}}>Привлекательный бренд и <br/>великолепный веб-сайт <br/>не принесут пользы <br/>вашему бизнесу, если о<br/> вас никто не знает</p>
                <p style={{position:"absolute", marginLeft:"792px", marginTop:"1750px", zIndex:"1", fontSize:"20px"}}>По этому мы продвигаем ваши продукты и<br/> контент, чтобы расширить охват вашего бренда,<br/> привлечь внимание, увеличить трафик и<br/> завоевать авторитет и доверие в поисковых<br/> системах. </p>
                <img src={BlackStick} style={{position:"relative", marginLeft:"-300px", marginTop:"2050px", zIndex:"-1"}} />
                <NavLink
  as={Link}
  to="/Promotion" 
  style={{
    position: "absolute",
    fontSize: "18px",
    marginLeft: hovered ? "1040px" : "1075px", // Смещение вправо при наведении
    marginTop: hovered ? "-137px" : "-145px",
    zIndex: "5"
  }}
  className={`kvadratik1 ${hovered ? 'hovered' : ''}`}
  onClick={this.handleLinkClick}
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>

<NavLink
   as={Link}
   to="/Promotion" 
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "1075px",
    marginTop: "-130px",
    zIndex: "5",
    transformOrigin: "center" // правильно написан
  }}
  className={`ForPolosochka1 ${hovered ? 'hovered' : ''}`}
  onClick={this.handleLinkClick}
>
  <img src={polosochka} alt="Polosочока" />
</NavLink>

<NavLink
   as={Link}
   to="/Promotion" 
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'left',
    marginTop: "1932px",
    marginLeft: "384px",
    zIndex: "11",
    fontSize: '1.0em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onClick={this.handleLinkClick}
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Начать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span><br/>продвижение
</NavLink>


            </Container>
            
            <Container className="ms-50">
                <img src={Cloud4} style={{position:"absolute",marginLeft:"400px", marginTop:"-100px"}}/>
                <img src={fonGreen} style={{position:"absolute", marginLeft:"-300px", zIndex:"-1"}}/>
                <h1  style={{position:"absolute",marginLeft:"450px", marginTop:"250px", fontSize:"80px", fontWeight:"699"}}>Наша команда</h1>
                <img src={Eye} style={{position:"absolute",marginTop:"300px"}} />
                <img src={Stick1} style={{position:"absolute",marginTop:"450px"}}/>
                <img src={Ugol1} style={{position:"absolute",marginTop:"450px", marginLeft:"530px"}}/>
                <img src={Ugol2} style={{position:"absolute",marginTop:"840px"}} />
                <img src={BlackDot} style={{position:"absolute",marginTop:"840px", marginLeft:"1016px"}}/>
                <img src={Brain} style={{position:"absolute",marginTop:"695px", marginLeft:"1016px"}}/>
                <img src={heart} style={{position:"absolute",marginTop:"870px",zIndex:"-1", marginLeft:"-150px"}}/>
                <h1 style={{position:"absolute",marginTop:"500px", fontSize:"28px", fontWeight:"699"}}>Руководители проекта <br/> 
                это всевидящие глаза нашего отдела</h1>
                <p style={{position:"absolute",marginTop:"580px", fontSize:"20px"}}>Ключевые ценности для нас  - это планирование,<br/>  прозрачность и своевременность .<br/> 
                <br/> 
Ежедневные встречи и еженедельные <br/>  демонстрации помогают держать вас в курсе. Но <br/> больше всего мы ценим личные отношения и <br/>  доверие и делаем все, чтобы они оставались на<br/>  высоком уровне.</p>
                <h1 style={{position:"absolute",marginTop:"450px", fontSize:"28px", fontWeight:"699", marginLeft:"570px"}}>Разработчики это мозг , без которого <br/>
                невозможна работа ни одного сайта</h1>
                <p style={{position:"absolute",marginTop:"530px", fontSize:"20px", marginLeft:"570px"}}>Разработчики программного обеспечения для Интернета<br/>  обладают хорошими навыками в создании продуктов и<br/> разработке индивидуальных программных решений с<br/> использованием таких технологий, как .NET, Java, Javascript,<br/> SQL, NativeScript, React и других. Кроме того, команда<br/> разработчиков из Украины обладает высоким<br/> профессионализмом в создании сайтов,<br/> 
лендингов, корпоративных сайтов,<br/> 
внедрении 3D-эффектов и анимации.</p>
                <h1 style={{position:"absolute",marginTop:"860px", fontSize:"26px", fontWeight:"699", marginLeft:"240px"}}>UI / UX дизайнеры - это насос который обеспечивает <br/>
постоянное движение идеи к ее реализации бесконечно</h1>
                <p style={{position:"absolute",marginTop:"960px", fontSize:"20px", marginLeft:"240px"}}>Наша команда дизайнеров - это группа энтузиастов, которые рассматривают<br/> дизайн продукта как процесс проектирования и ставят во главу угла<br/> пользовательский опыт. Также у нас есть опыт бизнес-анализа, который <br/>позволяет нам тесно сотрудничать с командой клиентов, понимать цели и<br/> возможности и реализовывать их с помощью таких инструментов, как<br/> Sketch, Figma, Invision, Photoshop, Illustrator.</p>
                <img src={Mail} style={{position:"absolute",marginTop:"1460px", zIndex:"-2"}}/>
                <h1 style={{position:"absolute",marginTop:"1510px", marginLeft:"600px", fontSize:"80px", fontWeight:"699", }}>Ищешь работу?</h1>
                <p style={{position:"absolute",marginTop:"1610px", marginLeft:"600px", fontSize:"25px"}}>Мы всегда открыты для креативных и творческих<br/>
                личностей. Присылайте резюме нам на: </p>
                <a href="/" style={{position:"absolute",marginTop:"1700px", marginLeft:"600px", zIndex:"2"}}><img src={SendMail}/></a>
                <img src={BlackLine} style={{position:"relative", marginTop:"1700px", marginLeft:"-300px", zIndex:"0"}} />
            </Container>
      </div>
      </>
    )
  }
}
