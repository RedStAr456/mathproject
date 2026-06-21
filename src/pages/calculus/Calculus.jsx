import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import '../../styles/subjects.css'

export default function Calculus() {
  return (
    <MainLayout>

      <div className="subject-page">

        <section className="subject-hero">
          <div className="subject-badge">Раздел</div>
          <h1>Математический анализ</h1>
          <p>
            Пределы, производные, интегралы и исследование функций.
          </p>
        </section>

        <h2 className="subject-title">Темы раздела</h2>

        <div className="topic-grid">

          <Link to="/calculus/limits" className="topic-card">
            <h3>Пределы</h3>
            <p>Замечательные пределы и неопределённости</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/calculus/derivatives" className="topic-card">
            <h3>Производные</h3>
            <p>Таблица производных, монотонность, экстремумы</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/calculus/integrals" className="topic-card">
            <h3>Интегралы</h3>
            <p>Неопределённые и определённые интегралы, таблица интегралов</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/calculus/extrema" className="topic-card">
            <h3>Исследование функции</h3>
            <p>Выпуклость, точки перегиба и графики функции</p>
            <span>Открыть →</span>
          </Link>

        </div>

        <section className="lesson-section">
          <h2>Что нужно запомнить</h2>
          <div className="remember-box">
            <ul>
              <li>0/0 → использовать правило Лопиталя (берём производные)</li>
              <li>∞/∞ → отношение коэффициентов при старшей степени</li>
              <li>Периоды, интервалы возрастания/убывания через производную</li>
              <li>Выпуклость и точки перегиба через вторую производную</li>
              <li>Основные формулы интегралов и таблица производных</li>
            </ul>
          </div>
        </section>

      </div>

    </MainLayout>
  )
}