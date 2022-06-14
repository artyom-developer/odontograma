import React,{ useState } from 'react'; 

import './App.css';
import data from './data'

const ItemDiente = ({item, onClick, selectDiente }) => {

  const hasSelectDiente = (parte,diente) => {
    const res = selectDiente.filter((item)=> item.diente===diente&&item.parte===parte );
    if(res.length===0){ return false; }
    return true;
  }
  return(
    <div className='item-diente'>
      <h3>{item.diente}</h3>
      <div className="base">
        <div className="parte p1 hoverParte" 
          style={{backgroundColor:hasSelectDiente(1,item.diente)?"#4C5270":"#fff"}}
          onClick={()=>onClick({parte: 1, diente: item.diente})}></div>
        <div className="parte p2 hoverParte" 
          style={{backgroundColor:hasSelectDiente(2,item.diente)?"#4C5270":"#fff"}}
          onClick={()=>onClick({parte: 2, diente: item.diente})}></div>
        <div className="parte p3 hoverParte" onClick={()=>onClick({parte: 3, diente: item.diente})}></div>
        <div className="parte p4 hoverParte" onClick={()=>onClick({parte: 4, diente: item.diente})}></div>
        <div className="p5 hoverParte" onClick={()=>onClick({parte: 5, diente: item.diente})}></div>
      </div>
    </div>
  )
}

function App() {
  const  [ selectDiente, setSelectDiente ] = useState([]);
  const [ cantidad, setCantidad ] = useState(0);

  const onClickDiente = ({parte, diente}) => {
    const data = selectDiente;
    data.push({ diente, parte });
    setCantidad(cantidad+1)
    setSelectDiente(data);
  }

  const loadItemDiente = (num) => {
    return data.filter((item)=> item.cuadro === num ).map((item,i)=>{
      return(<ItemDiente key={i} item={item} onClick={onClickDiente} selectDiente={selectDiente}/>)
    })
  }

  return (
    <div className="App">
       <h1>Odontograma  </h1> 
       <p>Cantidad {cantidad}</p>
       <p>{JSON.stringify(selectDiente)}</p>
       <div className='filaCuadro'>
        <div className='cuadro c1'> { loadItemDiente(1) } </div>
        <div className='cuadro c2'> { loadItemDiente(2) } </div> 
       </div>
       <div className='filaCuadro'>
        <div className='cuadro c3'> { loadItemDiente(3) } </div>
        <div className='cuadro c4'> { loadItemDiente(4) } </div> 
       </div> 
       
    </div>
  );
}

export default App;
