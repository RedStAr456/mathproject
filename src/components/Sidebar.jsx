import { NavLink } from 'react-router-dom'

const sections = [
  {
    title: 'Главная',
    items: [
      {
        path: '/',
        label: 'Главная',
        icon: '🏠'
      }
    ]
  },
  {
    title: 'Алгебра',
    items: [
      {
        path: '/algebra',
        label: 'Алгебра',
        icon: '𝑥²'
      }
    ]
  },
  {
    title: 'Тригонометрия',
    items: [
      {
        path: '/trigonometry',
        label: 'Тригонометрия',
        icon: '∿'
      }
    ]
  },
  {
    title: 'Логарифмы',
    items: [
      {
        path: '/logarithms',
        label: 'Логарифмы',
        icon: 'log'
      }
    ]
  },
  {
    title: 'Матанализ',
    items: [
      {
        path: '/calculus',
        label: 'Анализ',
        icon: '∫'
      }
    ]
  },
  {
    title: 'Вероятность',
    items: [
      {
        path: '/probability',
        label: 'Вероятность',
        icon: '🎲'
      }
    ]
  },
  {
    title: 'Линейная алгебра',
    items: [
      {
        path: '/linear-algebra',
        label: 'Матрицы',
        icon: '⊞'
      }
    ]
  }
]

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h1>MathBook</h1>
        <span>10–11 класс</span>
      </div>

      <nav>

        {sections.map(section => (
          <div
            key={section.title}
            className="sidebar-group"
          >

            <div className="sidebar-title">
              {section.title}
            </div>

            {section.items.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className="sidebar-link"
              >
                <span className="sidebar-icon">
                  {item.icon}
                </span>

                {item.label}
              </NavLink>
            ))}

          </div>
        ))}

      </nav>

    </aside>
  )
}