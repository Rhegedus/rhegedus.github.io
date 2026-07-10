---
title: "NetSuite Integration & Billing Middleware Rebuild"
company: "Lago"
status: "Forward Deployed Engineer / Contract"
tags: ["NetSuite", "Middleware", "Async Systems", "Billing Infrastructure"]
order: 1.5
---

### The Architecture

Reverse-engineered an undocumented NetSuite integration and rebuilt the async sync logic underpinning it, compressing invoice resync latency from 1-2 days to under 3 minutes.

### Technical Pillars

* **Billing Middleware:** Automated middleware layer orchestrating billing events and reconciliation between internal systems and NetSuite.
* **ERP Translation Layer:** Purpose-built translation layer normalizing data models between the billing platform and NetSuite's ERP schema.
* **Async Sync Rebuild:** Rebuilt asynchronous resync pipeline, cutting invoice resync latency from 1-2 days to under 3 minutes.
* **Engineering Time Reclaimed:** Reclaimed 20+ engineering hours per week for the internal team by automating previously manual reconciliation work.
