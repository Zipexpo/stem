export default function ({size=50, ...props}) {
    return <path d={`M -${size/2} -${size/2} L 0 -${size/2} Q ${size/2} -${size/2} ${size/2} 0 T 0 ${size/2} L -${size/2} ${size/2} Z`} {...props}/>
}