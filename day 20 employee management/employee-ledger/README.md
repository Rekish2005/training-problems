# Personnel Ledger — Employee Management

A small employee management app connected to a live REST API (the public
"Dummy Rest API" that Postman's own API Network links to). Editing, adding,
or deleting a record in the UI sends a real HTTP request and updates the
data set.

## Project structure

```
employee-ledger/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Top-level state + wiring
    ├── api.js                 # All fetch() calls to the live API
    ├── utils.js                # Small formatting helpers
    ├── index.css               # All styling
    └── components/
        ├── Header.jsx          # Title, live-source tag, stats
        ├── Toolbar.jsx         # Search, sort, "New Record"
        ├── EmployeeGrid.jsx    # Loading / error / empty states + card list
        ├── EmployeeCard.jsx    # A single employee record
        ├── EmployeePanel.jsx   # Slide-in add/edit/delete form
        └── Toast.jsx           # "Saved to API" confirmation
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## About the API

- Base URL: `https://dummy.restapiexample.com/api/v1`
- Endpoints used: `GET /employees`, `POST /create`, `PUT /update/{id}`,
  `DELETE /delete/{id}`
- It only stores three fields: `employee_name`, `employee_salary`,
  `employee_age` — that's why the form only asks for name, salary, and age.
- It's a **public demo database shared by everyone testing Postman
  tutorials** — not a private data store. Anyone can read or write to it,
  and it rate-limits aggressively (the app auto-retries once on a 429).
- Because the shared list is huge and full of other people's test data,
  the app shows only the most recent 16 records after loading, and merges
  each create/update/delete into local state directly instead of
  re-fetching the whole list every time.

## Swapping in your own backend

Everything the UI needs from the network goes through `src/api.js`. Point
`API_BASE` at your own server and adjust the request/response shapes in
that one file — no other file needs to change.
