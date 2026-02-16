import AudioButton from '../Common/AudioButton';

export default function QuizQuestion({ question }) {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-4 mb-4">
        <AudioButton text={question.text} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 px-4">
        {question.text}
      </h2>
    </div>
  );
}
