import React from "react";

function Card() {
  const data = [
    {
      Name: "Amazon Basics",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.m rerum similique, eveniet, iuremolestias ipsum hic in alias",
      img: "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      instock: true,
    },
    {
      Name: "Apple Basics",
      Description:
        "Lopsum hic in arem, ipsum dolor sit amet consectetur adipisicing elit.m rerum similique, eveniet, iuremolestias ipsum hic in alias",
      img: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlfGVufDB8fDB8fHww",
      instock: false,
    },
    {
      Name: "Samsung",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.m rerum similique, eveniet, iuremolestias ipsum hic in sit amet consectetur adipisicing elit.m rerum similiqulias",
      img: "https://images.unsplash.com/photo-1609252924198-30b8cb324d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbXN1bmd8ZW58MHx8MHx8fDA%3D",
      instock: true,
    },
    {
      Name: "Lenovo",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.m rerum similique, eveniet, iuremolestias ipsum hic in sit amet consectetur adipisicing elit.m rerum similiqulias",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlbm92b3xlbnwwfHwwfHx8MA%3D%3D",
      instock: false,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div
          key={index}
          className=" w-52 bg-zinc-100 rounded-md overflow-hidden flex-row"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover" src={elem.img} alt="" />
          </div>
          <div className="w-full px-3 py-4">
            <h1 className="text-center">{elem.Name}</h1>
            <p className="text-xs mt-5 ">{elem.Description}</p>
          </div>
          <button
            onClick={() => {
              alert(elem.instock ? "Added to Cart" : "Unable to add");
            }}
            className={`${
              elem.instock ? "bg-blue-700" : " bg-red-600"
            } text-gray-100 px-2 py-2 rounded-lg ml-2 mb-2`}
          >
            {elem.instock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;

// left-1/2 top-1/2  -translate-x-[50%] -translate-y-[50%]
