---
layout: page
title: Mollify
description: A collaborative Rust project that gives coding agents reproducible, inspectable findings about Python codebases.
importance: 3
featured: true
featured_summary: I help build this Rust-native analysis engine for Python, making codebase findings available to developers, CI, and coding agents.
category: work
github: https://github.com/FavioVazquez/mollify
---

**Mollify** is a Rust-native static analysis engine for Python codebases. It surfaces dead code, dependency structure, architectural boundaries, duplication, and security findings for developers and coding agents.

## My role

I help build Mollify with [Favio Vázquez](https://github.com/FavioVazquez). It is a collaborative project, maintained in [FavioVazquez/mollify](https://github.com/FavioVazquez/mollify). My interest is the interface between static analysis and agent workflows: giving an agent inspectable evidence about a codebase before it proposes changes.

## What the tool provides

Mollify exposes analysis through a CLI and structured outputs that can be used in CI and agent workflows. Deterministic output makes findings reproducible; it does not make every finding a proof. Findings still need to be interpreted within the analyzer's scope and confidence levels.

[Read my walkthrough](/blog/2026/mollify/) · [Code and documentation](https://github.com/FavioVazquez/mollify)
