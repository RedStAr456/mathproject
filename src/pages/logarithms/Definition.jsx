import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Definition() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Логарифмы</div>
          <h1>Определение логарифма</h1>
          <p>
            Логарифм числа b по основанию a — это показатель степени x, 
            в которую нужно возвести a, чтобы получить b.
          </p>
          <div className="formula-card-large">
            logₐ(b) = x ⇔ aˣ = b
          </div>
        </section>

        <section className="lesson-section">
          <h2>Условия существования</h2>
          <ul>
            <li>a &gt; 0, a ≠ 1</li>
            <li>b &gt; 0</li>
          </ul>
        </section>

      </div>
    </MainLayout>
  )
}