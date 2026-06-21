import { Link } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import '../../styles/subjects.css'

export default function Logarithms() {
  return (
    <MainLayout>
      <div className="subject-page">

        <section className="subject-hero">
          <div className="subject-badge">Раздел</div>
          <h1>Логарифмы</h1>
          <p>
            Раздел математики, изучающий логарифмы и их свойства.
          </p>
        </section>

        <h2 className="subject-title">Темы раздела</h2>

        <div className="topic-grid">

          <Link to="/logarithms/definition" className="topic-card">
            <h3>Определение логарифма</h3>
            <p>Что такое логарифм</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/logarithms/properties" className="topic-card">
            <h3>Свойства логарифмов</h3>
            <p>Основные правила работы с логарифмами</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/logarithms/equations" className="topic-card">
            <h3>Логарифмические уравнения</h3>
            <p>Решение уравнений с логарифмами</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/logarithms/inequalities" className="topic-card">
            <h3>Логарифмические неравенства</h3>
            <p>Решение неравенств с логарифмами</p>
            <span>Открыть →</span>
          </Link>

        </div>
      </div>
    </MainLayout>
  )
}