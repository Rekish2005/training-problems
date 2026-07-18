import { X, Save, Trash2, Loader2, AlertTriangle } from "lucide-react";

export default function EmployeePanel({
  editingId,
  form,
  setForm,
  syncing,
  formError,
  confirmDeleteId,
  setConfirmDeleteId,
  onSubmit,
  onDelete,
  onClose,
}) {
  return (
    <>
      <div className="lg-overlay" onClick={onClose} />
      <div className="lg-panel">
        <div className="lg-panel-head">
          <h2 className="lg-serif">{editingId ? "Edit Record" : "New Record"}</h2>
          <button className="lg-icon-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <p className="lg-panel-sub">
          {editingId
            ? `Sends PUT /update/${editingId} to the live API.`
            : "Sends POST /create to the live API."}
        </p>

        {formError && (
          <div className="lg-form-error">
            <AlertTriangle size={14} /> {formError}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="lg-field">
            <label>Full name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jordan Vance"
            />
          </div>
          <div className="lg-field-row">
            <div className="lg-field">
              <label>Salary (USD)</label>
              <input
                type="number"
                min="0"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: e.target.value })}
                placeholder="95000"
              />
            </div>
            <div className="lg-field">
              <label>Age</label>
              <input
                type="number"
                min="0"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                placeholder="34"
              />
            </div>
          </div>

          <div className="lg-panel-actions">
            <button type="submit" className="lg-btn-save" disabled={syncing}>
              {syncing ? <Loader2 size={15} className="lg-spin" /> : <Save size={15} />}
              {editingId ? "Save changes" : "Add employee"}
            </button>
            {editingId && (
              <button
                type="button"
                className="lg-btn-delete"
                onClick={() => setConfirmDeleteId(editingId)}
              >
                <Trash2 size={15} />
              </button>
            )}
          </div>

          {confirmDeleteId === editingId && editingId && (
            <div className="lg-confirm">
              <span>Remove this record permanently?</span>
              <div className="lg-confirm-btns">
                <button type="button" className="lg-confirm-yes" onClick={() => onDelete(editingId)}>
                  Delete
                </button>
                <button type="button" className="lg-confirm-no" onClick={() => setConfirmDeleteId(null)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
