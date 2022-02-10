import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'This is feedback 3',
      rating: 7,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Edit Feedback
  const editFeedbackHandler = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Delete Feedback
  const deleteFeedbackHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add Feedback
  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  //Update Feedback item
  const updateFeedbackHandler = (id, newFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...newFeedback } : item
      )
    );
  };

  const feedbackContext = {
    feedback,
    feedbackEdit,
    deleteFeedback: deleteFeedbackHandler,
    addFeedback: addFeedbackHandler,
    editFeedback: editFeedbackHandler,
    updateFeedback: updateFeedbackHandler,
  };
  return (
    <FeedbackContext.Provider value={feedbackContext}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
