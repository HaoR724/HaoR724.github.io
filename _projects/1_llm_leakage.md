---
layout: page
title: 大模型基准测试中的数据泄漏检测
description: 通过选项重构、log-probability 分析与 Isolation Forest 识别基准污染。
img: assets/img/llm-leakage-logprob.png
importance: 1
category: research
---

**角色：** 独立研究 / 核心成员  
**时间：** 2024 - 至今

本项目关注在大语言模型预训练数据不可观测的灰盒场景下，如何识别基准测试中的潜在数据污染问题。目标是为
MMLU、CMMLU 等 benchmark 提供更加可靠的有效性评估依据。

## 研究问题

当评测题目已经在预训练语料中出现时，benchmark 分数会显著高估模型真实能力。由于灰盒评测无法直接访问训练
语料，因此需要构造一种间接但稳定的检测方法。

## 方法设计

- **衍生序列构造：** 利用选择题打乱选项后语义保持不变的特性，为 MMLU 与 CMMLU 构造多组衍生序列。
- **对数概率分析：** 通过 LLaMA 2、Qwen 等目标模型提取原始顺序与重排顺序下的 log-probability 分布。
- **异常值检测：** 使用 **Isolation Forest** 对原始顺序的异常偏好进行打分，在刻意打乱正确选项后仍能识别污染样本。

## 研究过程图

<div class="project-gallery project-gallery--hero">
  <img src="{{ '/assets/img/llm-leakage-logprob.png' | relative_url }}" alt="不同选项顺序下的对数概率分布">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-outlier.png' | relative_url }}" alt="异常顺序识别结果">
  <img src="{{ '/assets/img/llm-leakage-leaderboard.png' | relative_url }}" alt="LLM benchmark 泄漏排行榜">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-case-a.png' | relative_url }}" alt="scenario a 案例分析">
  <img src="{{ '/assets/img/llm-leakage-case-b.png' | relative_url }}" alt="scenario b 案例分析">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-results-a.png' | relative_url }}" alt="scenario a 实验结果">
  <img src="{{ '/assets/img/llm-leakage-results-b.png' | relative_url }}" alt="scenario b 实验结果">
</div>

## 项目结果

该方法能够识别许多传统启发式策略难以覆盖的污染样本，并提供具有可解释性的量化信号，用于比较不同开源模型在
benchmark 上的鲁棒性与污染风险。
