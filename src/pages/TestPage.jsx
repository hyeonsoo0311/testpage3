import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  text: `문항 ${i + 1}: 여기에 질문 내용이 들어갑니다.`,
}));

const TestPage = ({ setResult }) => {
  const [answers, setAnswers] = useState(Array(50).fill(0));
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (value) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const total = newAnswers.reduce((sum, val) => sum + val, 0);
      const type = total > 150 ? "열정적인 사슴" : total > 100 ? "조용한 고양이" : "사려 깊은 거북이";
      setResult({ score: total, type });
      navigate('/result');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{questions[current].text}</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} onClick={() => handleSelect(num)}>
            {num}
          </button>
        ))}
      </div>
      <p>{current + 1} / {questions.length}</p>
    </div>
  );
};

export default TestPage;