import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Limits() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Матанализ</div>
          <h1>Пределы</h1>
          <p>
            Предел функции описывает поведение f(x), когда x стремится к определённому значению или к бесконечности.
          </p>
        </section>

        <section className="lesson-section">
          <h2>Определение</h2>
          <p>Предел функции f(x) при x→a:</p>
          <div className="formula-card-large">lim<sub>x→a</sub> f(x) = L</div>
        </section>

        <section className="lesson-section">
          <h2>Замечательные пределы</h2>
          <div className="formula-card-large">lim<sub>x→0</sub> (sin x)/x = 1</div>
          <div className="formula-card-large">lim<sub>n→∞</sub> (1+1/n)<sup>n</sup> = e</div>
        </section>

        <section className="lesson-section">
          <h2>Неопределённости и как их решать</h2>

          <div className="table-block">

            <div className="table-row">
              <span>0/0</span>
              <span>
                Используем правило Лопиталя: берём производные числителя и знаменателя
              </span>
            </div>

            <div className="table-row">
              <span>∞/∞</span>
              <span>
                Для многочленов: предел равен отношению коэффициентов старшей степени
              </span>
            </div>

            <div className="table-row">
              <span>∞−∞</span>
              <span>Приводим к дроби и упрощаем</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">
          <h2>Примеры</h2>

          <div className="example-box">
            <div className="mini-formula">lim<sub>x→0</sub> (1-cos x)/x²</div>
            <p>0/0 → производная: lim = 1/2</p>
          </div>

          <div className="example-box">
            <div className="mini-formula">lim<sub>x→∞</sub> (3x²+2x+1)/(5x²-7x+4)</div>
            <p>∞/∞ → отношение старших коэффициентов: 3/5</p>
          </div>

        </section>

      </div>

    </MainLayout>
  )
}