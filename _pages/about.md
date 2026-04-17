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
  <div class="home-timeline" aria-hidden="true">
    <span class="home-timeline__line"></span>
    <span class="home-timeline__pulse home-timeline__pulse--1"></span>
    <span class="home-timeline__pulse home-timeline__pulse--2"></span>
    <span class="home-timeline__pulse home-timeline__pulse--3"></span>
  </div>

  <section class="home-hero-panel home-hero-panel--with-profile home-reveal" data-reveal="hero">
    <div class="home-hero-copy">
      <p class="home-kicker">欢迎来到我的主页</p>
      <h2 class="home-hero-title">刘浩然</h2>
      <p class="home-signature">Haoran Liu</p>
      <p class="home-lead">
        我是东北大学秦皇岛分校计算机科学与技术专业本科生，专业排名前 <strong>7%</strong>，GPA 为
        <strong>4.06/5.00</strong>，英语六级成绩 <strong>555</strong>。
      </p>
      <p class="home-lead">
        目前主要围绕<strong>大模型基准污染检测</strong>、<strong>大模型在 benchmark 上的数据泄露问题</strong>展开研究与工程实现，
        正在积极准备硕士/博士阶段的科研申请。
      </p>
      <div class="home-actions">
        <a class="home-action" href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-diagram-project"></i><span>查看项目</span></a>
        <a class="home-action" href="{{ '/cv/' | relative_url }}"><i class="fa-solid fa-file-lines"></i><span>查看简历</span></a>
        <a
          class="home-action"
          href="{{ '/assets/pdf/刘浩然简历.pdf' | relative_url }}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-download"></i><span>PDF 简历</span>
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
      <img class="home-profile-image" src="{{ '/assets/img/me.jpg' | relative_url }}" alt="刘浩然" fetchpriority="high">
      <div class="home-profile-info">
        <p><strong>邮箱</strong><br><a class="home-profile-email" href="mailto:liuhaoran@stu.neuq.edu.cn">liuhaoran@stu.neuq.edu.cn</a></p>
        <p><strong>GitHub</strong><br><a href="https://github.com/HaoR724" target="_blank" rel="noopener noreferrer">github.com/HaoR724</a></p>
        <p><strong>所在城市</strong><br>山东 济南</p>
        <p><strong>关注方向</strong><br>人工智能，大语言模型，评估检测</p>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="1">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-user-graduate"></i><span>个人简介</span></p>
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

  <section class="home-section home-reveal" data-reveal="2">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-microscope"></i><span>代表项目</span></p>
      <h2 class="home-section-title">当前最能体现研究积累与方法能力的三个方向。</h2>
    </div>
    <div class="home-project-grid">
      <a class="home-project" href="{% link _projects/1_llm_leakage.md %}">
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/llm-leakage-logprob.png' | relative_url }}" alt="LLM benchmark data leakage figure" loading="lazy" decoding="async">
        </div>
        <p class="home-project__meta">核心成员</p>
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
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/autonomous-driving-flowchart.png' | relative_url }}" alt="自动驾驶掉头决策流程图" loading="lazy" decoding="async">
        </div>
        <p class="home-project__meta">核心算法设计</p>
        <h3>自动驾驶掉头决策与路径优化</h3>
        <p>
          面向双向双车道城市掉头场景，构建感知、预测、决策、规划、控制一体化模型。
        </p>
        <p>
          结合 Kalman Filter、TTC 安全窗、Bezier 曲线与 MPC，实现兼顾安全性、舒适性与实时性的掉头控制策略。
        </p>
        <p>
          详情页已加入系统流程图、仿真决策结果、路径曲线变化与参数对比表，并可直接跳转项目论文。
        </p>
      </a>
      <a class="home-project" href="{% link _projects/3_uav_vision.md %}">
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/uav-vision-pipeline.png' | relative_url }}" alt="无人机微小目标检测项目流程图" loading="lazy" decoding="async">
        </div>
        <p class="home-project__meta">大学生创新创业项目 / 核心开发</p>
        <h3>面向无人机图像的微小目标检测 SR-TOD</h3>
        <p>
          面向海面浪花、反光与复杂背景下的无人机微小目标检测问题，设计高精度视觉检测框架。
        </p>
        <p>
          管线融合 SuperGlue 拼接、MSR 光照校正、SR-TOD 检测框架与 DGFE 特征增强模块，提升复杂场景下的目标表达能力。
        </p>
        <p>
          详情页已加入整体技术流程图与环境适应性结果展示图，用于更直观地说明系统设计与检测效果。
        </p>
      </a>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="3">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-wave-square"></i><span>最新动态</span></p>
      <h2 class="home-section-title">近期获奖与学习科研进展。</h2>
    </div>
    <div class="home-card">
      <ul class="home-news">
        <li><span>[2026.04]</span> 获东北大学秦皇岛分校综合一等奖学金。</li>
        <li><span>[2025.09]</span> 获全国大学生数学建模竞赛省级一等奖。</li>
        <li><span>[2025.04]</span> 获校综合一等奖学金。</li>
        <li><span>[2025.04]</span> 获校创新创业奖学金。</li>
        <li><span>[2024.09]</span> 获全国大学生数学竞赛省级二等奖。</li>
      </ul>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="4">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-trophy"></i><span>荣誉奖项</span></p>
      <h2 class="home-section-title">能够体现学术潜力与竞赛能力的代表性成果。</h2>
    </div>
    <div class="home-grid home-grid--two">
      <div class="home-card home-card--award">
        <h3>全国大学生数学建模竞赛</h3>
        <p>省级一等奖</p>
      </div>
      <div class="home-card home-card--award">
        <h3>全国大学生数学竞赛</h3>
        <p>省级二等奖</p>
      </div>
      <div class="home-card home-card--award">
        <h3>综合一等奖学金</h3>
        <p>2025、2026</p>
      </div>
      <div class="home-card home-card--award">
        <h3>创新创业奖学金</h3>
        <p>2025</p>
      </div>
    </div>
    <div class="home-card award-carousel">
      <div class="award-carousel__header">
        <div>
          <h3>奖状展示</h3>
          <p>参考横向滚动展示方式，支持左右按钮切换，移动端可直接滑动查看。</p>
        </div>
        <p class="award-carousel__hint">共 7 张</p>
      </div>
      <div class="award-carousel__viewport">
        <article class="award-carousel__slide" id="award-slide-1">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-7" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">1 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-2" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-math-modeling-first-prize.jpg' | relative_url }}" alt="全国大学生数学建模竞赛河北赛区本科组一等奖奖状" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">全国大学生数学建模竞赛，河北赛区本科组一等奖，2025。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-2">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-1" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">2 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-3" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-math-modeling-second-prize.jpg' | relative_url }}" alt="全国大学生数学竞赛非数学A类二等奖奖状" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">全国大学生数学竞赛（非数学 A 类）二等奖，2024。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-3">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-2" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">3 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-4" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-third-class-scholarship.jpg' | relative_url }}" alt="东北大学秦皇岛分校三等奖学金证书" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">东北大学秦皇岛分校三等奖学金证书，2024-2025 学年第二学期。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-4">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-3" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">4 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-5" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-innovation-scholarship.jpg' | relative_url }}" alt="东北大学秦皇岛分校创新创业奖学金证书" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">东北大学秦皇岛分校创新创业奖学金证书，2025。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-5">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-4" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">5 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-6" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-third-class-scholarship-2025.jpg' | relative_url }}" alt="东北大学秦皇岛分校2024至2025学年第三学期三等奖学金证书" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">东北大学秦皇岛分校三等奖学金证书，2024-2025 学年第三学期。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-6">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-5" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">6 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-7" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-third-class-scholarship-2024.jpg' | relative_url }}" alt="东北大学秦皇岛分校2023至2024学年第一学期三等奖学金证书" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">东北大学秦皇岛分校三等奖学金证书，2023-2024 学年第一学期。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-7">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-6" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">7 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-1" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-first-class-scholarship-school.png' | relative_url }}" alt="东北大学秦皇岛分校综合一等奖学金证书" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">东北大学秦皇岛分校综合一等奖学金证书，2026。</p>
        </article>
      </div>
      <div class="award-carousel__thumbs">
        <a class="award-carousel__thumb" href="#award-slide-1">
          <img src="{{ '/assets/img/award-math-modeling-first-prize.jpg' | relative_url }}" alt="一等奖奖状缩略图" loading="lazy" decoding="async">
          <span>一等奖</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-2">
          <img src="{{ '/assets/img/award-math-modeling-second-prize.jpg' | relative_url }}" alt="二等奖奖状缩略图" loading="lazy" decoding="async">
          <span>二等奖</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-3">
          <img src="{{ '/assets/img/award-third-class-scholarship.jpg' | relative_url }}" alt="三等奖学金证书缩略图" loading="lazy" decoding="async">
          <span>三等奖 2025-2</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-4">
          <img src="{{ '/assets/img/award-innovation-scholarship.jpg' | relative_url }}" alt="创新创业奖学金证书缩略图" loading="lazy" decoding="async">
          <span>创新创业</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-5">
          <img src="{{ '/assets/img/award-third-class-scholarship-2025.jpg' | relative_url }}" alt="2024至2025学年第三学期三等奖学金证书缩略图" loading="lazy" decoding="async">
          <span>三等奖 2025-3</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-6">
          <img src="{{ '/assets/img/award-third-class-scholarship-2024.jpg' | relative_url }}" alt="2023至2024学年第一学期三等奖学金证书缩略图" loading="lazy" decoding="async">
          <span>三等奖 2024-1</span>
        </a>
        <a class="award-carousel__thumb" href="#award-slide-7">
          <img src="{{ '/assets/img/award-first-class-scholarship-school.png' | relative_url }}" alt="综合一等奖学金证书缩略图" loading="lazy" decoding="async">
          <span>综合一等奖</span>
        </a>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="5">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-camera-retro"></i><span>学生工作</span></p>
      <h2 class="home-section-title">在校级宣传组织中参与内容采编、活动执行与影像记录。</h2>
    </div>
    <div class="home-grid home-grid--two">
      <div class="home-card">
        <h3>校团委宣传部宣传中心｜学生干事</h3>
        <p>
          参与校级活动宣传组织与内容采编，负责校运动会等大型活动的摄影摄像、素材整理与宣传支持工作。
        </p>
        <p>
          协同完成活动前期准备、现场执行及后期内容归档，保障宣传任务高效推进。
        </p>
        <p>
          在学生工作中提升了影像记录、宣传表达、团队协作与组织执行能力。
        </p>
      </div>
      <div class="home-card award-carousel award-carousel--compact">
        <div class="award-carousel__header">
          <div>
            <h3>学生工作照片</h3>
            <p>参照横向滚动展示方式，统一展示学生工作相关记录。</p>
          </div>
          <p class="award-carousel__hint">共 1 张</p>
        </div>
        <div class="award-carousel__viewport">
          <article class="award-carousel__slide" id="student-work-slide-1">
            <div class="award-carousel__controls">
              <a class="award-carousel__arrow" href="#student-work-slide-1" aria-label="上一张照片">‹</a>
              <span class="award-carousel__page">1 / 1</span>
              <a class="award-carousel__arrow" href="#student-work-slide-1" aria-label="下一张照片">›</a>
            </div>
            <div class="award-carousel__frame">
              <img src="{{ '/assets/img/student-work-publicity-center.jpg' | relative_url }}" alt="学生工作宣传中心合影照片" loading="lazy" decoding="async">
            </div>
            <p class="award-carousel__caption">校团委宣传部宣传中心活动留影。</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="6">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-hand-holding-heart"></i><span>志愿活动</span></p>
      <h2 class="home-section-title">在社区服务与赛事保障中积累沟通协调、组织执行与服务经验。</h2>
    </div>
    <div class="home-grid home-grid--two">
      <div class="home-card">
        <h3>小浪花志愿服务活动｜志愿者</h3>
        <p>
          参与社区志愿服务活动，协助完成现场秩序维护、活动引导及服务保障工作。
        </p>
        <p>
          配合团队完成活动物资整理、人员协调与流程支持，保障活动顺利开展。
        </p>
        <p>
          在志愿服务中提升了沟通协调能力、团队协作能力与社会责任意识。
        </p>
        <h3>社区运动会、家属院老年运动会志愿服务｜志愿者</h3>
        <p>
          参与社区运动会及家属院老年运动会的志愿服务工作，负责现场引导、秩序维护、赛事协助及后勤支持。
        </p>
        <p>
          面向社区居民尤其是老年群体提供服务保障，协助活动流程有序进行。
        </p>
        <p>
          积累了大型活动服务经验，增强了组织执行能力与服务意识。
        </p>
      </div>
      <div class="home-card award-carousel award-carousel--compact">
        <div class="award-carousel__header">
          <div>
            <h3>志愿活动照片</h3>
            <p>参照横向滚动展示方式，展示社区志愿服务与活动保障相关记录。</p>
          </div>
          <p class="award-carousel__hint">共 3 张</p>
        </div>
        <div class="award-carousel__viewport">
          <article class="award-carousel__slide" id="volunteer-slide-1">
            <div class="award-carousel__controls">
              <a class="award-carousel__arrow" href="#volunteer-slide-3" aria-label="上一张照片">‹</a>
              <span class="award-carousel__page">1 / 3</span>
              <a class="award-carousel__arrow" href="#volunteer-slide-2" aria-label="下一张照片">›</a>
            </div>
            <div class="award-carousel__frame">
              <img src="{{ '/assets/img/volunteer-community-service-1.jpg' | relative_url }}" alt="小浪花志愿服务活动照片" loading="lazy" decoding="async">
            </div>
            <p class="award-carousel__caption">社区志愿服务现场照片。</p>
          </article>
          <article class="award-carousel__slide" id="volunteer-slide-2">
            <div class="award-carousel__controls">
              <a class="award-carousel__arrow" href="#volunteer-slide-1" aria-label="上一张照片">‹</a>
              <span class="award-carousel__page">2 / 3</span>
              <a class="award-carousel__arrow" href="#volunteer-slide-3" aria-label="下一张照片">›</a>
            </div>
            <div class="award-carousel__frame">
              <img src="{{ '/assets/img/volunteer-community-service-2.jpg' | relative_url }}" alt="社区运动会志愿服务活动照片" loading="lazy" decoding="async">
            </div>
            <p class="award-carousel__caption">社区运动会与活动保障相关照片。</p>
          </article>
          <article class="award-carousel__slide" id="volunteer-slide-3">
            <div class="award-carousel__controls">
              <a class="award-carousel__arrow" href="#volunteer-slide-2" aria-label="上一张照片">‹</a>
              <span class="award-carousel__page">3 / 3</span>
              <a class="award-carousel__arrow" href="#volunteer-slide-1" aria-label="下一张照片">›</a>
            </div>
            <div class="award-carousel__frame">
              <img src="{{ '/assets/img/volunteer-community-service-3.jpg' | relative_url }}" alt="志愿活动现场记录照片" loading="lazy" decoding="async">
            </div>
            <p class="award-carousel__caption">志愿活动过程记录与现场支持照片。</p>
          </article>
        </div>
        <div class="award-carousel__thumbs">
          <a class="award-carousel__thumb" href="#volunteer-slide-1">
            <img src="{{ '/assets/img/volunteer-community-service-1.jpg' | relative_url }}" alt="小浪花志愿服务活动缩略图" loading="lazy" decoding="async">
            <span>社区志愿</span>
          </a>
          <a class="award-carousel__thumb" href="#volunteer-slide-2">
            <img src="{{ '/assets/img/volunteer-community-service-2.jpg' | relative_url }}" alt="社区运动会志愿服务缩略图" loading="lazy" decoding="async">
            <span>社区活动</span>
          </a>
          <a class="award-carousel__thumb" href="#volunteer-slide-3">
            <img src="{{ '/assets/img/volunteer-community-service-3.jpg' | relative_url }}" alt="志愿活动现场记录缩略图" loading="lazy" decoding="async">
            <span>活动记录</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="7">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-code"></i><span>技术能力</span></p>
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
