document.addEventListener('DOMContentLoaded', () => {
  // --- HERO TERMINAL SIMULATION ---
  const heroTerminal = document.getElementById('hero-terminal-body');
  if (heroTerminal) {
    const lines = [
      { text: 'ranyn@labs:~$ run_diagnostics_node', delay: 800 },
      { text: '[SYSTEM] Initializing telemetry node...', delay: 400 },
      { text: '[SYSTEM] Connecting to UM cluster...', delay: 500 },
      { text: '[OK] Connection secure. Active nodes: 4', delay: 300 },
      { text: '[INFO] Target efficiency set to 99.8%', delay: 400 },
      { text: 'ranyn@labs:~$ ', delay: 300, isPrompt: true }
    ];

    let currentLineIndex = 2; // Start appending after the hardcoded lines in index.html

    function printNextHeroLine() {
      if (currentLineIndex < lines.length) {
        const lineData = lines[currentLineIndex];
        setTimeout(() => {
          // Remove old cursor line
          const oldCursor = heroTerminal.querySelector('.blink-cursor');
          if (oldCursor) {
            oldCursor.parentElement.remove();
          }

          const newLine = document.createElement('p');
          newLine.className = 'terminal-line';
          
          if (lineData.isPrompt) {
            newLine.innerHTML = `<span class="prompt">${lineData.text}</span><span class="blink-cursor">_</span>`;
          } else {
            newLine.textContent = lineData.text;
            if (lineData.text.startsWith('[OK]')) newLine.className = 'terminal-line text-success';
            if (lineData.text.startsWith('[SYSTEM]')) newLine.className = 'terminal-line text-warning';
          }
          
          heroTerminal.appendChild(newLine);
          currentLineIndex++;
          printNextHeroLine();
        }, lineData.delay);
      }
    }

    // Start running after 1.5s
    setTimeout(printNextHeroLine, 1500);
  }

  // --- INTERACTIVE LABS TERMINAL ---
  const terminalInput = document.getElementById('terminal-input');
  const interactiveTerminalBody = document.getElementById('interactive-terminal-body');

  if (terminalInput && interactiveTerminalBody) {
    // Focus terminal input on click inside the terminal body
    interactiveTerminalBody.parentElement.addEventListener('click', () => {
      terminalInput.focus();
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const commandText = terminalInput.value.trim();
        terminalInput.value = '';
        
        if (commandText) {
          executeCommand(commandText);
        }
      }
    });
  }

  function executeCommand(cmd) {
    // Append the command line prompt
    const commandLine = document.createElement('p');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="prompt">guest@ranyn-labs:~$</span> ${escapeHTML(cmd)}`;
    
    // Insert before the input line
    const inputLine = terminalInput.closest('.terminal-line');
    interactiveTerminalBody.insertBefore(commandLine, inputLine);

    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];

    let outputLines = [];

    switch (mainCmd) {
      case 'help':
        outputLines = [
          'Available commands:',
          '  help             Display this help guide',
          '  about            About Ranyn Labs',
          '  run_diagnostic   Execute neural model simulation',
          '  ethics_check     Audit ethical alignment vector',
          '  clear            Clear terminal screen'
        ];
        break;
      case 'about':
        outputLines = [
          'Ranyn Labs - Intelligent Systems. Ethical Engineering.',
          'We merge state-of-the-art AI with structural safety.',
          'Headquarters: Federal Territory of Kuala Lumpur.',
          'Status: Active research nodes online.'
        ];
        break;
      case 'run_diagnostic':
        runDiagnosticSimulation(inputLine);
        return; // Custom async simulation handler
      case 'ethics_check':
        outputLines = [
          '[AUDIT] Querying ethical constraints...',
          '[OK] Bias metrics within approved standard limits (WCAG / Ethics v2.2)',
          '[OK] Model transparency index: 98.4%',
          '[STATUS] All guardrails functioning optimally.'
        ];
        break;
      case 'clear':
        // Keep only the input line
        interactiveTerminalBody.innerHTML = '';
        interactiveTerminalBody.appendChild(inputLine);
        return;
      default:
        outputLines = [`Command not found: '${mainCmd}'. Type 'help' for options.`];
    }

    outputLines.forEach(line => {
      const p = document.createElement('p');
      p.className = 'terminal-line';
      if (line.startsWith('[OK]')) p.className = 'terminal-line text-success';
      if (line.startsWith('[STATUS]')) p.className = 'terminal-line text-success';
      if (line.startsWith('[AUDIT]')) p.className = 'terminal-line text-warning';
      p.textContent = line;
      interactiveTerminalBody.insertBefore(p, inputLine);
    });

    interactiveTerminalBody.scrollTop = interactiveTerminalBody.scrollHeight;
  }

  function runDiagnosticSimulation(inputLine) {
    const diagnosticSteps = [
      { text: '[DIAG] Loading simulation datasets...', delay: 200 },
      { text: '[DIAG] Starting epochs: 1/5', delay: 400 },
      { text: '[DIAG] Epoch 1: accuracy=82.4%, loss=0.345', delay: 300 },
      { text: '[DIAG] Epoch 3: accuracy=95.1%, loss=0.104', delay: 400 },
      { text: '[DIAG] Epoch 5: accuracy=99.2%, loss=0.012', delay: 400 },
      { text: '[OK] Diagnostic simulation complete. 100% stable.', class: 'text-success', delay: 300 }
    ];

    let stepIndex = 0;
    terminalInput.disabled = true;

    function runNextStep() {
      if (stepIndex < diagnosticSteps.length) {
        const step = diagnosticSteps[stepIndex];
        setTimeout(() => {
          const p = document.createElement('p');
          p.className = 'terminal-line ' + (step.class || '');
          p.textContent = step.text;
          interactiveTerminalBody.insertBefore(p, inputLine);
          interactiveTerminalBody.scrollTop = interactiveTerminalBody.scrollHeight;
          stepIndex++;
          runNextStep();
        }, step.delay);
      } else {
        terminalInput.disabled = false;
        terminalInput.focus();
      }
    }

    runNextStep();
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // --- CONTACT FORM HANDLING ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('btn-submit');
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      // Simulate network request delay
      setTimeout(() => {
        formStatus.textContent = 'Inquiry submitted successfully! We will get in touch shortly.';
        formStatus.style.color = 'var(--color-success)';
        
        contactForm.reset();
        submitBtn.textContent = 'Submit Inquiry';
        submitBtn.disabled = false;
      }, 1000);
    });
  }
});
