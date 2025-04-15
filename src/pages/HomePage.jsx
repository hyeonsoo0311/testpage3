import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>성격 분석 테스트</h1>
      <p>총 50문항, 5점 척도로 응답해주세요.</p>
      <button onClick={() => navigate('/test')}>테스트 시작하기</button>
    </div>
  );
};

export default HomePage;