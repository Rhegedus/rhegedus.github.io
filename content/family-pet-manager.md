---
title: "Family Pet Manager (FPM)"
company: "Founder & Solo Developer"
status: "Active Production"
tags: ["AWS", "Serverless", "Next.js", "AI Orchestration", "Stripe Integration"]
order: 1
---

### The Architecture

An enterprise-grade, multi-tenant pet registry platform engineered completely on a serverless AWS stack. Designed for high availability, low-latency state changes, and smart data routing.

### Technical Pillars

* **Multi-Gateway Payment Orchestration:** Modular billing engine dynamically routing between Stripe (Checkout & Customer Portal sessions) and Adyen (Drop-in components) based on tenant context, backed by signature-verified webhooks.
* **TNR Intake & Quota System:** Rapid intake tracking for Trap-Neuter-Return operations, featuring capacity validation against active purchased workspaces slots.
* **Exposure Risk Analysis (Contact Tracing):** Event-sourced contact tracing mapping location history overlaps via DynamoDB GSI reverse partition indexing (`GSI1PK = LOC_ID#...`).
* **Lite Identity Verification (KYC):** Ephemeral AI-driven workflow parsing uploaded identity documentation via Gemini 1.5 Flash, matching applicants dynamically with zero long-term retention of raw files.
* **Capability-Based Access Control (CBAC):** Granular capability contracts (`hasCapability`) securing medical registries, inventory controls, and audited PII access across roles.
* **Honeypot Exploits Defense Middleware:** Custom edge middleware intercepting common administrative vulnerabilities probe signatures (e.g. `/wp-admin`, `/.env`) and redirecting threats away from auth gateways.
* **State Management:** Strict validation schemas ensuring deterministic data states across distributed serverless functions.
* **Storage Layer:** High-performance DynamoDB single-table design with custom GSI partition schemes to keep transactional latency to an absolute minimum.

### State Integrity & Safety Patterns

```ts
// Example of strict transactional logging and error capture
export async function logStateChange(eventId: string, nextState: string) {
  try {
    const timestamp = new Date().toISOString();
    console.log(`[STATE_CHANGE] Event: ${eventId} -> ${nextState} at ${timestamp}`);
    
    // Explicit error check to preserve workflow stability
    if (!eventId || !nextState) {
      throw new Error("Invalid event boundaries identified during state transition.");
    }
  } catch (error) {
    console.error(`[CRITICAL] State transition failed:`, error);
    throw error;
  }
}
