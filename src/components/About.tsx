import Title from "./ui/Title"
import Image
 from "next/image"
const About = () => {
  return (
    <div className="container sections items-center text-center gap-5 w-[55vw]" id='about'>
        <Title title='About Us'/>
        <p className="text-gray-500 text-xl ">
            At <span className="text-yellow-500 font-semibold">Oficina Número 1</span>, we combine{" "}
            <span className="text-yellow-500">precision</span>,{" "}
            <span className="text-yellow-500">innovation</span>, and passion for cars.
        </p>
        <Image src='/images/team-3.png' width={1400} height={800} alt='team-image' className="h-[50vh] w-auto"/>
        <p className="text-gray-500 text-xl ">Our team of experts delivers high-quality maintenance, detailing, and diagnostics for every type of vehicle — from daily rides to high-performance machines.</p>
        <Image src='/images/service-mode-1.png' width={1400} height={800} alt='team-image' className="h-[50vh] w-auto mt-10"/>
        <p className="text-gray-500 text-xl">We believe in transparency, efficiency, and excellence.
        Every service we provide reflects our commitment to keeping your car in its best condition, with tools and technology that meet the highest standards.</p>
    </div>
    
  )
}

export default About