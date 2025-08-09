import { useSeo } from '../hooks/useSeo';

export default function Education() {
  useSeo({ title: '교육', description: '온라인 강의, 워크숍, 판소리 다섯 마당 학습 자료와 인터랙티브 실습' });
  return (
    <div>
      <h2>판소리 교육 콘텐츠</h2>
      <div className="section card">
        <h3>온라인 강의·워크숍</h3>
        <p>이론과 실기를 함께 배우는 온라인 강의와 오프라인 워크숍 안내.</p>
        <ul>
          <li>기초 발성, 발음 교정</li>
          <li>다섯 마당 이론 개관</li>
          <li>명창 레퍼토리 실습</li>
        </ul>
      </div>
      <div className="section card">
        <h3>학습 자료</h3>
        <p>춘향가·흥보가·심청가·수궁가·적벽가의 이론 분석과 실기 노트 제공.</p>
      </div>
      <div className="section card">
        <h3>인터랙티브 콘텐츠</h3>
        <p>발음 교정, 창법 훈련 등 참여형 학습 도구(향후 업로드).</p>
      </div>
    </div>
  );
} 