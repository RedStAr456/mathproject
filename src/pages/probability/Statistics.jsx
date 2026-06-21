import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Statistics() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Вероятность</div>
          <h1>Статистика</h1>
        </section>

        <section className="lesson-section">
          <h2>Среднее арифметическое</h2>
          <div className="formula-card-large">
            x̄ = (x1 + x2 + ... + xn)/n
          </div>
        </section>

        <section className="lesson-section">
          <h2>Дисперсия</h2>
          <div className="formula-card-large">
            D = Σ(xi - x̄)² / n
          </div>
        </section>

        <section className="lesson-section">
          <h2>Стандартное отклонение</h2>
          <div className="formula-card-large">
            σ = √D
          </div>
        </section>

      </div>
    </MainLayout>
  )
}