import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Properties() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Логарифмы</div>
          <h1>Свойства логарифмов</h1>
        </section>

        <section className="lesson-section">
          <h2>Основные свойства</h2>
          <div className="formula-card-large">
            logₐ(MN) = logₐM + logₐN
          </div>
          <div className="formula-card-large">
            logₐ(M/N) = logₐM - logₐN
          </div>
          <div className="formula-card-large">
            logₐ(Mᵏ) = k·logₐM
          </div>
          <div className="formula-card-large">
            logₐ(a) = 1, logₐ(1) = 0
          </div>
        </section>

      </div>
    </MainLayout>
  )
}