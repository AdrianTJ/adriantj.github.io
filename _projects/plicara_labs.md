---
layout: page
title: Plicara Labs
description: "My independent research practice: studies of AI evaluation, regex correctness, safety, and benchmark answer keys."
permalink: /projects/foothills_labs/
importance: 1
featured: true
featured_title: Regex evaluation at Plicara Labs
featured_summary: I built a study and evaluation tooling to examine test passing, regex safety, and errors in benchmark answer keys.
category: work
github: https://github.com/plicara
---

**[Plicara Labs](https://plicara.ai/)** is my independent AI research lab, where I investigate how AI systems behave through reproducible studies, benchmarks, and practical tools.

## Regex evaluation

Can a generated regular expression pass its tests and still fail in use? I built [regexbench](https://github.com/plicara/regexbench) and used it in a [study of generated regular expressions](https://plicara.ai/research/whether-anyone-ever-ran-it/), comparing test passing, reference-language equivalence, and denial-of-service vulnerability screening.

The study examines failures in generated patterns and in the benchmark's own answer key. Its contribution is an inspectable account of what the metrics measure, where they disagree, and which limitations remain. Passing examples is not a general correctness or safety guarantee, and an automated equivalence check only answers the question within its supported semantics.

[Read the study](https://plicara.ai/research/whether-anyone-ever-ran-it/) · [Inspect the methods and results](https://plicara.ai/benchmarks/regexeval-2026/) · [Browse the experiment repository](https://github.com/plicara/regexeval-2026)

## Tools and further experiments

- [labloop](https://github.com/plicara/labloop), an agent-driven experiment loop that proposes a change, runs it time-boxed, and keeps it only if the metric improves.
- [regexbench](https://github.com/plicara/regexbench), an evaluator for LLM-generated regular expressions covering semantic equivalence, correctness, and ReDoS safety.
- [Adventure Bench](https://plicara.ai/benchmarks/adventurebench/), a benchmark for interpreting an instruction as an action in a described scene, with explicit limits on what that task measures.

Read the [research](https://plicara.ai/research/) or follow along on [GitHub](https://github.com/plicara).
