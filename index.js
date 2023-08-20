// // Event FUnction in React , 

// Every time we have to change the UI we have to re-render the component :

let score=0;
let wicket=0;
let ballWiseres=[];
let hit ;
let refInput= React.createRef();


// function for each button bellow:-

// function addOne(){
//     score+=1;
//     rootElement.render(<App/>);
// }
// function addTwo(){
//     score+=2;
//     rootElement.render(<App/>);
// }
// function addThree(){
//     score+=3;
//     rootElement.render(<App/>);
// }
// function addFour(){
//     score+=4;
//     rootElement.render(<App/>);
// }
// function addFive(){
//     score+=5;
//     rootElement.render(<App/>);
// }
// function addSix(){
//     score+=6;
//     rootElement.render(<App/>);
// }
// function addWicket(){
//     wicket+=1;
//     rootElement.render(<App/>);
// }


//Creating the single function for all


function addScore(num){
        hit = num;
        rootElement.render(<App/>);      
        
}

function addWicket(){
        hit = "W"
        rootElement.render(<App/>);
        }
    

const ScoreBtn = () => (
    <div className="Btn">
    {/* // inline function // */}
    <button onClick={()=> addScore(0)}>0</button>
    <button onClick={()=> addScore(1)}>1</button>
    <button onClick={()=> addScore(2)}>2</button>
    <button onClick={()=> addScore(3)}>3</button>
    <button onClick={()=> addScore(4)}>4</button>
    <button onClick={()=> addScore(5)}>5</button>
    <button onClick={()=> addScore(6)}>6</button>
    <button className="wickt" onClick={addWicket} >Wicket</button>

    </div>
    

)


const Result =()=>(
    <div>
    {ballWiseres.map((res, index)=>(
    <>
    {index % 6 === 0?<br/>:null}   
    <span key={index} > {res === 0?<strong>.</strong>:res} </span> &nbsp;&nbsp;</>))}
    </div>
   
    
)
function HandelSubmit(event){
    event.preventDefault();

    if (hit=="W"){
        wicket+=1;
    }else{
        score+=hit;
    }
  
    ballWiseres.unshift(
        <span>{hit}{",  "}{refInput.current.value}</span>
    );
    hit=0;
    refInput.current.value="";
    rootElement.render(<App/>);
}

const Form=()=>(

    <form onSubmit={HandelSubmit}>
        <input value={hit}></input>
        <input ref={refInput} placeholder="Add a comment"></input> 
        <button>Submit</button>
    </form>
    )  
    
    
const App=()=>(
    <>
    
        <h1> FORVIA CRICKET LEAUGE </h1>
        <h2> SCORE:- {score}/{wicket}</h2>
        {/* Calling the ScoreBtn Components below  */}
        < ScoreBtn />
        <br/>
        <br/>
       
        {/* <Result/> */}
        <Form/>
        <hr/>
        {ballWiseres.map((res,index)=>(
            <>
            <p>{res}</p>
            </>
        ))}
      
    
    </>
)
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);


//  Chapter 2 :- Virtual DOM under the hood 


