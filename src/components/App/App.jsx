import Feedback from "components/Feedback/Feedback";

import feedbackItems from "components/DataJson/feedbackItems.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback items={feedbackItems} />
    </div>
  );
};
