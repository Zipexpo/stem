
import { useEffect, useRef, useState } from 'react'
import { create } from 'zustand'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Environment } from '@react-three/drei'
import Fireflies from '../../components/3Dcoponents/Fireflies'

const useGameStore = create((set) => ({
    timer: 60,
    decreaseTime: () => set((state) => ({ timer: state.timer - 1 })),
    resetTimer: (value=60) => set({ timer: value }),
    score: 0,
    increaseScore: (value=1) => set((state) => ({ score: state.score + value })),
    resetScore: () => set({ score: 0 }),
}))

export default function() {
    const { timer, decreaseTime, resetTimer, score, increaseScore, resetScore } = useGameStore()
    const timerRef = useRef();
    const [currentState,setcurrentState] = useState(10);
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
    return <div className="container relative mx-auto p-4 w-full" style={{height:'400px'}}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
            <Fireflies count={20} radius={80} colors={['orange']} />

            <Text color="black" anchorX="center" anchorY="middle">
                {timer}
            </Text>
        </Canvas>
        <span className="text-4xl text-cyan-900 font-bold absolute top-0 left-0 m-10">{timer}</span>
    </div>
}

