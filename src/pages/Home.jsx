import MainLayout from '../layouts/MainLayout'
import SectionCard from '../components/SectionCard'

import '../styles/home.css'

export default function Home() {
  return (
    <MainLayout>

      <div className="home-page">

        <section className="hero">

          <div className="hero-left">

            <div className="hero-badge">
              Электронный конспект
            </div>

            <h1 className="hero-title">
              Математика
            </h1>

            <div className="hero-class">
              10–11 класс
            </div>

            <p className="hero-description">
              Алгебра,
              тригонометрия,
              математический анализ,
              теория вероятности
              и линейная алгебра —
              в одном месте.
            </p>

            <button className="hero-button">
              📖 Начать изучение
            </button>

          </div>

          <div className="formulas">

            <div className="formula-card f1">
              sin²x + cos²x = 1
            </div>

            <div className="formula-card f2">
              ∫ x² dx
            </div>

            <div className="formula-card f3">
              lim x→∞
            </div>

            <div className="formula-card f4">
              A · X = B
            </div>

            <div className="formula-card f5">
              P(A|B)
            </div>

            <div className="formula-card f6">
              log₂(8)=3
            </div>

          </div>

        </section>

        <h2 className="home-title">
          Разделы конспекта
        </h2>

        <div className="cards-grid">

          <SectionCard
            icon="𝑥²"
            title="Алгебра"
            path="/algebra"
            color="purple"
            description="
            Функции, уравнения,
            неравенства и прогрессии.
            "
          />

          <SectionCard
            icon="∿"
            title="Тригонометрия"
            path="/trigonometry"
            color="green"
            description="
            Синус, косинус,
            формулы и уравнения.
            "
          />

          <SectionCard
            icon="log"
            title="Логарифмы"
            path="/logarithms"
            color="orange"
            description="
            Определение,
            свойства и уравнения.
            "
          />

          <SectionCard
            icon="∫"
            title="Матанализ"
            path="/calculus"
            color="blue"
            description="
            Пределы,
            производные и интегралы.
            "
          />

          <SectionCard
            icon="🎲"
            title="Вероятность"
            path="/probability"
            color="red"
            description="
            События,
            статистика и распределения.
            "
          />

          <SectionCard
            icon="⊞"
            title="Линейная алгебра"
            path="/linear-algebra"
            color="indigo"
            description="
            Матрицы,
            определители,
            Гаусс и Крамер.
            "
          />

        </div>

        <h2 className="home-title">
          Популярные темы
        </h2>

        <div className="popular-grid">

          <div className="popular-item">
            Производные
          </div>

          <div className="popular-item">
            Интегралы
          </div>

          <div className="popular-item">
            Пределы
          </div>

          <div className="popular-item">
            Метод Гаусса
          </div>

          <div className="popular-item">
            Логарифмы
          </div>

          <div className="popular-item">
            Матрицы
          </div>

        </div>

        <div className="quote-card">

          <p>
            Математика —
            это язык,
            на котором написана
            книга природы.
          </p>

          <span>
            Галилео Галилей
          </span>

        </div>

      </div>

    </MainLayout>
  )
}