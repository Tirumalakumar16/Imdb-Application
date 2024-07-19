import React, { useEffect, useState } from "react";

function Banner({ BannerPoster, title }) {
  //https://m.media-amazon.com/images/S/pv-target-images/4efeef69b8275f9f48bb283250d658dc08f6165abeafc2dfccb01e5df90f66cb.jpg
  let posterArray = [
    {
      backDrop_path: "fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
      title: "Kingdom of the Planet of the Apes",
    },
    {
      backDrop_path: "dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
      title: "Deadpool & Wolverine",
    },
    {
      backDrop_path: "tqSg1hHiSWhHAhnjDhhevaFGsP0.jpg",
      title: "The Convert",
    },
    {
      backDrop_path: "dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
      title: "Deadpool & Wolverine",
    },
    {
      backDrop_path: "wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
      title: "Furiosa: A Mad Max Saga",
    },
    {
      backDrop_path: "xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      title: "Dune: Part Two",
    },
    {
      backDrop_path: "H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
      title: "The Fall Guy",
    },
  ];


   let[index , setIndex] = useState(0)
  useEffect(()=>{
    let randomArray = Math.round(Math.random() * 5);
    setIndex(randomArray)
  },[])

  

  return (
    <div
      className="flex items-start justify-center min-w-full  md:h-[100vh] bg-cover bg-center w-screen flex-nowrap cursor-pointer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterArray[index].backDrop_path})`,
      }}
    >
      <div className="text-white text-2xl">
        {posterArray[index].title}
      </div>
    </div>
  );
}

export default Banner;
