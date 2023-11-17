import { Link } from "react-router-dom";
const gameList = [
    {
        key: "binary_game",
        title: "Binary Game",
        description: "Challenge your quick math skill."
    }
]
export default function (){
    return <div class="grid grid-cols-4 gap-4">
        {
            gameList.map(d=><div key={d.key} className="flex flex-col p-2 justify-center border-2">
                <p className="prose-headings:h-1 text-center uppercase text-blue-600">
                    {d.title}</p>
                <p className="text-center text-slate-600">
                    {d.description}
                </p>
                <div className="relative">
                    <img width="200" height="200" className="w-full"/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <Link to={`binary-game`}>
                            <btn className="rounded-md bg-cyan-200 hover:bg-cyan-400 py-2 px-4 font-bold uppercase">
                                Play
                            </btn>
                        </Link>
                    </div>
                </div>
            </div>)
        }
    </div>
}