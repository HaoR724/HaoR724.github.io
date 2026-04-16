---
layout: about
title: 首页
permalink: /
subtitle: >
  东北大学秦皇岛分校 计算机科学与技术专业 本科生
custom_home: true

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="home-shell">
  <section class="home-hero-panel home-hero-panel--with-profile">
    <div class="home-hero-copy">
      <p class="home-kicker">人工智能、计算机视觉与自动驾驶方向本科研究者</p>
      <h2 class="home-hero-title">刘浩然</h2>
      <p class="home-lead">
        我是东北大学秦皇岛分校计算机科学与技术专业本科生，专业排名前 <strong>7%</strong>，GPA 为
        <strong>4.06/5.00</strong>，英语六级成绩 <strong>555</strong>。
      </p>
      <p class="home-lead">
        目前主要围绕 <strong>大模型基准污染检测</strong>、<strong>无人机场景微小目标检测</strong> 与
        <strong>自动驾驶规划控制</strong> 展开研究与工程实现，正在积极准备硕士/博士阶段的科研申请。
      </p>
      <div class="home-actions">
        <a class="home-action" href="{{ '/projects/' | relative_url }}">查看项目</a>
        <a class="home-action home-action--ghost" href="{{ '/cv/' | relative_url }}">查看简历</a>
        <a
          class="home-action home-action--ghost"
          href="{{ '/assets/pdf/刘浩然简历.pdf' | relative_url }}"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF 简历
        </a>
      </div>
      <div class="home-metrics">
        <div class="home-metric">
          <span class="home-metric__value">前 7%</span>
          <span class="home-metric__label">专业排名</span>
        </div>
        <div class="home-metric">
          <span class="home-metric__value">4.06 / 5.00</span>
          <span class="home-metric__label">GPA</span>
        </div>
        <div class="home-metric">
          <span class="home-metric__value">CET-6 555</span>
          <span class="home-metric__label">英语能力</span>
        </div>
      </div>
    </div>
    <div class="home-profile-card">
      <img class="home-profile-image" src="{{ '/assets/img/me.jpg' | relative_url }}" alt="刘浩然">
      <div class="home-profile-info">
        <p><strong>邮箱</strong><br><a href="mailto:liuhaoran@stu.neuq.edu.cn">liuhaoran@stu.neuq.edu.cn</a></p>
        <p><strong>GitHub</strong><br><a href="https://github.com/HaoR724" target="_blank" rel="noopener noreferrer">github.com/HaoR724</a></p>
        <p><strong>所在城市</strong><br>河北秦皇岛</p>
        <p><strong>关注方向</strong><br>大模型评测、视觉感知、自动驾驶</p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-heading">
      <p class="home-section-label">个人简介</p>
      <h2 class="home-section-title">以科研问题驱动，以工程落地为目标的学习与研究路径。</h2>
    </div>
    <div class="home-grid home-grid--two">
      <div class="home-card">
        <h3>研究兴趣</h3>
        <div class="home-tags">
          <span class="home-tag">人工智能</span>
          <span class="home-tag">大语言模型</span>
          <span class="home-tag">计算机视觉</span>
          <span class="home-tag">微小目标检测</span>
          <span class="home-tag">自动驾驶</span>
        </div>
      </div>
      <div class="home-card">
        <h3>学术画像</h3>
        <p>
          我关注如何将严格定义的研究问题转化为可验证、可复现、可实现的系统方案。习惯从问题建模、方法设计、
          实验分析一路推进到工程实现与结果解释，希望在学术研究与系统实现之间建立稳定连接。
        </p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-heading">
      <p class="home-section-label">代表项目</p>
      <h2 class="home-section-title">当前最能体现研究积累与方法能力的三个方向。</h2>
    </div>
    <div class="home-project-grid">
      <a class="home-project" href="{% link _projects/1_llm_leakage.md %}">
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/llm-leakage-logprob.png' | relative_url }}" alt="LLM benchmark data leakage figure">
        </div>
        <p class="home-project__meta">独立研究 / 核心成员</p>
        <h3>大模型基准测试中的数据泄漏检测</h3>
        <p>
          面向预训练数据不可观测的灰盒场景，研究如何通过重构选择题选项顺序与分析 log-probability 分布，
          识别大模型基准测试中的潜在污染问题。
        </p>
        <p>
          项目中已加入论文研究过程图，包括对数概率分布、异常顺序识别、排行榜对比、案例分析与实验结果表，
          能更直观地展示方法细节与效果。
        </p>
      </a>
      <a class="home-project" href="{% link _projects/2_autonomous_driving.md %}">
        <p class="home-project__meta">核心算法设计</p>
        <h3>自动驾驶掉头决策与路径优化</h3>
        <p>
          面向双向双车道城市掉头场景，构建感知、预测、决策、规划、控制一体化模型。
        </p>
        <p>
          结合 Kalman Filter、TTC 安全窗、Bezier 曲线与 MPC，实现兼顾安全性、舒适性与实时性的掉头控制策略。
        </p>
      </a>
      <a class="home-project" href="{% link _projects/3_uav_vision.md %}">
        <p class="home-project__meta">大学生创新创业项目 / 核心开发</p>
        <h3>面向无人机图像的微小目标检测 SR-TOD</h3>
        <p>
          面向海面浪花、反光与复杂背景下的无人机微小目标检测问题，设计高精度视觉检测框架。
        </p>
        <p>
          管线融合 SuperGlue 拼接、MSR 光照校正、SR-TOD 检测框架与 DGFE 特征增强模块，提升复杂场景下的目标表达能力。
        </p>
      </a>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-heading">
      <p class="home-section-label">最新动态</p>
      <h2 class="home-section-title">近期获奖与学习科研进展。</h2>
    </div>
    <div class="home-card">
      <ul class="home-news">
        <li><span>[2025.10]</span> 获东北大学秦皇岛分校综合三等奖学金。</li>
        <li><span>[2025.04]</span> 获综合一等奖学金与创新创业奖学金。</li>
        <li><span>[2024]</span> 获综合一等奖学金。</li>
        <li><span>[2024]</span> 获全国大学生数学建模竞赛省级一等奖。</li>
      </ul>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-heading">
      <p class="home-section-label">荣誉奖项</p>
      <h2 class="home-section-title">能够体现学术潜力与竞赛能力的代表性成果。</h2>
    </div>
    <div class="home-grid home-grid--two">
      <div class="home-card home-card--award">
        <h3>全国大学生数学建模竞赛</h3>
        <p>省级一等奖</p>
      </div>
      <div class="home-card home-card--award">
        <h3>全国大学生数学建模竞赛</h3>
        <p>省级二等奖</p>
      </div>
      <div class="home-card home-card--award">
        <h3>综合一等奖学金</h3>
        <p>2024、2025</p>
      </div>
      <div class="home-card home-card--award">
        <h3>创新创业奖学金</h3>
        <p>2025</p>
      </div>
      <div class="home-card home-card--award">
        <h3>综合三等奖学金</h3>
        <p>2025</p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-heading">
      <p class="home-section-label">技术能力</p>
      <h2 class="home-section-title">科研实现与工程开发中主要使用的工具链。</h2>
    </div>
    <div class="home-grid home-grid--three">
      <div class="home-card">
        <h3>编程语言</h3>
        <div class="home-tags">
          <span class="home-tag">C/C++</span>
          <span class="home-tag">Python</span>
          <span class="home-tag">Java</span>
        </div>
      </div>
      <div class="home-card">
        <h3>人工智能与视觉</h3>
        <div class="home-tags">
          <span class="home-tag">PyTorch</span>
          <span class="home-tag">OpenCV</span>
          <span class="home-tag">Isolation Forest</span>
          <span class="home-tag">Kalman Filter</span>
          <span class="home-tag">MPC</span>
        </div>
      </div>
      <div class="home-card">
        <h3>工具与环境</h3>
        <div class="home-tags">
          <span class="home-tag">MATLAB</span>
          <span class="home-tag">LaTeX</span>
          <span class="home-tag">Git</span>
        </div>
      </div>
    </div>
  </section>
</div>
