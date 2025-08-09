import { performances } from '../data/performances';
import { useMemo } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Performances() {
  usePageTitle('공연 일정');
  const { upcoming, past } = useMemo(() => {
    const today = new Date(new Date().toDateString());
    const upcoming = [];
    const past = [];
    performances.forEach((p) => {
      const d = new Date(p.date);
      (d >= today ? upcoming : past).push(p);
    });
    upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
    past.sort((a, b) => new Date(b.date) - new Date(a.date));
    return { upcoming, past };
  }, []);

  return (
    <div>
      <h2>판소리 공연 일정 및 리뷰</h2>

      <div className="section card">
        <h3>다가오는 공연</h3>
        {upcoming.length === 0 ? (
          <p>예정된 공연이 없습니다.</p>
        ) : (
          <ul>
            {upcoming.map((p) => (
              <li key={p.id}>
                <strong>{p.date}</strong> · {p.title} — {p.venue} ({p.city})
                <div>{p.description}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section card">
        <h3>지난 공연</h3>
        {past.length === 0 ? (
          <p>지난 공연 기록이 없습니다.</p>
        ) : (
          <ul>
            {past.map((p) => (
              <li key={p.id}>
                <strong>{p.date}</strong> · {p.title} — {p.venue} ({p.city})
                <div>{p.description}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section card">
        <h3>리뷰와 피드백</h3>
        <p>공연 후 관객 리뷰와 언론평을 공유합니다. (향후 제출 양식 연동)</p>
      </div>

      <div className="section card">
        <h3>사진 갤러리</h3>
        <p>공연과 연습 현장의 사진을 모아 보여줍니다. (홈 슬라이드와 연동 예정)</p>
      </div>
    </div>
  );
} 