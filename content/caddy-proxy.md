---
title: "Automated Edge Routing Proxy"
company: "Infrastructure Blueprint"
status: "Production Blueprint"
tags: ["Caddy", "Reverse Proxy", "SSL Automation", "DevOps"]
order: 4
---

### The Setup

A portable, production-ready reverse-proxy and static web serving layer built on Caddy. Configured to orchestrate incoming WAN traffic, automate SSL/TLS certificate lifecycle via ACME, and securely route requests to isolated backend environments.

### Architecture & Strategy

* **OPNsense & WAN Integration:** Integrated upstream with OPNsense NAT routing to forward external ports 80/443 directly to the Caddy container, facilitating seamless HTTP-01 ACME challenges for Let's Encrypt and ZeroSSL.
* **Host-Bridged Reverse Proxying:** Configured with host-bridged routing mapping `host.docker.internal` to the host gateway, allowing dynamic routing to multiple backend containers (e.g., `demo-adyen.rhegedus.com` to `adyen-demo-container:3000` and `demo-infer.rhegedus.com` to `infer-demo-container:3000`) without complex shared networks.
* **Static Asset Delivery:** Serves optimized static assets directly from a shared host directory mount (`/srv` mapped to `./public`), reducing proxy overhead.
* **Canonical URL Enforcement:** Implements declarative redirect rules to enforce canonical non-www hosts (redirecting `www.rhegedus.com` to `rhegedus.com`).
* **Rotated Telemetry Logging:** Outputs JSON-formatted structured access logs with auto-rolling policies (capped at 10MB per log, keeping 7 historical archives).
* **Secure Administration Gateways:** Binds the admin API (`:2019`) to localhost inside the container and tunnels administrative commands via secure SSH port forwarding for maintenance.
* **Automated Asset Pipelines:** Integrates with a local Tailwind CSS v3 compilation workflow for static styling builds.
