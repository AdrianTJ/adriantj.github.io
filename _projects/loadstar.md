---
layout: page
title: Loadstar
description: A high-performance, open-source page speed analysis toolkit written in Go for measuring and tracking web performance metrics.
img: assets/img/project_previews/loadstar.png
importance: 7
category: work
github: https://github.com/AdrianTJ/Loadstar
---

**Loadstar** (formerly GoSpeedTests) is a high-performance, open-source page speed analysis toolkit written in Go. It is designed for developers and SREs to measure, track, and compare web performance metrics across any URL without vendor lock-in.

### Key Features

- **Three-Tiered Measurement**:
  - **Network**: Sub-millisecond tracing for DNS, TCP, TLS, and TTFB.
  - **Browser**: Full page load analysis and Waterfall generation via headless Chrome.
  - **Vitals**: Real-world Core Web Vitals (LCP, CLS, FCP).
- **Asynchronous Engine**: Robust job management with a configurable worker pool.
- **Dual Interface**:
  - **CLI (`gost`)**: Optimized for ad-hoc testing and scripts.
  - **API Daemon (`gostd`)**: RESTful API for CI/CD integration.
- **Production Ready**: Zero-config SQLite backend, SSRF protection, and Docker support.

Check out the code on [GitHub](https://github.com/AdrianTJ/Loadstar).
