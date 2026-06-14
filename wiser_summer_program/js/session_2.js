const quizData = 
[
  {
    "id": 1,
    "context": "Dr. Seongmin Kim's lecture explores a modern approach to scientific discovery by integrating three major computational paradigms to solve complex problems in materials science.",
    "question": "Which three powerful tools are integrated in Dr. Kim's research framework to accelerate materials discovery?",
    "options": [
      "A) Quantum Computing, Blockchain, and HPC",
      "B) Edge Computing, Artificial Intelligence, and HPC",
      "C) Quantum Computing, Artificial Intelligence, and HPC",
      "D) Quantum Computing, Artificial Intelligence, and Cloud Storage"
    ],
    "answer": "C) Quantum Computing, Artificial Intelligence, and HPC",
    "explanation": "The core framework relies on the synergy of Quantum Computing (QC), AI (Machine Learning), and High-Performance Computing (HPC). Now that we know the primary tools, let's examine the traditional experimental methods they aim to improve."
  },
  {
    "id": 2,
    "context": "Before shifting to computational methods, Dr. Kim worked in experimental material science, focusing on functional surfaces. However, he encountered a significant bottleneck in relying on traditional laboratory workflows.",
    "question": "What is the primary limitation of traditional experimental materials research mentioned in the lecture?",
    "options": [
      "A) It requires overly expensive laboratory equipment.",
      "B) It relies on a trial-and-error process that is very slow and time-consuming.",
      "C) It cannot produce functional surfaces like hydrophobic materials.",
      "D) It generates too much data for humans to analyze."
    ],
    "answer": "B) It relies on a trial-and-error process that is very slow and time-consuming.",
    "explanation": "Experimental science often relies on trial and error, requiring time-consuming fabrication and characterization of too many combinations. To overcome this slowness, researchers began looking toward computer science, inspired by a famous AI breakthrough."
  },
  {
    "id": 3,
    "context": "Seeking a smarter way to design materials, Dr. Kim was inspired by a major artificial intelligence milestone that demonstrated AI's ability to navigate massive, complex design spaces.",
    "question": "Which AI event specifically inspired Dr. Kim to consider AI for tackling complex material design spaces?",
    "options": [
      "A) The release of ChatGPT",
      "B) IBM Deep Blue defeating Garry Kasparov",
      "C) AlphaGo solving highly complex problems smartly",
      "D) The invention of the Convolutional Neural Network"
    ],
    "answer": "C) AlphaGo solving highly complex problems smartly",
    "explanation": "AlphaGo demonstrated that AI could solve extremely difficult problems efficiently, inspiring the application of AI to material science. While AI is great at recognizing patterns, applying it to materials requires understanding the specific role it plays in the workflow."
  },
  {
    "id": 4,
    "context": "In the context of material science, machine learning serves a very specific purpose before quantum computing even enters the picture.",
    "question": "What is the primary role of machine learning in Dr. Kim's computational materials workflow?",
    "options": [
      "A) To simulate molecular dynamics",
      "B) To learn hidden patterns between input features and material performance",
      "C) To process quantum states faster",
      "D) To replace all physical laboratory experiments"
    ],
    "answer": "B) To learn hidden patterns between input features and material performance",
    "explanation": "Machine learning identifies hidden relationships to create fast, predictive models of material performance. However, prediction alone isn't enough when the number of possible materials becomes astronomically large."
  },
  {
    "id": 5,
    "context": "Material design involves optimizing structures, such as a pixelated metamaterial. Adding just one more variable drastically changes the size of the optimization space.",
    "question": "If a 50-pixel metamaterial has $2^{50}$ possible configurations, how many configurations does a 51-pixel metamaterial have?",
    "options": [
      "A) $2^{50} + 1$",
      "B) $2^{51}$ (Twice as many as 50 pixels)",
      "C) $51^2$",
      "D) $10^{51}$"
    ],
    "answer": "B) $2^{51}$ (Twice as many as 50 pixels)",
    "explanation": "Adding one variable doubles the optimization space, leading to exponential growth that overwhelms classical search methods. Because classical methods struggle with this exponential growth, a new type of computing is required."
  },
  {
    "id": 6,
    "context": "Due to the exponential growth of design spaces, classical optimization algorithms hit a wall. This is where the second pillar of Dr. Kim's triad is introduced.",
    "question": "Why is quantum computing utilized in this materials discovery framework?",
    "options": [
      "A) Because it is a trending topic in computer science",
      "B) Because it natively runs machine learning models better than GPUs",
      "C) Because it may accelerate the search through extremely large, NP-hard optimization spaces",
      "D) Because it perfectly simulates physical laboratories"
    ],
    "answer": "C) Because it may accelerate the search through extremely large, NP-hard optimization spaces",
    "explanation": "Quantum computing provides a way to search exponentially growing combinatorial design spaces much more efficiently than classical algorithms. To apply quantum computing, the physical material must first be translated into a format the computer understands."
  },
  {
    "id": 7,
    "context": "To use quantum optimization algorithms, candidate material structures must be mathematically represented. This representation is standard in classical computing but perfectly suits the quantum translation step.",
    "question": "How is a candidate material structure (like a dielectric/metal pixelated material) represented for computational optimization?",
    "options": [
      "A) As a 3D CAD model",
      "B) As a binary bit string (e.g., 1s and 0s)",
      "C) As a continuous differential equation",
      "D) As a string of text"
    ],
    "answer": "B) As a binary bit string (e.g., 1s and 0s)",
    "explanation": "Materials are represented as binary bit strings, where 0 and 1 indicate the absence or presence of specific material features. Once represented as bits, we must define what \"good\" performance looks like in physics terms."
  },
  {
    "id": 8,
    "context": "In physics and quantum mechanics, systems naturally seek their most stable state. This concept is repurposed to evaluate the performance of different material designs.",
    "question": "What physics term is used to describe the energy function or performance landscape of all possible material candidate structures?",
    "options": [
      "A) Entropy",
      "B) Superposition",
      "C) Hamiltonian",
      "D) Momentum"
    ],
    "answer": "C) Hamiltonian",
    "explanation": "The Hamiltonian acts as an energy landscape where every bit string corresponds to a design, and its energy value represents its performance. The ultimate goal is to find the specific state on this landscape that yields the best material."
  },
  {
    "id": 9,
    "context": "When navigating the Hamiltonian energy landscape of material designs, the objective is to find the optimal structure.",
    "question": "What is the lowest energy state of the Hamiltonian called, which corresponds to the best material design?",
    "options": [
      "A) The ground state",
      "B) The excited state",
      "C) The null state",
      "D) The apex state"
    ],
    "answer": "A) The ground state",
    "explanation": "The ground state is the lowest energy state, representing the optimal material design according to the objective function. Unfortunately, mapping the entire Hamiltonian is impossible because real material data is incredibly sparse."
  },
  {
    "id": 10,
    "context": "In reality, researchers cannot calculate the exact energy (performance) for every possible bit string because running physics simulations for millions of configurations is impossible.",
    "question": "How do researchers overcome the limitation of having only sparse, expensive data points in the material design space?",
    "options": [
      "A) They manually guess the missing data points.",
      "B) They use machine learning to build a surrogate model that estimates the entire landscape.",
      "C) They build a massive physical lab to test all points.",
      "D) They use random number generators to fill the gaps."
    ],
    "answer": "B) They use machine learning to build a surrogate model that estimates the entire landscape.",
    "explanation": "A machine learning surrogate model infers the broader energy landscape from a limited, sparse dataset. A specific type of machine learning model is chosen because its mathematical output maps perfectly to quantum computers."
  },
  {
    "id": 11,
    "context": "To bridge machine learning and quantum computing, Dr. Kim uses a specific supervised learning model that captures linear terms and pairwise interactions efficiently.",
    "question": "Which machine learning model is explicitly mentioned as being used to create the surrogate Hamiltonian?",
    "options": [
      "A) Convolutional Neural Networks (CNN)",
      "B) Factorization Machines",
      "C) Random Forests",
      "D) K-Means Clustering"
    ],
    "answer": "B) Factorization Machines",
    "explanation": "Factorization machines are used because they easily capture quadratic optimization terms while remaining computationally efficient. The output of this machine learning model translates directly into a standard optimization format."
  },
  {
    "id": 12,
    "context": "The mathematical equation produced by the Factorization Machine contains linear and quadratic coefficients that must be fed into the quantum computer.",
    "question": "What form is the trained surrogate model written in so that it acts as a Hamiltonian for quantum optimization?",
    "options": [
      "A) QUBO (Quadratic Unconstrained Binary Optimization)",
      "B) QAOA (Quantum Approximate Optimization Algorithm)",
      "C) ANOVA (Analysis of Variance)",
      "D) DQAOA (Distributed QAOA)"
    ],
    "answer": "A) QUBO (Quadratic Unconstrained Binary Optimization)",
    "explanation": "The model parameters are mapped directly into a QUBO, which acts as the Hamiltonian for the quantum computer. Using this QUBO, researchers can execute a powerful paradigm shift from mere prediction to active design."
  },
  {
    "id": 13,
    "context": "Standard machine learning predicts the performance of a given structure. However, the ultimate goal in materials science is to input a desired performance and have the computer generate the optimal structure.",
    "question": "What is the term used to describe the process of finding the optimal structure directly from a target objective, rather than just predicting performance?",
    "options": [
      "A) Forward modeling",
      "B) Inverse design",
      "C) Feature extraction",
      "D) Supervised prediction"
    ],
    "answer": "B) Inverse design",
    "explanation": "Inverse design starts from the target objective and finds the optimal structure that achieves it by treating it as an optimization problem. However, inverse design on large QUBOs is not always easy, depending on how variables interact."
  },
  {
    "id": 14,
    "context": "Not all optimization problems are equally difficult. The difficulty often depends on how many material variables interact with one another in the mathematical model.",
    "question": "What characteristic makes a QUBO problem significantly harder to solve?",
    "options": [
      "A) When it is sparse, meaning few variables interact.",
      "B) When it is dense, meaning many variables interact with each other.",
      "C) When it uses binary variables instead of continuous ones.",
      "D) When it is evaluated on classical computers instead of quantum ones."
    ],
    "answer": "B) When it is dense, meaning many variables interact with each other.",
    "explanation": "Dense QUBOs involve highly interconnected variables, making the optimization landscape incredibly complex and hard to solve. Because initial surrogate models for dense QUBOs can be inaccurate due to sparse data, an iterative loop is required."
  },
  {
    "id": 15,
    "context": "Because initial datasets in material science are small (e.g., 25-50 points), the first QUBO generated is just an approximation. The system must iteratively teach itself to get better.",
    "question": "What technique combines machine learning, quantum computing, and physics simulations in an iterative feedback loop to improve the surrogate model?",
    "options": [
      "A) Unsupervised Learning",
      "B) Active Learning",
      "C) Transfer Learning",
      "D) Reinforcement Decoding"
    ],
    "answer": "B) Active Learning",
    "explanation": "Active learning uses a feedback loop where QC predicts a structure, physics simulation validates it, and the new data point retrains the model. This process relies on accurate validation before updating the model."
  },
  {
    "id": 16,
    "context": "During the active learning loop, the quantum computer suggests a new \"optimal\" material structure based on the current surrogate model. However, this suggestion isn't blindly trusted.",
    "question": "How is the quantum-predicted structure validated before being added back into the training dataset?",
    "options": [
      "A) By testing it on a classical GPU",
      "B) By physically fabricating it in a lab immediately",
      "C) By evaluating it using accurate physics-based simulation models",
      "D) By asking an AI language model if it is correct"
    ],
    "answer": "C) By evaluating it using accurate physics-based simulation models",
    "explanation": "The structure is validated using accurate, though expensive, physics-based simulations (like finite element methods) to determine its true performance. To actually run the optimization step in this loop, different types of quantum hardware can be used."
  },
  {
    "id": 17,
    "context": "There are different types of quantum computing devices. One type is highly specialized to find the low-energy states of objective functions like QUBOs, though it cannot run general algorithms.",
    "question": "Which specific type of quantum computing device is designed primarily for optimization problems and searching for ground states?",
    "options": [
      "A) Gate-based Universal Quantum Computer",
      "B) Quantum Annealing device",
      "C) Quantum Simulator",
      "D) Photonic Neural Network"
    ],
    "answer": "B) Quantum Annealing device",
    "explanation": "Quantum Annealing is specialized for finding the ground state of objective functions like QUBOs very efficiently, though it is not a universal computer. Despite its efficiency, quantum annealing has limitations regarding problem size."
  },
  {
    "id": 18,
    "context": "While quantum annealing is excellent for QUBOs, the physical chips have constraints, meaning a massive math problem cannot always map perfectly onto the physical qubits.",
    "question": "What is one mentioned limitation of physical quantum annealing hardware?",
    "options": [
      "A) It cannot process any optimization problems.",
      "B) Restricted connectivity and embedding overhead.",
      "C) It consumes more power than a supercomputer.",
      "D) It only works for continuous variables."
    ],
    "answer": "B) Restricted connectivity and embedding overhead.",
    "explanation": "Hardware limitations like restricted connectivity and noise prevent large problems from mapping perfectly onto the physical device. Because of this, researchers also explore more flexible, universal quantum architectures."
  },
  {
    "id": 19,
    "context": "Unlike quantum annealers, another class of quantum computers can run any arbitrary algorithm, making them highly flexible for simulations, chemistry, and optimization.",
    "question": "Which type of quantum computing uses parameterized circuits and is universally applicable?",
    "options": [
      "A) Gate-based quantum computing",
      "B) Adiabatic quantum computing",
      "C) Neuromorphic computing",
      "D) Quantum Annealing"
    ],
    "answer": "A) Gate-based quantum computing",
    "explanation": "Gate-based quantum computers use quantum gates and circuits, making them universal and flexible for many different scientific applications. For optimization on these gate-based systems, a specific algorithm is predominantly used."
  },
  {
    "id": 20,
    "context": "To solve optimization problems on universal gate-based quantum computers, researchers use a specific variational algorithm that adjusts parameters to find good solutions.",
    "question": "What does QAOA stand for in the context of gate-based optimization?",
    "options": [
      "A) Quantum Artificial Optimization Algorithm",
      "B) Quantum Approximate Optimization Algorithm",
      "C) Quantum Annealing Operations Array",
      "D) Quantum Augmented Operational Analysis"
    ],
    "answer": "B) Quantum Approximate Optimization Algorithm",
    "explanation": "QAOA (Quantum Approximate Optimization Algorithm) uses parameterized quantum circuits to prepare states that yield high probabilities of optimal solutions. However, executing QAOA currently faces a massive hardware hurdle."
  },
  {
    "id": 21,
    "context": "Current quantum computers are not perfect. We are currently in an era where gate operations have slight inaccuracies that add up quickly.",
    "question": "What acronym describes the current era of quantum hardware, which is characterized by noise and lacks error correction?",
    "options": [
      "A) FTQC",
      "B) QRAM",
      "C) NISQ",
      "D) CMOS"
    ],
    "answer": "C) NISQ",
    "explanation": "NISQ (Noisy Intermediate-Scale Quantum) refers to current hardware where noise accumulates, making deep quantum circuits unreliable. Because of NISQ limitations, the physical design of the quantum circuit is heavily constrained."
  },
  {
    "id": 22,
    "context": "In standard QAOA, solving a larger problem requires applying more quantum gates. On NISQ hardware, this presents a severe problem for the accuracy of the result.",
    "question": "Why is reducing \"circuit depth\" (the number of consecutive gates) critical on today's NISQ hardware?",
    "options": [
      "A) Deep circuits consume too much classical memory.",
      "B) Deep circuits cause the hardware to overheat and shut down.",
      "C) Errors from noisy gate operations build up, making the final result unreliable.",
      "D) Deep circuits take months to run."
    ],
    "answer": "C) Errors from noisy gate operations build up, making the final result unreliable.",
    "explanation": "Because each gate has a small error rate, stacking too many gates (deep circuits) accumulates noise until the answer becomes essentially random. If hardware is too noisy, one might ask why we don't just simulate the quantum computer perfectly on a classical computer."
  },
  {
    "id": 23,
    "context": "Researchers can run \"noiseless\" quantum simulators on classical supercomputers to avoid hardware errors, but classical computers hit a fundamental roadblock as problem size increases.",
    "question": "Why is it difficult to simulate large quantum circuits (e.g., beyond 40-50 qubits) on classical computers?",
    "options": [
      "A) Classical computers cannot understand binary code.",
      "B) The memory requirement grows exponentially as problem size increases.",
      "C) Simulators require constant internet connections.",
      "D) Classical CPUs cannot generate random numbers."
    ],
    "answer": "B) The memory requirement grows exponentially as problem size increases.",
    "explanation": "A 10-qubit problem has $1024$ states, and an 11-qubit problem has $2048$. This exponential growth quickly exhausts the RAM of even the largest classical supercomputers. To bypass both classical memory limits and quantum noise limits, a hybrid approach was created."
  },
  {
    "id": 24,
    "context": "Since a large 1,000-variable problem cannot be simulated classically or run on a noisy quantum chip directly, Dr. Kim's team breaks the problem apart.",
    "question": "What is the core idea behind Distributed QAOA (DQAOA)?",
    "options": [
      "A) Running the problem sequentially on a single quantum device.",
      "B) Decomposing a large problem into smaller sub-problems, solving them in parallel, and aggregating the solutions.",
      "C) Using thousands of classical GPUs to brute-force the solution.",
      "D) Waiting for future fault-tolerant quantum computers to be built."
    ],
    "answer": "B) Decomposing a large problem into smaller sub-problems, solving them in parallel, and aggregating the solutions.",
    "explanation": "DQAOA divides a massive problem into small, manageable sub-problems that fit on NISQ devices, solving them in parallel and combining the results iteratively. This distributed approach vastly expands the size of problems that can be solved today."
  },
  {
    "id": 25,
    "context": "Standard QAOA on current hardware struggles with problems involving just 30 variables. By utilizing DQAOA, the scale of solvable problems increases exponentially.",
    "question": "According to the lecture, what size of QUBO problems can DQAOA successfully handle?",
    "options": [
      "A) Up to 30 variables",
      "B) Up to 100 variables",
      "C) Up to 1,000 variables",
      "D) Up to 10,000 variables"
    ],
    "answer": "D) Up to 10,000 variables",
    "explanation": "DQAOA enables the handling of exceptionally large QUBO problems, up to 10,000 variables, far exceeding the limits of standalone QAOA. This heavy computational lifting is significantly aided by specific classical hardware."
  },
  {
    "id": 26,
    "context": "Although DQAOA uses quantum circuits, a massive portion of the workflow—such as decomposition, classical parameter tuning, and aggregation—runs on classical hardware.",
    "question": "Which hardware component provides a greater than 10x acceleration for the classical parts of the DQAOA workflow?",
    "options": [
      "A) CPU clustering",
      "B) GPUs (Graphics Processing Units)",
      "C) Qubits",
      "D) Photonic switches"
    ],
    "answer": "B) GPUs (Graphics Processing Units)",
    "explanation": "GPUs are used to vastly accelerate the classical data processing, decomposition, and aggregation steps of the hybrid quantum workflow. With this scalable infrastructure in place, the team can tackle real-world energy problems."
  },
  {
    "id": 27,
    "context": "To prove the workflow isn't just an abstract theory, the team applied it to a practical energy-saving material design scenario involving the control of light and heat.",
    "question": "What specific real-world material did the team successfully design using machine learning and quantum computing?",
    "options": [
      "A) A high-performance transparent radiative cooler for energy-saving windows",
      "B) A room-temperature superconductor",
      "C) A bulletproof Kevlar polymer",
      "D) A highly conductive copper alloy"
    ],
    "answer": "A) A high-performance transparent radiative cooler for energy-saving windows",
    "explanation": "The framework successfully designed a layered transparent radiative cooler that passively controls heat and light to reduce building cooling energy. This success proved the framework could be adapted to completely different types of materials."
  },
  {
    "id": 28,
    "context": "Beyond metamaterials, the framework was applied to \"high-entropy alloys,\" which are complex metallic materials with many interacting elements.",
    "question": "In the high-entropy alloy example, what did the team use to replace expensive, slow DFT (Density Functional Theory) and molecular dynamic simulations?",
    "options": [
      "A) A quantum annealing simulator",
      "B) A machine learning potential model (NN surrogate)",
      "C) A classical brute-force search algorithm",
      "D) A random state generator"
    ],
    "answer": "B) A machine learning potential model (NN surrogate)",
    "explanation": "Because evaluating alloys requires incredibly expensive simulations, the team used high-fidelity Machine Learning Potential models as quick, reliable substitutes. The framework's flexibility extends beyond materials entirely, moving into electronics."
  },
  {
    "id": 29,
    "context": "Because the hybrid HPC-QC framework essentially navigates large, rugged optimization spaces, it can be applied to problems outside of physical materials discovery.",
    "question": "Which of the following non-material applications was explicitly shown to be designed using this optimization framework?",
    "options": [
      "A) Autonomous vehicle navigation routes",
      "B) Radio-Frequency Integrated Circuits (RFICs)",
      "C) Stock market prediction algorithms",
      "D) Protein folding pathways"
    ],
    "answer": "B) Radio-Frequency Integrated Circuits (RFICs)",
    "explanation": "The DQAOA framework successfully optimized RFICs, proving that methods developed for materials can be repurposed for electronics and communications. Researchers also developed alternative quantum algorithms to further increase flexibility."
  },
  {
    "id": 30,
    "context": "Dr. Kim introduced an alternative to QAOA called DVQOA (Distributed Variational Quantum Optimization Algorithm), which operates in an unsupervised manner.",
    "question": "What classical computing concept is DVQOA conceptually compared to in the lecture?",
    "options": [
      "A) Relational Databases",
      "B) Deep Neural Networks",
      "C) Cryptographic Hashing",
      "D) Linear Regression"
    ],
    "answer": "B) Deep Neural Networks",
    "explanation": "DVQOA functions somewhat like a quantum-inspired neural network, where quantum gates act similarly to neurons, and stacking layers improves performance. This allows it to bypass a step that is mandatory in QAOA and Annealing."
  },
  {
    "id": 31,
    "context": "Unlike QUBO or standard QAOA methods, DVQOA has a unique advantage in how it receives the problem it needs to solve.",
    "question": "What is the major advantage of DVQOA regarding problem formulation?",
    "options": [
      "A) It requires exactly 50 qubits to run.",
      "B) It automatically fixes hardware noise.",
      "C) It does not require converting the problem into a Hamiltonian form in advance.",
      "D) It only works on classical simulators."
    ],
    "answer": "C) It does not require converting the problem into a Hamiltonian form in advance.",
    "explanation": "DVQOA can interact directly with the objective function without needing it translated into a QUBO/Hamiltonian, making it highly flexible. Another challenge in realistic design is the nature of the variables themselves."
  },
  {
    "id": 32,
    "context": "Real material design is rarely just about choosing \"Material A or Material B\" (discrete binary choices). It often requires optimizing quantities like thickness.",
    "question": "Optimizing the thickness of a material layer is an example of what kind of variable?",
    "options": [
      "A) Discrete variable",
      "B) Binary variable",
      "C) Continuous variable",
      "D) String variable"
    ],
    "answer": "C) Continuous variable",
    "explanation": "Thickness is a continuous variable, which creates a mixed-space optimization problem when combined with discrete material choices. To use QUBO-based quantum optimizers, these continuous variables must be transformed."
  },
  {
    "id": 33,
    "context": "Because quantum algorithms like QAOA primarily deal with binary strings (0s and 1s), continuous parameters pose a problem.",
    "question": "How does the framework handle continuous variables so they can be processed by the quantum optimizer?",
    "options": [
      "A) By ignoring them completely",
      "B) By discretizing them into a binary encoded representation",
      "C) By evaluating them exclusively on GPUs after the quantum run",
      "D) By using a dedicated \"continuous qubit\" hardware"
    ],
    "answer": "B) By discretizing them into a binary encoded representation",
    "explanation": "Continuous variables are encoded into a set of binary bits, solved as a combined Hamiltonian, and then decoded back into continuous parameters. As models become more realistic, the simple pairwise interactions of QUBO are no longer sufficient."
  },
  {
    "id": 34,
    "context": "The standard QUBO model defines an energy landscape by only considering interactions between two variables at a time (quadratic terms).",
    "question": "What is the limitation of forcing a realistic scientific problem entirely into a QUBO format?",
    "options": [
      "A) The resulting dataset becomes completely random.",
      "B) You may lose the original structure of the problem or require complex transformations that artificially inflate problem size.",
      "C) QUBOs can only optimize experimental laboratory temperatures.",
      "D) QUBOs are incompatible with classical HPC systems."
    ],
    "answer": "B) You may lose the original structure of the problem or require complex transformations that artificially inflate problem size.",
    "explanation": "Real systems often have variables that interact in groups of three or more, meaning forcing them into pairwise QUBOs alters the problem's natural structure. To capture these multi-variable relationships, a new format is used."
  },
  {
    "id": 35,
    "context": "To more accurately model complex physical interactions where three or more features interact simultaneously, the mathematical model must be expanded.",
    "question": "What does HUBO stand for?",
    "options": [
      "A) Heuristic Unsupervised Binary Operation",
      "B) High-Utility Basic Optimization",
      "C) Higher-Order Unconstrained Binary Optimization",
      "D) Hybrid Universal Binary Optimizer"
    ],
    "answer": "C) Higher-Order Unconstrained Binary Optimization",
    "explanation": "HUBO (Higher-Order Unconstrained Binary Optimization) extends QUBO by allowing mathematical terms that model the interaction of three or more variables simultaneously. While more accurate, HUBOs introduce severe algorithmic difficulties."
  },
  {
    "id": 36,
    "context": "By introducing higher-order terms into the objective function, the optimization landscape changes drastically, becoming much harder for algorithms to navigate.",
    "question": "How does upgrading from a QUBO to a HUBO affect the optimization landscape?",
    "options": [
      "A) It makes the landscape perfectly flat.",
      "B) It makes the landscape much more rugged, creating many local minima where algorithms get stuck.",
      "C) It turns the landscape into a simple linear slope.",
      "D) It perfectly guarantees the finding of a global maximum immediately."
    ],
    "answer": "B) It makes the landscape much more rugged, creating many local minima where algorithms get stuck.",
    "explanation": "The extra expressiveness of HUBOs makes the energy landscape highly rugged and complex, increasing computational cost and requiring deeper quantum circuits. To counter the slow process of variational circuit tuning, researchers are turning to Generative AI."
  },
  {
    "id": 37,
    "context": "Normally, QAOA is a variational algorithm that runs a loop repeatedly to tune circuit parameters. This takes time. Dr. Kim introduces \"QAOA-GPT\" as a revolutionary shortcut.",
    "question": "What is the core idea behind QAOA-GPT?",
    "options": [
      "A) Training an AI to physically build better quantum hardware chips.",
      "B) Using a GPT-style model to instantly generate optimized quantum circuits for new problems, bypassing the tuning loop.",
      "C) Having an AI write the research paper explaining the results.",
      "D) Translating quantum code into Python using ChatGPT."
    ],
    "answer": "B) Using a GPT-style model to instantly generate optimized quantum circuits for new problems, bypassing the tuning loop.",
    "explanation": "QAOA-GPT learns from a database of good circuits and generates optimal quantum circuits rapidly (inference), removing the need for slow variational loops. However, this generative approach has a significant front-end cost."
  },
  {
    "id": 38,
    "context": "While QAOA-GPT can output a circuit in a fraction of a second, the AI must first learn what a \"good\" circuit looks like.",
    "question": "What is the primary weakness or challenge of the QAOA-GPT approach?",
    "options": [
      "A) Inference speed is incredibly slow.",
      "B) Generating the high-quality data set required to train the GPT model is computationally very expensive.",
      "C) It cannot be integrated with classical HPC.",
      "D) The generated circuits can only run on quantum annealers."
    ],
    "answer": "B) Generating the high-quality data set required to train the GPT model is computationally very expensive.",
    "explanation": "Training the model requires creating and simulating millions of optimal circuits first, which is highly resource-intensive as problem size grows. Fortunately, DQAOA solves this scaling issue beautifully."
  },
  {
    "id": 39,
    "context": "Training a GPT model on a massive 1,000-variable problem is impossible because the training data is too hard to generate. The distributed framework offers a natural solution.",
    "question": "How does the distributed framework (DQAOA) make the QAOA-GPT approach practical?",
    "options": [
      "A) By relying solely on classical GPUs without AI.",
      "B) By using the GPT to only predict the final answer directly.",
      "C) By breaking the massive problem down, the GPT only needs to generate circuits for small, fixed-size sub-problems.",
      "D) By splitting the AI model across multiple quantum chips."
    ],
    "answer": "C) By breaking the massive problem down, the GPT only needs to generate circuits for small, fixed-size sub-problems.",
    "explanation": "Because DQAOA relies on solving small sub-problems, the GPT only needs to be trained on small, easy-to-generate datasets, making inference highly scalable. As sub-problems multiply, a new bottleneck appears at the hardware level."
  },
  {
    "id": 40,
    "context": "A modern hybrid workflow might generate dozens of small sub-problems. Traditionally, a quantum device would solve one sub-problem, reset, and solve the next.",
    "question": "What \"Future Work\" strategy does Dr. Kim propose to increase the utilization efficiency of quantum hardware?",
    "options": [
      "A) Deleting sub-problems that seem too hard.",
      "B) Solving multiple independent sub-problems simultaneously on different qubit clusters within a single quantum device.",
      "C) Using quantum annealing to train the GPT.",
      "D) Replacing qubits with classical bits."
    ],
    "answer": "B) Solving multiple independent sub-problems simultaneously on different qubit clusters within a single quantum device.",
    "explanation": "By clustering independent sub-problems into a single combined Hamiltonian, a quantum device can process multiple problems at the exact same time. This simultaneous execution preserves a critical quantum resource."
  },
  {
    "id": 41,
    "context": "When multiple independent sub-problems are executed simultaneously on one quantum chip, the required number of qubits (width) increases.",
    "question": "What happens to the \"circuit depth\" when multiple independent sub-problems are solved simultaneously?",
    "options": [
      "A) It increases exponentially.",
      "B) It decreases to zero.",
      "C) It remains constant, the same as solving a single sub-problem.",
      "D) It fluctuates randomly based on noise."
    ],
    "answer": "C) It remains constant, the same as solving a single sub-problem.",
    "explanation": "Because the problems are independent, adding them together increases the circuit width but the depth remains constant, which is critical for noisy NISQ devices. Looking past the NISQ era, researchers must prepare for the next generation of hardware."
  },
  {
    "id": 42,
    "context": "While NISQ devices are noisy, future quantum computers will have error correction, allowing for much deeper and more complex circuits.",
    "question": "What is the term used for the future era of quantum hardware that can handle error-corrected execution?",
    "options": [
      "A) Fault-tolerant quantum computing",
      "B) Heuristic quantum computing",
      "C) Sub-problem scaling",
      "D) Variational hardware"
    ],
    "answer": "A) Fault-tolerant quantum computing",
    "explanation": "Fault-tolerant quantum computing refers to future devices with logical qubits and error correction, which Dr. Kim's workflows are being prepared to utilize. Preparing for this future requires pulling concepts from many fields."
  },
  {
    "id": 43,
    "context": "Throughout the lecture, it is clear that pushing the boundaries of materials discovery cannot be done by a physicist or computer scientist acting alone.",
    "question": "What type of teamwork does Dr. Kim emphasize is necessary for this kind of research demonstration?",
    "options": [
      "A) Solo theoretical physics research",
      "B) Interdisciplinary teamwork across domains",
      "C) Solely relying on AI to do the work",
      "D) Segregated departmental studies"
    ],
    "answer": "B) Interdisciplinary teamwork across domains",
    "explanation": "Integrating QC, AI, and HPC inherently requires interdisciplinary teamwork, combining domain expertise in materials with advanced computational science. During the Q&A, a student asked a crucial question regarding the reliability of this entire computational chain."
  },
  {
    "id": 44,
    "context": "In the Q&A session, a student named Vishal asked about the primary bottleneck preventing perfect results in this modern workflow.",
    "question": "According to Dr. Kim during the Q&A, what is currently the dominant source of error in quantum material simulations?",
    "options": [
      "A) Poorly written Python code",
      "B) Errors accumulated from the quantum hardware due to deep circuits",
      "C) The classical GPUs overheating",
      "D) Inaccurate physics simulation formulas"
    ],
    "answer": "B) Errors accumulated from the quantum hardware due to deep circuits",
    "explanation": "Dr. Kim notes that hardware noise accumulating during deep quantum circuits is the dominant error source, necessitating the creation of short, shallow circuits. Beside quantum noise, the classical setup phase also has a critical failure point."
  },
  {
    "id": 45,
    "context": "Even if the quantum hardware executed flawlessly, the answer it provides is only as good as the mathematical problem it was handed.",
    "question": "Besides hardware noise, what other element is noted as critical to preventing errors in the optimization outcome?",
    "options": [
      "A) Building a reliable and accurate surrogate Hamiltonian (QUBO) based on a good dataset.",
      "B) Compiling the code in C++ rather than Python.",
      "C) Ensuring the quantum lab is kept perfectly dark.",
      "D) Utilizing exactly 25 data points, no more or less."
    ],
    "answer": "A) Building a reliable and accurate surrogate Hamiltonian (QUBO) based on a good dataset.",
    "explanation": "If the dataset is poor, the QUBO will not reflect reality, meaning the quantum computer will perfectly optimize a flawed problem. High-quality data is essential. Another student asked exactly how classical data connects to the quantum computer."
  },
  {
    "id": 46,
    "context": "A student asked what makes pattern recognition from low data accurate in quantum computing. Dr. Kim clarified the boundary between classical and quantum operations.",
    "question": "Does the quantum computer directly read and understand the classical training data (the sparse data points)?",
    "options": [
      "A) Yes, it processes classical CSV files natively.",
      "B) No, the quantum computer only understands the QUBO Hamiltonian built from the classical data.",
      "C) Yes, it uses quantum memory to store classical images.",
      "D) No, the classical data is thrown away before optimization."
    ],
    "answer": "B) No, the quantum computer only understands the QUBO Hamiltonian built from the classical data.",
    "explanation": "The quantum computer does not interface directly with the dataset; it only solves the QUBO objective function that the classical AI built. A final student asked a practical question for beginners entering this field."
  },
  {
    "id": 47,
    "context": "For a student starting from scratch and wanting to learn how to apply quantum optimization to their own domain problems, Dr. Kim suggested a specific roadmap.",
    "question": "What quantum computing technology did Dr. Kim recommend beginners start with because it is easy to use and has good tutorials?",
    "options": [
      "A) QAOA-GPT",
      "B) Fault-tolerant gate algorithms",
      "C) Quantum Annealing",
      "D) High-Entropy Neural Networks"
    ],
    "answer": "C) Quantum Annealing",
    "explanation": "Dr. Kim recommends starting with Quantum Annealing because its straightforward mapping for QUBO problems makes it an ideal entry point. Once comfortable, students should move to the next logical algorithm."
  },
  {
    "id": 48,
    "context": "After mastering the basics of optimization via quantum annealing, Dr. Kim recommends moving to universal gate-based methods.",
    "question": "What specific gate-based algorithm does Dr. Kim suggest a student learn after quantum annealing?",
    "options": [
      "A) Shor's Algorithm",
      "B) Grover's Search",
      "C) QAOA (Quantum Approximate Optimization Algorithm)",
      "D) AlphaGo"
    ],
    "answer": "C) QAOA (Quantum Approximate Optimization Algorithm)",
    "explanation": "QAOA is the fundamental algorithm for quantum optimization on gate-based hardware, making it the perfect second step in a student's learning roadmap. With QAOA mastered, the student understands the full core of the lecture."
  },
  {
    "id": 49,
    "context": "Summarizing the lecture's core thesis, Dr. Kim highlights the true value of quantum computing in the current scientific landscape.",
    "question": "According to Dr. Kim's central message, what happens when quantum methods are integrated into larger scientific workflows?",
    "options": [
      "A) They replace the need for HPC entirely.",
      "B) They become increasingly useful for solving massive, realistic scientific problems.",
      "C) They slow down the machine learning process.",
      "D) They prove that experimental science is useless."
    ],
    "answer": "B) They become increasingly useful for solving massive, realistic scientific problems.",
    "explanation": "Quantum computing proves its practical utility when embedded inside larger HPC and ML frameworks, allowing researchers to tackle real-world scale problems. This leads to the ultimate conclusion regarding quantum technology today."
  },
  {
    "id": 50,
    "context": "Dr. Kim concludes his talk by redefining how researchers should view quantum computing.",
    "question": "How does Dr. Kim suggest we should view quantum computing today?",
    "options": [
      "A) Strictly as an abstract computer science experiment.",
      "B) As a completely mature technology with no flaws.",
      "C) Not just as a subject to study, but as an active tool for doing real science.",
      "D) As an alternative to artificial intelligence."
    ],
    "answer": "C) Not just as a subject to study, but as an active tool for doing real science.",
    "explanation": "By combining QC with AI and HPC, it ceases to be just theoretical hardware and becomes a functional tool for discovering next-generation materials today. This concludes our review of the integrated quantum framework!"
  }
];


let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

// ── Utilities ────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

function normalizeCode(s) {
  return s.replace(/\s+/g, '').toLowerCase();
}

function checkAnswer(q) {
  if (q.type === 'type-in') return normalizeCode(chosen) === normalizeCode(q.answer);
  return chosen === q.answer;
}

function acc() {
  const total = correct + wrong;
  return total ? Math.round((correct / total) * 100) + '%' : '--';
}

function refreshScore() {
  correct = answered.filter(a => a?.ok).length;
  wrong   = answered.filter(a => a && !a.ok).length;
}

function recordAnswer(q) {
  if (answered[idx]) return;
  answered[idx] = { selected: chosen, ok: checkAnswer(q) };
  refreshScore();
}

function formatRanges(numbers) {
  if (!numbers.length) return '';
  const ranges = [];
  let start = numbers[0], end = numbers[0];
  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] === end + 1) { end = numbers[i]; continue; }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    start = end = numbers[i];
  }
  return ranges.join(', ');
}

function answeredRange() {
  return formatRanges(answered.map((a, i) => a ? i + 1 : null).filter(Boolean));
}

function questionGlimpse(q) {
  return q.length > 58 ? q.slice(0, 58) + '...' : q;
}

function setKey(handler) {
  document.onkeydown = handler;
}

// ── HUD / progress ───────────────────────────────────────────────────────────

function updateHUD() {
  $('hdr-correct').textContent = correct;
  $('hdr-wrong').textContent   = wrong;
  $('hdr-acc').textContent     = acc();
  const pct = idx >= quizData.length ? 100 : Math.round((idx / quizData.length) * 100);
  $('prog-fill').style.width   = pct + '%';
  $('prog-text').textContent   = idx >= quizData.length ? 'COMPLETE' : `Q ${idx + 1} / ${quizData.length}`;
}

// ── Render dispatcher ────────────────────────────────────────────────────────

function render() {
  updateHUD();
  const c = $('card-container');
  c.innerHTML = '';
  if (idx >= quizData.length) { renderFinal(c); return; }
  if (phase === 'context')       renderCtx(c);
  else if (phase === 'question') renderQ(c);
  else                           renderExp(c);
}

// ── Shared HTML helpers ───────────────────────────────────────────────────────

function prevButtonHTML() {
  return idx > 0
    ? '<button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>'
    : '';
}

function renderMCQOptions(q, disabled = false, response = null) {
  return q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (disabled) {
      if (o === q.answer)                                            cls += ' correct-reveal';
      else if (response && o === response.selected && !response.ok) cls += ' wrong-reveal';
    }
    return `<li><button class="${cls}" ${disabled ? 'disabled' : ''} data-val="${o.replace(/"/g, '&quot;')}">${o}</button></li>`;
  }).join('');
}

// ── Phase renderers ───────────────────────────────────────────────────────────

function renderCtx(c) {
  const q = quizData[idx];
  c.innerHTML = `
    <div class="sf-label">context // node ${idx + 1}</div>
    <div class="sf-content">${q.context}</div>
    <button class="sf-action" id="btn-fwd">PROCEED TO QUERY &gt;</button>
  `;
  const goNext = () => { phase = 'question'; render(); };
  $('btn-fwd').onclick = goNext;
  setKey(e => { if (e.key === 'Enter') { e.preventDefault(); goNext(); } });
}

function renderQ(c) {
  const q = quizData[idx];
  chosen = null;

  if (q.type === 'type-in') {
    c.innerHTML = `
      <div class="sf-label">type-in // node ${idx + 1}</div>
      <div class="sf-content">${q.question}</div>
      <input class="sf-type-input" id="type-input" type="text" placeholder="Type your answer here..." autocomplete="off" spellcheck="false">
      <div class="sf-type-hint">Spaces are ignored when checking your answer</div>
      <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
    `;
    const inp = $('type-input');
    const sub = $('btn-sub');
    inp.oninput = () => { chosen = inp.value; sub.disabled = !inp.value.trim(); };
    const submitAnswer = () => {
      if (!inp.value.trim()) return;
      chosen = inp.value;
      recordAnswer(q);
      phase = 'explanation';
      render();
    };
    sub.onclick = submitAnswer;
    inp.onkeyup = e => { if (e.key === 'Enter') { e.preventDefault(); submitAnswer(); } };
    setKey(e => {
      if (document.activeElement !== inp && e.key === 'Enter') { e.preventDefault(); submitAnswer(); }
    });
    inp.focus();

  } else {
    c.innerHTML = `
      <div class="sf-label">query // node ${idx + 1}</div>
      <div class="sf-content">${q.question}</div>
      <ul class="sf-options">${renderMCQOptions(q)}</ul>
      <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
    `;
    const sub     = $('btn-sub');
    const optBtns = [...c.querySelectorAll('.sf-opt-btn')];

    const selectOption = btn => {
      optBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      chosen = btn.getAttribute('data-val');
      sub.disabled = false;
    };

    optBtns.forEach(btn => btn.onclick = () => selectOption(btn));

    const submitAnswer = () => { recordAnswer(q); phase = 'explanation'; render(); };
    sub.onclick = submitAnswer;

    setKey(e => {
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= optBtns.length) {
        e.preventDefault();
        selectOption(optBtns[n - 1]);
        return;
      }
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!chosen) { selectOption(optBtns[0]); return; }
      submitAnswer();
    });
  }
}

function renderExp(c) {
  const q        = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: checkAnswer(q) };
  const btnLbl   = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';

  let answerDisplay = '';
  if (q.type === 'type-in') {
    const cls = response.ok ? 'correct-reveal' : 'wrong-reveal';
    answerDisplay = `
      <div class="sf-typein-review">
        <div class="sf-typein-label">Your answer</div>
        <input class="sf-type-input ${cls}" type="text" value="${(response.selected || '').replace(/"/g, '&quot;')}" disabled>
        ${!response.ok ? `
          <div class="sf-typein-label">Correct answer</div>
          <input class="sf-type-input correct-reveal" type="text" value="${q.answer.replace(/"/g, '&quot;')}" disabled>
        ` : ''}
      </div>
    `;
  } else {
    answerDisplay = `<ul class="sf-options">${renderMCQOptions(q, true, response)}</ul>`;
  }

  c.innerHTML = `
    <div class="sf-label">analysis // node ${idx + 1}</div>
    <div class="sf-feedback ${response.ok ? 'ok' : 'fail'}">${response.ok ? '[ CORRECT ]' : '[ INCORRECT ]'}</div>
    <div class="sf-content"><strong>Question:</strong> ${q.question}</div>
    ${answerDisplay}
    <div class="sf-explanation">${q.explanation}</div>
    <div class="sf-review-jump">
      <label for="answered-jump">Jump to</label>
      <input id="answered-jump" type="number" min="1" max="${quizData.length}" value="${idx + 1}" inputmode="numeric">
      <span class="sf-review-allowed">Allowed: ${answeredRange()}</span>
      <button id="btn-jump" class="sf-action sf-action-secondary">Jump</button>
      <div id="answered-preview" class="sf-review-preview"></div>
    </div>
    <div class="sf-actions">
      ${prevButtonHTML()}
      <button class="sf-action" id="btn-nxt">${btnLbl}</button>
    </div>
  `;

  if (idx > 0) {
    $('btn-prev').onclick = () => { idx--; phase = 'explanation'; render(); };
  }

  const input   = $('answered-jump');
  const preview = $('answered-preview');
  const updatePreview = () => {
    const t = Number(input.value) - 1;
    preview.textContent = answered[t]
      ? `Question ${t + 1}: ${questionGlimpse(quizData[t].question)}`
      : `Allowed values: ${answeredRange()}`;
  };
  input.oninput = input.onchange = updatePreview;
  $('btn-jump').onclick = () => {
    const t = Number(input.value) - 1;
    if (!answered[t]) { updatePreview(); return; }
    idx = t; phase = 'explanation'; render();
  };
  updatePreview();

  const goNext = () => { idx++; phase = answered[idx] ? 'explanation' : 'context'; render(); };
  $('btn-nxt').onclick = goNext;
  setKey(e => { if (e.key === 'Enter') { e.preventDefault(); goNext(); } });
}

function renderFinal(c) {
  const total      = correct + wrong;
  const pct        = total ? Math.round((correct / total) * 100) : 0;
  const grade      = pct >= 90 ? 'EXCEPTIONAL' : pct >= 70 ? 'PROFICIENT' : pct >= 50 ? 'DEVELOPING' : 'RETRY';
  const gradeColor = pct >= 90 ? 'var(--sf-success)' : pct >= 70 ? 'var(--sf-accent)' : pct >= 50 ? '#ffaa00' : 'var(--sf-error)';

  c.innerHTML = `
    <div class="sf-final">
      <div class="sf-final-title">// mission complete //</div>
      <div class="sf-final-stats">
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-success)">${correct}</span><span class="lbl">correct</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-error)">${wrong}</span><span class="lbl">incorrect</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-accent)">${pct}%</span><span class="lbl">accuracy</span></div>
      </div>
      <div class="sf-grade" style="color:${gradeColor}">${grade}</div>
      <div class="sf-final-note">For best pedagogical outcomes, repeat this quiz 2–3 times until the narrative flow feels entirely familiar.</div>
      <div class="sf-actions">
        <button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>
        <button class="sf-action" id="btn-restart">RESTART SEQUENCE &gt;</button>
      </div>
    </div>
  `;

  $('btn-prev').onclick = () => { idx = quizData.length - 1; phase = 'explanation'; render(); };
  $('btn-restart').onclick = () => {
    idx = 0; phase = 'context'; chosen = null; correct = 0; wrong = 0; answered = [];
    render();
  };

  setKey(null);
}

render();