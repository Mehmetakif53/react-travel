import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'


const sliderData =[
    {
        url : "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        url:"https://images.unsplash.com/photo-1666293427315-b5de90d161b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        url:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
]

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0: slide + 1)
    } 
    
    const nextSlide = () => {
        setSlide(slide === 0  ? length -1 : slide - 1)
    } 
    
    return (
    <div className="max-w-[950px] mx-auto px-4 py-16 relative flex justify-center items-center">
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl cursor-pointer left-8"/>
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl  cursor-pointer right-8"/>
           
        {sliderData.map((item, index ) => (
           <div className={index === slide ? "opacity-100" : "opacity-0"}>
                {index === slide && (<img className='w-[900px] h-[400px] rounded-md ' src={item.url} /> )}
           </div>
        ))}
    </div>
  )
}

export default Carousel;
