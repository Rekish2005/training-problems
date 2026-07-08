// Helix Employee Management System - Core Logic

// Default Mock Data
const DEFAULT_DEPARTMENTS = [
    { id: "engineering", name: "Engineering", manager: "Sarah Connor", budget: 650000, color: "#6366f1" },
    { id: "marketing", name: "Marketing", manager: "Sophia Martinez", budget: 250000, color: "#10b981" },
    { id: "hr", name: "HR", manager: "Marcus Aurelius", budget: 180000, color: "#ef4444" },
    { id: "design", name: "Design", manager: "Elena Rostova", budget: 220000, color: "#06b6d4" },
    { id: "sales", name: "Sales", manager: "William Thornton", budget: 350000, color: "#f59e0b" },
    { id: "finance", name: "Finance", manager: "Aisha Yusuf", budget: 190000, color: "#a855f7" }
];

const DEFAULT_EMPLOYEES = [
    {
        id: "emp-1",
        firstName: "Sarah",
        lastName: "Connor",
        email: "sarah.connor@helix.com",
        phone: "+1 (555) 019-2834",
        department: "Engineering",
        role: "Principal Architect",
        salary: 165000,
        performance: 4.8,
        joinDate: "2021-03-15",
        status: "Active",
        avatarColor: "#6366f1"
    },
    {
        id: "emp-2",
        firstName: "Marcus",
        lastName: "Aurelius",
        email: "marcus.aurelius@helix.com",
        phone: "+1 (555) 014-9988",
        department: "HR",
        role: "Director of People",
        salary: 115000,
        performance: 4.5,
        joinDate: "2020-08-10",
        status: "Active",
        avatarColor: "#ef4444"
    },
    {
        id: "emp-3",
        firstName: "Elena",
        lastName: "Rostova",
        email: "elena.rostova@helix.com",
        phone: "+1 (555) 017-4321",
        department: "Design",
        role: "Senior UI/UX Designer",
        salary: 125000,
        performance: 4.9,
        joinDate: "2022-01-20",
        status: "Remote",
        avatarColor: "#06b6d4"
    },
    {
        id: "emp-4",
        firstName: "David",
        lastName: "Kim",
        email: "david.kim@helix.com",
        phone: "+1 (555) 012-3456",
        department: "Engineering",
        role: "Full Stack Engineer",
        salary: 95000,
        performance: 4.2,
        joinDate: "2023-05-12",
        status: "Active",
        avatarColor: "#4f46e5"
    },
    {
        id: "emp-5",
        firstName: "Sophia",
        lastName: "Martinez",
        email: "sophia.martinez@helix.com",
        phone: "+1 (555) 011-8822",
        department: "Marketing",
        role: "Growth Lead",
        salary: 105000,
        performance: 4.6,
        joinDate: "2022-09-01",
        status: "Active",
        avatarColor: "#10b981"
    },
    {
        id: "emp-6",
        firstName: "William",
        lastName: "Thornton",
        email: "will.thornton@helix.com",
        phone: "+1 (555) 015-7733",
        department: "Sales",
        role: "VP of Enterprise Sales",
        salary: 140000,
        performance: 4.4,
        joinDate: "2019-11-15",
        status: "Active",
        avatarColor: "#f59e0b"
    },
    {
        id: "emp-7",
        firstName: "Aisha",
        lastName: "Yusuf",
        email: "aisha.yusuf@helix.com",
        phone: "+1 (555) 018-9090",
        department: "Finance",
        role: "Financial Analyst",
        salary: 98000,
        performance: 4.0,
        joinDate: "2023-02-28",
        status: "On Leave",
        avatarColor: "#a855f7"
    },
    {
        id: "emp-8",
        firstName: "Lucas",
        lastName: "Vance",
        email: "lucas.vance@helix.com",
        phone: "+1 (555) 016-1122",
        department: "Engineering",
        role: "QA Automation Engineer",
        salary: 85000,
        performance: 3.8,
        joinDate: "2023-10-01",
        status: "Active",
        avatarColor: "#4338ca"
    },
    {
        id: "emp-9",
        firstName: "Isabella",
        lastName: "Rossi",
        email: "isabella.rossi@helix.com",
        phone: "+1 (555) 013-4455",
        department: "Design",
        role: "Brand Designer",
        salary: 80000,
        performance: 4.1,
        joinDate: "2024-01-15",
        status: "Remote",
        avatarColor: "#0891b2"
    },
    {
        id: "emp-10",
        firstName: "Franklin",
        lastName: "Clinton",
        email: "frank.clinton@helix.com",
        phone: "+1 (555) 019-5500",
        department: "Marketing",
        role: "Content Specialist",
        salary: 75000,
        performance: 3.9,
        joinDate: "2023-07-04",
        status: "Active",
        avatarColor: "#059669"
    }
];

const DEFAULT_ACTIVITIES = [
    { id: 1, type: "join", message: "Joined Sarah Connor to Engineering as Principal Architect.", time: "2 hours ago" },
    { id: 2, type: "status", message: "Changed status of Aisha Yusuf to On Leave.", time: "5 hours ago" },
    { id: 3, type: "join", message: "Joined Franklin Clinton to Marketing as Content Specialist.", time: "1 day ago" },
    { id: 4, type: "performance", message: "Updated performance review for Elena Rostova (4.9 Rating).", time: "2 days ago" }
];

// App State
let state = {
    employees: [],
    departments: [],
    activities: [],
    currentTab: "dashboard",
    viewMode: "list", // "list" or "grid"
    selectedIds: new Set(),
    searchQuery: "",
    filterDept: "all",
    filterStatus: "all",
    filterSort: "name-asc",
    editingEmployeeId: null,
    theme: "dark"
};

// Colors mapping for avatar initials backup
const AVATAR_COLORS = [
    "#6366f1", "#4f46e5", "#10b981", "#059669", "#f59e0b", 
    "#d97706", "#ef4444", "#dc2626", "#06b6d4", "#0891b2", 
    "#a855f7", "#891b28", "#ec4899", "#db2777"
];

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupEventListeners();
    renderTheme();
    renderApp();
    
    // Add dynamic resize observer for canvas charts
    const resizeObserver = new ResizeObserver(() => {
        if (state.currentTab === "dashboard") {
            renderCharts();
        }
    });
    const mainContent = document.querySelector(".content-body");
    if (mainContent) resizeObserver.observe(mainContent);
});

// Load state from localStorage or defaults
function loadState() {
    const savedEmployees = localStorage.getItem("helix_employees");
    const savedDepartments = localStorage.getItem("helix_departments");
    const savedActivities = localStorage.getItem("helix_activities");
    const savedTheme = localStorage.getItem("helix_theme");

    state.employees = savedEmployees ? JSON.parse(savedEmployees) : [...DEFAULT_EMPLOYEES];
    state.departments = savedDepartments ? JSON.parse(savedDepartments) : [...DEFAULT_DEPARTMENTS];
    state.activities = savedActivities ? JSON.parse(savedActivities) : [...DEFAULT_ACTIVITIES];
    state.theme = savedTheme ? savedTheme : "dark";
    
    // Validate state data
    if (!Array.isArray(state.employees) || state.employees.length === 0) {
        state.employees = [...DEFAULT_EMPLOYEES];
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem("helix_employees", JSON.stringify(state.employees));
    localStorage.setItem("helix_departments", JSON.stringify(state.departments));
    localStorage.setItem("helix_activities", JSON.stringify(state.activities));
    localStorage.setItem("helix_theme", state.theme);
}

// Log activity helper
function logActivity(type, message) {
    const newActivity = {
        id: Date.now(),
        type: type, // "join", "status", "performance", "delete", "edit"
        message: message,
        time: "Just now"
    };
    state.activities.unshift(newActivity);
    if (state.activities.length > 8) {
        state.activities.pop();
    }
    saveState();
}

// Render theme styling classes
function renderTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const darkToggleSetting = document.getElementById("settings-dark-mode-toggle");
    if (darkToggleSetting) {
        darkToggleSetting.checked = (state.theme === "dark");
    }
}

// General UI updates
function renderApp() {
    renderTabNavigation();
    renderViewContent();
    renderTheme();
}

// Dynamic tab routing
function renderTabNavigation() {
    // Sidebar Active states
    document.querySelectorAll(".nav-item").forEach(item => {
        if (item.getAttribute("data-tab") === state.currentTab) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Content Display switching
    document.querySelectorAll(".tab-content").forEach(view => {
        if (view.id === `${state.currentTab}-view`) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });

    // Header title and subtitle
    const viewTitle = document.getElementById("view-title");
    const viewSubtitle = document.getElementById("view-subtitle");
    
    switch(state.currentTab) {
        case "dashboard":
            viewTitle.textContent = "Dashboard Overview";
            viewSubtitle.textContent = "Real-time enterprise metrics and personnel operations";
            break;
        case "employees":
            viewTitle.textContent = "Employee Directory";
            viewSubtitle.textContent = "Manage staff profiles, filter roles, and run edits";
            break;
        case "departments":
            viewTitle.textContent = "Departments";
            viewSubtitle.textContent = "Corporate organizational structures and financial controls";
            break;
        case "settings":
            viewTitle.textContent = "System Settings";
            viewSubtitle.textContent = "Configure look & feel, backup parameters, and databases";
            break;
    }
}

// Switch content render depending on tab
function renderViewContent() {
    if (state.currentTab === "dashboard") {
        renderDashboardView();
    } else if (state.currentTab === "employees") {
        renderEmployeesView();
    } else if (state.currentTab === "departments") {
        renderDepartmentsView();
    }
}

// Toast alerts helper
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconSvg = "";
    if (type === "success") {
        iconSvg = `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>`;
    } else if (type === "danger") {
        iconSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
        iconSvg = `<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    }

    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================================================
// Dashboard Logic
// ==========================================================================

function renderDashboardView() {
    // 1. KPI Computations
    const headcount = state.employees.length;
    document.getElementById("stat-total-employees").textContent = headcount;

    // Filter active/remote salaries for average calculation
    const activeSalaryEmployees = state.employees.filter(e => e.status === "Active" || e.status === "Remote");
    const totalSalary = activeSalaryEmployees.reduce((sum, e) => sum + e.salary, 0);
    const avgSalary = headcount > 0 ? (totalSalary / activeSalaryEmployees.length || 0) : 0;
    
    // Format average salary in Currency
    document.getElementById("stat-avg-salary").textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(avgSalary);

    // Active project count (based on departments * active teams)
    const activeProjects = state.departments.length * 2 - 1; // placeholder calculation based on structure
    document.getElementById("stat-active-projects").textContent = activeProjects;

    // Performance index average
    const totalPerf = state.employees.reduce((sum, e) => sum + parseFloat(e.performance || 0), 0);
    const avgPerf = headcount > 0 ? (totalPerf / headcount) : 0;
    document.getElementById("stat-performance").textContent = avgPerf.toFixed(2) + " / 5.0";

    // 2. Activity Feed
    const feed = document.getElementById("activity-feed-list");
    if (feed) {
        feed.innerHTML = state.activities.map(act => {
            let dotClass = "";
            let iconSvg = "";
            switch (act.type) {
                case "join":
                    dotClass = "success";
                    iconSvg = `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`;
                    break;
                case "status":
                    dotClass = "warning";
                    iconSvg = `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    break;
                case "performance":
                    dotClass = "success";
                    iconSvg = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
                    break;
                case "edit":
                    dotClass = "";
                    iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
                    break;
                case "delete":
                    dotClass = "danger";
                    iconSvg = `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;
                    break;
            }

            return `
                <li class="activity-item">
                    <div class="activity-dot ${dotClass}">${iconSvg}</div>
                    <div class="activity-info">
                        <span class="activity-desc">${act.message}</span>
                        <span class="activity-time">${act.time}</span>
                    </div>
                </li>
            `;
        }).join("");
    }

    // 3. Render Canvas Charts
    setTimeout(renderCharts, 50); // delay ensures canvas is rendered in layout
}

// Canvas Drawing logic for Donut and Bar Charts (Runs offline)
function renderCharts() {
    // Check if on dashboard view
    if (state.currentTab !== "dashboard") return;

    // Fetch theme colors dynamically from CSS property variables
    const styles = getComputedStyle(document.body);
    const textColor = styles.getPropertyValue('--text-primary').trim();
    const textMuted = styles.getPropertyValue('--text-muted').trim();
    const borderCol = styles.getPropertyValue('--border-color').trim();
    const isDark = (state.theme === "dark");

    // Donut Chart: Department Allocation
    const deptCanvas = document.getElementById("department-allocation-chart");
    if (deptCanvas) {
        const ctx = deptCanvas.getContext("2d");
        const rect = deptCanvas.parentElement.getBoundingClientRect();
        
        // Handle Retina DPI crispness
        const dpi = window.devicePixelRatio || 1;
        deptCanvas.width = rect.width * dpi;
        deptCanvas.height = 260 * dpi;
        deptCanvas.style.width = `${rect.width}px`;
        deptCanvas.style.height = `260px`;
        ctx.scale(dpi, dpi);

        const width = rect.width;
        const height = 260;
        const centerX = width * 0.35;
        const centerY = height * 0.5;
        const radius = Math.min(centerX, centerY) * 0.75;

        // Group counts by department
        const deptCounts = {};
        state.employees.forEach(emp => {
            const dept = emp.department;
            deptCounts[dept] = (deptCounts[dept] || 0) + 1;
        });

        const totalEmployees = state.employees.length;
        
        // Prepare segments
        let startAngle = -Math.PI / 2;
        const segments = [];
        state.departments.forEach(dept => {
            const count = deptCounts[dept.name] || 0;
            if (count > 0) {
                const angle = (count / totalEmployees) * (Math.PI * 2);
                segments.push({
                    name: dept.name,
                    count: count,
                    color: dept.color,
                    angle: angle,
                    start: startAngle,
                    end: startAngle + angle
                });
                startAngle += angle;
            }
        });

        // Draw donut wedges
        ctx.clearRect(0, 0, width, height);
        
        if (totalEmployees === 0) {
            ctx.fillStyle = textMuted;
            ctx.font = "14px Outfit";
            ctx.textAlign = "center";
            ctx.fillText("No employee data available", centerX, centerY);
            return;
        }

        segments.forEach(seg => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, seg.start, seg.end);
            ctx.arc(centerX, centerY, radius * 0.6, seg.end, seg.start, true);
            ctx.closePath();
            ctx.fillStyle = seg.color;
            ctx.fill();
        });

        // Draw inner donut shadow details
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#0c152b" : "#ffffff";
        ctx.fill();

        // Inner text (headcount count)
        ctx.fillStyle = textColor;
        ctx.font = "bold 24px Outfit";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(totalEmployees.toString(), centerX, centerY - 5);
        ctx.font = "500 11px Outfit";
        ctx.fillStyle = textMuted;
        ctx.fillText("Employees", centerX, centerY + 15);

        // Draw Legend listings
        const legendX = width * 0.7;
        let legendY = centerY - (segments.length * 12);
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        segments.forEach(seg => {
            // Color box
            ctx.beginPath();
            ctx.arc(legendX, legendY, 5, 0, Math.PI * 2);
            ctx.fillStyle = seg.color;
            ctx.fill();
            
            // Text Label
            ctx.fillStyle = textColor;
            ctx.font = "600 12px Outfit";
            ctx.fillText(seg.name, legendX + 15, legendY);
            
            // Count Label
            ctx.fillStyle = textMuted;
            ctx.font = "500 12px Outfit";
            ctx.fillText(`(${seg.count})`, legendX + 15 + ctx.measureText(seg.name).width + 8, legendY);
            
            legendY += 24;
        });
    }

    // Bar Chart: Salary & Performance by Department
    const perfCanvas = document.getElementById("salary-performance-chart");
    if (perfCanvas) {
        const ctx = perfCanvas.getContext("2d");
        const rect = perfCanvas.parentElement.getBoundingClientRect();
        
        // Handle Retina DPI crispness
        const dpi = window.devicePixelRatio || 1;
        perfCanvas.width = rect.width * dpi;
        perfCanvas.height = 260 * dpi;
        perfCanvas.style.width = `${rect.width}px`;
        perfCanvas.style.height = `260px`;
        ctx.scale(dpi, dpi);

        const width = rect.width;
        const height = 260;
        
        // Calculate average salary per department
        const deptSalaries = {};
        const deptEmployeeCounts = {};
        
        state.departments.forEach(d => {
            deptSalaries[d.name] = 0;
            deptEmployeeCounts[d.name] = 0;
        });

        state.employees.forEach(emp => {
            if (deptSalaries[emp.department] !== undefined) {
                deptSalaries[emp.department] += emp.salary;
                deptEmployeeCounts[emp.department] += 1;
            }
        });

        const barData = [];
        state.departments.forEach(dept => {
            const count = deptEmployeeCounts[dept.name] || 0;
            const avg = count > 0 ? (deptSalaries[dept.name] / count) : 0;
            barData.push({
                name: dept.name,
                avgSalary: avg,
                color: dept.color
            });
        });

        // Set Chart bounds margins
        const paddingLeft = 60;
        const paddingRight = 20;
        const paddingTop = 30;
        const paddingBottom = 40;
        const chartWidth = width - paddingLeft - paddingRight;
        const chartHeight = height - paddingTop - paddingBottom;

        ctx.clearRect(0, 0, width, height);

        // Find max salary for scaling Y-axis
        const maxVal = Math.max(...barData.map(d => d.avgSalary), 100000); // minimum scale limit
        const roundedMax = Math.ceil(maxVal / 25000) * 25000;

        // Draw horizontal grid lines
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 1;
        ctx.fillStyle = textMuted;
        ctx.font = "500 10px Outfit";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        const gridSteps = 4;
        for (let i = 0; i <= gridSteps; i++) {
            const yVal = (roundedMax / gridSteps) * i;
            const yPos = height - paddingBottom - (chartHeight * (i / gridSteps));
            
            // Grid line
            ctx.beginPath();
            ctx.moveTo(paddingLeft, yPos);
            ctx.lineTo(width - paddingRight, yPos);
            ctx.stroke();

            // Label
            ctx.fillText(`$${(yVal / 1000).toFixed(0)}k`, paddingLeft - 10, yPos);
        }

        // Draw Bars
        const barSpacing = 24;
        const barWidth = (chartWidth - (barSpacing * (barData.length - 1))) / barData.length;

        barData.forEach((item, index) => {
            const xPos = paddingLeft + (index * (barWidth + barSpacing));
            const activeHeight = item.avgSalary > 0 ? (chartHeight * (item.avgSalary / roundedMax)) : 0;
            const yPos = height - paddingBottom - activeHeight;

            if (item.avgSalary > 0) {
                // Draw rounded columns using Path
                ctx.beginPath();
                ctx.fillStyle = item.color;
                
                // Add soft glassmorphic gradient to columns
                const gradient = ctx.createLinearGradient(xPos, yPos, xPos, height - paddingBottom);
                gradient.addColorStop(0, item.color);
                gradient.addColorStop(1, `${item.color}33`); // transparency
                ctx.fillStyle = gradient;

                // Rounded top bar columns
                const radius = Math.min(barWidth / 2, 8);
                ctx.roundRect(xPos, yPos, barWidth, activeHeight, [radius, radius, 0, 0]);
                ctx.fill();

                // Draw value above column
                ctx.fillStyle = textColor;
                ctx.font = "bold 10px Outfit";
                ctx.textAlign = "center";
                ctx.fillText(`$${(item.avgSalary / 1000).toFixed(0)}k`, xPos + barWidth / 2, yPos - 8);
            } else {
                // Empty state text for department bar
                ctx.fillStyle = textMuted;
                ctx.font = "italic 9px Outfit";
                ctx.textAlign = "center";
                ctx.fillText("no staff", xPos + barWidth / 2, height - paddingBottom - 12);
            }

            // Department labels along bottom X-axis
            ctx.fillStyle = textMuted;
            ctx.font = "600 11px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(item.name, xPos + barWidth / 2, height - paddingBottom + 18);
        });
    }
}

// polyfill for Canvas roundRect (in older browsers, just in case)
if (CanvasRenderingContext2D && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (typeof r === 'number') r = [r, r, r, r];
        const rTopLeft = r[0] || 0;
        const rTopRight = r[1] || 0;
        const rBottomRight = r[2] || 0;
        const rBottomLeft = r[3] || 0;
        this.beginPath();
        this.moveTo(x + rTopLeft, y);
        this.lineTo(x + w - rTopRight, y);
        this.quadraticCurveTo(x + w, y, x + w, y + rTopRight);
        this.lineTo(x + w, y + h - rBottomRight);
        this.quadraticCurveTo(x + w, y + h, x + w - rBottomRight, y + h);
        this.lineTo(x + rBottomLeft, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - rBottomLeft);
        this.lineTo(x, y + rTopLeft);
        this.quadraticCurveTo(x, y, x + rTopLeft, y);
        this.closePath();
        return this;
    }
}


// ==========================================================================
// Employee Directory Logic
// ==========================================================================

function renderEmployeesView() {
    // Generate filtered data list
    const filteredEmployees = getFilteredEmployees();
    
    // Check view state (list vs grid)
    const listContainer = document.getElementById("employees-table-container");
    const gridContainer = document.getElementById("employees-grid-container");

    if (state.viewMode === "list") {
        listContainer.style.display = "block";
        gridContainer.classList.remove("active");
        renderEmployeesTable(filteredEmployees);
    } else {
        listContainer.style.display = "none";
        gridContainer.classList.add("active");
        renderEmployeesGrid(filteredEmployees);
    }

    // Populate department drop-downs in filter and modals if they are empty
    populateDepartmentSelects();
    updateBulkActionBar();
}

// Filters & sorting implementation
function getFilteredEmployees() {
    return state.employees.filter(emp => {
        // Search matches query
        const textToSearch = `${emp.firstName} ${emp.lastName} ${emp.email} ${emp.role}`.toLowerCase();
        const matchesQuery = textToSearch.includes(state.searchQuery.toLowerCase());

        // Department filter
        const matchesDept = (state.filterDept === "all" || emp.department === state.filterDept);

        // Status filter
        const matchesStatus = (state.filterStatus === "all" || emp.status === state.filterStatus);

        return matchesQuery && matchesDept && matchesStatus;
    }).sort((a, b) => {
        // Sort switch
        let comparison = 0;
        switch (state.filterSort) {
            case "name-asc":
                comparison = `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
                break;
            case "name-desc":
                comparison = `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`);
                break;
            case "salary-desc":
                comparison = b.salary - a.salary;
                break;
            case "salary-asc":
                comparison = a.salary - b.salary;
                break;
            case "date-desc":
                comparison = new Date(b.joinDate) - new Date(a.joinDate);
                break;
            case "date-asc":
                comparison = new Date(a.joinDate) - new Date(b.joinDate);
                break;
        }
        return comparison;
    });
}

// Populating drop-down filters
function populateDepartmentSelects() {
    const filterDept = document.getElementById("filter-dept");
    const formDept = document.getElementById("emp-dept");

    if (filterDept && filterDept.children.length <= 1) {
        state.departments.forEach(dept => {
            const option = document.createElement("option");
            option.value = dept.name;
            option.textContent = dept.name;
            filterDept.appendChild(option);
        });
    }

    if (formDept && formDept.children.length === 0) {
        state.departments.forEach(dept => {
            const option = document.createElement("option");
            option.value = dept.name;
            option.textContent = dept.name;
            formDept.appendChild(option);
        });
    }
}

// Table directory render
function renderEmployeesTable(list) {
    const tbody = document.getElementById("employee-table-body");
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">
                    No employees matching the search filters.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = list.map(emp => {
        const isChecked = state.selectedIds.has(emp.id) ? "checked" : "";
        const initials = `${emp.firstName.charAt(0)}${emp.lastName.charAt(0)}`.toUpperCase();
        
        return `
            <tr data-id="${emp.id}">
                <td class="checkbox-cell">
                    <input type="checkbox" class="custom-checkbox row-select-checkbox" data-id="${emp.id}" ${isChecked}>
                </td>
                <td>
                    <div class="employee-profile-cell">
                        <div class="avatar" style="background-color: ${emp.avatarColor || '#6366f1'};">
                            <span class="avatar-initials">${initials}</span>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span class="employee-details-name btn-view-profile" data-id="${emp.id}">${emp.firstName} ${emp.lastName}</span>
                            <span class="employee-details-email">${emp.email}</span>
                        </div>
                    </div>
                </td>
                <td>${emp.role}</td>
                <td>${emp.department}</td>
                <td>
                    <span class="badge badge-${emp.status.toLowerCase().replace(" ", "")}">${emp.status}</span>
                </td>
                <td>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(emp.salary)}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.35rem;">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="var(--warning)" stroke="var(--warning)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <strong>${parseFloat(emp.performance).toFixed(1)}</strong>
                    </div>
                </td>
                <td>${formatDate(emp.joinDate)}</td>
                <td>
                    <div class="action-menu-container">
                        <button class="action-dot-btn dropdown-menu-trigger" data-id="${emp.id}">
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                        <div class="action-dropdown" id="dropdown-${emp.id}">
                            <button class="dropdown-item btn-view-profile" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                Profile
                            </button>
                            <button class="dropdown-item btn-edit-employee" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                                Edit Profile
                            </button>
                            <button class="dropdown-item danger-item btn-delete-employee" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

// Grid directory render
function renderEmployeesGrid(list) {
    const grid = document.getElementById("employees-grid-container");
    if (!grid) return;

    if (list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-muted); font-style: italic;">
                No employees matching the search filters.
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(emp => {
        const isChecked = state.selectedIds.has(emp.id) ? "checked" : "";
        const initials = `${emp.firstName.charAt(0)}${emp.lastName.charAt(0)}`.toUpperCase();
        
        return `
            <div class="glass-card employee-card" data-id="${emp.id}">
                <input type="checkbox" class="custom-checkbox employee-card-checkbox row-select-checkbox" data-id="${emp.id}" ${isChecked}>
                
                <div class="employee-card-menu">
                    <div class="action-menu-container">
                        <button class="action-dot-btn dropdown-menu-trigger" data-id="${emp.id}">
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                        <div class="action-dropdown" id="dropdown-${emp.id}">
                            <button class="dropdown-item btn-view-profile" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                View Profile
                            </button>
                            <button class="dropdown-item btn-edit-employee" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                                Edit Details
                            </button>
                            <button class="dropdown-item danger-item btn-delete-employee" data-id="${emp.id}">
                                <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                Delete Staff
                            </button>
                        </div>
                    </div>
                </div>

                <div class="avatar" style="background-color: ${emp.avatarColor || '#6366f1'};">
                    <span>${initials}</span>
                </div>
                
                <h4 class="employee-card-name btn-view-profile" data-id="${emp.id}">${emp.firstName} ${emp.lastName}</h4>
                <div class="employee-card-role">${emp.role}</div>
                <div class="employee-card-dept">${emp.department}</div>
                
                <span class="badge badge-${emp.status.toLowerCase().replace(" ", "")} employee-card-badge">${emp.status}</span>
                
                <div class="employee-card-stats">
                    <div class="card-stat" style="border-right: 1px solid var(--border-color);">
                        <span class="card-stat-label">Salary</span>
                        <span class="card-stat-val">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(emp.salary)}</span>
                    </div>
                    <div class="card-stat">
                        <span class="card-stat-label">Performance</span>
                        <span class="card-stat-val" style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                            <svg viewBox="0 0 24 24" width="11" height="11" fill="var(--warning)" stroke="var(--warning)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            ${parseFloat(emp.performance || 0).toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Bulk selections popup logic
function updateBulkActionBar() {
    const bar = document.getElementById("bulk-actions-bar");
    const countText = document.getElementById("bulk-actions-count");
    
    if (state.selectedIds.size > 0) {
        bar.classList.add("active");
        countText.textContent = `${state.selectedIds.size} selected`;
    } else {
        bar.classList.remove("active");
    }
}

// Helper formatting date
function formatDate(dateStr) {
    if (!dateStr) return "";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}


// ==========================================================================
// Departments View Logic
// ==========================================================================

function renderDepartmentsView() {
    const grid = document.getElementById("departments-grid");
    if (!grid) return;

    // Aggregate staff count and budget allocation
    const deptTotals = {};
    const deptHeadcount = {};
    
    state.departments.forEach(d => {
        deptTotals[d.name] = 0;
        deptHeadcount[d.name] = 0;
    });

    state.employees.forEach(emp => {
        if (deptTotals[emp.department] !== undefined) {
            deptTotals[emp.department] += emp.salary;
            deptHeadcount[emp.department] += 1;
        }
    });

    grid.innerHTML = state.departments.map(dept => {
        const activeBudget = deptTotals[dept.name] || 0;
        const headcount = deptHeadcount[dept.name] || 0;
        const budgetPercent = Math.min((activeBudget / dept.budget) * 100, 100).toFixed(0);

        // Fetch first initials of manager name
        const mgrInitials = dept.manager.split(" ").map(w => w.charAt(0)).join("").toUpperCase();

        return `
            <div class="glass-card dept-card">
                <div class="dept-header">
                    <div class="dept-title-group">
                        <div class="dept-icon" style="background-color: ${dept.color}22; color: ${dept.color};">
                            <svg viewBox="0 0 24 24">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="dept-name">${dept.name}</h4>
                            <span class="dept-manager">Lead: <strong>${dept.manager}</strong></span>
                        </div>
                    </div>
                </div>

                <div class="dept-stats">
                    <div class="dept-stat">
                        <span class="dept-stat-label">Active Headcount</span>
                        <span class="dept-stat-value">${headcount} members</span>
                    </div>
                    <div class="dept-stat" style="text-align: right;">
                        <span class="dept-stat-label">Salary Spend</span>
                        <span class="dept-stat-value">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(activeBudget)}</span>
                    </div>
                </div>

                <div class="dept-progress">
                    <div class="dept-progress-label">
                        <span>Budget Cap Utilization</span>
                        <span>${budgetPercent}% of ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(dept.budget)}</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-bar" style="width: ${budgetPercent}%; background: ${dept.color};"></div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}


// ==========================================================================
// Event Handlers / Click Interceptions
// ==========================================================================

function setupEventListeners() {
    // 1. Sidebar Tab Navigation Click interception
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.getAttribute("data-tab");
            state.currentTab = targetTab;
            renderApp();
            
            // clear selected actions when switching tabs
            state.selectedIds.clear();
            updateBulkActionBar();
        });
    });

    // 2. Theme Toggles
    const headerThemeBtn = document.getElementById("theme-toggle");
    if (headerThemeBtn) {
        headerThemeBtn.addEventListener("click", toggleThemeMode);
    }
    
    const settingsThemeToggle = document.getElementById("settings-dark-mode-toggle");
    if (settingsThemeToggle) {
        settingsThemeToggle.addEventListener("change", (e) => {
            state.theme = e.target.checked ? "dark" : "light";
            saveState();
            renderTheme();
        });
    }

    // 3. Search and Filtering hooks
    const globalSearch = document.getElementById("global-search");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            state.searchQuery = e.target.value;
            // auto route back to employees directory when searching
            if (state.currentTab !== "employees") {
                state.currentTab = "employees";
                renderApp();
            } else {
                renderEmployeesView();
            }
        });
    }

    const filterDept = document.getElementById("filter-dept");
    if (filterDept) {
        filterDept.addEventListener("change", (e) => {
            state.filterDept = e.target.value;
            renderEmployeesView();
        });
    }

    const filterStatus = document.getElementById("filter-status");
    if (filterStatus) {
        filterStatus.addEventListener("change", (e) => {
            state.filterStatus = e.target.value;
            renderEmployeesView();
        });
    }

    const filterSort = document.getElementById("filter-sort");
    if (filterSort) {
        filterSort.addEventListener("change", (e) => {
            state.filterSort = e.target.value;
            renderEmployeesView();
        });
    }

    // Grid vs List view toggle
    const viewListBtn = document.getElementById("view-toggle-list");
    const viewGridBtn = document.getElementById("view-toggle-grid");
    
    if (viewListBtn && viewGridBtn) {
        viewListBtn.addEventListener("click", () => {
            state.viewMode = "list";
            viewListBtn.classList.add("active");
            viewGridBtn.classList.remove("active");
            renderEmployeesView();
        });
        
        viewGridBtn.addEventListener("click", () => {
            state.viewMode = "grid";
            viewGridBtn.classList.add("active");
            viewListBtn.classList.remove("active");
            renderEmployeesView();
        });
    }

    // 4. Modal Triggers
    const addEmpBtn = document.getElementById("add-employee-btn");
    const empModalCancel = document.getElementById("employee-modal-cancel");
    const empModalClose = document.getElementById("employee-modal-close");
    const empModalSave = document.getElementById("employee-modal-save");

    if (addEmpBtn) {
        addEmpBtn.addEventListener("click", () => openEmployeeModal(null));
    }
    if (empModalCancel) {
        empModalCancel.addEventListener("click", closeEmployeeModal);
    }
    if (empModalClose) {
        empModalClose.addEventListener("click", closeEmployeeModal);
    }
    if (empModalSave) {
        empModalSave.addEventListener("click", saveEmployeeForm);
    }

    // Close Modals when clicking backdrop overlays
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closeEmployeeModal();
                closeProfileModal();
            }
        });
    });

    const profModalClose = document.getElementById("profile-modal-close");
    if (profModalClose) {
        profModalClose.addEventListener("click", closeProfileModal);
    }
    
    const profModalEdit = document.getElementById("profile-modal-edit-btn");
    if (profModalEdit) {
        profModalEdit.addEventListener("click", () => {
            const empId = profModalEdit.getAttribute("data-id");
            closeProfileModal();
            openEmployeeModal(empId);
        });
    }

    // 5. Dynamic Employee lists/table click interception
    const contentBody = document.querySelector(".content-body");
    if (contentBody) {
        contentBody.addEventListener("click", (e) => {
            // View Profile clicks
            const profileTrigger = e.target.closest(".btn-view-profile");
            if (profileTrigger) {
                const id = profileTrigger.getAttribute("data-id");
                openProfileModal(id);
                return;
            }

            // Edit Profile triggers
            const editTrigger = e.target.closest(".btn-edit-employee");
            if (editTrigger) {
                const id = editTrigger.getAttribute("data-id");
                openEmployeeModal(id);
                return;
            }

            // Delete triggers
            const deleteTrigger = e.target.closest(".btn-delete-employee");
            if (deleteTrigger) {
                const id = deleteTrigger.getAttribute("data-id");
                deleteEmployee(id);
                return;
            }

            // Dropdown menu toggle buttons
            const dropdownTrigger = e.target.closest(".dropdown-menu-trigger");
            if (dropdownTrigger) {
                e.stopPropagation();
                const id = dropdownTrigger.getAttribute("data-id");
                toggleDropdownMenu(id);
                return;
            }

            // Row / Card Checkbox selections
            const checkboxTrigger = e.target.closest(".row-select-checkbox");
            if (checkboxTrigger) {
                const id = checkboxTrigger.getAttribute("data-id");
                if (checkboxTrigger.checked) {
                    state.selectedIds.add(id);
                } else {
                    state.selectedIds.delete(id);
                }
                updateBulkActionBar();
                return;
            }
        });
    }

    // Select all checkboxes toggle
    const selectAllCheckbox = document.getElementById("checkbox-select-all");
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", (e) => {
            const filteredList = getFilteredEmployees();
            if (e.target.checked) {
                filteredList.forEach(emp => state.selectedIds.add(emp.id));
            } else {
                state.selectedIds.clear();
            }
            renderEmployeesView();
        });
    }

    // Bulk actions events
    const bulkActivate = document.getElementById("bulk-activate-btn");
    const bulkLeave = document.getElementById("bulk-leave-btn");
    const bulkDelete = document.getElementById("bulk-delete-btn");
    const bulkClose = document.getElementById("bulk-close-btn");

    if (bulkActivate) {
        bulkActivate.addEventListener("click", () => bulkUpdateStatus("Active"));
    }
    if (bulkLeave) {
        bulkLeave.addEventListener("click", () => bulkUpdateStatus("On Leave"));
    }
    if (bulkDelete) {
        bulkDelete.addEventListener("click", bulkDeleteEmployees);
    }
    if (bulkClose) {
        bulkClose.addEventListener("click", () => {
            state.selectedIds.clear();
            renderEmployeesView();
        });
    }

    // Close dropdown menus when clicking elsewhere
    document.addEventListener("click", () => {
        document.querySelectorAll(".action-dropdown").forEach(drop => {
            drop.classList.remove("active");
        });
    });

    // 6. Settings Operations Click triggers
    const resetDataBtn = document.getElementById("settings-reset-data-btn");
    if (resetDataBtn) {
        resetDataBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all data back to default mock profiles? Any custom additions or edits will be lost.")) {
                localStorage.removeItem("helix_employees");
                localStorage.removeItem("helix_departments");
                localStorage.removeItem("helix_activities");
                loadState();
                renderApp();
                showToast("System database successfully reset to default.", "warning");
            }
        });
    }

    const exportDataBtn = document.getElementById("settings-export-data-btn");
    if (exportDataBtn) {
        exportDataBtn.addEventListener("click", () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.employees, null, 4));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "helix_employees_db.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast("Employee database successfully exported to JSON.", "success");
        });
    }
}

// Light & Dark theme toggle
function toggleThemeMode() {
    state.theme = (state.theme === "dark") ? "light" : "dark";
    saveState();
    renderTheme();
}

// Action dropdown menu switcher
function toggleDropdownMenu(id) {
    // Close other dropdowns
    document.querySelectorAll(".action-dropdown").forEach(drop => {
        if (drop.id !== `dropdown-${id}`) {
            drop.classList.remove("active");
        }
    });

    const targetDropdown = document.getElementById(`dropdown-${id}`);
    if (targetDropdown) {
        targetDropdown.classList.toggle("active");
    }
}


// ==========================================================================
// CRUD / Modal Controller Operations
// ==========================================================================

function openEmployeeModal(id = null) {
    state.editingEmployeeId = id;
    const modal = document.getElementById("employee-modal");
    const title = document.getElementById("employee-modal-title");
    const form = document.getElementById("employee-form");

    // Populate department list inside modal select
    populateDepartmentSelects();

    if (id) {
        title.textContent = "Edit Employee Profile";
        const emp = state.employees.find(e => e.id === id);
        if (emp) {
            document.getElementById("employee-id").value = emp.id;
            document.getElementById("emp-first-name").value = emp.firstName;
            document.getElementById("emp-last-name").value = emp.lastName;
            document.getElementById("emp-email").value = emp.email;
            document.getElementById("emp-phone").value = emp.phone;
            document.getElementById("emp-dept").value = emp.department;
            document.getElementById("emp-role").value = emp.role;
            document.getElementById("emp-salary").value = emp.salary;
            document.getElementById("emp-performance").value = emp.performance;
            document.getElementById("emp-join-date").value = emp.joinDate;
            document.getElementById("emp-status").value = emp.status;
        }
    } else {
        title.textContent = "Add New Employee";
        form.reset();
        document.getElementById("employee-id").value = "";
        
        // set default dates to today
        const today = new Date().toISOString().split("T")[0];
        document.getElementById("emp-join-date").value = today;
    }

    modal.classList.add("active");
}

function closeEmployeeModal() {
    const modal = document.getElementById("employee-modal");
    if (modal) modal.classList.remove("active");
    state.editingEmployeeId = null;
}

function saveEmployeeForm() {
    const form = document.getElementById("employee-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const id = document.getElementById("employee-id").value;
    const firstName = document.getElementById("emp-first-name").value.trim();
    const lastName = document.getElementById("emp-last-name").value.trim();
    const email = document.getElementById("emp-email").value.trim();
    const phone = document.getElementById("emp-phone").value.trim();
    const department = document.getElementById("emp-dept").value;
    const role = document.getElementById("emp-role").value.trim();
    const salary = parseInt(document.getElementById("emp-salary").value);
    const performance = parseFloat(document.getElementById("emp-performance").value);
    const joinDate = document.getElementById("emp-join-date").value;
    const status = document.getElementById("emp-status").value;

    if (id) {
        // Edit Mode
        const empIndex = state.employees.findIndex(e => e.id === id);
        if (empIndex > -1) {
            state.employees[empIndex] = {
                ...state.employees[empIndex],
                firstName, lastName, email, phone, department, role, salary, performance, joinDate, status
            };
            logActivity("edit", `Updated profile details of ${firstName} ${lastName}.`);
            showToast(`${firstName} ${lastName}'s profile has been updated.`);
        }
    } else {
        // Add Mode
        const newId = `emp-${Date.now()}`;
        const avatarColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
        
        const newEmployee = {
            id: newId,
            firstName, lastName, email, phone, department, role, salary, performance, joinDate, status, avatarColor
        };
        state.employees.push(newEmployee);
        logActivity("join", `Joined ${firstName} ${lastName} to ${department} department.`);
        showToast(`${firstName} ${lastName} successfully added to payroll.`);
    }

    saveState();
    closeEmployeeModal();
    renderApp();
}

function deleteEmployee(id) {
    const emp = state.employees.find(e => e.id === id);
    if (!emp) return;

    if (confirm(`Are you sure you want to delete the payroll file and profile for ${emp.firstName} ${emp.lastName}?`)) {
        state.employees = state.employees.filter(e => e.id !== id);
        state.selectedIds.delete(id); // remove if checked
        
        logActivity("delete", `Removed ${emp.firstName} ${emp.lastName} from corporate database.`);
        saveState();
        showToast(`${emp.firstName} ${emp.lastName} profile files deleted.`, "danger");
        renderApp();
    }
}

// Bulk Actions status updates
function bulkUpdateStatus(newStatus) {
    if (state.selectedIds.size === 0) return;

    state.employees = state.employees.map(emp => {
        if (state.selectedIds.has(emp.id)) {
            return { ...emp, status: newStatus };
        }
        return emp;
    });

    logActivity("status", `Updated status for ${state.selectedIds.size} employees to ${newStatus}.`);
    saveState();
    showToast(`Updated status to '${newStatus}' for ${state.selectedIds.size} employees.`);
    state.selectedIds.clear();
    renderApp();
}

// Bulk deletion
function bulkDeleteEmployees() {
    if (state.selectedIds.size === 0) return;

    if (confirm(`Are you sure you want to permanently delete the ${state.selectedIds.size} selected employee profiles?`)) {
        state.employees = state.employees.filter(emp => !state.selectedIds.has(emp.id));
        
        logActivity("delete", `Deleted ${state.selectedIds.size} personnel files.`);
        saveState();
        showToast(`Successfully deleted ${state.selectedIds.size} employee profiles.`, "danger");
        state.selectedIds.clear();
        renderApp();
    }
}

// View profile details cards
function openProfileModal(id) {
    const emp = state.employees.find(e => e.id === id);
    if (!emp) return;

    const modal = document.getElementById("profile-modal");
    const avatar = document.getElementById("profile-avatar");
    const initials = `${emp.firstName.charAt(0)}${emp.lastName.charAt(0)}`.toUpperCase();

    avatar.textContent = initials;
    avatar.style.backgroundColor = emp.avatarColor || "#6366f1";
    
    document.getElementById("profile-name").textContent = `${emp.firstName} ${emp.lastName}`;
    document.getElementById("profile-role").textContent = emp.role;
    document.getElementById("profile-dept").textContent = `${emp.department} Department`;
    
    document.getElementById("profile-email").textContent = emp.email;
    document.getElementById("profile-phone").textContent = emp.phone;
    document.getElementById("profile-join-date").textContent = formatDate(emp.joinDate);
    
    // Annual Salary formatting
    document.getElementById("profile-salary").textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(emp.salary);

    // Performance bar updates
    const scoreVal = parseFloat(emp.performance || 0);
    document.getElementById("profile-performance-val").textContent = `${scoreVal.toFixed(1)} / 5.0`;
    const scorePercent = (scoreVal / 5.0) * 100;
    
    const performanceBar = document.getElementById("profile-performance-bar");
    performanceBar.style.width = `${scorePercent}%`;
    
    // Performance color matching
    if (scoreVal >= 4.5) {
        performanceBar.style.background = "linear-gradient(to right, #10b981, #34d399)"; // success
    } else if (scoreVal >= 3.5) {
        performanceBar.style.background = "linear-gradient(to right, #6366f1, #818cf8)"; // primary
    } else if (scoreVal >= 2.5) {
        performanceBar.style.background = "linear-gradient(to right, #f59e0b, #fbbf24)"; // warning
    } else {
        performanceBar.style.background = "linear-gradient(to right, #ef4444, #f87171)"; // danger
    }

    // Status badge styling updates
    const statusBadge = document.getElementById("profile-status-badge");
    statusBadge.textContent = emp.status;
    statusBadge.className = `badge badge-${emp.status.toLowerCase().replace(" ", "")}`;

    // Edit button attachment
    const editBtn = document.getElementById("profile-modal-edit-btn");
    editBtn.setAttribute("data-id", emp.id);

    modal.classList.add("active");
}

function closeProfileModal() {
    const modal = document.getElementById("profile-modal");
    if (modal) modal.classList.remove("active");
}
