import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div className="w-95 rounded-3xl bg-gradient-to-b from-[#222933] to-[#171e27] p-8 pb-4 font-overpass text-[0.9375rem] tracking-wider">
      { finalized && selectedChoice > -1 ? <ThankYouView selectedChoice={selectedChoice} /> : <RatingSelectView selectedChoice={selectedChoice} onSelect={onSelect} finalize={finalize} /> }
    </div>
  );
}

// Allows user to choose an option and submit it.
function RatingSelectView({ selectedChoice, onSelect, finalize }) {
  return (
    <>
      <header>
        <div className="mb-7 flex w-11 justify-center rounded-full bg-[#262f38]">
          <img src={starIcon} alt="orange star" className="p-3.5" />
        </div>
        <h1 className="text-[1.6rem] font-normal text-white">How did we do?</h1>
      </header>
      <form name="rating" className="mt-3" autoComplete="off" noValidate>
        <fieldset className="border-none">
          <legend className="break-words text-[0.75rem] leading-5 text-custom-mediumgrey">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</legend>
          <div className="my-7 flex flex-row justify-center">
          {
            Array.from([1,2,3,4,5]).map((choice, index) => 
              (
              <div className="w-16" key={index}>
                <input type="radio" id={`r-${choice}`} key={`r-${index}`} name="rating" value={choice} onChange={onSelect(choice)} checked={selectedChoice === choice ? 'checked' : ''} className="hidden" />
                <label htmlFor={`r-${choice}`} key={`l-${index}`} className={`${selectedChoice === choice ? 'bg-custom-orange text-white ' : 'bg-[#262f38] text-gray-500 hover:bg-gray-500 hover:text-white '} cursor-pointer rounded-full px-[1.15rem] py-[0.75rem] active:bg-custom-orange`}>{ choice }</label>
              </div>
              )
            )
          }
          </div>
        </fieldset>
        <div className="mt-3">
          <button type="submit" className="w-full rounded-full bg-custom-orange p-2.5 text-sm uppercase tracking-[0.15em] text-white hover:bg-white hover:text-custom-orange" onClick={finalize} disabled={selectedChoice === -1}>Submit</button>
        </div>
      </form>
    </>
  );
}

RatingSelectView.propTypes = {
  selectedChoice: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  finalize: PropTypes.func.isRequired
};

// Presents a "Thank You" after user selects a value
function ThankYouView({ selectedChoice }) {
  return (
    <div className="mb-7 flex flex-col items-center">
      <header>
        <div className='mb-7'>
          <img src={thankYouIcon} alt='thank you' />
        </div>
        <div className="mb-7 rounded-full bg-[#253035] p-1 px-5">
          <span className="text-custom-xs tracking-wider text-custom-orange">You selected { selectedChoice } out of 5</span>
        </div>
      </header>
      <section>
        <h1 className="text-center text-2xl text-white decoration-from-font">Thank you!</h1>
        <p className="mt-3 break-words text-center text-custom-xs text-custom-mediumgrey">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!  
        </p>
      </section>
    </div>
  );
}

ThankYouView.propTypes = {
  selectedChoice: PropTypes.number.isRequired
};
