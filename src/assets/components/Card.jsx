import HeroImage from '../images/illustration-hero.svg'
import Button from './Button'
import Price from './Price'

export default function Card() {
  return(
    <section>
      <header>
        <img src={HeroImage} alt="" />
      </header>
      <article>
        <div className='text-center'>
          <h1>Order Summary</h1>
          <p className='text-center sm:text-base'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
        <Price />
        <Button />
        <a href="#" className='font-black text-[15px] hover:text-[#1F2E55]'>Cancel Order</a>
      </article>
    </section>
  )
}
