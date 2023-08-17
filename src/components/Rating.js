import { useState } from 'react';

import starIcon from '../images/icon-star.svg';
import thankYouIcon from '../images/illustration-thank-you.svg';

// Wrapper container
export default function Rating() {
  const [selectedChoice, setSelectedChoice] = useState(-1);
  const [finalized, setFinalized] = useState(false);
  
  const onSelect = (selected) => () => setSelectedChoice(selected);
  const finalize = (e) => {
    e.preventDefault();
    setFinalized(true);
  };
  
  return (
    <div className="w-95 py-8 px-8 pb-4 bg-gradient-to-b from-[#222933] to-[#171e27] rounded-3xl font-overpass text-[0.9375rem] tracking-wider">
      { finalized && selectedChoice > -1 ? <ThankYouView selectedChoice={selectedChoice} /> : <RatingSelectView selectedChoice={selectedChoice} onSelect={onSelect} finalize={finalize} /> }
    </div>
  );
}

// Allows user to choose an option and submit it.
function RatingSelectView({ selectedChoice, onSelect, finalize }) {
  return (
    <>
      <header>
        <div className="mb-7 w-11 bg-[#262f38] flex align-center justify-center rounded-full">
          <img src={starIcon} alt="orange star" className="p-3.5" />
        </div>
        <h1 className="text-white font-normal text-[1.6rem]">How did we do?</h1>
      </header>
      <form name="rating" className="mt-3" autoComplete="off" noValidate>
        <fieldset className="border-none">
          <legend className="text-custom-mediumgrey text-[0.75rem] leading-5 break-words">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</legend>
          <div className="my-7 flex flex-row justify-center space-evenly">
          {
            Array.from([1,2,3,4,5]).map((choice, index) => 
              (
              <div className="w-16" key={index}>
                <input type="radio" id={`r-${choice}`} key={`r-${index}`} name="rating" value={choice} onChange={onSelect(choice)} checked={selectedChoice === choice ? 'checked' : ''} className="hidden" />
                <label htmlFor={`r-${choice}`} key={`l-${index}`} className={`${selectedChoice === choice ? 'bg-custom-orange text-white ' : 'bg-[#262f38] hover:bg-gray-500 text-gray-500 hover:text-white '} active:bg-custom-orange rounded-full cursor-pointer py-[0.75rem] px-[1.15rem]`}>{ choice }</label>
              </div>
              )
            )
          }
          </div>
        </fieldset>
        <div className="mt-3">
          <button type="submit" className="p-2.5 w-full rounded-full text-white hover:text-custom-orange text-sm bg-custom-orange hover:bg-white uppercase tracking-[0.15em]" onClick={finalize} disabled={selectedChoice === -1}>Submit</button>
        </div>
      </form>
    </>
  );
}

// Presents a "Thank You" after user selects a value
function ThankYouView({ selectedChoice }) {
  return (
    <div className="flex flex-col items-center mb-7">
      <header>
        <div className='mb-7'>
          <img src={thankYouIcon} alt='thank you' />
        </div>
        <div className="mb-7 p-1 pl-5 pr-5 bg-[#253035] rounded-full">
          <span className="text-custom-orange text-custom-xs tracking-wider">You selected { selectedChoice } out of 5</span>
        </div>
      </header>
      <section>
        <h1 className="text-white decoration-from-font text-center text-2xl">Thank you!</h1>
        <p className="mt-3 text-custom-mediumgrey text-custom-xs text-center break-words">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!  
        </p>
      </section>
    </div>
  );
}
