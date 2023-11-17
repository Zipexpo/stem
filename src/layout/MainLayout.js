import Header from "../components/Header";

export default function ({children}) {
    return <div> 
        <Header/>
        {children}
    </div>
}