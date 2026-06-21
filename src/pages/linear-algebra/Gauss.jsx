import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Gauss() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Метод Гаусса</h1>
          <p>Пошаговое решение той же системы 3 переменных.</p>
        </section>

        <section className="lesson-section">
          <h2>Исходная система</h2>
          <div className="example-box">
            <div className="mini-formula">x + y + z = 6</div>
            <div className="mini-formula">2x - y + z = 5</div>
            <div className="mini-formula">x + 2y - z = 1</div>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Расширенная матрица</h2>
          <div className="formula-card-large">
           {"("}1  1  1 | 6{")"}<br/>
           {"("}2 -1  1 | 5{")"}<br/>
           {"("}1  2 -1 | 1{")"}
          </div>
        </section>

        <section className="lesson-section">
          <h2>Прямой ход</h2>
          <p>Обнуляем элементы под первым столбцом:</p>
          <div className="formula-card-large">
           {"("}1  1  1 | 6{")"}<br/>
           {"("}0 -3 -1 | -7{")"}<br/>
           {"("}0  1 -2 | -5{")"}
          </div>
        </section>

        <section className="lesson-section">
          <h2>Обратный ход</h2>
          <p>Обнуляем второй столбец в третьей строке:</p>
          <div className="formula-card-large">
           {"("}1  1  1 | 6{")"}<br/>
           {"("}0 -3 -1 | -7{")"}<br/>
           {"("}0  0 -7 | -21{")"}
          </div>

          <div className="formula-card-large">-7z = -21 → z = 3</div>
          <div className="formula-card-large">Подставляем во вторую строку: -3y - 1 = -7 → y = 1</div>
          <div className="formula-card-large">Подставляем в первую строку: x + 1 + 3 = 6 → x = 2</div>
        </section>

        <section className="lesson-section">
          <h2>Ответ</h2>
          <div className="remember-box">
            <ul>
              <li>x = 2</li>
              <li>y = 1</li>
              <li>z = 3</li>
            </ul>
          </div>
        </section>

      </div>
    </MainLayout>
  )
}