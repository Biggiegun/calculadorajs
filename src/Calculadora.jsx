import React from 'react'
import './styles.css'

export const Calculadora  = () =>{

    const teclas = [{tecla:"zero", valor:"0"}, {tecla:"one", valor:"1"}, {tecla:"two", valor:"2"}, {tecla:"three", valor:"3"}, {tecla:"four", valor:"4"}, {tecla:"five", valor:"5"}, {tecla:"six", valor:"6"}, {tecla:"seven", valor:"7"}, {tecla:"eight", valor:"8"},{tecla:"nine", valor:"9"}]
    
    const igual =[{tecla:"equals", valor:"="}]
    
    const decimal = [{tecla:"decimal", valor:"."}]
    
    const Limpiar = [{tecla:"clear", valor:"AC"}]
    
    const suma = [{tecla:"add", valor:"+"}]
    const resta = [{tecla:"subtract", valor:"-"}]
    const multiplicacion = [{tecla:"multiply", valor:"*"}]
    const division = [{tecla:"divide", valor:"/"}]
    
    const [valor, setValor] = React.useState("");  
      
    const getValue = (e) =>{
      
      setValor(valor.concat(e.target.value))
      
      //setValor(e.target.value);
      console.log(valor);
    }
    
    const LimpiarInput = (e) =>{
      setValor("")
    }
    
    const Igual = (e) =>{
      if(valor.includes("..")){
        //valor.replace("..",".")
        LimpiarInput();
        //setValor(eval(valor))
      }else{
        setValor(eval(valor))
      }
      
    }
    
    return(
       <div className="padre">
        <input id="display"value={valor}/>
          <div className="botones">{teclas.map((tecla)=>{
            return(
              <button id={tecla.tecla} value={tecla.valor} onClick={(e)=>getValue(e)}>
                {tecla.valor}   
              </button>)
          }
        )}
            <button id="add" value="+" onClick={(e)=> getValue(e)}>
                +
              </button>
            
            <button id="subtract" value="-" onClick={(e)=> getValue(e)}>
                - 
              </button>
            
            <button id="multiply" value="*" onClick={(e)=> getValue(e)}>
                *
              </button>
            
            <button id="divide" value="/" onClick={(e)=> getValue(e)}>
                / 
              </button>
            
            
            <button id="equals" value={igual.valor} onClick={(e)=> Igual(e)}>
                = 
              </button>
            
            <button id="decimal" value="." onClick={(e)=> getValue(e)}>
                . 
              </button>
            
              <button id="clear" value={Limpiar.valor} onClick={(e)=> LimpiarInput(e)}>
                AC  
              </button>
     
          </div>
       </div>
      )
    }
    