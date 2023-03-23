import Topbar from "../../components/topbar/Topbar";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className="mt-10 w-2/3 mx-auto p-10 bg-white">
          <h2 className="text-xl font-quicksand font-medium mb-4 text-center">HOME</h2>
          <p className="text-gray-700 leading-relaxed font-montserrat font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores, 
          voluptates, quod, voluptas quia voluptatem quae accusantium quibusdam quidem 
          voluptatum quos. Quisquam, quae accusantium. Quisquam, quae accusantium. 
          Quisquam, quae accusantium. 
          </p>
        </div>
    </div>

  )
}