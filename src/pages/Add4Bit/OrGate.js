export default function ({size=50, ...props}) {
    return <path d={`M -${size/2} -${size/2} Q 0 -${size/2} ${size/2} 0 Q 0 ${size/2} -${size/2} ${size/2} Q -${size/4} ${size/4} -${size/4} 0 T -${size/2} -${size/2}`} {...props}/>
}