---
layout: page
title: 面向无人机图像的微小目标检测 SR-TOD
description: 面向复杂海面环境的 SR-TOD 框架与 DGFE 模块设计。
img: assets/img/1.jpg
importance: 3
category: 科研项目
---

**角色：** 核心开发（大学生创新创业项目）  
**时间：** 2024 - 至今

本项目面向无人机航拍场景中因目标尺度极小、海面背景复杂、光照变化剧烈而导致的漏检与误检问题，设计高精度
检测框架。

## 系统流程

整体系统采用“预处理增强 + 表征提升 + 检测重建”的思路，先稳定视觉信号，再提升检测器对微小目标的敏感性。

## 方法设计

- **图像预处理：** 基于 SuperGlue 匹配和加权融合完成无缝拼接，再结合 Multi-Scale Retinex (MSR) 进行光照校正。
- **SR-TOD 框架：** 提出 **Self-Reconstruction Tiny Object Detection (SR-TOD)** 框架，引入轻量级重建头，利用背景
  自重建差异生成差分图。
- **特征增强：** 设计 **Difference-Guided Feature Enhancement (DGFE)** 模块，将差分图作为注意力先验强化多尺度特征。

## 项目结果

最终框架提升了复杂海面场景下微小目标的定位能力，同时保持了较好的工程部署可行性与模块化扩展能力。
