---
layout: page
title: Gray-box Data Leakage Detection in LLM Benchmarks
description: Detecting benchmark contamination with option restructuring, log-probability analysis, and Isolation Forest.
img: assets/img/12.jpg
importance: 1
category: research
---

**Role:** Independent Researcher / Core Member  
**Timeline:** 2024 - Present

This project studies how to detect benchmark contamination when the pre-training data of a large language model is not
observable. The goal is to recover a more reliable estimate of benchmark validity in a gray-box evaluation setting.

## Problem Setting

Benchmark scores become unreliable when evaluation questions have already appeared in pre-training corpora. Standard
gray-box evaluation is especially fragile because it cannot inspect the original training set directly.

## Methodology

- **Derivative sequence generation:** Exploit the fact that shuffling multiple-choice options preserves question
  semantics, then construct derivative benchmark sequences for MMLU and CMMLU.
- **Log-probability analysis:** Query target models such as LLaMA 2 and Qwen to obtain the log-probability
  distribution over the original and reshuffled option orders.
- **Outlier detection:** Use **Isolation Forest** to score abnormal preference for the original option sequence. An
  anomalously high score indicates likely contamination even under deliberately scrambled answer options.

## Outcome

The resulting workflow identifies contamination cases that remain difficult for simpler heuristics. It also provides an
interpretable quantitative signal for comparing benchmark robustness across open-source models.
