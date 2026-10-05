(() => {
  "use strict";

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // ---------- bio tabs ----------

  function initBio() {
    const tabs = [...document.querySelectorAll(".bio-tabs [role=tab]")];
    const show = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => show(tab));
      tab.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        show(next);
        next.focus();
      });
    });
  }

  // ---------- 01 trace ----------
  // start/end are "YYYY-MM"; end: null means the span is still open.
  // Spans with a `note` link to the matching design note instead of repeating it.

  const SPANS = [
    {
      id: "root", parent: null, svc: "maaz", op: "career", start: "2017-01", end: null,
      attrs: { role: "Lead Backend Engineer", primary: "Node.js, TypeScript, Python, SQL, AWS, Elasticsearch", focus: "search, routing, async processing, onboarding, platform" },
      events: [
        "Works on the backend layers that become critical as a product grows: retrieval, routing, async processing, schema mapping, release pipelines, observability.",
        "Prefers work where a technical improvement shows up in a business number.",
      ],
    },
    {
      id: "edu", parent: "root", svc: "comsats", op: "bs.computer_science", start: "2017-01", end: "2020-12",
      attrs: { institution: "COMSATS University Islamabad", degree: "BS Computer Science" },
      events: ["Four years of fundamentals before the first production span."],
    },
    {
      id: "tdc", parent: "root", svc: "tdc", op: "software_engineer", start: "2021-01", end: "2022-07",
      attrs: { company: "TDC (The Dev Corporate)", title: "Software Engineer" },
      events: ["Backend services for Peoppl and real-time services for Swvl."],
    },
    { id: "peoppl", parent: "tdc", svc: "tdc", op: "peoppl.rewards", start: "2021-01", end: "2022-03", note: "MA-001",
      attrs: { domain: "recognition, rewards, redemption" } },
    { id: "swvl", parent: "tdc", svc: "tdc", op: "swvl.realtime_chat", start: "2021-09", end: "2022-07", note: "MA-002",
      attrs: { domain: "support automation" } },
    {
      id: "nb", parent: "root", svc: "nextbridge", op: "senior_engineer", start: "2022-07", end: "2023-08",
      attrs: { company: "Nextbridge Pvt Ltd", title: "Senior Software Engineer", stack: "Node.js, NestJS, MongoDB, AWS" },
      events: ["Led the backend of an enterprise HR automation platform, end to end."],
    },
    { id: "hr", parent: "nb", svc: "nextbridge", op: "hr_automation.platform", start: "2022-07", end: "2023-08", note: "MA-003",
      attrs: { shape: "multi-portal SaaS", integrations: "Twilio, SendGrid, Stripe, HubSpot, Webflow" } },
    { id: "sched", parent: "nb", svc: "nextbridge", op: "scheduling.engine", start: "2022-10", end: "2023-03", note: "MA-004",
      attrs: { kind: "Calendly-style scheduling, attendance bot" } },
    { id: "mongo", parent: "nb", svc: "nextbridge", op: "mongo.aggregation_tuning", start: "2023-03", end: "2023-07", note: "MA-005",
      attrs: { datasets: "users, transactions" },
      metric: { type: "stat", value: 50, suffix: "%+", label: "faster aggregation pipelines" } },
    {
      id: "rc", parent: "root", svc: "revcloud", op: "lead_backend", start: "2023-09", end: null,
      attrs: { company: "Revcloud / Alyson.ai", title: "Lead Backend Engineer", stack: "Node.js, TypeScript, Python, SQS, SNS, AWS, Elasticsearch" },
      events: [
        "Owns search, routing, enrichment and onboarding on the backend.",
        "Event-driven microservices for resilience and async throughput.",
      ],
      metric: { type: "stat", value: 300, prefix: "$", suffix: "K+", label: "additional quarterly revenue (MA-006)" },
    },
    { id: "enrich", parent: "rc", svc: "revcloud", op: "enrichment.profile", start: "2023-10", end: "2024-06", note: "MA-006",
      attrs: { built_on: "company identity graph" },
      metric: { type: "lifts", items: [["lead submissions", 30], ["conversion rate", 20], ["revenue per click", 15]] } },
    { id: "idsearch", parent: "rc", svc: "revcloud", op: "search.identity_800m", start: "2023-11", end: "2025-02", note: "MA-007",
      attrs: { engine: "Elasticsearch", latency: "< 500ms" },
      metric: { type: "stat", value: 800, suffix: "M+", label: "identities searchable in under 500ms" } },
    { id: "router", parent: "rc", svc: "revcloud", op: "router.rearchitect", start: "2024-05", end: "2024-11", note: "MA-008",
      attrs: { infra: "Lambda, ElastiCache, EventBridge, CloudWatch" },
      metric: { type: "reduce", label: "execution time", before: 1500, after: 300, fmtBefore: "1500ms", fmtAfter: "<300ms" },
      extra: '<a class="note-link" href="#race">race both versions &rarr;</a>' },
    { id: "csv", parent: "rc", svc: "revcloud", op: "onboarding.ai_schema_map", start: "2024-09", end: "2025-08", note: "MA-009",
      attrs: { connectors: "Google Ads, Drive, Meta, Salesforce, FreshSales" },
      metric: { type: "stat", value: 30, suffix: "+", label: "automated connectors shipped" } },
    { id: "geo", parent: "rc", svc: "revcloud", op: "search.people_geo", start: "2025-01", end: "2025-09", note: "MA-010",
      attrs: { people: "80M+", locations: "100M+" },
      metric: { type: "stat", value: 70, suffix: "%", label: "lower search latency" } },
    { id: "athena", parent: "rc", svc: "revcloud", op: "data.athena_layer", start: "2025-04", end: "2025-12", note: "MA-011",
      attrs: { source: "structured data on S3" } },
    { id: "cicd", parent: "rc", svc: "revcloud", op: "platform.cicd", start: "2023-09", end: null, note: "MA-012",
      attrs: { tools: "CloudFormation, GitHub Actions" } },
  ];

  function initTrace() {
    const rowsEl = document.getElementById("rows");
    const detailEl = document.getElementById("detail");
    const ticksEl = document.getElementById("ticks");
    const waterfall = document.getElementById("waterfall");
    if (!rowsEl) return;

    const now = new Date();
    const toMonths = (ym) => { const [y, m] = ym.split("-").map(Number); return y * 12 + (m - 1); };
    const nowMonths = now.getFullYear() * 12 + now.getMonth();
    const DOMAIN_START = toMonths("2017-01");
    const DOMAIN_END = (now.getFullYear() + 1) * 12;
    const range = DOMAIN_END - DOMAIN_START;
    const pct = (m) => ((m - DOMAIN_START) / range) * 100;
    const endOf = (s) => (s.end ? toMonths(s.end) + 1 : nowMonths + 1);
    const fmtDur = (months) => {
      const y = Math.floor(months / 12), m = months % 12;
      return [y && y + "y", m && m + "m"].filter(Boolean).join(" ") || "<1m";
    };

    const byId = Object.fromEntries(SPANS.map((s) => [s.id, { ...s, children: [] }]));
    Object.values(byId).forEach((s) => s.parent && byId[s.parent].children.push(s));
    const depthOf = (s) => (s.parent ? depthOf(byId[s.parent]) + 1 : 0);

    const collapsed = new Set();
    let selected = "router";

    waterfall.style.setProperty("--year-w", (12 / range) * 100 + "%");

    for (let y = DOMAIN_START / 12 + 1; y * 12 < DOMAIN_END; y++) {
      const t = document.createElement("span");
      t.className = "tick";
      t.style.left = pct(y * 12) + "%";
      t.textContent = "'" + String(y).slice(2);
      ticksEl.appendChild(t);
    }

    const visible = () => {
      const out = [];
      const walk = (s) => { out.push(s); if (!collapsed.has(s.id)) s.children.forEach(walk); };
      walk(byId.root);
      return out;
    };

    function renderRows(animate) {
      rowsEl.innerHTML = "";
      visible().forEach((s, i) => {
        const depth = depthOf(s);
        const start = toMonths(s.start), end = endOf(s);
        const left = pct(start), width = pct(end) - left;
        const edge = left + width > 82 ? (width > 12 ? " inside" : " flip") : "";

        const row = document.createElement("div");
        row.className = "row" + (collapsed.has(s.id) ? " collapsed" : "");
        row.dataset.id = s.id;
        row.setAttribute("role", "treeitem");
        row.setAttribute("aria-level", depth + 1);
        row.setAttribute("aria-selected", String(s.id === selected));
        if (s.children.length) row.setAttribute("aria-expanded", String(!collapsed.has(s.id)));
        row.tabIndex = s.id === selected ? 0 : -1;
        row.innerHTML = `
          <div class="name" style="--depth:${depth};${depth ? "" : "--guide:none"}">
            <button class="caret" type="button" tabindex="-1" aria-label="toggle children" ${s.children.length ? "" : "hidden"}>&#9662;</button>
            <span class="svc">${s.svc}</span><span class="op">${s.op}</span>
          </div>
          <div class="track">
            <div class="bar${s.end ? "" : " open"}${edge}" data-svc="${s.svc}"
                 style="left:${left}%;width:${width}%;--i:${animate ? i : 0};${animate ? "" : "animation:none"}">
              <span class="dur">${fmtDur(end - start)}</span>
            </div>
          </div>`;
        rowsEl.appendChild(row);
      });
    }

    function metricHTML(m) {
      if (m.type === "reduce") {
        const cut = Math.round((1 - m.after / m.before) * 100);
        return `<div class="reduce">
          <div class="lane-m"><span>before</span><div class="rail"><div class="fill"></div></div><span>${m.fmtBefore}</span></div>
          <div class="lane-m after"><span>after</span><div class="rail"><div class="fill" data-to="${(m.after / m.before) * 100}"></div></div><span>${m.fmtAfter}</span></div>
          <div class="delta">&minus;${cut}%+ ${esc(m.label)}</div>
        </div>`;
      }
      if (m.type === "stat") {
        return `<div class="stat"><div class="big" data-count="${m.value}" data-prefix="${m.prefix || ""}" data-suffix="${m.suffix || ""}">${m.prefix || ""}${m.value}${m.suffix || ""}</div><div class="lbl">${esc(m.label)}</div></div>`;
      }
      if (m.type === "lifts") {
        return `<div class="lifts">${m.items.map(([label, v]) => `
          <div class="lift"><span>${esc(label)}</span><b>+${v}%</b><div class="rail"><div class="fill" data-to="${v * 2.5}"></div></div></div>`).join("")}</div>`;
      }
      return "";
    }

    function animateMetric() {
      if (reducedMotion) {
        detailEl.querySelectorAll(".fill[data-to]").forEach((f) => (f.style.width = f.dataset.to + "%"));
        return;
      }
      requestAnimationFrame(() => requestAnimationFrame(() => {
        detailEl.querySelectorAll(".fill[data-to]").forEach((f) => (f.style.width = f.dataset.to + "%"));
        const big = detailEl.querySelector("[data-count]");
        if (!big || reducedMotion) return;
        const target = Number(big.dataset.count), t0 = performance.now(), dur = 1000;
        const step = (t) => {
          const p = Math.min(1, Math.max(0, (t - t0) / dur));
          big.textContent = big.dataset.prefix + Math.round(target * (1 - Math.pow(1 - p, 3))) + big.dataset.suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }));
    }

    function renderDetail(id) {
      const s = byId[id];
      const start = toMonths(s.start), end = endOf(s);
      const parent = s.parent ? byId[s.parent] : null;
      const attrs = { start: s.start, end: s.end || "still running", ...s.attrs };

      detailEl.innerHTML = `
        <div class="detail-head">span details</div>
        <h3>${s.svc}.${s.op}</h3>
        <p class="sub">${fmtDur(end - start)} &middot; ${parent ? "child of " + parent.svc + "." + parent.op : "root span"}</p>
        ${s.metric ? `<div class="metric">${metricHTML(s.metric)}</div>` : ""}
        <h4>attributes</h4>
        <dl class="attrs">${Object.entries(attrs).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
        ${s.events ? `<h4>events</h4><ul class="events">${s.events.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
        ${s.children.length ? `<h4>child spans</h4><div class="chips">${s.children.map((c) => `<span>${c.op}</span>`).join("")}</div>` : ""}
        ${s.note ? `<a class="note-link" href="#${s.note}">read ${s.note} &rarr;</a>` : ""}
        ${s.extra ? `<br>${s.extra}` : ""}
      `;
      if (s.metric) animateMetric();
    }

    function select(id, focus) {
      selected = id;
      rowsEl.querySelectorAll(".row").forEach((r) => {
        const on = r.dataset.id === id;
        r.setAttribute("aria-selected", String(on));
        r.tabIndex = on ? 0 : -1;
        if (on && focus) r.focus();
      });
      renderDetail(id);
    }

    function toggle(id, open) {
      if (!byId[id].children.length) return;
      const isOpen = !collapsed.has(id);
      if (open === isOpen) return;
      if (isOpen) collapsed.add(id); else collapsed.delete(id);
      renderRows(false);
      select(id, true);
    }

    rowsEl.addEventListener("click", (e) => {
      const row = e.target.closest(".row");
      if (!row) return;
      if (e.target.closest(".caret")) toggle(row.dataset.id);
      else select(row.dataset.id);
    });

    rowsEl.addEventListener("keydown", (e) => {
      const ids = visible().map((s) => s.id);
      const i = ids.indexOf(selected);
      if (e.key === "ArrowDown") select(ids[Math.min(ids.length - 1, i + 1)], true);
      else if (e.key === "ArrowUp") select(ids[Math.max(0, i - 1)], true);
      else if (e.key === "ArrowLeft") toggle(selected, false);
      else if (e.key === "ArrowRight") toggle(selected, true);
      else return;
      e.preventDefault();
    });

    renderRows(!reducedMotion);
    renderDetail(selected);

    const nowLine = document.createElement("div");
    nowLine.className = "now";
    nowLine.innerHTML = "<span>NOW</span>";
    waterfall.appendChild(nowLine);
    const placeNow = () => {
      const track = ticksEl.getBoundingClientRect();
      const host = waterfall.getBoundingClientRect();
      nowLine.style.left = track.left - host.left + (pct(nowMonths + 1) / 100) * track.width + "px";
    };
    placeNow();
    addEventListener("resize", placeNow);
  }

  // ---------- 02 race ----------
  // Latencies are sampled around the measured before/after numbers, then played back in real time.

  function initRace() {
    const box = document.getElementById("raceBox");
    if (!box) return;

    const SCALE_MS = 1800;
    const pct = (ms) => (ms / SCALE_MS) * 100;
    const lanes = {
      v1: { el: box.querySelector('[data-lane="v1"]'), samples: [] },
      v2: { el: box.querySelector('[data-lane="v2"]'), samples: [] },
    };
    const verdict = document.getElementById("verdict");
    const buttons = [document.getElementById("fire1"), document.getElementById("fire20")];

    box.style.setProperty("--ms500", pct(500) + "%");
    box.style.setProperty("--ms300", pct(300) + "%");
    document.getElementById("msAxis").innerHTML = [0, 300, 500, 1000, 1500]
      .map((ms) => `<span${ms === 300 ? ' class="slo"' : ""} style="left:${pct(ms)}%">${ms}${ms === 1500 ? "ms" : ""}</span>`)
      .join("");

    const gaussian = () => {
      let u = 0, v = 0;
      while (!u) u = Math.random();
      while (!v) v = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    };
    const sample = {
      v1: () => Math.round(Math.min(1780, Math.max(1250, 1500 + gaussian() * 110))),
      v2: () => Math.round(190 + Math.random() * 105),
    };

    const quantile = (arr, q) => {
      const s = [...arr].sort((a, b) => a - b);
      return s[Math.min(s.length - 1, Math.floor(q * s.length))];
    };

    function renderStats(key) {
      const { el, samples } = lanes[key];
      el.querySelector(".lane-stats").innerHTML = samples.length
        ? `n ${samples.length} &middot; p50 <b>${quantile(samples, 0.5)}ms</b> &middot; max ${Math.max(...samples)}ms`
        : "n 0";
    }

    function send(key, latency) {
      return new Promise((resolve) => {
        const ink = lanes[key].el.querySelector(".lane-ink");
        const land = () => {
          const mark = document.createElement("div");
          mark.className = "mark";
          mark.style.left = pct(latency) + "%";
          ink.appendChild(mark);
          lanes[key].samples.push(latency);
          renderStats(key);
          resolve(latency);
        };

        // The timer owns the timing; animation frames only move the dot.
        if (reducedMotion) { setTimeout(land, latency); return; }

        const dot = document.createElement("div");
        dot.className = "req";
        dot.style.top = 8 + Math.random() * 30 + "px";
        dot.style.left = "0%";
        ink.appendChild(dot);
        const t0 = performance.now();
        let arrived = false;
        const step = () => {
          if (arrived) return;
          dot.style.left = pct(Math.min(performance.now() - t0, latency)) + "%";
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        setTimeout(() => { arrived = true; dot.remove(); land(); }, latency);
      });
    }

    async function fire(n) {
      buttons.forEach((b) => (b.disabled = true));
      verdict.textContent = n === 1 ? "In flight…" : `${n} requests in flight…`;

      const runs = Array.from({ length: n }, (_, i) => new Promise((resolve) => {
        setTimeout(() => {
          Promise.all([send("v1", sample.v1()), send("v2", sample.v2())]).then(resolve);
        }, i * 70);
      }));
      const results = await Promise.all(runs);

      if (n === 1) {
        const [a, b] = results[0];
        verdict.innerHTML = `v2 answered in <b>${b}ms</b>. v1 took ${a}ms, <b>${(a / b).toFixed(1)}&times;</b> longer.`;
      } else {
        const wins = results.filter(([a, b]) => b < a).length;
        const saved = results.reduce((sum, [a, b]) => sum + (a - b), 0);
        verdict.innerHTML = `${n} requests. v2 finished first <b>${wins}/${n}</b> times and saved <b>${(saved / 1000).toFixed(1)}s</b> of combined waiting.`;
      }
      buttons.forEach((b) => (b.disabled = false));
    }

    buttons[0].addEventListener("click", () => fire(1));
    buttons[1].addEventListener("click", () => fire(20));
    document.getElementById("raceReset").addEventListener("click", () => {
      Object.keys(lanes).forEach((key) => {
        lanes[key].samples = [];
        lanes[key].el.querySelector(".lane-ink").innerHTML = "";
        renderStats(key);
      });
      verdict.textContent = "Nothing fired yet.";
    });
  }

  // ---------- 03 notes: open a note when something links to it ----------

  function initNotes() {
    const open = (hash) => {
      const li = hash && document.getElementById(hash.slice(1));
      const details = li && li.closest(".notes") && li.querySelector("details");
      if (details) details.open = true;
    };
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#MA-"]');
      if (a) open(a.getAttribute("href"));
    });
    addEventListener("hashchange", () => open(location.hash));
    open(location.hash);
  }

  // ---------- footer: what this page cost you ----------

  function initFooter() {
    addEventListener("load", () => setTimeout(() => {
      const nav = performance.getEntriesByType("navigation")[0];
      const entries = [nav, ...performance.getEntriesByType("resource")].filter(Boolean);
      const bytes = entries.reduce((sum, e) => sum + (e.encodedBodySize || e.transferSize || 0), 0);
      document.getElementById("weight").textContent = bytes
        ? `${(bytes / 1024).toFixed(1)} KB over ${entries.length} requests`
        : "a few KB";
      const ms = nav && nav.loadEventEnd ? nav.loadEventEnd : performance.now();
      document.getElementById("renderTime").textContent = Math.round(ms) + "ms";
    }, 0));
  }

  initBio();
  initTrace();
  initRace();
  initNotes();
  initFooter();
})();
