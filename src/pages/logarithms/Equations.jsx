import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Equations() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Логарифмы</div>
          <h1>Логарифмические уравнения</h1>
        </section>

        <section className="lesson-section">
          <h2>Примеры</h2>

          <div className="example-box">
            <div className="mini-formula">log₂(x) = 3</div>
            <p>x = 8</p>
          </div>

          <div className="example-box">
            <div className="mini-formula">log₃(x-1) = 2</div>
            <p>x-1 = 9 ⇒ x = 10</p>
          </div>

          <div className="example-box">
            <div className="mini-formula">log₂(x+1) + log₂(x-1) = 3</div>
            <p>log₂((x+1)(x-1)) = 3 ⇒ x²-1 = 8 ⇒ x² = 9 ⇒ x = ±3</p>
            <p>Но x &gt; 1 ⇒ x=3</p>
          </div>

        </section>

      </div>
    </MainLayout>
  )
}