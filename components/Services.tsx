import Title from "./ui/Title"
import Image from "next/image"

const Services = () => {
  return (
    <div className="container sections">
        <Title title="Services"/>
        <ul className="nav-services gap-[-10]">
          <li>
            <Image src='/images/car-dirty.png' width={2000} height={600} className="h-40vh w-auto" alt='car-image'/>
          </li>
          <li>
            <Image src='/images/car-white.png'  width={2000} height={600} className="h-40vh w-auto" alt='car-image'/>
          </li>
          <li>
            <Image src='/images/car-yellow.png' width={2000} height={600} className="h-40vh w-auto" alt='car-image'/>
          </li>
        </ul>
    </div>
  )
}

export default Services