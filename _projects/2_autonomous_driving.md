---
layout: page
title: Autonomous Driving MPC
description: U-turn decision making and multi-objective path optimization based on Kalman Filter and MPC.
img: assets/img/3.jpg # 后期可换成车辆轨迹图
importance: 2
category: work
---

**Role:** Core Algorithm Designer  
**Timeline:** 2023 - 2024

Constructed an integrated "Perception-Prediction-Decision-Planning-Control" U-turn model for autonomous vehicles in complex two-way, two-lane urban scenarios.

#### Core Methodology
* **Prediction & Decision:** Utilized **Kalman Filter** for high-precision short-term trajectory prediction of dynamic obstacles, simulating velocity uncertainty via process noise covariance. Formulated a dynamic safety window using Time-to-Collision (TTC) and spatial distance to output safe U-turn timing.
* **Path Planning:** Employed cubic **Bézier curves** to ensure trajectory continuity. Applied the Analytic Hierarchy Process (AHP) to convert multi-objectives (total time, lateral acceleration fluctuation, obstacle distance) into a single objective function, optimizing for both safety (62.7% weight) and comfort.
* **Dynamic Control:** Established a four-level risk response mechanism. Solved constrained quadratic programming problems using **Model Predictive Control (MPC)** algorithms for local trajectory fine-tuning (low risk) and emergency braking (high risk).
