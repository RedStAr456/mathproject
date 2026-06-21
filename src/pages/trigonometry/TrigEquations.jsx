import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function TrigEquations() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Тригонометрия</div>
          <h1>Тригонометрические уравнения</h1>
          <p>Один из важнейших разделов ЕГЭ.</p>
        </section>

        <section className="lesson-section">
          <h2>Простейшие уравнения</h2>
          <div className="formula-card-large">sin(x)=a</div>
          <div className="formula-card-large">x=(-1)^n·arcsin(a)+πn</div>
        </section>

        <section className="lesson-section">
          <div className="formula-card-large">cos(x)=a</div>
          <div className="formula-card-large">x=±arccos(a)+2πn</div>
        </section>

        <section className="lesson-section">
          <div className="formula-card-large">tg(x)=a</div>
          <div className="formula-card-large">x=arctg(a)+πn</div>
        </section>

        <section className="lesson-section">
          <h2>Частные случаи</h2>
          <div className="table-block">
            <div className="table-row">
              <span>sin(x)=0</span>
              <span>x=πn</span>
            </div>
            <div className="table-row">
              <span>cos(x)=0</span>
              <span>x=π/2+πn</span>
            </div>
            <div className="table-row">
              <span>tg(x)=0</span>
              <span>x=πn</span>
            </div>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Решение через замену переменной</h2>
          <p>Если в уравнении встречается только одна функция, удобно выполнить замену.</p>
          <div className="example-box">
            <div className="mini-formula">2sin²x - 3sinx + 1 = 0</div>
            <p>Обозначим:</p>
            <div className="mini-formula">t = sinx</div>
            <div className="mini-formula">2t² - 3t + 1 = 0</div>
            <p>Получаем:</p>
            <div className="mini-formula">t₁ = 1</div>
            <div className="mini-formula">t₂ = 1/2</div>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Однородные уравнения</h2>
          <p>Все слагаемые имеют одинаковую степень относительно sin и cos.</p>
          <div className="formula-card-large">sin²x + sinx cosx - 2cos²x = 0</div>
          <p>Делим на cos²x.</p>
          <div className="formula-card-large">tg²x + tgx - 2 = 0</div>
          <p>Получаем квадратное уравнение.</p>
        </section>

        <section className="lesson-section">
          <h2>Формулы понижения степени</h2>
          <div className="formula-card-large">sin²x = (1-cos2x)/2</div>
          <div className="formula-card-large">cos²x = (1+cos2x)/2</div>
          <p>Позволяют перейти от квадратов тригонометрических функций к обычным функциям.</p>
        </section>

        <section className="lesson-section">
          <h2>Универсальная тригонометрическая подстановка</h2>
          <div className="formula-card-large">t = tg(x/2)</div>
          <div className="formula-card-large">sinx = 2t/(1+t²)</div>
          <div className="formula-card-large">cosx = (1-t²)/(1+t²)</div>
          <div className="formula-card-large">tgx = 2t/(1-t²)</div>
          <p>Используется в сложных тригонометрических уравнениях.</p>
        </section>

        <section className="lesson-section">
          <h2>Метод разложения на множители</h2>
          <div className="formula-card-large">sinx(2cosx-1)=0</div>
          <p>Каждый множитель приравнивается к нулю.</p>
          <div className="mini-formula">sinx = 0</div>
          <div className="mini-formula">cosx = 1/2</div>
        </section>

        <section className="lesson-section">
          <h2>Типовая задача ЕГЭ</h2>
          <div className="example-box">
            <div className="mini-formula">2sin²x - sinx - 1 = 0</div>
            <p>Замена:</p>
            <div className="mini-formula">t = sinx</div>
            <div className="mini-formula">2t² - t - 1 = 0</div>
            <div className="mini-formula">(2t+1)(t-1)=0</div>
            <p>Получаем:</p>
            <div className="mini-formula">sinx = 1</div>
            <div className="mini-formula">sinx = -1/2</div>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Алгоритм решения</h2>
          <div className="remember-box">
            <ol>
              <li>Привести уравнение к стандартному виду.</li>
              <li>Найти возможность разложения на множители.</li>
              <li>Использовать формулы приведения или преобразования.</li>
              <li>При необходимости выполнить замену переменной.</li>
              <li>Решить простейшие тригонометрические уравнения.</li>
              <li>Записать общий ответ.</li>
              <li>Проверить ограничения.</li>
            </ol>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Что нужно знать для ЕГЭ</h2>
          <div className="remember-box">
            <ul>
              <li>Основные формулы тригонометрии.</li>
              <li>Формулы приведения.</li>
              <li>Формулы двойного угла.</li>
              <li>Формулы суммы и разности.</li>
              <li>Метод замены переменной.</li>
              <li>Метод разложения на множители.</li>
              <li>Общие решения простейших тригонометрических уравнений.</li>
              <li>Единичную окружность наизусть.</li>
            </ul>
          </div>
        </section>

      </div>
    </MainLayout>
  )
}