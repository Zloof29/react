import { FeedbackData } from "../components/FeedbackList";

export const FeedbackItem = ({ item }: { item: FeedbackData }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      </div>
    </div>
  );
};
