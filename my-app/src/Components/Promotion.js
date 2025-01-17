import React, { Component } from 'react'
import { Container, Row, Col, Carousel, CarouselItem, CarouselCaption, NavLink } from 'react-bootstrap'
import fon from './Photo8/Group 143.svg'
import separatedLine from './Photo8/Rectangle 285.svg'
import Cloud from './Photo8/цитата.svg'
import Ciggarets from './Photo8/Group 133.svg'
import Smoke from './Photo8/Rectangle 293.svg'
import Card1 from './Photo8/Card1.svg'
import Card2 from './Photo8/Subtract.svg'
import men from './Photo8/Group 144.svg'
import Tochki from './Photo8/Mask Group 55.svg'
import buy from './Photo3/заказать.svg'
import man2 from './Photo8/83607699-retro-man-with-a-glass-of-beer-in-hand-vector-illustration- (Traced) 1.svg'
import Tochki2 from './Photo8/klipartz.com - 2020-12-29T221737 1.svg'
import man3 from './Photo8/Group 145.svg'
import man4 from './Photo8/Group 146.svg'
import car from './Photo8/klipartz.com - 2020-12-29T203531 1.svg'
import BlackFon from './Photo8/Rectangle 292.svg'
import eye from './Photo8/опа.svg'
import Footer from './Footer'
import UndLine from './Photo7/Vector 180.svg'
import './Animation/ForCardInPromotion.css'
import CardAnim from './Animation/Group 143.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';

export default class Promotion extends Component {
  state = {
    hovered: false,
  };

  setHovered = (value) => {
    this.setState({ hovered: value });
  };

  render() {
    const { hovered } = this.state;
return (
      <div>
        <Container>
            <img src={fon} style={{position:"relative", marginLeft:"-300px", marginTop:"-80px"}}/>
            <img src={separatedLine} style={{position:"relative", marginLeft:"-300px", marginTop:"-30px", zIndex:"1"}}/>
            <img src={Cloud} style={{position:"absolute", marginTop:"-570px", marginLeft:"500px", zIndex:"2"}}/>
        </Container>
        <Container>
            <h1 style={{position:"absolute", marginTop:"150px", marginLeft:"100px", fontSize:"72px", fontWeight:"699"}}>Контекстная<br/>реклама</h1>
            <p style={{position:"absolute", marginTop:"350px", marginLeft:"100px", fontSize:"18px"}}>Комплекс мер по внутренней и внешней оптимизации для <br/>поднятия позиций сайта в результатах выдачи поисковых <br/>систем по определённым запросам пользователей, с<br/> целью увеличения сетевого трафика и потенциальных<br/> клиентов .</p>
            <img src={Ciggarets} style={{position:"absolute", marginLeft:"620px", marginTop:"50px"}} />
            <img src={Smoke} style={{position:"absolute", marginLeft:"720px", marginTop:"100px", zIndex:"-1"}}/>
        </Container>
        <Container>
        <Row style={{position:"relative",marginTop:"600px", marginLeft:"80px"}}>
        <Col>
    <img src={Card2} style={{marginTop: "70px"}} />
    <Container style={{position: "relative", marginLeft: "-20px"}} className='ContainerCard'>
        <img src={CardAnim} style={{position: "absolute", marginTop: "-250px", marginLeft: "8px"}} className='CardImage'/>
        <h1 style={{position: "absolute", marginTop: "-210px", marginLeft: "80px", fontSize: "24px", fontWeight: "699"}} className='CardText'>Посещение сайта</h1>
        <p style={{position: "absolute", marginTop: "-160px", marginLeft: "40px", fontSize: "18px", textAlign: "center"}} className='CardText'>
            Объявления, ведущие на ваш сайт,<br/> помогут увеличить количество<br/> онлайн-продаж, бронирований или<br/> подписок на рассылку
        </p>
    </Container>
</Col>
                <Col style={{marginTop:"70px"}}>
                <img src={Card2} />
                <Container style={{position:"relative", marginLeft:"-20px"}} className='ContainerCard' >
                <img src={CardAnim} style={{position:"absolute", marginTop:"-250px", marginLeft:"9px"}} className='CardImage'/>
                <h1  style={{position:"absolute", marginTop:"-200px",marginLeft:"80px", fontSize:"24px", fontWeight:"699", textAlign:"center"}} className='CardText'>Телефонные звонки</h1>
                <p  style={{position:"absolute", marginTop:"-150px",marginLeft:"40px", fontSize:"18px", textAlign:"center"}} className='CardText'>Объявления с номером телефона и<br/> кнопкой "Позвонить" помогают<br/> повысить количество звонков и<br/> текущих клиентов</p>
                </Container>
                </Col>
                <Col style={{marginTop:"70px"}}>
                <img src={Card2} />
                <Container style={{position:"relative", marginLeft:"-20px"}} className='ContainerCard2' >
                <img src={CardAnim} style={{position:"absolute", marginTop:"-235px", marginLeft:"8px"}} className='CardImage2'/>
                <h1 style={{position:"absolute", marginTop:"-200px",marginLeft:"50px", fontSize:"24px", fontWeight:"699", textAlign:"center"}} className='CardText2'>Увелечение  посетителей</h1>
                <p style={{position:"absolute", marginTop:"-170px",marginLeft:"40px", fontSize:"18px", textAlign:"center"}} className='CardText2'>Объявления помогут<br/> пользователям найти вашу<br/> компанию на карте – и привлекут<br/> больше клиентов в ваш магазин<br/> или офис.</p>
                </Container>
                </Col>
            </Row>
        </Container>
        <Container>
          <p style={{position:"absolute", marginTop:"150px", marginLeft:"80px", fontSize:"18px"}}>Контекстная реклама может показываться в виде рекламных<br/> объявлений, графических баннеров, видео роликов на<br/> сайтах-партнерах Google или поисковой системе.<br/>
          <br/>
Поисковая контекстная реклама считается самым эффективным<br/> способом привлечения потенциального покупателя на сайт, так как<br/> мы показываем рекламу в тот момент, когда у нашего<br/> потенциального клиента есть потребность купить товар или<br/> заказать услугу.
</p>
        <img src={men} style={{position:"absolute", marginLeft:"800px", marginTop:"100px"}} />
        <img src={Tochki} style={{position:"absolute", marginLeft:"1300px", marginTop:"-300px"}}/>
        <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "421px" : "418px",
    marginLeft: hovered ? "110px" : "98px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "75px", // Зафиксировано
    marginTop: "439px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "425px",
    marginLeft: "105px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
        </Container>
        <Container style={{ marginTop: "480px" }}>
        <Container>
          <img src={man2} style={{position:"absolute", marginTop:"140px"}} />
          <img src={Tochki2}style={{position:"absolute", marginTop:"345px", marginLeft:"-320px", zIndex:"-1"}} />
          <h1 style={{position:"absolute", marginLeft:"700px", marginTop:"100px", fontSize:"72px", fontWeight:"699"}}>Продвижение инстаграм</h1>
          <p style={{position:"absolute", marginLeft:"700px", marginTop:"320px", fontSize:"18px"}}>SMM продвижение идеально подходит для<br/> рекламы нового бренда или нового<br/> продукта/услуги, на которые еще нет спроса в<br/> поисковых системах, и настроить контекстную<br/> рекламу нет возможности, в связи с отсутствием<br/> поисков по нужным ключевым словам. В случае,<br/> если на Ваш товар или услугу есть спрос в<br/> поисковых системах, то SMM необходимо<br/> использовать в качестве дополнительного метода<br/> привлечения целевой аудитории к SEO<br/> продвижению и к рекламе в Google Adwords.</p>
          <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "642px" : "642px",
    marginLeft: hovered ? "735px" : "723px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "700px", // Зафиксировано
    marginTop: "659px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "645px",
    marginLeft: "730px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
        </Container>
        <Container style={{ marginTop: "750px", position:"absolute"}}>
          <h1 style={{position:"absolute", marginLeft:"70px", marginTop:"150px", fontSize:"72px", fontWeight:"699"}}>Баннерная <br/>
          реклама</h1>
          <p style={{position:"absolute", marginLeft:"75px", marginTop:"350px", fontSize:"18px"}}>Это показ рекламных объявлений в виде <br/> графических изображений, анимированных <br/> баннеров или реклама в виде видео ряда (видео  <br/>ролик и короткое текстовое описание) на сайтах <br/> партнерах Гугл.
          </p>
          <p style={{position:"absolute", marginLeft:"75px", marginTop:"500px", fontSize:"18px", fontWeight:"699"}}>Принципиальное отличие рекламы в Google<br/> поиске от баннерной медийной рекламы —</p>
          <p style={{position:"absolute", marginLeft:"75px", marginTop:"555px", fontSize:"18px"}}>намерение пользователя. Имеется виду<br/> потребность человека в том или ином продукте<br/> на момент показа рекламы.
          </p>
          <img src={man3} style={{position:"absolute", marginLeft:"575px", marginTop:"-25px"}}/>
          <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "662px" : "662px",
    marginLeft: hovered ? "110px" : "98px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "75px", // Зафиксировано
    marginTop: "679px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "665px",
    marginLeft: "105px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
        </Container>
        <Container style={{ marginTop: "1450px", position:"absolute"}}>
          <img src={man4} style={{position:"absolute", marginLeft:"100px", marginTop:"50px"}}/>
          <h1 style={{position:"absolute", marginLeft:"700px", marginTop:"100px", fontSize:"48px", fontWeight:"699"}}>Контекстная<br/> реклама - лучший<br/> способ увеличить<br/> видимость сайта</h1>
          <p style={{position:"absolute", marginLeft:"700px", marginTop:"350px", fontSize:"18px"}}>Гуманоид здесь чтобы поведает нам одну<br/> очень важную истину, он знает ответ на наш<br/> сложный вопрос )</p>
          <img src={car} style={{position:"relative", marginLeft:"1100px", marginTop:"260px"}} />
        </Container>
        <Container style={{ marginTop: "2018px", position:"absolute"}}>
          <img src={BlackFon}style={{position:"absolute", marginTop:"-85px", marginLeft:"-300px"}} />
          <Row style={{position:"absolute", marginLeft:"110px", marginTop:"-40px"}} >
            <Col>
            <img src={eye} />
            <img src={UndLine} style={{position:"absolute", marginTop:"180px", marginLeft:"-90px"}}/>
            <p style={{position:"absolute", fontSize:"18px",marginTop:"30px",color:"white"}}>Гибкость настроек рекламной кампании<br/> и различные возможности для поиска<br/> своей целевой аудитории.</p>
            </Col>
            <Col style={{marginLeft:"300px"}}>
            <img src={eye} />
            <img src={UndLine} style={{position:"absolute", marginTop:"180px", marginLeft:"-90px"}}/>
            <p style={{position:"absolute", fontSize:"18px",marginTop:"30px",color:"white"}}>Бесплатные системы веб-аналитики<br/> позволяют анализировать кампании,<br/> чтобы понимать, окупаются ли вложения </p>
            </Col>
            <Col style={{marginLeft:"300px"}}>
            <img src={eye} />
            <img src={UndLine} style={{position:"absolute", marginTop:"180px", marginLeft:"-90px"}}/>
            <p style={{position:"absolute", fontSize:"18px",marginTop:"30px",color:"white", width:"400px"}}> Быстрая отдача вложенных инвестиций. Действие контекстной рекламы начинается сразу после ее размещения. </p>
            </Col>
          </Row>
        </Container>
        </Container>
      </div>
    )
  }
}