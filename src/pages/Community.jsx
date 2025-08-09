import { useSeo } from '../hooks/useSeo';
import { useState } from 'react';

export default function Community() {
  useSeo({ title: '지역·커뮤니티', description: '지역사회와의 협력, 행사 참여, 문의' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>지역사회와의 연결</h2>
      <div className="section card">
        <h3>지역사회 역할</h3>
        <p>판소리 문화를 보호·확산하기 위한 공동체의 역할과 지원 방안을 제시합니다.</p>
      </div>
      <div className="section card">
        <h3>지자체와의 협력</h3>
        <p>경기도·고양시 문화 지원 현황 및 판소리 인구 확대 전략을 소개합니다.</p>
      </div>
      <div className="section card">
        <h3>커뮤니티 참여</h3>
        <p>행사·워크숍·세미나 참여 안내와 신청 폼(추후 연동)을 제공합니다.</p>
      </div>

      <div className="section card">
        <h3>문의하기</h3>
        {submitted ? (
          <p>문의가 접수되었습니다. 빠른 시일 내 회신드리겠습니다.</p>
        ) : (
          <form onSubmit={onSubmit} className="grid">
            <input name="name" placeholder="이름" value={form.name} onChange={onChange} required />
            <input name="email" type="email" placeholder="이메일" value={form.email} onChange={onChange} required />
            <textarea name="message" placeholder="문의 내용" value={form.message} onChange={onChange} rows={4} required />
            <button className="button" type="submit">보내기</button>
          </form>
        )}
      </div>
    </div>
  );
} 