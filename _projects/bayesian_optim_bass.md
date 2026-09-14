---
layout: page
title: Bayesian Optimization with BASS
description: "Thesis research on spline surrogates and how experimental machinery affects Bayesian-optimization comparisons."
importance: 2
featured: true
featured_title: Bayesian optimization and fair comparisons
featured_summary: My thesis explores spline surrogates; a companion manuscript examines how optimization machinery can change the conclusions of a comparison.
category: work
github: https://github.com/AdrianTJ/BayesianOptim_BASS
---

My master's thesis explores **Bayesian Adaptive Spline Surfaces (BASS)** as a surrogate model for Bayesian optimization. The work investigates whether spline-based surrogates can serve as a flexible, well-calibrated alternative to Gaussian processes when navigating expensive, black-box objective functions.

## My contribution

I develop and evaluate BASS-based surrogates alongside Gaussian-process baselines, with shared experimental code and recorded results. This is my MSc thesis work at ITAM, expected in September 2026 after completing the coursework in 2022.

The companion manuscript, [The Machinery Confound](https://github.com/AdrianTJ/BayesianOptim_BASS/blob/main/article_bo_machinery/main.tex), investigates how candidate generation, acquisition optimization, and repeated evaluations can affect comparisons attributed to the surrogate model. It is a research manuscript, not a claim that one surrogate is universally better.

## Inspect the work

The repository contains the manuscripts, experiment code, results, and [bo-audit](https://github.com/AdrianTJ/BayesianOptim_BASS/tree/main/bo-audit), tooling for inspecting objective evaluations. The central question is how to make comparisons fair enough to support the conclusions we draw.

Check out the code on [GitHub](https://github.com/AdrianTJ/BayesianOptim_BASS).
