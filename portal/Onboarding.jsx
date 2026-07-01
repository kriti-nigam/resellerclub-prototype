/* global React, Icon, Button, Badge, Logo, Mark, Code, CodeBlock */
const { useState: useOnbState } = React;

function StepDot({ n, active, done, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        width: 26, height: 26, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 13, flexShrink: 0,
        background: done ? "var(--rc-accent)" : active ? "rgba(255,255,255,.16)" : "rgba(255,255,255,.06)",
        color: done || active ? "#fff" : "var(--rc-on-dark-3)",
        border: active ? "1px solid rgba(255,255,255,.4)" : "1px solid transparent",
      }}>{done ? <Icon name="check" size={14} /> : n}</span>
      <span style={{ fontSize: 14, fontWeight: active ? 600 : 500, color: active || done ? "#fff" : "var(--rc-on-dark-3)" }}>{label}</span>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 7 }}>{label}</span>
      {children}
    </label>
  );
}
const inputStyle = { width: "100%", border: "1px solid var(--rc-line-strong)", borderRadius: 9, padding: "11px 13px", fontSize: 14.5, fontFamily: "var(--rc-font-body)", outline: "none", background: "#fff" };

function Onboarding({ nav }) {
  const [step, setStep] = useOnbState(0);
  const [form, setForm] = useOnbState({ name: "", email: "", company: "", url: "" });
  const [code, setCode] = useOnbState(["", "", "", "", "", ""]);
  const steps = ["Your details", "Verify email", "Create a key", "You're in"];
  const newKey = "rc_test_2mQ9" + "Lp7vKx02nRfWcQz3Tb";

  const setF = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="rc" style={{ display: "grid", gridTemplateColumns: "minmax(0,420px) 1fr", minHeight: "100vh" }}>
      {/* left brand rail */}
      <div style={{ background: "var(--rc-ink)", color: "#fff", padding: "40px 44px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, left: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,102,255,.24), transparent 70%)" }} />
        <button onClick={() => nav("home")} style={{ background: "none", border: 0, cursor: "pointer", padding: 0, position: "relative", alignSelf: "flex-start" }}>
          <Logo size={28} dark tag="Developers" />
        </button>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#fff", marginBottom: 36 }}>Create your<br />developer account.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {steps.map((s, i) => <StepDot key={s} n={i + 1} active={step === i} done={step > i} label={s} />)}
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
          {["Free sandbox with fake funds", "800+ TLDs out of the box", "MCP-ready for AI agents"].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--rc-on-dark-2)" }}>
              <Icon name="check-circle-2" size={16} color="var(--rc-accent)" /> {t}
            </div>
          ))}
        </div>
      </div>

      {/* right form */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", background: "var(--rc-bg-subtle)" }}>
        <div style={{ width: 440, maxWidth: "100%" }}>

          {step === 0 && (
            <div style={{ animation: "rc-fade-up .3s var(--rc-ease) both" }}>
              <h1 style={{ fontSize: 27, fontWeight: 700, marginBottom: 6 }}>Let's get you set up</h1>
              <p style={{ fontSize: 15, color: "var(--rc-text-2)", marginBottom: 28 }}>Tell us a little about your reseller business.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Full name"><input style={inputStyle} value={form.name} onChange={setF("name")} placeholder="Alex Rivera" /></Field>
                <Field label="Work email"><input style={inputStyle} value={form.email} onChange={setF("email")} placeholder="alex@northwind.io" /></Field>
              </div>
              <Field label="Company"><input style={inputStyle} value={form.company} onChange={setF("company")} placeholder="Northwind Hosting" /></Field>
              <Field label="Website"><input style={inputStyle} value={form.url} onChange={setF("url")} placeholder="https://northwind.io" /></Field>
              <Button full size="lg" iconRight="arrow-right" onClick={() => setStep(1)} style={{ marginTop: 8 }}>Continue</Button>
              <p style={{ fontSize: 13, color: "var(--rc-text-3)", textAlign: "center", marginTop: 18 }}>Already have an account? <button onClick={() => nav("dashboard")} style={{ background: "none", border: 0, color: "var(--rc-accent-700)", fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "var(--rc-font-body)" }}>Sign in</button></p>
            </div>
          )}

          {step === 1 && (
            <div style={{ animation: "rc-fade-up .3s var(--rc-ease) both" }}>
              <h1 style={{ fontSize: 27, fontWeight: 700, marginBottom: 6 }}>Verify your email</h1>
              <p style={{ fontSize: 15, color: "var(--rc-text-2)", marginBottom: 28 }}>We sent a 6-digit code to <strong style={{ color: "var(--rc-text)" }}>{form.email || "alex@northwind.io"}</strong>.</p>
              <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                {code.map((c, i) => (
                  <input key={i} value={c} maxLength={1} onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    const next = [...code]; next[i] = v; setCode(next);
                    if (v && e.target.nextElementSibling) e.target.nextElementSibling.focus();
                  }} style={{ width: 52, height: 60, textAlign: "center", fontSize: 24, fontWeight: 700, fontFamily: "var(--rc-font-display)", border: "1px solid var(--rc-line-strong)", borderRadius: 10, outline: "none", background: "#fff" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--rc-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--rc-line-strong)"} />
                ))}
              </div>
              <Button full size="lg" iconRight="arrow-right" onClick={() => setStep(2)}>Verify & continue</Button>
              <p style={{ fontSize: 13, color: "var(--rc-text-3)", textAlign: "center", marginTop: 18 }}>Didn't get it? <button onClick={() => setCode(["1","2","3","4","5","6"])} style={{ background: "none", border: 0, color: "var(--rc-accent-700)", fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "var(--rc-font-body)" }}>Resend code</button></p>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: "rc-fade-up .3s var(--rc-ease) both" }}>
              <h1 style={{ fontSize: 27, fontWeight: 700, marginBottom: 6 }}>Here's your first key</h1>
              <p style={{ fontSize: 15, color: "var(--rc-text-2)", marginBottom: 22 }}>This is a <strong style={{ color: "var(--rc-text)" }}>test key</strong> — it hits the sandbox with fake funds. Copy it now.</p>
              <CodeBlock lang="js" label="Sandbox key" compact code={newKey} />
              <div style={{ display: "flex", gap: 10, padding: "13px 15px", background: "var(--rc-accent-tint)", border: "1px solid var(--rc-accent-100)", borderRadius: 10, margin: "18px 0 24px" }}>
                <Icon name="terminal" size={17} color="var(--rc-accent)" />
                <span style={{ fontSize: 13.5, color: "var(--rc-text-2)", lineHeight: 1.5 }}>Drop it into <Code>process.env.RC_API_KEY</Code> and you're ready for the quickstart.</span>
              </div>
              <Button full size="lg" iconRight="arrow-right" onClick={() => setStep(3)}>Finish setup</Button>
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: "rc-fade-up .3s var(--rc-ease) both", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "var(--rc-teal-soft)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
                <Icon name="party-popper" size={30} color="var(--rc-teal)" />
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>You're all set!</h1>
              <p style={{ fontSize: 15.5, color: "var(--rc-text-2)", marginBottom: 28, maxWidth: 340, marginInline: "auto" }}>Your developer account is live. Jump into the dashboard or make your first call.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Button size="lg" icon="layout-dashboard" onClick={() => nav("dashboard")}>Go to dashboard</Button>
                <Button size="lg" variant="secondary" iconRight="arrow-right" onClick={() => nav("docs:quickstart")}>Quickstart</Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Onboarding });
