import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Events() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Вероятность</div>
          <h1>События</h1>
          <p>Определение событий, элементарные и составные события.</p>
        </section>

        <section className="lesson-section">
          <h2>Элементарное событие</h2>
          <div className="formula-card-large">
            Ω = {`{ω1, ω2, ..., ωn}`}
          </div>
        </section>

        <section className="lesson-section">
          <h2>Составное событие</h2>
          <p>
            Объединение, пересечение и противоположное событие.
          </p>
          <div className="formula-card-large">
            A ∪ B, A ∩ B, Ā
          </div>
        </section>

      </div>
    </MainLayout>
  )
}