import { CircleArrowDown, CircleArrowUp } from "lucide-react"

const Card = ({type, color}) => {
  return (
     <li className="p-2 bg-purple-500 text-white rounded flex justify-between md:w-7/10">
        <div>
          <p className={`flex text-2xl font-bold text-${color}-200 items-center gap-3`}>
           {type=="ingreso"?( <CircleArrowUp size={35} strokeWidth={3}/>):
           (<CircleArrowDown size={35} strokeWidth={3}/>)}
            Descripcion</p>

          <p className="text-sm text-stone-300">categoria</p>
        </div>
        <div>
          <p className={`text-xl text-bold text-${color}-200 text-end`}>$1000</p>
          <p className="text-sm">05/06/2025</p>
        </div>
      </li>

      
  )
}

export default Card

