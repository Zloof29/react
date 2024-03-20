import { FeedbackItem } from "./FeedbackItem";

export interface FeedbackData {
  id: number;
  rating: number;
  text: string;
}

export function FeedbackList({ feedback }: { feedback: FeedbackData[] }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
