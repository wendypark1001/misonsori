export default function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>판소리와 국문학의 만남</h1>
          <p>김미선 지부장의 교육 철학과 연구 비전을 바탕으로, 이론과 실기를 연결하는 배움의 장을 엽니다.</p>
          <a className="button" href="/education">교육 콘텐츠 보러가기</a>
        </div>
        <div className="card">
          <strong>슬라이드 쇼</strong>
          <p>주요 공연 장면(적벽가, 흥보가 완창 등) 사진/영상이 들어갈 영역</p>
        </div>
      </section>

      <section className="section grid">
        <div className="card">
          <h3>소개</h3>
          <p>국립국악고, 서울대 국악과, 이화여대 음대, 경희대 대학원 국문학 박사과정의 여정을 소개합니다.</p>
        </div>
        <div className="card">
          <h3>공연 일정</h3>
          <p>다가오는 판소리 공연과 워크숍 일정을 확인하세요.</p>
        </div>
        <div className="card">
          <h3>문화적 해석</h3>
          <p>판소리 속 해학과 문학적 깊이를 탐구하는 에세이와 영상.</p>
        </div>
      </section>
    </div>
  );
} 