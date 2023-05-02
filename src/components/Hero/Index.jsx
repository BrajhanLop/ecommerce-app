import { HiOutlinePlayCircle } from 'react-icons/hi2'
import { HiOutlineMinus } from 'react-icons/hi'
import hero1 from '../../assets/images/hero1.png'
import hero2 from '../../assets/images/hero2.png'
import hero3 from '../../assets/images/hero3.png'
import hero4 from '../../assets/images/hero4.png'
import hero5 from '../../assets/images/hero5.png'
import { useState } from 'react'

export const Hero = () => {
  const [img, setImg] = useState(0)
  const [animate, setAnimate] = useState(false)

  const heroImgs = [hero1, hero2, hero3, hero4, hero5]

  const handleNext = () => {
    setAnimate(true)
    setTimeout(() => {
      setImg(img + 1)
      setAnimate(false)
    }, 500)
  }

  const handleBack = () => {
    setAnimate(true)
    setTimeout(() => {
      setImg(img - 1)
      setAnimate(false)
    }, 500)
  }

  return (
    <section className='relative w-[94%] lg:w-[94%] xl:w-[90%] pb-5 xl:h-[620px]'>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-8 pb-10 max-w-6xl mx-auto'>
        <div className='flex flex-col justify-between'>
          <div className=' hidden w-full lg:flex  lg:flex-col mt-20 '>
            <p
              className={img === 0 ? 'text-[#928656] pl-1' : 'text-black pl-1'}>
              {img + 1}
            </p>
            <HiOutlineMinus className=' text-lg text-[#9E9E9E] ' />
            <p
              className={
                heroImgs.length - 1 === img
                  ? 'text-[#9E9E9E] pl-1'
                  : 'text-black pl-1'
              }>
              {heroImgs.length}
            </p>
          </div>

          <div className=' hidden lg:flex lg:justify-center lg:h-7 lg:gap-2 lg:self-end  '>
            <button
              className={img === 0 ? 'text-[#9E9E9E]' : 'text-black'}
              onClick={handleBack}
              disabled={img === 0}>
              PREV
            </button>
            <p className='text-[#9E9E9E]'>|</p>
            <button
              className={
                heroImgs.length - 1 === img ? 'text-[#9E9E9E]' : 'text-black'
              }
              onClick={handleNext}
              disabled={heroImgs.length - 1 === img}>
              NEXT
            </button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-3  '>
          <div className='flex flex-col lg:w-[55%] pt-5 lg:pb-10 xl:pb-24 lg:pt-20 '>
            <p className=' font-firmebook text-[#928656] text-[16px]'>
              NEW ARRIVAL
            </p>
            <h1 className=' font-marcellus text-[40px] md:text-[60px] md:leading-[65px]'>
              Basic Colours Comeback
            </h1>
            <p className=' font-firmebook text-[#9E9E9E] text-[18px] md:text-[22px]'>
              Less is more never out of date. In the last of this years, basic
              colours will comeback, discover our collections and choose your
              style
            </p>
            <div className='hidden lg:flex lg:mt-5 xl:mt-10 '>
              <button className=' bg-[#928656] px-6 py-2 m-2 text-white mr-4'>
                SHOP NOW
              </button>
              <HiOutlinePlayCircle className=' text-[60px] text-[#9E9E9E] ' />
              <div className=' flex flex-col justify-center'>
                <p className=' font-semibold'>VIEW</p>
                <p className=' font-semibold'>LOOKBOOK</p>
              </div>
            </div>
            <div></div>
          </div>

          <div className=' lg:w-[45%] lg:pt-6 '>
            <img
              className={` h-[400px] md:w-[70%] lg:w-[100%] lg:h-[550px] mx-auto transition-opacity duration-500  w-full   top-0 left-0 object-cover ${
                animate ? 'opacity-0' : 'opacity-100'
              }`}
              src={heroImgs[img]}
              alt=''
            />
          </div>
          <div className='flex mt-2 justify-evenly md:justify-center md:gap-8 lg:hidden'>
            <button className=' bg-[#928656] px-6 py-2 m-2 text-white mr-4 text-[14px]'>
              SHOP NOW
            </button>
            <div className='flex'>
              <HiOutlinePlayCircle className=' text-[60px] text-[#9E9E9E] ' />
              <div className=' flex flex-col justify-center'>
                <p className=' font-semibold text-[14px]'>VIEW</p>
                <p className=' font-semibold text-[14px]'>LOOKBOOK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex justify-center gap-4 mt-3 lg:hidden'>
        <button
          className={img === 0 ? 'text-[#9E9E9E]' : 'text-black'}
          onClick={handleBack}
          disabled={img === 0}>
          PREV
        </button>
        <p className='text-[#9E9E9E]'>|</p>
        <button
          className={
            heroImgs.length - 1 === img ? 'text-[#9E9E9E]' : 'text-black'
          }
          onClick={handleNext}
          disabled={heroImgs.length - 1 === img}>
          NEXT
        </button>
      </div>
    </section>
  )
}
