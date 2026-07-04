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

* **Payment Integration (Stripe):** Secure billing infrastructure leveraging Stripe Checkout and customer portal sessions, with signature-verified webhook listeners managing subscription state synchronization across tenant accounts.
* **State Management:** Strict validation schemas ensuring deterministic data states across distributed serverless functions.
* **Storage Layer:** High-performance data modeling designed around specific data access patterns to keep transactional latency to a minimum.
* **AI Custom Reasoning Agent:** (Planned) Integrated reasoning layer hosted securely to parse platform events and automate data analysis for registries.

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
