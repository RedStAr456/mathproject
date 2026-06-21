import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Derivatives() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Матанализ
          </div>

          <h1>
            Производные
          </h1>

          <p>
            Производная показывает скорость изменения функции.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <div className="formula-card-large">
            f'(x)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Таблица производных
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>C</span>
              <span>0</span>
            </div>

            <div className="table-row">
              <span>xⁿ</span>
              <span>n·xⁿ⁻¹</span>
            </div>

            <div className="table-row">
              <span>sinx</span>
              <span>cosx</span>
            </div>

            <div className="table-row">
              <span>cosx</span>
              <span>-sinx</span>
            </div>

            <div className="table-row">
              <span>tgx</span>
              <span>1/cos²x</span>
            </div>

            <div className="table-row">
              <span>eˣ</span>
              <span>eˣ</span>
            </div>

            <div className="table-row">
              <span>lnx</span>
              <span>1/x</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Правила дифференцирования
          </h2>

          <div className="formula-card-large">
            (u+v)' = u'+v'
          </div>

          <div className="formula-card-large">
            (uv)' = u'v+uv'
          </div>

          <div className="formula-card-large">
            (u/v)' = (u'v-uv')/v²
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Монотонность
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>f'(x) {'>'} 0</span>
              <span>Возрастает</span>
            </div>

            <div className="table-row">
              <span>f'(x) {'<'} 0</span>
              <span>Убывает</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Экстремумы
          </h2>

          <p>
            Находим точки:
          </p>

          <div className="formula-card-large">
            f'(x)=0
          </div>

          <p>
            Исследуем знак производной.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Выпуклость
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>f''(x) {'>'} 0</span>
              <span>Выпукла вверх</span>
            </div>

            <div className="table-row">
              <span>f''(x) {'<'} 0</span>
              <span>Выпукла вниз</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Точки перегиба
          </h2>

          <p>
            Находим:
          </p>

          <div className="formula-card-large">
            f''(x)=0
          </div>

          <p>
            Проверяем смену знака второй производной.
          </p>

        </section>

      </div>

    </MainLayout>
  )
}