// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════
const QUESTIONS =
[
  {
    "id": 1,
    "type": "mcq",
    "context": "Welcome to PennyLane! We begin our journey by understanding the fundamental motivation behind quantum computation. In a world dominated by powerful classical computers, we must ask why a new paradigm is necessary.",
    "question": "According to the speaker, what is a primary reason we need quantum computing?",
    "options": [
      "A) To completely replace classical computers for everyday tasks like web browsing.",
      "B) To solve problems that cannot be solved by classical computing, like NP-hard or combinatorial problems.",
      "C) To improve the graphics rendering speed of modern video games.",
      "D) To execute basic arithmetic operations faster than standard CPUs."
    ],
    "answer": "B) To solve problems that cannot be solved by classical computing, like NP-hard or combinatorial problems.",
    "explanation": "Quantum computing targets specific, highly complex problems like combinatorial optimization and simulation that are intractable for classical computers. Next, we will import the framework built specifically for this."
  },
  {
    "id": 2,
    "type": "mcq",
    "context": "Now that we know the 'why', let's look at the 'how'. PennyLane is a versatile library, but many people incorrectly assume it is exclusively for Machine Learning.",
    "question": "To reflect its broader capabilities, how does the speaker suggest importing the PennyLane library?",
    "options": [
      "A) import pennylane as qml",
      "B) import pennylane as quantum",
      "C) import pennylane as qp",
      "D) import pennylane as pl"
    ],
    "answer": "C) import pennylane as qp",
    "explanation": "The speaker explicitly mentions changing the convention from 'qml' to 'qp' (Quantum Programming) to remind users that PennyLane goes far beyond machine learning. Let's write that import statement."
  },
  {
    "id": 3,
    "type": "type-in",
    "context": "We are ready to start our coding environment. It's time to bring the PennyLane ecosystem into our script.",
    "question": "Import the pennylane library using the alias 'qp'. (Hint: use the standard import ... as ... syntax)",
    "answer": "import pennylane as qp",
    "explanation": "This establishes our core library access. Before we start building circuits, it's a good practice to verify our environment is running the stable version."
  },
  {
    "id": 4,
    "type": "mcq",
    "context": "With the library imported, we want to make sure our code uses the expected version, especially since quantum software evolves rapidly.",
    "question": "Which function inside the 'qp' module allows you to print and verify the current version of PennyLane you are using?",
    "options": [
      "A) qp.version()",
      "B) qp.info()",
      "C) qp.check()",
      "D) qp.about()"
    ],
    "answer": "D) qp.about()",
    "explanation": "Calling qp.about() prints the active PennyLane version, ensuring you are aligned with the latest stable release. Let's execute this check."
  },
  {
    "id": 5,
    "type": "type-in",
    "context": "Let's ensure our PennyLane installation is functioning and up to date before writing quantum logic.",
    "question": "Call the about function from the qp module with empty parentheses.",
    "answer": "qp.about()",
    "explanation": "This outputs the system and version details. Now we can define our very first quantum circuit."
  },
  {
    "id": 6,
    "type": "mcq",
    "context": "PennyLane is designed to be highly 'Python-native', meaning quantum workflows seamlessly integrate with standard Python syntax.",
    "question": "How do you fundamentally define a quantum circuit in PennyLane?",
    "options": [
      "A) By creating an instance of a QuantumCircuit class.",
      "B) As a standard Python function containing quantum gates.",
      "C) By writing a JSON file defining the gate sequence.",
      "D) By using a specific C++ wrapper function."
    ],
    "answer": "B) As a standard Python function containing quantum gates.",
    "explanation": "In PennyLane, quantum circuits are defined simply as Python functions (often called 'quantum functions'). Let's create an empty one to start."
  },
  {
    "id": 7,
    "type": "type-in",
    "context": "We need an empty canvas to begin placing our quantum operations.",
    "question": "Define a standard Python function named 'circuit' that takes no arguments. (Hint: remember the colon at the end)",
    "answer": "def circuit():",
    "explanation": "We now have an empty quantum function. Inside this function, we need to operate on quantum units."
  },
  {
    "id": 8,
    "type": "mcq",
    "context": "Inside our quantum function, we will apply operations to our quantum bits. However, PennyLane uses a slightly different term to be more inclusive of varying hardware architectures.",
    "question": "What terminology does PennyLane use to refer to the logical qubits that gates act upon, often represented as horizontal lines in circuit diagrams?",
    "options": [
      "A) Tracks",
      "B) Wires",
      "C) Channels",
      "D) Nodes"
    ],
    "answer": "B) Wires",
    "explanation": "PennyLane uses 'wires' to represent subsystems, which for most intents and purposes are just qubits. Let's apply our first gate to one of these wires."
  },
  {
    "id": 9,
    "type": "type-in",
    "context": "Our function needs an operation. We will apply a Pauli-X gate to flip the state of our first qubit.",
    "question": "Inside the function, apply a Pauli-X gate by calling qp.X and pass the keyword argument wires=0 to target the first qubit.",
    "answer": "qp.X(wires=0)",
    "explanation": "The X gate is now applied. However, a quantum computer must be observed to retrieve classical data. We need to measure it."
  },
  {
    "id": 10,
    "type": "mcq",
    "context": "If you don't measure a quantum circuit, you lose the computed result entirely. PennyLane provides multiple ways to measure a state.",
    "question": "Which measurement function returns the likelihood of measuring each possible state (like getting a 0 or 1)?",
    "options": [
      "A) qp.counts()",
      "B) qp.state()",
      "C) qp.probs()",
      "D) qp.expval()"
    ],
    "answer": "C) qp.probs()",
    "explanation": "The qp.probs() function calculates the probabilities of measuring the different basis states. Let's add this return statement to our function."
  },
  {
    "id": 11,
    "type": "type-in",
    "context": "To complete our first quantum function, we must return a classical output via measurement.",
    "question": "Use the return keyword to return the output of qp.probs() with empty parentheses.",
    "answer": "return qp.probs()",
    "explanation": "Our function is complete. Before running it, it is incredibly helpful to visualize what we just built."
  },
  {
    "id": 12,
    "type": "mcq",
    "context": "Visualization is key to debugging and understanding quantum algorithms. PennyLane provides a drawing tool that relies on an external plotting library.",
    "question": "Which specific function relies on Matplotlib under the hood to visualize the quantum circuit?",
    "options": [
      "A) qp.plot_circuit()",
      "B) qp.draw_mpl()",
      "C) qp.visualize()",
      "D) qp.display_plt()"
    ],
    "answer": "B) qp.draw_mpl()",
    "explanation": "The qp.draw_mpl() function creates a rich, customizable drawing of your circuit. Let's invoke it."
  },
  {
    "id": 13,
    "type": "type-in",
    "context": "We want to see the visual diagram of the 'circuit' function we just created.",
    "question": "Call qp.draw_mpl passing 'circuit' as the argument, and immediately execute the returned drawer by appending empty parentheses '()'.",
    "answer": "qp.draw_mpl(circuit)()",
    "explanation": "You should now see a visual representation of your X gate. But visual outputs can be customized further."
  },
  {
    "id": 14,
    "type": "mcq",
    "context": "When drawing circuits with parameters, the default display might show too many decimal places, cluttering the diagram.",
    "question": "Which keyword argument in the drawing function limits the decimal precision displayed on the visualization?",
    "options": [
      "A) precision",
      "B) decimals",
      "C) float_len",
      "D) round"
    ],
    "answer": "B) decimals",
    "explanation": "The 'decimals' keyword allows you to set exactly how many decimal points are shown. Let's test this customization."
  },
  {
    "id": 15,
    "type": "type-in",
    "context": "We want to draw an existing circuit named 'circuit3', but we want to restrict the parameter output to a single decimal point.",
    "question": "Call qp.draw_mpl passing 'circuit3' and the keyword argument decimals=1, followed immediately by empty parentheses.",
    "answer": "qp.draw_mpl(circuit3, decimals=1)()",
    "explanation": "The diagram is now much cleaner. Next, let's explore scaling up our operations to multiple wires."
  },
  {
    "id": 16,
    "type": "mcq",
    "context": "Quantum computing becomes powerful through entanglement, which requires gates that act on multiple qubits simultaneously.",
    "question": "If you want to apply a gate across multiple qubits, how should you format the 'wires' argument?",
    "options": [
      "A) As a comma-separated string: wires='0, 1'",
      "B) By adding multiple arguments: wire1=0, wire2=1",
      "C) As a Python list of integers: wires=",
      "D) Using a dictionary: wires={0: True, 1: True}"
    ],
    "answer": "C) As a Python list of integers: wires=",
    "explanation": "PennyLane accepts a list for operations that span multiple wires. Let's practice writing this assignment."
  },
  {
    "id": 17,
    "type": "type-in",
    "context": "We are preparing to add a 2-qubit gate. First, we must assign the target wires properly.",
    "question": "Write out the keyword argument assigning the list containing 0 and 1 to the parameter 'wires'. (Hint: wires=...)",
    "answer": "wires=",
    "explanation": "Great! Aside from multi-qubit gates, some gates are parameterized, meaning they accept continuous values."
  },
  {
    "id": 18,
    "type": "mcq",
    "context": "Instead of discrete flips, we can rotate qubits around the Bloch sphere using parameterized gates.",
    "question": "If you call the gate 'qp.RX(x, wires=0)', what does the parameter 'x' represent?",
    "options": [
      "A) The speed of rotation in seconds.",
      "B) The angle of rotation in radians.",
      "C) The probability amplitude.",
      "D) The index of the classical register."
    ],
    "answer": "B) The angle of rotation in radians.",
    "explanation": "Parameterized gates take angles in radians as arguments, unlocking variational and machine learning applications. Let's write one."
  },
  {
    "id": 19,
    "type": "type-in",
    "context": "We want to rotate our state continuously around the X-axis.",
    "question": "Apply an RX rotation from the qp module. Pass the variable 'x' as the rotation angle, and use the keyword argument wires=0.",
    "answer": "qp.RX(x, wires=0)",
    "explanation": "Now let's apply another continuous rotation, this time around a different axis."
  },
  {
    "id": 20,
    "type": "type-in",
    "context": "We have an X-axis rotation, but quantum algorithms often require rotations across multiple axes to explore the full Hilbert space.",
    "question": "Apply an RY rotation from the qp module. Pass the variable 'y' as the angle, and apply it to wires=0.",
    "answer": "qp.RY(y, wires=0)",
    "explanation": "We have defined single gates, multi-qubit gates, and parameterized gates. But where are these running right now?"
  },
  {
    "id": 21,
    "type": "mcq",
    "context": "We have spent some time writing Python functions and drawing them, but we haven't seen an actual quantum probability result yet.",
    "question": "As a trick question asked by the speaker: where have the purely defined Python quantum circuits run up to this point?",
    "options": [
      "A) On the default local simulator.",
      "B) On a Xanadu photonic backend.",
      "C) On an external GPU.",
      "D) They haven't technically run anywhere yet."
    ],
    "answer": "D) They haven't technically run anywhere yet.",
    "explanation": "Defining a quantum function doesn't execute it. To run it, we must bind it to a backend capable of simulating or executing quantum logic."
  },
  {
    "id": 22,
    "type": "mcq",
    "context": "To move from definition to execution, PennyLane introduces a concept representing the backend environments.",
    "question": "What is the specific PennyLane terminology for the backend where a circuit ultimately executes?",
    "options": [
      "A) Instances",
      "B) Environments",
      "C) Devices",
      "D) Providers"
    ],
    "answer": "C) Devices",
    "explanation": "A 'device' in PennyLane defines the hardware or simulator backend. Let's initialize a basic built-in device."
  },
  {
    "id": 23,
    "type": "type-in",
    "context": "We need a local simulator to test our circuit before moving to real hardware.",
    "question": "Call qp.device passing the string 'default.qubit'. Assign the resulting object to a variable named 'dev'.",
    "answer": "dev = qp.device(\"default.qubit\")",
    "explanation": "We now have a quantum function and a device. We need to connect them together."
  },
  {
    "id": 24,
    "type": "mcq",
    "context": "The circuit and the device are currently completely separate entities. They must be joined to become an executable quantum program.",
    "question": "What is the crucial PennyLane component described as the 'glue' that connects a quantum function to a specific device?",
    "options": [
      "A) A QNode",
      "B) A Tensor",
      "C) A Compiler",
      "D) An Executor"
    ],
    "answer": "A) A QNode",
    "explanation": "The QNode wraps the quantum function and binds it to a device, enabling execution. The most elegant way to create one is using a decorator."
  },
  {
    "id": 25,
    "type": "type-in",
    "context": "We will bind our device to a quantum function right at the moment the function is defined.",
    "question": "Write the Python decorator using the qp.qnode function, passing our device variable 'dev' as the argument. (Hint: starts with @)",
    "answer": "@qp.qnode(dev)",
    "explanation": "Placing this directly above your 'def circuit():' transforms it into an executable QNode. Alternatively, you can create them without decorators."
  },
  {
    "id": 26,
    "type": "mcq",
    "context": "Sometimes you want to bind an already existing function to a device dynamically, without altering the original function definition with an '@' decorator.",
    "question": "How can you manually create a QNode from an existing function 'circuit2'?",
    "options": [
      "A) qp.bind(circuit2, dev)",
      "B) qp.QNode(circuit2, dev)",
      "C) circuit2.attach(dev)",
      "D) dev.run(circuit2)"
    ],
    "answer": "B) qp.QNode(circuit2, dev)",
    "explanation": "The qp.QNode class (capital Q and N) allows functional instantiation of QNodes. Let's try assigning this manually."
  },
  {
    "id": 27,
    "type": "type-in",
    "context": "We have an existing function 'circuit2' and our device 'dev' and we want to link them together procedurally.",
    "question": "Call qp.QNode passing 'circuit2' and 'dev' as arguments. Assign this to a variable named 'qnode1'.",
    "answer": "qnode1 = qp.QNode(circuit2, dev)",
    "explanation": "Excellent. Our QNode is ready. Some specialized devices require a little more configuration than 'default.qubit'."
  },
  {
    "id": 28,
    "type": "mcq",
    "context": "While 'default.qubit' automatically adapts to the circuit size, more advanced or hardware-specific backends are stricter.",
    "question": "When defining the 'lightning.qubit' device, what additional parameter must the user specify that is normally automatic in 'default.qubit'?",
    "options": [
      "A) The exact number of wires/qubits.",
      "B) The random seed.",
      "C) The Python environment path.",
      "D) The maximum gate depth."
    ],
    "answer": "A) The exact number of wires/qubits.",
    "explanation": "Performance simulators and real hardware require pre-allocating the exact dimensions of the quantum register. Let's initialize it."
  },
  {
    "id": 29,
    "type": "type-in",
    "context": "We want to initialize the high-performance C++ simulator for exactly two qubits.",
    "question": "Call qp.device passing 'lightning.qubit' and the keyword argument wires=2. Assign it to 'dev_l'.",
    "answer": "dev_l = qp.device(\"lightning.qubit\", wires=2)",
    "explanation": "Device allocated. Now, as circuits grow complex, writing them gate-by-gate becomes tedious. PennyLane provides a solution for this."
  },
  {
    "id": 30,
    "type": "mcq",
    "context": "Instead of manually flipping bits to encode classical data into a quantum state, PennyLane offers pre-built subroutines to automate this.",
    "question": "Which template mentioned by the speaker automatically embeds a binary number (like encoding '2' as |010>) into the quantum state?",
    "options": [
      "A) qp.AmplitudeEmbedding",
      "B) qp.BasisEmbedding",
      "C) qp.AngleEmbedding",
      "D) qp.StatePrep"
    ],
    "answer": "B) qp.BasisEmbedding",
    "explanation": "BasisEmbedding converts a list of binary integers into a sequence of X gates to prepare the basis state. Let's implement it."
  },
  {
    "id": 31,
    "type": "type-in",
    "context": "We need to embed the binary representation of the number 2, which requires three bits: 0, 1, 0.",
    "question": "Call qp.BasisEmbedding passing the list as the first argument, and apply it to wires 0, 1, and 2 using the keyword argument wires=.",
    "answer": "qp.BasisEmbedding(, wires=)",
    "explanation": "The template masks the underlying gates. But what if we need to see exactly which gates were applied behind the scenes?"
  },
  {
    "id": 32,
    "type": "mcq",
    "context": "Templates act as 'black boxes'. To understand the fundamental operations occurring, we need to break the template down into native instructions.",
    "question": "Which PennyLane function allows you to break down a circuit into a specific universal set of elementary gates?",
    "options": [
      "A) qp.unroll()",
      "B) qp.flatten()",
      "C) qp.decompose()",
      "D) qp.compile()"
    ],
    "answer": "C) qp.decompose()",
    "explanation": "Decomposition translates high-level operations into fundamental gate sets (like Clifford+T). Let's invoke the decomposition function."
  },
  {
    "id": 33,
    "type": "type-in",
    "context": "We want to see the low-level gates of 'circuit4' restricted to the Clifford+T universal gate set.",
    "question": "Call qp.decompose passing 'circuit4' and the keyword argument gate_sets=qp.gate_sets.clifford_t. Assign the result to a variable 'decomp'.",
    "answer": "decomp = qp.decompose(circuit4, gate_sets=qp.gate_sets.clifford_t)",
    "explanation": "If decomposing large algorithms results in billions of gates, running them becomes impossible. How do we measure them without running?"
  },
  {
    "id": 34,
    "type": "mcq",
    "context": "As programs get too massive for classical memory to even hold the state, we cannot rely on simulation to verify if our design works.",
    "question": "What module is recommended to find the total gate count and structure of huge algorithms without actually executing the simulation?",
    "options": [
      "A) State Vector Analysis",
      "B) Resource Estimation",
      "C) Density Matrix Profiler",
      "D) Compilation Tracker"
    ],
    "answer": "B) Resource Estimation",
    "explanation": "Resource estimation mathematically calculates the required subroutines and logical gate costs. Let's import the specific module to do this."
  },
  {
    "id": 35,
    "type": "type-in",
    "context": "We want to profile our algorithm's depth without spending compute time simulating it.",
    "question": "Import the pennylane.estimator module and alias it as 'qre' (Quantum Resource Estimation).",
    "answer": "import pennylane.estimator as qre",
    "explanation": "We are now transitioning from core components to the 'Train Classical, Deploy Quantum' machine learning framework."
  },
  {
    "id": 36,
    "type": "mcq",
    "context": "The 'Train Classical, Deploy Quantum' paradigm targets specific machine learning tasks. The speaker gives an example of asking an AI to produce new handwritten digits based on training data.",
    "question": "What category of machine learning aims to create new data that matches an underlying probability distribution, rather than categorizing data?",
    "options": [
      "A) Discriminative Learning",
      "B) Generative Machine Learning",
      "C) Reinforcement Learning",
      "D) Support Vector Classification"
    ],
    "answer": "B) Generative Machine Learning",
    "explanation": "Generative models produce novel outputs representing the learned distribution. The classical hardware trains the distribution, but the quantum hardware is superior at actually drawing complex samples from it."
  },
  {
    "id": 37,
    "type": "mcq",
    "context": "To train classically, we must use a quantum circuit structure that is mathematically easy for a classical computer to compute the expectation value of.",
    "question": "What specific class of circuits does the speaker highlight as being highly suited for rapid classical training?",
    "options": [
      "A) Quantum Approximate Optimization Algorithms (QAOA)",
      "B) Variational Quantum Eigensolvers (VQE)",
      "C) Instantaneous Quantum Polynomial (IQP) circuits",
      "D) Quantum Neural Networks (QNN) with dense layers"
    ],
    "answer": "C) Instantaneous Quantum Polynomial (IQP) circuits",
    "explanation": "IQP circuits consist of multi-controlled Z rotations wrapped in a specific way that makes classical calculation of their average outputs fast."
  },
  {
    "id": 38,
    "type": "mcq",
    "context": "The mathematical structure of the IQP circuit provides its power by changing the computational basis.",
    "question": "According to the speaker, what specific gates are placed at the very beginning and the very end of an IQP circuit's parameterized layers?",
    "options": [
      "A) Pauli-X gates",
      "B) CNOT gates",
      "C) Hadamard gates",
      "D) Toffoli gates"
    ],
    "answer": "C) Hadamard gates",
    "explanation": "Hadamard gates frame the circuit. The speaker notes this effectively moves the problem from direct space into Fourier (frequency) space."
  },
  {
    "id": 39,
    "type": "mcq",
    "context": "Because this 'Train Classical, Deploy Quantum' approach is cutting-edge research, some of its simplified wrapper functions live in a specific part of the PennyLane library.",
    "question": "Which experimental module houses the 'Fox' toolkit and other unreleased, rapidly evolving research features?",
    "options": [
      "A) pennylane.research",
      "B) pennylane.labs",
      "C) pennylane.experimental",
      "D) pennylane.future"
    ],
    "answer": "B) pennylane.labs",
    "explanation": "The 'labs' module holds experimental tools where the API might break between versions as research evolves."
  },
  {
    "id": 40,
    "type": "mcq",
    "context": "When optimizing a generative model, we must measure how far our current probability distribution is from the target (real) distribution.",
    "question": "Which specific loss function is highlighted in the experimental module as being ideal for comparing probability distributions?",
    "options": [
      "A) Mean Squared Error (MSE)",
      "B) Binary Cross-Entropy",
      "C) Maximum Mean Discrepancy (MMD) loss",
      "D) Hinge Loss"
    ],
    "answer": "C) Maximum Mean Discrepancy (MMD) loss",
    "explanation": "MMD loss calculates the distance between two probability distributions. Now, we will transition to building a full, connected real-world pipeline using these concepts!"
  },
  {
    "id": 41,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 1 | Env Setup | Jax Library | Pending |\n\nWe begin setting up our environment for classical ML optimization on a massive genomic dataset. We need a library capable of differentiable array operations.",
    "question": "Which numerical library, built specifically for high-performance automatic differentiation, is requested for the classical optimization workflow?",
    "options": [
      "A) PyTorch",
      "B) TensorFlow",
      "C) Jax",
      "D) Scikit-learn"
    ],
    "answer": "C) Jax",
    "explanation": "Jax operates much like NumPy but allows for lightning-fast classical optimization and automatic gradient calculation."
  },
  {
    "id": 42,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 1 | Env Setup | Jax Library | Importing... |\n\nLet's pull Jax into our environment.",
    "question": "Import the jax library.",
    "answer": "import jax",
    "explanation": "Jax is imported. We now need access to its powerful multidimensional arrays, which act identically to standard NumPy."
  },
  {
    "id": 43,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 1 | Env Setup | Jax NumPy | Pending |\n\nWe need array processing bound to a familiar convention.",
    "question": "Import jax.numpy using the alias 'jnp'.",
    "answer": "import jax.numpy as jnp",
    "explanation": "Array processing is set up. Next, we need an optimization algorithm designed to pair specifically with Jax."
  },
  {
    "id": 44,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 1 | Env Setup | Optax | Pending |\n\nBring in the dedicated optimization library.",
    "question": "Import the optax library.",
    "answer": "import optax",
    "explanation": "Libraries are fully loaded. We must ensure our randomly initialized weights are completely reproducible for the scientific experiment log."
  },
  {
    "id": 45,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 2 | RNG Config | Seed Key | Pending |\n\nWe need to initialize a random seed in Jax, which works differently than standard Python random.",
    "question": "What is the name of the function inside jax.random used to generate a reproducible seed key?",
    "options": [
      "A) seed_gen",
      "B) PRNGKey",
      "C) random_state",
      "D) SecureSeed"
    ],
    "answer": "B) PRNGKey",
    "explanation": "Jax handles pseudo-random number generation functionally using PRNGKey objects. Let's create one."
  },
  {
    "id": 46,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 2 | RNG Config | Seed Key | Generating... |\n\nWe will use a standard seed integer.",
    "question": "Call the PRNGKey function from the jax.random module passing the integer 42, and assign it to the variable 'key'.",
    "answer": "key = jax.random.PRNGKey(42)",
    "explanation": "With the RNG initialized, we define the physical structure of our generative IQP quantum circuit."
  },
  {
    "id": 47,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 3 | Model Def | IQP Layout | Pending |\n\nWe need to define where parameter gates are applied across the qubits.",
    "question": "How is the topological pattern of gates defined for the PennyLane IQP template mathematically?",
    "options": [
      "A) As a dictionary mapping gate names to wire indices.",
      "B) As a nested list of integer wire indices indicating where gates apply.",
      "C) As a boolean mask matrix across all qubits.",
      "D) By a string of ASCII characters."
    ],
    "answer": "B) As a nested list of integer wire indices indicating where gates apply.",
    "explanation": "We use a list of lists to indicate single, double, or multi-qubit parameterized gates."
  },
  {
    "id": 48,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 3 | Model Def | IQP Layout | Defining Nested List... |\n\nWe define an IQP structure spanning single, double, and triple-qubit combinations.",
    "question": "Create a variable 'gates' assigned to the following nested list: [,,].",
    "answer": "gates = [,,]",
    "explanation": "The quantum architecture is defined. Now we must define what we actually measure at the end of the circuit."
  },
  {
    "id": 49,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 3 | Model Def | Observables | Pending |\n\nWe need to extract data out of the model by defining observables. We will measure the Pauli-Z basis.",
    "question": "In the internal numerical encoding shown by the speaker, what integer corresponds to a measurement in the Z basis?",
    "options": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": "D) 3",
    "explanation": "The integer 3 maps to the Pauli Z measurement, while 0 represents Identity (no measurement). Let's build the observable array."
  },
  {
    "id": 50,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 3 | Model Def | Observables | Storing Tensor... |\n\nWe measure Z on the first two qubits, and ignore the last two.",
    "question": "Create a variable 'observables' assigned to a jnp.array containing one nested list: [].",
    "answer": "observables = jnp.array([])",
    "explanation": "With the structure defined, we need initial weights to feed into the optimization loop."
  },
  {
    "id": 51,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 4 | Classical Setup| Initial Weights | Pending |\n\nThe circuit structure needs angles (parameters). Since we haven't trained yet, we start blind.",
    "question": "What kind of statistical distribution is used via Jax to initialize the first set of random parameters for the gates?",
    "options": [
      "A) Normal/Gaussian distribution",
      "B) Binomial distribution",
      "C) Uniform distribution",
      "D) Exponential distribution"
    ],
    "answer": "C) Uniform distribution",
    "explanation": "A uniform distribution provides an even, unbiased starting landscape for the optimizer. Let's create the parameter vector."
  },
  {
    "id": 52,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 4 | Classical Setup| Initial Weights | Sampling Uniform... |\n\nWe need exactly one weight for every gate layout we specified earlier.",
    "question": "Assign to 'params' the result of calling jax.random.uniform passing 'key' and the keyword argument shape=(len(gates),).",
    "answer": "params = jax.random.uniform(key, shape=(len(gates),))",
    "explanation": "We have the model and the starting weights. Now we perform the classical mathematical evaluation of the quantum circuit."
  },
  {
    "id": 53,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 4 | Classical Setup| MC Samples | Pending |\n\nWe are calculating the expectation value (average output) classically. It's an approximation reliant on statistical sampling.",
    "question": "What statistical method fundamentally powers the classical expectation value calculation behind the scenes?",
    "options": [
      "A) K-Means Clustering",
      "B) Monte Carlo Sampling",
      "C) Principal Component Analysis",
      "D) Gradient Descent"
    ],
    "answer": "B) Monte Carlo Sampling",
    "explanation": "Monte Carlo sampling approximates the expectation value via repeated classical probability calculations. We need to set the sample size."
  },
  {
    "id": 54,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 4 | Classical Setup| MC Samples | Assigning Count... |\n\nLet's define a healthy integer sample count to ensure statistical accuracy.",
    "question": "Assign the integer 4000 to the variable '_samples'.",
    "answer": "_samples = 4000",
    "explanation": "Sample count is locked. Now we execute the core classical processing command."
  },
  {
    "id": 55,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 5 | Execution | Classical ExpVal | Pending |\n\nWe push all components into PennyLane's specialized classical IQP evaluator.",
    "question": "Call qp.qnn.iqp.iqp_expval passing observables, params, gates, the integer 4, _samples, and key as arguments. Assign the result to two unpacked variables: exp_vals and std_err.",
    "answer": "exp_vals, std_err = qp.qnn.iqp.iqp_expval(observables, params, gates, 4, _samples, key)",
    "explanation": "The classical evaluation is complete! To train the model, we calculate a loss metric to minimize."
  },
  {
    "id": 56,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 5 | Execution | Loss Function | Pending |\n\nIn our training loop, we iterate over parameters to minimize loss. While real models use MMD, the speaker showed a simpler base case.",
    "question": "What simple mathematical operation did the speaker use on the expectation values to define the naive loss function?",
    "options": [
      "A) Taking the standard deviation",
      "B) Minimizing the sum of the expectation values",
      "C) Finding the maximum value",
      "D) Multiplying them all together"
    ],
    "answer": "B) Minimizing the sum of the expectation values",
    "explanation": "The loss is simply the sum of all calculated expectation values. Let's compute this sum."
  },
  {
    "id": 57,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 5 | Execution | Loss Function | Summing Array... |\n\nWe need to distill our expectation values into a single scalar loss value for the optimizer.",
    "question": "Calculate the sum of the 'exp_vals' array using jnp.sum and assign it to a variable named 'loss'.",
    "answer": "loss = jnp.sum(exp_vals)",
    "explanation": "Assume Optax successfully minimized this loss, yielding optimal genomic parameters. Now we Deploy Quantum!"
  },
  {
    "id": 58,
    "type": "mcq",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 6 | Quantum Deploy| Hardware Sim | Pending |\n\nClassical hardware found the perfect parameters but cannot easily generate individual samples from this complex model distribution.",
    "question": "Which specific device is requested to run the final deployed circuit representing exact, high-performance simulation before real photonic hardware?",
    "options": [
      "A) default.qubit",
      "B) lightning.qubit",
      "C) qiskit.aer",
      "D) braket.local"
    ],
    "answer": "B) lightning.qubit",
    "explanation": "Lightning qubit is Xanadu's high-performance C++ simulator, ideal for deployment generation."
  },
  {
    "id": 59,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 6 | Quantum Deploy| Hardware Sim | Provisioning... |\n\nConstruct the Lightning device for our 4-qubit model.",
    "question": "Create a device called 'lightning.qubit' using qp.device and pass the keyword argument wires=4. Assign it to the variable 'dev_l'.",
    "answer": "dev_l = qp.device(\"lightning.qubit\", wires=4)",
    "explanation": "The device is active. But to simulate generating realistic individual genomic data points, we need to limit the simulation runs to mimicking physical shots."
  },
  {
    "id": 60,
    "type": "type-in",
    "context": "REAL WORLD SCENARIO: Genomic Data Generation\n\n| Step | Phase | Component | Status |\n|---|---|---|---|\n| 6 | Quantum Deploy| Sampling | Pending |\n\nWe must set the physical shot count on the QNode to force discrete probability collapse instead of analytical averages.",
    "question": "To configure sampling on the quantum function, call qp.set_shots passing the integer 10, and prepend it with the '@' decorator symbol.",
    "answer": "@qp.set_shots(10)",
    "explanation": "Congratulations! You have successfully stepped through the entire pipeline: defining structures, evaluating classically with Jax, minimizing loss, and deploying to a quantum simulator to pull discrete generative samples."
  }
]



//  STATE
// ══════════════════════════════════════════════
let state = {
  phase: 'context',   // context | question | explanation | final
  qIdx: 0,
  selected: null,     // for mcq: the chosen option string
  typedAnswer: '',    // for type-in
  answered: [],       // {correct, chosen}
  correctCount: 0,
  wrongCount: 0,
};
 
// ══════════════════════════════════════════════
//  UTILITY
// ══════════════════════════════════════════════
function normalizeAnswer(s) {
  return String(s)
    .replace(/\s+/g, '')
    .toLowerCase()
    .replace(/;$/, '');
}
 
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
 
function renderInline(text) {
  return escapeHtml(text)
    .replace(/\$\$(.+?)\$\$/gs, '$$$$$$1$$$$')
    .replace(/\$([^$\n]+?)\$/g, '\\($1\\)');
}
 
function renderCode(text) {
  return text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="sf-code">${escapeHtml(code.trim())}</pre>`;
  });
}
 
// Render markdown-style tables (| col | col | rows)
function renderMarkdownTable(text) {
  const lines = text.split('\n');
  let result = '';
  let inTable = false;
  let tableLines = [];
  const flushTable = () => {
    if (tableLines.length < 2) { result += tableLines.join('\n') + '\n'; tableLines = []; return; }
    const parseRow = l => l.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
    const headers = parseRow(tableLines[0]);
    // skip separator line (line 1)
    const rows = tableLines.slice(2).map(parseRow);
    let t = `<div class="sf-table-wrap"><table class="sf-table"><thead><tr>`;
    headers.forEach(h => { t += `<th>${escapeHtml(h)}</th>`; });
    t += `</tr></thead><tbody>`;
    rows.forEach(row => {
      t += `<tr>${row.map(v => `<td>${escapeHtml(v)}</td>`).join('')}</tr>`;
    });
    t += `</tbody></table></div>`;
    result += t;
    tableLines = [];
  };
  lines.forEach(line => {
    if (/^\s*\|/.test(line)) {
      tableLines.push(line);
    } else {
      if (tableLines.length) flushTable();
      result += line + '\n';
    }
  });
  if (tableLines.length) flushTable();
  return result;
}
 
function processContent(text) {
  if (!text) return '';
  text = renderCode(text);
  text = renderMarkdownTable(text);
  return text.split('\n').map(line => {
    if (line.startsWith('<')) return line;
    return line.trim() ? `<p>${renderInline(line)}</p>` : '';
  }).join('');
}
 
function renderMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([document.getElementById('sf-card')]).catch(() => {});
  }
}
 
// ══════════════════════════════════════════════
//  SCORE / HEADER
// ══════════════════════════════════════════════
function updateHeader() {
  const answered = state.answered.length;
  const c = state.correctCount;
  document.getElementById('sc-correct').textContent = c;
  document.getElementById('sc-total').textContent = answered;
  document.getElementById('sc-acc').textContent = answered ? Math.round(c / answered * 100) + '%' : '—%';
  const pct = state.qIdx / QUESTIONS.length * 100;
  document.getElementById('sf-progress').style.width = pct + '%';
  document.getElementById('sf-prog-text').textContent = `${state.qIdx} / ${QUESTIONS.length}`;
}
 
// ══════════════════════════════════════════════
//  PHASE RENDERERS
// ══════════════════════════════════════════════
function renderContext() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  const alreadyAnswered = state.answered[state.qIdx] != null;
  const typeBadge = q.type === 'type-in'
    ? `<span class="sf-type-badge typein">⌨ TYPE-IN</span>`
    : `<span class="sf-type-badge mcq">◉ MCQ</span>`;
 
  card.innerHTML = `
    <div class="sf-context-badge">
      CONCEPT ${state.qIdx + 1} / ${QUESTIONS.length}
      ${alreadyAnswered ? ' · <span style="color:var(--sf-text-muted)">REVIEWED</span>' : ''}
    </div>
    <div class="sf-label">Context</div>
    <div style="margin-bottom:12px;">${typeBadge}</div>
    <div class="sf-content">${processContent(q.context)}</div>
    <p class="sf-next-hint" style="margin-top:auto;padding-top:12px;">
      ${alreadyAnswered
        ? 'Already answered. Press <kbd class="sf-kb-key">Enter</kbd> or click Review to see your result.'
        : 'Press <kbd class="sf-kb-key">Enter</kbd> or click Continue to answer the question.'
      }
    </p>
    <div class="sf-actions" style="margin-top:14px;">
      ${state.qIdx > 0 ? '<button class="sf-action sf-action-secondary" id="btn-prev" tabindex="0">◀ PREV</button>' : ''}
      <button class="sf-action" id="btn-ctx-next" tabindex="0">
        ${alreadyAnswered ? 'REVIEW ▶' : 'CONTINUE ▶'}
      </button>
    </div>`;
 
  renderMath();
  document.getElementById('btn-ctx-next').focus();
  document.getElementById('btn-ctx-next').addEventListener('click', () => {
    if (alreadyAnswered) renderReview(state.qIdx);
    else goPhase('question');
  });
  document.getElementById('btn-prev')?.addEventListener('click', prevQuestion);
}
 
function renderQuestion() {
  if (guardQuestion()) return;
  const q = QUESTIONS[state.qIdx];
  if (q.type === 'type-in') renderTypeIn();
  else renderMCQ();
}
 
// ── MCQ ──
function renderMCQ() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  const optHtml = q.options.map((opt, i) => `
    <li>
      <button class="sf-opt-btn" data-opt="${escapeHtml(opt)}" tabindex="0">
        <span class="sf-key-hint">${i + 1}</span> ${renderInline(opt)}
      </button>
    </li>`).join('');
 
  card.innerHTML = `
    <div class="sf-label">Question ${state.qIdx + 1} <span style="color:var(--sf-text-muted);font-size:9px;margin-left:8px;">MCQ</span></div>
    <div class="sf-content">${processContent(q.question)}</div>
    <ul class="sf-options" id="sf-opts">${optHtml}</ul>
    <div class="sf-actions">
      <button class="sf-action sf-action-secondary" id="btn-skip" tabindex="0">SKIP</button>
      <button class="sf-action" id="btn-submit" disabled tabindex="0">SUBMIT ▶</button>
    </div>`;
 
  renderMath();
  card.querySelectorAll('.sf-opt-btn')[0]?.focus();
  card.querySelectorAll('.sf-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => selectOption(btn.dataset.opt));
  });
  document.getElementById('btn-submit').addEventListener('click', submitMCQ);
  document.getElementById('btn-skip').addEventListener('click', () => {
    state.answered.push({ correct: false, chosen: '—' });
    advanceQuestion();
  });
}
 
function selectOption(opt) {
  state.selected = opt;
  document.querySelectorAll('.sf-opt-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.opt === opt);
  });
  document.getElementById('btn-submit').disabled = false;
}
 
function submitMCQ() {
  const q = QUESTIONS[state.qIdx];
  const correct = state.selected === q.answer;
  state.answered.push({ correct, chosen: state.selected });
  if (correct) state.correctCount++; else state.wrongCount++;
  updateHeader();
  revealMCQ(correct);
}
 
function revealMCQ(correct) {
  state.phase = 'explanation';
  const q = QUESTIONS[state.qIdx];
  document.querySelectorAll('.sf-opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.opt === q.answer) btn.classList.add('correct-reveal');
    else if (btn.dataset.opt === state.selected) btn.classList.add('wrong-reveal');
  });
  injectFeedbackAndExplanation(correct, q.answer);
}
 
// ── TYPE-IN ──
function renderTypeIn() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  card.innerHTML = `
    <div class="sf-label">Question ${state.qIdx + 1} <span style="color:var(--sf-text-muted);font-size:9px;margin-left:8px;">TYPE-IN</span></div>
    <div class="sf-content">${processContent(q.question)}</div>
    <div class="sf-typein-wrap">
      <span class="sf-typein-label">▸ Your answer</span>
      <textarea class="sf-typein" id="sf-typein-input" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type your SQL here..."></textarea>
    </div>
    <div class="sf-actions">
      <button class="sf-action sf-action-secondary" id="btn-skip" tabindex="0">SKIP</button>
      <button class="sf-action" id="btn-submit" tabindex="0">SUBMIT ▶</button>
    </div>`;
 
  renderMath();
  const input = document.getElementById('sf-typein-input');
  input.focus();
 
  // Enable submit always for type-in (allow empty submission to be marked wrong)
  document.getElementById('btn-submit').addEventListener('click', submitTypeIn);
  document.getElementById('btn-skip').addEventListener('click', () => {
    state.answered.push({ correct: false, chosen: '—' });
    advanceQuestion();
  });
}
 
function submitTypeIn() {
  const q = QUESTIONS[state.qIdx];
  const input = document.getElementById('sf-typein-input');
  const userVal = input ? input.value : '';
  const correct = normalizeAnswer(userVal) === normalizeAnswer(q.answer);
  state.answered.push({ correct, chosen: userVal });
  if (correct) state.correctCount++; else state.wrongCount++;
  updateHeader();
  revealTypeIn(correct, userVal, q.answer);
}
 
function revealTypeIn(correct, userVal, correctAnswer) {
  state.phase = 'explanation';
  const q = QUESTIONS[state.qIdx];
  const input = document.getElementById('sf-typein-input');
  if (input) {
    input.disabled = true;
    input.classList.add(correct ? 'correct-reveal' : 'wrong-reveal');
  }
 
  const correctAnswerHtml = !correct
    ? `<div class="sf-correct-answer">
        <span class="lbl">Correct answer</span>
        <code>${escapeHtml(correctAnswer)}</code>
       </div>`
    : '';
 
  const actions = document.querySelector('.sf-actions');
  const fb = document.createElement('div');
  fb.className = 'sf-feedback ' + (correct ? 'ok' : 'fail');
  fb.textContent = correct ? '✓ CORRECT' : '✗ INCORRECT';
  actions.before(fb);
 
  if (correctAnswerHtml) {
    const caDiv = document.createElement('div');
    caDiv.innerHTML = correctAnswerHtml;
    fb.after(caDiv.firstElementChild);
  }
 
  const expl = document.createElement('div');
  expl.className = 'sf-explanation';
  expl.innerHTML = processContent(q.explanation);
  // insert after correct-answer div if present, else after fb
  const caEl = document.querySelector('.sf-correct-answer');
  (caEl || fb).after(expl);
 
  swapToNextActions();
  renderMath();
}
 
// ── SHARED: inject feedback for MCQ ──
function injectFeedbackAndExplanation(correct, correctAnswer) {
  const q = QUESTIONS[state.qIdx];
  const actions = document.querySelector('.sf-actions');
 
  const fb = document.createElement('div');
  fb.className = 'sf-feedback ' + (correct ? 'ok' : 'fail');
  fb.textContent = correct ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${correctAnswer}`;
  actions.before(fb);
 
  const expl = document.createElement('div');
  expl.className = 'sf-explanation';
  expl.innerHTML = processContent(q.explanation);
  fb.after(expl);
 
  if (q.application) {
    const app = document.createElement('div');
    app.className = 'sf-application';
    app.innerHTML = `<strong>▸ APPLICATION</strong> — ${processContent(q.application)}`;
    expl.after(app);
  }
 
  swapToNextActions();
  renderMath();
}
 
function swapToNextActions() {
  const actions = document.querySelector('.sf-actions');
  actions.innerHTML = '';
  if (state.qIdx < QUESTIONS.length - 1) {
    const btn = document.createElement('button');
    btn.className = 'sf-action';
    btn.textContent = 'NEXT ▶';
    btn.tabIndex = 0;
    btn.addEventListener('click', advanceQuestion);
    actions.appendChild(btn);
    btn.focus();
  } else {
    const btn = document.createElement('button');
    btn.className = 'sf-action';
    btn.textContent = 'FINISH ✓';
    btn.tabIndex = 0;
    btn.addEventListener('click', showFinal);
    actions.appendChild(btn);
    btn.focus();
  }
}
 
// ── REVIEW (read-only replay) ──
function renderReview(idx) {
  state.phase = 'explanation';
  state.qIdx = idx;
  updateHeader();
  const q = QUESTIONS[idx];
  const prev = state.answered[idx];
  const card = document.getElementById('sf-card');
  const isMCQ = q.type === 'mcq';
 
  const feedbackCls = (prev && prev.correct) ? 'ok' : 'fail';
  const feedbackTxt = (prev && prev.correct)
    ? '✓ CORRECT'
    : isMCQ
      ? `✗ INCORRECT — Correct answer: ${q.answer}${prev && prev.chosen !== '—' ? ` · You chose: ${prev.chosen}` : ''}`
      : `✗ INCORRECT — Correct answer: ${q.answer}`;
 
  let answerArea = '';
  if (isMCQ) {
    const optHtml = q.options.map((opt, i) => {
      let cls = 'sf-opt-btn';
      if (opt === q.answer) cls += ' correct-reveal';
      else if (prev && opt === prev.chosen) cls += ' wrong-reveal';
      return `<li><button class="${cls}" disabled tabindex="-1">
        <span class="sf-key-hint">${i + 1}</span> ${renderInline(opt)}
      </button></li>`;
    }).join('');
    answerArea = `<ul class="sf-options">${optHtml}</ul>`;
  } else {
    const userVal = prev ? escapeHtml(prev.chosen === '—' ? '(skipped)' : prev.chosen) : '';
    const inputCls = 'sf-typein ' + ((prev && prev.correct) ? 'correct-reveal' : 'wrong-reveal');
    answerArea = `
      <div class="sf-typein-wrap">
        <span class="sf-typein-label">▸ Your answer</span>
        <textarea class="${inputCls}" disabled tabindex="-1">${userVal}</textarea>
        ${!(prev && prev.correct)
          ? `<div class="sf-correct-answer"><span class="lbl">Correct answer</span><code>${escapeHtml(q.answer)}</code></div>`
          : ''}
      </div>`;
  }
 
  const nextBtn = idx < QUESTIONS.length - 1
    ? `<button class="sf-action" id="btn-rev-next" tabindex="0">NEXT ▶</button>`
    : `<button class="sf-action" id="btn-rev-finish" tabindex="0">FINISH ✓</button>`;
  const prevBtn = idx > 0
    ? `<button class="sf-action sf-action-secondary" id="btn-rev-prev" tabindex="0">◀ PREV</button>`
    : '';
 
  card.innerHTML = `
    <div class="sf-label" style="color:var(--sf-text-muted)">
      Review — Question ${idx + 1}
      <span style="font-size:10px;letter-spacing:.1em;">(READ ONLY)</span>
    </div>
    <div class="sf-content">${processContent(q.question)}</div>
    ${answerArea}
    <div class="sf-feedback ${feedbackCls}">${feedbackTxt}</div>
    <div class="sf-explanation">${processContent(q.explanation)}</div>
    <div class="sf-actions">${prevBtn}${nextBtn}</div>`;
 
  renderMath();
 
  document.getElementById('btn-rev-next')?.addEventListener('click', () => {
    state.qIdx = idx + 1;
    updateHeader();
    goPhase('context');
  });
  document.getElementById('btn-rev-finish')?.addEventListener('click', showFinal);
  document.getElementById('btn-rev-prev')?.addEventListener('click', () => {
    state.qIdx = idx - 1;
    updateHeader();
    goPhase('context');
  });
  document.querySelector('.sf-actions .sf-action')?.focus();
}
 
// ══════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════
function advanceQuestion() {
  state.qIdx++;
  state.selected = null;
  state.typedAnswer = '';
  if (state.qIdx >= QUESTIONS.length) { showFinal(); return; }
  updateHeader();
  goPhase('context');
}
 
function prevQuestion() {
  if (state.qIdx === 0) return;
  state.qIdx--;
  state.selected = null;
  state.typedAnswer = '';
  updateHeader();
  goPhase('context');
}
 
function guardQuestion() {
  if (state.answered[state.qIdx] != null) {
    renderReview(state.qIdx);
    return true;
  }
  return false;
}
 
function goPhase(ph) {
  state.phase = ph;
  if (ph === 'context') renderContext();
  else if (ph === 'question') renderQuestion();
  else if (ph === 'final') showFinal();
}
 
// ══════════════════════════════════════════════
//  FINAL SCREEN
// ══════════════════════════════════════════════
function showFinal() {
  state.phase = 'final';
  const total = QUESTIONS.length;
  const c = state.correctCount;
  const w = state.wrongCount;
  const attempted = state.answered.length;
  const acc = attempted ? Math.round(c / attempted * 100) : 0;
  let grade = '', gradeColor = 'var(--sf-accent)';
  if (acc >= 90) { grade = 'DISTINCTION'; gradeColor = 'var(--sf-success)'; }
  else if (acc >= 75) { grade = 'MERIT'; gradeColor = 'var(--sf-accent)'; }
  else if (acc >= 50) { grade = 'PASS'; gradeColor = 'var(--sf-warn)'; }
  else { grade = 'RETRY'; gradeColor = 'var(--sf-error)'; }
 
  const dots = QUESTIONS.map((_, i) => {
    const a = state.answered[i];
    const cls = a ? (a.correct ? 'c' : 'w') : '';
    return `<div class="sf-dot ${cls}" title="Q${i + 1}${a ? (' — ' + (a.correct ? '✓' : '✗')) : ''}"></div>`;
  }).join('');
 
  document.getElementById('sf-card').innerHTML = `
    <div class="sf-final">
      <div class="sf-final-title">SESSION COMPLETE</div>
      <div class="sf-grade" style="color:${gradeColor}">${grade}</div>
      <div class="sf-final-stats">
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-success)">${c}</span><span class="lbl">Correct</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-error)">${w}</span><span class="lbl">Wrong</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-accent)">${acc}%</span><span class="lbl">Accuracy</span></div>
      </div>
      <div style="width:100%;max-width:420px;">
        <div style="font-size:10px;color:var(--sf-text-muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">Question Map</div>
        <div class="sf-dot-map">${dots}</div>
      </div>
      <p class="sf-final-note">Review any red squares above, then restart to reinforce your SQL foundations.</p>
      <button class="sf-action" id="btn-restart" style="margin-top:8px;" tabindex="0">↺ RESTART QUIZ</button>
    </div>`;
 
  document.getElementById('btn-restart').addEventListener('click', restartQuiz);
  document.getElementById('sf-progress').style.width = '100%';
  document.getElementById('sf-prog-text').textContent = `${QUESTIONS.length} / ${QUESTIONS.length}`;
}
 
function restartQuiz() {
  state = { phase: 'context', qIdx: 0, selected: null, typedAnswer: '', answered: [], correctCount: 0, wrongCount: 0 };
  updateHeader();
  goPhase('context');
}
 
// ══════════════════════════════════════════════
//  MODAL (kept for structural parity)
// ══════════════════════════════════════════════
function closeModal() {
  document.getElementById('sf-modal-backdrop').classList.remove('open');
}
document.getElementById('btn-modal-close').addEventListener('click', closeModal);
document.getElementById('sf-modal-backdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('sf-modal-backdrop')) closeModal();
});
 
// ══════════════════════════════════════════════
//  KEYBOARD
// ══════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const backdrop = document.getElementById('sf-modal-backdrop');
    if (backdrop.classList.contains('open')) { closeModal(); return; }
  }
  if (document.getElementById('sf-modal-backdrop').classList.contains('open')) return;
 
  const tag = document.activeElement?.tagName;
 
  if (state.phase === 'context') {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state.answered[state.qIdx] != null) renderReview(state.qIdx);
      else goPhase('question');
    }
    return;
  }
 
  if (state.phase === 'question') {
    const q = QUESTIONS[state.qIdx];
    if (q.type === 'mcq') {
      if (e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const opt = q.options[parseInt(e.key) - 1];
        if (opt) selectOption(opt);
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const sub = document.getElementById('btn-submit');
        if (sub && !sub.disabled) submitMCQ();
        return;
      }
    } else {
      // type-in: Ctrl+Enter or Cmd+Enter submits
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        submitTypeIn();
        return;
      }
    }
    return;
  }
 
  if (state.phase === 'explanation' || state.phase === 'final') {
    if (tag === 'TEXTAREA' || tag === 'INPUT') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      const nb = document.querySelector('.sf-actions .sf-action');
      if (nb) nb.click();
    }
  }
});
 
// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
updateHeader();
goPhase('context');