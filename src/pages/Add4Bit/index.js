import LogicView from "./LogicView";
import NumberInput from "./NumberInput";
import {useCallback, useState} from "react";

export default function () {
    const [number,setNumber] = useState([[false,false,false,false],[false,false,false,false]]);
    const onChangeInput = useCallback((index)=>{
        return (numberVal)=>{
            // convert to binary
            const biString = (numberVal>>>0).toString(2);
            number[index] = [false,false,false,false];
            let count = number[index].length - biString.length;
            for (let i=0;i<biString.length;i++){
                number[index][count] = !!(+biString[i]);
                count++;
            }
            console.log(number)
            setNumber([...number])
        }
    },[number])
    return <div className={"w-full h-full relative"} style={{'height':'calc(100vh - 9rem)'}}>
        <LogicView value={number}/>
        <div className={'w-full h-12 flex justify-center items-center'}>
            <NumberInput text={"A"} id={"inputA"} onUpdateValue={onChangeInput(0)}/>
            <NumberInput text={"B"} id={"inputB"} className={'pl-4'} onUpdateValue={onChangeInput(1)}/>
        </div>
    </div>
}