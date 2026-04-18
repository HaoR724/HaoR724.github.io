---
layout: page
title: 自动驾驶掉头决策与路径优化
description: 面向城市复杂场景的预测、规划与控制一体化方法。
img: assets/img/autonomous-driving-flowchart.png
importance: 2
category: 科研项目
role: 核心算法设计
period: 2023 - 2024
keywords:
  - Kalman Filter
  - Path Planning
  - Bezier
  - MPC
project_links:
  - label: 查看项目论文
    icon: fa-solid fa-file-pdf
    url: /assets/pdf/基于卡尔曼滤波与MPC的自动驾驶掉头决策与多目标路径优化.pdf
project_summary: 面向双向双车道城市道路中的复杂掉头场景，构建感知、预测、决策、规划、控制一体化自动驾驶模型。
---

## <i class="fa-solid fa-sitemap"></i> 系统设计

系统围绕环境理解、动态风险评估、多目标轨迹生成与闭环控制展开，使车辆能够在动态交通流约束下判断何时掉头、
如何掉头，并在执行过程中持续修正轨迹。

## <i class="fa-solid fa-flask-vial"></i> 方法设计

- **预测与决策：** 使用 **Kalman Filter** 预测动态障碍物短时轨迹，并将过程噪声不确定性纳入建模；通过 TTC
  与空间距离联合量化安全窗口。
- **路径规划：** 基于三次 **Bezier** 曲线生成平滑轨迹，再通过层次分析法综合安全性、舒适性与效率等目标。
- **动态控制：** 设计四级风险响应机制，采用 **Model Predictive Control (MPC)** 完成轨迹跟踪修正与紧急制动。

## <i class="fa-solid fa-diagram-project"></i> 系统流程与决策建模

项目首先从掉头任务的完整闭环出发，明确感知、预测、决策、规划与控制之间的数据流与约束关系。随后使用 pairwise
比较矩阵量化多目标决策权重，并通过两组仿真场景验证车辆在动态来车干扰下是否具备安全掉头条件。

<div class="project-gallery">
  <img src="{{ '/assets/img/autonomous-driving-flowchart.png' | relative_url }}" alt="自动驾驶掉头决策系统流程图">
</div>

<div class="project-gallery">
  <img src="{{ '/assets/img/autonomous-driving-pairwise-matrix.png' | relative_url }}" alt="自动驾驶掉头任务的 pairwise 比较矩阵">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/autonomous-driving-decision-sim1.png' | relative_url }}" alt="仿真一是否可掉头决策结果">
  <img src="{{ '/assets/img/autonomous-driving-decision-sim2.png' | relative_url }}" alt="仿真二是否可掉头决策结果">
</div>

<p class="project-caption">
  这一组图对应系统整体设计、目标权重构建与场景决策验证，展示模型如何在动态障碍物约束下判断掉头时机。
</p>

## <i class="fa-solid fa-route"></i> 路径规划与参数优化

在确定可掉头后，系统基于 Bezier 曲线生成初始路径，并对掉头过程中的关键几何参数与车辆状态参数进行对比分析。
通过多目标权衡，可进一步得到更平滑、更安全的优化后路径，为后续控制模块提供更稳定的参考轨迹。

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/autonomous-driving-path-base.png' | relative_url }}" alt="自动驾驶掉头基础路径曲线">
  <img src="{{ '/assets/img/autonomous-driving-path-optimized.png' | relative_url }}" alt="自动驾驶掉头优化后路径曲线">
</div>

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/autonomous-driving-params-base.png' | relative_url }}" alt="自动驾驶掉头基础路径参数表">
  <img src="{{ '/assets/img/autonomous-driving-params-optimized.png' | relative_url }}" alt="自动驾驶掉头优化后路径参数表">
</div>

<p class="project-caption">
  上图对比了优化前后的路径形态与参数变化，说明多目标规划不仅改善了掉头曲线平滑性，也增强了路径执行的稳定性。
</p>

## <i class="fa-solid fa-shield-halved"></i> 轨迹微调与紧急响应

在车辆实际执行过程中，系统进一步结合 MPC 对轨迹进行在线微调，并在风险迅速升高时切换到紧急响应模式。这样既
能提升常规场景下的跟踪精度，也能在突发情况下保持足够的安全冗余。

<div class="project-gallery project-gallery--two">
  <img src="{{ '/assets/img/autonomous-driving-path-adjustment.png' | relative_url }}" alt="自动驾驶掉头微调情况路径曲线变化">
  <img src="{{ '/assets/img/autonomous-driving-path-emergency.png' | relative_url }}" alt="自动驾驶掉头紧急情况路径曲线变化">
</div>

<p class="project-caption">
  该部分对应 MPC 微调与紧急制动场景下的路径变化结果，体现出系统在复杂城市掉头任务中的闭环控制能力。
</p>

## <i class="fa-solid fa-medal"></i> 项目结果

最终系统形成了从风险评估到轨迹生成再到控制执行的完整链路，在复杂掉头任务中兼顾了可解释的安全推理与更平滑
的轨迹输出。
