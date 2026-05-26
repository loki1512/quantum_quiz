# Quantum Quiz

A static, browser-based quiz collection for learning quantum computing through lecture-aligned question sequences. Each module is designed to be taken more than once: the first pass builds recognition, the second pass builds correction, and the third pass should feel like rehearsal for writing small circuits independently.

## App Features

- Static HTML modules that run directly in the browser.
- A home page at `index.html` that links to each lecture quiz.
- Per-question progress bar and score counter.
- Immediate feedback after each answer.
- Context-first question cards: every prompt starts with the lecture situation before asking for a decision.
- Explanation cards after every response, so mistakes become part of the learning loop.
- Mixed interaction types:
  - Multiple-choice conceptual questions.
  - Type-in coding questions for exact Qiskit one-liners.
- Code-answer checking by normalized string match, suitable for a static quiz with no backend.
- Reset/retry flow for repeated practice.

## How To Use

Open `index.html` in a browser and select a module.

The Qiskit lecture quiz is:

```text
qiskit_intro.html
```

No build step is required. The app is plain HTML, CSS, and JavaScript.

## Pedagogy

The quiz is built as a guided spiral, not a random question bank. Each question prepares the next one.

The learning path follows this pattern:

1. Introduce the quantum idea in words.
2. Ask the student to identify the correct Qiskit object or operation.
3. Ask for a single executable code line using predefined variable names.
4. Connect the code back to the physical concept.
5. Revisit the same idea at a larger scale or in a noisier, more realistic setting.

This is meant for 2 to 3 passes after lecture:

- Pass 1: recognize vocabulary, workflow, and correct objects.
- Pass 2: correct misconceptions using the explanations.
- Pass 3: internalize enough syntax and concept mapping to write simple Qiskit circuits comfortably.

## Qiskit Quiz Design

The Qiskit module contains 50 total questions:

- 35 multiple-choice questions.
- 15 static code-input questions.
- Each question has:
  - `p`: context.
  - `q`: question.
  - `o`: options for MCQs.
  - `a`: correct option index for MCQs.
  - `guide`: coding hint for type-in questions.
  - `ans`: accepted exact answers for code questions.
  - `e`: explanation.

Code-input questions use fixed variable names such as `qc`, `qr`, `cr`, `backend`, `theta`, `n`, `i`, `qc2`, and `qc_combined`. This keeps verification simple and lets students focus on Qiskit syntax rather than open-ended program design.

## Qiskit Lecture Flow

| Questions | Concept | Learning Goal |
|---:|---|---|
| 1-3 | Elementary workflow | Understand circuit creation, state probing, measurement, Sampler, and Estimator. |
| 4-8 | Qiskit ecosystem | Distinguish Qiskit SDK, Runtime, Aer, add-ons, and simulator scaling limits. |
| 9-11 | Imports and circuit anatomy | Import Qiskit circuit classes and identify quantum and classical registers. |
| 12-15 | Building a circuit | Create `QuantumRegister`, `ClassicalRegister`, and `QuantumCircuit`; know shortcut construction. |
| 16-17 | Superposition | Connect the Hadamard gate to equal probability amplitudes and write `qc.h(0)`. |
| 18-19 | Entanglement | Understand control-target order and write `qc.cx(0, 1)`. |
| 20-21 | Barriers | Use `qc.barrier()` to separate preparation from later circuit stages. |
| 22-23 | Measurement routing | Map `qr` into `cr` with `qc.measure(qr, cr)`. |
| 24-25 | Visualization | Draw circuits with `qc.draw('mpl')` and understand Bloch-sphere limits for entangled states. |
| 26-30 | Simulators | Compare QASM-style shot counts with exact statevector simulation. |
| 31-32 | Bell states | Interpret the expected counts and phase/bit-flip variations of Bell states. |
| 33-36 | GHZ states | Scale Bell-state logic to many qubits and distinguish GHZ from uniform superposition. |
| 37-39 | Programmatic scaling | Use Python loops to generate repeated quantum operations. |
| 40-42 | Depth and composition | Relate circuit depth to hardware noise and compose modular circuits. |
| 43-44 | Circuit library and QFTGate | Use library instructions with `append` instead of rebuilding everything manually. |
| 45-47 | Parameterized circuits | Create symbolic parameters and connect rotations to measurement probabilities. |
| 48-50 | Hardware noise and mitigation | Distinguish SPAM, mitigation, correction, and local Aer testing. |

## Authoring Contract

When adding or editing quiz content, preserve this structure:

```js
{type:'mcq', s:'Concept label', p:'Context', q:'Question', o:['A','B','C','D'], a:0, e:'Explanation'}
{type:'code', s:'Concept label', p:'Context', q:'Question', guide:'Hint', ans:['accepted answer'], e:'Explanation'}
```

For code-input questions:

- Keep each answer to one line.
- Predefine all variable names in the question.
- Include the exact expected answer in `ans`.
- Add common spacing variants only when needed.
- Prefer simple Qiskit actions that reinforce the immediately preceding MCQ.

## Current Modules

- `qft_quiz.html`: QFT and Quantum Phase Estimation.
- `grovers_quiz.html`: Grover's Algorithm and quantum search.
- `vqa_foundations.html`: VQE foundations and the variational principle.
- `vqa_applications.html`: VQA applications.
- `advanced_vqa_part_1.html`: Advanced VQA, part 1.
- `advanced_vqa_part_2.html`: Advanced VQA, part 2.
- `advanced_vqa_part_3.html`: Advanced VQA, part 3.
- `qaoa.html`: QAOA.
- `qaoa_2.html`: QAOA continuation.
- `introduction_to_pennylane.html`: PennyLane introduction.
- `quantum_computing_in_current_devices.html`: Quantum computing on current devices.
- `qiskit_intro.html`: Intro to Qiskit with MCQs and code-input questions.

## Maintenance Notes

The Qiskit module progress UI assumes 50 questions. If the question count changes, update the progress denominator and score text in `qiskit_intro.html`.

Recommended quick check after edits:

```powershell
(Select-String -Path qiskit_intro.html -Pattern "\{type:'" | Measure-Object).Count
```

The expected result for the current Qiskit quiz is `50`.
