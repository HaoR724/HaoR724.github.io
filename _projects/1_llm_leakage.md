---
layout: page
title: 大模型基准测试中的数据泄漏检测
description: 通过选项重构、log-probability 分析与 Isolation Forest 识别基准污染。
img: assets/img/llm-leakage-logprob.png
importance: 1
category: 科研项目
role: 核心成员
period: 2024 - 至今
keywords:
  - LLM Eval
  - Benchmark Leakage
  - Isolation Forest
  - Log-Probability
project_links:
  - label: 查看源码仓库
    icon: fa-brands fa-github
    url: https://github.com/HaoR724/LLM_eval
  - label: 查看数据集
    icon: fa-solid fa-database
    url: https://github.com/HaoR724/LLM_eval/tree/main/data
project_summary: 面向预训练数据不可观测的灰盒场景，构建基于选项重构与异常检测的大模型 benchmark 数据污染识别方法。
---

## <i class="fa-solid fa-circle-question"></i> 研究问题

当评测题目已经在预训练语料中出现时，benchmark 分数会显著高估模型真实能力。由于灰盒评测无法直接访问训练
语料，因此需要构造一种间接但稳定的检测方法。

## <i class="fa-solid fa-flask-vial"></i> 方法设计

- **衍生序列构造：** 利用选择题打乱选项后语义保持不变的特性，为 MMLU 与 CMMLU 构造多组衍生序列。
- **对数概率分析：** 通过 LLaMA 2、Qwen 等目标模型提取原始顺序与重排顺序下的 log-probability 分布。
- **异常值检测：** 使用 **Isolation Forest** 对原始顺序的异常偏好进行打分，在刻意打乱正确选项后仍能识别污染样本。

## <i class="fa-solid fa-chart-line"></i> 研究过程与结果展示

### <i class="fa-solid fa-wave-square"></i> 对数概率分布与异常评分

首先围绕原始题目顺序与重排顺序构建对照实验，观察模型在不同选项排列下的 log-probability 变化。通过这些分布
差异，可以进一步为 Isolation Forest 提供更稳定的异常评分依据，从而定位更可能受训练集污染影响的题目。

<div class="project-gallery project-gallery--hero">
  <img src="{{ '/assets/img/llm-leakage-logprob.png' | relative_url }}" alt="不同选项顺序下的对数概率分布">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-outlier.png' | relative_url }}" alt="异常顺序识别结果">
  <img src="{{ '/assets/img/llm-leakage-leaderboard.png' | relative_url }}" alt="LLM benchmark 泄漏排行榜">
</div>

<p class="project-caption">
  上图展示了从概率分布分析到异常顺序识别，再到不同模型污染风险排序的完整证据链，帮助判断 benchmark 得分是
  来自真实能力还是潜在记忆。
</p>

### <i class="fa-solid fa-magnifying-glass-chart"></i> 典型案例分析

在案例层面，项目进一步比较了不同题目在多种选项重排策略下的表现变化，观察模型是否对原始正确选项位置存在
异常偏好。这一步能够补足纯统计指标的局限，使检测结果更具解释性。

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-case-a.png' | relative_url }}" alt="scenario a 案例分析">
  <img src="{{ '/assets/img/llm-leakage-case-b.png' | relative_url }}" alt="scenario b 案例分析">
</div>

<p class="project-caption">
  两组案例分别对应不同污染情形下的题目响应模式，用于说明方法在复杂重排条件下依然可以识别异常样本。
</p>

### <i class="fa-solid fa-square-poll-vertical"></i> 实验结果对比

在实验阶段，重点比较了不同场景下污染样本识别结果与整体评测表现，验证该方法在复杂 benchmark 上的泛化能力。
这些结果说明，基于选项重构与异常检测的灰盒策略可以为大模型评测提供更细粒度的可信度判断。

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/llm-leakage-results-a.png' | relative_url }}" alt="scenario a 实验结果">
  <img src="{{ '/assets/img/llm-leakage-results-b.png' | relative_url }}" alt="scenario b 实验结果">
</div>

<p class="project-caption">
  实验结果覆盖不同数据集与不同模型设置，展示了方法对潜在污染样本的识别能力及其在评测稳定性分析中的价值。
</p>

## <i class="fa-solid fa-medal"></i> 项目结果

该方法能够识别许多传统启发式策略难以覆盖的污染样本，并提供具有可解释性的量化信号，用于比较不同开源模型在
benchmark 上的鲁棒性与污染风险。
