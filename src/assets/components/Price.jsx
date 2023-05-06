import IconMusic from '../images/icon-music.svg'

export default function Price() {
  return(
    <div className='inline-flex w-full sm: p-4 justify-between items-center bg-[#F7F9FF] bg-blend-multiply h-[81px] rounded-[11px]'>
      <div className='inline-flex gap-5'>
        <img src={IconMusic} alt="" className='w-12 h-12' />
        <div className='text-[14px]'>
          <h3>Annual Plan</h3>
          <span className='font-medium'>$59.99/year</span>
        </div>
      </div>
      <a href="#" className='text-[#382AE1] underline font-bold text-[13px] sm:text-[14px] hover:text-hover hover:no-underline'>Change</a>
    </div>
  )
}
