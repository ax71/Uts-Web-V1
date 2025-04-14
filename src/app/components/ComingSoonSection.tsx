// "use client";

// import Image from "next/image";

// const comingSoonGames = [
//   {
//     title: "Call of Duty®: Modern Warfare® II",
//     image: "/images/cod-mw2.png",
//   },
//   {
//     title: "EA SPORTS™ FIFA 23",
//     image: "/images/fifa23.png",
//   },
//   {
//     title: "Resident Evil 4 - Remake",
//     image: "/images/re4.png",
//   },
//   {
//     title: "Call of Duty®: Modern Warfare® II",
//     image: "/images/nba2k.png",
//   },
//   {
//     title: "ALIEN™: Dark Descent",
//     image: "/images/alien.png",
//   },
// ];

// const ComingSoonSection = () => {
//   return (
//     <section className="bg-black text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4">
//           <div className="relative col-span-2 row-span-1">
//             <Image
//               src={comingSoonGames[0].image}
//               alt={comingSoonGames[0].title}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-xl">
//               <h3 className="font-semibold text-sm mb-2">
//                 {comingSoonGames[0].title}
//               </h3>
//               <button className="text-white text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition">
//                 Pre-order now!
//               </button>
//             </div>
//           </div>

//           <div className="relative col-span-1 row-span-1">
//             <Image
//               src={comingSoonGames[1].image}
//               alt={comingSoonGames[1].title}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-xl">
//               <h3 className="font-semibold text-sm mb-2">
//                 {comingSoonGames[1].title}
//               </h3>
//               <button className="text-white text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition">
//                 Pre-order now!
//               </button>
//             </div>
//           </div>

//           <div className="relative col-span-1 row-span-1">
//             <Image
//               src={comingSoonGames[2].image}
//               alt={comingSoonGames[2].title}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-xl">
//               <h3 className="font-semibold text-sm mb-2">
//                 {comingSoonGames[2].title}
//               </h3>
//               <button className="text-white text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition">
//                 Pre-order now!
//               </button>
//             </div>
//           </div>

//           <div className="relative col-span-2 row-span-1">
//             <Image
//               src={comingSoonGames[3].image}
//               alt={comingSoonGames[3].title}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-xl">
//               <h3 className="font-semibold text-sm mb-2">
//                 {comingSoonGames[3].title}
//               </h3>
//               <button className="text-white text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition">
//                 Pre-order now!
//               </button>
//             </div>
//           </div>

//           <div className="relative col-span-2 md:col-span-1 row-span-1">
//             <Image
//               src={comingSoonGames[4].image}
//               alt={comingSoonGames[4].title}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-xl">
//               <h3 className="font-semibold text-sm mb-2">
//                 {comingSoonGames[4].title}
//               </h3>
//               <button className="text-white text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition">
//                 Pre-order now!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComingSoonSection;
