import { Loader2, AlertTriangle } from "lucide-react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeGrid({ loading, loadError, employees, onCardClick }) {
  return (
    <div className="lg-grid">
      {loading ? (
        <div className="lg-loading">
          <Loader2 size={18} className="lg-spin" /> Fetching from the API…
        </div>
      ) : loadError && employees.length === 0 ? (
        // Only block the whole grid on an error when we have nothing
        // else to show. If data already loaded successfully and a
        // later call fails (e.g. rate limit), keep showing the cards.
        <div className="lg-error-banner">
          <AlertTriangle size={16} />
          Couldn't reach the API ({loadError}). It may be rate-limiting or unreachable right
          now — try again in a moment.
        </div>
      ) : employees.length === 0 ? (
        <div className="lg-empty">No records match your search.</div>
      ) : (
        employees.map((e) => <EmployeeCard key={e.id} employee={e} onClick={onCardClick} />)
      )}
    </div>
  );
}
