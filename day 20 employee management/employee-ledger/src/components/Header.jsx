import { Loader2, Users, DollarSign, CalendarClock } from "lucide-react";
import { fmtMoney } from "../utils";

export default function Header({ employees, syncing }) {
  const totalPayroll = employees.reduce((sum, e) => sum + Number(e.salary || 0), 0);
  const avgAge = employees.length
    ? Math.round(employees.reduce((s, e) => s + e.age, 0) / employees.length)
    : 0;

  return (
    <div className="lg-header">
      <div>
        <div className="lg-source-tag">
          <span>Live source:</span> <b>dummy.restapiexample.com/api/v1</b>
        </div>
        <div className="lg-title-row">
          <h1 className="lg-title lg-serif">Personnel Ledger</h1>
          {syncing && (
            <span className="lg-sync-pill">
              <Loader2 size={13} className="lg-spin" /> calling API…
            </span>
          )}
        </div>
      </div>
      <div className="lg-stats">
        <div className="lg-stat"><Users size={16} /> <span><b>{employees.length}</b> shown</span></div>
        <div className="lg-stat"><DollarSign size={16} /> <span><b>{fmtMoney(totalPayroll)}</b> payroll</span></div>
        <div className="lg-stat"><CalendarClock size={16} /> <span><b>{avgAge}</b> avg age</span></div>
      </div>
    </div>
  );
}
