import AndGate from "./AndGate";
import OrGate from "./OrGate";
import XorGate from "./XorGate";
import {useCallback, useEffect, useRef, useState} from "react";
import {useSpringRef, useTransition, animated} from "@react-spring/web";

export default function ({w=1000,h=600, value=[[],[]]}) {
    const refAnimation = useRef([]);
    const [speed, setSpeed] = useState(1000);
    const nodeApi = useSpringRef();
    const [stage, setStage] = useState({node:[],link:[]});
    const transitionsNode = useTransition(stage.node, {
        from: (item)=>({
            opacity: 0,
            transform:`translate(${item.x}, ${item.y+20})`
            // fill: '#8fa5b6',
        }),
        enter: (item)=> {
            return [
                {opacity: 1, transform:`translate(${item.x} ${item.y})`}
                // { fill: '#28d79f' },
                // { transform: 'perspective(600px) rotateX(0deg)' },
            ]
        },
        leave: item=>[
            // { fill: '#c23369' },
            { opacity: 0, transform:`translate(${item.x} ${item.y+20})`}],
        update: (item)=>({
            transform:`translate(${item.x} ${item.y})`
        }),
        trail:speed,
        ref: nodeApi,
    })
    const reset = useCallback(()=>{
        refAnimation.current.forEach(clearTimeout)
        refAnimation.current = [];
        setStage({node:[],link:[]});
        setSpeed(0);
        nodeApi.stop();
        // linkApi.stop();
        return () => refAnimation.current.forEach(clearTimeout)
    },[]);
    useEffect(()=>{
        const w4 = w/4;
        const w43 = w4/3;
        const size = 30;
        const bottom = 80;
        const node = [
                {type:<AndGate transform={'rotate(-90)'} size={size} fill={'none'} stroke={'black'}/>,
                    x:w-w4,y:h-bottom},
                {type:<AndGate transform={'rotate(-90)'} size={size} fill={'none'} stroke={'black'}/>,
                    x:w-w4*2,y:h-bottom}
            ];

        refAnimation.current.push(setTimeout(() => setStage({node}), 500));
        refAnimation.current.push(setTimeout(() => setSpeed(1000), 500));
        refAnimation.current.push(setTimeout(() => nodeApi.start(),1000));
        // refAnimation.current.push(setTimeout(() => linkApi.start(),1500));
    },[w,h])
    return <svg className={"w-full h-full"} viewBox={[0,0,w,h]}>
        <g>
            <AndGate transform={'translate(50,50) rotate(-90)'} fill={'none'} stroke={'black'}/>
            <OrGate transform={'translate(100,50) rotate(-90)'} fill={'none'} stroke={'black'}/>
            <XorGate transform={'translate(150,50) rotate(-90)'} fill={'none'} stroke={'black'}/>
            {transitionsNode(({ transform,...rest }, item) => <animated.g transform={transform} style={rest}>
                {item.type}
            </animated.g>)}
        </g>
        <g transform={`translate(${w/2} ${h-20})`}>
            {value[0].map((d,i)=><g key={`n0_${i}`} transform={`translate(${-(value[0].length-i)*15} 0)`}>
                <rect width={10} height={'1rem'} y={-10}/>
                <text fill={'white'} textAnchor={'center'} y={'.2rem'} x={'.03rem'}>{+d}</text>
            </g>)}

            {value[1].map((d,i)=><g key={`n1_${i}`} transform={`translate(${(i+1)*15} 0)`}>
                <rect width={10} height={'1rem'} y={-10}/>
                <text fill={'white'} textAnchor={'center'} y={'.2rem'} x={'.03rem'}>{+d}</text>
            </g>)}

        </g>
    </svg>
}