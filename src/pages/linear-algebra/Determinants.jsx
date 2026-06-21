import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Determinants() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Определители</h1>
          <p>Определитель матрицы показывает её “объём” и используется в решении систем.</p>
        </section>

        <section className="lesson-section">
          <h2>2x2</h2>
          <div className="formula-card-large">
            det([ [a,b], [c,d] ]) = ad - bc
          </div>
        </section>

        <section className="lesson-section">
          <h2>3x3</h2>
          <div className="formula-card-large">
            det([ [a,b,c], [d,e,f], [g,h,i] ]) = aei + bfg + cdh - ceg - bdi - afh
          </div>
        </section>

      </div>
    </MainLayout>
  )
}