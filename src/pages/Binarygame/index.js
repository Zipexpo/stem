
import { useEffect, useRef, useState, useMemo } from 'react'
import { create } from 'zustand'
import { Canvas, useFrame } from '@react-three/fiber'
import {Text, Environment, Extrude, Grid} from '@react-three/drei'
import {Shape} from "three";
import Fireflies from '../../components/3Dcoponents/Fireflies'

const useGameStore = create((set) => ({
    timer: 60,
    decreaseTime: () => set((state) => ({ timer: state.timer - 1 })),
    resetTimer: (value=60) => set({ timer: value }),
    score: 0,
    increaseScore: (value=1) => set((state) => ({ score: state.score + value })),
    resetScore: () => set({ score: 0 }),
}))

export default function({circleRadius=0.5}) {
    const { timer, decreaseTime, resetTimer, score, increaseScore, resetScore } = useGameStore()
    const timerRef = useRef();
    const [currentState,setcurrentState] = useState(10);
    const roundBoxShape=useMemo(()=>new Shape()
        .moveTo( 0, circleRadius )
        .quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 )
        .quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius )
        .quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 )
        .quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius ),[circleRadius])
    useEffect(()=>{
        timerRef.current = setInterval(() => {
            decreaseTime();
          }, 1000);
        return () => clearInterval(timerRef.current);
    },[]);
    useEffect(()=>{
        if (timer<=0)
            clearInterval(timerRef.current);
    },[timer]);
    return <div className="container relative mx-auto p-4 w-full" style={{height:'600px'}}>
        <Canvas
            raycaster={{params: {Points: {threshold: 0.01}}}}
            camera={{position: [0, 15, 9], fov: 25}}
        >
            <ambientLight intensity={0.5} />
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
            <Fireflies count={20} radius={80} colors={['orange']} />
            <group rotation={[-Math.PI/2,0,0]}>
                <Extrude args={[roundBoxShape, {depth:0.1,bevelEnabled: false}]}>
                    <meshStandardMaterial color={'#797979'} />
                </Extrude>
            </group>
            <Grid position={[0, -0.02, 0]} args={[100,100]} {...{
                cellSize: 5 / 5 / 5,
                cellThickness: 1,
                cellColor: '#6f6f6f',
                sectionSize: 5 / 5,
                sectionThickness: 1.5,
                sectionColor: '#9d4b4b',
                fadeDistance: 25,
                fadeStrength: 1,
                followCamera: true,
                infiniteGrid: true
            }}/>
        </Canvas>
        <span className="text-4xl text-cyan-900 font-bold absolute top-0 left-0 m-10">{timer}</span>
    </div>
}

