import { useEffect,useState } from "react";
import { BiArrowFromBottom, BiArrowToTop} from "react-icons/bi"
import smooth from "react-scroll/modules/mixins/smooth";
import { classNames } from "./className";



export const ScrollToTop = () => {
  const [isVisible,setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.scrollY > 300){
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }

  useEffect(()=>{
    window.addEventListener("scroll", toggleVisibility)

    return()=>{
      window.removeEventListener("scroll",toggleVisibility)
    }
  },[])

  return (
    <div className=" fixed bottom-2 right-2">
      <button onClick={scrollToTop} className={classNames(
        isVisible? " opacity-100": "opacity-0","inline-flex items-center p-3 rounded-full shadow-sm text-red-700 bg-yellow-50 transition-opacity hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 m-5 focus:ring-yellow-400 "
      )}>
        <BiArrowFromBottom className=" h-7 w-6" aria-hidden="true"/>
      </button>
    </div>
  )

}