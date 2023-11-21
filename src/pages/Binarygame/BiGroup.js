import Cell from "./Cell";
import {Text} from '@react-three/drei'
export default function ({roundBoxShape, position=[0,0,0], number=10}) {
    return <><group rotation={[-Math.PI/2,0,0]} position={position}>
                <Cell roundBoxShape={roundBoxShape} position={[-2,0,0]}/>
                <Cell roundBoxShape={roundBoxShape} position={[-1,0,0]}/>
                <Text scale={1.2} characters={'0123456789'} anchorX={"start"} 
                color={"blue"}
                position={[-0.3,-0.1,0]} >{number}</Text>
            </group>
        </>
}