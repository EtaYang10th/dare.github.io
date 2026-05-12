// DARE project page interactions and paper-table rendering
const paperData = {
  summary: [
    {
      label: "Estimator MAE",
      value: "0.189",
      detail: "Our Estimation closes most of the gap to the oracle Current FR estimator."
    },
    {
      label: "Training speedup",
      value: "8.71×",
      detail: "On Qwen2.5-Math-7B MATH-500, SNIS reaches the target in 14 steps vs. 122."
    },
    {
      label: "Inference tokens",
      value: "601",
      detail: "DARE lowers MATH-500 overall tokens from 627 to 601 while raising accuracy to 72.6%."
    },
    {
      label: "Final gain",
      value: "+5.6",
      detail: "All-component ablation improves the 1.5B overall score from 45.2 to 50.8."
    }
  ],
  comparison: [
    { method: "GRPO", math500: 66.8, gsm8k: 77.6, aimeAmc: 45.8, minerva: 13.2, olympiad: 22.6, overall: 45.2, baseline: true },
    { method: "SNIS", math500: 69.8, gsm8k: 80.1, aimeAmc: 46.7, minerva: 14.3, olympiad: 24.0, overall: 47.0 },
    { method: "Dynamic selection", math500: 71.6, gsm8k: 83.4, aimeAmc: 47.0, minerva: 15.1, olympiad: 24.2, overall: 48.3 },
    { method: "Easy penalty", math500: 69.4, gsm8k: 83.5, aimeAmc: 48.2, minerva: 16.2, olympiad: 24.0, overall: 48.5 },
    { method: "Hard bonus", math500: 71.6, gsm8k: 82.5, aimeAmc: 47.0, minerva: 17.3, olympiad: 25.1, overall: 48.7 },
    { method: "DARE (all components)", math500: 72.6, gsm8k: 84.5, aimeAmc: 50.6, minerva: 19.9, olympiad: 26.4, overall: 50.8, ours: true }
  ],
  estimation: [
    { method: "Random Selection", mse: 0.1624, mae: 0.3719, baseline: true },
    { method: "Entropy-Based Estimation", mse: 0.1288, mae: 0.3120 },
    { method: "Previous FR Estimation", mse: 0.1622, mae: 0.2988 },
    { method: "LLM-Judge", mse: 0.1568, mae: 0.3688 },
    { method: "Bayesian Posterior Estimation", mse: 0.0964, mae: 0.2839 },
    { method: "Embedding-Based Prediction", mse: 0.0943, mae: 0.2775 },
    { method: "Current FR Estimation", mse: 0.0473, mae: 0.1688, oracle: true },
    { method: "Our Estimation", mse: 0.0654, mae: 0.1894, ours: true }
  ],
  training: {
    "Qwen2.5-Math-1.5B": [
      { method: "Random Selection", mathAuc: 64.4, mathStep: 118, mathSpeed: "1.00×", gsmAuc: 72.4, gsmStep: 184, gsmSpeed: "1.00×", baseline: true },
      { method: "DOTS", mathAuc: 65.7, mathStep: 64, mathSpeed: "1.84×", gsmAuc: 75.5, gsmStep: 74, gsmSpeed: "2.49×" },
      { method: "EDCO", mathAuc: 65.5, mathStep: 86, mathSpeed: "1.37×", gsmAuc: 75.2, gsmStep: 104, gsmSpeed: "1.77×" },
      { method: "LLM-Judge", mathAuc: 65.1, mathStep: 102, mathSpeed: "1.16×", gsmAuc: 74.1, gsmStep: 124, gsmSpeed: "1.48×" },
      { method: "MoPPS", mathAuc: 65.1, mathStep: 92, mathSpeed: "1.28×", gsmAuc: 77.3, gsmStep: 54, gsmSpeed: "3.41×" },
      { method: "Previous FR Estimation", mathAuc: 64.1, mathStep: 114, mathSpeed: "1.04×", gsmAuc: 73.1, gsmStep: 82, gsmSpeed: "2.24×" },
      { method: "Our Estimation", mathAuc: 66.3, mathStep: 42, mathSpeed: "2.81×", gsmAuc: 77.1, gsmStep: 46, gsmSpeed: "4.00×", ours: true }
    ],
    "Qwen2.5-Math-7B": [
      { method: "Random Selection", mathAuc: 72.2, mathStep: 122, mathSpeed: "1.00×", gsmAuc: 84.3, gsmStep: "--", gsmSpeed: "--", baseline: true },
      { method: "DOTS", mathAuc: 73.3, mathStep: 52, mathSpeed: "2.35×", gsmAuc: 86.3, gsmStep: 56, gsmSpeed: "--" },
      { method: "EDCO", mathAuc: 73.2, mathStep: 52, mathSpeed: "2.35×", gsmAuc: 86.1, gsmStep: 12, gsmSpeed: "--" },
      { method: "LLM-Judge", mathAuc: 72.8, mathStep: 52, mathSpeed: "2.35×", gsmAuc: 85.4, gsmStep: 162, gsmSpeed: "--" },
      { method: "MoPPS", mathAuc: 72.7, mathStep: 114, mathSpeed: "1.07×", gsmAuc: 88.8, gsmStep: 30, gsmSpeed: "--" },
      { method: "Previous FR Estimation", mathAuc: 73.0, mathStep: 118, mathSpeed: "1.03×", gsmAuc: 86.1, gsmStep: 58, gsmSpeed: "--" },
      { method: "Our Estimation", mathAuc: 73.2, mathStep: 14, mathSpeed: "8.71×", gsmAuc: 86.5, gsmStep: 36, gsmSpeed: "--", ours: true }
    ],
    "SmolLM3-3B": [
      { method: "GRPO", mathAuc: 68.6, mathStep: "--", gsmAuc: 79.7, gsmStep: "--", baseline: true },
      { method: "DOTS", mathAuc: 70.4, mathStep: 44, gsmAuc: 80.7, gsmStep: 22 },
      { method: "EDCO", mathAuc: 69.9, mathStep: 44, gsmAuc: 82.2, gsmStep: 14 },
      { method: "LLM-Judge", mathAuc: 69.0, mathStep: 62, gsmAuc: 80.9, gsmStep: 34 },
      { method: "MoPPS", mathAuc: 69.6, mathStep: 50, gsmAuc: 82.1, gsmStep: 16 },
      { method: "Previous FR Estimation", mathAuc: 69.1, mathStep: 34, gsmAuc: 80.4, gsmStep: 84 },
      { method: "Our Estimation", mathAuc: 71.0, mathStep: 24, gsmAuc: 82.8, gsmStep: 14, ours: true }
    ]
  },
  inference: [
    { method: "GRPO / Random Selection", l1Tok: 357.3, l1Acc: 88.4, l2Tok: 441.5, l2Acc: 80.0, l3Tok: 539.4, l3Acc: 77.1, l4Tok: 726.2, l4Acc: 66.4, l5Tok: 811.6, l5Acc: 45.5, overallTok: 626.9, overallAcc: 67.4, baseline: true },
    { method: "Embedding-Based Prediction", l1Tok: 349.5, l1Acc: 90.7, l2Tok: 451.5, l2Acc: 81.1, l3Tok: 583.4, l3Acc: 80.0, l4Tok: 706.0, l4Acc: 71.1, l5Tok: 876.7, l5Acc: 44.8, overallTok: 649.5, overallAcc: 69.4 },
    { method: "Entropy-Based Estimation", l1Tok: 325.5, l1Acc: 88.4, l2Tok: 452.0, l2Acc: 78.9, l3Tok: 573.7, l3Acc: 78.1, l4Tok: 682.4, l4Acc: 69.5, l5Tok: 912.9, l5Acc: 48.5, overallTok: 649.2, overallAcc: 69.0 },
    { method: "LLM-Judge", l1Tok: 342.2, l1Acc: 89.7, l2Tok: 413.0, l2Acc: 81.2, l3Tok: 536.0, l3Acc: 80.0, l4Tok: 751.3, l4Acc: 68.5, l5Tok: 809.9, l5Acc: 49.0, overallTok: 625.7, overallAcc: 69.8 },
    { method: "Bayesian Posterior Estimation", l1Tok: 339.2, l1Acc: 91.2, l2Tok: 449.8, l2Acc: 81.4, l3Tok: 587.4, l3Acc: 80.2, l4Tok: 714.5, l4Acc: 70.9, l5Tok: 815.2, l5Acc: 45.6, overallTok: 634.8, overallAcc: 69.7 },
    { method: "Previous FR Estimation", l1Tok: 357.3, l1Acc: 87.4, l2Tok: 435.5, l2Acc: 81.0, l3Tok: 567.4, l3Acc: 76.4, l4Tok: 712.9, l4Acc: 67.4, l5Tok: 800.6, l5Acc: 46.8, overallTok: 625.3, overallAcc: 67.9 },
    { method: "SNIS filtration only", l1Tok: 359.4, l1Acc: 90.7, l2Tok: 438.3, l2Acc: 82.2, l3Tok: 545.7, l3Acc: 82.9, l4Tok: 679.6, l4Acc: 71.1, l5Tok: 873.0, l5Acc: 43.3, overallTok: 632.3, overallAcc: 69.8 },
    { method: "DARE all components", l1Tok: 356, l1Acc: 87.45, l2Tok: 428, l2Acc: 84.62, l3Tok: 518, l3Acc: 84.40, l4Tok: 689, l4Acc: 70.93, l5Tok: 912, l5Acc: 53.64, overallTok: 601, overallAcc: 72.60, ours: true }
  ],
  ablation15b: [
    { method: "GRPO", math500: 66.8, gsm8k: 77.6, aimeAmc: 45.8, minerva: 13.2, olympiad: 22.6, overall: 45.2, baseline: true },
    { method: "+ SNIS", math500: 69.8, gsm8k: 80.1, aimeAmc: 46.7, minerva: 14.3, olympiad: 24.0, overall: 47.0 },
    { method: "+ dynamic selection", math500: 71.6, gsm8k: 83.4, aimeAmc: 47.0, minerva: 15.1, olympiad: 24.2, overall: 48.3 },
    { method: "+ easy penalty", math500: 69.4, gsm8k: 83.5, aimeAmc: 48.2, minerva: 16.2, olympiad: 24.0, overall: 48.5 },
    { method: "+ hard bonus", math500: 71.6, gsm8k: 82.5, aimeAmc: 47.0, minerva: 17.3, olympiad: 25.1, overall: 48.7 },
    { method: "All components", math500: 72.6, gsm8k: 84.5, aimeAmc: 50.6, minerva: 19.9, olympiad: 26.4, overall: 50.8, ours: true }
  ],
  ablationSmolLM: [
    { method: "GRPO", math500: 71.6, aimeAmc: 51.8, minerva: 19.5, olympiad: 23.7, overall: 41.7, baseline: true },
    { method: "+ SNIS", math500: 74.6, aimeAmc: 34.8, minerva: 19.1, olympiad: 20.9, overall: 37.4 },
    { method: "+ think-longer", math500: 76.5, aimeAmc: 36.1, minerva: 19.1, olympiad: 20.9, overall: 38.2 },
    { method: "+ memory hint", math500: 77.8, aimeAmc: 36.1, minerva: 20.2, olympiad: 21.8, overall: 39.0 },
    { method: "+ EL + HL", math500: 76.0, aimeAmc: 31.3, minerva: 19.9, olympiad: 21.4, overall: 37.2 },
    { method: "+ relaxed upper clipping", math500: 77.4, aimeAmc: 49.4, minerva: 20.6, olympiad: 28.9, overall: 44.1, ours: true }
  ],
  elHl: [
    { easy: "--", hard: "--", aime24: 8.33, aimeTok: 1266, gsm8k: 80.14, gsmTok: 370, aimeAmc: 46.99, aimeAmcTok: 868, minerva: 14.34, minervaTok: 746, olympiad: 24.04, olympiadTok: 920, baseline: true },
    { easy: "10⁻⁴", hard: "10⁻⁴", aime24: 3.33, aimeTok: 1466, gsm8k: 82.49, gsmTok: 351, aimeAmc: 46.99, aimeAmcTok: 1056, minerva: 17.28, minervaTok: 882, olympiad: 25.07, olympiadTok: 1062 },
    { easy: "10⁻⁴", hard: "--", aime24: 6.67, aimeTok: 1000, gsm8k: 86.43, gsmTok: 233, aimeAmc: 46.99, aimeAmcTok: 796, minerva: 12.87, minervaTok: 720, olympiad: 21.96, olympiadTok: 764 },
    { easy: "2×10⁻⁴", hard: "10⁻⁴", aime24: 3.33, aimeTok: 1104, gsm8k: 89.01, gsmTok: 248, aimeAmc: 44.58, aimeAmcTok: 741, minerva: 12.87, minervaTok: 712, olympiad: 21.07, olympiadTok: 667 },
    { easy: "10⁻⁴", hard: "2×10⁻⁴", aime24: 6.67, aimeTok: 2011, gsm8k: 80.52, gsmTok: 588, aimeAmc: 48.19, aimeAmcTok: 1842, minerva: 16.91, minervaTok: 1515, olympiad: 24.04, olympiadTok: 1491 }
  ],
  clip: [
    { range: "0.8--1.2", aime24: 8.33, math500: 69.80, gsm8k: 80.14, aimeAmc: 46.99, minerva: 14.34, olympiad: 24.04, baseline: true },
    { range: "0.6--1.2", aime24: 6.67, math500: 69.32, gsm8k: 78.82, aimeAmc: 45.54, minerva: 11.70, olympiad: 23.41 },
    { range: "0.6--1.4", aime24: 8.33, math500: 70.40, gsm8k: 81.79, aimeAmc: 48.80, minerva: 17.65, olympiad: 24.04 },
    { range: "0.8--1.4", aime24: 8.33, math500: 70.60, gsm8k: 82.34, aimeAmc: 49.40, minerva: 18.75, olympiad: 24.04 },
    { range: "0.8--1.6", aime24: 10.00, math500: 70.84, gsm8k: 81.20, aimeAmc: 50.12, minerva: 19.99, olympiad: 24.04, ours: true }
  ],
  difficulty: [
    { method: "Random Selection", mse: 0.1624, mae: 0.3719, baseline: true },
    { method: "Entropy-Based Estimation", mse: 0.1288, mae: 0.3120 },
    { method: "Previous FR Estimation", mse: 0.1622, mae: 0.2988 },
    { method: "LLM-Judge", mse: 0.1568, mae: 0.3688 },
    { method: "Bayesian Posterior Estimation", mse: 0.0964, mae: 0.2839 },
    { method: "Embedding-Based Prediction", mse: 0.0943, mae: 0.2775 },
    { method: "Current FR Estimation", mse: 0.0473, mae: 0.1688, oracle: true },
    { method: "Our Estimation", mse: 0.0654, mae: 0.1894, ours: true }
  ],
  memory: [
    { method: "GRPO", avgGpu: 26.62, peakGpu: 50.46, avgCpu: 6.50, peakCpu: 10.26, baseline: true },
    { method: "EDCO", avgGpu: 26.61, peakGpu: 50.50, avgCpu: 7.80, peakCpu: 14.50 },
    { method: "LLM-Judge", avgGpu: 26.60, peakGpu: 50.43, avgCpu: 7.33, peakCpu: 13.15 },
    { method: "DOTS", avgGpu: 26.64, peakGpu: 50.45, avgCpu: 7.08, peakCpu: 12.51 },
    { method: "Previous FR Estimation", avgGpu: 23.75, peakGpu: 47.94, avgCpu: 9.32, peakCpu: 18.85 },
    { method: "MoPPS", avgGpu: 26.62, peakGpu: 50.50, avgCpu: 7.80, peakCpu: 14.50 },
    { method: "Our Estimation", avgGpu: 25.75, peakGpu: 50.94, avgCpu: 7.32, peakCpu: 15.65, ours: true }
  ],
  code: [
    { method: "GRPO", humanEval: 44.96, mbpp: 69.32, baseline: true },
    { method: "DOTS", humanEval: 43.70, mbpp: 68.37 },
    { method: "EDCO", humanEval: 43.23, mbpp: 70.17 },
    { method: "LLM-Judge", humanEval: 45.80, mbpp: 70.48 },
    { method: "MoPPS", humanEval: 46.17, mbpp: 69.29 },
    { method: "Previous FR Estimation", humanEval: 45.58, mbpp: 69.72 },
    { method: "Our Estimation", humanEval: 46.86, mbpp: 71.44, ours: true }
  ]
};

const sectionsOrder = ["main", "efficiency", "inference", "ablation", "estimation", "transfer", "robustness"];

const fmt = (value, digits = 2) => {
  if (value === null || value === undefined) return "--";
  if (typeof value === "string") return value;
  if (!Number.isFinite(value)) return String(value);
  return Number.isInteger(value) ? String(value) : value.toFixed(digits).replace(/0+$/, "").replace(/\.$/, "");
};

const pct = (value) => `${fmt(value)}%`;

const delta = (value, base) => {
  if (typeof value !== "number" || typeof base !== "number") return "";
  const diff = value - base;
  if (Math.abs(diff) < 0.005) return "±0.00";
  return `${diff > 0 ? "+" : ""}${diff.toFixed(2)}`;
};

const htmlEscape = (text) => String(text)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function renderSummary() {
  const root = document.getElementById("result-summary");
  if (!root) return;
  root.innerHTML = paperData.summary.map((item) => `
    <div class="stat-tile">
      <small>${htmlEscape(item.label)}</small>
      <strong>${htmlEscape(item.value)}</strong>
      <span>${htmlEscape(item.detail)}</span>
    </div>
  `).join("");
}

function renderTable(rootId, columns, rows, options = {}) {
  const root = document.getElementById(rootId);
  if (!root) return null;

  let sortKey = options.defaultSort || columns.find((column) => column.sortable !== false)?.key || null;
  let sortDirection = options.defaultDirection || "desc";

  const compare = (a, b) => {
    if (!sortKey) return 0;
    const av = a[sortKey];
    const bv = b[sortKey];
    const aNum = typeof av === "number";
    const bNum = typeof bv === "number";
    if (aNum && bNum) return sortDirection === "asc" ? av - bv : bv - av;
    const aStr = String(av ?? "");
    const bStr = String(bv ?? "");
    return sortDirection === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
  };

  const render = () => {
    const sorted = [...rows].sort(compare);
    const caption = options.caption ? `<caption>${htmlEscape(options.caption)}</caption>` : "";
    const headers = columns.map((column) => {
      const active = sortKey === column.key ? (sortDirection === "asc" ? " ↑" : " ↓") : "";
      const attrs = column.sortable === false ? ' class="no-sort"' : ` data-key="${htmlEscape(column.key)}"`;
      return `<th${attrs}>${htmlEscape(column.label)}${active}</th>`;
    }).join("");
    const body = sorted.map((row) => {
      const rowClass = [
        row.ours ? "ours" : "",
        row.baseline ? "baseline" : "",
        row.oracle ? "oracle" : ""
      ].filter(Boolean).join(" ");
      const cells = columns.map((column) => {
        const value = row[column.key];
        const content = column.render ? column.render(value, row) : htmlEscape(value ?? "--");
        return `<td${typeof value === "number" ? ' class="numeric"' : ""}>${content ?? htmlEscape(value ?? "--")}</td>`;
      }).join("");
      return `<tr${rowClass ? ` class="${rowClass}"` : ""}>${cells}</tr>`;
    }).join("");

    root.innerHTML = `<table>${caption}<thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table>`;

    root.querySelectorAll("th[data-key]").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.getAttribute("data-key");
        if (sortKey === key) {
          sortDirection = sortDirection === "asc" ? "desc" : "asc";
        } else {
          sortKey = key;
          sortDirection = typeof rows[0]?.[key] === "number" ? "desc" : "asc";
        }
        render();
      });
    });
  };

  render();
  return { rerender: render };
}

function renderBarBoard(rootId, rows, metricKey, options = {}) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const keyList = options.keys || [metricKey];
  const activeMetric = options.metricLabel || metricKey;
  const values = rows.map((row) => row[metricKey]).filter((value) => typeof value === "number");
  const max = Math.max(...values, 1);
  const min = options.localScale ? Math.min(...values) : 0;
  const span = Math.max(max - min, 1);

  root.innerHTML = rows.map((row) => {
    const value = row[metricKey];
    const width = typeof value === "number" ? Math.max(0, Math.min(100, ((value - min) / span) * 100)) : 0;
    const rowClass = row.ours ? "bar-item ours" : row.baseline ? "bar-item baseline" : "bar-item";
    return `<div class="${rowClass}">
      <div class="bar-name">${htmlEscape(row.method || row.framework || row.model || row.range || row.component || `${row.easy ?? ""}/${row.hard ?? ""}`)}</div>
      <div class="bar-track"><span class="bar-fill" data-width="${width.toFixed(1)}"></span></div>
      <div class="bar-value">${typeof value === "number" ? fmt(value) : htmlEscape(value)}</div>
    </div>`;
  }).join("") + (options.note ? `<div class="bar-scale-note">${htmlEscape(options.note)}</div>` : "");

  requestAnimationFrame(() => {
    root.querySelectorAll(".bar-fill").forEach((fill) => {
      fill.style.width = `${fill.dataset.width}%`;
    });
  });

  if (!root.dataset.metricLabel || root.dataset.metricLabel !== activeMetric) {
    root.dataset.metricLabel = activeMetric;
  }
}

function renderTokenComparison(rootId, rows, metric = "overallTok") {
  const root = document.getElementById(rootId);
  if (!root) return;
  const base = rows[0];
  const levels = [
    { key: "l1", label: "Level 1" },
    { key: "l2", label: "Level 2" },
    { key: "l3", label: "Level 3" },
    { key: "l4", label: "Level 4" },
    { key: "l5", label: "Level 5" },
    { key: "overall", label: "Overall" },
  ];

  root.innerHTML = `<table>
    <thead>
      <tr>
        <th>Method</th>
        ${levels.map((level) => `<th>${level.label} Token | Acc</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${rows.map((row) => {
        const rowClass = row.ours ? "ours" : row.baseline ? "baseline" : "";
        const cells = levels.map((level) => {
          const tok = row[`${level.key}Tok`];
          const acc = row[`${level.key}Acc`];
          const main = tok === "--" || acc === "--" ? "--" : `${fmt(tok)} | ${fmt(acc)}`;
          return `<td><span class="token-pair"><strong>${main}</strong><span>${level.label}</span></span></td>`;
        }).join("");
        return `<tr${rowClass ? ` class="${rowClass}"` : ""}><td>${htmlEscape(row.method)}</td>${cells}</tr>`;
      }).join("")}
    </tbody>
  </table>`;
}

function renderCardTable(rootId, columns, rows, options = {}) {
  return renderTable(rootId, columns, rows, {
    defaultSort: options.defaultSort || columns.find((column) => column.sortable !== false)?.key,
    defaultDirection: options.defaultDirection || "desc"
  });
}

function buildResultsAtlas() {
  const root = document.getElementById("results-atlas");
  if (!root) return;

  root.innerHTML = `
    <div class="results-shell">
      <div class="result-tabs" role="tablist" aria-label="DARE result atlas">
        <button class="active" data-tab="main" role="tab">Main</button>
        <button data-tab="efficiency" role="tab">Efficiency</button>
        <button data-tab="inference" role="tab">Inference</button>
        <button data-tab="ablation" role="tab">Ablation</button>
        <button data-tab="estimation" role="tab">Estimator</button>
        <button data-tab="transfer" role="tab">Transfer</button>
        <button data-tab="robustness" role="tab">Robustness</button>
      </div>

      <div class="result-panel active" data-panel="main">
        <div class="panel-head">
          <div>
            <h3>Unified comparison across components</h3>
            <p>Sort by any column to inspect the final-accuracy trade-off against the GRPO baseline.</p>
          </div>
        </div>
        <div id="main-comparison" class="dynamic-table"></div>
      </div>

      <div class="result-panel" data-panel="efficiency">
        <div class="panel-head">
          <div>
            <h3>Training efficiency across model scales</h3>
            <p>Switch between 1.5B, 7B, and SmolLM3-3B to inspect AUC and step-to-target speedups.</p>
          </div>
          <div class="metric-switch" aria-label="Training scale selector">
            <button class="active" data-scale="Qwen2.5-Math-1.5B">1.5B</button>
            <button data-scale="Qwen2.5-Math-7B">7B</button>
            <button data-scale="SmolLM3-3B">SmolLM3</button>
          </div>
        </div>
        <div class="data-grid two-up">
          <div class="table-card">
            <h3>Model scale table</h3>
            <p>Higher AUC indicates faster and stronger convergence over the full training horizon.</p>
            <div id="training-table" class="dynamic-table mt-16"></div>
          </div>
          <div class="table-card">
            <h3>Step-speed summary</h3>
            <p>Bars are normalized within the selected scale.</p>
            <div id="training-bars" class="bar-board mt-16"></div>
          </div>
        </div>
      </div>

      <div class="result-panel" data-panel="inference">
        <div class="panel-head">
          <div>
            <h3>Inference-time token behavior</h3>
            <p>The table preserves both output length and accuracy for each MATH-500 difficulty level.</p>
          </div>
        </div>
        <div class="table-card">
          <div id="inference-table" class="dynamic-table compact"></div>
        </div>
      </div>

      <div class="result-panel" data-panel="ablation">
        <div class="panel-head">
          <div>
            <h3>Component ablations and shaping sweeps</h3>
            <p>Toggle between the 1.5B and SmolLM3 ablations, or inspect the reward-shaping and clipping sweeps.</p>
          </div>
          <div class="metric-switch" aria-label="Ablation selector">
            <button class="active" data-ablation="ablation15b">1.5B</button>
            <button data-ablation="ablationSmolLM">SmolLM3</button>
            <button data-ablation="elHl">λ sweep</button>
            <button data-ablation="clip">Clip sweep</button>
          </div>
        </div>
        <div class="data-grid two-up">
          <div class="table-card">
            <h3>Ablation table</h3>
            <p>All-component rows are highlighted for quick comparison.</p>
            <div id="ablation-table" class="dynamic-table mt-16"></div>
          </div>
          <div class="table-card">
            <h3>Selected metric board</h3>
            <p>The bar board emphasizes the strongest final column in each sweep.</p>
            <div id="ablation-bars" class="bar-board mt-16"></div>
          </div>
        </div>
      </div>

      <div class="result-panel" data-panel="estimation">
        <div class="panel-head">
          <div>
            <h3>Difficulty estimator quality and operational footprint</h3>
            <p>Compare the estimation error against the oracle and the memory footprint of competing methods.</p>
          </div>
        </div>
        <div class="data-grid two-up">
          <div class="table-card">
            <h3>Estimator error</h3>
            <p>MSE and MAE on 200 held-out prompts.</p>
            <div id="difficulty-table" class="dynamic-table mt-16"></div>
          </div>
          <div class="table-card">
            <h3>Memory profile</h3>
            <p>Average and peak GPU/CPU usage from the appendix.</p>
            <div id="memory-table" class="dynamic-table mt-16"></div>
          </div>
        </div>
      </div>

      <div class="result-panel" data-panel="transfer">
        <div class="panel-head">
          <div>
            <h3>Generalization to code generation</h3>
            <p>The estimator-level advantage transfers beyond math reasoning to execution-based rewards.</p>
          </div>
        </div>
        <div class="table-card">
          <div id="code-table" class="dynamic-table"></div>
        </div>
      </div>

      <div class="result-panel" data-panel="robustness">
        <div class="panel-head">
          <div>
            <h3>Hyperparameter robustness</h3>
            <p>Inspect the reward-shaping coefficients, clipping ranges, and resulting accuracy/token trade-offs.</p>
          </div>
        </div>
        <div class="data-grid two-up">
          <div class="table-card">
            <h3>λ sweep</h3>
            <p>Balanced easy/hard coefficients stabilize accuracy while keeping tokens in check.</p>
            <div id="lambda-table" class="dynamic-table mt-16"></div>
          </div>
          <div class="table-card">
            <h3>Clip sweep</h3>
            <p>Relaxing only the upper bound gives the best overall accuracy.</p>
            <div id="clip-table" class="dynamic-table mt-16"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMainComparison() {
  renderCardTable("main-comparison", [
    { key: "method", label: "Method" },
    { key: "math500", label: "MATH-500" },
    { key: "gsm8k", label: "GSM8K" },
    { key: "aimeAmc", label: "AIME-AMC" },
    { key: "minerva", label: "Minerva" },
    { key: "olympiad", label: "Olympiad" },
    { key: "overall", label: "Overall" }
  ], paperData.comparison, { defaultSort: "overall" });
}

function renderTrainingScale(scale) {
  const rows = paperData.training[scale] || paperData.training["Qwen2.5-Math-1.5B"];
  const base = rows.find((row) => row.baseline) || rows[0];
  const tableData = rows.map((row) => ({
    method: row.method,
    mathAuc: row.mathAuc,
    mathStep: row.mathStep,
    mathSpeed: row.mathSpeed || "--",
    gsmAuc: row.gsmAuc,
    gsmStep: row.gsmStep,
    gsmSpeed: row.gsmSpeed || "--",
    baseline: row.baseline,
    ours: row.ours
  }));

  renderTable("training-table", [
    { key: "method", label: "Method" },
    {
      key: "mathAuc",
      label: "MATH-500 AUC",
      render: (value, row) => `${fmt(value)} ${row.baseline ? "" : `<span class="${value >= base.mathAuc ? "gain" : "loss"}">${delta(value, base.mathAuc)}</span>`}`
    },
    {
      key: "mathStep",
      label: "MATH step / speed",
      render: (value, row) => `<span class="token-pair"><strong>${htmlEscape(`${fmt(value)} / ${row.mathSpeed}`)}</strong><span>target step</span></span>`
    },
    {
      key: "gsmAuc",
      label: "GSM8K AUC",
      render: (value, row) => `${fmt(value)} ${row.baseline ? "" : `<span class="${value >= base.gsmAuc ? "gain" : "loss"}">${delta(value, base.gsmAuc)}</span>`}`
    },
    {
      key: "gsmStep",
      label: "GSM step / speed",
      render: (value, row) => `<span class="token-pair"><strong>${htmlEscape(`${fmt(value)} / ${row.gsmSpeed}`)}</strong><span>target step</span></span>`
    }
  ], tableData, { defaultSort: "mathAuc" });

  renderBarBoard("training-bars", rows, "mathAuc", {
    localScale: true,
    note: `Selected scale: ${scale} · bars normalized by MATH-500 AUC`
  });
}

function renderInferenceTable() {
  renderTokenComparison("inference-table", paperData.inference);
}

function renderAblationView(key) {
  const map = {
    ablation15b: {
      rows: paperData.ablation15b,
      columns: [
        { key: "method", label: "Method" },
        { key: "math500", label: "MATH-500" },
        { key: "gsm8k", label: "GSM8K" },
        { key: "aimeAmc", label: "AIME-AMC" },
        { key: "minerva", label: "Minerva" },
        { key: "olympiad", label: "Olympiad" },
        { key: "overall", label: "Overall" }
      ],
      barKey: "overall",
      note: "Overall score is normalized within the 1.5B ablation block."
    },
    ablationSmolLM: {
      rows: paperData.ablationSmolLM,
      columns: [
        { key: "method", label: "Method" },
        { key: "math500", label: "MATH-500" },
        { key: "aimeAmc", label: "AIME-AMC" },
        { key: "minerva", label: "Minerva" },
        { key: "olympiad", label: "Olympiad" },
        { key: "overall", label: "Overall" }
      ],
      barKey: "overall",
      note: "Overall score is normalized within the SmolLM3 block."
    },
    elHl: {
      rows: paperData.elHl,
      columns: [
        { key: "easy", label: "λ_easy" },
        { key: "hard", label: "λ_hard" },
        { key: "aime24", label: "AIME24/25" },
        { key: "aimeTok", label: "AIME tok" },
        { key: "gsm8k", label: "GSM8K" },
        { key: "gsmTok", label: "GSM tok" },
        { key: "aimeAmc", label: "AIME-AMC" },
        { key: "minerva", label: "Minerva" },
        { key: "olympiad", label: "Olympiad" }
      ],
      barKey: "gsm8k",
      note: "The bar board emphasizes GSM8K accuracy in the shaping sweep."
    },
    clip: {
      rows: paperData.clip,
      columns: [
        { key: "range", label: "Clip range" },
        { key: "aime24", label: "AIME24/25" },
        { key: "math500", label: "MATH-500" },
        { key: "gsm8k", label: "GSM8K" },
        { key: "aimeAmc", label: "AIME-AMC" },
        { key: "minerva", label: "Minerva" },
        { key: "olympiad", label: "Olympiad" }
      ],
      barKey: "math500",
      note: "The bar board emphasizes MATH-500 accuracy in the clip sweep."
    }
  }[key];

  if (!map) return;

  renderTable("ablation-table", map.columns.map((column) => {
    if (column.key === "method") {
      return column;
    }
    return {
      ...column,
      render: (value, row) => `${fmt(value)} ${row.ours ? '<span class="best">ours</span>' : row.baseline ? '' : ''}`
    };
  }), map.rows, { defaultSort: map.barKey });
  renderBarBoard("ablation-bars", map.rows, map.barKey, { localScale: true, note: map.note });
}

function renderDifficultyAndMemory(view = "difficulty") {
  if (view === "difficulty") {
    renderTable("difficulty-table", [
      { key: "method", label: "Method" },
      {
        key: "mse",
        label: "MSE",
        render: (value, row) => `${fmt(value)} ${row.oracle ? '<span class="best">oracle</span>' : row.ours ? '<span class="best">ours</span>' : ''}`
      },
      {
        key: "mae",
        label: "MAE",
        render: (value, row) => `${fmt(value)} ${row.oracle ? '<span class="best">oracle</span>' : row.ours ? '<span class="best">ours</span>' : ''}`
      }
    ], paperData.difficulty, { defaultSort: "mae" });
  } else {
    renderTable("difficulty-table", [
      { key: "method", label: "Method" },
      {
        key: "avgGpu",
        label: "Avg GPU",
        render: (value) => `${fmt(value)} GB`
      },
      {
        key: "peakGpu",
        label: "Peak GPU",
        render: (value) => `${fmt(value)} GB`
      },
      {
        key: "avgCpu",
        label: "Avg CPU",
        render: (value) => `${fmt(value)} GB`
      },
      {
        key: "peakCpu",
        label: "Peak CPU",
        render: (value) => `${fmt(value)} GB`
      }
    ], paperData.memory, { defaultSort: "peakGpu" });
  }

  renderTable("memory-table", [
    { key: "method", label: "Method" },
    { key: "avgGpu", label: "Avg GPU", render: (value) => `${fmt(value)} GB` },
    { key: "peakGpu", label: "Peak GPU", render: (value) => `${fmt(value)} GB` },
    { key: "avgCpu", label: "Avg CPU", render: (value) => `${fmt(value)} GB` },
    { key: "peakCpu", label: "Peak CPU", render: (value) => `${fmt(value)} GB` }
  ], paperData.memory, { defaultSort: "peakGpu" });
}

function renderCodeTransfer() {
  renderTable("code-table", [
    { key: "method", label: "Method" },
    { key: "humanEval", label: "HumanEval", render: (value, row) => `${fmt(value)} ${row.ours ? '<span class="best">best</span>' : ''}` },
    { key: "mbpp", label: "MBPP", render: (value, row) => `${fmt(value)} ${row.ours ? '<span class="best">best</span>' : ''}` }
  ], paperData.code, { defaultSort: "mbpp" });
}

function renderHyperparameterSweeps() {
  renderTable("lambda-table", [
    { key: "easy", label: "λ_easy" },
    { key: "hard", label: "λ_hard" },
    { key: "aime24", label: "AIME24/25", render: (value, row) => `${fmt(value)} ${row.baseline ? '' : ''}` },
    { key: "aimeTok", label: "AIME tok" },
    { key: "gsm8k", label: "GSM8K" },
    { key: "gsmTok", label: "GSM tok" },
    { key: "aimeAmc", label: "AIME-AMC" },
    { key: "minerva", label: "Minerva" },
    { key: "olympiad", label: "Olympiad" }
  ], paperData.elHl, { defaultSort: "gsm8k" });

  renderTable("clip-table", [
    { key: "range", label: "Clip range" },
    { key: "aime24", label: "AIME24/25" },
    { key: "math500", label: "MATH-500" },
    { key: "gsm8k", label: "GSM8K" },
    { key: "aimeAmc", label: "AIME-AMC" },
    { key: "minerva", label: "Minerva" },
    { key: "olympiad", label: "Olympiad" }
  ], paperData.clip, { defaultSort: "math500" });
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navAnchors)
    .map((anchor) => document.querySelector(anchor.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY + 140;
    let current = null;
    for (const section of sections) {
      if (section.offsetTop <= y) current = section;
    }
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle("active", current && anchor.getAttribute("href") === `#${current.id}`);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initCopy() {
  const copyButton = document.querySelector(".copy-btn[data-copy]");
  if (!copyButton) return;

  copyButton.addEventListener("click", async () => {
    const target = document.querySelector(copyButton.getAttribute("data-copy"));
    if (!target) return;

    const original = copyButton.textContent;
    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = original;
      }, 1300);
    } catch (error) {
      const range = document.createRange();
      range.selectNode(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = original;
      }, 1300);
    }
  });
}

function initResultTabs() {
  const tabButtons = document.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll("[data-panel]");
  const activate = (target) => {
    tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === target));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === target));
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.tab));
  });
}

function initMetricButtons() {
  document.querySelectorAll(".metric-switch [data-scale]").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".metric-switch");
      parent?.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      renderTrainingScale(button.dataset.scale);
    });
  });

  document.querySelectorAll(".metric-switch [data-ablation]").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".metric-switch");
      parent?.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      renderAblationView(button.dataset.ablation);
    });
  });

  document.querySelectorAll(".metric-switch [data-estimator-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".metric-switch");
      parent?.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      renderDifficultyAndMemory(button.dataset.estimatorView);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSummary();
  buildResultsAtlas();
  initNavigation();
  initCopy();
  initResultTabs();
  initMetricButtons();

  renderMainComparison();
  renderTrainingScale("Qwen2.5-Math-1.5B");
  renderInferenceTable();
  renderAblationView("ablation15b");
  renderDifficultyAndMemory("difficulty");
  renderCodeTransfer();
  renderHyperparameterSweeps();
});
