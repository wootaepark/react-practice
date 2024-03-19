import logo from './logo.svg';
import './App.css';

// 사용자정의 태그 == 컴포넌트 -> 이러한 컴포넌트를 여러 사람이 공유하여 사용 가능하고, 간략하다는 장점이 있다.
function Header(props){
  console.log('props', props.title);
  return(
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];

  for(let i = 0;i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a> {t.body}</li>
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
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'}
  ];
  return ( // <Header/>로 표현해도 됨 
    <div>

    <Header title="WEB"></Header>
    <Nav topics={topics}></Nav>
    <Article title="Welcome" body="Hello, WEB"></Article>
    

    </div>

    
  );
}

export default App;
