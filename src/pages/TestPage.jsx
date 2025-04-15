import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, text: "상황에 따라 내 태도나 성격이 달라질 수 있다고 생각한다." },
  { id: 2, text: "타인의 기대에 맞추기보다 내 방식대로 행동하려 한다." },
  { id: 3, text: "예기치 못한 상황에서도 차분함을 유지하려 노력한다." },
  { id: 4, text: "감정을 글이나 말로 표현하는 것이 어렵지 않다." },
  { id: 5, text: "혼자 있는 시간이 지루하게 느껴질 때가 있다." },
  { id: 6, text: "일상적인 대화 속에서도 의미를 찾으려 한다." },
  { id: 7, text: "실패를 두려워하기보다 배움의 기회로 여긴다." },
  { id: 8, text: "새로운 환경에서는 조심스럽게 접근하는 편이다." },
  { id: 9, text: "반복적인 일보다 변화가 많은 일을 선호한다." },
  { id: 10, text: "내가 어떤 사람인지 종종 스스로에게 묻는다." },
  { id: 11, text: "타인의 감정에 쉽게 영향을 받는 편이다." },
  { id: 12, text: "감정보다는 사실을 중심으로 생각하려 한다." },
  { id: 13, text: "어릴 때의 경험이 지금의 나에게 큰 영향을 줬다고 느낀다." },
  { id: 14, text: "말보다 행동이 사람을 더 잘 보여준다고 생각한다." },
  { id: 15, text: "일을 맡았을 때 끝까지 해내야 마음이 편하다." },
  { id: 16, text: "일의 순서를 정하고 계획대로 처리하는 걸 좋아한다." },
  { id: 17, text: "즉흥적인 활동에서 즐거움을 느낄 때가 있다." },
  { id: 18, text: "남들과 다른 생각을 갖는 것을 두려워하지 않는다." },
  { id: 19, text: "대화를 통해 상대의 의도를 파악하려 노력한다." },
  { id: 20, text: "갑작스러운 변화에 쉽게 적응하는 편이다." },
  { id: 21, text: "나를 있는 그대로 받아주는 사람이 편하게 느껴진다." },
  { id: 22, text: "의견 충돌이 있어도 대화를 통해 해결하고자 한다." },
  { id: 23, text: "마음에 드는 물건은 오래도록 아껴 쓰는 편이다." },
  { id: 24, text: "생각을 정리할 때 글을 쓰거나 그림을 그린다." },
  { id: 25, text: "같은 일을 반복하면 지루함을 느끼는 편이다." },
  { id: 26, text: "혼자 고민하는 시간은 나에게 꼭 필요하다." },
  { id: 27, text: "감정이 얼굴에 잘 드러나는 편이다." },
  { id: 28, text: "평소에는 조용하지만 필요할 땐 의견을 분명히 말한다." },
  { id: 29, text: "혼자 결정하는 것보다 상의하는 걸 선호한다." },
  { id: 30, text: "질문을 많이 던지는 편이다." },
  { id: 31, text: "다양한 사람과 대화하면서 시야가 넓어진다고 느낀다." },
  { id: 32, text: "내가 하는 행동이 다른 사람에게 어떤 영향을 줄지 생각한다." },
  { id: 33, text: "감정을 억누르기보다는 자연스럽게 표현하는 것이 낫다고 본다." },
  { id: 34, text: "실수를 인정하고 바로잡는 것이 중요하다고 생각한다." },
  { id: 35, text: "현실적인 해결책을 찾는 데 집중하는 편이다." },
  { id: 36, text: "추상적인 개념보다는 구체적인 예시가 더 이해가 잘 된다." },
  { id: 37, text: "하루를 돌아보며 스스로에게 질문을 던지는 습관이 있다." },
  { id: 38, text: "남들보다 빠르게 반응하기보다 한 번 더 생각하고 움직인다." },
  { id: 39, text: "무언가를 설명할 때 예를 드는 걸 자주 사용한다." },
  { id: 40, text: "감정을 너무 자주 드러내면 불안해질 때가 있다." },
  { id: 41, text: "자주 사용하는 표현이나 말투에 나만의 색깔이 있다고 느낀다." },
  { id: 42, text: "긴장을 푸는 자신만의 방법이 있다." },
  { id: 43, text: "완벽하지 않아도 시도해보는 것이 더 중요하다고 생각한다." },
  { id: 44, text: "여러 가지 역할을 동시에 수행하는 일이 어렵지 않다." },
  { id: 45, text: "자신만의 루틴이 깨지면 불편함을 느낀다." },
  { id: 46, text: "사람 사이의 미묘한 분위기를 빠르게 감지하는 편이다." },
  { id: 47, text: "지루함을 느끼면 바로 새로운 자극을 찾는다." },
  { id: 48, text: "일이 잘 안 풀릴 때 감정적으로 반응할 때가 있다." },
  { id: 49, text: "생각보다 행동이 먼저일 때가 종종 있다." },
  { id: 50, text: "내가 경험한 일은 누군가에게 도움이 될 수 있다고 믿는다." }
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
