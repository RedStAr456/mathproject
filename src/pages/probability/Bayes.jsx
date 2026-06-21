import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Bayes() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Вероятность</div>
          <h1>Формула Байеса</h1>
        </section>

        <section className="lesson-section">
          <div className="formula-card-large">
            P(A|B) = P(B|A)·P(A) / P(B)
          </div>
          <p>
            Позволяет вычислить условную вероятность события A при известном B.
          </p>
        </section>

      </div>
    </MainLayout>
  )
}