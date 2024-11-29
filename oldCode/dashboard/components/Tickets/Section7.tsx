import React from 'react'
import Bottom from '@/services/homepage/Bottom'
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
export default function Section7() {
  return (
    <div className='px-20 mt-16 py-4'>
<section>
    {/* This DIV will be handling the social media icons */}
    <div className=' flex justify-between text-black'>
  <ul className='flex'>
    <li className='mr-4'><AiFillTwitterCircle size="50px" className='text-black'/></li>
    <li className='mr-4'><AiOutlineMail size="50px" className='text-black'/></li>
  </ul>
  
  <div className='flex flex-row'>
    <div className="ml-8 mr-8">
    <Bottom
      title="Resources"
      opt1="FAQ"
      opt2="Wiki"
      opt3=""
    />
    </div>
    <div className="ml-8 mr-8"> {/* Add margin between each Bottom component */}
      <Bottom 
        title="Legal"
        opt1="Privacy Policy"
        opt2="Terms of Service"
        opt3=""
      />
    </div>
    <div className="ml-8 mr-8"> {/* Add margin between each Bottom component */}
      <Bottom 
        title="Company"
        opt1="Contact"
        opt2="Email"
        opt3="Discord"
      />
    </div>
  </div>
</div>


</section>
<h1 className='text-center mt-2'>2024 © All rights reserved by Tapdrop Inc.</h1>
    </div>
  )
}
