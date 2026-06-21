import { Link } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import '../../styles/subjects.css'

export default function Probability() {
  return (
    <MainLayout>
      <div className="subject-page">

        <section className="subject-hero">
          <div className="subject-badge">Раздел</div>
          <h1>Теория вероятностей</h1>
          <p>
            Основные понятия вероятности, формула Байеса и статистика.
          </p>
        </section>

        <h2 className="subject-title">Темы раздела</h2>
        <div className="topic-grid">

          <Link to="/probability/events" className="topic-card">
            <h3>События</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/probability/classical" className="topic-card">
            <h3>Классическая вероятность</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/probability/bayes" className="topic-card">
            <h3>Формула Байеса</h3>
            <span>Открыть →</span>
          </Link>

          <Link to="/probability/statistics" className="topic-card">
            <h3>Статистика</h3>
            <span>Открыть →</span>
          </Link>

        </div>

      </div>
    </MainLayout>
  )
}