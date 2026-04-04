---
layout: page
title: UAV Micro-Object Detection
description: SR-TOD framework and DGFE module for complex sea surface environments.
img: assets/img/1.jpg # 后期可以换成无人机或检测结果图
importance: 3
category: work
---

**Role:** Core Developer (University Innovation & Entrepreneurship Project)  
**Timeline:** 2024 - Present

Addressing the high missed-detection and false-alarm rates in UAV aerial imagery caused by tiny object sizes and complex backgrounds (e.g., sea waves, uneven lighting).

#### Core Methodology
* **Image Preprocessing:** Achieved seamless image stitching using SuperGlue feature matching and weighted average fusion. Introduced the Multi-Scale Retinex (MSR) algorithm to mitigate uneven lighting and cloud occlusion.
* **SR-TOD Framework:** Proposed the **Self-Reconstruction Tiny Object Detection (SR-TOD)** framework. A lightweight Reconstruction Head was added to the detector's neck to generate difference maps, utilizing the background self-reconstruction variance as prior information for tiny objects.
* **Feature Enhancement:** Designed the **Difference-Guided Feature Enhancement (DGFE)** module, which uses the difference map as an attention mechanism to guide the network to focus on high-response areas, significantly improving the clarity of tiny object features in deep network layers.
