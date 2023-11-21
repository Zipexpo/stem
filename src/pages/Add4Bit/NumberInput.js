import {useCallback} from "react";

const emptyFunc = ()=>{}
export default function({text,id="inputA",min=0,max=15,onUpdateValue=emptyFunc,...props}){
    const onChange = useCallback((e)=>{
        const v = e.target.valueAsNumber;
        e.target.value = Math.max(min,Math.min(v,max));
        onUpdateValue(e.target.valueAsNumber)
    },[min,max,onUpdateValue])
    return <div {...props}>
        <label htmlFor={id} className={'pr-2 font-bold text-xl'}>{text}</label>
        <input className={'border-2 font-bold text-xl w-12'} defaultValue={0} min={0} max={15} id={id} type='number' onChange={onChange}/>
    </div>
}