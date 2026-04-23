import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="resume-shell not-found-shell">
      <section className="not-found-card">
        <p className="not-found-code">404</p>
        <h1>页面不存在</h1>
        <p>你访问的地址无效或内容已被移除。</p>
        <Link to="/" className="back-link">
          返回首页
        </Link>
      </section>
    </main>
  )
}
