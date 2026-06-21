import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Cosinus() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Тригонометрия</div>

          <h1>Косинус</h1>

          <p>
            Косинус угла показывает горизонтальную координату
            точки на единичной окружности.
          </p>
        </section>

        <section className="lesson-section">

          <h2>Определение</h2>

          <div className="formula-card-large">
            x = cos(α)
          </div>

        </section>

        <section className="lesson-section">

          <h2>Свойства</h2>

          <div className="table-block">

            <div className="table-row">
              <span>Область значений</span>
              <span>[-1;1]</span>
            </div>

            <div className="table-row">
              <span>Период</span>
              <span>2π</span>
            </div>

            <div className="table-row">
              <span>Чётность</span>
              <span>cos(-x)=cos(x)</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>Основные значения</h2>

          <div className="table-block">

            <div className="table-row">
              <span>0°</span>
              <span>1</span>
            </div>

            <div className="table-row">
              <span>30°</span>
              <span>√3/2</span>
            </div>

            <div className="table-row">
              <span>45°</span>
              <span>√2/2</span>
            </div>

            <div className="table-row">
              <span>60°</span>
              <span>1/2</span>
            </div>

            <div className="table-row">
              <span>90°</span>
              <span>0</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>Что нужно запомнить</h2>

          <div className="remember-box">

            <ul>
              <li>Косинус — x координата точки.</li>
              <li>Область значений от -1 до 1.</li>
              <li>cos(-x)=cos(x).</li>
              <li>Период функции 2π.</li>
            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}