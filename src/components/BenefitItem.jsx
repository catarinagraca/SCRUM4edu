export default function BenefitItem({ icon: Icon, tone, title, text }) {
  return (
    <li className="benefit">
      <span className={`icon tone-${tone}`}>
        <Icon size={30} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}
