// Dead Internet — app.js
(function () {
    'use strict';

    // ─── Year Data ───
    const yearData = {
        2010: { botTraffic: 30, aiContent: 0,   fakeAccounts: 8,  aiImages: 0,         humanWeb: 92 },
        2011: { botTraffic: 31, aiContent: 0,   fakeAccounts: 9,  aiImages: 0,         humanWeb: 91 },
        2012: { botTraffic: 31, aiContent: 0,   fakeAccounts: 10, aiImages: 0,         humanWeb: 90 },
        2013: { botTraffic: 32, aiContent: 0,   fakeAccounts: 11, aiImages: 0,         humanWeb: 89 },
        2014: { botTraffic: 33, aiContent: 0,   fakeAccounts: 12, aiImages: 0,         humanWeb: 88 },
        2015: { botTraffic: 35, aiContent: 0,   fakeAccounts: 13, aiImages: 0,         humanWeb: 87 },
        2016: { botTraffic: 38, aiContent: 0,   fakeAccounts: 15, aiImages: 0,         humanWeb: 85 },
        2017: { botTraffic: 39, aiContent: 0,   fakeAccounts: 16, aiImages: 100,       humanWeb: 84 },
        2018: { botTraffic: 38, aiContent: 0.1, fakeAccounts: 16, aiImages: 500,       humanWeb: 84 },
        2019: { botTraffic: 37, aiContent: 0.2, fakeAccounts: 17, aiImages: 2000,      humanWeb: 83 },
        2020: { botTraffic: 40, aiContent: 0.5, fakeAccounts: 18, aiImages: 10000,     humanWeb: 82 },
        2021: { botTraffic: 42, aiContent: 1,   fakeAccounts: 20, aiImages: 50000,     humanWeb: 79 },
        2022: { botTraffic: 47, aiContent: 3,   fakeAccounts: 24, aiImages: 300000,    humanWeb: 73 },
        2023: { botTraffic: 49, aiContent: 10,  fakeAccounts: 28, aiImages: 3400000,   humanWeb: 62 },
        2024: { botTraffic: 53, aiContent: 20,  fakeAccounts: 34, aiImages: 18000000,  humanWeb: 46 },
        2025: { botTraffic: 58, aiContent: 38,  fakeAccounts: 42, aiImages: 90000000,  humanWeb: 24 },
        2026: { botTraffic: 64, aiContent: 55,  fakeAccounts: 50, aiImages: 250000000, humanWeb: 10 },
    };

    // ─── Milestones ───
    const milestones = [
        { year: 2010, text: 'Bot traffic already ~30% of the web', detail: 'Scrapers, crawlers, and spam bots dominate non-human traffic' },
        { year: 2013, text: 'First large-scale social media bot networks discovered', detail: 'Researchers find millions of fake Twitter accounts' },
        { year: 2015, text: 'Political bot campaigns go mainstream', detail: 'Automated accounts influence public discourse at scale' },
        { year: 2017, text: 'Deepfakes emerge', detail: 'AI-generated face-swap videos appear on Reddit. First AI images generated daily.' },
        { year: 2019, text: 'GPT-2 "too dangerous to release"', detail: 'OpenAI warns about AI text generation. Previews the coming flood.' },
        { year: 2020, text: 'GPT-3 launches — AI text goes mainstream', detail: 'First model capable of writing convincing human-like text at scale' },
        { year: 2021, text: 'DALL·E & AI art revolution begins', detail: '50,000 AI images generated daily. Bot traffic exceeds 42%.' },
        { year: 2022, text: 'ChatGPT explodes — AI content floods the web', detail: 'Fastest-growing app in history. AI-generated content jumps to 3% of web.' },
        { year: 2023, text: 'GPT-4, Claude, Gemini — the floodgates open', detail: '3.4M AI images/day. Bot traffic nears 50%. AI content hits 10%.' },
        { year: 2024, text: 'AI slop becomes a cultural phenomenon', detail: 'Google search quality degrades. 53% of web traffic is non-human.' },
        { year: 2025, text: 'Bot traffic overtakes human traffic', detail: 'AI generates 38% of new web content. 90M AI images daily.' },
        { year: 2026, text: 'Dead Internet Theory becomes consensus', detail: 'Over half of new content is AI-generated. Human web shrinks to ~10%.' },
    ];

    // ─── Feed templates ───
    const humanPosts = [
        { author: 'sarah_dev', body: 'Just spent 3 hours debugging a CSS grid issue. Turns out I had a typo in grid-template-columns. I need coffee ☕', meta: '14 likes · 3 replies' },
        { author: 'alex.photo', body: 'Sunset from my balcony tonight. No filter needed — sometimes reality is better than any edit.', meta: '42 likes · 7 replies' },
        { author: 'jake_runs', body: 'PR on my 5K today! 22:14. Been training for 6 months and it finally paid off. My knees disagree though 😅', meta: '28 likes · 12 replies' },
        { author: 'maria_cooks', body: 'Made my grandmother\'s empanada recipe tonight. The dough was too thick but the filling was perfect. She would have laughed at my folding technique.', meta: '67 likes · 9 replies' },
        { author: 'techworker42', body: 'Hot take: most "AI tools" are just wrappers around the same API with different CSS. Change my mind.', meta: '203 likes · 84 replies' },
        { author: 'dev_nina', body: 'My 4 year old asked me what I do at work. I said "I tell computers what to do." She said "so you\'re a computer mom?" Yes. Yes I am.', meta: '156 likes · 23 replies' },
        { author: 'running_mike', body: 'anyone else feel like every website has become the same? endless popups, cookie banners, newsletter modals. i just want to read an article', meta: '89 likes · 45 replies' },
        { author: 'plant_dad', body: 'My monstera finally put out a new leaf after 4 months of nothing. I literally cheered out loud. My cat was unimpressed.', meta: '33 likes · 5 replies' },
    ];

    const botPosts = [
        { author: 'Best_Deals_2024', body: '🔥 AMAZING OFFER! Get 80% off premium electronics NOW! Limited time only! Click the link 👇👇👇 Don\'t miss out!!!', meta: '2 likes · 0 replies' },
        { author: 'crypto_gains_pro', body: 'I made $15,000 in one week using this simple crypto strategy. DM me for details! Not financial advice 📈🚀💰', meta: '1 like · 0 replies' },
        { author: 'follow4follow_xyz', body: 'Follow me and I\'ll follow back! Like this post for a surprise in your DMs! 💫✨🌟', meta: '0 likes · 0 replies' },
        { author: 'news_aggregator_7', body: 'BREAKING: [Slightly reworded version of a real headline with no original reporting or context]', meta: '5 likes · 1 reply' },
        { author: 'SEO_content_farm', body: 'Top 10 Best Products of 2024 You NEED To Buy (Updated List). Click through our affiliate links for the best deals.', meta: '3 likes · 0 replies' },
        { author: 'engagement_pod_01', body: 'Great post! Very insightful! Keep up the amazing work! 👏👏👏 Love this content!', meta: '0 likes · 0 replies' },
        { author: 'fake_review_anna', body: 'This product changed my life! I bought it 3 weeks ago and I\'ve never been happier. 5 stars! Highly recommend to everyone!!! ⭐⭐⭐⭐⭐', meta: '1 like · 0 replies' },
        { author: 'dropship_empire', body: 'Tired of your 9-5? Learn how I built a 6-figure online business in 30 days! Free webinar this Thursday!', meta: '4 likes · 0 replies' },
    ];

    const aiPosts = [
        { author: 'synthesis_ai', body: 'The intersection of machine learning and renewable energy presents fascinating opportunities for optimizing grid distribution. Here are some thoughts on the current landscape...', meta: '12 likes · 2 replies' },
        { author: 'content_engine', body: 'In today\'s fast-paced digital landscape, it\'s more important than ever to stay ahead of the curve. Here\'s a comprehensive guide to navigating the complexities of modern technology.', meta: '8 likes · 1 reply' },
        { author: 'ai_art_daily', body: '[Photorealistic image of a sunset over mountains that never existed, generated in 4 seconds] "Captured this beautiful moment on my evening walk 🌅"', meta: '234 likes · 18 replies' },
        { author: 'helpful_thread', body: 'Thread on productivity (1/12): The most successful people share these habits. Let me break them down for you in a way that\'s both accessible and actionable...', meta: '45 likes · 3 replies' },
        { author: 'article_gen_v3', body: 'What Is [Topic]? A Comprehensive Guide (2024). [Topic] has become increasingly important in recent years. In this article, we\'ll explore everything you need to know...', meta: '6 likes · 0 replies' },
        { author: 'smart_reply_bot', body: 'That\'s a really interesting perspective! I think you raise some valid points. Have you considered looking at it from the angle of [vaguely related tangent]?', meta: '3 likes · 1 reply' },
        { author: 'recipe_gen', body: 'Delicious 30-Minute Pasta Recipe: Start by boiling salted water. Cook 400g of pasta until al dente. In a separate pan, sauté garlic in olive oil... This recipe serves 4 and pairs well with a crisp white wine.', meta: '15 likes · 2 replies' },
        { author: 'auto_journal', body: 'Today I reflected on the importance of mindfulness in our daily routines. By taking just five minutes each morning to center ourselves, we can dramatically improve our focus and well-being.', meta: '22 likes · 4 replies' },
    ];

    const deadPosts = [
        { author: 'user_deleted', body: '[Account suspended]', meta: 'Posted 3 years ago' },
        { author: '404_not_found', body: 'This content is no longer available.', meta: 'Link expired' },
        { author: 'abandoned_blog', body: 'Last post: "I\'ll be back next week with more updates!" — Posted January 2019', meta: '0 likes · 0 replies' },
        { author: 'old_forum_user', body: '[This forum has been archived. No new posts can be made.]', meta: 'Archive from 2016' },
    ];

    // ─── DOM ───
    const yearSlider = document.getElementById('year-slider');
    const yearLabel = document.getElementById('year-label');
    const canvas = document.getElementById('network-canvas');
    const ctx = canvas.getContext('2d');
    const vizContainer = document.getElementById('viz-container');
    const feedContainer = document.getElementById('feed-container');
    const feedYear = document.getElementById('feed-year');
    const milestonesContainer = document.getElementById('milestones-container');
    const btnPlay = document.getElementById('btn-play');
    const ticksContainer = document.getElementById('timeline-ticks');

    // Stats
    const statBotTraffic = document.getElementById('stat-bot-traffic');
    const statAiContent = document.getElementById('stat-ai-content');
    const statFakeAccounts = document.getElementById('stat-fake-accounts');
    const statAiImages = document.getElementById('stat-ai-images');
    const statHumanWeb = document.getElementById('stat-human-web');
    const barBot = document.getElementById('bar-bot');
    const barAi = document.getElementById('bar-ai');
    const barFake = document.getElementById('bar-fake');
    const barHuman = document.getElementById('bar-human');

    // ─── Timeline ticks ───
    for (let y = 2010; y <= 2026; y++) {
        const span = document.createElement('span');
        span.textContent = y % 2 === 0 ? y : '';
        ticksContainer.appendChild(span);
    }

    // ─── Render milestones ───
    milestones.forEach(m => {
        const div = document.createElement('div');
        div.className = 'milestone';
        div.dataset.year = m.year;
        div.innerHTML = `
            <div class="milestone-year">${m.year}</div>
            <div class="milestone-text">${m.text}</div>
            <div class="milestone-detail">${m.detail}</div>
        `;
        milestonesContainer.appendChild(div);
    });

    // ─── Particle System ───
    const PARTICLE_COUNT = 220;
    let particles = [];
    let connections = [];
    let canvasW, canvasH;
    let dpr = window.devicePixelRatio || 1;

    const typeColors = {
        human: { r: 34, g: 197, b: 94 },
        bot:   { r: 239, g: 68, b: 68 },
        ai:    { r: 139, g: 92, b: 246 },
        dead:  { r: 42, g: 45, b: 66 },
    };

    class Particle {
        constructor(x, y, type) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.type = type;
            this.targetType = type;
            this.radius = 1.5 + Math.random() * 2;
            this.baseRadius = this.radius;
            this.pulse = Math.random() * Math.PI * 2;
            this.color = { ...typeColors[type] };
            this.targetColor = { ...typeColors[type] };
            this.alpha = 0.6 + Math.random() * 0.4;
            this.glitch = 0;
        }

        setType(type) {
            this.targetType = type;
            this.targetColor = { ...typeColors[type] };
        }

        update(dt) {
            // Move
            this.x += this.vx * dt;
            this.y += this.vy * dt;

            // Bounce
            if (this.x < 0 || this.x > canvasW) this.vx *= -1;
            if (this.y < 0 || this.y > canvasH) this.vy *= -1;
            this.x = Math.max(0, Math.min(canvasW, this.x));
            this.y = Math.max(0, Math.min(canvasH, this.y));

            // Pulse
            this.pulse += 0.03;
            this.radius = this.baseRadius + Math.sin(this.pulse) * 0.5;

            // Color lerp
            this.color.r += (this.targetColor.r - this.color.r) * 0.03;
            this.color.g += (this.targetColor.g - this.color.g) * 0.03;
            this.color.b += (this.targetColor.b - this.color.b) * 0.03;

            // Type transition
            if (this.type !== this.targetType) {
                if (Math.abs(this.color.r - this.targetColor.r) < 2 &&
                    Math.abs(this.color.g - this.targetColor.g) < 2 &&
                    Math.abs(this.color.b - this.targetColor.b) < 2) {
                    this.type = this.targetType;
                }
            }

            // Glitch for bots
            if (this.type === 'bot' || this.targetType === 'bot') {
                this.glitch = Math.random() < 0.02 ? (Math.random() * 4 - 2) : this.glitch * 0.9;
            } else {
                this.glitch *= 0.9;
            }
        }

        draw(ctx) {
            const r = Math.round(this.color.r);
            const g = Math.round(this.color.g);
            const b = Math.round(this.color.b);

            // Glow
            if (this.type !== 'dead' && this.targetType !== 'dead') {
                ctx.beginPath();
                ctx.arc(this.x + this.glitch, this.y, this.radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r},${g},${b},0.08)`;
                ctx.fill();
            }

            // Core
            ctx.beginPath();
            ctx.arc(this.x + this.glitch, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const x = Math.random() * canvasW;
            const y = Math.random() * canvasH;
            particles.push(new Particle(x, y, 'human'));
        }
    }

    function resizeCanvas() {
        const rect = vizContainer.getBoundingClientRect();
        canvasW = rect.width;
        canvasH = rect.height;
        canvas.width = canvasW * dpr;
        canvas.height = canvasH * dpr;
        canvas.style.width = canvasW + 'px';
        canvas.style.height = canvasH + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // ─── Assign particle types based on year ───
    function updateParticleTypes(year) {
        const data = yearData[year];
        if (!data) return;

        // Calculate proportions: bot, ai, dead, human
        const botPct = data.botTraffic / 100;
        const aiPct = data.aiContent / 100;
        const deadPct = (100 - data.humanWeb - data.botTraffic) / 200; // small fraction
        const humanPct = 1 - botPct - aiPct - Math.max(0, deadPct);

        // Shuffle assignment
        const n = particles.length;
        const counts = {
            bot: Math.round(n * botPct),
            ai: Math.round(n * aiPct),
            dead: Math.round(n * Math.max(0, deadPct)),
        };
        counts.human = n - counts.bot - counts.ai - counts.dead;
        if (counts.human < 0) counts.human = 0;

        // Create type array
        const types = [];
        for (let i = 0; i < counts.bot; i++) types.push('bot');
        for (let i = 0; i < counts.ai; i++) types.push('ai');
        for (let i = 0; i < counts.dead; i++) types.push('dead');
        while (types.length < n) types.push('human');

        // Sort particles by their current index to maintain visual stability
        // but assign types from shuffled array
        particles.forEach((p, i) => {
            if (i < types.length) {
                p.setType(types[i]);
            }
        });
    }

    // ─── Connection lines ───
    const CONNECTION_DIST = 80;

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                    const r = Math.round((a.color.r + b.color.r) / 2);
                    const g = Math.round((a.color.g + b.color.g) / 2);
                    const bl = Math.round((a.color.b + b.color.b) / 2);
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    // ─── Glitch overlay ───
    function drawGlitchOverlay(intensity) {
        if (intensity < 0.1) return;
        // Random horizontal displacement bands
        const bandCount = Math.floor(intensity * 6);
        for (let i = 0; i < bandCount; i++) {
            if (Math.random() > 0.3) continue;
            const y = Math.random() * canvasH;
            const h = 1 + Math.random() * 3;
            const shift = (Math.random() - 0.5) * intensity * 20;
            ctx.drawImage(canvas, 0, y * dpr, canvasW * dpr, h * dpr,
                shift, y, canvasW, h);
        }

        // Red/cyan color separation
        if (Math.random() < intensity * 0.3) {
            ctx.globalCompositeOperation = 'screen';
            ctx.fillStyle = `rgba(255,0,0,${intensity * 0.03})`;
            ctx.fillRect(2, 0, canvasW, canvasH);
            ctx.fillStyle = `rgba(0,255,255,${intensity * 0.03})`;
            ctx.fillRect(-2, 0, canvasW, canvasH);
            ctx.globalCompositeOperation = 'source-over';
        }
    }

    // ─── Animation loop ───
    let lastTime = 0;
    let currentYear = 2024;

    function animate(time) {
        const dt = Math.min((time - lastTime) / 16, 3); // cap delta
        lastTime = time;

        ctx.clearRect(0, 0, canvasW, canvasH);

        // Update & draw
        particles.forEach(p => p.update(dt));
        drawConnections();
        particles.forEach(p => p.draw(ctx));

        // Glitch overlay scales with bot traffic
        const data = yearData[currentYear];
        const glitchIntensity = data ? (data.botTraffic - 30) / 70 : 0;
        drawGlitchOverlay(Math.max(0, glitchIntensity));

        requestAnimationFrame(animate);
    }

    // ─── Stats update ───
    function formatNumber(n) {
        if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
        if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
        if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
        return n.toString();
    }

    function updateStats(year) {
        const data = yearData[year];
        if (!data) return;

        statBotTraffic.innerHTML = `${data.botTraffic}<small>%</small>`;
        statAiContent.innerHTML = `${data.aiContent}<small>%</small>`;
        statFakeAccounts.innerHTML = `${data.fakeAccounts}<small>%</small>`;
        statAiImages.textContent = formatNumber(data.aiImages);
        statHumanWeb.innerHTML = `${data.humanWeb}<small>%</small>`;

        barBot.style.width = data.botTraffic + '%';
        barAi.style.width = data.aiContent + '%';
        barFake.style.width = data.fakeAccounts + '%';
        barHuman.style.width = data.humanWeb + '%';

        // Color the human web stat based on value
        const humanEl = document.querySelector('.stat-item.highlight');
        if (data.humanWeb < 30) {
            humanEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            statHumanWeb.style.color = '#ef4444';
        } else if (data.humanWeb < 60) {
            humanEl.style.borderColor = 'rgba(245, 158, 11, 0.3)';
            statHumanWeb.style.color = '#f59e0b';
        } else {
            humanEl.style.borderColor = 'rgba(34, 197, 94, 0.2)';
            statHumanWeb.style.color = '#22c55e';
        }

        // Year label color
        yearLabel.className = 'timeline-label' + (year >= 2024 ? ' danger' : '');
    }

    // ─── Feed generation ───
    function generateFeed(year) {
        const data = yearData[year];
        if (!data) return;

        feedYear.textContent = year;
        feedContainer.innerHTML = '';

        // Determine post mix (8 posts)
        const total = 8;
        const numBot = Math.round(total * data.botTraffic / 200); // Scale down for feed
        const numAi = Math.round(total * data.aiContent / 100);
        const numDead = year >= 2020 ? 1 : 0;
        const numHuman = Math.max(0, total - numBot - numAi - numDead);

        const posts = [];

        // Pick random posts from each pool
        const pick = (arr, count) => {
            const shuffled = [...arr].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, count);
        };

        pick(humanPosts, numHuman).forEach(p => posts.push({ ...p, type: 'human' }));
        pick(botPosts, numBot).forEach(p => posts.push({ ...p, type: 'bot' }));
        pick(aiPosts, numAi).forEach(p => posts.push({ ...p, type: 'ai' }));
        if (numDead > 0) pick(deadPosts, numDead).forEach(p => posts.push({ ...p, type: 'dead' }));

        // Shuffle
        posts.sort(() => Math.random() - 0.5);

        posts.forEach(post => {
            const div = document.createElement('div');
            div.className = `feed-post ${post.type}-post`;
            const tagLabels = { human: 'Human', bot: 'Bot', ai: 'AI Generated', dead: 'Dead Link' };
            div.innerHTML = `
                <div class="post-header">
                    <span class="post-author">@${post.author}</span>
                    <span class="post-tag ${post.type}">${tagLabels[post.type]}</span>
                </div>
                <div class="post-body">${post.body}</div>
                <div class="post-meta">${post.meta}</div>
            `;
            feedContainer.appendChild(div);
        });
    }

    // ─── Milestone highlights ───
    function updateMilestones(year) {
        document.querySelectorAll('.milestone').forEach(el => {
            const my = parseInt(el.dataset.year);
            el.classList.toggle('active', my === year);
            el.classList.toggle('past', my < year);
        });
    }

    // ─── Year change handler ───
    function setYear(year) {
        currentYear = year;
        yearLabel.textContent = year;
        yearSlider.value = year;
        updateStats(year);
        updateParticleTypes(year);
        generateFeed(year);
        updateMilestones(year);
    }

    // ─── Auto-play ───
    let playInterval = null;

    btnPlay.addEventListener('click', () => {
        if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            btnPlay.textContent = '▶';
            btnPlay.classList.remove('playing');
        } else {
            btnPlay.textContent = '⏸';
            btnPlay.classList.add('playing');
            if (currentYear >= 2026) setYear(2010);
            playInterval = setInterval(() => {
                if (currentYear >= 2026) {
                    clearInterval(playInterval);
                    playInterval = null;
                    btnPlay.textContent = '▶';
                    btnPlay.classList.remove('playing');
                    return;
                }
                setYear(currentYear + 1);
            }, 1200);
        }
    });

    // ─── Slider ───
    yearSlider.addEventListener('input', () => {
        setYear(parseInt(yearSlider.value));
    });

    // ─── Init ───
    function init() {
        resizeCanvas();
        initParticles();
        setYear(2024);
        requestAnimationFrame(animate);
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
        }, 200);
    });

    init();
})();
