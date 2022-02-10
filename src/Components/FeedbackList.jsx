import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence, animate } from 'framer-motion';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem onDelete={onDelete} key={item.id} item={item} />
  //     ))}
  //   </div>
  // );
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem  key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
