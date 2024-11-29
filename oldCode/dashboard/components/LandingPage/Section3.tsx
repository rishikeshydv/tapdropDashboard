import React,{useEffect} from "react";
import Link from "next/link"

export default function Section3() {
  useEffect(() => {
    const container = document.querySelector('.image-container');
    if (container) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    }
  }, []);

    return (

        <div className='overflow-x-auto image-container flex gap-10'>
        <img src="CUDO.webp" alt="" style={{width:200,height:100}} className=""/>
        <img src="LOOTYG.webp" alt="" style={{width:200,height:80}} className="mt-3"/>
        <img src="SDAO.webp" alt="" style={{width:200,height:80}} className="mt-3"/>
        <img src="SLG.WEBP" alt="" style={{width:200,height:80}} className="mt-3"/>
      </div>

   );
};
