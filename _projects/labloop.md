---
layout: page
title: labloop
description: An agent-driven experiment loop that measures proposed changes and records every trial, including failures.
importance: 4
category: work
github: https://github.com/plicara/labloop
---

**[labloop](https://github.com/plicara/labloop)** is a Python tool I develop at [Plicara Labs](https://plicara.ai/) for agent-driven research. An agent proposes a code change, an experiment runs under a time budget, and the change is kept only when it improves the chosen metric.

The trial record includes failed and reverted attempts, not just successful changes. That makes the experiment history available for inspection beyond the commits that survive.

The loop is only as useful as the experiment and metric it runs. Repeatability checks help distinguish improvements from measurement noise; a better score is not, by itself, evidence of broader capability.

[Code and documentation](https://github.com/plicara/labloop) · [Install from PyPI](https://pypi.org/project/labloop/)
