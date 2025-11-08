import styles from "./page.module.css";

const clients = [
  { label: "Enterprises", value: "240+" },
  { label: "Daily Settlements", value: "$1.2B" },
  { label: "Digital Assets Managed", value: "38" },
];

const features = [
  {
    title: "Unified Liquidity Layer",
    description:
      "Instantly orchestrate liquidity across bank rails and blockchains with automated treasury balancing.",
  },
  {
    title: "Programmable Compliance",
    description:
      "Leverage policy modules to enforce jurisdictional requirements, KYB tiers, and asset-specific guardrails.",
  },
  {
    title: "Seamless FX Routing",
    description:
      "Smart routing engine selects the optimal corridor per transfer, minimizing slippage across fiat and crypto pairs.",
  },
  {
    title: "Auditable Ledgering",
    description:
      "Granular, immutable event logs provide instant reconciliation and regulatory-ready audit trails.",
  },
];

const networkStatus = [
  { network: "SEPA Instant", status: "Live", cutoff: "24/7", load: "68%" },
  { network: "Fedwire", status: "Live", cutoff: "18:00 ET", load: "42%" },
  { network: "Polygon", status: "Live", cutoff: "5s finality", load: "23%" },
  { network: "Lightning", status: "Monitoring", cutoff: "Immediate", load: "12%" },
];

const transferTemplates = [
  { name: "Treasury Sweep", source: "USD Corporate", destination: "EUR Liquidity", cadence: "Hourly" },
  { name: "Exchange Settlement", source: "USDC Treasury", destination: "GBP Cash", cadence: "On Demand" },
  { name: "Payroll Batch", source: "EUR Operational", destination: "USDT Multiple", cadence: "Weekly" },
];

export default function Page() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logomark} aria-hidden />
          <span>Arclight PSP</span>
        </div>
        <nav className={styles.nav}>
          <a href="#platform">Platform</a>
          <a href="#transfers">Transfers</a>
          <a href="#compliance">Compliance</a>
          <a href="#support">Support</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.secondaryButton}>View Console</button>
          <button className={styles.primaryButton}>Request Access</button>
        </div>
      </header>

      <section className={styles.hero} id="platform">
        <div className={styles.heroContent}>
          <h1>
            Cross-rail settlements without compromise.
          </h1>
          <p>
            Arclight PSP enables banks, fintechs, and marketplaces to originate and settle fiat and cryptocurrency
            transfers through a single orchestration layer. Control policy, liquidity, and compliance with precision.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton}>Design a Flow</button>
            <button className={styles.secondaryButton}>Download Playbook</button>
          </div>
        </div>
        <div className={styles.metricsPanel}>
          <div className={styles.metricsHeader}>
            <span>Network Pulse</span>
            <span className={styles.metricsBadge}>SLA 99.995%</span>
          </div>
          <div className={styles.metricsGrid}>
            {clients.map((item) => (
              <div key={item.label} className={styles.metric}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.timeline}>
            <span>Settlement window</span>
            <div className={styles.timelineBar}>
              <div className={styles.timelineMarker} style={{ left: "22%" }}>
                <span>T+0</span>
              </div>
              <div className={styles.timelineMarker} style={{ left: "48%" }}>
                <span>Pre-funded</span>
              </div>
              <div className={styles.timelineMarker} style={{ left: "82%" }}>
                <span>Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.transferBoard} id="transfers">
        <div className={styles.transferPanel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Settle now</span>
              <h2>Dual-Rail Transfer Designer</h2>
            </div>
            <div className={styles.tabGroup}>
              <button className={styles.tabButton} data-state="active">
                Manual
              </button>
              <button className={styles.tabButton}>Programmatic</button>
            </div>
          </div>
          <div className={styles.transferForm}>
            <div className={styles.formColumn}>
              <span className={styles.formLabel}>Origin</span>
              <div className={styles.formControl}>
                <span className={styles.formHint}>Account</span>
                <strong>USD Master Treasury</strong>
              </div>
              <div className={styles.formControl}>
                <span className={styles.formHint}>Rail</span>
                <strong>Fedwire • Immediate</strong>
              </div>
            </div>
            <div className={styles.formColumn}>
              <span className={styles.formLabel}>Destination</span>
              <div className={styles.formControl}>
                <span className={styles.formHint}>Wallet</span>
                <strong>USDC Custody • Polygon</strong>
              </div>
              <div className={styles.formControl}>
                <span className={styles.formHint}>Settlement time</span>
                <strong>00:03:11</strong>
              </div>
            </div>
            <div className={styles.formColumn}>
              <span className={styles.formLabel}>Amount</span>
              <div className={styles.amountGroup}>
                <div className={styles.amountEntry}>
                  <span className={styles.formHint}>Send</span>
                  <strong>2,500,000 USD</strong>
                </div>
                <div className={styles.amountEntry}>
                  <span className={styles.formHint}>Receive</span>
                  <strong>2,496,380 USDC</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.transferFooter}>
            <div className={styles.rateBlock}>
              <span className={styles.formHint}>Quote</span>
              <strong>0.99855 net rate • +$320 hedging</strong>
            </div>
            <div className={styles.rateBlock}>
              <span className={styles.formHint}>Control</span>
              <strong>Policy set: Tier 1 digital outflow • Threshold 5M</strong>
            </div>
            <button className={styles.primaryButton}>Launch Transfer</button>
          </div>
        </div>

        <aside className={styles.transferSidebar}>
          <div className={styles.sidebarPanel}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelEyebrow}>Templates</span>
                <h3>Pre-Approved Journeys</h3>
              </div>
            </div>
            <div className={styles.templates}>
              {transferTemplates.map((template) => (
                <div key={template.name} className={styles.templateRow}>
                  <div>
                    <strong>{template.name}</strong>
                    <span>{template.cadence}</span>
                  </div>
                  <div className={styles.templateDetail}>
                    <span>{template.source}</span>
                    <span>→</span>
                    <span>{template.destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebarPanel} id="compliance">
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelEyebrow}>Oversight</span>
                <h3>Policy Monitor</h3>
              </div>
            </div>
            <div className={styles.policyList}>
              <div className={styles.policyItem}>
                <strong>Travel Rule • Auto</strong>
                <span>ATTACHED</span>
              </div>
              <div className={styles.policyItem}>
                <strong>Counterparty Screening</strong>
                <span>PASSED 12:04 UTC</span>
              </div>
              <div className={styles.policyItem}>
                <strong>Liquidity Coverage</strong>
                <span>108% buffer</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.networkSection}>
        <div className={styles.networkTable}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Global rails</span>
              <h3>Execution Fabric</h3>
            </div>
            <a href="#support" className={styles.link}>
              View integration docs
            </a>
          </div>
          <div className={styles.tableHead}>
            <span>Network</span>
            <span>Status</span>
            <span>Settlement window</span>
            <span>Capacity</span>
          </div>
          {networkStatus.map((row) => (
            <div key={row.network} className={styles.tableRow}>
              <span>{row.network}</span>
              <span>{row.status}</span>
              <span>{row.cutoff}</span>
              <span>{row.load}</span>
            </div>
          ))}
        </div>

        <div className={styles.featureGrid} id="features">
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <button className={styles.linkButton}>Explore module</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} id="support">
        <div>
          <h2>Deploy a settlement flow in under seven days.</h2>
          <p>
            Our solution engineers pair with your treasury, compliance, and product teams to deliver programmable
            settlement logic on your timelines. Enterprise SLAs across fiat and digital assets included.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <button className={styles.primaryButton}>Book Technical Workshop</button>
          <div className={styles.contactBlock}>
            <span>Prefer direct contact?</span>
            <a className={styles.link} href="mailto:partners@arclightpsp.com">
              partners@arclightpsp.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
