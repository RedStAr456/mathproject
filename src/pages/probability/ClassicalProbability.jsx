import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function ClassicalProbability() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Вероятность</div>
          <h1>Классическая вероятность</h1>
        </section>

        <section className="lesson-section">
          <div className="formula-card-large">
            P(A) = m / n
          </div>
          <p>
            m — число благоприятных исходов, n — общее число равновероятных исходов.
          </p>
        </section>

      </div>
    </MainLayout>
  )
}