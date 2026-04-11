---
layout: page
title: SR-TOD for Micro-Object Detection in UAV Imagery
description: SR-TOD framework and DGFE module for complex sea surface environments.
img: assets/img/1.jpg
importance: 3
category: research
---

**Role:** Core Developer (University Innovation & Entrepreneurship Project)  
**Timeline:** 2024 - Present

This project addresses missed detections and false alarms in UAV aerial imagery caused by tiny target size, sea-surface
background clutter, and severe illumination variation.

## Pipeline

The full detection system is designed as a preprocessing-to-representation pipeline that first stabilizes the visual
signal and then improves tiny-object sensitivity inside the detector.

## Methodology

- **Image preprocessing:** Use SuperGlue matching with weighted fusion for seamless stitching, then apply Multi-Scale
  Retinex (MSR) to correct uneven lighting and cloud occlusion.
- **SR-TOD framework:** Introduce the **Self-Reconstruction Tiny Object Detection (SR-TOD)** framework with a
  lightweight reconstruction head that generates difference maps from background self-reconstruction variance.
- **Feature enhancement:** Design the **Difference-Guided Feature Enhancement (DGFE)** module so that difference maps
  act as attention priors for clearer multi-scale target representation.

## Outcome

The resulting framework improves the detector's ability to localize tiny targets in complex maritime scenes while
keeping the architecture aligned with engineering deployment constraints.
