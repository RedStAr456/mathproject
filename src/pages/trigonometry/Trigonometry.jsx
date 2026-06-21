import { Link } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import '../../styles/subjects.css'

export default function Trigonometry() {
  return (
    <MainLayout>

      <div className="subject-page">

        <section className="subject-hero">
          <div className="subject-badge">Раздел</div>
          <h1>Тригонометрия</h1>
          <p>
            Основные и расширенные формулы, уравнения и преобразования.
          </p>
        </section>

        <h2 className="subject-title">Темы раздела</h2>

        <div className="topic-grid">

          <Link to="/trigonometry/trig-circle" className="topic-card">
            <h3>Тригонометрическая окружность</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/sinus" className="topic-card">
            <h3>Синус</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/cosinus" className="topic-card">
            <h3>Косинус</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/tangent" className="topic-card">
            <h3>Тангенс</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/cotangent" className="topic-card">
            <h3>Котангенс</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/formulas" className="topic-card">
            <h3>Основные формулы</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/reduction-formulas" className="topic-card">
            <h3>Формулы приведения</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/sum-and-difference" className="topic-card">
            <h3>Формулы суммы и разности</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/trigonometry/equations" className="topic-card">
            <h3>Тригонометрические уравнения</h3>
            <span>Открыть →</span>
          </Link>

        </div>

      </div>

    </MainLayout>
  )
}