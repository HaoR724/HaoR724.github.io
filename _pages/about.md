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
  <div class="home-timeline" aria-label="主页章节导航">
    <div class="home-timeline__sticky">
      <p class="home-timeline__eyebrow"><i class="fa-solid fa-compass"></i><span>章节导航</span></p>
      <p class="home-timeline__current">个人简介</p>
      <div class="home-timeline__rail">
        <span class="home-timeline__line"></span>
        <ol class="home-timeline__nav"></ol>
      </div>
    </div>
  </div>

  <section class="home-hero-panel home-hero-panel--with-profile home-reveal" data-reveal="hero">
    <div class="home-hero-copy">
      <p class="home-kicker">欢迎来到我的主页</p>
      <h2 class="home-hero-title">刘浩然</h2>
      <p class="home-signature">Haoran Liu</p>
      <p class="home-hero-strapline">人工智能 / 大语言模型 / 评估检测</p>
      <p class="home-lead home-lead--hero">
        东北大学秦皇岛分校计算机科学与技术专业本科生，专业排名前 <strong>7%</strong>，GPA 为 <strong>4.1/5.0</strong>，
        英语六级成绩 <strong>555</strong>。
      </p>
      <p class="home-lead home-lead--hero">
        目前主要围绕<strong>大模型基准污染检测</strong>与<strong>大模型在 benchmark 上的数据泄露问题</strong>展开研究与工程实现，
        正在积极准备硕士/博士阶段的科研申请。
      </p>
      <div class="home-meta-strip">
        <span><i class="fa-solid fa-location-dot"></i>山东 济南</span>
        <span><i class="fa-solid fa-building-columns"></i>东北大学秦皇岛分校</span>
        <span><i class="fa-solid fa-envelope"></i>liuhaoran@stu.neuq.edu.cn</span>
      </div>
      <div class="home-actions">
        <a class="home-action" href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-diagram-project"></i><span>查看项目</span></a>
        <a class="home-action" href="{{ '/cv/' | relative_url }}"><i class="fa-solid fa-file-lines"></i><span>查看简历</span></a>
      </div>
      <div class="home-metrics">
        <div class="home-metric">
          <span class="home-metric__value">前 7%</span>
          <span class="home-metric__label">专业排名</span>
        </div>
        <div class="home-metric">
          <span class="home-metric__value">4.1 / 5.0</span>
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
          <span class="home-tag">大模型评估</span>
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
      <p class="home-section-label"><i class="fa-solid fa-circle-nodes"></i><span>研究图谱</span></p>
      <h2 class="home-section-title">围绕大模型 benchmark 泄露问题构建方法、证据与产出。</h2>
    </div>
    <div class="home-research-map">
      <div class="home-research-map__orbit">
        <span class="home-research-map__axis home-research-map__axis--horizontal" aria-hidden="true"></span>
        <span class="home-research-map__axis home-research-map__axis--vertical" aria-hidden="true"></span>

        <article class="home-research-node home-research-node--method">
          <p class="home-research-node__eyebrow"><i class="fa-solid fa-flask-vial"></i><span>方法路径</span></p>
          <h3>从重构到异常检测</h3>
          <p>通过选项重构、log-probability 分析与 Isolation Forest 建立灰盒检测流程。</p>
        </article>

        <article class="home-research-node home-research-node--question">
          <p class="home-research-node__eyebrow"><i class="fa-solid fa-circle-question"></i><span>问题定义</span></p>
          <h3>评测分数是否可信</h3>
          <p>当 benchmark 题目出现在预训练语料中，模型得分可能高估真实能力。</p>
        </article>

        <article class="home-research-node home-research-node--center">
          <p class="home-research-node__eyebrow"><i class="fa-solid fa-brain"></i><span>研究核心</span></p>
          <h3>LLM Benchmark 数据泄露 / 基准污染检测</h3>
          <p>
            我的核心兴趣不是单纯追求更高分数，而是研究这些分数是否真的反映模型能力，以及如何在灰盒场景下建立
            更可靠的评测依据。
          </p>
        </article>

        <article class="home-research-node home-research-node--evidence">
          <p class="home-research-node__eyebrow"><i class="fa-solid fa-chart-column"></i><span>证据链</span></p>
          <h3>从图表到案例分析</h3>
          <p>通过概率分布、异常评分、排行榜、案例图和结果对比，形成可解释的研究证据链。</p>
        </article>

        <article class="home-research-node home-research-node--output">
          <p class="home-research-node__eyebrow"><i class="fa-solid fa-box-archive"></i><span>研究产出</span></p>
          <h3>项目页、代码与数据</h3>
          <p>研究过程图、项目介绍、代码仓库和数据目录已经整理到线上主页与 GitHub 中。</p>
          <div class="home-research-node__actions">
            <a href="{% link _projects/1_llm_leakage.md %}">查看项目</a>
            <a href="https://github.com/HaoR724/LLM_eval" target="_blank" rel="noopener noreferrer">查看仓库</a>
          </div>
        </article>
      </div>

      <div class="home-research-map__footer">
        <span>可信评测</span>
        <span>灰盒场景</span>
        <span>异常检测</span>
        <span>可解释证据</span>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="3">
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
        <div class="home-project__summary">
          <p><strong>研究问题</strong> 识别灰盒场景下 benchmark 评测中的潜在数据污染与泄露风险。</p>
          <p><strong>核心方法</strong> 选项重构、log-probability 分析、Isolation Forest 异常检测。</p>
          <p><strong>结果产出</strong> 已整理研究过程图、案例分析与结果对比，可直接查看仓库与数据集。</p>
        </div>
        <div class="home-project__tags">
          <span>LLM Eval</span>
          <span>Isolation Forest</span>
          <span>Benchmark Leakage</span>
        </div>
      </a>
      <a class="home-project" href="{% link _projects/2_autonomous_driving.md %}">
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/autonomous-driving-flowchart.png' | relative_url }}" alt="自动驾驶掉头决策流程图" loading="lazy" decoding="async">
        </div>
        <p class="home-project__meta">核心算法设计</p>
        <h3>自动驾驶掉头决策与路径优化</h3>
        <div class="home-project__summary">
          <p><strong>研究问题</strong> 面向复杂城市掉头场景，完成安全决策、路径规划与闭环控制协同。</p>
          <p><strong>核心方法</strong> Kalman Filter、TTC 安全窗、Bezier 曲线、MPC 控制。</p>
          <p><strong>结果产出</strong> 展示系统流程、仿真决策、路径优化与论文成果。</p>
        </div>
        <div class="home-project__tags">
          <span>Kalman Filter</span>
          <span>Bezier</span>
          <span>MPC</span>
        </div>
      </a>
      <a class="home-project" href="{% link _projects/3_uav_vision.md %}">
        <div class="home-project__gallery home-project__gallery--single">
          <img src="{{ '/assets/img/uav-vision-pipeline.png' | relative_url }}" alt="无人机微小目标检测项目流程图" loading="lazy" decoding="async">
        </div>
        <p class="home-project__meta">大学生创新创业项目 / 核心开发</p>
        <h3>面向无人机图像的微小目标检测 SR-TOD</h3>
        <div class="home-project__summary">
          <p><strong>研究问题</strong> 解决复杂海面与光照变化下无人机微小目标的漏检与误检问题。</p>
          <p><strong>核心方法</strong> SuperGlue、MSR、SR-TOD 检测框架与 DGFE 特征增强。</p>
          <p><strong>结果产出</strong> 已整理整体流程图与环境适应性结果图，说明系统设计与检测效果。</p>
        </div>
        <div class="home-project__tags">
          <span>SR-TOD</span>
          <span>DGFE</span>
          <span>OpenCV</span>
        </div>
      </a>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="4">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-wave-square"></i><span>最新动态</span></p>
      <h2 class="home-section-title">近期获奖与学习科研进展。</h2>
    </div>
    <div class="home-card">
      <ul class="home-news">
        <li><span>[2026.04]</span><p class="home-news__content">获校综合一等奖学金。</p></li>
        <li><span>[2025.09]</span><p class="home-news__content">获全国大学生数学建模竞赛省级一等奖。</p></li>
        <li><span>[2025.04]</span><p class="home-news__content">获校综合一等奖学金。</p></li>
        <li><span>[2025.04]</span><p class="home-news__content">获校创新创业奖学金。</p></li>
        <li><span>[2024.09]</span><p class="home-news__content">获全国大学生数学竞赛省级二等奖。</p></li>
      </ul>
    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="5">
    <div class="home-section-heading">
      <p class="home-section-label"><i class="fa-solid fa-trophy"></i><span>荣誉奖项</span></p>
      <h2 class="home-section-title">能够体现学术潜力与竞赛能力的代表性成果。</h2>
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
            <img src="{{ '/assets/img/award-math-modeling-second-prize.jpg' | relative_url }}" alt="全国大学生数学竞赛非数学A类二等奖奖状" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">全国大学生数学竞赛（非数学 A 类）二等奖，2024。</p>
        </article>
        <article class="award-carousel__slide" id="award-slide-2">
          <div class="award-carousel__controls">
            <a class="award-carousel__arrow" href="#award-slide-1" aria-label="上一张奖状">‹</a>
            <span class="award-carousel__page">2 / 7</span>
            <a class="award-carousel__arrow" href="#award-slide-3" aria-label="下一张奖状">›</a>
          </div>
          <div class="award-carousel__frame">
            <img src="{{ '/assets/img/award-math-modeling-first-prize.jpg' | relative_url }}" alt="全国大学生数学建模竞赛河北赛区本科组一等奖奖状" loading="lazy" decoding="async">
          </div>
          <p class="award-carousel__caption">全国大学生数学建模竞赛，河北赛区本科组一等奖，2025。</p>
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

    </div>
  </section>

  <section class="home-section home-reveal" data-reveal="6">
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

  <section class="home-section home-reveal" data-reveal="7">
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

  <section class="home-section home-reveal" data-reveal="8">
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
