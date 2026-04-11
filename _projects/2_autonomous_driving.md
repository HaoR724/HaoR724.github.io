---
layout: page
title: Autonomous Driving U-turn Decision and Path Optimization
description: Integrated prediction, planning, and control for safe urban U-turn execution.
img: assets/img/3.jpg
importance: 2
category: research
---

**Role:** Core Algorithm Designer  
**Timeline:** 2023 - 2024

Constructed an integrated perception-prediction-decision-planning-control pipeline for autonomous vehicles in complex
two-way, two-lane urban U-turn scenarios.

## System Design

The model couples environmental understanding, dynamic risk assessment, multi-objective trajectory generation, and
closed-loop control so that the vehicle can decide when and how to execute a U-turn under moving-traffic constraints.

## Methodology

- **Prediction and decision:** Use **Kalman Filter** to predict short-term trajectories of dynamic obstacles while
  incorporating process-noise uncertainty. Safety windows are quantified by Time-to-Collision and spatial distance.
- **Path planning:** Generate smooth trajectories with cubic **Bezier** curves, then apply Analytic Hierarchy Process
  to combine safety, comfort, and efficiency into a single optimization objective.
- **Dynamic control:** Build a four-level risk response mechanism and solve constrained optimization problems with
  **Model Predictive Control (MPC)** for trajectory refinement and emergency braking.

## Outcome

The final pipeline provides a coherent decision-to-control path for handling complex U-turn execution with explicit
risk reasoning and smoother trajectory generation.
