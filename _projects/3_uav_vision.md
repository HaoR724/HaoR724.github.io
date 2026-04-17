---
layout: page
title: 面向无人机图像的微小目标检测 SR-TOD
description: 面向复杂海面环境的 SR-TOD 框架与 DGFE 模块设计。
img: assets/img/uav-vision-pipeline.png
importance: 3
category: 科研项目
---

**角色：** 核心开发（大学生创新创业项目）  
**时间：** 2024 - 至今

本项目面向无人机航拍场景中因目标尺度极小、海面背景复杂、光照变化剧烈而导致的漏检与误检问题，设计高精度
检测框架。

## <i class="fa-solid fa-sitemap"></i> 系统流程

整体系统采用“预处理增强 + 表征提升 + 检测重建”的思路，先稳定视觉信号，再提升检测器对微小目标的敏感性。

## <i class="fa-solid fa-flask-vial"></i> 方法设计

- **图像预处理：** 基于 SuperGlue 匹配和加权融合完成无缝拼接，再结合 Multi-Scale Retinex (MSR) 进行光照校正。
- **SR-TOD 框架：** 提出 **Self-Reconstruction Tiny Object Detection (SR-TOD)** 框架，引入轻量级重建头，利用背景
  自重建差异生成差分图。
- **特征增强：** 设计 **Difference-Guided Feature Enhancement (DGFE)** 模块，将差分图作为注意力先验强化多尺度特征。

## <i class="fa-solid fa-diagram-project"></i> 系统流程展示

项目整体流程从海面无人机图像获取出发，依次经过图像拼接与颜色校正、特征提取、目标检测和特征增强等关键步骤，
最终形成面向复杂场景的微小目标检测管线。该流程图也更直观地展示了从图像预处理到检测输出的完整方法链路。

<div class="project-gallery project-gallery--hero">
  <img src="{{ '/assets/img/uav-vision-pipeline.png' | relative_url }}" alt="无人机微小目标检测项目整体技术流程图">
</div>

<p class="project-caption">
  上图展示了从无人机海面影像获取、SuperGlue 拼接、加权融合与颜色校正，到特征提取、目标检测和特征增强的完整流程。
</p>

## <i class="fa-solid fa-image"></i> 结果展示与环境适应性

在实验展示部分，项目重点强调了复杂海面和多变光照条件下的适应能力。通过图像增强、广域动态测量与微小目标检测，
系统能够在云雾、亮度变化和复杂背景干扰下保持较好的识别表现。

<div class="project-gallery project-gallery--hero">
  <img src="{{ '/assets/img/uav-vision-results.png' | relative_url }}" alt="无人机微小目标检测项目结果与环境适应性展示图">
</div>

<p class="project-caption">
  结果图展示了光照增强前后的图像差异、多环境下的检测表现，以及复杂海面场景中的目标识别效果。
</p>

## <i class="fa-solid fa-medal"></i> 项目结果

最终框架提升了复杂海面场景下微小目标的定位能力，同时保持了较好的工程部署可行性与模块化扩展能力。
