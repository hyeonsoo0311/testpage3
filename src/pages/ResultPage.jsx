import React from 'react';

const ResultPage = ({ result }) => {
  if (!result) return <p>결과를 찾을 수 없습니다.</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>테스트 결과</h1>
      <p>총점: {result.score}</p>
      <h2>당신은... <strong>{result.type}</strong> 유형입니다!</h2>
    </div>
  );
};

export default ResultPage;