import { useCallback } from "react"
import {Text, Extrude, RoundedBox} from '@react-three/drei'

const emptyFunc = ()=>{}
export default function ({roundBoxShape,position=[0,0,0],value=0,onClick=emptyFunc}) {
    const onChangeValue = useCallback(()=>{
        onClick(value);
    },[value,onClick])
    return (
    // <Extrude args={[roundBoxShape, {depth:0.1,bevelEnabled: false}]}
    // >
    //     <meshStandardMaterial color={'#797979'} />
    // </Extrude>
    <group position={position}>
        <RoundedBox
        args={[0.9, 0.9, 0.2]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.1} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        // {...meshProps} // All THREE.Mesh props are valid
        onClick={onChangeValue}
    >
        <meshPhongMaterial color={"blue"} />
    </RoundedBox>
    <RoundedBox
        args={[0.7, 0.7, 0.2]} // Width, height, depth. Default is [1, 1, 1]
        position={[0,0,0.1]}
        radius={0.1} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        // {...meshProps} // All THREE.Mesh props are valid
        onClick={onChangeValue}
        >
            <meshPhongMaterial color={"white"} />
        </RoundedBox>
        <Text position={[0,-0.1,0.21]} scale={0.8} color={"blue"}>{value}</Text>
    </group>)
}