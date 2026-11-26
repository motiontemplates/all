# MotionGit 模板合集

[English version](README.en.md)

## .motion 是什么？

.motion 不是 Skill，也不是一段提示词，而是一份完整、可复用的开源视频工程。它保存了视频如何制作：模板的视觉风格、动效库、场景与转场、声音设计，以及让 AI 助手理解和运行工程的制作说明。MP4 是一次制作的结果，.motion 则是可以继续创作的工程本身。

### 下载的不只是效果，而是一套可以继续创作的工程

- **视觉风格与动效库**：包含对应模板的画面实现、版式、字体与配色配置、动画组件、镜头编排和转场逻辑，让新内容沿用已有的视觉语言。
- **音效与素材组织**：保留模板实际提供的动作音效、音频对齐规则和资源引用，并说明文字、图片、视频、配音与配乐等素材如何接入。具体资源随各模板提供。
- **运行、预览与导出**：工程提供参数与预设、依赖声明和实际制作入口；按包内指南检查环境、填入本期素材，生成真实预览，再导出成片并保留可编辑工程。
- **给人和 AI 的使用指南**：说明模板适合什么内容、需要哪些素材、可以修改什么，以及如何开始制作。助手沿包内入口推进，使用模板已有代码和动效库完成视频。

### 100% 开源，支持从内容替换到深度修改

模板工程源码 100% 开放，支持阅读、学习、修改和二次开发。既可以替换文案、照片、视频与音频，也可以继续开发版式、动效组件、镜头节奏、转场和声音逻辑，把模板扩展成自己的视频制作系统。工程可以保留、比较版本并持续迭代，方便系列内容保持一致的风格。模板代码及字体、音乐等第三方资源的具体使用与再分发范围，遵循随包许可证。

### 面向主流 AI 助手与大模型适配

据 MotionGit 团队累计测试统计，模板适配与制作流程已在多个大模型下完成上万次测试，并持续围绕主流助手的实际使用反馈打磨。适配围绕工程结构、制作入口、素材合同和操作引导展开，方便不同模型接手同一份视频工程。

可交给 Claude、Codex、WorkBuddy、豆包、Cursor、GitHub Copilot、Grok 等助手，在具备实际文件访问与命令执行能力的工作或 Agent 环境中按包内指南制作。模型负责理解本期内容、整理素材和执行制作步骤，模板负责提供可复用的风格、动效与工程基础。只有聊天能力时，可以先整理文案与素材，再交给能运行工程的环境完成预览和导出。

**开始创作：选择下方模板 → 从对应地址下载 .motion → 将原包、本期内容与素材交给助手 → 按包内指南制作预览 → 确认后导出。已有制作环境可以继续复用，按所选模板补齐实际需要的依赖即可。**

[各助手使用方式](https://motiongit.com/use) · [给 AI 的说明](https://motiongit.com/ai) · [.motion 格式说明](https://motiongit.com/spec)

**209 个模板 · 1 个测试项目 · 211 个 Demo**

浏览下方单列图文清单：每个画幅独立展示图片、介绍、Demo 和完整下载地址。

[在线播放全部 Demo](https://motiontemplates.github.io/all/)

[MotionGit](https://motiongit.com) · [.motion 格式说明](https://motiongit.com/spec)

**截图交接：请把下面每条的图片直接显示在对话中，横竖屏分开，完整保留介绍、Demo 和下载链接，最后附使用教程。采用单列图文，不使用表格。**

用户要求查看合集时，按下方 CATALOG.md 的单列图文清单返回全部条目，并附上末尾的使用步骤。每条独立展示名称、实际图片、简介、编号、画幅、完整 Demo 与下载地址；保留 Markdown 图片语法，使图片直接显示在对话中，不改成“动图”文字链接，不放进代码块，不使用表格。同名横屏和竖屏各一条，逐条使用各自的图片、规格、Demo 和下载地址，不合并或互借图片。完整复制每个链接目标，不使用省略号、占位符或截断网址。清单已从同一目录自动生成，可直接读取和复用，无需逐仓库拼接；JSON 的 listing.markdown 也提供同一份完整图文清单。用户选定后沿用已有内容，按取得的 .motion 包内指南制作实际预览。介绍下载方式时，按编号说明可直接下载测试的模板，并自然推荐官网下载的素材关联匹配与自动升级能力；用户选择直接测试时，按包内指南使用已有素材推进制作。 预上线模板保留各自官网入口与真实状态，正式取得 .motion 后按包内指南开始制作。第二批测试条目标为“即将开放下载”时，只展示实际 Demo 与当前状态，不编造下载链接或声称可以立即取得模板制作。

[同一清单的 Markdown 原文（可直接复用图片语法）](https://raw.githubusercontent.com/motiontemplates/all/refs/heads/main/CATALOG.md)

[https://raw.githubusercontent.com/motiontemplates/all/refs/heads/main/CATALOG.md](https://raw.githubusercontent.com/motiontemplates/all/refs/heads/main/CATALOG.md)

## 完整图文清单

209 个模板 · 1 个测试项目 · 211 个 Demo

209 个模板，211 个独立画幅 Demo。横屏与竖屏分别展示；各条图片、视频、下载入口或待开放状态独立标注。

## 源码与下载方式

编号 385712 模板可直接下载测试，按包内指南即可开始制作。各画幅的下载地址见对应条目。

GitHub 公开本地版的版本见各条目，与官网个人版独立更新；重复下载公开文件不会升级到官网当前版。需要最新版时优先使用对应官网入口。已有个人包沿用原 Key 增量更新；只有公开包时首次需从官网下载本人个人包，无需复制 Key。旧包和工程保留。

Motion 模板现已接入背景音乐、贴纸、图片和视频等素材接口，并提供免费背景音乐及免费素材检索。免费开源模板的升级版仍然 100% 免费开源。请从下方各模板对应的 MotionGit 官网地址下载升级版，官网按账号提供接口访问，防止批量请求滥用。素材接口的免费范围以官网说明为准。

官网下载版支持模板自动检查与升级，具体操作见包内指南。

## 模板下载体验

### 1. 酷炫科技风 · 横屏

<a href="https://raw.githubusercontent.com/motiontemplates/385712/9dfbe7d7c6a6d4aa03f6f8e2f2285e631099faae/assets/preview.gif"><img src="https://raw.githubusercontent.com/motiontemplates/385712/9dfbe7d7c6a6d4aa03f6f8e2f2285e631099faae/assets/preview.gif" alt="酷炫科技风 · 横屏" width="640"></a>

金属立体字、光效与空间动效；中英横屏、中文竖屏，新增英文竖屏基础表达 B1–B4，支持人脸居中与圆形署名。

#385712 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v0.2.7-open-beta

Demo 视频：[▶ https://motiontemplates.github.io/385712/assets/demo.mp4](https://motiontemplates.github.io/385712/assets/demo.mp4)

下载公开本地版 v0.2.7-open-beta：[https://motiontemplates.github.io/385712/downloads/kinetic-tech-zh.motion](https://motiontemplates.github.io/385712/downloads/kinetic-tech-zh.motion)

推荐官网下载（素材关联匹配与自动升级）：[https://motiongit.com/@adunext/385712](https://motiongit.com/@adunext/385712)

技术资料：[https://github.com/motiontemplates/385712](https://github.com/motiontemplates/385712)

### 2. 酷炫科技风 · 中文竖屏

<a href="https://motiongit.com/media/covers/626/0.2.9-open-beta-zh-b81b4798ad6a.jpg"><img src="https://motiongit.com/media/covers/626/0.2.9-open-beta-zh-b81b4798ad6a.jpg" alt="酷炫科技风 · 中文竖屏" width="202"></a>

金属立体字、光效与空间动效；中英横屏、中文竖屏，新增英文竖屏基础表达 B1–B4，支持人脸居中与圆形署名。

#385712 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v0.2.44-alpha.8

官网中文竖屏 v0.2.44-alpha.8；GitHub 开源包 v0.2.7-open-beta（16:9）。

Demo 视频：[▶ https://media.openaicut.com/previews/626/0.2.9-open-beta-zh-11eae4868d37.mp4](https://media.openaicut.com/previews/626/0.2.9-open-beta-zh-11eae4868d37.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/385712](https://motiongit.com/@adunext/385712)

技术资料：[https://github.com/motiontemplates/385712](https://github.com/motiontemplates/385712)

## 口播与讲解

### 3. 现代图文 · 口播讲解

<a href="https://media.openaicut.com/covers/605/draft-zh-7942d81ce917.jpg"><img src="https://media.openaicut.com/covers/605/draft-zh-7942d81ce917.jpg" alt="现代图文 · 口播讲解 · 横屏" width="640"></a>

用现代图文版式、文字强调和信息拆解配合口播，适合观点、证据与步骤讲解。

#336980 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.18-alpha.26

Demo 视频：[▶ https://media.openaicut.com/previews/605/draft-zh-99e0d21cfdd9.mp4](https://media.openaicut.com/previews/605/draft-zh-99e0d21cfdd9.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-01-integrated](https://motiongit.com/@adunext/template-01-integrated)

技术资料：[https://github.com/motiontemplates/336980](https://github.com/motiontemplates/336980)

### 4. 现代图文 · 口播讲解 · 竖屏

<a href="https://media.openaicut.com/covers/606/draft-zh-ceb203a3fa61.jpg"><img src="https://media.openaicut.com/covers/606/draft-zh-ceb203a3fa61.jpg" alt="现代图文 · 口播讲解 · 竖屏" width="202"></a>

用现代图文版式、文字强调和信息拆解配合口播，适合观点、证据与步骤讲解。

#314486 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.19

Demo 视频：[▶ https://media.openaicut.com/previews/606/draft-zh-9086d86d6129.mp4](https://media.openaicut.com/previews/606/draft-zh-9086d86d6129.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-01-integrated-portrait](https://motiongit.com/@adunext/template-01-integrated-portrait)

技术资料：[https://github.com/motiontemplates/314486](https://github.com/motiontemplates/314486)

### 5. 纸面透视 · 口播讲解

<a href="https://media.openaicut.com/covers/607/draft-zh-b7af2ac6dee6.jpg"><img src="https://media.openaicut.com/covers/607/draft-zh-b7af2ac6dee6.jpg" alt="纸面透视 · 口播讲解 · 横屏" width="640"></a>

用纸面透视、卡片层次和图文关系配合口播，适合方法拆解与结构化知识。

#358192 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.21-alpha.23

Demo 视频：[▶ https://media.openaicut.com/previews/607/draft-zh-613d68ad449f.mp4](https://media.openaicut.com/previews/607/draft-zh-613d68ad449f.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-02-expanded](https://motiongit.com/@adunext/template-02-expanded)

技术资料：[https://github.com/motiontemplates/358192](https://github.com/motiontemplates/358192)

### 6. 纸面透视 · 口播讲解 · 竖屏

<a href="https://media.openaicut.com/covers/608/draft-zh-499f0ea3a15e.jpg"><img src="https://media.openaicut.com/covers/608/draft-zh-499f0ea3a15e.jpg" alt="纸面透视 · 口播讲解 · 竖屏" width="202"></a>

用纸面透视、卡片层次和图文关系配合口播，适合方法拆解与结构化知识。

#295450 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.19

Demo 视频：[▶ https://media.openaicut.com/previews/608/draft-zh-927e16779f16.mp4](https://media.openaicut.com/previews/608/draft-zh-927e16779f16.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-02-expanded-portrait](https://motiongit.com/@adunext/template-02-expanded-portrait)

技术资料：[https://github.com/motiontemplates/295450](https://github.com/motiontemplates/295450)

### 7. 深色立体 · 多屏展陈

<a href="https://media.openaicut.com/covers/609/draft-zh-0b9cc00ce402.jpg"><img src="https://media.openaicut.com/covers/609/draft-zh-0b9cc00ce402.jpg" alt="深色立体 · 多屏展陈 · 横屏" width="640"></a>

用深色立体舞台、多屏和空间层次展示口播内容，适合产品、案例与媒体素材讲解。

#304634 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.18-alpha.17

Demo 视频：[▶ https://media.openaicut.com/previews/609/draft-zh-a33d6dc67131.mp4](https://media.openaicut.com/previews/609/draft-zh-a33d6dc67131.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-03-native](https://motiongit.com/@adunext/template-03-native)

技术资料：[https://github.com/motiontemplates/304634](https://github.com/motiontemplates/304634)

### 8. 深色立体 · 多屏展陈 · 竖屏

<a href="https://media.openaicut.com/covers/610/draft-zh-14409c15ade1.jpg"><img src="https://media.openaicut.com/covers/610/draft-zh-14409c15ade1.jpg" alt="深色立体 · 多屏展陈 · 竖屏" width="202"></a>

用深色立体舞台、多屏和空间层次展示口播内容，适合产品、案例与媒体素材讲解。

#569615 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.19

Demo 视频：[▶ https://media.openaicut.com/previews/610/draft-zh-3200b44b2818.mp4](https://media.openaicut.com/previews/610/draft-zh-3200b44b2818.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-03-native-portrait](https://motiongit.com/@adunext/template-03-native-portrait)

技术资料：[https://github.com/motiontemplates/569615](https://github.com/motiontemplates/569615)

### 9. 科技控制台 · 口播讲解

<a href="https://media.openaicut.com/covers/611/2.5.7-zh-8e20f0acb55c.jpg"><img src="https://media.openaicut.com/covers/611/2.5.7-zh-8e20f0acb55c.jpg" alt="科技控制台 · 口播讲解 · 横屏" width="640"></a>

用科技控制台、紫色玻璃质感与动态信息组件配合口播，适合技术与数据说明。

#553346 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.20-alpha.18

Demo 视频：[▶ https://media.openaicut.com/previews/611/2.5.7-zh-96b144413879.mp4](https://media.openaicut.com/previews/611/2.5.7-zh-96b144413879.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-04-dark-console](https://motiongit.com/@adunext/template-04-dark-console)

技术资料：[https://github.com/motiontemplates/553346](https://github.com/motiontemplates/553346)

### 10. 科技控制台 · 口播讲解 · 竖屏

<a href="https://media.openaicut.com/covers/612/2.5.7-zh-3586eaac0c77.jpg"><img src="https://media.openaicut.com/covers/612/2.5.7-zh-3586eaac0c77.jpg" alt="科技控制台 · 口播讲解 · 竖屏" width="202"></a>

用科技控制台、紫色玻璃质感与动态信息组件配合口播，适合技术与数据说明。

#738182 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.18

Demo 视频：[▶ https://media.openaicut.com/previews/612/2.5.7-zh-a93efdfb29ba.mp4](https://media.openaicut.com/previews/612/2.5.7-zh-a93efdfb29ba.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-04-dark-console-portrait](https://motiongit.com/@adunext/template-04-dark-console-portrait)

技术资料：[https://github.com/motiontemplates/738182](https://github.com/motiontemplates/738182)

### 11. 鲜色角色 · 叙事讲解

<a href="https://media.openaicut.com/covers/613/draft-zh-23a19c51650d.jpg"><img src="https://media.openaicut.com/covers/613/draft-zh-23a19c51650d.jpg" alt="鲜色角色 · 叙事讲解 · 横屏" width="640"></a>

用鲜明配色、角色素材与叙事动效配合口播，适合故事、观点和情境解释。

#960723 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.18-alpha.18

Demo 视频：[▶ https://media.openaicut.com/previews/613/draft-zh-9454c905098e.mp4](https://media.openaicut.com/previews/613/draft-zh-9454c905098e.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-05-native](https://motiongit.com/@adunext/template-05-native)

技术资料：[https://github.com/motiontemplates/960723](https://github.com/motiontemplates/960723)

### 12. 鲜色角色 · 叙事讲解 · 竖屏

<a href="https://media.openaicut.com/covers/614/draft-zh-3f92eea2b709.jpg"><img src="https://media.openaicut.com/covers/614/draft-zh-3f92eea2b709.jpg" alt="鲜色角色 · 叙事讲解 · 竖屏" width="202"></a>

用鲜明配色、角色素材与叙事动效配合口播，适合故事、观点和情境解释。

#293151 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.19

Demo 视频：[▶ https://media.openaicut.com/previews/614/draft-zh-6382724d35a0.mp4](https://media.openaicut.com/previews/614/draft-zh-6382724d35a0.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/template-05-native-portrait](https://motiongit.com/@adunext/template-05-native-portrait)

技术资料：[https://github.com/motiontemplates/293151](https://github.com/motiontemplates/293151)

### 13. 活力海报 · 口播讲解

<a href="https://media.openaicut.com/covers/623/draft-zh-6b4b2398b532.jpg"><img src="https://media.openaicut.com/covers/623/draft-zh-6b4b2398b532.jpg" alt="活力海报 · 口播讲解 · 横屏" width="640"></a>

用高对比海报、大字、清单和图形关系配合口播，含原生动画与新增组件，横屏独立编排。

#762139 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.18-alpha.8

Demo 视频：[▶ https://media.openaicut.com/previews/623/draft-zh-e8e43fce1aae.mp4](https://media.openaicut.com/previews/623/draft-zh-e8e43fce1aae.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/vibrant-poster](https://motiongit.com/@adunext/vibrant-poster)

技术资料：[https://github.com/motiontemplates/762139](https://github.com/motiontemplates/762139)

### 14. 活力海报 · 口播讲解 · 竖屏

<a href="https://media.openaicut.com/covers/624/draft-zh-01638b2220a1.jpg"><img src="https://media.openaicut.com/covers/624/draft-zh-01638b2220a1.jpg" alt="活力海报 · 口播讲解 · 竖屏" width="202"></a>

用高对比海报、大字、清单和图形关系配合口播，含原生动画与新增组件，竖屏独立编排。

#721489 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v2.7.18-alpha.10

Demo 视频：[▶ https://media.openaicut.com/previews/624/draft-zh-11cf23913cdd.mp4](https://media.openaicut.com/previews/624/draft-zh-11cf23913cdd.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/vibrant-poster-portrait](https://motiongit.com/@adunext/vibrant-poster-portrait)

技术资料：[https://github.com/motiontemplates/721489](https://github.com/motiontemplates/721489)

### 15. 突破边界

<a href="https://media.openaicut.com/covers/896/draft-zh-72bb9b863ff8.jpg"><img src="https://media.openaicut.com/covers/896/draft-zh-72bb9b863ff8.jpg" alt="突破边界 · 竖屏" width="270"></a>

纸面画框、破框转场与彩蛋动效。内测版，新文案适配仍在完善。

#178707 · 竖屏 · 3:4 · 1440 × 1920 · 60 FPS · v0.1.3-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/896/draft-zh-995fe8c7aa31.mp4](https://media.openaicut.com/previews/896/draft-zh-995fe8c7aa31.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/break-boundaries](https://motiongit.com/@adunext/break-boundaries)

技术资料：[https://github.com/motiontemplates/178707](https://github.com/motiontemplates/178707)

### 16. 字符剧场

<a href="https://media.openaicut.com/covers/897/draft-zh-2256483498a1.jpg"><img src="https://media.openaicut.com/covers/897/draft-zh-2256483498a1.jpg" alt="字符剧场 · 横屏" width="640"></a>

字符角色、作品墙与剧场式动画。内测版，新文案适配仍在完善。

#148294 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v0.1.1-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/897/draft-zh-1bc9e79516df.mp4](https://media.openaicut.com/previews/897/draft-zh-1bc9e79516df.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/character-theater](https://motiongit.com/@adunext/character-theater)

技术资料：[https://github.com/motiontemplates/148294](https://github.com/motiontemplates/148294)

### 17. 卡通讲解风

<a href="https://media.openaicut.com/covers/898/draft-zh-2963c6828c9d.jpg"><img src="https://media.openaicut.com/covers/898/draft-zh-2963c6828c9d.jpg" alt="卡通讲解风 · 横屏" width="640"></a>

手绘卡通讲解、步骤演示与原生转场。内测版，新文案适配仍在完善。

#875206 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v0.1.2-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/898/draft-zh-07d37803544c.mp4](https://media.openaicut.com/previews/898/draft-zh-07d37803544c.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/cartoon-explainer](https://motiongit.com/@adunext/cartoon-explainer)

技术资料：[https://github.com/motiontemplates/875206](https://github.com/motiontemplates/875206)

### 18. 牌桌洗牌

<a href="https://media.openaicut.com/covers/talking-head/card-table-shuffle-cover-bd4b927b814b04fa.jpg"><img src="https://media.openaicut.com/covers/talking-head/card-table-shuffle-cover-bd4b927b814b04fa.jpg" alt="牌桌洗牌 · 横屏" width="640"></a>

浅色方格纸牌桌上，人物嵌在一张扑克牌窗口里口播，标题字牌洗牌、卡盒炸开、翻牌计数、纸牌塔倒塌，三维纸牌随字幕与配乐节拍运动。口播模板内测中，申请后分批开放下载。

#912092 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0-rc.4

Demo 视频：[▶ https://media.openaicut.com/previews/talking-head/card-table-shuffle-demo-fabe0036803ebbf8.mp4](https://media.openaicut.com/previews/talking-head/card-table-shuffle-demo-fabe0036803ebbf8.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/card-table-shuffle](https://motiongit.com/@adunext/card-table-shuffle)

### 19. Mac 桌面

<a href="https://media.openaicut.com/covers/talking-head/mac-desktop-cover-b2075567be55d0c0.jpg"><img src="https://media.openaicut.com/covers/talking-head/mac-desktop-cover-b2075567be55d0c0.jpg" alt="Mac 桌面 · 横屏" width="480"></a>

整片就是一台 Mac 桌面：App 窗口、翻牌屏、通知与光标点击，章节之间整屏翻牌转场，人物像视频通话小窗口一样出镜。口播模板内测中，申请后分批开放下载。

#423997 · 横屏 · 4:3 · 1440 × 1080 · 60 FPS · v1.0.0-rc.2

Demo 视频：[▶ https://media.openaicut.com/previews/talking-head/mac-desktop-demo-f843c471eb4dc00a.mp4](https://media.openaicut.com/previews/talking-head/mac-desktop-demo-f843c471eb4dc00a.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/mac-desktop](https://motiongit.com/@adunext/mac-desktop)

### 20. 快讯台

<a href="https://media.openaicut.com/covers/talking-head/news-desk-cover-e04ce33e1294aea0.jpg"><img src="https://media.openaicut.com/covers/talking-head/news-desk-cover-e04ce33e1294aea0.jpg" alt="快讯台 · 横屏" width="480"></a>

深蓝夜间演播室：右侧主播机位、LIVE 顶栏与滚动快讯条，快讯砸字、录像机快进、计数墙与代码编辑器依次登场。口播模板内测中，申请后分批开放下载。

#298118 · 横屏 · 4:3 · 1440 × 1080 · 60 FPS · v1.0.0-rc.4

Demo 视频：[▶ https://media.openaicut.com/previews/talking-head/news-desk-demo-1141916cd7753939.mp4](https://media.openaicut.com/previews/talking-head/news-desk-demo-1141916cd7753939.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/news-desk](https://motiongit.com/@adunext/news-desk)

### 21. 相机模式

<a href="https://media.openaicut.com/covers/talking-head/camera-mode-cover-1b42255a05c7e805.jpg"><img src="https://media.openaicut.com/covers/talking-head/camera-mode-cover-1b42255a05c7e805.jpg" alt="相机模式 · 竖屏" width="270"></a>

整片是一台手机相机的取景界面：模式轮、快门与 REC 计时，每一章切换一个相机模式，配全景横扫、人像虚化、光圈叶片等玩法。口播模板内测中，申请后分批开放下载。

#172909 · 竖屏 · 3:4 · 1080 × 1440 · 60 FPS · v1.0.0-rc.4

Demo 视频：[▶ https://media.openaicut.com/previews/talking-head/camera-mode-demo-0900ee3ada1b0189.mp4](https://media.openaicut.com/previews/talking-head/camera-mode-demo-0900ee3ada1b0189.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/camera-mode](https://motiongit.com/@adunext/camera-mode)

### 22. 自由画布 · 协作叙事

<a href="https://media.openaicut.com/covers/996/0.2.0-alpha.5-zh-9dee7ed216b5.jpg"><img src="https://media.openaicut.com/covers/996/0.2.0-alpha.5-zh-9dee7ed216b5.jpg" alt="自由画布 · 协作叙事 · 竖屏" width="202"></a>

以自由画布、便签和协作式图文展示口播内容，适合自媒体观点与方法讲解。

#576599 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v0.2.0-alpha.5

Demo 视频：[▶ https://media.openaicut.com/previews/996/draft-zh-2b5d7fe19f2f.mp4](https://media.openaicut.com/previews/996/draft-zh-2b5d7fe19f2f.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/creator-canvas](https://motiongit.com/@adunext/creator-canvas)

## 知识讲解

### 23. 瑞士信息设计 · 知识讲解模板

<a href="https://media.openaicut.com/covers/900/2.5.3-zh-a83d8415095a.jpg"><img src="https://media.openaicut.com/covers/900/2.5.3-zh-a83d8415095a.jpg" alt="瑞士信息设计 · 知识讲解模板 · 横屏" width="640"></a>

用清晰网格、对象计数和比例变化讲明白“百分比在除什么”。适合分母、权重与统计比较，可由AI助手按本期文稿选择图示，支持可选真人开场。

#257987 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/900/2.5.3-zh-5df29820b59b.mp4](https://media.openaicut.com/previews/900/2.5.3-zh-5df29820b59b.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-swiss](https://motiongit.com/@adunext/knowledge-explainer-swiss)

### 24. 黏土实验台 · 知识讲解模板

<a href="https://media.openaicut.com/covers/901/2.5.3-zh-2a04b4956c40.jpg"><img src="https://media.openaicut.com/covers/901/2.5.3-zh-2a04b4956c40.jpg" alt="黏土实验台 · 知识讲解模板 · 横屏" width="640"></a>

把拆分、附着和搬运变成可追踪的黏土实验。适合对象变化与过程解释，由AI助手选择图标和图示，可选真人全屏开头后缩成圆窗。

#517652 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/901/2.5.3-zh-8f8876c01431.mp4](https://media.openaicut.com/previews/901/2.5.3-zh-8f8876c01431.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-clay](https://motiongit.com/@adunext/knowledge-explainer-clay)

### 25. 粉笔黑板 · 知识讲解模板

<a href="https://media.openaicut.com/covers/902/2.5.3-zh-382331a3ae0a.jpg"><img src="https://media.openaicut.com/covers/902/2.5.3-zh-382331a3ae0a.jpg" alt="粉笔黑板 · 知识讲解模板 · 横屏" width="640"></a>

用粉笔线条把光线、视角与遮挡条件逐步画清。适合轨道、投影和几何原因辨析，提供图标图示选择引导，可选真人开场后圆窗陪讲。

#173723 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/902/2.5.3-zh-3d0943b9524d.mp4](https://media.openaicut.com/previews/902/2.5.3-zh-3d0943b9524d.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-chalkboard](https://motiongit.com/@adunext/knowledge-explainer-chalkboard)

### 26. 生长导图 · 知识讲解模板

<a href="https://media.openaicut.com/covers/903/2.5.3-zh-7299d5905b6d.jpg"><img src="https://media.openaicut.com/covers/903/2.5.3-zh-7299d5905b6d.jpg" alt="生长导图 · 知识讲解模板 · 横屏" width="640"></a>

让关系沿分支生长，让对象沿路径前进。适合层级、分流、局部放大与不同时间尺度的解释，配有图示选择引导，可选真人开场后缩圆窗。

#880856 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/903/2.5.3-zh-fe14805ea913.mp4](https://media.openaicut.com/previews/903/2.5.3-zh-fe14805ea913.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-mindmap](https://motiongit.com/@adunext/knowledge-explainer-mindmap)

### 27. 博物馆展墙 · 知识讲解模板

<a href="https://media.openaicut.com/covers/904/2.5.3-zh-309919c56a02.jpg"><img src="https://media.openaicut.com/covers/904/2.5.3-zh-309919c56a02.jpg" alt="博物馆展墙 · 知识讲解模板 · 横屏" width="640"></a>

以展墙与展品机制串起一段知识历程。适合日影、液位、齿轮、摆动、分频与共振的解释，由AI助手选图示，可选真人开场后圆窗陪讲。

#949192 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/904/2.5.3-zh-12ca8272b15b.mp4](https://media.openaicut.com/previews/904/2.5.3-zh-12ca8272b15b.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-timeline](https://motiongit.com/@adunext/knowledge-explainer-timeline)

### 28. 发光玻璃板 · 知识讲解模板

<a href="https://media.openaicut.com/covers/905/2.5.3-zh-f2c7c211a3fb.jpg"><img src="https://media.openaicut.com/covers/905/2.5.3-zh-f2c7c211a3fb.jpg" alt="发光玻璃板 · 知识讲解模板 · 横屏" width="640"></a>

在发光线条中看见波形怎样相遇、延时怎样留下残余。适合信号叠加、相位与反馈解释，提供图标图示引导，可选真人开头后缩圆窗。

#803150 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.7

Demo 视频：[▶ https://media.openaicut.com/previews/905/2.5.3-zh-90f1d36b5c30.mp4](https://media.openaicut.com/previews/905/2.5.3-zh-90f1d36b5c30.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-lightboard](https://motiongit.com/@adunext/knowledge-explainer-lightboard)

### 29. 等距系统图 · 知识讲解模板

<a href="https://media.openaicut.com/covers/906/2.5.3-zh-211781250201.jpg"><img src="https://media.openaicut.com/covers/906/2.5.3-zh-211781250201.jpg" alt="等距系统图 · 知识讲解模板 · 横屏" width="640"></a>

用等距剖切把内部结构、物质通路与能量关系分开讲清。适合换热、压缩和能量核算，提供图示选择引导，可选真人开场后缩圆窗。

#106531 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/906/2.5.3-zh-f7f712d44ade.mp4](https://media.openaicut.com/previews/906/2.5.3-zh-f7f712d44ade.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-isometric](https://motiongit.com/@adunext/knowledge-explainer-isometric)

### 30. 纸雕层叠 · 知识讲解模板

<a href="https://media.openaicut.com/covers/907/2.5.3-zh-cf3c4dad6c15.jpg"><img src="https://media.openaicut.com/covers/907/2.5.3-zh-cf3c4dad6c15.jpg" alt="纸雕层叠 · 知识讲解模板 · 横屏" width="640"></a>

用层叠纸片看见内部、压缩与搬运。适合层序、褶皱、切面和错动的教学解释，提供图标图示选择引导，可选真人开场后缩成圆窗。

#546070 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/907/2.5.3-zh-66b986377f2a.mp4](https://media.openaicut.com/previews/907/2.5.3-zh-66b986377f2a.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-papercut](https://motiongit.com/@adunext/knowledge-explainer-papercut)

### 31. 地铁线路图 · 知识讲解模板

<a href="https://media.openaicut.com/covers/908/2.5.3-zh-d0159cc738f3.jpg"><img src="https://media.openaicut.com/covers/908/2.5.3-zh-d0159cc738f3.jpg" alt="地铁线路图 · 知识讲解模板 · 横屏" width="640"></a>

沿着线路追踪占用、停车与队列变化。适合安全间隔、状态读数和有限服务流程的教学表达，配有图标图示引导，可选真人开头后缩圆窗。

#447390 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.6

Demo 视频：[▶ https://media.openaicut.com/previews/908/2.5.3-zh-fd8d9dc5ae03.mp4](https://media.openaicut.com/previews/908/2.5.3-zh-fd8d9dc5ae03.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-metro](https://motiongit.com/@adunext/knowledge-explainer-metro)

### 32. 双色孔版 · 知识讲解模板

<a href="https://media.openaicut.com/covers/909/2.5.3-zh-a00889e59aec.jpg"><img src="https://media.openaicut.com/covers/909/2.5.3-zh-a00889e59aec.jpg" alt="双色孔版 · 知识讲解模板 · 横屏" width="640"></a>

用双色套印看清复制、增长和基数差异。适合固定增量与固定比例、谱系和指数规则的解释，提供图示选择引导，可选真人开场后圆窗陪讲。

#808349 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.4

Demo 视频：[▶ https://media.openaicut.com/previews/909/2.5.3-zh-15d6f65e42f3.mp4](https://media.openaicut.com/previews/909/2.5.3-zh-15d6f65e42f3.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-riso](https://motiongit.com/@adunext/knowledge-explainer-riso)

### 33. 点阵手账 · 知识讲解模板

<a href="https://media.openaicut.com/covers/910/2.5.3-zh-f998fa61d29d.jpg"><img src="https://media.openaicut.com/covers/910/2.5.3-zh-f998fa61d29d.jpg" alt="点阵手账 · 知识讲解模板 · 横屏" width="640"></a>

把步骤、关键词和修订留在同一本点阵手账里。适合方法拆解与学习回顾，提供图标图示选择引导；页面为19.95秒早期风格短样。

#968813 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.4-alpha.5

Demo 视频：[▶ https://media.openaicut.com/previews/910/2.5.3-zh-5ebc896f6930.mp4](https://media.openaicut.com/previews/910/2.5.3-zh-5ebc896f6930.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-sketchnote](https://motiongit.com/@adunext/knowledge-explainer-sketchnote)

### 34. 彩色几何 · 知识讲解模板

<a href="https://media.openaicut.com/covers/911/2.5.3-zh-8b47943f7398.jpg"><img src="https://media.openaicut.com/covers/911/2.5.3-zh-8b47943f7398.jpg" alt="彩色几何 · 知识讲解模板 · 横屏" width="640"></a>

用彩色边、面积与刚体拼图讲清几何等量关系。原生新稿围绕直角三角形模型，提供图示选择引导；页面为23.8667秒早期风格短样。

#118272 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.7.4

Demo 视频：[▶ https://media.openaicut.com/previews/911/2.5.3-zh-b27b76c06f66.mp4](https://media.openaicut.com/previews/911/2.5.3-zh-b27b76c06f66.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/knowledge-explainer-byrne](https://motiongit.com/@adunext/knowledge-explainer-byrne)

## 品牌与产品

### 35. 多屏拼贴 · 品牌宣传

<a href="https://media.openaicut.com/covers/585/draft-zh-c7db529e9ef8.jpg"><img src="https://media.openaicut.com/covers/585/draft-zh-c7db529e9ef8.jpg" alt="多屏拼贴 · 品牌宣传 · 横屏" width="640"></a>

用多屏拼贴、版面切换和品牌收尾展示产品与创作流程，适合品牌介绍和工具宣传。

#128610 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.6-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/585/draft-zh-78bba5fd21f6.mp4](https://media.openaicut.com/previews/585/draft-zh-78bba5fd21f6.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-main](https://motiongit.com/@motiongit/motiongit-promo-main)

技术资料：[https://github.com/motiontemplates/128610](https://github.com/motiontemplates/128610)

### 36. 像素闯关 · 产品宣传

<a href="https://media.openaicut.com/covers/586/quality-zh-086e631771b2.jpg"><img src="https://media.openaicut.com/covers/586/quality-zh-086e631771b2.jpg" alt="像素闯关 · 产品宣传 · 横屏" width="640"></a>

像素城市、角色闯关和复古游戏音色组成产品介绍，适合数字工具与功能说明。

#252912 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.7

Demo 视频：[▶ https://media.openaicut.com/previews/586/draft-zh-b8792f9887ad.mp4](https://media.openaicut.com/previews/586/draft-zh-b8792f9887ad.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-pixel](https://motiongit.com/@motiongit/motiongit-promo-pixel)

技术资料：[https://github.com/motiontemplates/252912](https://github.com/motiontemplates/252912)

### 37. 明暗快切 · 产品宣传

<a href="https://media.openaicut.com/covers/587/quality-zh-89ff4394136c.jpg"><img src="https://media.openaicut.com/covers/587/quality-zh-89ff4394136c.jpg" alt="明暗快切 · 产品宣传 · 横屏" width="640"></a>

明暗画面快速切换，结合大字和界面展示突出产品功能，适合节奏鲜明的宣传片。

#867595 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.6-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/587/draft-zh-89b65ccfd5ce.mp4](https://media.openaicut.com/previews/587/draft-zh-89b65ccfd5ce.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-velocity](https://motiongit.com/@motiongit/motiongit-promo-velocity)

技术资料：[https://github.com/motiontemplates/867595](https://github.com/motiontemplates/867595)

### 38. 流程演示 · 产品教程

<a href="https://media.openaicut.com/covers/588/quality-zh-aa230abfebe6.jpg"><img src="https://media.openaicut.com/covers/588/quality-zh-aa230abfebe6.jpg" alt="流程演示 · 产品教程 · 横屏" width="640"></a>

沿着选择模板、提供内容、生成视频的流程讲解产品使用，适合工具教程和上手演示。

#670021 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.7-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/588/draft-zh-ca08bac0650e.mp4](https://media.openaicut.com/previews/588/draft-zh-ca08bac0650e.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-user](https://motiongit.com/@motiongit/motiongit-promo-user)

技术资料：[https://github.com/motiontemplates/670021](https://github.com/motiontemplates/670021)

### 39. 模块拼贴 · 创作者宣传

<a href="https://media.openaicut.com/covers/589/quality-zh-879117ad36da.jpg"><img src="https://media.openaicut.com/covers/589/quality-zh-879117ad36da.jpg" alt="模块拼贴 · 创作者宣传 · 横屏" width="640"></a>

以模块拼贴呈现内容、素材和动画的组合关系，适合创作者工具与工作方式介绍。

#452365 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.6-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/589/draft-zh-4d806a380523.mp4](https://media.openaicut.com/previews/589/draft-zh-4d806a380523.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-creator](https://motiongit.com/@motiongit/motiongit-promo-creator)

技术资料：[https://github.com/motiontemplates/452365](https://github.com/motiontemplates/452365)

### 40. 工程蓝图 · 产品拆解

<a href="https://media.openaicut.com/covers/590/quality-zh-d5509b8e4f82.jpg"><img src="https://media.openaicut.com/covers/590/quality-zh-d5509b8e4f82.jpg" alt="工程蓝图 · 产品拆解 · 横屏" width="640"></a>

以工程蓝图、结构示意和模块拆解展示产品组成，适合技术产品与工作流讲解。

#213827 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.6-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/590/draft-zh-308a5a69232f.mp4](https://media.openaicut.com/previews/590/draft-zh-308a5a69232f.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-blueprint](https://motiongit.com/@motiongit/motiongit-promo-blueprint)

技术资料：[https://github.com/motiontemplates/213827](https://github.com/motiontemplates/213827)

### 41. 发布会舞台 · 产品演示

<a href="https://media.openaicut.com/covers/591/quality-zh-da4888e5e350.jpg"><img src="https://media.openaicut.com/covers/591/quality-zh-da4888e5e350.jpg" alt="发布会舞台 · 产品演示 · 横屏" width="640"></a>

以发布会舞台和大屏展示组织产品演示，适合新品介绍、功能发布与品牌展示。

#667934 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/591/draft-zh-958b2690a669.mp4](https://media.openaicut.com/previews/591/draft-zh-958b2690a669.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-keynote](https://motiongit.com/@motiongit/motiongit-promo-keynote)

技术资料：[https://github.com/motiontemplates/667934](https://github.com/motiontemplates/667934)

### 42. 宣纸手卷 · 品牌叙事

<a href="https://media.openaicut.com/covers/592/quality-zh-666ac61ebd83.jpg"><img src="https://media.openaicut.com/covers/592/quality-zh-666ac61ebd83.jpg" alt="宣纸手卷 · 品牌叙事 · 横屏" width="640"></a>

沿宣纸手卷展开品牌故事，以水墨意象和卷轴转场营造东方叙事。

#394243 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.8-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/592/draft-zh-eba2e4e6f671.mp4](https://media.openaicut.com/previews/592/draft-zh-eba2e4e6f671.mp4)

官网下载 .motion：[https://motiongit.com/@motiongit/motiongit-promo-ink](https://motiongit.com/@motiongit/motiongit-promo-ink)

技术资料：[https://github.com/motiontemplates/394243](https://github.com/motiontemplates/394243)

## 照片与视觉

### 43. 半调网点 · 人像标题

<a href="https://media.openaicut.com/covers/615/draft-zh-2de1eb992fcf.jpg"><img src="https://media.openaicut.com/covers/615/draft-zh-2de1eb992fcf.jpg" alt="半调网点 · 人像标题 · 横屏" width="640"></a>

三张人像化为流动的双色网点，散开后重新汇聚成标题，适合人像与主题开场。

#381814 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.7

Demo 视频：[▶ https://media.openaicut.com/previews/615/draft-zh-87b41df4a38a.mp4](https://media.openaicut.com/previews/615/draft-zh-87b41df4a38a.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-a-halftone](https://motiongit.com/@prism-studio/visual-art-a-halftone)

技术资料：[https://github.com/motiontemplates/381814](https://github.com/motiontemplates/381814)

### 44. 照片马赛克 · 拼图揭幕

<a href="https://media.openaicut.com/covers/616/draft-zh-b95e73a79f9c.jpg"><img src="https://media.openaicut.com/covers/616/draft-zh-b95e73a79f9c.jpg" alt="照片马赛克 · 拼图揭幕 · 横屏" width="640"></a>

多张照片组成主视觉，从局部照片拉远揭示完整马赛克，适合集体回忆与拼图揭幕。

#460349 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/616/draft-zh-3c3bc74e9591.mp4](https://media.openaicut.com/previews/616/draft-zh-3c3bc74e9591.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-b-mosaic](https://motiongit.com/@prism-studio/visual-art-b-mosaic)

技术资料：[https://github.com/motiontemplates/460349](https://github.com/motiontemplates/460349)

### 45. 几何拼贴 · 动态海报

<a href="https://media.openaicut.com/covers/617/draft-zh-84c721155840.jpg"><img src="https://media.openaicut.com/covers/617/draft-zh-84c721155840.jpg" alt="几何拼贴 · 动态海报 · 横屏" width="640"></a>

将四张照片裁成几何形状，在三组包豪斯动态海报中重组，适合活动与视觉主题展示。

#907345 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/617/draft-zh-d014a696e0ba.mp4](https://media.openaicut.com/previews/617/draft-zh-d014a696e0ba.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-c-collage](https://motiongit.com/@prism-studio/visual-art-c-collage)

技术资料：[https://github.com/motiontemplates/907345](https://github.com/motiontemplates/907345)

### 46. 笔触重绘 · 艺术照片

<a href="https://media.openaicut.com/covers/618/draft-zh-c88f1a5a67a8.jpg"><img src="https://media.openaicut.com/covers/618/draft-zh-c88f1a5a67a8.jpg" alt="笔触重绘 · 艺术照片 · 横屏" width="640"></a>

用三层定向笔触重绘照片，与原图对照后呈现署名标题，适合摄影与艺术展示。

#328828 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/618/draft-zh-9a122d6aac1e.mp4](https://media.openaicut.com/previews/618/draft-zh-9a122d6aac1e.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-d-brushwork](https://motiongit.com/@prism-studio/visual-art-d-brushwork)

技术资料：[https://github.com/motiontemplates/328828](https://github.com/motiontemplates/328828)

### 47. 信号故障 · 照片转场

<a href="https://media.openaicut.com/covers/619/draft-zh-b96f0b6469fe.jpg"><img src="https://media.openaicut.com/covers/619/draft-zh-b96f0b6469fe.jpg" alt="信号故障 · 照片转场 · 横屏" width="640"></a>

用像素排序、RGB 分离和扫描线改造照片，并以 CRT 关机效果收尾，适合科技视觉片段。

#638039 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/619/draft-zh-567d566f31a3.mp4](https://media.openaicut.com/previews/619/draft-zh-567d566f31a3.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-e-glitch](https://motiongit.com/@prism-studio/visual-art-e-glitch)

技术资料：[https://github.com/motiontemplates/638039](https://github.com/motiontemplates/638039)

### 48. 双重曝光 · 人像叠影

<a href="https://media.openaicut.com/covers/620/draft-zh-d8cadbd1b296.jpg"><img src="https://media.openaicut.com/covers/620/draft-zh-d8cadbd1b296.jpg" alt="双重曝光 · 人像叠影 · 横屏" width="640"></a>

以风景填充人像剪影，双层画面反向漂移，标题从薄雾显现，适合诗意人像叠影。

#800829 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/620/draft-zh-eb40eb882b43.mp4](https://media.openaicut.com/previews/620/draft-zh-eb40eb882b43.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-f-double](https://motiongit.com/@prism-studio/visual-art-f-double)

技术资料：[https://github.com/motiontemplates/800829](https://github.com/motiontemplates/800829)

### 49. 空间画廊 · 回忆相册

<a href="https://media.openaicut.com/covers/621/draft-zh-78b8670e7b7d.jpg"><img src="https://media.openaicut.com/covers/621/draft-zh-78b8670e7b7d.jpg" alt="空间画廊 · 回忆相册 · 横屏" width="640"></a>

穿行带有文字说明的立体照片画廊，最后推进主照片并揭示全屏标题，适合回忆与作品集。

#743702 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5-alpha.5

Demo 视频：[▶ https://media.openaicut.com/previews/621/draft-zh-13dffcc71ff3.mp4](https://media.openaicut.com/previews/621/draft-zh-13dffcc71ff3.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-g-gallery](https://motiongit.com/@prism-studio/visual-art-g-gallery)

技术资料：[https://github.com/motiontemplates/743702](https://github.com/motiontemplates/743702)

### 50. 镜像万花筒 · 照片变幻

<a href="https://media.openaicut.com/covers/622/draft-zh-f09b29170a66.jpg"><img src="https://media.openaicut.com/covers/622/draft-zh-f09b29170a66.jpg" alt="镜像万花筒 · 照片变幻 · 横屏" width="640"></a>

将两张照片镜像成旋转的十二分段万花筒，经扩张圆环转场再展开原图，适合视觉主题片。

#551805 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v2.6.5

Demo 视频：[▶ https://media.openaicut.com/previews/622/draft-zh-3a7bf4639a39.mp4](https://media.openaicut.com/previews/622/draft-zh-3a7bf4639a39.mp4)

官网下载 .motion：[https://motiongit.com/@prism-studio/visual-art-h-kaleido](https://motiongit.com/@prism-studio/visual-art-h-kaleido)

技术资料：[https://github.com/motiontemplates/551805](https://github.com/motiontemplates/551805)

## 行业宣传

### 51. 房产 · 一镜看房

<a href="https://media.openaicut.com/covers/industry-v7/01m_house-cover-f5d1f920b85d5f8d.jpg"><img src="https://media.openaicut.com/covers/industry-v7/01m_house-cover-f5d1f920b85d5f8d.jpg" alt="房产 · 一镜看房 · 竖屏" width="202"></a>

户型 · 采光 · 通勤 · 价格 四张图。行业竖屏口播预上线 Demo，欢迎提出建议。

#527696 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/01m_house-demo-4f74cf3b94f742ca.mp4](https://media.openaicut.com/previews/industry-v7/01m_house-demo-4f74cf3b94f742ca.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-house-one-take](https://motiongit.com/@adunext/industry-house-one-take)

技术资料：[https://github.com/motiontemplates/527696](https://github.com/motiontemplates/527696)

### 52. 财经 · 三笔账

<a href="https://media.openaicut.com/covers/industry-v7/02m_finance-cover-2e70aa6e9246ced0.jpg"><img src="https://media.openaicut.com/covers/industry-v7/02m_finance-cover-2e70aa6e9246ced0.jpg" alt="财经 · 三笔账 · 竖屏" width="202"></a>

收益 · 回撤 · 时间。行业竖屏口播预上线 Demo，欢迎提出建议。

#262246 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/02m_finance-demo-ef26c7e5bb85c420.mp4](https://media.openaicut.com/previews/industry-v7/02m_finance-demo-ef26c7e5bb85c420.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-finance-three-ledgers](https://motiongit.com/@adunext/industry-finance-three-ledgers)

技术资料：[https://github.com/motiontemplates/262246](https://github.com/motiontemplates/262246)

### 53. 法律 · 讨薪三步

<a href="https://media.openaicut.com/covers/industry-v7/03m_law-cover-1f40ac422fae1de8.jpg"><img src="https://media.openaicut.com/covers/industry-v7/03m_law-cover-1f40ac422fae1de8.jpg" alt="法律 · 讨薪三步 · 竖屏" width="202"></a>

攒证据 · 选途径 · 盯时效。行业竖屏口播预上线 Demo，欢迎提出建议。

#198702 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/03m_law-demo-1700935c6a63e90b.mp4](https://media.openaicut.com/previews/industry-v7/03m_law-demo-1700935c6a63e90b.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-law-wage-claim](https://motiongit.com/@adunext/industry-law-wage-claim)

技术资料：[https://github.com/motiontemplates/198702](https://github.com/motiontemplates/198702)

### 54. 医疗健康 · 看懂化验单

<a href="https://media.openaicut.com/covers/industry-v7/04m_health-cover-bc05b335642eac54.jpg"><img src="https://media.openaicut.com/covers/industry-v7/04m_health-cover-bc05b335642eac54.jpg" alt="医疗健康 · 看懂化验单 · 竖屏" width="202"></a>

数值 · 风险 · 日常。行业竖屏口播预上线 Demo，欢迎提出建议。

#219571 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/04m_health-demo-8b584aca37a6b2cf.mp4](https://media.openaicut.com/previews/industry-v7/04m_health-demo-8b584aca37a6b2cf.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-health-lab-report](https://motiongit.com/@adunext/industry-health-lab-report)

技术资料：[https://github.com/motiontemplates/219571](https://github.com/motiontemplates/219571)

### 55. 教育 · 三种解法

<a href="https://media.openaicut.com/covers/industry-v7/05m_edu-cover-781475610ce36c93.jpg"><img src="https://media.openaicut.com/covers/industry-v7/05m_edu-cover-781475610ce36c93.jpg" alt="教育 · 三种解法 · 竖屏" width="202"></a>

假设法 · 抬脚法 · 列方程。行业竖屏口播预上线 Demo，欢迎提出建议。

#958774 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/05m_edu-demo-9cdf56c7553afde3.mp4](https://media.openaicut.com/previews/industry-v7/05m_edu-demo-9cdf56c7553afde3.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-education-three-solutions](https://motiongit.com/@adunext/industry-education-three-solutions)

技术资料：[https://github.com/motiontemplates/958774](https://github.com/motiontemplates/958774)

### 56. 电商带货 · 实测四项

<a href="https://media.openaicut.com/covers/industry-v7/06m_shop-cover-d677d31df87fdad5.jpg"><img src="https://media.openaicut.com/covers/industry-v7/06m_shop-cover-d677d31df87fdad5.jpg" alt="电商带货 · 实测四项 · 竖屏" width="202"></a>

保温 · 密封 · 材质 · 价格。行业竖屏口播预上线 Demo，欢迎提出建议。

#318803 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/06m_shop-demo-720dbe6eb802f498.mp4](https://media.openaicut.com/previews/industry-v7/06m_shop-demo-720dbe6eb802f498.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-shopping-four-tests](https://motiongit.com/@adunext/industry-shopping-four-tests)

技术资料：[https://github.com/motiontemplates/318803](https://github.com/motiontemplates/318803)

### 57. 美妆护肤 · 成分表

<a href="https://media.openaicut.com/covers/industry-v7/07m_beauty-cover-08188ef109e5f16d.jpg"><img src="https://media.openaicut.com/covers/industry-v7/07m_beauty-cover-08188ef109e5f16d.jpg" alt="美妆护肤 · 成分表 · 竖屏" width="202"></a>

成分表 · 浓度 · 怎么用。行业竖屏口播预上线 Demo，欢迎提出建议。

#679890 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/07m_beauty-demo-c648791dc9fbea97.mp4](https://media.openaicut.com/previews/industry-v7/07m_beauty-demo-c648791dc9fbea97.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-beauty-ingredient-label](https://motiongit.com/@adunext/industry-beauty-ingredient-label)

技术资料：[https://github.com/motiontemplates/679890](https://github.com/motiontemplates/679890)

### 58. 美食探店 · 值不值得排

<a href="https://media.openaicut.com/covers/industry-v7/08m_food-cover-bf2779dc7ef5b267.jpg"><img src="https://media.openaicut.com/covers/industry-v7/08m_food-cover-bf2779dc7ef5b267.jpg" alt="美食探店 · 值不值得排 · 竖屏" width="202"></a>

排队 · 价格 · 味道 · 环境。行业竖屏口播预上线 Demo，欢迎提出建议。

#615613 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/08m_food-demo-ee6b62330cc0c559.mp4](https://media.openaicut.com/previews/industry-v7/08m_food-demo-ee6b62330cc0c559.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-food-worth-the-wait](https://motiongit.com/@adunext/industry-food-worth-the-wait)

### 59. 汽车 · 四笔账

<a href="https://media.openaicut.com/covers/industry-v7/09m_car-cover-d41c2279427dfdab.jpg"><img src="https://media.openaicut.com/covers/industry-v7/09m_car-cover-d41c2279427dfdab.jpg" alt="汽车 · 四笔账 · 竖屏" width="202"></a>

能源 · 保养 · 保险 · 残值。行业竖屏口播预上线 Demo，欢迎提出建议。

#479134 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/09m_car-demo-c26fd0966dd10ea9.mp4](https://media.openaicut.com/previews/industry-v7/09m_car-demo-c26fd0966dd10ea9.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-cars-ownership-costs](https://motiongit.com/@adunext/industry-cars-ownership-costs)

技术资料：[https://github.com/motiontemplates/479134](https://github.com/motiontemplates/479134)

### 60. 数码科技 · 换不换

<a href="https://media.openaicut.com/covers/industry-v7/10m_tech-cover-fe8f7a4f885ebaed.jpg"><img src="https://media.openaicut.com/covers/industry-v7/10m_tech-cover-fe8f7a4f885ebaed.jpg" alt="数码科技 · 换不换 · 竖屏" width="202"></a>

性能 · 电池 · 系统 · 算账。行业竖屏口播预上线 Demo，欢迎提出建议。

#163978 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/10m_tech-demo-1af9cf28b0feff78.mp4](https://media.openaicut.com/previews/industry-v7/10m_tech-demo-1af9cf28b0feff78.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-tech-upgrade-or-keep](https://motiongit.com/@adunext/industry-tech-upgrade-or-keep)

技术资料：[https://github.com/motiontemplates/163978](https://github.com/motiontemplates/163978)

### 61. 职场 · 三行汇报

<a href="https://media.openaicut.com/covers/industry-v7/11m_work-cover-4c31a66daf1f29d1.jpg"><img src="https://media.openaicut.com/covers/industry-v7/11m_work-cover-4c31a66daf1f29d1.jpg" alt="职场 · 三行汇报 · 竖屏" width="202"></a>

为什么听不懂 · 一个结构 · 三个场景。行业竖屏口播预上线 Demo，欢迎提出建议。

#731728 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/11m_work-demo-b8ee1e5c0ef39a36.mp4](https://media.openaicut.com/previews/industry-v7/11m_work-demo-b8ee1e5c0ef39a36.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-work-three-line-report](https://motiongit.com/@adunext/industry-work-three-line-report)

技术资料：[https://github.com/motiontemplates/731728](https://github.com/motiontemplates/731728)

### 62. 情感 · 对话复盘

<a href="https://media.openaicut.com/covers/industry-v7/12m_love-cover-bc04a5a474970c74.jpg"><img src="https://media.openaicut.com/covers/industry-v7/12m_love-cover-bc04a5a474970c74.jpg" alt="情感 · 对话复盘 · 竖屏" width="202"></a>

看数据 · 辨信号 · 学会问。行业竖屏口播预上线 Demo，欢迎提出建议。

#926144 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/industry-v7/12m_love-demo-34d2434898ca0e2f.mp4](https://media.openaicut.com/previews/industry-v7/12m_love-demo-34d2434898ca0e2f.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/industry-relationships-conversation-review](https://motiongit.com/@adunext/industry-relationships-conversation-review)

技术资料：[https://github.com/motiontemplates/926144](https://github.com/motiontemplates/926144)

## 生活与叙事

### 63. September

<a href="https://media.openaicut.com/covers/986/2.2.7-f1b50c63e405.jpg"><img src="https://media.openaicut.com/covers/986/2.2.7-f1b50c63e405.jpg" alt="September · 横屏" width="640"></a>

一天或一趟旅行的手机/相机素材 + 用户自己讲的几句故事 → 约 100 秒（102–103 秒）、有故事线也有卡点的旅行 VLOG，横竖屏都行。

#589709 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v2.2.7

Demo 视频：[▶ https://media.openaicut.com/previews/986/2.2.7-2336388ec1aa.mp4](https://media.openaicut.com/previews/986/2.2.7-2336388ec1aa.mp4)

官网下载 .motion：[https://motiongit.com/@adunext/september](https://motiongit.com/@adunext/september)

## 模板开放测试 · 未上线

第二批模板开放测试，打磨优化中，即将开放下载。当前可观看完整 Demo。

### 64. 3D书 · 阿杜和那个影响了

<a href="https://motiontemplates.github.io/all/assets/batch-two-3d-book.jpg"><img src="https://motiontemplates.github.io/all/assets/batch-two-3d-book.jpg" alt="3D书 · 阿杜和那个影响了 · 横屏" width="640"></a>

以立体书页、真实照片、翻页镜头和双语字幕串联个人经历，展示可用于回忆与叙事讲解的书本舞台。Demo 使用第8版完整成片。

16:9 · 1920 × 1080 · 60 FPS

**第二批模板开放测试，打磨优化中，即将开放下载。当前可观看完整 Demo。**

在线播放：[https://motiontemplates.github.io/all/#preview-3d-book](https://motiontemplates.github.io/all/#preview-3d-book)

Demo 视频：[https://github.com/motiontemplates/all/releases/download/demo-batch-two-2026-10-21/3d-book-demo-6dc0bd1a0e5bc9e8.mp4](https://github.com/motiontemplates/all/releases/download/demo-batch-two-2026-10-21/3d-book-demo-6dc0bd1a0e5bc9e8.mp4)

## 创新区

**创新区项目由 MotionGit 用户新上传，可能存在适配性或完整度不足的问题，请自行测试使用。**

### 65. DeepSeek 鲸鱼粒子聚合

<a href="https://media.openaicut.com/covers/628/1.1.0-a864a56cec62.jpg"><img src="https://media.openaicut.com/covers/628/1.1.0-a864a56cec62.jpg" alt="DeepSeek 鲸鱼粒子聚合 · 横屏" width="640"></a>

粒子从散落聚合成品牌鲸鱼 Logo，适合片头、品牌露出或章节转场。

#404937 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/628/1.1.0-e0d9c9e4a5b8.mp4](https://media.openaicut.com/previews/628/1.1.0-e0d9c9e4a5b8.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deepseek-whale-assemble](https://motiongit.com/@thepandaq/deepseek-whale-assemble)

技术资料：[https://github.com/motiontemplates/404937](https://github.com/motiontemplates/404937)

### 66. DeepSeek 粒子形变

<a href="https://media.openaicut.com/covers/629/1.1.0-72cc2b4731d0.jpg"><img src="https://media.openaicut.com/covers/629/1.1.0-72cc2b4731d0.jpg" alt="DeepSeek 粒子形变 · 横屏" width="640"></a>

同一批粒子在四种三维形状间形变，适合科技感转场、概念串联或片尾。

#380710 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/629/1.1.0-0892fa4bf82d.mp4](https://media.openaicut.com/previews/629/1.1.0-0892fa4bf82d.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deepseek-form-morph](https://motiongit.com/@thepandaq/deepseek-form-morph)

技术资料：[https://github.com/motiontemplates/380710](https://github.com/motiontemplates/380710)

### 67. DeepSeek 词语粒子

<a href="https://media.openaicut.com/covers/630/1.1.0-7cf1d6e6ddc9.jpg"><img src="https://media.openaicut.com/covers/630/1.1.0-7cf1d6e6ddc9.jpg" alt="DeepSeek 词语粒子 · 横屏" width="640"></a>

粒子按顺序拼出四个关键词，适合概念介绍、能力列表与口号式开场。

#941301 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/630/1.1.0-7b16186bd6b2.mp4](https://media.openaicut.com/previews/630/1.1.0-7b16186bd6b2.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deepseek-word-morph](https://motiongit.com/@thepandaq/deepseek-word-morph)

技术资料：[https://github.com/motiontemplates/941301](https://github.com/motiontemplates/941301)

### 68. 量价图表：K线突破与分时动画

<a href="https://media.openaicut.com/covers/869/1.0.0-zh-01708b4a2214.jpg"><img src="https://media.openaicut.com/covers/869/1.0.0-zh-01708b4a2214.jpg" alt="量价图表：K线突破与分时动画 · 横屏" width="360"></a>

量价教学图表独立组件，包含两组日K与一组分时动画。

#287792 · 横屏 · 1:1 · 1080 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/869/1.0.0-zh-d5fd83bc28a8.mp4](https://media.openaicut.com/previews/869/1.0.0-zh-d5fd83bc28a8.mp4)

官网下载 .motion：[https://motiongit.com/@oubaba95128/volume-price-kline-charts](https://motiongit.com/@oubaba95128/volume-price-kline-charts)

技术资料：[https://github.com/motiontemplates/287792](https://github.com/motiontemplates/287792)

### 69. 口播宣传动效 10 秒

<a href="https://media.openaicut.com/covers/870/1.0.0-99c20483f4b4.jpg"><img src="https://media.openaicut.com/covers/870/1.0.0-99c20483f4b4.jpg" alt="口播宣传动效 10 秒 · 横屏" width="640"></a>

10 秒横版宣传动效：用一个数字、一句大字和品牌收尾，做短视频开场或产品预告片头。

#854836 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/870/1.0.0-6dcf8b7863ca.mp4](https://media.openaicut.com/previews/870/1.0.0-6dcf8b7863ca.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/kouboo-motion](https://motiongit.com/@thepandaq/kouboo-motion)

### 70. 3D 口播开场

<a href="https://media.openaicut.com/covers/871/draft-5ad5f68adb8d.jpg"><img src="https://media.openaicut.com/covers/871/draft-5ad5f68adb8d.jpg" alt="3D 口播开场 · 横屏" width="640"></a>

3D 口播开场

#554769 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/871/draft-40ddede10a69.mp4](https://media.openaicut.com/previews/871/draft-40ddede10a69.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/cool-3d-intro](https://motiongit.com/@thepandaq/cool-3d-intro)

### 71. Light Ribbon Word

<a href="https://media.openaicut.com/covers/872/1.0.0-04d5f44d203b.jpg"><img src="https://media.openaicut.com/covers/872/1.0.0-04d5f44d203b.jpg" alt="Light Ribbon Word · 横屏" width="640"></a>

光之丝带汇聚成一个词：丝带流动、粒子成字、光带扫过，再散回丝带。

#872 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/872/1.0.0-08a812711d78.mp4](https://media.openaicut.com/previews/872/1.0.0-08a812711d78.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/light-ribbon-word](https://motiongit.com/@thepandaq/light-ribbon-word)

### 72. 拼贴出场 · COLLAGE OPEN

<a href="https://media.openaicut.com/covers/873/1.0.0-zh-12a46d4c356c.jpg"><img src="https://media.openaicut.com/covers/873/1.0.0-zh-12a46d4c356c.jpg" alt="拼贴出场 · COLLAGE OPEN · 横屏" width="640"></a>

8.5 秒拼贴出场：9 块创作样张依次飞入拼贴墙，主张版块落位。可换品牌名、片头编号、强调色与两行标题。

#873 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/873/1.0.0-zh-6b7b749b3dc5.mp4](https://media.openaicut.com/previews/873/1.0.0-zh-6b7b749b3dc5.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-open](https://motiongit.com/@thepandaq/collage-open)

### 73. 多屏墙换版 · WALL SWAP

<a href="https://media.openaicut.com/covers/874/1.0.0-zh-4340b94c82ff.jpg"><img src="https://media.openaicut.com/covers/874/1.0.0-zh-4340b94c82ff.jpg" alt="多屏墙换版 · WALL SWAP · 横屏" width="640"></a>

从面板擦除进入多屏拼贴墙，再切到「一个想法，四种看法」的分屏版面；8.6 秒展示多素材并置与版面切换。可换品牌名、片头编号、强调色与两行标题。

#874 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/874/1.0.0-zh-7831dd69bc6b.mp4](https://media.openaicut.com/previews/874/1.0.0-zh-7831dd69bc6b.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-wall](https://motiongit.com/@thepandaq/collage-wall)

### 74. 四种看法与片格 · VIEWS / STRIP

<a href="https://media.openaicut.com/covers/875/1.0.0-zh-3c1d5e7cd796.jpg"><img src="https://media.openaicut.com/covers/875/1.0.0-zh-3c1d5e7cd796.jpg" alt="四种看法与片格 · VIEWS / STRIP · 横屏" width="640"></a>

「一个想法，四种看法」分屏版面切到横滚片格，真实晚霞树影与创作样张横向滚动；8.2 秒，适合多镜头并置与作品条带展示。

#875 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/875/1.0.0-zh-cd8ad1570460.mp4](https://media.openaicut.com/previews/875/1.0.0-zh-cd8ad1570460.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-views](https://motiongit.com/@thepandaq/collage-views)

### 75. 流程与时间线 · FLOW / TIMELINE

<a href="https://media.openaicut.com/covers/876/1.0.0-zh-0836cb139a44.jpg"><img src="https://media.openaicut.com/covers/876/1.0.0-zh-0836cb139a44.jpg" alt="流程与时间线 · FLOW / TIMELINE · 横屏" width="640"></a>

四步创作流程（说戏→分镜→画面→成片）推进到一条时间线，四轨片段铺开、播放头扫过、统计落位；9.8 秒，适合 AIGC/创作工具的能力说明。

#876 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/876/1.0.0-zh-294b6a370e6d.mp4](https://media.openaicut.com/previews/876/1.0.0-zh-294b6a370e6d.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-flow](https://motiongit.com/@thepandaq/collage-flow)

### 76. 产品与品牌 · PRODUCT → BRAND

<a href="https://media.openaicut.com/covers/877/1.0.0-zh-a24df31e704a.jpg"><img src="https://media.openaicut.com/covers/877/1.0.0-zh-a24df31e704a.jpg" alt="产品与品牌 · PRODUCT → BRAND · 横屏" width="640"></a>

从面板擦除进入产品工作台（分镜/画布/调色/时间线同窗联动），再以墨色擦除收进棱镜标志、字标、主张与 CTA；14.4 秒，适合产品演示与品牌落版。

#877 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/877/1.0.0-zh-97910ee13592.mp4](https://media.openaicut.com/previews/877/1.0.0-zh-97910ee13592.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-product](https://motiongit.com/@thepandaq/collage-product)

### 77. 面板擦除 · WIPE PACK

<a href="https://media.openaicut.com/covers/878/1.0.0-zh-36c9ef9f02df.jpg"><img src="https://media.openaicut.com/covers/878/1.0.0-zh-36c9ef9f02df.jpg" alt="面板擦除 · WIPE PACK · 横屏" width="640"></a>

四套面板擦除过场：竖条合拢、横条下压、纸色竖条、墨色竖条；8 秒转场包，可用于场景切换与章节过渡。

#878 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/878/1.0.0-zh-be7dc794ab1a.mp4](https://media.openaicut.com/previews/878/1.0.0-zh-be7dc794ab1a.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/collage-wipe](https://motiongit.com/@thepandaq/collage-wipe)

### 78. DEEP STAGE 开场点火标题

<a href="https://media.openaicut.com/covers/879/1.0.0-12a34d321725.jpg"><img src="https://media.openaicut.com/covers/879/1.0.0-12a34d321725.jpg" alt="DEEP STAGE 开场点火标题 · 横屏" width="640"></a>

深色立体舞台开场：地平线点火、地面透视网格生长、远景屏幕墙点亮，两段主标题落下（金属渐变），最后落到副标题与角标。10 秒片头动效，可换品牌、标题、副标题与主色。

#921052 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/879/1.0.0-8e74030d1901.mp4](https://media.openaicut.com/previews/879/1.0.0-8e74030d1901.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-title-ignition](https://motiongit.com/@thepandaq/deep-stage-title-ignition)

### 79. DEEP STAGE 口播主舞台

<a href="https://media.openaicut.com/covers/880/1.0.0-53419c8f2925.jpg"><img src="https://media.openaicut.com/covers/880/1.0.0-53419c8f2925.jpg" alt="DEEP STAGE 口播主舞台 · 横屏" width="640"></a>

口播主舞台动效：9:16 人物画面（CAM 01 / REC 取景标签）与主信息屏、竖向章节导航屏三层错峰入位，下三分之一人名条滑入，镜头全程缓慢横移。14 秒，适合口播正文与知识讲解。

#228996 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/880/1.0.0-2c8e89fea7a8.mp4](https://media.openaicut.com/previews/880/1.0.0-2c8e89fea7a8.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-host-stage](https://motiongit.com/@thepandaq/deep-stage-host-stage)

### 80. DEEP STAGE 产品讲解

<a href="https://media.openaicut.com/covers/881/1.0.0-7dadaa0a595d.jpg"><img src="https://media.openaicut.com/covers/881/1.0.0-7dadaa0a595d.jpg" alt="DEEP STAGE 产品讲解 · 横屏" width="640"></a>

产品讲解动效：产品主屏推入并持续推近，3 个参数切片从 3D 空间错峰浮出、数字从 0 滚到终值，右下角人物小画中画入位。12 秒，适合产品卖点与参数讲解。

#648878 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/881/1.0.0-bf4d2ce8953d.mp4](https://media.openaicut.com/previews/881/1.0.0-bf4d2ce8953d.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-product-focus](https://motiongit.com/@thepandaq/deep-stage-product-focus)

### 81. DEEP STAGE 案例数据

<a href="https://media.openaicut.com/covers/882/1.0.0-20fa9d055973.jpg"><img src="https://media.openaicut.com/covers/882/1.0.0-20fa9d055973.jpg" alt="DEEP STAGE 案例数据 · 横屏" width="640"></a>

案例讲解动效：数据仪表盘推入，3 个 KPI 数字滚动，6 根柱图从底部逐根生长（最高值自动主色高亮），前后对比副屏滑入。13 秒，适合案例复盘与成果汇报。

#587362 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/882/1.0.0-5df639825460.mp4](https://media.openaicut.com/previews/882/1.0.0-5df639825460.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-case-data](https://motiongit.com/@thepandaq/deep-stage-case-data)

### 82. DEEP STAGE 媒体素材墙

<a href="https://media.openaicut.com/covers/883/1.0.0-7aea9314e457.jpg"><img src="https://media.openaicut.com/covers/883/1.0.0-7aea9314e457.jpg" alt="DEEP STAGE 媒体素材墙 · 横屏" width="640"></a>

媒体素材墙动效：六宫格（2×3）在 3D 空间逐张落位，每格独立纵深与旋转，落位后极缓慢浮动，镜头持续后拉。10 秒，适合素材盘点与 B-roll 讲解。

#430770 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/883/1.0.0-a30bac716f4b.mp4](https://media.openaicut.com/previews/883/1.0.0-a30bac716f4b.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-media-wall](https://motiongit.com/@thepandaq/deep-stage-media-wall)

### 83. DEEP STAGE 收尾锁版

<a href="https://media.openaicut.com/covers/884/1.0.0-1e5dc2b6dbd5.jpg"><img src="https://media.openaicut.com/covers/884/1.0.0-1e5dc2b6dbd5.jpg" alt="DEEP STAGE 收尾锁版 · 横屏" width="640"></a>

收尾锁版动效：屏幕退向纵深，logo 描边锁定，字标、副标、规格行与版本胶囊依次落位，一道横扫光掠过，结尾稳定呼吸。8 秒，适合片尾与版本标识。

#581039 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/884/1.0.0-651f2839086d.mp4](https://media.openaicut.com/previews/884/1.0.0-651f2839086d.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-outro-lockup](https://motiongit.com/@thepandaq/deep-stage-outro-lockup)

### 84. DEEP STAGE 深境舞台完整版

<a href="https://media.openaicut.com/covers/885/1.0.0-10251bc4895b.jpg"><img src="https://media.openaicut.com/covers/885/1.0.0-10251bc4895b.jpg" alt="DEEP STAGE 深境舞台完整版 · 横屏" width="640"></a>

46 秒整条口播包装视频模板：深色 3D 舞台开场点火 → 口播主舞台（人物画面 + 信息屏 + 章节屏）→ 产品讲解 → 案例数据 → 媒体素材墙 → 收尾锁版，一条连续镜头运动。可替换品牌、标题、人名职务、三屏文案、产品/案例文案、10 句口播字幕与主色；随包可选音效轨（纯合

#838778 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/885/1.0.0-1d0d4dc1ea23.mp4](https://media.openaicut.com/previews/885/1.0.0-1d0d4dc1ea23.mp4)

官网下载 .motion：[https://motiongit.com/@thepandaq/deep-stage-full-video](https://motiongit.com/@thepandaq/deep-stage-full-video)

### 85. 目标与证据 · 17类语义动效

<a href="https://media.openaicut.com/covers/886/0.4.0-rc.4-5ddf2903802d.jpg"><img src="https://media.openaicut.com/covers/886/0.4.0-rc.4-5ddf2903802d.jpg" alt="目标与证据 · 17类语义动效 · 横屏" width="640"></a>

暖灰米白与绿色的17类语义动效，适用于知识讲解、产品说明、指标比较与观点表达。

#509099 · 横屏 · 16:9 · 1280 × 720 · 24 FPS · v0.4.0-rc.5

Demo 视频：[▶ https://media.openaicut.com/previews/886/0.4.0-rc.4-7ab29961149d.mp4](https://media.openaicut.com/previews/886/0.4.0-rc.4-7ab29961149d.mp4)

官网下载 .motion：[https://motiongit.com/@frankye1211/product-update-story](https://motiongit.com/@frankye1211/product-update-story)

技术资料：[https://github.com/motiontemplates/509099](https://github.com/motiontemplates/509099)

### 86. 图解口播与图片展示

<a href="https://media.openaicut.com/covers/888/0.8.0-rc.2-15b068f72745.jpg"><img src="https://media.openaicut.com/covers/888/0.8.0-rc.2-15b068f72745.jpg" alt="图解口播与图片展示 · 横屏" width="640"></a>

月白渐变风格的图解与口播模板，支持图形讲解、图片视频展示和人物卡片；新增7种同系列食物SVG与透明PNG。

#643842 · 横屏 · 16:9 · 1920 × 1080 · 24 FPS · v0.8.1-rc.1

Demo 视频：[▶ https://media.openaicut.com/previews/888/0.8.0-rc.2-6971ec2770b7.mp4](https://media.openaicut.com/previews/888/0.8.0-rc.2-6971ec2770b7.mp4)

官网下载 .motion：[https://motiongit.com/@frankye1211/moonwhite-robot-unified](https://motiongit.com/@frankye1211/moonwhite-robot-unified)

### 87. Kit 1 · 人文纪录片知识短片

<a href="https://media.openaicut.com/covers/889/1.0.0-d8681251c776.jpg"><img src="https://media.openaicut.com/covers/889/1.0.0-d8681251c776.jpg" alt="Kit 1 · 人文纪录片知识短片 · 横屏" width="640"></a>

无口播、画面+字幕叙事的人文纪录片风知识短片模板：暗场开题、锚词砸出（缩放回弹+闪白+震屏）、结尾亮背景重定义。替换锚词与双语字幕即可制作新短片，1920×1080/30fps，样例 20 秒含程序化 BGM 与音效。

#233154 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/889/1.0.0-c28fac802c50.mp4](https://media.openaicut.com/previews/889/1.0.0-c28fac802c50.mp4)

官网下载 .motion：[https://motiongit.com/@chenyutao0417/kit1-doc-shortfilm](https://motiongit.com/@chenyutao0417/kit1-doc-shortfilm)

技术资料：[https://github.com/motiontemplates/233154](https://github.com/motiontemplates/233154)

### 88. Kit 2 · 口播动效包装（竖屏）

<a href="https://media.openaicut.com/covers/890/1.0.0-50bebde67959.jpg"><img src="https://media.openaicut.com/covers/890/1.0.0-50bebde67959.jpg" alt="Kit 2 · 口播动效包装（竖屏）" width="202"></a>

给真人出镜的口播视频套上完整动效包装：人像窗口在全屏、圆窗、卡片之间插值过渡，配 10 个段落可视化隐喻与深色药丸双语字幕（重点词橙色）。高潮锚词砸下（震屏+橙闪），片尾手写收尾。1080×1920/30fps，样例 36.5 秒，含程序化动作音效。

#583549 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/890/1.0.0-a07dfe35eea8.mp4](https://media.openaicut.com/previews/890/1.0.0-a07dfe35eea8.mp4)

官网下载 .motion：[https://motiongit.com/@chenyutao0417/kit2-koubo-wrap](https://motiongit.com/@chenyutao0417/kit2-koubo-wrap)

### 89. 多屏商务 · 动态图表

<a href="https://media.openaicut.com/covers/891/0.1.1-candidate-zh-007e520a3b97.jpg"><img src="https://media.openaicut.com/covers/891/0.1.1-candidate-zh-007e520a3b97.jpg" alt="多屏商务 · 动态图表 · 横屏" width="640"></a>

固定20秒横屏商务短片，以多屏重排呈现团队、比较、趋势、构成与行动。

#640261 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v0.1.1-candidate

Demo 视频：[▶ https://media.openaicut.com/previews/891/0.1.1-candidate-zh-a43ff10687ec.mp4](https://media.openaicut.com/previews/891/0.1.1-candidate-zh-a43ff10687ec.mp4)

官网下载 .motion：[https://motiongit.com/@frankye1211/corporate-multiscreen-charts](https://motiongit.com/@frankye1211/corporate-multiscreen-charts)

### 90. 水墨人物志 · 一个人的故事

<a href="https://media.openaicut.com/covers/892/1.0.0-zh-dbe6436265f9.jpg"><img src="https://media.openaicut.com/covers/892/1.0.0-zh-dbe6436265f9.jpg" alt="水墨人物志 · 一个人的故事 · 横屏" width="640"></a>

用汉字当角色（韩、刘、萧、项…）的水墨动画，2 分 48 秒讲完一个历史人物的一生，并用心理学解释他为什么落到这个下场。改预设里的对白、成语签、地点年份、括注和场景即可换一个新人物。1920×1080 / 30fps，样例含程序化动作音效。

#360840 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/892/1.0.0-zh-1f9aa1a124de.mp4](https://media.openaicut.com/previews/892/1.0.0-zh-1f9aa1a124de.mp4)

官网下载 .motion：[https://motiongit.com/@chenyutao0417/ink-saga](https://motiongit.com/@chenyutao0417/ink-saga)

### 91. 3D 吉祥物手把手教程

<a href="https://media.openaicut.com/covers/895/1.0.0-zh-0c4dce4365d8.jpg"><img src="https://media.openaicut.com/covers/895/1.0.0-zh-0c4dce4365d8.jpg" alt="3D 吉祥物手把手教程 · 横屏" width="640"></a>

把网页或 App 的一段操作流程（注册、下单、设置等），做成 3D 小宠物带着一步步点、打字、指重点的横屏教程视频

#887145 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/895/1.0.0-zh-a15d0b9cfbab.mp4](https://media.openaicut.com/previews/895/1.0.0-zh-a15d0b9cfbab.mp4)

官网下载 .motion：[https://motiongit.com/@xkkiss12/mascot-tutorial-3d](https://motiongit.com/@xkkiss12/mascot-tutorial-3d)

### 92. 可爱角色歌词 MV

<a href="https://media.openaicut.com/covers/920/1.0.0-zh-dc8684015557.jpg"><img src="https://media.openaicut.com/covers/920/1.0.0-zh-dc8684015557.jpg" alt="可爱角色歌词 MV · 横屏" width="640"></a>

33 秒横屏歌词 MV 完整模板（1920×1080，30fps），可替换歌词、关键词大字与手写纸条。模板默认采用程序绘制的可爱 chibi 角色。中文 Demo 使用此前完成的《碎碎念》完整成片，未重新渲染；Demo 人物沿用原片风格，与模板默认角色风格不同。音频署名：小天；抖

#161069 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/920/1.0.0-zh-36be1d67dbe0.mp4](https://media.openaicut.com/previews/920/1.0.0-zh-36be1d67dbe0.mp4)

官网下载 .motion：[https://motiongit.com/@chenyutao0417/cute-character-lyric-mv](https://motiongit.com/@chenyutao0417/cute-character-lyric-mv)

### 93. 决策数据剧场 · Decision Chart Theater

<a href="https://media.openaicut.com/covers/923/1.0.1-zh-930359a63137.jpg"><img src="https://media.openaicut.com/covers/923/1.0.1-zh-930359a63137.jpg" alt="决策数据剧场 · Decision Chart Theater · 横屏" width="640"></a>

黑底数据讲解剧场：台账 → 矢量图表逐元素长出并推近讲解 → 一个大数字结论 → 光圈收黑。六种镜头由参数驱动，时长随内容。这支 Demo 就是本模板渲染的（97.6 秒 / 30fps），示例数字已匿名化。

#991091 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/923/1.0.1-zh-e327c33f8d30.mp4](https://media.openaicut.com/previews/923/1.0.1-zh-e327c33f8d30.mp4)

官网下载 .motion：[https://motiongit.com/@lxguanyu/dds-decision-keynote](https://motiongit.com/@lxguanyu/dds-decision-keynote)

### 94. 双语科技歌词动效 MV

<a href="https://media.openaicut.com/covers/932/draft-zh-4b3f5b051ec4.jpg"><img src="https://media.openaicut.com/covers/932/draft-zh-4b3f5b051ec4.jpg" alt="双语科技歌词动效 MV · 横屏" width="640"></a>

固定约194秒的双语科技歌词MV模板，包含逐字歌词、多画面拼接、科技标题和声音频谱动效。Windows、Python与FFmpeg运行；使用者须自备音频、双语歌词和41段不同视频。

#640432 · 横屏 · 16:9 · 1280 × 720 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/932/draft-zh-15f86c1d3675.mp4](https://media.openaicut.com/previews/932/draft-zh-15f86c1d3675.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/green-light-bilingual-tech-mv](https://motiongit.com/@chenjunfeng5208/green-light-bilingual-tech-mv)

### 95. 桌面口播 · Mac 窗口动效

<a href="https://media.openaicut.com/covers/933/1.0.0-zh-ce294f555635.jpg"><img src="https://media.openaicut.com/covers/933/1.0.0-zh-ce294f555635.jpg" alt="桌面口播 · Mac 窗口动效 · 横屏" width="480"></a>

浅色 macOS 桌面风格的真人口播模板：讲者出现在 Mac 摄像头窗口里，每句话按句型自动切换版式与动效——翻牌数字、弹出窗口、印章、荧光笔划重点、流程图、删除线、网格转场等，每种动效配有对应音效；判断句、数据句、风险句等各有专属布局。文字、数据、配色和节奏全部由参数驱动，替换

#607598 · 横屏 · 4:3 · 1440 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/933/1.0.0-zh-616ff2957b13.mp4](https://media.openaicut.com/previews/933/1.0.0-zh-616ff2957b13.mp4)

官网下载 .motion：[https://motiongit.com/@erictan88315/desktop-talking-head](https://motiongit.com/@erictan88315/desktop-talking-head)

### 96. 光的语法

<a href="https://media.openaicut.com/covers/934/1.0.5-zh-78b30eaca28b.jpg"><img src="https://media.openaicut.com/covers/934/1.0.5-zh-78b30eaca28b.jpg" alt="光的语法 · 横屏" width="640"></a>

六镜光学短片模板。冷白光谱底、七条色带像频谱仪一样呼吸、透镜光斑推移，适合讲光学、色彩与感知类知识。固定 14 秒，1920x1080。

#442505 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.5

Demo 视频：[▶ https://media.openaicut.com/previews/934/1.0.5-zh-1a9201fa21d4.mp4](https://media.openaicut.com/previews/934/1.0.5-zh-1a9201fa21d4.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/light-grammar](https://motiongit.com/@chenjunfeng5208/light-grammar)

### 97. 深海时钟

<a href="https://media.openaicut.com/covers/935/1.0.0-zh-918534c9724f.jpg"><img src="https://media.openaicut.com/covers/935/1.0.0-zh-918534c9724f.jpg" alt="深海时钟 · 横屏" width="640"></a>

七镜深海观察日志：光在 200 米处终止、每 10 米增加一个大气压、声音传得更远。冷蓝到近黑的单色系统，适合讲深海、压强与感知边界。固定 16.7 秒，1920x1080。

#319937 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/935/1.0.0-zh-3a4b3bfe504a.mp4](https://media.openaicut.com/previews/935/1.0.0-zh-3a4b3bfe504a.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/deep-sea-clock](https://motiongit.com/@chenjunfeng5208/deep-sea-clock)

### 98. 城市脉搏

<a href="https://media.openaicut.com/covers/936/1.0.0-zh-ca61bd1f0042.jpg"><img src="https://media.openaicut.com/covers/936/1.0.0-zh-ca61bd1f0042.jpg" alt="城市脉搏 · 横屏" width="640"></a>

六镜城市夜行：天际线切片、楼体呼吸、交通流与人口曲线。暖橙高对比的城市节奏，适合讲城市、人群与流动。固定 11.3 秒，1920x1080。

#362451 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/936/1.0.0-zh-282f4b90fdf5.mp4](https://media.openaicut.com/previews/936/1.0.0-zh-282f4b90fdf5.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/city-pulse](https://motiongit.com/@chenjunfeng5208/city-pulse)

### 99. 种子库

<a href="https://media.openaicut.com/covers/937/1.0.0-zh-f4642eac1228.jpg"><img src="https://media.openaicut.com/covers/937/1.0.0-zh-f4642eac1228.jpg" alt="种子库 · 横屏" width="640"></a>

五镜标本档案：恒温舱呼吸单元格、编号标本格、光照周期与异地备份。冷色极简的档案秩序，适合讲保存、备份与长期主义。固定 16 秒，1920x1080。

#419411 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/937/1.0.0-zh-d4a89cf66307.mp4](https://media.openaicut.com/previews/937/1.0.0-zh-d4a89cf66307.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/seed-bank](https://motiongit.com/@chenjunfeng5208/seed-bank)

### 100. 火星农场

<a href="https://media.openaicut.com/covers/938/1.0.0-zh-67765770dc26.jpg"><img src="https://media.openaicut.com/covers/938/1.0.0-zh-67765770dc26.jpg" alt="火星农场 · 横屏" width="640"></a>

六镜等距种植图：火星表土、脉动生长格、水循环与收成预估。锈红与青绿的互补配色，适合讲太空农业与资源闭环。固定 14.2 秒，1920x1080。

#631937 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/938/1.0.0-zh-850d226af3d7.mp4](https://media.openaicut.com/previews/938/1.0.0-zh-850d226af3d7.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/mars-farm](https://motiongit.com/@chenjunfeng5208/mars-farm)

### 101. AI 能不能代替人工

<a href="https://media.openaicut.com/covers/939/1.0.0-zh-009076f6851a.jpg"><img src="https://media.openaicut.com/covers/939/1.0.0-zh-009076f6851a.jpg" alt="AI 能不能代替人工 · 横屏" width="640"></a>

七镜论证体短片：先提问，再讲 AI 能做什么、不能做什么、机制怎么拆、边界在哪里，最后给出结论与落版。冷灰底配橙红强调，适合讲 AI 与人的分工。固定 29.5 秒，1920x1080。

#966733 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/939/1.0.0-zh-c4f14f016b60.mp4](https://media.openaicut.com/previews/939/1.0.0-zh-c4f14f016b60.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/code-is-video](https://motiongit.com/@chenjunfeng5208/code-is-video)

### 102. OpenFilm · 打开想法

<a href="https://media.openaicut.com/covers/940/1.0.0-zh-4ca8d1e9b26c.jpg"><img src="https://media.openaicut.com/covers/940/1.0.0-zh-4ca8d1e9b26c.jpg" alt="OpenFilm · 打开想法 · 横屏" width="640"></a>

20 镜 / 30 秒。讲一个想法如何变成一支影片：从一句念头，到分镜、到画面、到成片。含主题层（7 色配色 / 字体 / 字重 / 行距 / 缓动可换）、时间轴文件（可改时长）、以及渲染与自检工具。适合讲创作工具、产品流程、从想法到落地。1920x1080。

#324804 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/940/1.0.0-zh-15cb79781117.mp4](https://media.openaicut.com/previews/940/1.0.0-zh-15cb79781117.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/openfilm-solo](https://motiongit.com/@chenjunfeng5208/openfilm-solo)

### 103. Motion × OpenFilm

<a href="https://media.openaicut.com/covers/941/1.0.0-zh-45fef4dddda7.jpg"><img src="https://media.openaicut.com/covers/941/1.0.0-zh-45fef4dddda7.jpg" alt="Motion × OpenFilm · 横屏" width="640"></a>

16 镜 / 24 秒。运动设计语法演示：位移、遮罩、谱带、数字滚动与图形变形。配色、字体、缓动可在主题层替换，时长可由时间轴文件调整。适合讲动效设计、界面转场、节奏与秩序。1920x1080。

#313223 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/941/1.0.0-zh-3662ab650178.mp4](https://media.openaicut.com/previews/941/1.0.0-zh-3662ab650178.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/motion-openfilm](https://motiongit.com/@chenjunfeng5208/motion-openfilm)

### 104. AI × 想象力

<a href="https://media.openaicut.com/covers/942/1.0.0-zh-8c4a868fef82.jpg"><img src="https://media.openaicut.com/covers/942/1.0.0-zh-8c4a868fef82.jpg" alt="AI × 想象力 · 横屏" width="640"></a>

12 镜 / 16 秒。AI 与想象力的短句蒙太奇：快剪、色块、图形呼吸。文案、配色、字体、缓动均可替换，时长可由时间轴文件调整。适合讲 AI、创意、可能性。1920x1080。

#814661 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/942/1.0.0-zh-d118c59cf795.mp4](https://media.openaicut.com/previews/942/1.0.0-zh-d118c59cf795.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/ai-imagination](https://motiongit.com/@chenjunfeng5208/ai-imagination)

### 105. 财经知识解说 · 50 页动效包

<a href="https://media.openaicut.com/covers/955/1.0.0-zh-0e72c700e15b.jpg"><img src="https://media.openaicut.com/covers/955/1.0.0-zh-0e72c700e15b.jpg" alt="财经知识解说 · 50 页动效包 · 横屏" width="640"></a>

风格的财经/知识解说动效包：16:9 横屏，50 种动画页面，按句子类型选页、参数驱动。含数字滚动、柱状/折线/占比图表、印章、新闻卡片、打字机金句、地图路线、关系网络、时间线、对比表格、白闪转场等，每页自带音效。示例数据均为虚构。

#126246 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/955/1.0.0-zh-a4f8c3690cc4.mp4](https://media.openaicut.com/previews/955/1.0.0-zh-a4f8c3690cc4.mp4)

官网下载 .motion：[https://motiongit.com/@erictan88315/finance-explainer-50](https://motiongit.com/@erictan88315/finance-explainer-50)

### 106. 财经解读 · 竖屏信息卡

<a href="https://media.openaicut.com/covers/956/0.1.0-zh-c62f19df3658.jpg"><img src="https://media.openaicut.com/covers/956/0.1.0-zh-c62f19df3658.jpg" alt="财经解读 · 竖屏信息卡" width="202"></a>

用深色科技底、数据大字卡和三条方向，把一条财经信息讲成 24 秒竖屏片

#685275 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v0.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/956/0.1.0-zh-02d9a1fe80b8.mp4](https://media.openaicut.com/previews/956/0.1.0-zh-02d9a1fe80b8.mp4)

官网下载 .motion：[https://motiongit.com/@guo-factory/finance-cards-zh](https://motiongit.com/@guo-factory/finance-cards-zh)

### 107. 科技办公类解说 · AI Office Explainer Kit

<a href="https://media.openaicut.com/covers/957/0.3.0-zh-3483d60a8887.jpg"><img src="https://media.openaicut.com/covers/957/0.3.0-zh-3483d60a8887.jpg" alt="科技办公类解说 · AI Office Explainer Kit · 横屏" width="640"></a>

AI/科技/办公类知识解说图形包：30 种场景（13 种参考重建 + 17 种原创同风格），按句子类型自动选场景，支持叠化转场（缩放模糊/擦除/翻转/白闪等）、程序化音效、真人口播帧序列接入。全部图形代码绘制，演示数据为虚构示例。1920×1080 / 30fps。

#613979 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v0.3.0

Demo 视频：[▶ https://media.openaicut.com/previews/957/0.3.0-zh-3d67627220b5.mp4](https://media.openaicut.com/previews/957/0.3.0-zh-3d67627220b5.mp4)

官网下载 .motion：[https://motiongit.com/@erictan88315/ai-office-kit](https://motiongit.com/@erictan88315/ai-office-kit)

### 108. 青柠口播版 46场景动效模板

<a href="https://media.openaicut.com/covers/964/1.0.0-cf0af3e1323b.jpg"><img src="https://media.openaicut.com/covers/964/1.0.0-cf0af3e1323b.jpg" alt="青柠口播版 46场景动效模板 · 竖屏" width="202"></a>

荧光绿+深绿竖屏口播动效模板：46个场景（含5个口播专用新场景），每个场景都预留随动效移动的圆角真人口播位，重点句可全屏。按SRT时间轴配置场景，自带转场与音效，1080×1920 60fps。

#776256 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/964/1.0.0-zh-dbeed979c143.mp4](https://media.openaicut.com/previews/964/1.0.0-zh-dbeed979c143.mp4)

官网下载 .motion：[https://motiongit.com/@erictan88315/green-ecosystem-presenter](https://motiongit.com/@erictan88315/green-ecosystem-presenter)

### 109. AI自动剪辑真的来了

<a href="https://media.openaicut.com/covers/966/1.0.0-zh-ad13e3c51d1f.jpg"><img src="https://media.openaicut.com/covers/966/1.0.0-zh-ad13e3c51d1f.jpg" alt="AI自动剪辑真的来了 · 横屏" width="640"></a>

33秒真实智能体剪辑过程展示：素材筛选、OpenFilm对话与时间线操作、成片播放和MG标注。无旁白，音乐与现成音效配合画面节奏。支持替换文案、六色色板、媒体和混音。

#982226 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/966/1.0.0-zh-1b0079fe50d2.mp4](https://media.openaicut.com/previews/966/1.0.0-zh-1b0079fe50d2.mp4)

官网下载 .motion：[https://motiongit.com/@chenjunfeng5208/ai-auto-edit-mg](https://motiongit.com/@chenjunfeng5208/ai-auto-edit-mg)

### 110. 点阵肖像

<a href="https://media.openaicut.com/covers/968/1.5.0-a8440eedce33.jpg"><img src="https://media.openaicut.com/covers/968/1.5.0-a8440eedce33.jpg" alt="点阵肖像 · 横屏" width="640"></a>

三张人像化为流动的双色网点、散开再汇聚成标题的横屏开场；可配口播、配乐、镜头音效与字幕

#933005 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.5.0

Demo 视频：[▶ https://media.openaicut.com/previews/968/1.0.0-a409f53e4cae.mp4](https://media.openaicut.com/previews/968/1.0.0-a409f53e4cae.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/dotmatrix-portrait-v1](https://motiongit.com/@fangcs/dotmatrix-portrait-v1)

### 111. 【子布】黑金文字模板素材

<a href="https://media.openaicut.com/covers/971/1.0.0-zh-9a06704db548.jpg"><img src="https://media.openaicut.com/covers/971/1.0.0-zh-9a06704db548.jpg" alt="【子布】黑金文字模板素材 · 横屏" width="640"></a>

新版20秒原始动画的固定时间轴模板。使用短关键词、计数、三个来源、汇聚与界面展开表达资料处理过程。

#212706 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/971/1.0.0-zh-38719b24de58.mp4](https://media.openaicut.com/previews/971/1.0.0-zh-38719b24de58.mp4)

官网下载 .motion：[https://motiongit.com/@zibu/vibe-sucai1](https://motiongit.com/@zibu/vibe-sucai1)

### 112. 空间智能 · 数字城市光场模板

<a href="https://media.openaicut.com/covers/974/1.0.0-zh-3b732ef91f6d.jpg"><img src="https://media.openaicut.com/covers/974/1.0.0-zh-3b732ef91f6d.jpg" alt="空间智能 · 数字城市光场模板 · 横屏" width="640"></a>

9 页抽象发光蓝色数字科技科普片：从空间感知到空间智能，再到共享空间上下文，完整保留 71.8 秒口播、BGM 与动效。

#628185 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/974/1.0.0-zh-3a9b6ea7c10e.mp4](https://media.openaicut.com/previews/974/1.0.0-zh-3a9b6ea7c10e.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/science-spatial-field-motion](https://motiongit.com/@nxxxxxx/science-spatial-field-motion)

### 113. 07 影子的边缘为什么是虚的 · 半影模板

<a href="https://media.openaicut.com/covers/975/1.0.0-zh-a3bb2e563659.jpg"><img src="https://media.openaicut.com/covers/975/1.0.0-zh-a3bb2e563659.jpg" alt="07 影子的边缘为什么是虚的 · 半影模板 · 横屏" width="640"></a>

9 页米色纸感科普片：同一根杆的十二种边缘、点光源与盘光源对比、本影/半影几何，以及每远一米软九毫米的半影尺。完整保留 57.2 秒中文口播与混音。

#975 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/975/1.0.0-zh-9ff32ae0745b.mp4](https://media.openaicut.com/previews/975/1.0.0-zh-9ff32ae0745b.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/science-shadow-motion](https://motiongit.com/@nxxxxxx/science-shadow-motion)

### 114. 01 火星的日落为什么是蓝的 · 蓝暮模板

<a href="https://media.openaicut.com/covers/976/1.0.0-zh-1444772c509d.jpg"><img src="https://media.openaicut.com/covers/976/1.0.0-zh-1444772c509d.jpg" alt="01 火星的日落为什么是蓝的 · 蓝暮模板 · 横屏" width="640"></a>

8 页暗底橙沙、蓝色暮光的科普片：火星大气把太阳直射光筛成蓝，沙尘又把蓝光散开；从“太阳是白/黄”到“日落后天空发蓝”的因果链。完整保留 56.6 秒中文口播与混音。

#976 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/976/1.0.0-zh-64c361226266.mp4](https://media.openaicut.com/previews/976/1.0.0-zh-64c361226266.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/science-mars-sunset-motion](https://motiongit.com/@nxxxxxx/science-mars-sunset-motion)

### 115. 03 夜间声音为什么传得更远 · 逆温层模板

<a href="https://media.openaicut.com/covers/977/1.0.0-zh-cff00659a56b.jpg"><img src="https://media.openaicut.com/covers/977/1.0.0-zh-cff00659a56b.jpg" alt="03 夜间声音为什么传得更远 · 逆温层模板 · 横屏" width="640"></a>

9 页深蓝夜色、青色声线与橙色温度层的科普片：不是夜里更安静，也不是空气变重，而是逆温层让声音向上折射、绕过障碍传得更远。完整保留 58.2 秒中文口播与混音。

#977 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/977/1.0.0-zh-1be1cd5a2b61.mp4](https://media.openaicut.com/previews/977/1.0.0-zh-1be1cd5a2b61.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/science-night-sound-motion](https://motiongit.com/@nxxxxxx/science-night-sound-motion)

### 116. Miss you 赛博像素 · 蓝白半入耳耳机产品宣传模板

<a href="https://media.openaicut.com/covers/978/1.0.0-en-fbecfa61532b.jpg"><img src="https://media.openaicut.com/covers/978/1.0.0-en-fbecfa61532b.jpg" alt="Miss you 赛博像素 · 蓝白半入耳耳机产品宣传模板 · 横屏" width="640"></a>

45 秒九页赛博朋克＋像素风的蓝白半入耳蓝牙耳机产品宣传：降噪、音质、AI 同传、30 小时续航、无线充电五项功能逐页落成画面读数，英文口播＋中文字幕，收尾不出价格。

#868354 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/978/1.0.0-en-f99d9bc0f1ad.mp4](https://media.openaicut.com/previews/978/1.0.0-en-f99d9bc0f1ad.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/missyou-cyber-pixel](https://motiongit.com/@nxxxxxx/missyou-cyber-pixel)

### 117. 科技数据可视化 MG Reel

<a href="https://media.openaicut.com/covers/987/draft-001a499123a5.jpg"><img src="https://media.openaicut.com/covers/987/draft-001a499123a5.jpg" alt="科技数据可视化 MG Reel · 横屏" width="640"></a>

25 秒、16:9 深色科技风数据可视化 MG 短片：开场标题字、增长折线/柱状图与 KPI 卡、节点网络脉冲流、三张产品 UI 卡片、品牌落版五段连续动效。画面由 HTML/CSS/SVG 逐帧驱动，配本地原创合成 BGM；图表与 KPI 数字为演示占位，复用时替换为真实数据。

#183462 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/987/draft-6a7000ba8398.mp4](https://media.openaicut.com/previews/987/draft-6a7000ba8398.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/data-viz-mg-reel](https://motiongit.com/@nxxxxxx/data-viz-mg-reel)

### 118. 火候 · HEAT &amp; TIMING

<a href="https://media.openaicut.com/covers/988/1.0.1-202bcd2e9739.jpg"><img src="https://media.openaicut.com/covers/988/1.0.1-202bcd2e9739.jpg" alt="火候 · HEAT &amp; TIMING · 竖屏" width="202"></a>

餐饮后厨的「温度×时间」节奏片：暗棕黑＋炭火橙＋宋体，24 秒五镜快切，落版的中文总结与英文副标可直接改。

#339190 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/988/1.0.1-4a5b65911cdc.mp4](https://media.openaicut.com/previews/988/1.0.1-4a5b65911cdc.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/huohou-heat](https://motiongit.com/@nxxxxxx/huohou-heat)

### 119. 流 · CURRENT

<a href="https://media.openaicut.com/covers/989/1.0.1-0c56287c495c.jpg"><img src="https://media.openaicut.com/covers/989/1.0.1-0c56287c495c.jpg" alt="流 · CURRENT · 竖屏" width="202"></a>

新能源的「风—网—储—轮」传导片：近黑底＋薄荷绿＋工程细线＋等宽字，24 秒五镜推进，落版链条与英文副标可改。

#717274 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/989/1.0.1-e08a0bce98fc.mp4](https://media.openaicut.com/previews/989/1.0.1-e08a0bce98fc.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/liu-current](https://motiongit.com/@nxxxxxx/liu-current)

### 120. 杂志风香水品牌故事 Reel

<a href="https://media.openaicut.com/covers/990/draft-43d03ea9f38e.jpg"><img src="https://media.openaicut.com/covers/990/draft-43d03ea9f38e.jpg" alt="杂志风香水品牌故事 Reel · 横屏" width="640"></a>

25 秒 16:9 暖米白杂志风香水品牌故事 MG：封面标题与香水瓶穿插浮入、品牌引文、Field Note 杂志卡片、居中产品配场景徽章、品牌落版五段连续动效，配本地原创合成 BGM。

#254418 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.3

Demo 视频：[▶ https://media.openaicut.com/previews/990/draft-569e3ff304da.mp4](https://media.openaicut.com/previews/990/draft-569e3ff304da.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/perfume-editorial-reel](https://motiongit.com/@nxxxxxx/perfume-editorial-reel)

### 121. ESCAPEMENT · 擒纵（腕表机芯）

<a href="https://media.openaicut.com/covers/991/1.0.0-8d8d340a356f.jpg"><img src="https://media.openaicut.com/covers/991/1.0.0-8d8d340a356f.jpg" alt="ESCAPEMENT · 擒纵（腕表机芯） · 横屏" width="640"></a>

一支 25 秒的暗场腕表机芯动效片：俯视轮系推进到擒纵叉与红宝石瓦的咬合，再把机芯剖成四层薄板拉开，最后缩回 38mm 真实尺寸并落在卡面。五镜、1920×1080、30fps；标题、副题、规格行与署名都可直接改。

#259554 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/991/1.0.0-2b91c13ae88f.mp4](https://media.openaicut.com/previews/991/1.0.0-2b91c13ae88f.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/escapement-watch-study](https://motiongit.com/@nxxxxxx/escapement-watch-study)

### 122. ONE FLOOR · 一层（图书馆轴测）

<a href="https://media.openaicut.com/covers/992/1.0.0-788bf8fd8c1a.jpg"><img src="https://media.openaicut.com/covers/992/1.0.0-788bf8fd8c1a.jpg" alt="ONE FLOOR · 一层（图书馆轴测） · 横屏" width="640"></a>

一支 24.6 秒的纸白轴测线稿动效片：地平线先长出来，26 米书架的书脊一排排铺入，一道光从左扫过把书脊上的墨擦白，读者走进来站定，最后落在卡面。五镜、1920×1080、30fps；标题、副题、规格行与署名都可直接改。

#992 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/992/1.0.0-85fa0c27f734.mp4](https://media.openaicut.com/previews/992/1.0.0-85fa0c27f734.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/one-floor-axonometric](https://motiongit.com/@nxxxxxx/one-floor-axonometric)

### 123. 冰原档案 · Polar Archive

<a href="https://media.openaicut.com/covers/993/1.0.0-b3c9953a0906.jpg"><img src="https://media.openaicut.com/covers/993/1.0.0-b3c9953a0906.jpg" alt="冰原档案 · Polar Archive · 横屏" width="640"></a>

47 秒五镜档案式 MG：数字开场、编队清单、年份时间轴、冰芯剖面、极光收尾。四张照片与全部文案可替换，冷色冰原视觉，四种划像吃掉切点。

#606177 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/993/1.0.0-ed919f21e308.mp4](https://media.openaicut.com/previews/993/1.0.0-ed919f21e308.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/polar-archive](https://motiongit.com/@nxxxxxx/polar-archive)

### 124. SWEEP · 协作机械臂扫描 MG

<a href="https://media.openaicut.com/covers/994/1.0.0-f73048fb4d5f.jpg"><img src="https://media.openaicut.com/covers/994/1.0.0-f73048fb4d5f.jpg" alt="SWEEP · 协作机械臂扫描 MG · 横屏" width="640"></a>

31 秒 16:9 工业协作机械臂概念短片模板：激光扫描 → 点云拟合 → 六轴 IK 逼近抓取 → 48 姿态单帧曝光 → 尾卡。标题、中英主张、四镜标签与四个色值可替换。

#979726 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/994/1.0.0-8a0e5eb50fc5.mp4](https://media.openaicut.com/previews/994/1.0.0-8a0e5eb50fc5.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/sweep-cobot-arm](https://motiongit.com/@nxxxxxx/sweep-cobot-arm)

### 125. Nimbus 冷萃咖啡机 · 30 秒竖屏动效片

<a href="https://media.openaicut.com/covers/1001/1.0.1-en-b7b288abd8e2.jpg"><img src="https://media.openaicut.com/covers/1001/1.0.1-en-b7b288abd8e2.jpg" alt="Nimbus 冷萃咖啡机 · 30 秒竖屏动效片" width="202"></a>

30 秒竖屏产品动效片：11 个镜头从「冷萃要等一整夜」讲到「30 秒出一杯」，28 个扁平参数可换品牌名、两行主张、三步序号、8 句中英字幕与底色。画面全部由 CSS 几何与 Canvas 逐帧绘制，无外部图片。

#1001 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/1001/1.0.1-en-9cb8c4a6b4f3.mp4](https://media.openaicut.com/previews/1001/1.0.1-en-9cb8c4a6b4f3.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/nimbus-cold-brew-30s](https://motiongit.com/@nxxxxxx/nimbus-cold-brew-30s)

### 126. 暗场极客知识口播

<a href="https://media.openaicut.com/covers/1002/1.3.1-26e2f2497470.jpg"><img src="https://media.openaicut.com/covers/1002/1.3.1-26e2f2497470.jpg" alt="暗场极客知识口播 · 横屏" width="640"></a>

暗场科技风知识口播模板：脚本自动映射镜头，可按口播定长，接配乐音效与 SRT 字幕，成片无署名无时码

#959430 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.3.1

Demo 视频：[▶ https://media.openaicut.com/previews/1002/1.0.1-zh-6dcca01e48ee.mp4](https://media.openaicut.com/previews/1002/1.0.1-zh-6dcca01e48ee.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/geek-dark-talk-v1](https://motiongit.com/@fangcs/geek-dark-talk-v1)

### 127. 同一张报纸 · 深靛黄铜知识讲解动画

<a href="https://media.openaicut.com/covers/1003/1.0.1-zh-5a5e1b90f4ba.jpg"><img src="https://media.openaicut.com/covers/1003/1.0.1-zh-5a5e1b90f4ba.jpg" alt="同一张报纸 · 深靛黄铜知识讲解动画 · 横屏" width="640"></a>

54 秒知识讲解动画模板：深靛黄铜报纸宇宙，三层连续镜头 + 18 站导轨 + 实体剪报，全程零人物、零外部依赖。字幕、关键行、金句等 20+ 组文案可替换，默认参数与演示成片逐帧一致。

#119278 · 横屏 · 16:9 · 1920 × 1080 · 24 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/1003/1.0.1-zh-9cb7433c1668.mp4](https://media.openaicut.com/previews/1003/1.0.1-zh-9cb7433c1668.mp4)

官网下载 .motion：[https://motiongit.com/@qhx-hx/same-newspaper](https://motiongit.com/@qhx-hx/same-newspaper)

### 128. BP-01 · 杯壁里的三层（蓝图剖面 43s）

<a href="https://media.openaicut.com/covers/1186/1.0.0-zh-027b0e238c36.jpg"><img src="https://media.openaicut.com/covers/1186/1.0.0-zh-027b0e238c36.jpg" alt="BP-01 · 杯壁里的三层（蓝图剖面 43s） · 竖屏" width="270"></a>

深蓝工程蓝图剖面讲解：把真空保温杯切开，拆出外壳、真空夹层、内胆、内腔，再画出传导/对流/辐射三条热路。

#312403 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1186/1.0.0-zh-a9d39fe01562.mp4](https://media.openaicut.com/previews/1186/1.0.0-zh-a9d39fe01562.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/vacuum-wall-three-layers](https://motiongit.com/@nxxxxxx/vacuum-wall-three-layers)

### 129. HUD-02 · 手机电量在猜（仪表 HUD 41s）

<a href="https://media.openaicut.com/covers/1187/1.0.0-zh-41a09ffdb2fa.jpg"><img src="https://media.openaicut.com/covers/1187/1.0.0-zh-41a09ffdb2fa.jpg" alt="HUD-02 · 手机电量在猜（仪表 HUD 41s） · 竖屏" width="270"></a>

近黑底荧光绿仪表 HUD 讲解：把电量百分比当成一块仪表读数来审，从 100% 掉到 1%，拆开电压、库仑计、温度与老化四条误差来源，落在「它不是读数，是估计」。

#979508 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1187/1.0.0-zh-d00eaea69cbd.mp4](https://media.openaicut.com/previews/1187/1.0.0-zh-d00eaea69cbd.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/battery-guess-hud](https://motiongit.com/@nxxxxxx/battery-guess-hud)

### 130. GL-03 · 打火机里那滴液体（玻璃折射 46s）

<a href="https://media.openaicut.com/covers/1188/1.0.0-zh-e9614e11f48c.jpg"><img src="https://media.openaicut.com/covers/1188/1.0.0-zh-e9614e11f48c.jpg" alt="GL-03 · 打火机里那滴液体（玻璃折射 46s） · 竖屏" width="270"></a>

米白纸底暖橙玻璃折射的九镜讲解：从打火机里那一小滴丁烷开始，讲它在常压下被压成液体、一松手膨胀两百多倍变成气体，再讲火焰为什么是蓝的、为什么会有黄尖。适合「一小滴液体凭什么撑起一团火」的物理解释。

#817295 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1188/1.0.0-zh-c0a979b1402c.mp4](https://media.openaicut.com/previews/1188/1.0.0-zh-c0a979b1402c.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/lighter-butane-drop](https://motiongit.com/@nxxxxxx/lighter-butane-drop)

### 131. WC-04 · 湖从上往下冻（水彩层 44s）

<a href="https://media.openaicut.com/covers/1189/1.0.0-zh-951556698503.jpg"><img src="https://media.openaicut.com/covers/1189/1.0.0-zh-951556698503.jpg" alt="WC-04 · 湖从上往下冻（水彩层 44s） · 竖屏" width="270"></a>

水彩分层讲解：湖面先结一层冰，冰下的水按 0℃/2℃/4℃ 分层，四度最重沉在底，于是整座湖从上往下冻，鱼虾在四度那层水里过冬。

#707791 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1189/1.0.0-zh-f41172446401.mp4](https://media.openaicut.com/previews/1189/1.0.0-zh-f41172446401.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/lake-freezes-top-down](https://motiongit.com/@nxxxxxx/lake-freezes-top-down)

### 132. 一杯咖啡的旅程 · 数据故事 MG 模板

<a href="https://media.openaicut.com/covers/1190/1.0.0-zh-8abbf734262d.jpg"><img src="https://media.openaicut.com/covers/1190/1.0.0-zh-8abbf734262d.jpg" alt="一杯咖啡的旅程 · 数据故事 MG 模板 · 横屏" width="640"></a>

六镜连贯的咖啡/饮品主题数据故事 MG：产地 → 烘焙 → 萃取 → 数据一览。深咖暗场 + 焦糖金配色，豆形、圆环、金粒母题贯穿。标题、产地、卖点、三组数据、标语与配色均可在参数中替换；16:9、30fps、固定 25 秒，无旁白。适合品牌短片、产品介绍与作品集横屏展示；默认数

#717348 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1190/1.0.0-zh-7a8000e93a6c.mp4](https://media.openaicut.com/previews/1190/1.0.0-zh-7a8000e93a6c.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/coffee-espresso-mg](https://motiongit.com/@nxxxxxx/coffee-espresso-mg)

### 133. 一颗电池的一生 · 循环科普 MG

<a href="https://media.openaicut.com/covers/1192/1.0.0-zh-a0c87027f9ca.jpg"><img src="https://media.openaicut.com/covers/1192/1.0.0-zh-a0c87027f9ca.jpg" alt="一颗电池的一生 · 循环科普 MG · 竖屏" width="270"></a>

30 秒六镜电池循环科普 MG，3:4 竖版 1080×1440、30fps。取材→制造→使用→回收再生→材料回到起点，暗场绿蓝科技配色。标题、讲解、标签与五套配色可替换，BGM/音效随包；默认内容为演示占位。

#751026 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1192/1.0.0-zh-6c622205059a.mp4](https://media.openaicut.com/previews/1192/1.0.0-zh-6c622205059a.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/battery-life-mg](https://motiongit.com/@nxxxxxx/battery-life-mg)

### 134. 一颗芯片的旅程

<a href="https://media.openaicut.com/covers/1195/1.0.0-zh-419fe10e899f.jpg"><img src="https://media.openaicut.com/covers/1195/1.0.0-zh-419fe10e899f.jpg" alt="一颗芯片的旅程 · 竖屏" width="270"></a>

45 秒竖屏科技科普 MG：一粒砂经六道工序变成一颗会算数的芯片。晶圆—划片—封装—主板—散热—落版，等轴测几何与青色数据光点贯穿全片，开篇点题卡可改标题与副标题。

#817116 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1195/1.0.0-zh-9f00c9190983.mp4](https://media.openaicut.com/previews/1195/1.0.0-zh-9f00c9190983.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/chip-journey](https://motiongit.com/@nxxxxxx/chip-journey)

### 135. 暖棕奶油线稿知识讲解

<a href="https://media.openaicut.com/covers/1196/1.0.0-zh-8edad0c66a9a.jpg"><img src="https://media.openaicut.com/covers/1196/1.0.0-zh-8edad0c66a9a.jpg" alt="暖棕奶油线稿知识讲解 · 竖屏" width="202"></a>

用竖屏暖棕底、奶油手绘线稿和金色关键词，做没有口播的知识讲解或读书笔记视频。默认 Demo 是《原则》书籍讲解，完整时长 100.833 秒。

#124205 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1196/1.0.0-zh-5df7dda48b3f.mp4](https://media.openaicut.com/previews/1196/1.0.0-zh-5df7dda48b3f.mp4)

官网下载 .motion：[https://motiongit.com/@skgaga/warm-cream-line-knowledge](https://motiongit.com/@skgaga/warm-cream-line-knowledge)

### 136. 未来的低空生活 · 科普 MG 口播模板

<a href="https://media.openaicut.com/covers/1197/draft-zh-4b7e379f11c7.jpg"><img src="https://media.openaicut.com/covers/1197/draft-zh-4b7e379f11c7.jpg" alt="未来的低空生活 · 科普 MG 口播模板 · 竖屏" width="202"></a>

竖屏 9:16 低空经济科普 MG 口播模板，11 段递进叙事，浅底蓝灰线稿风；人物画中画占位窗随镜头连续形变，镜间交叉叠化；可替换开场标题，其余要点文案与机型图标为默认演示内容。

#913266 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.2

Demo 视频：[▶ https://media.openaicut.com/previews/1197/draft-zh-68e7f2412eca.mp4](https://media.openaicut.com/previews/1197/draft-zh-68e7f2412eca.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/low-altitude-life-mg](https://motiongit.com/@nxxxxxx/low-altitude-life-mg)

### 137. 3D粒子

<a href="https://media.openaicut.com/covers/1198/1.3.1-759b8e33b0d2.jpg"><img src="https://media.openaicut.com/covers/1198/1.3.1-759b8e33b0d2.jpg" alt="3D粒子 · 横屏" width="640"></a>

4200 颗粒子在八个三维形状间连续形变的横屏动效短片：球体、环面、双螺旋、立方体、黑洞漩涡、空间折叠、量子纠缠、神经蜂巢，结尾淡入一行底部文字。适合开场、章节转场和科技感视觉铺垫。

#205178 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.3.1

Demo 视频：[▶ https://media.openaicut.com/previews/1198/1.3.1-524c22d299b9.mp4](https://media.openaicut.com/previews/1198/1.3.1-524c22d299b9.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/particle-form-morph-v1](https://motiongit.com/@fangcs/particle-form-morph-v1)

### 138. 卡在最后一格 · 竖向队列进度条

<a href="https://media.openaicut.com/covers/1199/1.0.0-zh-ff42b15c0d79.jpg"><img src="https://media.openaicut.com/covers/1199/1.0.0-zh-ff42b15c0d79.jpg" alt="卡在最后一格 · 竖向队列进度条 · 竖屏" width="202"></a>

竖屏 1080×1920 极简数据队列动效：进度条卡在末格、单口时间窗、丢包重传。适合讲上传、排队、阻塞、传输效率。

#844262 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1199/1.0.0-zh-aaf8ded850cf.mp4](https://media.openaicut.com/previews/1199/1.0.0-zh-aaf8ded850cf.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/card-last-slot](https://motiongit.com/@nxxxxxx/card-last-slot)

### 139. 搬运比计算更贵 · 热成像数据流

<a href="https://media.openaicut.com/covers/1200/1.0.0-zh-82658b5fff8e.jpg"><img src="https://media.openaicut.com/covers/1200/1.0.0-zh-82658b5fff8e.jpg" alt="搬运比计算更贵 · 热成像数据流 · 竖屏" width="202"></a>

热成像语言解释内存瓶颈：核心阵列、缓存带、总线电荷、节流阀、帧率阶梯。适合讲性能、发热、降频、带宽。

#330359 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1200/1.0.0-zh-59179def699a.mp4](https://media.openaicut.com/previews/1200/1.0.0-zh-59179def699a.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/move-not-compute](https://motiongit.com/@nxxxxxx/move-not-compute)

### 140. 左右不在一个钟上 · 纸白时基

<a href="https://media.openaicut.com/covers/1201/1.0.0-zh-faef4998a233.jpg"><img src="https://media.openaicut.com/covers/1201/1.0.0-zh-faef4998a233.jpg" alt="左右不在一个钟上 · 纸白时基 · 竖屏" width="202"></a>

纸白印刷体双时基动效：毫秒标尺、双耳错位、声像偏移、最终对齐。适合讲延迟、同步、时基偏差。

#560835 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1201/1.0.0-zh-2924ecbc7891.mp4](https://media.openaicut.com/previews/1201/1.0.0-zh-2924ecbc7891.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/two-clocks](https://motiongit.com/@nxxxxxx/two-clocks)

### 141. 连拍为什么存不进去 · 工业管线

<a href="https://media.openaicut.com/covers/1202/1.0.0-zh-c4086e28a5cd.jpg"><img src="https://media.openaicut.com/covers/1202/1.0.0-zh-c4086e28a5cd.jpg" alt="连拍为什么存不进去 · 工业管线 · 竖屏" width="202"></a>

工业流线语言解释写入瓶颈：四段闸门、罐体溢帧、传送带、上限对照。适合讲吞吐、缓冲、瓶颈定位。

#193809 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1202/1.0.0-zh-74ba0c34d5f5.mp4](https://media.openaicut.com/previews/1202/1.0.0-zh-74ba0c34d5f5.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/burst-wont-save](https://motiongit.com/@nxxxxxx/burst-wont-save)

### 142. 十年，十层 · 层叠结构讲解

<a href="https://media.openaicut.com/covers/1204/1.0.0-zh-1ae6e5c8120e.jpg"><img src="https://media.openaicut.com/covers/1204/1.0.0-zh-1ae6e5c8120e.jpg" alt="十年，十层 · 层叠结构讲解 · 竖屏" width="270"></a>

3:4 竖屏结构讲解模板：一台冷萃机按时间线一层一层装配起来，每落一层配一块图解、一句它解决什么，最后把等待时间压成一句结论。可改标题、栏目小标、三个问题标签、结论两端值与十层文案配色。

#436943 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1204/1.0.0-zh-d7fe26fb80ed.mp4](https://media.openaicut.com/previews/1204/1.0.0-zh-d7fe26fb80ed.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/ten-layers-structure-30s](https://motiongit.com/@nxxxxxx/ten-layers-structure-30s)

### 143. 赣州 · 一镜到底 · 城市横移

<a href="https://media.openaicut.com/covers/1205/1.0.0-zh-d9fe629247db.jpg"><img src="https://media.openaicut.com/covers/1205/1.0.0-zh-d9fe629247db.jpg" alt="赣州 · 一镜到底 · 城市横移 · 竖屏" width="270"></a>

3:4 竖屏一镜到底城市片：整片一个镜头不切，天光从黎明走到入夜，城墙与楼阁横移越过日轮，江面有船、有浮桥开合，入夜后灯一盏盏亮起；底部四段介绍依次换内容，建筑标注贴着基座跟着走。可改城市名、地点行、四段介绍、浮桥与入夜两句、六个剪影地标与六个颜色。

#164990 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1205/1.0.0-zh-7527022b2acc.mp4](https://media.openaicut.com/previews/1205/1.0.0-zh-7527022b2acc.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/ganzhou-one-take-40s](https://motiongit.com/@nxxxxxx/ganzhou-one-take-40s)

### 144. 三十四省双景 · 一镜到底（3:4 / 119s）

<a href="https://media.openaicut.com/covers/1207/1.0.0-zh-2b8dfc1ed39e.jpg"><img src="https://media.openaicut.com/covers/1207/1.0.0-zh-2b8dfc1ed39e.jpg" alt="三十四省双景 · 一镜到底（3:4 / 119s） · 竖屏" width="270"></a>

34 个省级行政区横向一镜到底：每区约 3.5 秒，剪影连续左移不跳切；滑到半屏时旧背景淡出、新背景淡入，同一处地标先看一套天光再换一套。地名、拉丁名、一句事实、两个时间标签都可替换。

#150269 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1207/1.0.0-zh-fdd04a4541c2.mp4](https://media.openaicut.com/previews/1207/1.0.0-zh-fdd04a4541c2.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/provinces-one-take-119s](https://motiongit.com/@nxxxxxx/provinces-one-take-119s)

### 145. 澄野 Halo One · 产品说明三集

<a href="https://media.openaicut.com/covers/1208/1.0.0-zh-d29b38bf420b.jpg"><img src="https://media.openaicut.com/covers/1208/1.0.0-zh-d29b38bf420b.jpg" alt="澄野 Halo One · 产品说明三集 · 竖屏" width="202"></a>

竖屏 MG 说明片：一颗空气净化模块，三集讲清「洗干净一间房、拆开看它凭什么、什么时候不划算」。54 条文案与 4 个主色可替换。

#419502 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1208/1.0.0-zh-3860ddfb096b.mp4](https://media.openaicut.com/previews/1208/1.0.0-zh-3860ddfb096b.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/halo-one-series](https://motiongit.com/@nxxxxxx/halo-one-series)

### 146. PortaPress 便携咖啡机 · 横版产品宣发

<a href="https://media.openaicut.com/covers/1209/draft-c86159881cad.jpg"><img src="https://media.openaicut.com/covers/1209/draft-c86159881cad.jpg" alt="PortaPress 便携咖啡机 · 横版产品宣发 · 横屏" width="640"></a>

暖咖杂志风横版产品宣发片，九镜完整流程，中英双语字幕。

#451049 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1209/draft-148a948b40a1.mp4](https://media.openaicut.com/previews/1209/draft-148a948b40a1.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/portapress-promo-landscape](https://motiongit.com/@nxxxxxx/portapress-promo-landscape)

### 147. PortaPress 便携咖啡机 · 竖版产品宣发

<a href="https://media.openaicut.com/covers/1210/draft-56628278ba9c.jpg"><img src="https://media.openaicut.com/covers/1210/draft-56628278ba9c.jpg" alt="PortaPress 便携咖啡机 · 竖版产品宣发 · 竖屏" width="270"></a>

暖咖杂志风竖版产品宣发片：上下分层满版布局、产品特写与步骤卡片；中英双语硬字幕（中文在上、英文在下），七镜完整流程。

#215136 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1210/draft-a2ff3adb5af0.mp4](https://media.openaicut.com/previews/1210/draft-a2ff3adb5af0.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/portapress-promo-portrait](https://motiongit.com/@nxxxxxx/portapress-promo-portrait)

### 148. VoltX 户外储能电源 · 横版产品宣发

<a href="https://media.openaicut.com/covers/1211/draft-01a4785ff370.jpg"><img src="https://media.openaicut.com/covers/1211/draft-01a4785ff370.jpg" alt="VoltX 户外储能电源 · 横版产品宣发 · 横屏" width="640"></a>

冷调科技风横版产品宣发片：深色 HUD 界面、电量与功率数据面板、接口规格与露营/自驾/家用三场景；中英双语硬字幕（中文在上、英文在下），九镜完整流程。

#328284 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1211/draft-bda307a2233c.mp4](https://media.openaicut.com/previews/1211/draft-bda307a2233c.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/voltx-promo-landscape](https://motiongit.com/@nxxxxxx/voltx-promo-landscape)

### 149. 一条线，九种活法 · One Line, Nine Lives

<a href="https://media.openaicut.com/covers/1213/1.0.0-zh-532501f1d799.jpg"><img src="https://media.openaicut.com/covers/1213/1.0.0-zh-532501f1d799.jpg" alt="一条线，九种活法 · One Line, Nine Lives · 横屏" width="640"></a>

53 秒横版 MG 作品集短片：一条 1px 线在十个镜头里九次变形，展示动效与排版能力。改标题、十镜主句与信号色即可复用自己的内容。

#696921 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1213/1.0.0-zh-184556ec3803.mp4](https://media.openaicut.com/previews/1213/1.0.0-zh-184556ec3803.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/one-line-nine-lives](https://motiongit.com/@nxxxxxx/one-line-nine-lives)

### 150. 智能恒温随行杯 · MG 产品宣发片

<a href="https://media.openaicut.com/covers/1215/1.0.0-zh-2104173898b5.jpg"><img src="https://media.openaicut.com/covers/1215/1.0.0-zh-2104173898b5.jpg" alt="智能恒温随行杯 · MG 产品宣发片 · 横屏" width="640"></a>

30 秒横屏 MG 产品宣发模板：粒子聚合成杯、痛点卡片、产品亮相、结构爆炸拆解、数据图表到品牌定格；暖橙加青蓝配色，含垫底 BGM 与点位音效，可替换品牌名、英文名与 slogan。

#574617 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1215/1.0.0-zh-baeb87c57bbc.mp4](https://media.openaicut.com/previews/1215/1.0.0-zh-baeb87c57bbc.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/aurora-mug-product-promo](https://motiongit.com/@nxxxxxx/aurora-mug-product-promo)

### 151. 水墨书法标题卡

<a href="https://media.openaicut.com/covers/1216/1.0.4-zh-6edcbe1a2f44.jpg"><img src="https://media.openaicut.com/covers/1216/1.0.4-zh-6edcbe1a2f44.jpg" alt="水墨书法标题卡 · 横屏" width="640"></a>

3 秒国风水墨书法标题片段：墨笔横扫入场、书法大字遮罩渐显、朱砂细线与随形印章落款，透明背景可直接叠加到任意画面，自带画卷展开式环境声。

#112052 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.4

Demo 视频：[▶ https://media.openaicut.com/previews/1216/1.0.4-zh-46d64f694389.mp4](https://media.openaicut.com/previews/1216/1.0.4-zh-46d64f694389.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/ink-brush-title](https://motiongit.com/@fangcs/ink-brush-title)

### 152. 卡通涂鸦片头

<a href="https://media.openaicut.com/covers/1217/1.0.2-d716a999d465.jpg"><img src="https://media.openaicut.com/covers/1217/1.0.2-d716a999d465.jpg" alt="卡通涂鸦片头 · 横屏" width="640"></a>

5 秒卡通手绘风片头片段：黄色涂鸦笔刷生长、彩色手写标题逐字弹入，配枫叶、蝴蝶、相机、叶枝手绘装饰与轻快镜头音效，透明背景可叠加到任意视频开头。

#246688 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.2

Demo 视频：[▶ https://media.openaicut.com/previews/1217/1.0.2-zh-0c6417ea46e7.mp4](https://media.openaicut.com/previews/1217/1.0.2-zh-0c6417ea46e7.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/cartoon-scribble-open](https://motiongit.com/@fangcs/cartoon-scribble-open)

### 153. 竖排姓名身份卡

<a href="https://media.openaicut.com/covers/1219/1.0.0-ac20a3bb8517.jpg"><img src="https://media.openaicut.com/covers/1219/1.0.0-ac20a3bb8517.jpg" alt="竖排姓名身份卡 · 竖屏" width="202"></a>

3 秒竖屏中式姓名身份卡片段：双线长框双向描边、竖排姓名逐字落下、身份标签与朱红名章依次就位，配展卷、落字与盖印音效，透明背景可叠加到人物采访、口播与活动介绍画面。

#395313 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1219/1.0.0-zh-696d0835d6f2.mp4](https://media.openaicut.com/previews/1219/1.0.0-zh-696d0835d6f2.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/name-plaque-card](https://motiongit.com/@fangcs/name-plaque-card)

### 154. 片尾关注卡

<a href="https://media.openaicut.com/covers/1221/1.1.1-zh-af0671d42567.jpg"><img src="https://media.openaicut.com/covers/1221/1.1.1-zh-af0671d42567.jpg" alt="片尾关注卡 · 横屏" width="360"></a>

3 秒方形（1:1）片尾关注卡：圆环描出、品牌名上浮、胶囊 CTA 回弹落下；彗星光点持续公转、按钮轻呼吸、胶囊周期泛光。适合方形/竖屏视频结尾关注引导，也可叠加横屏片尾留白区，透明背景可叠加任意画面。

#844614 · 横屏 · 1:1 · 1080 × 1080 · 30 FPS · v1.1.1

Demo 视频：[▶ https://media.openaicut.com/previews/1221/1.1.0-zh-ab2440c9c7e9.mp4](https://media.openaicut.com/previews/1221/1.1.0-zh-ab2440c9c7e9.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/end-card-cta](https://motiongit.com/@fangcs/end-card-cta)

### 155. 机械键盘 · MG 产品宣发片

<a href="https://media.openaicut.com/covers/1222/1.0.1-zh-ae1e3d72a44a.jpg"><img src="https://media.openaicut.com/covers/1222/1.0.1-zh-ae1e3d72a44a.jpg" alt="机械键盘 · MG 产品宣发片 · 横屏" width="640"></a>

30 秒横屏机械键盘 MG 产品宣发片：开场标题、键帽微距、整机亮相、旋钮/暖光/透光特写、双手敲击、RGB 扫光、三图快切到品牌定格；纯原生 HTML/CSS/JS/SVG，可替换品牌名、英文标与 slogan。

#778807 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/1222/1.0.1-zh-3d8b9c49877e.mp4](https://media.openaicut.com/previews/1222/1.0.1-zh-3d8b9c49877e.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/mech-keyboard-mg-promo](https://motiongit.com/@nxxxxxx/mech-keyboard-mg-promo)

### 156. 夜城霓虹光雨 · 城市航拍

<a href="https://media.openaicut.com/covers/1223/1.0.0-ed153f5734a9.jpg"><img src="https://media.openaicut.com/covers/1223/1.0.0-ed153f5734a9.jpg" alt="夜城霓虹光雨 · 城市航拍 · 横屏" width="640"></a>

15 秒 16:9 的夜景城市航拍霓虹光雨片：真实航拍底片 + 三层垂直光雨 + RGB 分离、扫描条与故障撕裂，胶片颗粒与泛光收尾。底片已烘进包内，只能调风格参数，适合赛博/科技调性的片头与垫场。

#561366 · 横屏 · 16:9 · 1920 × 1080 · 25 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1223/1.0.0-f07c30491b45.mp4](https://media.openaicut.com/previews/1223/1.0.0-f07c30491b45.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/neon-rain-night-aerial](https://motiongit.com/@nxxxxxx/neon-rain-night-aerial)

### 157. 数字科技城 · 线框都市

<a href="https://media.openaicut.com/covers/1224/draft-9e2503e26c49.jpg"><img src="https://media.openaicut.com/covers/1224/draft-9e2503e26c49.jpg" alt="数字科技城 · 线框都市 · 横屏" width="640"></a>

青蓝与洋红双色描线的 2.5D 线框科技城 MG 短片：低机位穿街、侧向跟拍、仰拍楼廊、中枢节点网络、俯冲穿楼峡谷，末镜后拉落定立体英文标题。16:9，18 秒，纯铺底科技氛围电子 BGM，无人声无字幕。

#868868 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1224/draft-5c517fee9e57.mp4](https://media.openaicut.com/previews/1224/draft-5c517fee9e57.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/tech-city-wireframe](https://motiongit.com/@nxxxxxx/tech-city-wireframe)

### 158. 霓虹雨城 Neon Rain City

<a href="https://media.openaicut.com/covers/1225/1.0.0-b3ec6c8497ed.jpg"><img src="https://media.openaicut.com/covers/1225/1.0.0-b3ec6c8497ed.jpg" alt="霓虹雨城 Neon Rain City · 横屏" width="640"></a>

12 秒雨夜科技都市氛围片：无人机穿过高密度楼群、湿沥青大道与积水倒影，青色描边 + 金色内透 + 雨丝 + Bloom 的冷调赛博影像。

#463716 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1225/1.0.0-a9598b19de45.mp4](https://media.openaicut.com/previews/1225/1.0.0-a9598b19de45.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/neon-rain-city](https://motiongit.com/@nxxxxxx/neon-rain-city)

### 159. 手作粗陶杯 · 暖系手作产品片

<a href="https://media.openaicut.com/covers/1226/draft-zh-868dea1ae6c3.jpg"><img src="https://media.openaicut.com/covers/1226/draft-zh-868dea1ae6c3.jpg" alt="手作粗陶杯 · 暖系手作产品片 · 竖屏" width="202"></a>

30 秒竖屏 9:16 暖系手作产品片。一团泥经一双手慢慢成型，按「泥→型→痕→器→用」十二镜推进：微距推近与缓速横移、上移讲解字幕与暖光落款。文案、图片、口播均可替换，适合手作陶器、木器、织物、餐厨器物等慢手艺类社媒短片。

#123873 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1226/draft-zh-06b938d29272.mp4](https://media.openaicut.com/previews/1226/draft-zh-06b938d29272.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/handmade-ceramic-vessel](https://motiongit.com/@nxxxxxx/handmade-ceramic-vessel)

### 160. PulseFit 运动手环 · 横版产品宣发

<a href="https://media.openaicut.com/covers/1227/draft-zh-a62842a129f6.jpg"><img src="https://media.openaicut.com/covers/1227/draft-zh-a62842a129f6.jpg" alt="PulseFit 运动手环 · 横版产品宣发 · 横屏" width="640"></a>

PulseFit 运动手环 · 横版产品宣发

#838852 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1227/draft-zh-35e3500915d2.mp4](https://media.openaicut.com/previews/1227/draft-zh-35e3500915d2.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/pulsefit-promo-landscape](https://motiongit.com/@nxxxxxx/pulsefit-promo-landscape)

### 161. 电路城 Circuit City

<a href="https://media.openaicut.com/covers/1231/1.0.0-zh-0479c24a4e95.jpg"><img src="https://media.openaicut.com/covers/1231/1.0.0-zh-0479c24a4e95.jpg" alt="电路城 Circuit City · 横屏" width="640"></a>

一镜到底的赛博电路城：相机从城外贴地高速冲入，楼群随飞行由地面生长，穿越三件悬浮数码产品各做一次 180° 半环绕，最后沿街心拉升回望城市，上空浮现品牌字标。

#453519 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1231/1.0.0-zh-08a114c4a3aa.mp4](https://media.openaicut.com/previews/1231/1.0.0-zh-08a114c4a3aa.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/circuit-city](https://motiongit.com/@nxxxxxx/circuit-city)

### 162. 3D 产品舞台 · 产品可替换 | Product Stage

<a href="https://media.openaicut.com/covers/1232/1.0.0-71b791ac1b9b.jpg"><img src="https://media.openaicut.com/covers/1232/1.0.0-71b791ac1b9b.jpg" alt="3D 产品舞台 · 产品可替换 | Product Stage · 横屏" width="640"></a>

3D 产品舞台 · 产品可替换 | Product Stage

#494943 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1232/1.0.0-7c15e6f43db7.mp4](https://media.openaicut.com/previews/1232/1.0.0-7c15e6f43db7.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/product-stage-3d](https://motiongit.com/@nxxxxxx/product-stage-3d)

技术资料：[https://github.com/motiontemplates/494943](https://github.com/motiontemplates/494943)

### 163. 真人分析

<a href="https://media.openaicut.com/covers/1233/1.0.0-zh-dbed7c7bf851.jpg"><img src="https://media.openaicut.com/covers/1233/1.0.0-zh-dbed7c7bf851.jpg" alt="真人分析 · 横屏" width="640"></a>

横屏真人分析与课堂复盘。以真人原声为主，按台词调入近景、同屏讲解、原表演示、静音补镜、反应贴纸与片尾提问。

#574943 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1233/1.0.0-zh-6bf1c8257534.mp4](https://media.openaicut.com/previews/1233/1.0.0-zh-6bf1c8257534.mp4)

官网下载 .motion：[https://motiongit.com/@pudgedog2018/real-person-analysis](https://motiongit.com/@pudgedog2018/real-person-analysis)

### 164. 潮玩风运动鞋产品宣传模板（竖屏 30s）

<a href="https://media.openaicut.com/covers/1234/1.0.0-793ad6801a67.jpg"><img src="https://media.openaicut.com/covers/1234/1.0.0-793ad6801a67.jpg" alt="潮玩风运动鞋产品宣传模板（竖屏 30s）" width="202"></a>

竖屏 9:16 潮玩撞色风运动鞋产品宣传短片，13 镜快切：开场主视觉、卖点贴纸、细节特写、配色展示、片尾 CTA。产品图、品牌 Logo、各镜文案与配色圆点均可在集中参数处独立替换，改参即可换片，无需改动动效代码。

#508245 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1234/1.0.0-f38a9e0efb54.mp4](https://media.openaicut.com/previews/1234/1.0.0-f38a9e0efb54.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/sneaker-promo-toy-mg](https://motiongit.com/@nxxxxxx/sneaker-promo-toy-mg)

### 165. 浅蓝口播对照11.20

<a href="https://media.openaicut.com/covers/1235/1.1.0-6405ab04e6aa.jpg"><img src="https://media.openaicut.com/covers/1235/1.1.0-6405ab04e6aa.jpg" alt="浅蓝口播对照11.20 · 竖屏" width="202"></a>

浅蓝竖屏口播包装，把一个问题、两种做法、场景变化、逐项影响和一句建议串起来。

#507012 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1235/1.1.0-d9b895f93836.mp4](https://media.openaicut.com/previews/1235/1.1.0-d9b895f93836.mp4)

官网下载 .motion：[https://motiongit.com/@liuyue/light-blue-talking-head](https://motiongit.com/@liuyue/light-blue-talking-head)

### 166. 拍摄手记：幕后到成片

<a href="https://media.openaicut.com/covers/1237/1.0.0-c45e9e505de8.jpg"><img src="https://media.openaicut.com/covers/1237/1.0.0-c45e9e505de8.jpg" alt="拍摄手记：幕后到成片 · 竖屏" width="202"></a>

用第一人称视角花絮和成片，组成的一条视频，记录了从幕后到成片的一个过程

#946818 · 竖屏 · 9:16 · 1080 × 1920 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1237/1.0.0-ddf24825bb2d.mp4](https://media.openaicut.com/previews/1237/1.0.0-ddf24825bb2d.mp4)

官网下载 .motion：[https://motiongit.com/@webbFu/photo-diary-reveal](https://motiongit.com/@webbFu/photo-diary-reveal)

### 167. 潮玩盲盒角色宣传模板（竖屏 24s）

<a href="https://media.openaicut.com/covers/1238/1.0.0-zh-cb895cea797e.jpg"><img src="https://media.openaicut.com/covers/1238/1.0.0-zh-cb895cea797e.jpg" alt="潮玩盲盒角色宣传模板（竖屏 24s）" width="202"></a>

活泼黏土玩具风潮玩盲盒角色阵容短片模板：12 镜 9:16 竖屏，马卡龙撞色加深可可描边。可替换品牌名、Logo、四个角色图与名称、强调色、落版系列名、按钮文案与 slogan。

#454400 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1238/1.0.0-zh-49cd287197dc.mp4](https://media.openaicut.com/previews/1238/1.0.0-zh-49cd287197dc.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/blind-box-cute-club-mg](https://motiongit.com/@nxxxxxx/blind-box-cute-club-mg)

### 168. 机械键盘霓虹工业风宣传模板（横屏 16s）

<a href="https://media.openaicut.com/covers/1239/1.0.0-zh-10a9ace60932.jpg"><img src="https://media.openaicut.com/covers/1239/1.0.0-zh-10a9ace60932.jpg" alt="机械键盘霓虹工业风宣传模板（横屏 16s）" width="640"></a>

暗色科技霓虹切光机械键盘产品宣传模板：5 镜 16:9 横屏，整板浮现、斜侧推近、轴体拆解、敲击回弹与落版 CTA。可替换品牌名、Logo、主/次强调色、系列名、按钮文案与 slogan。

#481428 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1239/1.0.0-zh-150630d18f1c.mp4](https://media.openaicut.com/previews/1239/1.0.0-zh-150630d18f1c.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/mechanical-keyboard-neon-mg](https://motiongit.com/@nxxxxxx/mechanical-keyboard-neon-mg)

### 169. 时光碎片 · 回忆画廊

<a href="https://media.openaicut.com/covers/1241/1.0.0-zh-49b71ca42772.jpg"><img src="https://media.openaicut.com/covers/1241/1.0.0-zh-49b71ca42772.jpg" alt="时光碎片 · 回忆画廊 · 横屏" width="640"></a>

35mm 胶片与撕纸拼贴质感的 30 秒回忆画廊：14 个镜头串起旧照片、车窗外、海浪、雨夜与十月，53 个图片位、3 段视频和全套文案都可替换。

#948462 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1241/1.0.0-zh-97548371f11a.mp4](https://media.openaicut.com/previews/1241/1.0.0-zh-97548371f11a.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/time-fragments-gallery](https://motiongit.com/@nxxxxxx/time-fragments-gallery)

### 170. 器形 · 多屏拼贴数码产品

<a href="https://media.openaicut.com/covers/1242/1.0.1-zh-a0ce626056c7.jpg"><img src="https://media.openaicut.com/covers/1242/1.0.1-zh-a0ce626056c7.jpg" alt="器形 · 多屏拼贴数码产品 · 横屏" width="640"></a>

深石墨舞台上的 45 秒数码产品片：包豪斯巨字网格、孟菲斯碎形撞色、低多边形线框与粒子流体，23 个可组合镜头，斜切分屏、圆形产品窗、叠卡、八件产品环绕轨道与三个实拍视频窗。可替换标题、短词、副标题与 23 条中文字幕，替换产品图即可复用。

#600322 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/1242/1.0.1-zh-2f2e41083621.mp4](https://media.openaicut.com/previews/1242/1.0.1-zh-2f2e41083621.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/qixing-objects-in-geometry](https://motiongit.com/@nxxxxxx/qixing-objects-in-geometry)

### 171. PIGMENT ROOM / 颜料室 · 护肤彩妆概念片

<a href="https://media.openaicut.com/covers/1243/1.0.1-zh-34b6eec93f44.jpg"><img src="https://media.openaicut.com/covers/1243/1.0.1-zh-34b6eec93f44.jpg" alt="PIGMENT ROOM / 颜料室 · 护肤彩妆概念片 · 竖屏" width="202"></a>

PIGMENT ROOM / 颜料室 · 护肤彩妆概念片

#953747 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.1

Demo 视频：[▶ https://media.openaicut.com/previews/1243/1.0.1-zh-d9ba98169eaf.mp4](https://media.openaicut.com/previews/1243/1.0.1-zh-d9ba98169eaf.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/pigment-room](https://motiongit.com/@nxxxxxx/pigment-room)

### 172. 鞋履档案 · 多屏拼贴 30s

<a href="https://media.openaicut.com/covers/1244/1.0.0-9c208798f521.jpg"><img src="https://media.openaicut.com/covers/1244/1.0.0-9c208798f521.jpg" alt="鞋履档案 · 多屏拼贴 30s · 横屏" width="640"></a>

30 秒 1920×1080 多屏拼贴模板：10 个镜头把同一品类的 6 个世代编号排成一条路，包豪斯几何色块、孟菲斯斜纹与描边、波普高对比图墙、厚涂撕边照片与实拍视频窗交替。只替换主标题、英文副标题与十条字幕，即可换成任意鞋款或产品线。

#607644 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1244/1.0.0-46d889e20b72.mp4](https://media.openaicut.com/previews/1244/1.0.0-46d889e20b72.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/soles-archive-collage](https://motiongit.com/@nxxxxxx/soles-archive-collage)

### 173. 棱镜脉冲 / PRISM PULSE

<a href="https://media.openaicut.com/covers/1245/1.0.0-zh-2a7da7d8568f.jpg"><img src="https://media.openaicut.com/covers/1245/1.0.0-zh-2a7da7d8568f.jpg" alt="棱镜脉冲 / PRISM PULSE · 横屏" width="640"></a>

45 秒横屏数码产品合集：多屏拼贴、包豪斯巨字、蒸汽波落日、赛博网格、低多边形线框、MG 动效和粒子流体。20 个镜头覆盖 8 类产品，每类一组产品镜 + 细节镜。

#1245 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1245/1.0.0-zh-4466aa391590.mp4](https://media.openaicut.com/previews/1245/1.0.0-zh-4466aa391590.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/prism-pulse](https://motiongit.com/@nxxxxxx/prism-pulse)

### 174. 背包档案 · 多屏拼贴 30s

<a href="https://media.openaicut.com/covers/1246/1.0.0-zh-2475d7dddfd7.jpg"><img src="https://media.openaicut.com/covers/1246/1.0.0-zh-2475d7dddfd7.jpg" alt="背包档案 · 多屏拼贴 30s · 横屏" width="640"></a>

10 镜 30s 横版产品档案片：包豪斯几何 + 孟菲斯碎屑 + 波普半调 + 粗野主义硬边，全部镜头由 step() 硬跳驱动，标题、档案条目与数据均可替换。

#554700 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1246/1.0.0-zh-ae335b4ec2db.mp4](https://media.openaicut.com/previews/1246/1.0.0-zh-ae335b4ec2db.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/backpack-archive-collage](https://motiongit.com/@nxxxxxx/backpack-archive-collage)

### 175. 高光时刻 · 获奖短片包装

<a href="https://media.openaicut.com/covers/1247/1.0.0-c5da5a60df99.jpg"><img src="https://media.openaicut.com/covers/1247/1.0.0-c5da5a60df99.jpg" alt="高光时刻 · 获奖短片包装 · 竖屏" width="202"></a>

为竖屏获奖记录叠加原声颁奖名牌与照片片尾。

#504672 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1247/1.0.0-0f8832da816e.mp4](https://media.openaicut.com/previews/1247/1.0.0-0f8832da816e.mp4)

官网下载 .motion：[https://motiongit.com/@gzlbb/award-highlight-kit](https://motiongit.com/@gzlbb/award-highlight-kit)

### 176. 三口充电头 · 多屏拼贴 30s

<a href="https://media.openaicut.com/covers/1248/1.0.0-zh-b70d49993110.jpg"><img src="https://media.openaicut.com/covers/1248/1.0.0-zh-b70d49993110.jpg" alt="三口充电头 · 多屏拼贴 30s · 横屏" width="640"></a>

30 秒横版多屏拼贴：包豪斯网格 + 孟菲斯碎形 + 波普高饱和，深蓝底与电青/荧光粉信息层，10 镜讲完一只氮化镓充电头的功率、体积、温度与兼容性。填 4 个参数即可换产品。

#232655 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1248/1.0.0-zh-76fe985a0dba.mp4](https://media.openaicut.com/previews/1248/1.0.0-zh-76fe985a0dba.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/tri-port-charger-collage](https://motiongit.com/@nxxxxxx/tri-port-charger-collage)

### 177. 四章图解 · 提问到对照

<a href="https://media.openaicut.com/covers/1251/1.0.0-933ddca4442d.jpg"><img src="https://media.openaicut.com/covers/1251/1.0.0-933ddca4442d.jpg" alt="四章图解 · 提问到对照 · 竖屏" width="202"></a>

110 秒竖屏图解模板：提问、拆解、方法、对照四章推进，可替换题目、要点、强调色与 22 张图；演示以信件流转为例，无内置声音。

#463260 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1251/1.0.0-cf6952319813.mp4](https://media.openaicut.com/previews/1251/1.0.0-cf6952319813.mp4)

官网下载 .motion：[https://motiongit.com/@yefeiFLY/four-chapter-diagram](https://motiongit.com/@yefeiFLY/four-chapter-diagram)

### 178. MATTER · 物质 — 护肤/化妆品产品片

<a href="https://media.openaicut.com/covers/1252/1.0.0-656b22c60a91.jpg"><img src="https://media.openaicut.com/covers/1252/1.0.0-656b22c60a91.jpg" alt="MATTER · 物质 — 护肤/化妆品产品片 · 横屏" width="640"></a>

黑白硬光、时尚大片、瑞士极简、包豪斯、孟菲斯、粗野主义与粒子流体混在同一条 45 秒护肤/化妆品产品片里。17 个镜头，1920×1080、60fps；可替换品牌名、三行文案与强调色，纯画面，无口播无字幕。

#1252 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1252/1.0.0-93a21e9b21e0.mp4](https://media.openaicut.com/previews/1252/1.0.0-93a21e9b21e0.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/matter-product-film](https://motiongit.com/@nxxxxxx/matter-product-film)

### 179. 线稿故事

<a href="https://media.openaicut.com/covers/1254/0.2.3-d4b0760b3758.jpg"><img src="https://media.openaicut.com/covers/1254/0.2.3-d4b0760b3758.jpg" alt="线稿故事 · 横屏" width="640"></a>

把已有内容变成一支有人愿意看完的线描故事短片：一根金线逐笔生长，画到哪旁白说到哪，不必照固定分镜。适合开场、流程说明、故事叙述与品牌片段落。

#560983 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v0.2.3

Demo 视频：[▶ https://media.openaicut.com/previews/1254/0.2.3-df2772fd6ca5.mp4](https://media.openaicut.com/previews/1254/0.2.3-df2772fd6ca5.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/0109010001-line-story](https://motiongit.com/@fangcs/0109010001-line-story)

### 180. 数字坠落发光可搭配砸地音效 删改局部

<a href="https://media.openaicut.com/covers/1255/1.0.0-a5dd61c675b7.jpg"><img src="https://media.openaicut.com/covers/1255/1.0.0-a5dd61c675b7.jpg" alt="数字坠落发光可搭配砸地音效 删改局部 · 竖屏" width="270"></a>

一串数字带拖影依次坠落，落地轻震、绿光一闪、白烟散开，上方小标题逐字浮现；数字、小标题、颜色、背景、烟雾都能改。keynot 经典特效

#629013 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1255/1.0.0-57e0fbb8a44e.mp4](https://media.openaicut.com/previews/1255/1.0.0-57e0fbb8a44e.mp4)

官网下载 .motion：[https://motiongit.com/@zhanglong5122/number-drop-glow](https://motiongit.com/@zhanglong5122/number-drop-glow)

### 181. AROMA · 白屿 — 九种风格语言

<a href="https://media.openaicut.com/covers/1256/1.0.0-zh-f8563cbac436.jpg"><img src="https://media.openaicut.com/covers/1256/1.0.0-zh-f8563cbac436.jpg" alt="AROMA · 白屿 — 九种风格语言 · 横屏" width="640"></a>

一只陶瓷无火香薰，用九种画面语言各说一次：黑白硬光、侘寂、包豪斯、MG 动效、孟菲斯、粗野主义、毛绒质感、双重曝光、赛博朋克。11 个镜头、45 秒、1920×1080／60fps，共用一个九位转塔、一套字体和一套网格，所以九种风格是同一次曝光的不同读数，不是九段拼贴。9 个图片

#966154 · 横屏 · 16:9 · 1920 × 1080 · 60 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1256/1.0.0-zh-b08603fdc1a7.mp4](https://media.openaicut.com/previews/1256/1.0.0-zh-b08603fdc1a7.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/aroma-nine-voices](https://motiongit.com/@nxxxxxx/aroma-nine-voices)

### 182. 歌词 MV

<a href="https://media.openaicut.com/covers/1259/1.0.0-8fe40d6078d4.jpg"><img src="https://media.openaicut.com/covers/1259/1.0.0-8fe40d6078d4.jpg" alt="歌词 MV · 横屏" width="640"></a>

把歌做成 30 秒赛博荧光风歌词 MV，逐字科技字体配合多场景动态背景。

#390461 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1259/1.0.0-77f54c412f14.mp4](https://media.openaicut.com/previews/1259/1.0.0-77f54c412f14.mp4)

官网下载 .motion：[https://motiongit.com/@tianqingyuan/moonlight-lyric-mv](https://motiongit.com/@tianqingyuan/moonlight-lyric-mv)

### 183. 3D粒子\_逆转乾坤

<a href="https://media.openaicut.com/covers/1260/0.1.0-01e3e56132a8.jpg"><img src="https://media.openaicut.com/covers/1260/0.1.0-01e3e56132a8.jpg" alt="3D粒子_逆转乾坤 · 竖屏" width="202"></a>

暗底粒子图形看一眼就能逆转方向；改字换色即时出片，模板自带设计推荐。15秒竖屏无缝循环。

#492712 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v0.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1260/0.1.0-cf3251ae2700.mp4](https://media.openaicut.com/previews/1260/0.1.0-cf3251ae2700.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/0110010001-particle-arrow-illusion](https://motiongit.com/@fangcs/0110010001-particle-arrow-illusion)

### 184. AURA 01 · THE ROOM LISTENS

<a href="https://media.openaicut.com/covers/1261/1.0.0-en-8670f1674d3b.jpg"><img src="https://media.openaicut.com/covers/1261/1.0.0-en-8670f1674d3b.jpg" alt="AURA 01 · THE ROOM LISTENS · 横屏" width="640"></a>

45 秒、15 镜的桌面音箱产品片模板：6 个真实产品机位槽位 + 100 个文案槽位，可换产品、品牌名、标题与落版；固定 16:9、1080p、30fps。模板只渲染画面，不含音频与字幕。

#645414 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1261/1.0.0-en-de1bf591eea2.mp4](https://media.openaicut.com/previews/1261/1.0.0-en-de1bf591eea2.mp4)

官网下载 .motion：[https://motiongit.com/@nxxxxxx/aura01-room-listens](https://motiongit.com/@nxxxxxx/aura01-room-listens)

### 185. SuperC 角色登场

<a href="https://media.openaicut.com/covers/1262/1.1.0-zh-08a143017b2f.jpg"><img src="https://media.openaicut.com/covers/1262/1.1.0-zh-08a143017b2f.jpg" alt="SuperC 角色登场 · 竖屏" width="202"></a>

4–8 张角色图变成 15 秒竖屏预告，可按音乐设置切点。

#420500 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.1.0

Demo 视频：[▶ https://media.openaicut.com/previews/1262/1.1.0-zh-3bbf1b067f47.mp4](https://media.openaicut.com/previews/1262/1.1.0-zh-3bbf1b067f47.mp4)

官网下载 .motion：[https://motiongit.com/@5509996qi/superc-character-intro](https://motiongit.com/@5509996qi/superc-character-intro)

### 186. 取景镜头·黑金

<a href="https://media.openaicut.com/covers/1265/1.0.0-75b87674cef4.jpg"><img src="https://media.openaicut.com/covers/1265/1.0.0-75b87674cef4.jpg" alt="取景镜头·黑金 · 竖屏" width="270"></a>

3:4 竖屏口播的相机取景镜头：一个镜头页面按句子在片子里放很多次，每次换版式、模式名和文字；口播视频放在镜头下面，从人物框里透出来。

#561401 · 竖屏 · 3:4 · 1080 × 1440 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1265/1.0.0-0ec8df898253.mp4](https://media.openaicut.com/previews/1265/1.0.0-0ec8df898253.mp4)

官网下载 .motion：[https://motiongit.com/@jsjauwyw/viewfinder-black-gold](https://motiongit.com/@jsjauwyw/viewfinder-black-gold)

### 187. 线稿故事（竖屏）

<a href="https://media.openaicut.com/covers/1266/0.1.1-0c76e89f1c96.jpg"><img src="https://media.openaicut.com/covers/1266/0.1.1-0c76e89f1c96.jpg" alt="线稿故事（竖屏）" width="202"></a>

竖屏 9:16 版线稿故事：一根发光的金线在暗底上逐笔画出故事，默认六幕「一封信」。幕数与时长随你的内容编排（12–60 秒），自带配乐与环境声，换掉标题与旁白就能讲你自己的故事。适合竖屏故事号、情绪短片与品牌故事。

#900957 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v0.2.0

Demo 视频：[▶ https://media.openaicut.com/previews/1266/0.1.1-769989acdf31.mp4](https://media.openaicut.com/previews/1266/0.1.1-769989acdf31.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/0109020001-letter-story](https://motiongit.com/@fangcs/0109020001-letter-story)

### 188. 葱油拌面手记

<a href="https://media.openaicut.com/covers/1267/0.1.0-alpha.2-zh-5a0976bee125.jpg"><img src="https://media.openaicut.com/covers/1267/0.1.0-alpha.2-zh-5a0976bee125.jpg" alt="葱油拌面手记 · 竖屏" width="202"></a>

把一道菜拆成食材、火候和拌匀收尾，适合面馆或厨房账号。

#733673 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1267/0.1.0-alpha.2-zh-9fa811d9578b.mp4](https://media.openaicut.com/previews/1267/0.1.0-alpha.2-zh-9fa811d9578b.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-scallion-noodles](https://motiongit.com/@reedphase-5e9a42/dy-scallion-noodles)

### 189. 沿河散步路线图

<a href="https://media.openaicut.com/covers/1268/0.1.0-alpha.2-zh-e08a235db7b6.jpg"><img src="https://media.openaicut.com/covers/1268/0.1.0-alpha.2-zh-e08a235db7b6.jpg" alt="沿河散步路线图 · 竖屏" width="202"></a>

用三站步行示意讲清出发地、沿途停留和终点。示例为虚构街区。

#937594 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1268/0.1.0-alpha.2-zh-ae42e31ed8c6.mp4](https://media.openaicut.com/previews/1268/0.1.0-alpha.2-zh-ae42e31ed8c6.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-riverside-walk](https://motiongit.com/@reedphase-5e9a42/dy-riverside-walk)

### 190. 半平米玄关图纸

<a href="https://media.openaicut.com/covers/1269/0.1.0-alpha.2-zh-1d3d0ab87bb1.jpg"><img src="https://media.openaicut.com/covers/1269/0.1.0-alpha.2-zh-1d3d0ab87bb1.jpg" alt="半平米玄关图纸 · 竖屏" width="202"></a>

用柜体正立面分清暂放、随手挂和日常取用，适合小户型改造。

#488381 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1269/0.1.0-alpha.2-zh-957ad4c24057.mp4](https://media.openaicut.com/previews/1269/0.1.0-alpha.2-zh-957ad4c24057.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-entryway-plan](https://motiongit.com/@reedphase-5e9a42/dy-entryway-plan)

### 191. 通勤耳机试听台

<a href="https://media.openaicut.com/covers/1270/0.1.0-alpha.2-zh-912ddd66296d.jpg"><img src="https://media.openaicut.com/covers/1270/0.1.0-alpha.2-zh-912ddd66296d.jpg" alt="通勤耳机试听台 · 竖屏" width="202"></a>

用佩戴、环境声和人声三个体验维度演示数码试用。

#183009 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1270/0.1.0-alpha.2-zh-db23b018d769.mp4](https://media.openaicut.com/previews/1270/0.1.0-alpha.2-zh-db23b018d769.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-earbud-check](https://motiongit.com/@reedphase-5e9a42/dy-earbud-check)

### 192. 橘子挑选小摊

<a href="https://media.openaicut.com/covers/1271/0.1.0-alpha.2-zh-48ebaa30b86c.jpg"><img src="https://media.openaicut.com/covers/1271/0.1.0-alpha.2-zh-48ebaa30b86c.jpg" alt="橘子挑选小摊 · 竖屏" width="202"></a>

用果皮、手感和切面解释鲜果挑选，适合产地摊主和菜市场账号。

#403807 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1271/0.1.0-alpha.2-zh-2e8241eea835.mp4](https://media.openaicut.com/previews/1271/0.1.0-alpha.2-zh-2e8241eea835.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-citrus-counter](https://motiongit.com/@reedphase-5e9a42/dy-citrus-counter)

### 193. 三色通勤衣橱

<a href="https://media.openaicut.com/covers/1272/0.1.0-alpha.2-zh-5b373055127d.jpg"><img src="https://media.openaicut.com/covers/1272/0.1.0-alpha.2-zh-5b373055127d.jpg" alt="三色通勤衣橱 · 竖屏" width="202"></a>

把搭配拆成主色、邻近色和小面积点色，适合穿搭账号和服装店。

#617538 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1272/0.1.0-alpha.2-zh-85931bcc6ae8.mp4](https://media.openaicut.com/previews/1272/0.1.0-alpha.2-zh-85931bcc6ae8.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-capsule-colors](https://motiongit.com/@reedphase-5e9a42/dy-capsule-colors)

### 194. 蓝印花布显影录

<a href="https://media.openaicut.com/covers/1273/0.1.0-alpha.2-zh-74b6364d7eaa.jpg"><img src="https://media.openaicut.com/covers/1273/0.1.0-alpha.2-zh-74b6364d7eaa.jpg" alt="蓝印花布显影录 · 竖屏" width="202"></a>

用型版、上染、去浆三个可视步骤介绍蓝印花布的防染原理。

#497016 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1273/0.1.0-alpha.2-zh-2ef5d21f3a70.mp4](https://media.openaicut.com/previews/1273/0.1.0-alpha.2-zh-2ef5d21f3a70.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-indigo-print](https://motiongit.com/@reedphase-5e9a42/dy-indigo-print)

### 195. 夜跑出门检查单

<a href="https://media.openaicut.com/covers/1274/0.1.0-alpha.2-zh-d24bc8c84639.jpg"><img src="https://media.openaicut.com/covers/1274/0.1.0-alpha.2-zh-d24bc8c84639.jpg" alt="夜跑出门检查单 · 竖屏" width="202"></a>

用反光位置、鞋带和路线三格做出门装备检查。

#138951 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1274/0.1.0-alpha.2-zh-177e2be4bbd9.mp4](https://media.openaicut.com/previews/1274/0.1.0-alpha.2-zh-177e2be4bbd9.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-night-run-kit](https://motiongit.com/@reedphase-5e9a42/dy-night-run-kit)

### 196. 周末演出入场券

<a href="https://media.openaicut.com/covers/1275/0.1.0-alpha.2-zh-4600fd15acbf.jpg"><img src="https://media.openaicut.com/covers/1275/0.1.0-alpha.2-zh-4600fd15acbf.jpg" alt="周末演出入场券 · 竖屏" width="202"></a>

把活动亮点、场次和入场须知做成一张可动的票根。演出及场地均为虚构示例。

#416365 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1275/0.1.0-alpha.2-zh-1cc81e428397.mp4](https://media.openaicut.com/previews/1275/0.1.0-alpha.2-zh-1cc81e428397.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-weekend-ticket](https://motiongit.com/@reedphase-5e9a42/dy-weekend-ticket)

### 197. 积木里的几何课

<a href="https://media.openaicut.com/covers/1276/0.1.0-alpha.2-zh-e0960aece6be.jpg"><img src="https://media.openaicut.com/covers/1276/0.1.0-alpha.2-zh-e0960aece6be.jpg" alt="积木里的几何课 · 竖屏" width="202"></a>

用积木轮廓、拼接和旋转，教家长带孩子做几何观察。

#387233 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.2

Demo 视频：[▶ https://media.openaicut.com/previews/1276/0.1.0-alpha.2-zh-453d7c4249e1.mp4](https://media.openaicut.com/previews/1276/0.1.0-alpha.2-zh-453d7c4249e1.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/dy-shape-blocks](https://motiongit.com/@reedphase-5e9a42/dy-shape-blocks)

### 198. 讲师的演示台

<a href="https://media.openaicut.com/covers/1277/0.1.0-alpha.3-zh-d848e8b69fad.jpg"><img src="https://media.openaicut.com/covers/1277/0.1.0-alpha.3-zh-d848e8b69fad.jpg" alt="讲师的演示台 · 竖屏" width="202"></a>

讲师的演示台用于实操教程的真人口播。

#917851 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/1277/0.1.0-alpha.3-zh-f382583b19f3.mp4](https://media.openaicut.com/previews/1277/0.1.0-alpha.3-zh-f382583b19f3.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/douyin-talk-01-workshop](https://motiongit.com/@reedphase-5e9a42/douyin-talk-01-workshop)

### 199. 一封读者来信

<a href="https://media.openaicut.com/covers/1278/0.1.0-alpha.3-zh-455d0c8ad61c.jpg"><img src="https://media.openaicut.com/covers/1278/0.1.0-alpha.3-zh-455d0c8ad61c.jpg" alt="一封读者来信 · 竖屏" width="202"></a>

一封读者来信用于教育答疑的真人口播。

#483591 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/1278/0.1.0-alpha.3-zh-0ac8219e25a0.mp4](https://media.openaicut.com/previews/1278/0.1.0-alpha.3-zh-0ac8219e25a0.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/douyin-talk-02-letter](https://motiongit.com/@reedphase-5e9a42/douyin-talk-02-letter)

### 200. 新品发布主场

<a href="https://media.openaicut.com/covers/1279/0.1.0-alpha.3-zh-034620122b97.jpg"><img src="https://media.openaicut.com/covers/1279/0.1.0-alpha.3-zh-034620122b97.jpg" alt="新品发布主场 · 竖屏" width="202"></a>

新品发布主场用于产品发布的真人口播。

#693394 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/1279/0.1.0-alpha.3-zh-ec57b436552f.mp4](https://media.openaicut.com/previews/1279/0.1.0-alpha.3-zh-ec57b436552f.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/douyin-talk-03-launch](https://motiongit.com/@reedphase-5e9a42/douyin-talk-03-launch)

### 201. 两天的拍摄手记

<a href="https://media.openaicut.com/covers/1280/0.1.0-alpha.3-zh-ad33f2de8c5e.jpg"><img src="https://media.openaicut.com/covers/1280/0.1.0-alpha.3-zh-ad33f2de8c5e.jpg" alt="两天的拍摄手记 · 竖屏" width="202"></a>

两天的拍摄手记用于生活叙事的真人口播。

#799148 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/1280/0.1.0-alpha.3-zh-ab2a176bc1fe.mp4](https://media.openaicut.com/previews/1280/0.1.0-alpha.3-zh-ab2a176bc1fe.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/douyin-talk-04-diary](https://motiongit.com/@reedphase-5e9a42/douyin-talk-04-diary)

### 202. 两栏体验报告

<a href="https://media.openaicut.com/covers/1281/0.1.0-alpha.3-zh-b6501dbea931.jpg"><img src="https://media.openaicut.com/covers/1281/0.1.0-alpha.3-zh-b6501dbea931.jpg" alt="两栏体验报告 · 竖屏" width="202"></a>

两栏体验报告用于数码体验的真人口播。

#820923 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.3

Demo 视频：[▶ https://media.openaicut.com/previews/1281/0.1.0-alpha.3-zh-c1d685e8db18.mp4](https://media.openaicut.com/previews/1281/0.1.0-alpha.3-zh-c1d685e8db18.mp4)

官网下载 .motion：[https://motiongit.com/@reedphase-5e9a42/douyin-talk-05-verdict](https://motiongit.com/@reedphase-5e9a42/douyin-talk-05-verdict)

### 203. 上新功能看板

<a href="https://media.openaicut.com/covers/1282/0.1.0-alpha.1-zh-ecd457191916.jpg"><img src="https://media.openaicut.com/covers/1282/0.1.0-alpha.1-zh-ecd457191916.jpg" alt="上新功能看板 · 竖屏" width="202"></a>

用三条可替换的数字指标介绍新品、功能和硬件参数。

#991735 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1282/0.1.0-alpha.1-zh-1df0b2157f9d.mp4](https://media.openaicut.com/previews/1282/0.1.0-alpha.1-zh-1df0b2157f9d.mp4)

官网下载 .motion：[https://motiongit.com/@launch-studio-c7fd0d/launch-metrics-card](https://motiongit.com/@launch-studio-c7fd0d/launch-metrics-card)

### 204. 经纬路线简报

<a href="https://media.openaicut.com/covers/1283/0.1.0-alpha.1-zh-ed5590dac01d.jpg"><img src="https://media.openaicut.com/covers/1283/0.1.0-alpha.1-zh-ed5590dac01d.jpg" alt="经纬路线简报 · 竖屏" width="202"></a>

在球面投影上画出两座城市之间的路线与估算距离，适合旅行或地理解释。

#286972 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1283/0.1.0-alpha.1-zh-b92cbd812f9f.mp4](https://media.openaicut.com/previews/1283/0.1.0-alpha.1-zh-b92cbd812f9f.mp4)

官网下载 .motion：[https://motiongit.com/@route-studio-56a39b/route-world-brief](https://motiongit.com/@route-studio-56a39b/route-world-brief)

### 205. 趋势拆解图

<a href="https://media.openaicut.com/covers/1284/0.1.0-alpha.1-zh-ffe1fc6aa084.jpg"><img src="https://media.openaicut.com/covers/1284/0.1.0-alpha.1-zh-ffe1fc6aa084.jpg" alt="趋势拆解图 · 竖屏" width="202"></a>

把一组数据的变化画成逐步出现的趋势线，适合知识解释、月报和运营复盘。

#693199 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1284/0.1.0-alpha.1-zh-205e9b9af623.mp4](https://media.openaicut.com/previews/1284/0.1.0-alpha.1-zh-205e9b9af623.mp4)

官网下载 .motion：[https://motiongit.com/@trend-studio-954b51/trend-dispatch](https://motiongit.com/@trend-studio-954b51/trend-dispatch)

### 206. 三道招牌菜

<a href="https://media.openaicut.com/covers/1285/0.1.0-alpha.1-zh-c06f63d00d2a.jpg"><img src="https://media.openaicut.com/covers/1285/0.1.0-alpha.1-zh-c06f63d00d2a.jpg" alt="三道招牌菜 · 竖屏" width="202"></a>

将三道招牌菜分别做成可更换图文的翻页菜单。适合小馆、咖啡店与餐饮新品介绍。

#123176 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1285/0.1.0-alpha.1-zh-8326f47fc6fa.mp4](https://media.openaicut.com/previews/1285/0.1.0-alpha.1-zh-8326f47fc6fa.mp4)

官网下载 .motion：[https://motiongit.com/@bistro-studio-01ffeb/bistro-menu-pages](https://motiongit.com/@bistro-studio-01ffeb/bistro-menu-pages)

### 207. 设备巡检读数台

<a href="https://media.openaicut.com/covers/1286/0.1.0-alpha.1-zh-398716b2add8.jpg"><img src="https://media.openaicut.com/covers/1286/0.1.0-alpha.1-zh-398716b2add8.jpg" alt="设备巡检读数台 · 竖屏" width="202"></a>

用逐段归位的指针和读数展示三项巡检记录。适合工厂培训、设备介绍与运维复盘。

#502405 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1286/0.1.0-alpha.1-zh-684edc830ff9.mp4](https://media.openaicut.com/previews/1286/0.1.0-alpha.1-zh-684edc830ff9.mp4)

官网下载 .motion：[https://motiongit.com/@workshop-studio-25158b/workshop-gauge-log](https://motiongit.com/@workshop-studio-25158b/workshop-gauge-log)

### 208. 三步讲清加权平均

<a href="https://media.openaicut.com/covers/1287/0.1.0-alpha.1-zh-268f783c2bab.jpg"><img src="https://media.openaicut.com/covers/1287/0.1.0-alpha.1-zh-268f783c2bab.jpg" alt="三步讲清加权平均 · 竖屏" width="202"></a>

把三个分值拆成读题、列式和结果，数字与公式同步换稿。适合数学微课和知识讲解。

#700808 · 竖屏 · 9:16 · 1080 × 1920 · 24 FPS · v0.1.0-alpha.1

Demo 视频：[▶ https://media.openaicut.com/previews/1287/0.1.0-alpha.1-zh-fbe9c010dbb0.mp4](https://media.openaicut.com/previews/1287/0.1.0-alpha.1-zh-fbe9c010dbb0.mp4)

官网下载 .motion：[https://motiongit.com/@weighted-studio-504a22/weighted-average-steps](https://motiongit.com/@weighted-studio-504a22/weighted-average-steps)

### 209. 口播浮层动效卡

<a href="https://media.openaicut.com/covers/1295/1.0.0-c8ead63a4da9.jpg"><img src="https://media.openaicut.com/covers/1295/1.0.0-c8ead63a4da9.jpg" alt="口播浮层动效卡 · 横屏" width="640"></a>

横屏真人口播的透明叠加浮层动效卡，用要点清单栏、步骤推进轴、序号结论卡承接讲解重点，完整让出画面中央人物与底部字幕带。

#1295 · 横屏 · 16:9 · 1920 × 1080 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1295/1.0.0-4212e107de4c.mp4](https://media.openaicut.com/previews/1295/1.0.0-4212e107de4c.mp4)

官网下载 .motion：[https://motiongit.com/@mrz/talking-head-overlay-cards](https://motiongit.com/@mrz/talking-head-overlay-cards)

### 210. 手机相册卡点

<a href="https://media.openaicut.com/covers/1307/0.1.3-zh-0ca8d371ad75.jpg"><img src="https://media.openaicut.com/covers/1307/0.1.3-zh-0ca8d371ad75.jpg" alt="手机相册卡点 · 竖屏" width="288"></a>

实体手机沿纵深俯冲开场，白闪后照片铺成拼贴墙，0.5 秒一拍运动卡点、倒放闭环收尾；4:5 竖屏，自带 BGM，换照片即出片。

#731463 · 竖屏 · 4:5 · 1080 × 1350 · 30 FPS · v0.1.3

Demo 视频：[▶ https://media.openaicut.com/previews/1307/0.1.3-zh-b5a6f401551d.mp4](https://media.openaicut.com/previews/1307/0.1.3-zh-b5a6f401551d.mp4)

官网下载 .motion：[https://motiongit.com/@fangcs/0111010001-album-beat](https://motiongit.com/@fangcs/0111010001-album-beat)

### 211. 章节式竖屏图文动效模板（部分提炼草稿）

<a href="https://media.openaicut.com/covers/1308/1.0.0-zh-ed069addb788.jpg"><img src="https://media.openaicut.com/covers/1308/1.0.0-zh-ed069addb788.jpg" alt="章节式竖屏图文动效模板（部分提炼草稿）" width="202"></a>

把分章节的讲解编排成 1080x1920 竖屏图文动效，含开场居中、全屏反白要点、分屏数据卡、数字强调与重点脉冲。

#736626 · 竖屏 · 9:16 · 1080 × 1920 · 30 FPS · v1.0.0

Demo 视频：[▶ https://media.openaicut.com/previews/1308/1.0.0-zh-7a3954f03c6c.mp4](https://media.openaicut.com/previews/1308/1.0.0-zh-7a3954f03c6c.mp4)

官网下载 .motion：[https://motiongit.com/@huangyiming/chapter-portrait-kit](https://motiongit.com/@huangyiming/chapter-portrait-kit)

## 使用教程

1. 查看图片与 Demo，选择模板名称、编号及横屏或竖屏。
2. 从该条目的下载链接或 MotionGit 模板页取得对应版本的 .motion；官网版按模板页提示完成下载。
3. 按所选模板要求准备文稿、照片或视频等素材，把 .motion 和素材交给助手。解压后先读包内 00-START-HERE.md（如有），再按 README 及其引用的制作指南操作。
4. 复用已跑通的环境，仅补齐实际缺项；按包内指南制作实际预览，确认后导出视频。

`.motion` 是可解压的实际模板工程。制作时使用包内代码与指南，将用户素材填入模板后制作预览。

[目录数据（JSON，供核对）](https://raw.githubusercontent.com/motiontemplates/all/refs/heads/main/catalog.json) · [备用目录](https://motiontemplates.github.io/all/catalog.json)

本合集从官网已审核公开的模板与已验证的 GitHub 介绍自动更新。技术原理、许可、素材要求、依赖与下载状态以各模板页面和包内指南为准。
