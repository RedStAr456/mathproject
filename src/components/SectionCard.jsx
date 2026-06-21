import { Link } from 'react-router-dom'

export default function SectionCard({
  icon,
  title,
  description,
  path,
  color = 'purple'
}) {
  return (
    <Link
      to={path}
      className={`section-card ${color}`}
    >
      <div className="section-card-bg" />

      <div className="section-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <span className="section-link">
        Перейти →
      </span>

    </Link>
  )
}