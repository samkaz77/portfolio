// ============================================================
// Samreen Kazmi — Portfolio Terminal & Advanced Smart Chat
// AI/ML-First Positioning (Skills, not tools)
// ============================================================

// ---- DOM Elements ----
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');
const chatContainer = document.getElementById('chatContainer');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');
const closeChatBtn = document.getElementById('closeChat');

// ============================================================
// PROFILE DATA
// ============================================================
const PROFILE = {
    name: 'Samreen Kazmi',
    role: 'Web Developer @ Proagency ApS · AI/ML Enthusiast',
    tagline: 'Building with Python, PyTorch & a passion for intelligent systems',
    location: 'Lahore, Pakistan',
    dob: '11/02/2004',
    about: 'WordPress Developer with a passion for building efficient, user-centric web solutions — and a deep interest in Artificial Intelligence. My academic background is rooted in Computer Science (OOP, Data Structures, Databases, Cloud Computing), and I found my calling in AI, GenAI, and Computer Vision. I enjoy the challenge of teaching machines to see, understand, and learn from data. I have hands-on experience building NLP and CV models — from sentiment analysis on 13,000+ real tweets to GANs and medical imaging classifiers.',
    aiFocus: {
        primary: 'AI/ML Engineering',
        specializations: ['NLP', 'Computer Vision', 'Generative AI'],
        goal: 'Build impactful AI/ML systems and contribute to the AI industry',
        researchInterests: [
            'Natural Language Processing (NLP)',
            'Computer Vision & Medical Imaging',
            'Generative Models (GANs, Diffusion)',
            'Applied ML for Social Impact',
            'Multimodal AI Systems'
        ]
    },
    education: {
        degree: 'Bachelors of Science in Computer Science',
        uni: 'FAST NUCES, Islamabad',
        period: '2022 - 2026',
        courses: ['OOP', 'Data Structures & Algorithms', 'Database Systems', 'Artificial Intelligence', 'Generative AI', 'Software Engineering', 'Computer Networks', 'Operating Systems', 'Mobile App Development', 'Cloud Computing']
    },
    experience: {
        title: 'Web Developer',
        company: 'Proagency ApS',
        location: 'Denmark',
        period: 'Feb 2026 - Present',
        focus: 'WordPress · PHP · Full-Stack Development'
    },
    skills: {
        ai_ml: [
            'Python', 'Machine Learning', 'Deep Learning', 'Generative AI',
            'NLP', 'Computer Vision', 'PyTorch', 'TensorFlow', 'Scikit-learn',
            'GANs', 'ConvNeXt', 'Vision Transformers (ViT)',
            'Transformers', 'Model Optimization', 'Transfer Learning',
            'Data Augmentation', 'Pandas', 'NumPy'
        ],
        technical: [
            'SQL', 'Databases', 'Full-Stack Development', 'HTML', 'CSS',
            'PHP', 'WordPress', 'Git', 'Data Analysis'
        ],
        design: ['Figma', 'UI/UX', 'Prototyping'],
        soft: ['Problem Solving', 'Critical Thinking', 'Leadership', 'Time Management', 'Teamwork', 'Adaptability', 'Communication']
    },
    projects: [
        {
            name: 'TweetLens Pakistan — AI Social Media Analytics (FYP)',
            category: 'AI/ML · NLP',
            icon: '📊',
            shortName: 'TweetLens',
            desc: 'Final Year Project — a web application that collects and processes 13,000+ tweets from X (Twitter) to perform sentiment analysis on 3 major issues in Pakistan: theft, loadshedding, and water shortage.',
            longDesc: 'Built an end-to-end NLP pipeline for real-world social sentiment analysis. Implemented preprocessing for code-mixed text (English, Urdu, Roman Urdu), handling transliteration inconsistencies. Built data collection pipeline and visualization dashboard for sentiment trends across issues. Implemented city-based filtering, trend dashboards, and automated PDF report generation. Fine-tuned XLM-RoBERTa for issue classification and CardiffNLP for sentiment analysis.',
            tech: ['Python', 'XLM-RoBERTa', 'CardiffNLP', 'NLP', 'React.js', 'MongoDB'],
            metrics: ['📈 13,000+ tweets', '🎯 3 issues', '🏆 FYP'],
            highlight: 'Final Year Project · 13,000+ tweets analyzed · Social Impact',
            link: 'https://github.com/Aymanch2764/TweetLens-Pakistan'
        },
        {
            name: 'DDPM — Diffusion Model from Scratch',
            category: 'AI/ML · Generative AI',
            icon: '🧠',
            shortName: 'DDPM',
            desc: 'Built a Denoising Diffusion Probabilistic Model from scratch in PyTorch — no pretrained pipelines, no high-level diffusion libraries.',
            longDesc: 'Architecture: U-Net with attention at the bottleneck, sinusoidal time embeddings, and a cosine noise schedule (outperformed linear). Trained on CelebA-HQ (27,000 images, 128×128) with mixed precision on T4 GPU. Built interactive Gradio and Streamlit demos for real-time face generation from noise.',
            tech: ['PyTorch', 'U-Net', 'Diffusion Models', 'Streamlit', 'Gradio'],
            metrics: ['📊 PSNR 28.43 dB', '🎯 SSIM 0.8912', '🖼️ 27K images'],
            highlight: 'From-scratch implementation · Diffusion Model',
            link: 'https://ddpmmodel-aw6g3wegjdcnnpuuqz3lj2.streamlit.app/'
        },
        {
            name: 'Skin Lesion Classification — Medical AI',
            category: 'AI/ML · Computer Vision',
            icon: '🔬',
            shortName: 'Skin Lesion',
            desc: 'Multi-class classifier using ConvNeXt-B4 and Vision Transformer (ViT-B/16) to detect 7 types of skin lesions from the HAM10000 dataset.',
            longDesc: 'Built a deep learning pipeline for medical image classification on HAM10000 and ISIC 2018 datasets. Compared CNN-based (ConvNeXt-B4) and Transformer-based (ViT-B/16) architectures. Handled class imbalance with weighted random sampling and class-weighted cross-entropy loss. Applied data augmentation (random erasing, flips, color jittering) and regularization (AdamW, dropout, early stopping).',
            tech: ['PyTorch', 'ConvNeXt-B4', 'ViT-B/16', 'Transfer Learning', 'Medical AI'],
            metrics: ['🔬 7 classes', '📊 HAM10000 + ISIC', '🏥 Medical AI'],
            highlight: 'Healthcare AI · 7-Class Classification',
            link: 'https://github.com/usamasShk/ComputerVision'
        },
        {
            name: 'CycleGAN — Unpaired Image Translation',
            category: 'AI/ML · Computer Vision',
            icon: '🎨',
            shortName: 'CycleGAN',
            desc: 'Implemented CycleGAN from scratch in PyTorch for unpaired sketch↔photo translation — no paired training data needed.',
            longDesc: 'Architecture: ResNet Generator (6 residual blocks) + PatchGAN Discriminator (16×16 patches). Cycle-consistency loss + identity loss for unpaired training. Trained for 60 epochs on dual T4 GPUs with mixed precision (torch.cuda.amp). Models open-sourced on Hugging Face + deployed on Streamlit Cloud.',
            tech: ['PyTorch', 'CycleGAN', 'ResNet', 'PatchGAN', 'HuggingFace'],
            metrics: ['🎯 SSIM 0.65', '📊 PSNR 22.4 dB', '🎨 Sketch↔Photo'],
            highlight: 'Unpaired Image Translation · GANs',
            link: 'https://lnkd.in/deXUG9cY'
        },
        {
            name: 'DCGAN + WGAN-GP — Anime Face Generation',
            category: 'AI/ML · Generative AI',
            icon: '👾',
            shortName: 'DCGAN + WGAN-GP',
            desc: 'Built two GANs from scratch in PyTorch — DCGAN and WGAN-GP — to generate 64×64 anime faces from 100-dim random noise.',
            longDesc: 'DCGAN: 5-layer transposed conv generator + 5-layer strided conv discriminator. WGAN-GP: Same generator with InstanceNorm + Gradient Penalty. Trained on 5,000 anime faces. WGAN-GP solved mode collapse (diversity 8/10 vs 2/10 for DCGAN). Compared training stability and loss curves between both architectures.',
            tech: ['PyTorch', 'DCGAN', 'WGAN-GP', 'GANs', 'Streamlit'],
            metrics: ['👾 64×64 faces', '📊 Diversity 8/10', '🎨 5K dataset'],
            highlight: 'Two GANs from scratch · Mode Collapse Solution',
            link: 'https://lnkd.in/d57NXcMy'
        },
        {
            name: 'Qwen2-VL Fine-Tuning with QLoRA',
            category: 'AI/ML · Vision-Language',
            icon: '🤖',
            shortName: 'Qwen2-VL',
            desc: 'Fine-tuned Qwen2-VL-2B-Instruct using QLoRA for document-to-Markdown generation.',
            longDesc: 'Trained only 0.8% of parameters (18M) using 4-bit quantization on free-tier Kaggle T4 GPU. Dataset: Nougat Training Dataset (14k+ image-markdown pairs). Built interactive Gradio app for image → Markdown conversion. Demonstrates parameter-efficient fine-tuning (PEFT) for Vision-Language Models.',
            tech: ['Qwen2-VL', 'QLoRA', 'HuggingFace', 'PEFT', 'Gradio'],
            metrics: ['🤖 2B params', '📊 0.8% trained', '📄 Doc→Markdown'],
            highlight: 'Vision-Language Model Fine-Tuning',
            link: 'https://lnkd.in/eZ452kvc'
        }
    ],
    figmaProjects: [
        {
            name: 'LibraSync — Mobile App Design',
            category: 'university',
            type: 'University Coursework · Mobile App UI/UX',
            desc: 'A complete mobile application design for a library management system. Includes onboarding, book browsing, borrowing flow, and user dashboard screens — designed end-to-end in Figma with interactive prototype.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1649-504&t=RWlDInhEM3MlMXHB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'SK Fashion — Website Design',
            category: 'self-taught',
            type: 'Self-Taught Project · Fashion Brand Website',
            desc: 'A modern e-commerce website design for a fashion brand. Focuses on clean product grids, elegant typography, and a smooth shopping experience — built as a self-learning project.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1795-755&t=0Q2nbSmP0ouXEBDi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'SK Donuts — Website Design',
            category: 'self-taught',
            type: 'Self-Taught Project · Sweet Shop Website',
            desc: 'A playful and colorful website design for a sweet shop / donut brand. Features product showcase, ordering flow, and brand-focused visuals — designed as a self-learning exercise.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1780-584&t=DWP7d4Bh618eScky-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'UI Card Designs',
            category: 'self-taught',
            type: 'Self-Taught Project · Component Design',
            desc: 'A collection of modern UI card components — product cards, profile cards, and info cards — exploring different layouts, shadows, and visual hierarchies.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1806-511&t=SdPxWh3TuWeXu4NI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'Poster Designs',
            category: 'self-taught',
            type: 'Self-Taught Project · Graphic Design',
            desc: 'Creative poster designs exploring typography, color theory, and layout composition — blending visual storytelling with design principles.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1366-311&t=607DSneQnrBxhggr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'Landing Page Design',
            category: 'self-taught',
            type: 'Self-Taught Project · Web UI',
            desc: 'A clean, modern landing page design focused on conversion-friendly layouts, hero sections, and clear call-to-actions.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1118-379&t=JPGfGvGDSNVlQted-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1111%3A313&show-proto-sidebar=1'
        },
        {
            name: 'Dashboard UI Design',
            category: 'self-taught',
            type: 'Self-Taught Project · Data UI',
            desc: 'An analytics-style dashboard design featuring charts, statistics, and data visualizations — designed to feel clean and data-driven.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1950-535&t=fBhonqjzk2WWpEyx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'Mobile UI Kit',
            category: 'self-taught',
            type: 'Self-Taught Project · Design System',
            desc: 'A reusable mobile UI component kit — buttons, forms, navigation, and cards — built to speed up mobile app design workflows.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1896-545&t=pQlhJ899bJKkSnae-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        },
        {
            name: 'E-commerce Product Page',
            category: 'self-taught',
            type: 'Self-Taught Project · Web UI',
            desc: 'A focused e-commerce product detail page — product images, size selection, reviews, and add-to-cart flow.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=270-3&t=V9OfMYn6T9WKaFmT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=341%3A2&show-proto-sidebar=1'
        },
        {
            name: 'Portfolio Website Design',
            category: 'self-taught',
            type: 'Self-Taught Project · Personal Branding',
            desc: 'A personal portfolio website design exploring hero sections, project grids, and about sections — a creative self-branding exercise.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=462-240&t=TiyB7tcFWfpjSBhr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=454%3A226&show-proto-sidebar=1'
        },
        {
            name: 'Blog / Article Layout',
            category: 'self-taught',
            type: 'Self-Taught Project · Editorial UI',
            desc: 'A clean editorial layout for blog articles — typography-focused with comfortable reading rhythm and clear hierarchy.',
            link: 'https://www.figma.com/proto/lfqvylTPBgUgXOPsvbsA0z/Untitled?node-id=1531-335&t=f8h1xEfV6va88YFn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=237%3A84&show-proto-sidebar=1'
        }
    ],
    certifications: [
        'Start the UX Design Process: Empathize, Define, and Ideate — Coursera (2025)',
        'Foundations of User Experience (UX) Design — Coursera (2025)'
    ],
    awards: ["Dean's List — FAST NUCES (2026)"],
    languages: ['Urdu (Native)', 'English', 'Turkish', 'Korean'],
    hobbies: ['Reading Books', 'Painting', 'Photography', 'Music', 'Travelling'],
    contact: {
        email: 'samreenkazmi77@gmail.com',
        linkedin: 'https://www.linkedin.com/in/samreenkazmi/'
    }
};

// ============================================================
// TERMINAL COMMANDS
// ============================================================
const COMMANDS = {
    help: {
        desc: 'Show all available commands',
        run: () => {
            let out = '<p>Available commands:</p><ul>';
            for (const [cmd, info] of Object.entries(COMMANDS)) {
                out += `<li><code>${cmd}</code> — ${info.desc}</li>`;
            }
            out += '</ul>';
            return out;
        }
    },
    ai: {
        desc: 'Show AI/ML expertise and skills',
        run: () => {
            const s = PROFILE.skills.ai_ml;
            let out = `<p><strong>🧠 AI/ML Expertise:</strong></p><ul>`;
            s.forEach(skill => out += `<li><code>${skill}</code></li>`);
            out += `</ul><p style="margin-top:10px;">💡 Type <code>projects</code> for AI projects or <code>research</code> for research interests.</p>`;
            return out;
        }
    },
    research: {
        desc: 'Show AI research interests',
        run: () => {
            let out = '<p><strong>🔬 AI Research Interests:</strong></p><ul>';
            PROFILE.aiFocus.researchInterests.forEach(r => out += `<li>${r}</li>`);
            out += '</ul>';
            return out;
        }
    },
    about: {
        desc: 'Learn about Samreen',
        run: () => `<p>${PROFILE.about}</p>`
    },
    education: {
        desc: 'Show education details',
        run: () => {
            const e = PROFILE.education;
            return `<p><strong>${e.degree}</strong><br>${e.uni}<br>${e.period}</p>
                    <p style="margin-top:8px;"><strong>Core Courses:</strong> ${e.courses.join(', ')}</p>`;
        }
    },
    experience: {
        desc: 'Show work experience',
        run: () => {
            const e = PROFILE.experience;
            return `<p><strong>${e.title}</strong> — ${e.company} (${e.location})<br>${e.period}</p>
                    <p style="margin-top:8px;">${e.focus}</p>
                    <p style="margin-top:8px;">Building responsive WordPress sites for international clients — front-end, back-end, SQL, debugging, and project management. Strong background in AI/ML (NLP, Computer Vision, GenAI) through academic and project work.</p>`;
        }
    },
    skills: {
        desc: 'List AI/ML, technical & soft skills',
        run: () => {
            const ai = PROFILE.skills.ai_ml.slice(0, 8).map(s => `<code>${s}</code>`).join(', ');
            const t = PROFILE.skills.technical.slice(0, 6).map(s => `<code>${s}</code>`).join(', ');
            const s = PROFILE.skills.soft.map(s => `<code>${s}</code>`).join(', ');
            return `<p><strong>🧠 AI/ML:</strong> ${ai}...</p>
                    <p style="margin-top:8px;"><strong>💻 Technical:</strong> ${t}...</p>
                    <p style="margin-top:8px;"><strong>🤝 Soft:</strong> ${s}</p>
                    <p style="margin-top:10px;">💡 Type <code>ai</code> for full AI skills.</p>`;
        }
    },
    projects: {
        desc: 'Show AI/ML & development projects',
        run: () => {
            let out = '<p><strong>🧠 AI/ML Projects:</strong></p><ul>';
            PROFILE.projects.forEach(p => {
                out += `<li><strong>${p.name}</strong> <em>(${p.category})</em><br>${p.desc}<br><strong>Tech:</strong> ${p.tech.join(', ')}<br><em>${p.highlight}</em></li>`;
            });
            out += '</ul><p style="margin-top:10px;">💡 Type <code>figma</code> to see UI/UX design projects.</p>';
            return out;
        }
    },
    figma: {
        desc: 'Show Figma / UI-UX design projects',
        run: () => {
            const uni = PROFILE.figmaProjects.filter(f => f.category === 'university');
            const self = PROFILE.figmaProjects.filter(f => f.category === 'self-taught');
            let out = `<p><strong>Figma Projects</strong> (${uni.length} university + ${self.length} self-taught):</p>`;
            out += '<p style="margin-top:8px;"><strong>🎓 University Coursework:</strong></p><ul>';
            uni.forEach(p => {
                out += `<li><strong>${p.name}</strong><br>${p.desc}<br><a href="${p.link}" target="_blank">🔗 Open Prototype</a></li>`;
            });
            out += '</ul><p style="margin-top:8px;"><strong>📚 Self-Taught:</strong></p><ul>';
            self.forEach(p => {
                out += `<li><strong>${p.name}</strong><br>${p.desc}<br><a href="${p.link}" target="_blank">🔗 Open Prototype</a></li>`;
            });
            out += '</ul>';
            return out;
        }
    },
    certifications: {
        desc: 'Show certifications',
        run: () => {
            let out = '<ul>';
            PROFILE.certifications.forEach(c => out += `<li>${c}</li>`);
            out += '</ul>';
            return out;
        }
    },
    awards: {
        desc: 'Show awards & honours',
        run: () => {
            let out = '<ul>';
            PROFILE.awards.forEach(a => out += `<li>🏆 ${a}</li>`);
            out += '</ul>';
            return out;
        }
    },
    languages: {
        desc: 'Show language skills',
        run: () => `<p>${PROFILE.languages.map(l => `<code>${l}</code>`).join(', ')}</p>`
    },
    hobbies: {
        desc: 'Show hobbies & interests',
        run: () => `<p>${PROFILE.hobbies.map(h => `🎨 ${h}`).join(' &nbsp; ')}</p>`
    },
    contact: {
        desc: 'Get contact information',
        run: () => `<p>📧 Email: <code>${PROFILE.contact.email}</code><br>
                    🔗 LinkedIn: <a href="${PROFILE.contact.linkedin}" target="_blank">${PROFILE.contact.linkedin}</a><br>
                    📍 Location: ${PROFILE.location}</p>`
    },
    chat: {
        desc: 'Open AI chat interface',
        run: () => {
            chatContainer.style.display = 'block';
            chatInput.focus();
            chatContainer.scrollIntoView({ behavior: 'smooth' });

            if (chatMessages.children.length === 0) {
                showChatWelcome();
            }

            return '<p>💬 Chat interface opened. Ask anything about Samreen!</p>';
        }
    },
    clear: {
        desc: 'Clear the terminal',
        run: () => { terminalOutput.innerHTML = ''; return null; }
    },
    welcome: {
        desc: 'Show welcome message',
        run: () => `<p>Hi, I'm <strong>${PROFILE.name}</strong> — ${PROFILE.role}. Welcome to my interactive portfolio terminal! Type <code>help</code> for commands, <code>ai</code> for AI skills, or <code>chat</code> to ask anything.</p>`
    }
};

// ============================================================
// TERMINAL LOGIC
// ============================================================
function addTerminalLine(prompt, content, isOutput = false) {
    const line = document.createElement('div');
    line.className = 'terminal-line' + (isOutput ? ' output' : '');
    if (!isOutput) {
        line.innerHTML = `<span class="prompt">${prompt}</span><span class="command">${content}</span>`;
    } else {
        line.innerHTML = content;
    }
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function typeTerminalOutput(html) {
    return new Promise((resolve) => {
        const line = document.createElement('div');
        line.className = 'terminal-line output';
        terminalOutput.appendChild(line);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const plainText = tempDiv.textContent || tempDiv.innerText || '';

        const hasComplexHTML = /<(ul|li|a |br)/i.test(html);

        if (hasComplexHTML) {
            let i = 0;
            const previewText = plainText.slice(0, 100) + (plainText.length > 100 ? '...' : '');
            const typeInterval = setInterval(() => {
                if (i >= previewText.length) {
                    clearInterval(typeInterval);
                    line.innerHTML = html;
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    resolve();
                    return;
                }
                i++;
                line.innerHTML = previewText.slice(0, i) + '<span class="term-cursor">▋</span>';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, 12);
        } else {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i >= plainText.length) {
                    clearInterval(typeInterval);
                    line.innerHTML = html;
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    resolve();
                    return;
                }
                i++;
                line.innerHTML = plainText.slice(0, i) + '<span class="term-cursor">▋</span>';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, 10);
        }
    });
}

let isProcessing = false;

async function processCommand(input) {
    const cmd = input.trim().toLowerCase();
    if (!cmd || isProcessing) return;

    isProcessing = true;
    terminalInput.disabled = true;

    addTerminalLine('samreen@portfolio:~', cmd);

    if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd].run();
        if (result !== null) {
            await typeTerminalOutput(result);
        }
    } else {
        await typeTerminalOutput(`<p style="color:#ff6b6b;">Command not found: <code>${cmd}</code>. Type <code>help</code> for list.</p>`);
    }

    isProcessing = false;
    terminalInput.disabled = false;
    terminalInput.focus();
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        processCommand(terminalInput.value);
        terminalInput.value = '';
    }
});

// ============================================================
// 3D FLIP CARD — Smooth rotation with inertia
// ============================================================
const cardStage = document.getElementById('cardStage');
const card3D = document.getElementById('card3D');
const cardImg = document.getElementById('cardImg');
const cardFallback = document.getElementById('cardFallback');

if (cardImg) {
    cardImg.addEventListener('error', () => {
        cardImg.style.display = 'none';
        cardFallback.style.display = 'flex';
    });
    if (cardImg.complete && cardImg.naturalWidth === 0) {
        cardImg.style.display = 'none';
        cardFallback.style.display = 'flex';
    }
}

if (cardStage && card3D) {
    let currentRotation = 0;
    let targetRotation = 0;
    let velocity = 0;
    let isDragging = false;
    let startX = 0;
    let startRotY = 0;
    let lastX = 0;
    let lastMoveTime = 0;
    let hasMoved = false;
    let isFlipped = false;
    let idleActive = true;
    let idleAngle = 0;
    let lastFrameTime = performance.now();

    const DRAG_SMOOTH = 0.22;
    const FLIP_SMOOTH = 0.14;

    function animate(now) {
        const dt = Math.min(now - lastFrameTime, 50);
        lastFrameTime = now;

        if (isDragging) {
            currentRotation += (targetRotation - currentRotation) * DRAG_SMOOTH;
        } else if (Math.abs(velocity) > 0.05) {
            currentRotation += velocity * (dt / 16);
            velocity *= 0.94;
            targetRotation = currentRotation;
        } else {
            velocity = 0;
            const idleGoal = isFlipped ? 180 : 0;
            let finalGoal;
            if (idleActive) {
                idleAngle += 0.02;
                finalGoal = idleGoal + Math.sin(idleAngle) * 6;
            } else {
                finalGoal = idleGoal;
            }
            currentRotation += (finalGoal - currentRotation) * FLIP_SMOOTH;
        }

        card3D.style.transform = `rotateY(${currentRotation}deg)`;
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    function onDown(e) {
        isDragging = true;
        hasMoved = false;
        idleActive = false;
        velocity = 0;
        const point = e.touches ? e.touches[0] : e;
        startX = point.clientX;
        lastX = point.clientX;
        startRotY = currentRotation;
        targetRotation = currentRotation;
        lastMoveTime = performance.now();
        cardStage.style.cursor = 'grabbing';
        if (e.cancelable) e.preventDefault();
    }

    function onMove(e) {
        if (!isDragging) return;
        const point = e.touches ? e.touches[0] : e;
        const dx = point.clientX - startX;
        const now = performance.now();

        if (Math.abs(dx) > 3) hasMoved = true;

        targetRotation = startRotY + dx * 0.9;

        const dt = now - lastMoveTime;
        if (dt > 0) {
            const moveDx = point.clientX - lastX;
            velocity = (moveDx / dt) * 12;
        }
        lastX = point.clientX;
        lastMoveTime = now;

        if (e.cancelable) e.preventDefault();
    }

    function onUp() {
        if (!isDragging) return;
        isDragging = false;
        cardStage.style.cursor = 'grab';

        if (!hasMoved) {
            isFlipped = !isFlipped;
            velocity = 0;
        }

        setTimeout(() => {
            if (!isDragging) {
                idleActive = true;
                idleAngle = 0;
            }
        }, 1500);
    }

    cardStage.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    cardStage.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);

    cardStage.addEventListener('dblclick', () => {
        isFlipped = false;
        targetRotation = 0;
        currentRotation = 0;
        velocity = 0;
        idleAngle = 0;
        idleActive = true;
    });
}

// ============================================================
// ADVANCED SMART CHAT
// ============================================================

// ---- Conversation Memory ----
const chatMemory = {
    lastIntent: null,
    lastTopic: null,
    lastProject: null,
    lastCategory: null,
    turnCount: 0
};

function resetMemory() {
    chatMemory.lastIntent = null;
    chatMemory.lastTopic = null;
    chatMemory.lastProject = null;
    chatMemory.lastCategory = null;
    chatMemory.turnCount = 0;
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Advanced typo fixer ----
function fixTypos(text) {
    let t = text;
    t = t.replace(/([a-z])\1{2,}/g, '$1$1');

    const corrections = [
        [/\bfigam\b|\bfgma\b|\bfigme\b|\bfigmaa\b|\bfigmma\b|\bfiga\b|\bfigmmaa\b/gi, 'figma'],
        [/\bprojcts?\b|\bprojct\b|\bprojectt\b|\bprojec\b|\bprojs\b|\bprjcts?\b|\bprojject\b|\bprject\b|\bprojet\b/gi, 'project'],
        [/\beducaton\b|\beductaion\b|\beducton\b|\beduction\b|\beduaction\b/gi, 'education'],
        [/\bskils\b|\bskil\b|\bsklls\b|\bskils\b|\bskillz\b/gi, 'skills'],
        [/\bwordpres\b|\bword press\b|\bwrdpress\b|\bwordpess\b/gi, 'wordpress'],
        [/\bpythn\b|\bpyton\b|\bpyhton\b|\bphyton\b/gi, 'python'],
        [/\buniversty\b|\bunivercity\b|\buniverstiy\b|\buniverst\b|\buniverisity\b/gi, 'university'],
        [/\blibrasyc\b|\blibra sinc\b|\blibrasyn\b|\blibrasinc\b|\blibra sync\b|\blibrasinc\b/gi, 'librasync'],
        [/\bcontct\b|\bcontac\b|\bconatct\b|\bcontat\b|\bcontct\b|\bcontct\b/gi, 'contact'],
        [/\btwee+tlens?\b|\btwetlens\b|\btweetlense\b|\btweetlenss\b|\btwitterlens\b|\btweet lens\b|\btwetlense\b/gi, 'tweetlens'],
        [/\bpix ?2 ?pix\b|\bpix2 ?pix\b|\bpix 2pix\b/gi, 'pix2pix'],
        [/\bexperiance\b|\bexperence\b|\bexperince\b|\bexpirence\b/gi, 'experience'],
        [/\buniv\b/gi, 'university'],
        [/\bcertifcation\b|\bcertificaton\b|\bcertificte\b|\bcertifcate\b/gi, 'certification'],
        [/\bhobies\b|\bhoby\b|\bhobbie\b/gi, 'hobbies'],
        [/\blanguge\b|\blangauge\b|\blangug\b/gi, 'language'],
        [/\bdeam\b|\bdeen\b/gi, 'dean'],
        [/\bawardz\b|\bawrd\b/gi, 'award'],
        [/\bturkis\b|\bturkush\b/gi, 'turkish'],
        [/\bkoren\b|\bkoria\b/gi, 'korean'],
        [/\bsamrin\b|\bsamrina\b|\bsamreem\b/gi, 'samreen'],
        [/\bkazmii\b|\bkazmy\b/gi, 'kazmi'],
        [/\bgen ?ai\b|\bgenai\b/gi, 'generative ai'],
        [/\bmachine ?learning\b/gi, 'machine learning'],
        [/\bdeep ?learning\b/gi, 'deep learning'],
        [/\bcomputer ?vision\b/gi, 'computer vision']
    ];

    for (const [pattern, replacement] of corrections) {
        t = t.replace(pattern, replacement);
    }

    t = t.replace(/\bka btana\b|\bke bare\b|\bko batao\b|\bbatao\b|\bbtana\b|\bbata\b|\bbtado\b|\bbtao\b|\bbolo\b|\bsunao\b|\bbatana\b/g, 'batao');
    t = t.replace(/\bkya ha\b|\bkya hy\b|\bkya h\b|\bkia hai\b|\bkia ha\b|\bkya he\b/g, 'kya hai');
    t = t.replace(/\bkaun sa\b|\bkaunsa\b|\bkon sa\b|\bkaunsi\b|\bkaunse\b/g, 'konsa');
    t = t.replace(/\bkese\b|\bkese ho\b/g, 'kaise');
    t = t.replace(/\bkitna\b|\bkitne\b|\bkitni\b/g, 'kitna');
    t = t.replace(/\bawr\b/g, 'aur');
    t = t.replace(/\bve\b/g, 'bhi');
    t = t.replace(/\bnai\b|\bnah\b|\bnhi\b/g, 'nahi');
    t = t.replace(/\bhan\b|\bhaan\b|\bji\b|\bjii\b|\bgee\b/g, 'haan');
    t = t.replace(/\bthik\b|\bthk\b/g, 'theek');
    t = t.replace(/\bkam\b/g, 'kaam');

    return t;
}

// ---- Detect language hints ----
function detectLanguageHint(text) {
    const t = text.toLowerCase();

    const urduCount = (t.match(/\b(batao|btana|bata|kya|kia|kaise|kese|konsa|kaun|kahan|kab|kyun|kyu|han|haan|nahi|hai|hun|hoon|tha|thi|the|kar|karo|karna|theek|thik|acha|achha|bahut|bohot|zyada|bilkul|zaroor|shukriya|salam|assalam|uske|uska|uski|iske|iska|iski)\b/g) || []).length;
    const engCount = (t.match(/\b(what|who|where|when|why|how|which|tell|about|her|she|project|skill|skills|education|work|experience|contact|best|more|list|please|thanks|hello|hi|hey|good|great|the|is|are|do|does|did|can|could|would|should|will|have|has|had)\b/g) || []).length;

    if (urduCount > 0 && engCount > 0) return 'en';
    if (urduCount > 0 && urduCount > engCount) return 'ur';
    return 'en';
}

// ---- Follow-up detection ----
function isFollowUp(text) {
    const t = text.toLowerCase().trim();
    const patterns = [
        /^(and|aur|or|what about|how about|tell me more|more|detail|elaborate|explain more|continue|go on|aur batao|aur sunao|uske bare|iske bare|about it|about that|about him|about her|aur btao|aage batao)\b/,
        /^(why|how so|kaise|kese|kyun|kyu|kis liye|kisliye)\b/,
        /^(which one|kaunsa|konsa|kaun sa|kaunsi|which is|which one is|among these|among them|in mein se|inme se)\b/,
        /^(the first|the second|the third|pehla|pehli|dusra|dusri|teesra|teesri|first one|second one|third one|last one|aakhri|akhri|1st|2nd|3rd)\b/,
        /^(yes|yeah|yep|sure|ok|okay|haan|han|ji|bilkul|zaroor|theek|thik)\b/,
        /^(no|nah|nahi|nope|nai)\b/
    ];
    return patterns.some(p => p.test(t));
}

// ---- Ordinal index ----
function getOrdinalIndex(text) {
    const t = text.toLowerCase();
    if (/\b(first|1st|pehla|pehli|number 1|no 1|one|ek|pehle)\b/.test(t)) return 0;
    if (/\b(second|2nd|dusra|dusri|number 2|no 2|two|do|dusre)\b/.test(t)) return 1;
    if (/\b(third|3rd|teesra|teesri|number 3|no 3|three|teen|teesre)\b/.test(t)) return 2;
    if (/\b(fourth|4th|chautha|number 4|no 4|four|char)\b/.test(t)) return 3;
    if (/\b(fifth|5th|panchwa|number 5|no 5|five|panch)\b/.test(t)) return 4;
    if (/\b(last|final|aakhri|akhri|end wala)\b/.test(t)) return -1;
    return null;
}

// ---- MAIN INTENT ANALYZER ----
function analyzeIntent(text) {
    let t = text.toLowerCase().trim();
    t = fixTypos(t);
    const lang = detectLanguageHint(t);

    const withLang = (intent) => ({ ...intent, lang });

    // --- 1. Specific project names FIRST ---
    const aboutMatch = t.match(/\b(tweetlens|pix2pix|skin lesion|ddpm|diffusion|cyclegan|cycle gan|dcgan|wgan|wgan-gp|qwen|qwen2|qwen2-vl|vision language|librasync|sk fashion|sk donuts|tweet lens)\b/);
    if (aboutMatch) {
        const name = aboutMatch[1];
        if (name === 'tweetlens' || name === 'tweet lens') return withLang({ type: 'project_tweetlens' });
        if (name === 'pix2pix') return withLang({ type: 'project_pix2pix' });
        if (name === 'skin lesion') return withLang({ type: 'project_skin' });
        if (name === 'ddpm' || name === 'diffusion') return withLang({ type: 'project_ddpm' });
        if (name === 'cyclegan' || name === 'cycle gan') return withLang({ type: 'project_cyclegan' });
        if (name === 'dcgan' || name === 'wgan' || name === 'wgan-gp') return withLang({ type: 'project_dcgan' });
        if (name === 'qwen' || name === 'qwen2' || name === 'qwen2-vl' || name === 'vision language') return withLang({ type: 'project_qwen' });
        if (name === 'librasync') return withLang({ type: 'figma_project', project: 'LibraSync — Mobile App Design' });
        if (name === 'sk fashion') return withLang({ type: 'figma_project', project: 'SK Fashion — Website Design' });
        if (name === 'sk donuts') return withLang({ type: 'figma_project', project: 'SK Donuts — Website Design' });
    }

    // --- 2. Follow-up detection ---
    if (isFollowUp(t) && chatMemory.lastIntent) {
        const ordinal = getOrdinalIndex(t);
        if (ordinal !== null && chatMemory.lastTopic === 'figma_projects_list') {
            return withLang({ type: 'figma_project_by_index', index: ordinal, isFollowUp: true });
        }
        if (ordinal !== null && chatMemory.lastTopic === 'projects') {
            return withLang({ type: 'project_by_index', index: ordinal, isFollowUp: true });
        }
        if (/^(more|detail|elaborate|explain|tell me more|aur batao|aur sunao|aage batao)\b/.test(t)) {
            return withLang({ type: 'more_detail', topic: chatMemory.lastTopic, isFollowUp: true });
        }
        if (/^(why|how|kaise|kese|kyun|kyu|kis liye)\b/.test(t)) {
            return withLang({ type: 'why_how', topic: chatMemory.lastTopic, isFollowUp: true });
        }
        if (/\b(best|recommend|which one|konsa|kaun sa|kaunsi|favourite|favorite|top|behtareen)\b/.test(t)) {
            return withLang({ type: 'recommendation', topic: chatMemory.lastTopic, isFollowUp: true, original: text });
        }
        if (/^(yes|yeah|yep|sure|ok|okay|haan|han|ji|bilkul|zaroor|theek)\b/.test(t)) {
            return withLang({ type: 'affirmative', topic: chatMemory.lastTopic, isFollowUp: true });
        }
        if (/^(no|nah|nahi|nope|nai)\b/.test(t)) {
            return withLang({ type: 'negative', topic: chatMemory.lastTopic, isFollowUp: true });
        }
        if (/\b(about it|about that|uske bare|iske bare|uske bare mein|iske bare mein|about her|about him)\b/.test(t)) {
            return withLang({ type: 'more_detail', topic: chatMemory.lastTopic, isFollowUp: true });
        }
    }

    // --- 3. Multi-question ---
    const questionCount = (t.match(/\b(and|aur|also|plus)\b/g) || []).length;
    const hasMultipleIntents = (
        (/\bskill/.test(t) && /\beducat/.test(t)) ||
        (/\bskill/.test(t) && /\bproject/.test(t)) ||
        (/\beducat/.test(t) && /\bexperience/.test(t)) ||
        (/\bproject/.test(t) && /\bexperience/.test(t)) ||
        (/\bcontact/.test(t) && /\bskill/.test(t)) ||
        (/\bfigma/.test(t) && /\bproject/.test(t)) ||
        (/\beducat/.test(t) && /\bskill/.test(t))
    );
    if (hasMultipleIntents && questionCount >= 1) {
        return withLang({ type: 'multi_question', text: t });
    }

    // --- 4. Greetings ---
    if (/^(hi|hello|hey|salam|assalam|aoa|asalam|yo|sup|hii+|helo+|hlo|helo|salam alaikum|assalamualaikum)\b/.test(t) || t === 'hi' || t === 'hello' || t === 'hey') {
        return withLang({ type: 'greeting' });
    }
    if (/\b(thanks|thank you|shukriya|thnx|ty|thanx|shukria|shukria|thanks a lot)\b/.test(t)) {
        return withLang({ type: 'thanks' });
    }
    if (/\b(bye|goodbye|khuda hafiz|see you|see ya|allah hafiz|bye bye)\b/.test(t)) {
        return withLang({ type: 'bye' });
    }
    if (/\b(how are you|kaise ho|kese ho|kaisay ho|how r u|how do you do|kya haal|kya hal|haal chaal)\b/.test(t)) {
        return withLang({ type: 'how_are_you' });
    }
    if (/\b(good morning|good evening|good afternoon|subah bakhair|shab bakhair)\b/.test(t)) {
        return withLang({ type: 'greeting' });
    }

    // --- 4.4 AVAILABILITY — MUST come BEFORE AI check ---
    if (/\b(available for hire|available for work|available for job|available for ai|available for ml|open to work|open to opportunities|open to ai|open to ml|freelance|hiring|opportunities|job offer|ai roles?|ml roles?|ai job|ml job|networking|actively looking)\b/.test(t)) {
        return withLang({ type: 'availability' });
    }

    // --- 4.5 AI/ML specific queries ---
    const isAIQuestion = /\b(ai|ml|machine learning|deep learning|neural|nlp|computer vision|generative ai|genai|gan|gan's|transformers?|pytorch|tensorflow|scikit|convnext|vit|vision transformer)\b/.test(t);

    if (isAIQuestion) {
        if (/\bskills?\b/.test(t) || /\bknows?\b/.test(t) || /\bexpertise\b/.test(t) || /\btech\b/.test(t)) {
            return withLang({ type: 'ai_skills' });
        }
        if (/\b(project|projects|work|built|made|developed|created)\b/.test(t)) {
            return withLang({ type: 'ai_projects' });
        }
        if (/\b(experience|work|job|internship)\b/.test(t)) {
            return withLang({ type: 'ai_experience' });
        }
        return withLang({ type: 'ai_focus' });
    }

    // --- 4.6 Research interests ---
    if (/\b(research|interest|focus area|specializ|specializ|expertise)\b/.test(t)) {
        return withLang({ type: 'research' });
    }

    // --- 5. Generic "X batao" ---
    if (/\b(batao|btana|bata|bare mein|ke bare|about|tell me about|sunao|bolo)\b/.test(t)) {
        if (/\bfigma\b/.test(t)) return withLang({ type: 'figma_projects_list' });
        if (/\bproject/.test(t)) return withLang({ type: 'projects' });
        if (/\bskill/.test(t)) return withLang({ type: 'skills_general' });
        if (/\beducat/.test(t)) return withLang({ type: 'education' });
        if (/\bexperience|\bwork\b|\bjob\b/.test(t)) return withLang({ type: 'experience' });
        if (/\bcontact|\bemail\b/.test(t)) return withLang({ type: 'contact', original: text });
        if (/\bhobb/.test(t)) return withLang({ type: 'hobbies' });
        if (/\blanguag/.test(t)) return withLang({ type: 'languages' });
        if (/\baward|\bdean\b/.test(t)) return withLang({ type: 'awards' });
        if (/\bcertif/.test(t)) return withLang({ type: 'certifications' });
        if (/\bwho\b|\babout (her|samreen|uska|uski|unki)\b/.test(t)) return withLang({ type: 'intro' });
    }

    // --- 5.5 Recommendation ---
    if (/\b(best|recommend|which one|konsa|kaun sa|kaunsi|favourite|favorite|top|behtareen|sab se acha|sabse acha)\b/.test(t)) {
        return withLang({ type: 'recommendation', topic: chatMemory.lastTopic, original: text });
    }

    // --- 6. Figma filters ---
    const wantsUniversity = /\b(university|coursework|course work|uni project|academic|degree|fast|nuces|fyp)\b/.test(t);
    const wantsSelfTaught = /\b(self[- ]?taught|self[- ]?learn|personal|own project|practice|hobby|khud)\b/.test(t);
    const wantsNotSelfTaught = /\b(not self[- ]?taught|not self|non self|other than self|besides self)\b/.test(t);
    const wantsNotUniversity = /\b(not uni|not university|non[- ]?uni|other than uni|besides uni)\b/.test(t);

    const isFigmaQuestion = /\b(figma|design|ui\/?ux|ui ux|prototype|mockup|designs)\b/.test(t);
    const isProjectQuestion = /\b(project|projects|work|portfolio|made|built|designed|created|kaam)\b/.test(t);

    if (/\b(posters?|poster design)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'Poster Designs' });
    }
    if (/\b(landing page)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'Landing Page Design' });
    }
    if (/\b(dashboard)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'Dashboard UI Design' });
    }
    if (/\b(ui kit|mobile ui|design system)\b/.test(t)) {
        return withLang({ type: 'figma_project', project: 'Mobile UI Kit' });
    }
    if (/\b(ecommerce|e-commerce|product page)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'E-commerce Product Page' });
    }
    if (/\b(portfolio design|portfolio website design)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'Portfolio Website Design' });
    }
    if (/\b(blog|article|editorial)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'Blog / Article Layout' });
    }
    if (/\b(cards?|card design|ui card)\b/.test(t) && isFigmaQuestion) {
        return withLang({ type: 'figma_project', project: 'UI Card Designs' });
    }

    if (isFigmaQuestion && (isProjectQuestion || wantsUniversity || wantsSelfTaught || wantsNotSelfTaught || wantsNotUniversity)) {
        return withLang({
            type: 'figma_projects_filtered',
            filter: {
                universityOnly: wantsUniversity || wantsNotSelfTaught,
                selfTaughtOnly: wantsSelfTaught || wantsNotUniversity
            }
        });
    }

    if (/\b(figma projects?|design projects?|ui\/?ux projects?|ui projects?|ux projects?|figma work|ui work|ux work|figma portfolio|design portfolio|design work|designs)\b/.test(t)) {
        return withLang({ type: 'figma_projects_list' });
    }
    if (/\bfigma\b/.test(t)) {
        return withLang({ type: 'figma_skill' });
    }

    // --- 7. Intro / About ---
    if (/\b(who|introduce|yourself|about you|tell me about (her|samreen)|intro|background|describe|summary|overview|kon hai|kaun hai)\b/.test(t)) {
        return withLang({ type: 'intro' });
    }
    if (/\b(name|naam|who is she|kya naam|full name|poora naam)\b/.test(t)) {
        return withLang({ type: 'name' });
    }
    if (/\b(age|old|birth|born|dob|kab paida|how old|umar|umr)\b/.test(t)) {
        return withLang({ type: 'age' });
    }

    // --- 8. CONTACT ---
    if (/\b(email|mail|gmail|e-mail|e mail|email address|linkedin|linked in)\b/.test(t)) {
        return withLang({ type: 'contact', original: text });
    }

    // --- 9. Education ---
    if (/\b(education|study|studied|university|uni|college|degree|fast|nuces|graduated|bs|bachelor|course|subject|academic|cgpa|gpa|parhai|padhai)\b/.test(t)) {
        return withLang({ type: 'education' });
    }

    // --- 10. Location ---
    if (/\b(location|where|city|live|lives|based|stay|from|kahan|kaha)\b/.test(t) ||
        (/\baddress\b/.test(t) && !/\b(email|mail|gmail|e-mail|linkedin|contact)\b/.test(t))) {
        return withLang({ type: 'location' });
    }

    // --- 11. Skills ---
    if (/\b(technical skills?|tech skills?|programming|programming languages?|coding|stack|technologies|tools|tech stack)\b/.test(t)) {
        return withLang({ type: 'technical_skills' });
    }
    if (/\b(soft skills?|people skills?|personal skills?|strengths?|interpersonal|soft side)\b/.test(t)) {
        return withLang({ type: 'soft_skills' });
    }
    if (/\b(skills?|what.*know|expertise|abilities|good at|capable|talents?|kya aata|kya ata)\b/.test(t)) {
        return withLang({ type: 'skills_general' });
    }

    // --- 12. Specific skills ---
    const skillMatch = t.match(/\b(python|sql|wordpress|php|html|css|javascript|react|database|databases|cloud|mobile|android)\b/);
    if (skillMatch) {
        return withLang({ type: 'specific_skill', skill: skillMatch[0] });
    }

    // --- 13. Experience ---
    if (/\b(experience|work|job|company|employed|employer|working|career|professional|currently|current|internship|naukri|kaam)\b/.test(t)) {
        return withLang({ type: 'experience' });
    }

    // --- 14. Projects ---
    if (/\b(project|projects|fyp|final year|portfolio|built|made|developed|created)\b/.test(t)) {
        return withLang({ type: 'projects' });
    }

    // --- 15. Certifications ---
    if (/\b(certification|certificate|course|coursera|ux design|credential|certified|certifications)\b/.test(t)) {
        return withLang({ type: 'certifications' });
    }

    // --- 16. Awards ---
    if (/\b(awards?|honours?|honors?|dean|list|achievements?|prizes?|recognition|won|win|winner|medal|trophy)\b/.test(t)) {
        return withLang({ type: 'awards' });
    }

    // --- 17. Languages ---
    if (/\b(language|speak|urdu|english|turkish|korean|multilingual|bolti|bolti hai)\b/.test(t)) {
        return withLang({ type: 'languages' });
    }

    // --- 18. Hobbies ---
    if (/\b(hobby|hobbies|interest|free time|fun|enjoy|like to do|passion|leisure|shauk)\b/.test(t)) {
        return withLang({ type: 'hobbies' });
    }

    // --- 20. Help ---
    if (/\b(what can you|what can i ask|help me|what do you know|what info|what information|what can you tell|options|commands|kya pooch|kya bata)\b/.test(t)) {
        return withLang({ type: 'help' });
    }

    // --- 21. Contact (general) ---
    if (/\b(contact|reach|connect|phone|number|get in touch|rabta)\b/.test(t)) {
        return withLang({ type: 'contact', original: text });
    }

    // --- 22. Resume ---
    if (/\b(resume|cv|download)\b/.test(t)) {
        return withLang({ type: 'resume' });
    }

    // --- 23. Fallback ---
    return withLang({ type: 'unknown', original: text });
}

// ============================================================
// RICH PROJECT CARD HELPER (for individual projects)
// ============================================================
function renderProjectCard(proj) {
    return `${proj.icon} **${proj.name}**\n_${proj.category}_\n\n${proj.desc}\n\n**Tech:** ${proj.tech.join(' · ')}\n${proj.link ? `🔗 ${proj.link}` : ''}`;
}

// ============================================================
// SIMPLE PROJECTS LIST (for "AI projects" query)
// ============================================================
function renderProjectsList(lang) {
    const lines = PROFILE.projects.map((p, i) =>
        `${i + 1}. ${p.icon} **${p.shortName}**\n   ${p.desc}`
    ).join('\n\n');

    return lang === 'ur'
        ? `Uske **AI/ML projects**:\n\n${lines}\n\n──────────────────\nKis ki detail chahiye? Bas naam bolein (jaise "TweetLens" ya "DDPM").`
        : `Her **AI/ML projects**:\n\n${lines}\n\n──────────────────\nWant details on any? Just say the name (e.g., "TweetLens" or "DDPM").`;
}

// ============================================================
// REPLY GENERATION — Language-aware
// ============================================================
function generateReply(intent) {
    const p = PROFILE;
    const m = chatMemory;
    const lang = intent.lang || 'en';

    const updateMemory = (topic, project = null, category = null) => {
        m.lastIntent = intent.type;
        m.lastTopic = topic;
        if (project) m.lastProject = project;
        if (category) m.lastCategory = category;
        m.turnCount++;
    };

    switch (intent.type) {
        case 'greeting':
            updateMemory('greeting');
            return lang === 'ur'
                ? pickRandom([
                    `Assalam-o-Alaikum! 🌟 Main Samreen ki AI assistant hoon. Unka focus AI/ML hai — skills, projects, ya research ke baare mein poochein!`,
                    `Hello! 😊 Samreen ke AI/ML kaam ke baare mein kya jaanna chahenge?`,
                    `Hi! 🧠 AI/ML, projects, ya experience — kuch bhi poochein!`
                ])
                : pickRandom([
                    `Hey! 👋 I'm Samreen's AI assistant. She's a Web Developer with a passion for AI/ML — ask about her skills, projects, or research!`,
                    `Hello! 😊 Curious about Samreen's AI/ML work? Ask anything!`,
                    `Hi there! 🧠 I can tell you about her AI projects, skills, and experience.`
                ]);

        case 'how_are_you':
            updateMemory('greeting');
            return lang === 'ur'
                ? pickRandom([
                    `Main theek hoon, shukriya! 😊 Samreen ke AI/ML kaam ke baare mein kya poochna hai?`,
                    `Bilkul theek! 🤖 Bataiye, AI projects ya skills ke baare mein kya jaanna hai?`
                ])
                : pickRandom([
                    `I'm doing great, thanks! 😊 Ready to tell you about Samreen's AI/ML work. What would you like to know?`,
                    `All good! 🤖 Ask me about her AI projects, skills, or experience.`
                ]);

        case 'thanks':
            updateMemory(m.lastTopic);
            return lang === 'ur'
                ? pickRandom([
                    `Shukriya aap ka! 😊 Kuch aur poochna ho to bataiye.`,
                    `Khush rahiye! 🙌 Aur kuch jaanna hai?`,
                    `Koi baat nahi! 😊`
                ])
                : pickRandom([
                    `You're welcome! 😊 Anything else you'd like to know?`,
                    `Anytime! Feel free to ask more.`,
                    `Glad I could help! 🙌 Want to explore more?`
                ]);

        case 'bye':
            return lang === 'ur'
                ? pickRandom([
                    `Khuda Hafiz! 👋 AI/ML roles ke liye Samreen se ${p.contact.email} par rabta karein.`,
                    `Allah Hafiz! 😊 Phir milenge.`
                ])
                : pickRandom([
                    `Goodbye! 👋 Thanks for stopping by Samreen's portfolio.`,
                    `See you soon! For AI/ML opportunities, reach her at ${p.contact.email}. 😊`
                ]);

        // ---- AI/ML specific replies ----
        case 'ai_skills': {
            updateMemory('ai_skills');
            return lang === 'ur'
                ? `Samreen ke **AI/ML skills**:\n\n🧠 **Core:** Python, Machine Learning, Deep Learning, Generative AI\n📝 **NLP:** Transformers, Sentiment Analysis, Text Classification\n👁️ **Computer Vision:** ConvNeXt, Vision Transformers (ViT), GANs\n🛠️ **Frameworks:** PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy\n📊 **Techniques:** Transfer Learning, Model Optimization, Data Augmentation`
                : `Samreen's **AI/ML skills**:\n\n🧠 **Core:** Python, Machine Learning, Deep Learning, Generative AI\n📝 **NLP:** Transformers, Sentiment Analysis, Text Classification\n👁️ **Computer Vision:** ConvNeXt, Vision Transformers (ViT), GANs\n🛠️ **Frameworks:** PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy\n📊 **Techniques:** Transfer Learning, Model Optimization, Data Augmentation`;
        }

        case 'ai_projects':
        case 'projects': {
            updateMemory('projects');
            return renderProjectsList(lang);
        }

        case 'ai_experience': {
            updateMemory('ai_experience');
            return lang === 'ur'
                ? `Samreen ke paas **hands-on AI/ML experience** hai:\n\n• **Final Year Project (TweetLens Pakistan)** — 13,000+ tweets par end-to-end NLP pipeline\n• **Deep Learning** — GANs, CNNs, Vision Transformers\n• **Medical AI** — ConvNeXt + ViT for skin lesion detection\n• **Data Engineering** — real-world unstructured data collection aur cleaning\n\nWo **AI/ML roles aur collaborations** ke liye open hain!`
                : `Samreen has **hands-on AI/ML experience** through:\n\n• **Final Year Project (TweetLens Pakistan)** — end-to-end NLP pipeline on 13,000+ tweets\n• **Deep Learning** — GANs, CNNs, Vision Transformers\n• **Medical AI** — ConvNeXt + ViT for skin lesion detection\n• **Data Engineering** — working with real-world unstructured data\n\nShe's **open to AI/ML roles and collaborations**!`;
        }

        case 'ai_focus': {
            updateMemory('ai_focus');
            return lang === 'ur'
                ? `Samreen ka **main focus AI/ML** hai:\n\n🧠 **Primary:** AI/ML Engineering\n📝 **Specializations:** NLP, Computer Vision, Generative AI\n🎯 **Goal:** Impactful AI/ML systems build karna\n📊 **TweetLens:** 13,000+ tweets analyzed, 3 major issues\n🔬 **Other projects:** Pix2Pix (GANs), Skin Lesion (CV)\n\n"AI skills" ya "AI projects" bolein detail ke liye!`
                : `Samreen's **main focus is AI/ML**:\n\n🧠 **Primary:** AI/ML Engineering\n📝 **Specializations:** NLP, Computer Vision, Generative AI\n🎯 **Goal:** Build impactful AI/ML systems\n📊 **TweetLens:** 13,000+ tweets analyzed, 3 major issues\n🔬 **Other projects:** Pix2Pix (GANs), Skin Lesion (CV)\n\nSay "AI skills" or "AI projects" for details!`;
        }

        case 'research': {
            updateMemory('research');
            let out = lang === 'ur'
                ? `Samreen ki **AI research interests**:\n\n`
                : `Samreen's **AI research interests**:\n\n`;
            PROFILE.aiFocus.researchInterests.forEach(r => {
                out += `• ${r}\n`;
            });
            return out.trim();
        }

        case 'more_detail': {
            const topic = intent.topic;
            if (topic === 'ai_skills' || topic === 'ai_focus') {
                return lang === 'ur'
                    ? `Samreen ke AI/ML skills ki aur detail:\n\n**NLP:** Transformers, sentiment analysis, text classification\n**Computer Vision:** CNNs, ConvNeXt, ViT, GANs (U-Net + PatchGAN)\n**Frameworks:** PyTorch (primary), TensorFlow, Scikit-learn\n**Techniques:** Transfer learning, model optimization, data augmentation\n\nKisi specific area ke baare mein poochna hai?`
                    : `Deeper dive into Samreen's AI/ML skills:\n\n**NLP:** Transformers, sentiment analysis, text classification\n**Computer Vision:** CNNs, ConvNeXt, ViT, GANs (U-Net + PatchGAN)\n**Frameworks:** PyTorch (primary), TensorFlow, Scikit-learn\n**Techniques:** Transfer learning, model optimization, data augmentation\n\nWant to know more about a specific area?`;
            }
            if (topic === 'ai_projects' || topic === 'projects') {
                return renderProjectsList(lang);
            }
            if (topic === 'figma_projects_list' || topic === 'figma_projects_filtered') {
                return lang === 'ur'
                    ? `Samreen ke Figma kaam ki detail (secondary skill):\n\n• **LibraSync** (university) — mobile app UI\n• **SK Fashion, SK Donuts** — brand websites\n• 8 aur self-taught designs\n\nNote: Figma unka secondary skill hai — main focus AI/ML hai.`
                    : `Some detail on Samreen's Figma work (secondary skill):\n\n• **LibraSync** (university) — mobile app UI\n• **SK Fashion, SK Donuts** — brand websites\n• 8 more self-taught designs\n\nNote: Figma is her secondary skill — her main focus is AI/ML.`;
            }
            if (topic === 'education') {
                return lang === 'ur'
                    ? `Education: BS CS from FAST NUCES (2022–2026). Core courses: AI, Generative AI, DSA, DB, OS, Networks, Mobile App Dev, Cloud Computing. Dean's List 2026. 🏆`
                    : `Education: BS CS from FAST NUCES (2022–2026). Core courses: AI, Generative AI, DSA, DB, OS, Networks, Mobile App Dev, Cloud Computing. Dean's List 2026. 🏆`;
            }
            if (topic === 'experience') {
                return lang === 'ur'
                    ? `Uske role ki detail: Web Developer at Proagency ApS (Denmark, Feb 2026 se). Wo:\n• Client WordPress sites build aur customize karti hai\n• Front-end (HTML/CSS) responsive design ke saath\n• Back-end aur SQL/database tasks\n• Debugging, requirement analysis, aur project management\n• Client requirements ko technical solutions mein translate karti hai`
                    : `More detail on her role: As a Web Developer at Proagency ApS (Denmark, from Feb 2026), she:\n• Builds & customizes client WordPress sites\n• Handles front-end (HTML/CSS) with responsive design\n• Manages back-end & SQL/database tasks\n• Handles debugging, requirement analysis, and project management\n• Translates client requirements into technical solutions\n\nWant to know something specific about the role?`;
            }
            return lang === 'ur'
                ? `Kis cheez ki detail chahiye? AI skills, projects, research, education, ya experience — bataiye!`
                : `What would you like expanded? AI skills, projects, research, education, or experience — let me know!`;
        }

        case 'why_how': {
            const topic = intent.topic;
            if (topic === 'ai_focus' || topic === 'ai_skills' || topic === 'ai_projects') {
                return lang === 'ur'
                    ? `Samreen AI/ML mein isliye aayi kyunki wo real-world problems solve karna chahti thi — Pakistani social issues (TweetLens), medical imaging (Skin Lesion), aur creative AI (Pix2Pix). FAST NUCES ne AI aur Generative AI courses se strong foundation di, aur FYP ne NLP mein hands-on experience. 🎯`
                    : `Samreen chose AI/ML because she wanted to solve real-world problems — Pakistani social issues (TweetLens), medical imaging (Skin Lesion), and creative AI (Pix2Pix). FAST NUCES gave her a strong foundation through AI and Generative AI courses, and her FYP gave her hands-on NLP experience. 🎯`;
            }
            return lang === 'ur'
                ? `Achha sawal! Specific bataiye kis cheez ka "why" jaanna hai — AI choice, projects, education, ya career.`
                : `Good question! Tell me what you'd like me to explain — AI choice, projects, education, or career direction.`;
        }

        case 'recommendation': {
            let topic = intent.topic;
            if (!topic || topic === null) {
                const t = (intent.original || '').toLowerCase();
                if (/\bfigma\b/.test(t)) topic = 'figma_projects_list';
                else if (/\bai\b|\bml\b|\bproject/.test(t)) topic = 'ai_projects';
                else if (/\bskills?\b/.test(t)) topic = 'skills_general';
            }
            if (topic === 'figma_projects_list' || topic === 'figma_projects_filtered' || topic === 'figma_skill' || topic === 'figma_project') {
                return lang === 'ur'
                    ? `Uska standout Figma project **LibraSync** hai — complete mobile app design, university coursework, real UX thinking. Lekin **AI/ML unka main focus hai** — "AI projects" bolein!`
                    : `Her standout Figma project is **LibraSync** — a complete mobile app design from university coursework with real UX thinking. But **AI/ML is her main focus** — ask "AI projects"!`;
            }
            if (topic === 'ai_projects' || topic === 'projects' || topic === 'project_tweetlens' || topic === 'project_pix2pix' || topic === 'project_skin' || topic === 'project_ddpm' || topic === 'project_cyclegan' || topic === 'project_dcgan' || topic === 'project_qwen') {
                return lang === 'ur'
                    ? `Uska sab se impressive **AI project TweetLens Pakistan** hai — Final Year Project, 13,000+ tweets par NLP analysis (theft, loadshedding, water shortage), real social impact. 🌟`
                    : `Her most impressive **AI project is TweetLens Pakistan** — Final Year Project, NLP analysis on 13,000+ tweets (theft, loadshedding, water shortage), real social impact. 🌟`;
            }
            if (topic === 'ai_skills' || topic === 'skills_general') {
                return lang === 'ur'
                    ? `Uska strongest combination **NLP + Computer Vision + PyTorch** hai. Transformers, GANs, aur Vision Transformers — dono NLP aur CV mein hands-on experience. 💪`
                    : `Her strongest combination is **NLP + Computer Vision + PyTorch**. Transformers, GANs, and Vision Transformers — hands-on experience across both NLP and CV. 💪`;
            }
            return lang === 'ur'
                ? `Technical depth ke liye — **TweetLens Pakistan** (NLP). Design ke liye — LibraSync. Medical AI ke liye — Skin Lesion. Aap ke liye kya matter karta hai?`
                : `For technical depth — **TweetLens Pakistan** (NLP). For design — LibraSync. For medical AI — Skin Lesion. What matters most to you?`;
        }

        case 'affirmative': {
            const topic = intent.topic;
            if (topic === 'figma_projects_list' || topic === 'figma_skill') {
                return lang === 'ur'
                    ? `Zaroor! Uske saare 11 Figma projects:\n\n**University:** LibraSync\n**Self-taught:** SK Fashion, SK Donuts, UI Card Designs, Poster Designs, Landing Page, Dashboard UI, Mobile UI Kit, E-commerce Page, Portfolio Website, Blog Layout.\n\n(Waise, unka main focus AI/ML hai — "AI projects" bhi pooch sakte hain!)`
                    : `Great! Here are all 11 Figma projects:\n\n**University:** LibraSync\n**Self-taught:** SK Fashion, SK Donuts, UI Card Designs, Poster Designs, Landing Page, Dashboard UI, Mobile UI Kit, E-commerce Page, Portfolio Website, Blog Layout.\n\n(By the way, her main focus is AI/ML — you can also ask "AI projects"!)`;
            }
            if (topic === 'projects' || topic === 'ai_projects') {
                return renderProjectsList(lang);
            }
            return lang === 'ur'
                ? `Zaroor! Kya jaanna chahenge — AI skills, projects, research, education, experience, ya contact?`
                : `Great! What would you like to know — AI skills, projects, research, education, experience, or contact?`;
        }

        case 'negative':
            updateMemory(m.lastTopic);
            return lang === 'ur'
                ? pickRandom([
                    `Koi baat nahi! Aur kuch jaanna chahenge?`,
                    `Theek hai! AI/ML, projects, ya experience ke baare mein poochein.`,
                    `Bilkul! Jab chahein poochein. 😊`
                ])
                : pickRandom([
                    `No problem! What else would you like to know?`,
                    `Alright! Ask about AI/ML, projects, or experience.`,
                    `Sure thing! I'm here if you have more questions. 😊`
                ]);

        case 'multi_question': {
            const t = intent.text;
            let partsEn = [];
            let partsUr = [];
            if (/\b(ai|ml|skill)/.test(t)) {
                partsEn.push('**AI/ML Skills:** Python, ML, DL, GenAI, NLP, Computer Vision, PyTorch, TensorFlow');
                partsUr.push('**AI/ML Skills:** Python, ML, DL, GenAI, NLP, Computer Vision, PyTorch, TensorFlow');
            }
            if (/\beducat/.test(t)) {
                partsEn.push('**Education:** BS CS from FAST NUCES, Islamabad (2022–2026).');
                partsUr.push('**Education:** BS CS, FAST NUCES Islamabad se (2022–2026).');
            }
            if (/\bexperience/.test(t)) {
                partsEn.push('**Experience:** Web Developer at Proagency ApS (Denmark).');
                partsUr.push('**Experience:** Web Developer at Proagency ApS (Denmark).');
            }
            if (/\bproject/.test(t)) {
                partsEn.push('**AI Projects:** TweetLens (13K+ tweets, NLP), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL. Plus 11 Figma designs.');
                partsUr.push('**AI Projects:** TweetLens (13K+ tweets, NLP), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL. Plus 11 Figma designs.');
            }
            if (/\bfigma/.test(t)) {
                partsEn.push('**Figma:** 11 design projects (secondary skill).');
                partsUr.push('**Figma:** 11 design projects (secondary skill).');
            }
            if (/\bcontact/.test(t)) {
                partsEn.push(`**Contact:** ${p.contact.email} · ${p.contact.linkedin}`);
                partsUr.push(`**Contact:** ${p.contact.email} · ${p.contact.linkedin}`);
            }

            updateMemory('multi');
            if (lang === 'ur') {
                return `Yahan quick rundown hai:\n\n${partsUr.join('\n\n')}\n\nKisi bhi cheez ki detail chahiye to bataiye.`;
            }
            return `Here's a quick rundown:\n\n${partsEn.join('\n\n')}\n\nWant me to expand on any of these?`;
        }

        case 'figma_project_by_index': {
            let list = PROFILE.figmaProjects;
            if (chatMemory.lastCategory === 'university') list = list.filter(f => f.category === 'university');
            if (chatMemory.lastCategory === 'self-taught') list = list.filter(f => f.category === 'self-taught');

            const idx = intent.index === -1 ? list.length - 1 : intent.index;
            if (idx < 0 || idx >= list.length) {
                return lang === 'ur'
                    ? `Is list mein ye index nahi hai. 1 se ${list.length} ke darmiyan number dein.`
                    : `That index doesn't exist. Try a number between 1 and ${list.length}.`;
            }
            const proj = list[idx];
            updateMemory('figma_projects_list', proj.name, proj.category);
            const cat = proj.category === 'university' ? 'University coursework' : 'Self-taught';
            return `**${proj.name}** — ${cat}\n\n${proj.desc}\n\n🔗 ${proj.link}`;
        }

        case 'project_by_index': {
            const list = PROFILE.projects;
            const idx = intent.index === -1 ? list.length - 1 : intent.index;
            if (idx < 0 || idx >= list.length) {
                return lang === 'ur'
                    ? `Ye index nahi hai. Uske paas ${list.length} main AI/ML projects hain.`
                    : `That index doesn't exist. She has ${list.length} main AI/ML projects.`;
            }
            const proj = list[idx];
            updateMemory('projects', proj.name);
            return renderProjectCard(proj);
        }

                case 'intro':
            updateMemory('intro');
            return lang === 'ur'
                ? `👋 **Samreen Kazmi**\n\n` +
                  `💼 **Current Role**\n` +
                  `Web Developer @ Proagency ApS (Denmark)\n\n` +
                  `🎓 **Education**\n` +
                  `BS Computer Science — FAST NUCES (2022–2026)\n\n` +
                  `🎯 **Focus Areas**\n` +
                  `• AI/ML Engineering\n` +
                  `• NLP · Computer Vision · Generative AI\n` +
                  `• WordPress · PHP · Full-Stack Development\n\n` +
                  `🌟 **Highlight**\n` +
                  `Final Year Project — **TweetLens Pakistan**\n` +
                  `Processed 13,000+ tweets from X (Twitter) for sentiment analysis on theft, loadshedding, and water shortage.\n\n` +
                  `──────────────\n` +
                  `🏆 **Dean's List** — FAST NUCES (2026)\n\n` +
                  `💡 Pooch sakte hain: "AI skills", "AI projects", ya "contact info"`
                : `👋 **Samreen Kazmi**\n\n` +
                  `💼 **Current Role**\n` +
                  `Web Developer @ Proagency ApS (Denmark)\n\n` +
                  `🎓 **Education**\n` +
                  `BS Computer Science — FAST NUCES (2022–2026)\n\n` +
                  `🎯 **Focus Areas**\n` +
                  `• AI/ML Engineering\n` +
                  `• NLP · Computer Vision · Generative AI\n` +
                  `• WordPress · PHP · Full-Stack Development\n\n` +
                  `🌟 **Highlight**\n` +
                  `Final Year Project — **TweetLens Pakistan**\n` +
                  `Processed 13,000+ tweets from X (Twitter) for sentiment analysis on theft, loadshedding, and water shortage.\n\n` +
                  `──────────────\n` +
                  `🏆 **Dean's List** — FAST NUCES (2026)\n\n` +
                  `💡 Try asking: "AI skills", "AI projects", or "contact info"`;
        case 'name':
            updateMemory('intro');
            return lang === 'ur'
                ? `Uska poora naam Samreen Kazmi hai. 😊`
                : `Her full name is Samreen Kazmi. 😊`;

        case 'age':
            updateMemory('intro');
            return lang === 'ur'
                ? `Samreen 11 February 2004 ko Pakistan mein paida hui — abhi 21 saal ki hain.`
                : `Samreen was born on 11 February 2004 in Pakistan — she's currently 21 years old.`;

        case 'location':
            updateMemory('intro');
            return lang === 'ur'
                ? `Wo Lahore, Pakistan mein based hain. Denmark ki ek company ke liye remotely kaam karti hain. 🇵🇰`
                : `She's based in Lahore, Pakistan. She currently works remotely for a company based in Denmark. 🇵🇰`;

                case 'education':
            updateMemory('education');
            return lang === 'ur'
                ? `🎓 **Education**\n\n` +
                  `**BS in Computer Science**\n` +
                  `FAST NUCES, Islamabad\n` +
                  `2022 – 2026\n\n` +
                  `**📚 Core AI Courses:**\n` +
                  `• Artificial Intelligence\n` +
                  `• Generative AI\n` +
                  `• Machine Learning\n\n` +
                  `**💻 Other Core Courses:**\n` +
                  `• OOP\n` +
                  `• Data Structures & Algorithms\n` +
                  `• Database Systems\n` +
                  `• Software Engineering\n` +
                  `• Computer Networks\n` +
                  `• Operating Systems\n` +
                  `• Mobile App Development\n` +
                  `• Cloud Computing\n\n` +
                  `──────────────\n` +
                  `🏆 **Dean's List** — 2026`
                : `🎓 **Education**\n\n` +
                  `**BS in Computer Science**\n` +
                  `FAST NUCES, Islamabad\n` +
                  `2022 – 2026\n\n` +
                  `**📚 Core AI Courses:**\n` +
                  `• Artificial Intelligence\n` +
                  `• Generative AI\n` +
                  `• Machine Learning\n\n` +
                  `**💻 Other Core Courses:**\n` +
                  `• OOP\n` +
                  `• Data Structures & Algorithms\n` +
                  `• Database Systems\n` +
                  `• Software Engineering\n` +
                  `• Computer Networks\n` +
                  `• Operating Systems\n` +
                  `• Mobile App Development\n` +
                  `• Cloud Computing\n\n` +
                  `──────────────\n` +
                  `🏆 **Dean's List** — 2026`;
            
        case 'technical_skills': {
            updateMemory('technical_skills');
            const ai = PROFILE.skills.ai_ml;
            const tech = PROFILE.skills.technical;
            const design = PROFILE.skills.design;
            return lang === 'ur'
                ? `Uska technical toolkit:\n\n🧠 **AI/ML:** ${ai.join(', ')}\n\n💻 **Tech:** ${tech.join(', ')}\n\n🎨 **Design:** ${design.join(', ')}`
                : `Her technical toolkit:\n\n🧠 **AI/ML:** ${ai.join(', ')}\n\n💻 **Tech:** ${tech.join(', ')}\n\n🎨 **Design:** ${design.join(', ')}`;
        }

        case 'soft_skills':
            updateMemory('soft_skills');
            return lang === 'ur'
                ? `Uske soft skills: ${PROFILE.skills.soft.join(', ')}. 💪`
                : `Her soft skills: ${PROFILE.skills.soft.join(', ')}. 💪`;

        case 'skills_general': {
            updateMemory('skills_general');
            const ai = PROFILE.skills.ai_ml.slice(0, 8).join(', ');
            const tech = PROFILE.skills.technical.slice(0, 6).join(', ');
            return lang === 'ur'
                ? `Samreen ke paas **AI/ML + Full-Stack** ka strong mix hai.\n\n🧠 **AI/ML:** ${ai}...\n💻 **Tech:** ${tech}...\n🤝 **Soft:** Problem solving, leadership, teamwork\n\n"AI skills" ya "technical skills" bolein detail ke liye.`
                : `Samreen has a strong mix of **AI/ML + Full-Stack** skills.\n\n🧠 **AI/ML:** ${ai}...\n💻 **Tech:** ${tech}...\n🤝 **Soft:** Problem solving, leadership, teamwork\n\nSay "AI skills" or "technical skills" for details.`;
        }

        case 'figma_skill':
            updateMemory('figma_skill');
            return lang === 'ur'
                ? `Haan, Figma uske **secondary skill** hai. Usne **11 design projects** kiye hain — 1 university coursework aur 10 self-taught. Lekin unka **main focus AI/ML hai** — "AI skills" bhi poochein!`
                : `Yes, Figma is one of her **secondary skills**. She's done **11 design projects** — 1 university coursework and 10 self-taught. But her **main focus is AI/ML** — ask "AI skills" too!`;

        case 'figma_projects_list': {
            const uni = PROFILE.figmaProjects.filter(f => f.category === 'university');
            const self = PROFILE.figmaProjects.filter(f => f.category === 'self-taught');
            updateMemory('figma_projects_list');
            return lang === 'ur'
                ? `Uske paas **${PROFILE.figmaProjects.length} Figma projects** hain (secondary skill):\n\n🎓 **University:** LibraSync\n📚 **Self-taught:** SK Fashion, SK Donuts, UI Cards, Posters, Landing Page, Dashboard, Mobile UI Kit, E-commerce Page, Portfolio Website, Blog Layout.\n\n(Unka main focus AI/ML hai — "AI projects" bhi poochein!)`
                : `She has **${PROFILE.figmaProjects.length} Figma projects** (secondary skill):\n\n🎓 **University:** LibraSync\n📚 **Self-taught:** SK Fashion, SK Donuts, UI Cards, Posters, Landing Page, Dashboard, Mobile UI Kit, E-commerce Page, Portfolio Website, Blog Layout.\n\n(Her main focus is AI/ML — try "AI projects" too!)`;
        }

        case 'figma_projects_filtered': {
            const { universityOnly, selfTaughtOnly } = intent.filter;
            let list = PROFILE.figmaProjects;
            let label = '';
            let cat = null;
            if (universityOnly) {
                list = list.filter(f => f.category === 'university');
                label = 'university coursework';
                cat = 'university';
            } else if (selfTaughtOnly) {
                list = list.filter(f => f.category === 'self-taught');
                label = 'self-taught';
                cat = 'self-taught';
            }
            if (list.length === 0) {
                return lang === 'ur'
                    ? `Koi ${label} Figma project nahi mila.`
                    : `Hmm, I couldn't find any ${label} Figma projects.`;
            }
            const names = list.map(f => f.name).join(', ');
            updateMemory('figma_projects_filtered', null, cat);
            return lang === 'ur'
                ? `Uske paas **${list.length}** ${label} Figma project hain:\n${names}`
                : `She has **${list.length}** ${label} Figma project${list.length > 1 ? 's' : ''}:\n${names}`;
        }

        case 'figma_project': {
            const proj = PROFILE.figmaProjects.find(f => f.name === intent.project);
            if (proj) {
                const cat = proj.category === 'university' ? 'University coursework' : 'Self-taught';
                updateMemory('figma_project', proj.name, proj.category);
                return `**${proj.name}** — ${cat}\n\n${proj.desc}\n\n🔗 Open prototype: ${proj.link}`;
            }
            return lang === 'ur'
                ? `Wo specific project nahi mila. "figma projects" poochein poori list ke liye.`
                : `I couldn't find that specific project. Try asking "figma projects" for the full list.`;
        }

        case 'specific_skill': {
            const s = intent.skill;
            updateMemory('specific_skill', s);
            const detailsEn = {
                'python': `Yes! Python is her primary language — she uses it extensively for AI/ML projects (TweetLens, DDPM, Pix2Pix, Skin Lesion). 🐍`,
                'sql': `Absolutely — she handles SQL and database operations in her development work.`,
                'wordpress': `Yes, WordPress is her current professional focus at Proagency ApS — and she has strong AI/ML skills alongside it.`,
                'php': `Yes, PHP is part of her full-stack toolkit at Proagency ApS.`,
                'html': `Yes, she builds responsive interfaces using HTML and CSS.`,
                'css': `Yes, she uses CSS for responsive design and visual consistency.`,
                'database': `Yes — she handles SQL and database operations.`,
                'databases': `Yes — she handles SQL and database operations.`,
                'cloud': `Cloud Computing was one of her core courses at FAST NUCES.`,
                'mobile': `Mobile Application Development was part of her CS curriculum — and she designed a mobile UI (LibraSync) in Figma.`,
                'android': `Mobile Application Development was part of her CS curriculum.`
            };
            const detailsUr = {
                'python': `Haan! Python uski primary language hai — AI/ML projects (TweetLens, DDPM, Pix2Pix, Skin Lesion) mein use karti hai. 🐍`,
                'sql': `Bilkul — wo SQL aur database operations handle karti hai.`,
                'wordpress': `Haan, WordPress uska current professional role hai (Proagency ApS mein), aur saath hi unke paas strong AI/ML skills bhi hain.`,
                'php': `Haan, PHP unke full-stack toolkit ka hissa hai.`,
                'html': `Haan, wo HTML aur CSS se responsive interfaces banati hai.`,
                'css': `Haan, wo CSS responsive design ke liye use karti hai.`,
                'database': `Haan — SQL aur database operations handle karti hai.`,
                'databases': `Haan — SQL aur database operations handle karti hai.`,
                'cloud': `Cloud Computing uske core courses mein se tha.`,
                'mobile': `Mobile App Development uske CS curriculum ka hissa tha — aur usne Figma mein mobile UI (LibraSync) design kiya.`,
                'android': `Mobile App Development uske CS curriculum ka hissa tha.`
            };
            return lang === 'ur'
                ? (detailsUr[s] || `Haan, uske paas ${s} ka experience hai.`)
                : (detailsEn[s] || `Yes, she has experience with ${s}.`);
        }

        case 'experience':
            updateMemory('experience');
            return lang === 'ur'
                ? `Wo currently **Web Developer** hain **Proagency ApS** (Denmark) mein, Feb 2026 se — focus: **WordPress, PHP, aur Full-Stack development**. Unka **AI/ML background** bhi strong hai — academic aur project work ke through (NLP, Computer Vision, GenAI). Wo **AI/ML roles** ke liye actively looking hain, aur apne current role mein bhi top-quality kaam kar rahi hain.`
                : `She currently works as a **Web Developer** at **Proagency ApS** (Denmark, from Feb 2026) — focus: **WordPress, PHP, and Full-Stack development**. She also has a strong **AI/ML background** through academic and project work (NLP, Computer Vision, GenAI). She's **actively looking for AI/ML roles**, while continuing to deliver strong work in her current position.`;

        case 'project_tweetlens': {
            updateMemory('projects', 'TweetLens');
            const proj = PROFILE.projects.find(p => p.shortName === 'TweetLens');
            return renderProjectCard(proj);
        }

        case 'project_pix2pix': {
            updateMemory('projects', 'Pix2Pix');
            const proj = PROFILE.projects.find(p => p.shortName === 'Pix2Pix');
            return renderProjectCard(proj);
        }

        case 'project_skin': {
            updateMemory('projects', 'Skin Lesion Classification');
            const proj = PROFILE.projects.find(p => p.shortName === 'Skin Lesion');
            return renderProjectCard(proj);
        }

        case 'project_ddpm': {
            updateMemory('projects', 'DDPM');
            const proj = PROFILE.projects.find(p => p.shortName === 'DDPM');
            return renderProjectCard(proj);
        }

        case 'project_cyclegan': {
            updateMemory('projects', 'CycleGAN');
            const proj = PROFILE.projects.find(p => p.shortName === 'CycleGAN');
            return renderProjectCard(proj);
        }

        case 'project_dcgan': {
            updateMemory('projects', 'DCGAN + WGAN-GP');
            const proj = PROFILE.projects.find(p => p.shortName === 'DCGAN + WGAN-GP');
            return renderProjectCard(proj);
        }

        case 'project_qwen': {
            updateMemory('projects', 'Qwen2-VL');
            const proj = PROFILE.projects.find(p => p.shortName === 'Qwen2-VL');
            return renderProjectCard(proj);
        }

        case 'certifications':
            updateMemory('certifications');
            return lang === 'ur'
                ? `Uske paas **do Coursera certifications** hain UX Design mein (dono 2025 se).\n\n(Note: unka main focus AI/ML hai, ye certifications UX/design side ke liye hain.)`
                : `She has **two Coursera certifications** in UX Design (both from 2025).\n\n(Note: her main focus is AI/ML — these certifications are for the UX/design side.)`;

        case 'awards':
            updateMemory('awards');
            return lang === 'ur'
                ? `🏆 Samreen ne **Dean's List** achieve kiya FAST NUCES mein 2026 — academic excellence ki recognition!`
                : `🏆 Samreen made it to the **Dean's List** at FAST NUCES in 2026 — recognition of her academic excellence!`;

        case 'languages':
            updateMemory('languages');
            return lang === 'ur'
                ? `Wo **Urdu (native), English, Turkish, aur Korean** bolti hain. 🌍`
                : `She speaks **Urdu (native), English, Turkish, and Korean**. 🌍`;

        case 'hobbies':
            updateMemory('hobbies');
            return lang === 'ur'
                ? `Kaam ke ilawa: **reading, painting, photography, music, travelling**. 🎨📚✈️`
                : `Outside of work: **reading, painting, photography, music, travelling**. 🎨📚✈️`;

        case 'contact': {
            const t = (intent.original || '').toLowerCase();
            const wantsEmail = /\b(email|mail|gmail|e-mail|e mail|email address)\b/.test(t);
            const wantsLinkedIn = /\blinkedin|linked in|linked-in\b/.test(t);

            if (wantsEmail && !wantsLinkedIn) {
                updateMemory('contact');
                return lang === 'ur'
                    ? `Samreen ka email: **${p.contact.email}** 📧\n\nAI/ML roles ya collaboration ke liye email karein!`
                    : `Samreen's email: **${p.contact.email}** 📧\n\nFor AI/ML roles or collaboration, drop her an email!`;
            }

            if (wantsLinkedIn && !wantsEmail) {
                updateMemory('contact');
                return lang === 'ur'
                    ? `Samreen ka LinkedIn: **${p.contact.linkedin}** 🔗\n\nAI/ML opportunities ke liye connect karein!`
                    : `Samreen's LinkedIn: **${p.contact.linkedin}** 🔗\n\nConnect for AI/ML opportunities!`;
            }

            updateMemory('contact');
            return lang === 'ur'
                ? `Samreen se rabta karne ke liye:\n\n📧 **Email:** ${p.contact.email}\n🔗 **LinkedIn:** ${p.contact.linkedin}\n\nAI/ML roles, collaborations, ya research discussions ke liye! 🤖`
                : `You can reach Samreen at:\n\n📧 **Email:** ${p.contact.email}\n🔗 **LinkedIn:** ${p.contact.linkedin}\n\nFor AI/ML roles, collaborations, or research discussions! 🤖`;
        }

        case 'resume':
            updateMemory('contact');
            return lang === 'ur'
                ? `CV request karne ke liye **${p.contact.email}** par email karein — AI/ML-focused CV share karengi!`
                : `Request her CV at **${p.contact.email}** — she has an AI/ML-focused version ready!`;

        case 'availability':
            updateMemory('contact');
            return lang === 'ur'
                ? `Haan! Samreen **AI/ML roles** ke liye actively looking hain — full-time, internship, ya research.\n\n🎯 **AI/ML Focus:** Machine Learning, NLP, Computer Vision, GenAI\n💼 **Current:** Web Developer @ Proagency ApS (Denmark)\n📊 **Portfolio:** TweetLens (13K+ tweets), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL\n\n📧 **${p.contact.email}**\n🔗 ${p.contact.linkedin}`
                : `Yes! Samreen is **actively looking for AI/ML roles** — full-time, internship, or research.\n\n🎯 **AI/ML Focus:** Machine Learning, NLP, Computer Vision, GenAI\n💼 **Current:** Web Developer @ Proagency ApS (Denmark)\n📊 **Portfolio:** TweetLens (13K+ tweets), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL\n\n📧 **${p.contact.email}**\n🔗 ${p.contact.linkedin}`;

        case 'help':
            updateMemory('help');
            return lang === 'ur'
                ? `Main Samreen ke baare mein ye sab bata sakta hoon:\n\n🧠 **AI/ML** — skills, projects, research interests\n📁 **Projects** — TweetLens (13K+ tweets), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL\n💼 **Experience** — Proagency ApS (Web Developer)\n🎓 **Education** — FAST NUCES + Dean's List\n🛠️ **Skills** — AI/ML, technical, soft\n🎨 **Figma** — 11 design projects (secondary skill)\n📜 **Certifications** — 2 Coursera UX certs\n🌍 **Languages** — Urdu, English, Turkish, Korean\n📧 **Contact** — email + LinkedIn\n💼 **Hire?** — AI/ML roles ke liye available\n\nKisi bhi cheez ka naam bolein, ya quick buttons click karein!`
                : `I can tell you about:\n\n🧠 **AI/ML** — skills, projects, research interests\n📁 **Projects** — TweetLens (13K+ tweets), DDPM (Diffusion), Skin Lesion (CV), CycleGAN, DCGAN/WGAN-GP, Qwen2-VL\n💼 **Experience** — Proagency ApS (Web Developer)\n🎓 **Education** — FAST NUCES + Dean's List\n🛠️ **Skills** — AI/ML, technical, soft\n🎨 **Figma** — 11 design projects (secondary skill)\n📜 **Certifications** — 2 Coursera UX certs\n🌍 **Languages** — Urdu, English, Turkish, Korean\n📧 **Contact** — email + LinkedIn\n💼 **Hire?** — available for AI/ML roles\n\nSay any topic name, or tap a quick button!`;

        case 'unknown':
        default:
            updateMemory(m.lastTopic);
            return lang === 'ur'
                ? pickRandom([
                    `Hmm, samajh nahi aaya. 🤔 Samreen ke AI/ML work, projects, skills, education, experience, ya contact ke baare mein poochein.`,
                    `Try karein: "AI skills", "AI projects", ya "contact info".`,
                    `Iska jawab nahi hai. AI/ML, projects, ya education ke baare mein poochein!`
                ])
                : pickRandom([
                    `Hmm, I'm not sure I understood that. 🤔 Ask me about Samreen's AI/ML work, projects, skills, education, experience, or contact.`,
                    `Try: "AI skills", "AI projects", or "contact info".`,
                    `Not sure about that. Ask me about her AI/ML focus, projects, or education!`
                ]);
    }
}

// ============================================================
// TYPING ANIMATION — Faster
// ============================================================
async function typeMessage(text, element) {
    element.classList.add('typing');
    const chars = text.split('');
    let current = '';
    for (let i = 0; i < chars.length; i++) {
        current += chars[i];
        element.innerHTML = `🤖 ${current}`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
        const delay = /[ .,!?]/.test(chars[i]) ? 8 : 14;
        await new Promise(r => setTimeout(r, delay));
    }
    element.classList.remove('typing');
}

function showTypingDots() {
    const dots = document.createElement('div');
    dots.className = 'typing-indicator';
    dots.id = 'typingDots';
    dots.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(dots);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingDots() {
    const dots = document.getElementById('typingDots');
    if (dots) dots.remove();
}

// ============================================================
// QUICK REPLY BUTTONS
// ============================================================
const quickReplies = document.getElementById('quickReplies');

const QUICK_REPLIES = {
    default: [
        { label: '🧠 AI Skills', query: 'What AI skills does she have?' },
        { label: '📁 AI Projects', query: 'Tell me about her AI projects' },
        { label: '🔬 Research', query: 'What are her research interests?' },
        { label: '💼 Experience', query: 'What is her work experience?' },
        { label: '🎓 Education', query: 'Tell me about her education' },
        { label: '🏆 Awards', query: 'What awards has she won?' },
        { label: '🌍 Languages', query: 'What languages does she speak?' },
        { label: '🎨 Figma', query: 'Figma projects' },
        { label: '📧 Contact', query: 'How can I contact her?' },
        { label: '💼 Hire?', query: 'Is she available for AI roles?' },
        { label: '👋 Intro', query: 'Tell me about her' },
        { label: '❓ Help', query: 'What can you tell me?' }
    ],
    ai: [
        { label: '📊 TweetLens', query: 'Tell me about TweetLens' },
        { label: '🧠 DDPM', query: 'Tell me about DDPM' },
        { label: '🔬 Skin Lesion', query: 'Tell me about Skin Lesion Classification' },
        { label: '🎨 CycleGAN', query: 'Tell me about CycleGAN' },
        { label: '👾 DCGAN + WGAN-GP', query: 'Tell me about DCGAN WGAN-GP' },
        { label: '🤖 Qwen2-VL', query: 'Tell me about Qwen2-VL' },
        { label: '🧠 AI Skills', query: 'What AI skills does she have?' },
        { label: '💼 AI Roles?', query: 'Is she available for AI roles?' },
        { label: '🔙 Back', query: 'back' }
    ],
    projects: [
        { label: '📊 TweetLens (NLP)', query: 'Tell me about TweetLens' },
        { label: '🧠 DDPM (Diffusion)', query: 'Tell me about DDPM' },
        { label: '🔬 Skin Lesion (CV)', query: 'Tell me about Skin Lesion Classification' },
        { label: '🎨 CycleGAN', query: 'Tell me about CycleGAN' },
        { label: '👾 DCGAN + WGAN-GP', query: 'Tell me about DCGAN WGAN-GP' },
        { label: '🤖 Qwen2-VL (VLM)', query: 'Tell me about Qwen2-VL' },
        { label: '🧠 AI Skills', query: 'What AI skills does she have?' },
        { label: '🔙 Back', query: 'back' }
    ],
    figma: [
        { label: '📋 All Figma', query: 'Figma projects' },
        { label: '🎓 University', query: 'University figma projects' },
        { label: '📚 Self-taught', query: 'Self-taught figma projects' },
        { label: '🧠 AI Projects', query: 'Tell me about her AI projects' },
        { label: '🔙 Back', query: 'back' }
    ],
    contact: [
        { label: '📧 Email', query: 'What is her email address?' },
        { label: '🔗 LinkedIn', query: 'What is her LinkedIn profile?' },
        { label: '💼 AI Roles?', query: 'Is she available for AI roles?' },
        { label: '🔙 Back', query: 'back' }
    ]
};

function renderQuickReplies(setName = 'default') {
    if (!quickReplies) return;
    quickReplies.innerHTML = '';
    const replies = QUICK_REPLIES[setName] || QUICK_REPLIES.default;
    replies.forEach(r => {
        const btn = document.createElement('button');
        btn.className = 'quick-btn';
        btn.textContent = r.label;
        btn.onclick = () => {
            if (r.query === 'back') {
                renderQuickReplies('default');
                return;
            }
            chatInput.value = r.query;
            sendChatMessage();
        };
        quickReplies.appendChild(btn);
    });
}

function updateQuickRepliesForTopic(topic) {
    if (!topic) {
        renderQuickReplies('default');
        return;
    }
    if (topic === 'ai_skills' || topic === 'ai_focus' || topic === 'ai_projects' || topic === 'ai_experience' || topic === 'research' || topic === 'projects' || topic === 'project_tweetlens' || topic === 'project_pix2pix' || topic === 'project_skin' || topic === 'project_ddpm' || topic === 'project_cyclegan' || topic === 'project_dcgan' || topic === 'project_qwen') {
        renderQuickReplies('ai');
    } else if (topic === 'figma_projects_list' || topic === 'figma_skill' || topic === 'figma_projects_filtered' || topic === 'figma_project') {
        renderQuickReplies('figma');
    } else if (topic === 'contact' || topic === 'resume' || topic === 'availability') {
        renderQuickReplies('contact');
    } else {
        renderQuickReplies('default');
    }
}

// ============================================================
// CHAT WELCOME MESSAGE
// ============================================================
function showChatWelcome() {
    const welcome = document.createElement('div');
    welcome.className = 'bot-msg chat-welcome';
    welcome.innerHTML = `🤖 <strong>Hi! I'm Samreen's AI assistant.</strong><br>
        Ask me about her <strong>AI/ML work</strong>, projects, skills, or research — or tap a quick question below 👇<br>
        <span class="welcome-hint">💡 Try: "AI projects" · "AI skills" · "Research interests" · "Contact info"</span>`;
    chatMessages.appendChild(welcome);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    renderQuickReplies('default');
}

// ============================================================
// CHAT MESSAGE HANDLING
// ============================================================
function addChatMessage(text, isUser = true) {
    const msg = document.createElement('div');
    msg.className = isUser ? 'user-msg' : 'bot-msg';
    msg.innerHTML = isUser ? `> ${text}` : `🤖 ${text}`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addChatMessage(text, true);
    chatInput.value = '';
    chatInput.disabled = true;
    sendChatBtn.disabled = true;

    document.querySelectorAll('.quick-btn').forEach(b => b.disabled = true);

    showTypingDots();

    const intent = analyzeIntent(text);
    const reply = generateReply(intent);

    const thinkTime = Math.min(300 + reply.length * 3, 800);
    await new Promise(r => setTimeout(r, thinkTime));

    hideTypingDots();
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-msg';
    botMsg.innerHTML = '🤖 ';
    chatMessages.appendChild(botMsg);

    await typeMessage(reply, botMsg);

    chatInput.disabled = false;
    sendChatBtn.disabled = false;
    document.querySelectorAll('.quick-btn').forEach(b => b.disabled = false);
    chatInput.focus();

    updateQuickRepliesForTopic(chatMemory.lastTopic);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
sendChatBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !chatInput.disabled) sendChatMessage();
});
closeChatBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

// ============================================================
// INITIALIZATION
// ============================================================
terminalInput.focus();
addTerminalLine('', COMMANDS.welcome.run(), true);
