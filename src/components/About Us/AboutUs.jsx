import React from "react";
import { NavLink } from "react-router-dom";
import img1 from './Notes Images/img1.jpg';
import img2 from './Notes Images/img2.jpg';
import img3 from './Notes Images/img3.jpg';
import img4 from './Notes Images/img4.jpg';
import img5 from './Notes Images/img5.jpg';
import img6 from './Notes Images/img6.avif';
import img7 from './Notes Images/img7.jpg';
import img8 from './Notes Images/img8.jpg';
import img9 from './Notes Images/img9.webp';


const AboutUs = () => {
  return (
    <div className="rounded-md shadow-sm bg-yellow-800 my-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

        {/* 1st */}
      <section className="bg-cyan-500 py-24 relative rounded-md">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <div
              className="bg-gray-700 rounded-xl w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
            >
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src={img1}
                  alt="About Us"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src={img7}
                alt="About Us"
              />
            </div>

            {/* Content Section */}
            <div className="shadow-md bg-neutral-200 p-2 rounded-lg w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Our Vision and Mission
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  This website was created to bridge that gap and make studying more efficient and stress-free. By providing organized and easily accessible notes and PYQs, we aim to simplify your preparation process. Whether you’re trying to master a topic or review past papers, everything you need is now just a click away.
                  <br />
                  To empower students with the right resources at the right time, making academic success achievable for everyone.
                  </p>
                </div>

                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">9</h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Depatments</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">100+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">PYQs and Notes</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">3000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Users</h6>
                  </div>
                </div>
              </div>

              <NavLink to={'/'}>

              <button 
              
              className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">Explore</span>
              </button>

              </NavLink>
            </div>
          </div>
        </div>
      </section>





         {/* 2nd */}
      <div className="bg-gray-100 p-6 lg:p-10 my-8 rounded-xl shadow-lg">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            {/* Text Section */}
            <div className="bg-slate-300 p-2 text-justify space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">What Sets Us Apart?</h2>
            <ul className="space-y-4">
                <li className="flex gap-4">
                
                <p className="text-gray-600">
                    <strong>Collaborative Effort:</strong> Our platform thrives on contributions from students and educators,
                    ensuring a rich and diverse repository of materials.
                </p>
                </li>
                <li className="flex gap-4">
                
                <p className="text-gray-600">
                    <strong>User-Friendly Design:</strong> Navigate effortlessly through intuitive features tailored for both
                    quick searches and in-depth exploration.
                </p>
                </li>
                <li>
                <p className="text-gray-600">
                    <strong>Consistent Updates:</strong> Stay ahead with regularly updated content, keeping you informed about
                    the latest exam trends and patterns.
                </p>
                </li>
            </ul>
            </div>

            {/* Image Section */}
            <div className="bg-orange-300 p-3 rounded-md flex gap-6">
            <div className="shadow-xl rounded-xl flex-1">
                <img
                className="rounded-xl object-cover w-full h-full"
                src={img3}
                alt="Empowering students"
                />
            </div>
            <div className="shadow-lg rounded-xl flex-1 hidden lg:block">
                <img
                className="rounded-xl object-cover w-full h-full"
                src={img6}
                alt="Academic Growth"
                />
            </div>
            </div>
        </div>
        </div>




        {/* 3rd */}

      <div className="bg-green-200 flex flex-col lg:flex-row justify-between gap-8 mt-12 rounded-md">
        <div className="m-5 p-2 bg-sky-200 shadow-sm w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold leading-9 text-gray-800 pb-4">About Us</h1>
          <p className="text-justify font-normal text-base leading-6 text-gray-600">
          At Academic Vault, we believe that knowledge should be accessible to everyone, anytime, anywhere. Our platform is more than just a collection of notes and previous year question papers—it’s a community-driven initiative to transform the way students approach learning.

          <br />

          We understand that every student’s journey is unique. That’s why we’ve built a platform that adapts to your needs, providing resources that save you time, reduce stress, and enhance your confidence for exams.
          </p>
        </div>
        <div className="m-2 shadow-md w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src={img9}
            alt="A group of People"
          />
        </div>
      </div>

      {/* 4th */}

      <div className="mt-12 bg-red-200 flex lg:flex-row flex-col justify-between gap-8 pt-12 rounded-md">
        
        <div className="bg-lime-300 shadow-sm p-2 m-5 w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
          <p className="text-justify font-normal text-base leading-6 text-gray-600">
          During our exam preparations, We often faced challenges accessing notes, previous year question papers (PYQs), and understanding the exam patterns. It was a frustrating experience, spending hours searching for resources when time was already limited. We realized that many students face the same struggle—wasting precious time trying to gather materials instead of focusing on their studies.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="bg-orange-200 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-lg rounded-md mr-3 p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-28 h-28 object-cover rounded-full"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Harsh Singh</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-28 h-28 object-cover rounded-full"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Atishay Jain</p>
            </div>
          </div>
        </div>
      </div>
      



      

    </div>
  );
};

export default AboutUs;
