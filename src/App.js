import './App.css';
import {useState} from "react";

const median = (tab) => {
    tab.sort((a,b)=>a-b)
    let len = tab.length;

    if(len%2===1)
    {
        return  tab[parseInt(len/2)];
    }
    else
    {
        len = parseInt(len/2)-1;
        return (tab[len]+tab[len+1])/2;
    }
}



function App() {
    const onChangeInput = (event) =>{
        let value = event.target.value;

        if(value==="")
        {
            setData("");
            return;
        }

        let count = (value.match(/,/g) || []).length;
        let tab=[];

        while(value.length>0)
        {
            let index = value.indexOf(",");
            if(index===-1)
            {
                tab.push(value.slice(0));
                value = "";
            }
            else
            {
                tab.push(value.slice(0, index));
                value = value.slice(index+1)
            }
        }

        let newTab=[]

        for(let i=0;i<tab.length;i++)
        {
            if(isFinite(tab[i]))
            {
                let num = parseFloat(tab[i]);
                if(!isNaN(num)){
                    newTab.push(num)
                }
            }
            else
            {
                setData("Błąd!");
                return;
            }
        }

        if(newTab.length===0)
            return;

        setData("Mediana: "+median(newTab));
    }



    const [data,setData]= useState("");

    return (
    <div className="App">
        <div className="resultBox">
            <p id="result">
                {data!==""? <>{data}</>: null}
            </p>
        </div>
        <input id="data" type="text" onChange={onChangeInput}/>
    </div>
    );
}

export default App;
