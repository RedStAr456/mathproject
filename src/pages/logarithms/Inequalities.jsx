import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Inequalities() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Логарифмы</div>
          <h1>Логарифмические неравенства</h1>
        </section>

        <section className="lesson-section">
          <h2>Пример</h2>

          <div className="example-box">
            <div className="mini-formula">log₂(x) &gt; 3</div>
            <p>x &gt; 8</p>
          </div>

          <div className="example-box">
            <div className="mini-formula">log₃(x-1) ≤ 2</div>
            <p>x-1 ≤ 9 ⇒ x ≤ 10</p>
            <p>При x&gt;1</p>
          </div>

        </section>

      </div>
    </MainLayout>
  )
}