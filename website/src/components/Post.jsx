
// DISCLAIMER: This code is deprecated but is being retained for potential future use.

import {useEffect} from "react"; // for importing aos
import AOS from 'aos'; // importing aos
import 'aos/dist/aos.css'; // importing aos

const Post = ({ title, date, text }) => {
  return (
    <div className='flex-col bg-custom-purple rounded-lg p-10 m-10 justify-start items-center gap-10 flex'>
      <div className='  text-white text-3xl font-normal '>{date}</div>
      <div className=' text-center text-white text-5xl font-brick underline'>{title}</div>
      <div className=' text-white text-3xl  '>{text}</div>
    </div>
  );
};

export default Post;
