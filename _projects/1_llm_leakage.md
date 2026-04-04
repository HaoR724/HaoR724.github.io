---
layout: page
title: LLM Data Leakage Detection
description: Detecting benchmark contamination using Log-Probability and Isolation Forest.
img: assets/img/12.jpg # 后期你可以换成大模型架构图
importance: 1
category: work
---

**Role:** Independent Researcher / Core Member  
**Timeline:** 2024 - Present

The opacity of LLM pre-training data often causes the results of benchmark tests to become unreliable. This project addresses the challenge of detecting benchmark contamination in a gray-box setting.

#### Core Methodology
* **Derivative Sequence Generation:** Leveraged the property that shuffling multiple-choice options does not alter the question's meaning to generate derivative sequences for benchmarks like MMLU and CMMLU.
* **Log-Probability Analysis:** Obtained the log-probability distribution of these derivative sequences by querying target models (e.g., LLaMA2, Qwen).
* **Anomaly Detection:** Introduced the **Isolation Forest** algorithm to compute the Outlier Score of the distribution. If a model exhibits an anomalously high log-probability for the original option order, it is confidently flagged as data leakage, effectively addressing complex contamination scenarios where options were deliberately shuffled.

**Outcomes:** Successfully replicated the evaluation on open-source models (Qwen, LLaMA), proving the effectiveness of using log-probability distributions for contamination detection.
