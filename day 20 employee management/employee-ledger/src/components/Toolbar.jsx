import { Search, Plus } from "lucide-react";

export default function Toolbar({ query, setQuery, sortBy, setSortBy, onNew }) {
  return (
    <div className="lg-toolbar">
      <div className="lg-toolbar-left">
        <div className="lg-search">
          <Search size={15} />
          <input
            placeholder="Search by name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select className="lg-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort: Name</option>
          <option value="salary">Sort: Salary (high→low)</option>
          <option value="age">Sort: Age (low→high)</option>
        </select>
      </div>
      <button className="lg-btn-primary" onClick={onNew}>
        <Plus size={16} /> New Record
      </button>
    </div>
  );
}
