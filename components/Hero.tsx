import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src="/images/img-6.png"
        alt="hero-bg"
        fill
        className="hero-bg"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute container inset-0 flex items-center justify-between">
        <div className='hero-desc'>
            <h1 className="hero-title">Welcome to Oficina</h1>
            <p className="hero-subTitle text-lg text-gray-200">
              O Melhor Oficina do Lunada e Angola.&nbsp;
              <Link
                href="/contact"
                className="hero-subTitle_span"
              >
                Contact
              </Link>{" "}
              us or{" "}
              <Link
                href="/book"
                className="hero-subTitle_span"
              >
                Mark
              </Link>{" "}
              the day that is best for you.
            </p>
            <div className="flex justify-center ">
               <Button className="yellow-btn w-60">Click me</Button>
            </div>
        </div>
        <div className="hero-social">
            <Socials/>
        </div>
      </div>
    </div>
  )
}

export default Hero