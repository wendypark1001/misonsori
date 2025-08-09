import { posts } from '../data/posts';
import { useSeo } from '../hooks/useSeo';

export default function Blog() {
  useSeo({ title: '블로그', description: '판소리·국문학 관련 글과 교육 에세이' });
  return (
    <div>
      <h2>블로그</h2>
      {posts.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        <ul className="section card">
          {posts.map((p) => (
            <li key={p.id}>
              <strong>{p.title}</strong> <span>· {p.date} · {p.category}</span>
              <div>{p.excerpt}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 