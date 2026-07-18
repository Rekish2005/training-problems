import { fmtMoney, initials, accentFor } from "../utils";

export default function EmployeeCard({ employee, onClick }) {
  return (
    <div
      className="lg-card"
      style={{ "--accent": accentFor(employee.id) }}
      onClick={() => onClick(employee)}
    >
      <span className="lg-card-id lg-mono">#{employee.id}</span>
      <div className="lg-card-avatar">{initials(employee.name) || "?"}</div>
      <p className="lg-card-name lg-serif">{employee.name}</p>
      <p className="lg-card-role">Age {employee.age}</p>
      <div className="lg-card-row">
        <span>Salary</span>
        <b>{fmtMoney(employee.salary)}</b>
      </div>
    </div>
  );
}
