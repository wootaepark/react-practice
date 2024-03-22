import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 사용자정의 태그 == 컴포넌트 -> 이러한 컴포넌트를 여러 사람이 공유하여 사용 가능하고, 간략하다는 장점이 있다.
function Header(props){
  console.log('props', props.title);
  return(
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}



function Nav(props){
  const lis = [];

  for(let i = 0;i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));// t.id 를 매개변수로 넣어도 동일 동작
    }}>{t.title}</a></li>
    );
  }
  return(
    <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  )
}

function Article(props){
  console.log('props', props.title, props.body);
  return(
    <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  console.log('_mode', mode);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'}
  ];

  let content = null;

  console.log('Mode1 : ', mode, ' Mode2 : ', id);
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }
  else if(mode === 'READ'){ 
    let title, body = null;
    for (let i = 0; i<topics.length ;i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    
  }

 

  return ( // <Header/>로 표현해도 됨 
    <div>

    <Header title="WEB" onChangeMode={()=>{
      setMode('WELCOME');
    }}></Header>

    <Nav topics={topics} onChangeMode={(_id)=>{
      setMode('READ');
      setId(_id);
      // status가 두개인 것이다.
    }}></Nav>
    {content}
    

    </div>

    
  );
}

export default App;
