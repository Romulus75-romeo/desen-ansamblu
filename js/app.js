document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const subjectList = document.getElementById('subject-list');
    const contentDisplay = document.getElementById('content-display');
    const currentSectionTitle = document.getElementById('current-section-title');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Quiz Elements
    const openQuizBtn = document.getElementById('open-quiz-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const scoreDisplay = document.getElementById('score-display');
    const questionTracker = document.getElementById('question-tracker');

    // --- State ---
    let currentQuizIndex = 0;
    let score = 0;

    // --- Initialization ---
    renderSidebar();

    // Load first subject by default (optional)
    // loadSubject(subjectsData[0].id);

    // --- Navigation Logic ---
    function renderSidebar() {
        subjectList.innerHTML = '';
        // 1. Regular Subjects
        subjectsData.forEach(subject => {
            const item = document.createElement('div');
            item.className = 'nav-item';
            item.innerHTML = `<ion-icon name="${subject.icon}"></ion-icon> ${subject.title}`;
            item.onclick = () => {
                loadSubject(subject.id);
                // Close mobile sidebar if open
                sidebar.classList.remove('open');
                // Update active state
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            };
            subjectList.appendChild(item);
        });

        // 2. Resources Section (Tests)
        const divider = document.createElement('div');
        divider.innerHTML = '<hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">';
        subjectList.appendChild(divider);

        const resourcesTitle = document.createElement('div');
        resourcesTitle.style.padding = '0 15px';
        resourcesTitle.style.fontSize = '0.75rem';
        resourcesTitle.style.textTransform = 'uppercase';
        resourcesTitle.style.letterSpacing = '1px';
        resourcesTitle.style.color = '#94a3b8';
        resourcesTitle.style.marginBottom = '5px';
        resourcesTitle.innerText = 'Resurse Doc';
        subjectList.appendChild(resourcesTitle);

        const testItem = document.createElement('div');
        testItem.className = 'nav-item';
        testItem.innerHTML = `<ion-icon name="print-outline"></ion-icon> Teste Printabile`;
        testItem.onclick = () => {
            loadTestsView();
            sidebar.classList.remove('open');
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            testItem.classList.add('active');
        };
        subjectList.appendChild(testItem);
    }

    function loadTestsView() {
        contentDisplay.style.opacity = '0';
        setTimeout(() => {
            currentSectionTitle.innerText = "Teste Printabile (PDF/Print)";

            let html = `
                <h2>Resurse pentru Evaluare</h2>
                <p>Selectați un test pentru a-l descărca și imprima pentru clasă.</p>
                <div class="grid-2-cols" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin-top:2rem;">
            `;

            for (const [key, test] of Object.entries(printableTests)) {
                html += `
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
                        <h3 style="color: var(--accent-color); margin-bottom: 0.5rem;">${test.title}</h3>
                        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 1.5rem;">${test.chapter}</p>
                        <button onclick="downloadTest('${key}')" class="btn-primary" style="width:100%; justify-content:center;">
                            <ion-icon name="download-outline"></ion-icon> Descarcă Test
                        </button>
                    </div>
                `;
            }

            html += `</div>`;
            contentDisplay.innerHTML = html;
            contentDisplay.style.opacity = '1';
        }, 150);
    }

    function loadSubject(id) {
        const subject = subjectsData.find(s => s.id === id);
        if (!subject) return;

        // Fade out effect
        contentDisplay.style.opacity = '0';

        setTimeout(() => {
            currentSectionTitle.innerText = subject.title;
            contentDisplay.innerHTML = subject.content;
            contentDisplay.style.opacity = '1';
            contentDisplay.style.transition = 'opacity 0.3s ease';
        }, 150);
    }

    // --- UI Interactions ---
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // --- Quiz Engine ---
    openQuizBtn.addEventListener('click', startQuiz);
    closeQuizBtn.addEventListener('click', () => quizOverlay.classList.add('hidden'));

    function startQuiz() {
        currentQuizIndex = 0;
        score = 0;
        quizOverlay.classList.remove('hidden');
        scoreDisplay.classList.add('hidden');
        nextQuestionBtn.innerText = "Următoarea";
        nextQuestionBtn.onclick = checkAnswer;
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuizIndex >= quizQuestions.length) {
            finishQuiz();
            return;
        }

        const q = quizQuestions[currentQuizIndex];
        questionTracker.innerText = `Întrebarea ${currentQuizIndex + 1} / ${quizQuestions.length}`;
        quizQuestionEl.innerText = q.question;
        quizOptionsEl.innerHTML = '';

        q.options.forEach((opt, index) => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option';
            btn.innerHTML = `<span style="font-weight:bold; color:var(--accent-color)">${['A', 'B', 'C', 'D'][index]}.</span> ${opt}`;
            btn.dataset.index = index;
            btn.onclick = () => selectOption(btn);
            quizOptionsEl.appendChild(btn);
        });
    }

    let selectedOptionIndex = null;

    function selectOption(btnElement) {
        // Deselect all
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        // Select clicked
        btnElement.classList.add('selected');
        selectedOptionIndex = parseInt(btnElement.dataset.index);
    }

    function checkAnswer() {
        if (selectedOptionIndex === null) {
            alert("Vă rugăm să selectați un răspuns!");
            return;
        }

        const correctIndex = quizQuestions[currentQuizIndex].correct;
        const options = document.querySelectorAll('.quiz-option');

        // Show result
        if (selectedOptionIndex === correctIndex) {
            options[selectedOptionIndex].style.background = "rgba(16, 185, 129, 0.2)"; // Green
            options[selectedOptionIndex].style.borderColor = "var(--success-color)";
            score++;
        } else {
            options[selectedOptionIndex].style.background = "rgba(239, 68, 68, 0.2)"; // Red
            options[selectedOptionIndex].style.borderColor = "var(--error-color)";
            // Highlight correct one
            options[correctIndex].style.background = "rgba(16, 185, 129, 0.2)";
            options[correctIndex].style.borderColor = "var(--success-color)";
        }

        // Delay to go to next question
        nextQuestionBtn.disabled = true;
        setTimeout(() => {
            currentQuizIndex++;
            selectedOptionIndex = null;
            nextQuestionBtn.disabled = false;
            loadQuestion();
        }, 1500);
    }

    function finishQuiz() {
        quizQuestionEl.innerHTML = `<h3 style="text-align:center">Test Finalizat!</h3>`;
        quizOptionsEl.innerHTML = `
            <div style="text-align:center; font-size: 1.2rem;">
                Scor Final: <strong style="color:var(--accent-color); font-size: 2rem;">${score} / ${quizQuestions.length}</strong>
            </div>
        `;
        questionTracker.innerText = "";
        nextQuestionBtn.innerText = "Închide";
        nextQuestionBtn.onclick = () => quizOverlay.classList.add('hidden');
    }
    // --- TEST DOWNLOAD LOGIC ---
    window.downloadTest = function (testId) {
        const testData = printableTests[testId];
        if (!testData) return;

        // Generate Questions HTML
        const questionsHtml = testData.questions.map(q =>
            `<div class="question" style="margin-bottom:20px; border-bottom:1px dashed #ccc; padding-bottom:10px;">${q}</div>`
        ).join('');

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="ro">
            <head>
                <meta charset="UTF-8">
                <title>${testData.title}</title>
                <style>
                    body { font-family: 'Times New Roman', serif; line-height: 1.4; padding: 40px; max-width: 800px; margin: 0 auto; }
                    h1 { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 5px; }
                    h2 { text-align: center; font-size: 1.1rem; font-weight: normal; margin-bottom: 30px; margin-top:0; }
                    .header-info { display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 1px solid #ccc; padding-bottom: 20px; }
                    .question { page-break-inside: avoid; }
                    .footer { position: fixed; bottom: 20px; left:0; width:100%; text-align: center; font-size: 0.8rem; color:#666; }
                    @media print {
                        body { padding: 20px; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <div class="header-info" style="border:none; margin-bottom: 20px;">
                    <img src="data:image/png;base64,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" alt="Antet Scoala" style="width:100%; max-width:100%; height:auto; display:block;">
                </div>

                <div style="display:flex; justify-content:space-between; margin-bottom:20px; font-size: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                    <div style="font-size:1.1rem;"><strong>Prof. Ing. Popescu Romulus</strong></div>
                    <div style="text-align: right;">
                        <strong>Nume Elev:</strong> ........................................<br>
                        Data: ....................<br>
                        Nota: ....................
                    </div>
                </div>

                <h1>${testData.title}</h1>
                <h2>${testData.chapter}</h2>

                <div class="questions-list">
                    ${questionsHtml}
                </div>



                <script>
                    window.onload = function() { window.print(); }
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${testData.title.replace(/\s+/g, '_')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
});

