---
title: "Adyen Checkout & Webhook Event Sourcing Demo"
company: "Solutions Engineering Showcase"
status: "Technical Interview Build / Adyen"
tags: ["Adyen", "Payments", "Webhooks", "Event Sourcing", "Idempotency", "DynamoDB", "Next.js"]
order: 3
externalUrl: "https://demo-adyen.rhegedus.com"
---

### The Objective

Built a production-grade e-commerce checkout flow (Paw & Whisker Supply Co.) on a real Adyen payment gateway integration, using Adyen Drop-in with server-side sessions and webhook event sourcing.

### Integration Highlights

* **Adyen Drop-in & Server-Side Sessions:** Encrypted token handshakes handled directly with the payment gateway via server-side session creation.
* **Webhook Event Sourcing:** Purchase and webhook data stored in DynamoDB with TTL-based auto-expiry, so the public demo self-cleans with zero manual maintenance.
* **Live Admin Dashboard:** Tracks purchases and webhook events in real time.
* **Idempotent Replay:** Ability to manually replay webhooks to demonstrate idempotent event handling under real gateway conditions.
