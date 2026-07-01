/* global React */
/* ResellerClub — shared component primitives */
const { useEffect, useState, useRef } = React;

/* ---------- Icon (Lucide) ---------- */
function Icon({ name, size = 18, color, strokeWidth = 2, style, className }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth },
      });
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", width: size, height: size, color, lineHeight: 0, flexShrink: 0, ...style }}
    />
  );
}

/* ---------- Brand mark + wordmark ---------- */
function Mark({ size = 32 }) {
  return (
    <img
      src="portal/resellerclub-mark.png"
      width={size}
      height={size}
      alt="ResellerClub"
      style={{ display: "inline-block", flexShrink: 0, objectFit: "contain" }}
    />
  );
}

function Logo({ size = 30, dark = false, tag = "Developers" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Mark size={size} />
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: size * 0.62, letterSpacing: "-0.02em", color: dark ? "#fff" : "var(--rc-text)" }}>
          ResellerClub
        </span>
        {tag && (
          <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: size * 0.4, fontWeight: 500, color: "var(--rc-accent)", letterSpacing: "-0.01em" }}>
            {tag}
          </span>
        )}
      </span>
    </span>
  );
}

/* ---------- Button ---------- */
function Button({ children, variant = "primary", size = "md", icon, iconRight, href, onClick, full, style, type }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, gap: 6, ih: 15 },
    md: { padding: "11px 18px", fontSize: 14.5, gap: 8, ih: 17 },
    lg: { padding: "14px 24px", fontSize: 16, gap: 9, ih: 19 },
  }[size];
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: sizes.gap, padding: sizes.padding, fontSize: sizes.fontSize, fontWeight: 600,
    fontFamily: "var(--rc-font-body)", borderRadius: "var(--rc-r-md)", border: "1px solid transparent",
    cursor: "pointer", transition: "all var(--rc-dur) var(--rc-ease)", textDecoration: "none",
    width: full ? "100%" : "auto", whiteSpace: "nowrap", lineHeight: 1.1, letterSpacing: "-0.01em",
  };
  const variants = {
    primary: {
      background: press ? "var(--rc-accent-700)" : hover ? "var(--rc-accent-600)" : "var(--rc-accent)",
      color: "#fff", boxShadow: hover && !press ? "var(--rc-shadow-accent)" : "none",
    },
    dark: {
      background: hover ? "#1B2740" : "var(--rc-ink)", color: "#fff",
      boxShadow: hover ? "var(--rc-shadow-md)" : "none",
    },
    secondary: {
      background: hover ? "var(--rc-bg-subtle)" : "var(--rc-white)", color: "var(--rc-text)",
      borderColor: "var(--rc-line-strong)", boxShadow: "var(--rc-shadow-xs)",
    },
    ghost: { background: hover ? "var(--rc-bg-subtle)" : "transparent", color: "var(--rc-text)" },
    onDark: {
      background: hover ? "rgba(255,255,255,.16)" : "rgba(255,255,255,.10)", color: "#fff",
      borderColor: "rgba(255,255,255,.18)",
    },
    accentSoft: {
      background: hover ? "var(--rc-accent-100)" : "var(--rc-accent-50)", color: "var(--rc-accent-700)",
    },
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href} onClick={onClick} type={type}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {icon && <Icon name={icon} size={sizes.ih} />}
      {children}
      {iconRight && <Icon name={iconRight} size={sizes.ih} />}
    </Tag>
  );
}

/* ---------- Method tag ---------- */
const METHOD_COLORS = {
  GET: { fg: "var(--rc-teal)", bg: "var(--rc-teal-soft)" },
  POST: { fg: "var(--rc-violet)", bg: "var(--rc-violet-soft)" },
  PUT: { fg: "var(--rc-amber)", bg: "var(--rc-amber-soft)" },
  PATCH: { fg: "var(--rc-amber)", bg: "var(--rc-amber-soft)" },
  DELETE: { fg: "var(--rc-red)", bg: "var(--rc-red-soft)" },
};
function MethodTag({ method, size = "md" }) {
  const c = METHOD_COLORS[method] || METHOD_COLORS.GET;
  const s = size === "sm" ? { fontSize: 10.5, padding: "2px 6px", minWidth: 38 } : { fontSize: 12, padding: "4px 9px", minWidth: 50 };
  return (
    <span style={{
      fontFamily: "var(--rc-font-mono)", fontWeight: 600, color: c.fg, background: c.bg,
      borderRadius: "var(--rc-r-sm)", textAlign: "center", letterSpacing: "0.02em",
      display: "inline-block", ...s,
    }}>{method}</span>
  );
}

/* ---------- Badge / Pill ---------- */
function Badge({ children, tone = "neutral", style }) {
  const tones = {
    neutral: { fg: "var(--rc-text-2)", bg: "var(--rc-bg-subtle)", bd: "var(--rc-line)" },
    accent: { fg: "var(--rc-accent-700)", bg: "var(--rc-accent-50)", bd: "var(--rc-accent-100)" },
    success: { fg: "var(--rc-green)", bg: "var(--rc-green-soft)", bd: "transparent" },
    teal: { fg: "var(--rc-teal)", bg: "var(--rc-teal-soft)", bd: "transparent" },
    warning: { fg: "#9A6406", bg: "var(--rc-amber-soft)", bd: "transparent" },
    danger: { fg: "var(--rc-red)", bg: "var(--rc-red-soft)", bd: "transparent" },
    violet: { fg: "var(--rc-violet)", bg: "var(--rc-violet-soft)", bd: "transparent" },
    dark: { fg: "#fff", bg: "var(--rc-ink)", bd: "transparent" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--rc-font-body)",
      fontSize: 12, fontWeight: 600, color: tones.fg, background: tones.bg,
      border: `1px solid ${tones.bd}`, borderRadius: "var(--rc-r-pill)", padding: "3px 10px",
      letterSpacing: "0.01em", lineHeight: 1.4, ...style,
    }}>{children}</span>
  );
}

function StatusDot({ status }) {
  const map = {
    active: "var(--rc-green)", pending: "var(--rc-amber)", failed: "var(--rc-red)",
    live: "var(--rc-green)", test: "var(--rc-amber)", suspended: "var(--rc-text-3)",
  };
  return <span style={{ width: 7, height: 7, borderRadius: 999, background: map[status] || "var(--rc-text-3)", display: "inline-block", flexShrink: 0 }} />;
}

/* ---------- Code highlighting ---------- */
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function highlight(code, lang) {
  let h = escapeHtml(code);
  if (lang === "json") {
    h = h.replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)/g, '<span class="tk-key">$1</span>$2');
    h = h.replace(/:(\s*)(&quot;(?:[^&]|&(?!quot;))*?&quot;)/g, ':$1<span class="tk-str">$2</span>');
    h = h.replace(/\b(true|false|null)\b/g, '<span class="tk-bool">$1</span>');
    h = h.replace(/(:\s*)(-?\d+\.?\d*)/g, '$1<span class="tk-num">$2</span>');
  } else {
    // JS-ish
    h = h.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`)/g, '<span class="tk-str">$1</span>');
    h = h.replace(/\b(import|from|const|let|var|async|await|new|return|for|of|console|export|default|function)\b/g, '<span class="tk-kw">$1</span>');
    h = h.replace(/\b(\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>');
    h = h.replace(/(\/\/[^\n]*)/g, '<span class="tk-com">$1</span>');
  }
  return h;
}

function CodeBlock({ code, lang = "js", label, tabs, filename, compact, style }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const set = tabs || [{ label: label || (lang === "json" ? "Response" : "Node.js"), code, lang }];
  const cur = set[active] || set[0];
  const copy = () => {
    navigator.clipboard?.writeText(cur.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div style={{
      background: "var(--rc-code-bg)", borderRadius: "var(--rc-r-lg)", overflow: "hidden",
      border: "1px solid rgba(255,255,255,.07)", boxShadow: "var(--rc-shadow-md)", ...style,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 4, padding: "0 8px 0 14px",
        background: "var(--rc-code-bg-2)", borderBottom: "1px solid rgba(255,255,255,.06)", height: 42,
      }}>
        {set.length > 1 ? set.map((t, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            background: "transparent", border: 0, cursor: "pointer", padding: "0 12px", height: "100%",
            fontFamily: "var(--rc-font-body)", fontSize: 13, fontWeight: 600,
            color: i === active ? "#fff" : "var(--rc-on-dark-3)",
            borderBottom: i === active ? "2px solid var(--rc-accent)" : "2px solid transparent",
          }}>{t.label}</button>
        )) : (
          <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "var(--rc-on-dark-2)", fontWeight: 500 }}>
            {filename && <Icon name="file-code-2" size={14} color="var(--rc-on-dark-3)" />}
            {cur.label}
          </span>
        )}
        <div style={{ flex: 1 }} />
        <button onClick={copy} title="Copy" style={{
          display: "inline-flex", alignItems: "center", gap: 6, background: "transparent",
          border: "1px solid rgba(255,255,255,.12)", borderRadius: 7, cursor: "pointer",
          padding: "5px 10px", color: copied ? "var(--rc-teal)" : "var(--rc-on-dark-2)",
          fontFamily: "var(--rc-font-body)", fontSize: 12, fontWeight: 600, transition: "all var(--rc-dur)",
        }}>
          <Icon name={copied ? "check" : "copy"} size={13} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="rc-scroll" style={{
        margin: 0, padding: compact ? "14px 16px" : "18px 18px", overflowX: "auto",
        fontFamily: "var(--rc-font-mono)", fontSize: compact ? 12.5 : 13.5, lineHeight: 1.65,
        color: "#E7ECF5", tabSize: 2,
      }}>
        <code dangerouslySetInnerHTML={{ __html: highlight(cur.code, cur.lang || lang) }} />
      </pre>
    </div>
  );
}

/* ---------- Inline code ---------- */
function Code({ children, onDark }) {
  return (
    <code style={{
      fontFamily: "var(--rc-font-mono)", fontSize: "0.86em", fontWeight: 500,
      background: onDark ? "rgba(255,255,255,.12)" : "var(--rc-bg-subtle)",
      color: onDark ? "#fff" : "var(--rc-accent-700)",
      border: onDark ? "none" : "1px solid var(--rc-line)",
      padding: "1.5px 6px", borderRadius: 6, whiteSpace: "nowrap",
    }}>{children}</code>
  );
}

Object.assign(window, { Icon, Mark, Logo, Button, MethodTag, Badge, StatusDot, CodeBlock, Code, METHOD_COLORS, highlight });
