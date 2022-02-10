import React, { useState ,useContext,useEffect} from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function RatingSelect({ onSelect }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(()=>{
    setSelected(feedbackEdit.item.rating)
  },[feedbackEdit])
  const changeHandler = (e) => {
    setSelected(+e.target.value);
    onSelect(+e.target.value);
  };
  

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={changeHandler}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          onChange={changeHandler}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          onChange={changeHandler}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          name='rating'
          value='4'
          onChange={changeHandler}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          name='rating'
          value='5'
          onChange={changeHandler}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          name='rating'
          value='6'
          onChange={changeHandler}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          name='rating'
          value='7'
          onChange={changeHandler}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          name='rating'
          value='8'
          onChange={changeHandler}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          name='rating'
          value='9'
          onChange={changeHandler}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          name='rating'
          value='10'
          onChange={changeHandler}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
