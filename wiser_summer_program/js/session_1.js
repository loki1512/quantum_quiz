const quizData = 

[
  {
    "id": 1,
    "context": "The Wiser Summer Program 2026 kicks off with a focus on one of the most important topics in computing: optimization. It features a keynote from an IBM executive who leads efforts in commercialization and skill-building.",
    "question": "Who is the keynote speaker for the first session of the Wiser Summer Program, and what is his role?",
    "options": [
      "A) Prati Vakaria, Founder of Visor",
      "B) Abin Ayana, Senior Scientist at IonQ",
      "C) Scott Crowder, VP of IBM Quantum Adoption and Business Development",
      "D) Peter Shor, complexity theorist"
    ],
    "answer": "C) Scott Crowder, VP of IBM Quantum Adoption and Business Development",
    "explanation": "Scott Crowder is the Vice President of IBM Quantum Adoption and Business Development. His initial interest in quantum computing wasn't for sci-fi concepts, but for its potential as a completely new paradigm, which brings us to the fundamental purpose of quantum computing."
  },
  {
    "id": 2,
    "context": "While quantum computing is often associated with popular sci-fi concepts like teleportation and 'spooky action at a distance', professionals in the field are generally driven by more practical applications.",
    "question": "What primarily motivated Scott Crowder to get involved in quantum computing?",
    "options": [
      "A) The desire to make sci-fi concepts like teleportation a reality.",
      "B) The opportunity to build the industry's first logic-based embedded RAM.",
      "C) The potential of a brand new computational tool and making it widely available.",
      "D) The goal of breaking asymmetric cryptography by 2035."
    ],
    "answer": "C) The potential of a brand new computational tool and making it widely available.",
    "explanation": "Scott was motivated by the prospect of a brand new computational tool and the passion to make learning and skills for it widely available. To understand this new tool, we must first contrast it with the classical computers we use daily."
  },
  {
    "id": 3,
    "context": "Classical computation relies entirely on binary arithmetic, adding zeros and ones, which has physical and theoretical limitations when solving certain complex mathematical problems.",
    "question": "What fundamental principles does quantum computing leverage to perform different types of computation than classical systems?",
    "options": [
      "A) Tensor math and matrix multiplication.",
      "B) Binary arithmetic and logical operations.",
      "C) Superposition and entanglement.",
      "D) Asymmetric cryptography and hashing."
    ],
    "answer": "C) Superposition and entanglement.",
    "explanation": "Quantum computing leverages superposition and entanglement to add extra instructions, enabling computations impossible with basic binary arithmetic. One famous historical example of this unique capability relates directly to modern cybersecurity and cryptography."
  },
  {
    "id": 4,
    "context": "Modern cybersecurity relies on math that is easy to compute in one direction but extremely hard in the reverse direction for classical computers. However, quantum algorithms challenge this security foundation.",
    "question": "What algorithm, developed in 1994, proved that quantum information science could perform factoring exponentially more efficiently than classical methods?",
    "options": [
      "A) Grover's algorithm",
      "B) Bell's inequality",
      "C) Shor's algorithm",
      "D) QAOA"
    ],
    "answer": "C) Shor's algorithm",
    "explanation": "Peter Shor developed Shor's algorithm, showing factoring could be done exponentially more efficiently, which underpins much of today's asymmetric cryptography. Beyond factoring, quantum computers excel in several other key theoretical and practical computational areas."
  },
  {
    "id": 5,
    "context": "The potential of quantum computing extends well beyond breaking cryptography. Theoretical frameworks show promise in various scientific and business domains.",
    "question": "Which of the following is NOT one of the key quantum computational areas explicitly highlighted in the lecture?",
    "options": [
      "A) Hamiltonian simulation",
      "B) Optimization",
      "C) Natural Language Processing",
      "D) Differential equations"
    ],
    "answer": "C) Natural Language Processing",
    "explanation": "The key areas mentioned are Hamiltonian simulation, Optimization, Machine learning, and Differential equations. While Machine learning is listed, it is noted by the speaker to be one of the most controversial areas of current quantum research."
  },
  {
    "id": 6,
    "context": "Quantum machine learning is highly debated because it is difficult to prove a priori if random classical datasets possess the underlying mathematical structure that quantum algorithms can effectively exploit.",
    "question": "Why did early quantum machine learning efforts, like those involving support vector machines, face skepticism as researchers attempted to scale them?",
    "options": [
      "A) They were too easy to simulate efficiently on classical GPUs.",
      "B) They ran into Barren Plateau problems and didn't scale well.",
      "C) They were mathematically proven to only offer a quadratic speedup.",
      "D) The underlying datasets were exclusively linear and simple."
    ],
    "answer": "B) They ran into Barren Plateau problems and didn't scale well.",
    "explanation": "As researchers scaled quantum machine learning to realistically sized problems, they encountered Barren Plateaus and significant scaling issues. Because of these hardware and algorithmic nuances, it is important to view quantum computers not as standalone replacements, but as specialized accelerators."
  },
  {
    "id": 7,
    "context": "Quantum computers will not immediately replace all classical computers; rather, they fit into a broader hybrid computing architecture where they are used for specific subroutines where they inherently excel.",
    "question": "In what functional way is a quantum computer most similar to a GPU?",
    "options": [
      "A) Both use binary arithmetic to process data in massive parallel.",
      "B) Both run the exact same classical algorithms as a CPU, just significantly faster.",
      "C) Both act as accelerators to run particular subroutines alongside CPUs.",
      "D) Both are designed primarily to execute Shor's algorithm efficiently."
    ],
    "answer": "C) Both act as accelerators to run particular subroutines alongside CPUs.",
    "explanation": "Quantum computers are similar to GPUs in that they are accelerators used for specific complex subroutines, while CPUs handle the rest of the standard computation. However, unlike GPUs, the algorithms run on QPUs are fundamentally different from classical ones, making direct comparisons difficult."
  },
  {
    "id": 8,
    "context": "Comparing quantum and classical systems is highly complex because quantum computers do not simply run classical algorithms faster in parallel.",
    "question": "Why is it inaccurate to say a quantum computer is just a 'faster flywheel' or a parallel processor of existing classical algorithms?",
    "options": [
      "A) Because quantum computers actually have a slower operation speed (flywheel) but run a fundamentally more efficient algorithm.",
      "B) Because quantum computers only run algorithms in sequence, never utilizing any form of state parallelism.",
      "C) Because classical algorithms cannot physically be broken down into subroutines for acceleration.",
      "D) Because modern GPUs already run native quantum algorithms efficiently."
    ],
    "answer": "A) Because quantum computers actually have a slower operation speed (flywheel) but run a fundamentally more efficient algorithm.",
    "explanation": "Quantum computers operate much slower mechanically than CPUs, but the quantum algorithm itself is exponentially more efficient, meaning you are comparing different algorithmic approaches (apples to oranges). To see how this hardware has evolved, we must look at the recent history of quantum development."
  },
  {
    "id": 9,
    "context": "Ten years ago, IBM made history by placing the first quantum computer on the cloud, transforming theoretical physics concepts into accessible computational experiments.",
    "question": "What were the hardware capabilities of the first quantum computer IBM put on the cloud a decade ago?",
    "options": [
      "A) 100 qubits running thousands of operations.",
      "B) 5 qubits running about 25 operations.",
      "C) 50 qubits running exactly 100 operations.",
      "D) 100 million operations on purely logical qubits."
    ],
    "answer": "B) 5 qubits running about 25 operations.",
    "explanation": "The first cloud-accessible system had 5 qubits and could only run about 25 operations before quantum noise heavily degraded the result. Fast forward to today, these hardware capabilities have drastically increased, leading us into an era known as 'quantum utility'."
  },
  {
    "id": 10,
    "context": "State-of-the-art quantum systems now possess over 100 qubits and can run thousands of operations before succumbing to noise.",
    "question": "What specific threshold defines the current era of 'quantum utility' in computing?",
    "options": [
      "A) Quantum computers now return exact global optimal solutions for all known NP-hard problems.",
      "B) Quantum computers can run programs that are too complex to be simulated on the world's largest classical supercomputers.",
      "C) Quantum computers have successfully broken modern asymmetric cryptography in practice.",
      "D) Quantum computers have completely replaced GPUs in commercial cloud data centers."
    ],
    "answer": "B) Quantum computers can run programs that are too complex to be simulated on the world's largest classical supercomputers.",
    "explanation": "Quantum utility means the circuits run on today's QPUs are too mathematically complex to be simulated on even the largest classical supercomputers. However, successfully running a complex program doesn't automatically mean it provides a better business outcome than classical approximation methods, which brings us to 'quantum advantage'."
  },
  {
    "id": 11,
    "context": "While quantum computers can execute highly complex circuits, the ultimate commercial goal is achieving a result that surpasses the best classical capabilities.",
    "question": "How is 'quantum advantage' accurately defined in the context of optimization?",
    "options": [
      "A) The point where a quantum computer physically possesses more qubits than a classical computer has transistors.",
      "B) The ability to run a quantum algorithm entirely without any environmental noise or errors.",
      "C) Using a quantum computer to obtain an answer that is demonstrably better than any known classical approach.",
      "D) The point at which all classical systems are decommissioned due to obsolescence."
    ],
    "answer": "C) Using a quantum computer to obtain an answer that is demonstrably better than any known classical approach.",
    "explanation": "Quantum advantage is achieved when a quantum algorithm provides a better outcome, speed, or accuracy than any known classical method. Proving this advantage is challenging because classical methods continuously improve, but researchers are actively tackling this by solving real-world, scale-relevant problems."
  },
  {
    "id": 12,
    "context": "In the past six months, quantum algorithmic testing has moved from solving simplified 'toy problems' to addressing complex, realistically scaled real-world issues.",
    "question": "What is the main analytical benefit of researchers shifting their focus from toy problems to real-world scale problems?",
    "options": [
      "A) It instantly allows them to eliminate the need for quantum error correction.",
      "B) It enables direct A/B testing of quantum outputs against production-level classical approximations.",
      "C) It definitively proves that Shor's algorithm is no longer needed.",
      "D) It instantly grants universal quantum advantage for all optimization tasks."
    ],
    "answer": "B) It enables direct A/B testing of quantum outputs against production-level classical approximations.",
    "explanation": "Solving real-world problems allows researchers to directly A/B test and compare quantum results with classical production methods to search for true advantage. However, to consistently beat classical systems in the future, the hardware must evolve to support massive scale and reliability."
  },
  {
    "id": 13,
    "context": "To run the hundreds of millions of operations required for profound, disruptive quantum advantage, quantum systems must overcome their inherent environmental noise.",
    "question": "What critical hardware capability is fundamentally required to scale from tens of thousands of operations to hundreds of millions?",
    "options": [
      "A) Higher clock speeds comparable to classical silicon CPUs.",
      "B) The ability to actively detect and correct errors while running a program (large-scale fault tolerance).",
      "C) The complete removal of all cryogenic cooling equipment.",
      "D) Converting all superconducting qubits to photonic technologies."
    ],
    "answer": "B) The ability to actively detect and correct errors while running a program (large-scale fault tolerance).",
    "explanation": "Large-scale fault-tolerant systems, capable of detecting and correcting errors dynamically during runtime, are essential for running deeply complex programs. IBM and others have a specific timeline targeted for delivering this massive hardware milestone."
  },
  {
    "id": 14,
    "context": "Multiple vendors in the quantum space are heavily investing and aiming for a specific, unified timeline to deliver large-scale, fault-tolerant systems.",
    "question": "In what year does IBM, along with several other hardware vendors, target the delivery of the world's first large-scale, fault-tolerant quantum computer?",
    "options": [
      "A) 2026",
      "B) 2029",
      "C) 2033",
      "D) 2035"
    ],
    "answer": "B) 2029",
    "explanation": "IBM and several other vendors are targeting 2029 for the release of large-scale fault-tolerant quantum computers (such as the 'Starling' system for IBM). As hardware improves on this roadmap, so does the timeline for disruptive global applications like cryptography breaking."
  },
  {
    "id": 15,
    "context": "Shor's algorithm poses a definitive threat to current encryption standards, but executing it requires a tremendously powerful, fault-tolerant quantum computer.",
    "question": "According to IBM's roadmap projections, around what year will commercially available quantum systems reach the capability to execute Shor's algorithm and break today's asymmetric cryptography?",
    "options": [
      "A) 2026",
      "B) 2029",
      "C) 2035",
      "D) 2050"
    ],
    "answer": "C) 2035",
    "explanation": "By projecting the hardware roadmap, systems are expected to be cryptographically relevant and capable of running Shor's algorithm effectively around 2035. Until that long-term threat materializes, immense scientific progress is being driven by global access to existing quantum hardware."
  },
  {
    "id": 16,
    "context": "To foster rapid innovation, widespread access to quantum systems and robust, open-source software stacks are absolutely necessary.",
    "question": "What open-source software stack has been instrumental in driving innovation by allowing developers to write programs that run on multiple quantum hardware backends?",
    "options": [
      "A) CUDA",
      "B) CPLEX",
      "C) Qiskit",
      "D) QAOA"
    ],
    "answer": "C) Qiskit",
    "explanation": "Qiskit is an open-source software stack that integrates into HPC environments and allows developers to program across multiple quantum hardware backends. This widespread software accessibility has led to rapid advancements, such as recent breakthroughs in computational chemistry."
  },
  {
    "id": 17,
    "context": "Recent algorithmic and architectural innovations have drastically scaled up the size of chemical molecules that can be accurately simulated using near-term quantum hardware.",
    "question": "How did partners at the Cleveland Clinic manage to simulate complex 12,000+ atom molecules using today's inherently limited quantum hardware?",
    "options": [
      "A) By simply waiting for a 2029 fault-tolerant system to become available.",
      "B) By fragmenting the problem, using GPUs to partition, QPUs to simulate fragments, and CPUs to post-process.",
      "C) By converting the chemistry simulation into an asymmetric cryptography mathematical problem.",
      "D) By exclusively using error-corrected logical qubits on a photonic system."
    ],
    "answer": "B) By fragmenting the problem, using GPUs to partition, QPUs to simulate fragments, and CPUs to post-process.",
    "explanation": "They broke the massive problem into fragments, leveraging CPUs, GPUs, and QPUs cooperatively to piece the overall simulation back together. This kind of hardware-software synergy is essential as the industry pushes toward large-scale fault-tolerant systems."
  },
  {
    "id": 18,
    "context": "Promising to deliver fault-tolerant systems by 2029 requires solid technological foundations and breakthroughs, not just industry optimism.",
    "question": "Why is IBM confident in its roadmap to deliver large-scale fault-tolerant systems without requiring massive, warehouse-sized facilities?",
    "options": [
      "A) They discovered a way to run classical code natively on qubits.",
      "B) They developed much more efficient error-correcting codes (e.g., the gross code).",
      "C) They have decided to use 100% synthetic data for all system testing.",
      "D) They completely abandoned superconducting qubits for trapped ions."
    ],
    "answer": "B) They developed much more efficient error-correcting codes (e.g., the gross code).",
    "explanation": "Breakthroughs in highly efficient error-correcting codes mean fault-tolerant systems can be built compactly, without requiring the warehouse-sized footprints that were predicted years ago. When evaluating these future systems amidst marketing hype, users must focus on three core metrics."
  },
  {
    "id": 19,
    "context": "Amidst industry marketing and hype regarding concepts like 'logical qubits', practical users should focus on tangible, measurable metrics to evaluate quantum computers.",
    "question": "Which three metrics are explicitly stated as the most critical when evaluating a quantum computer's performance as a computational tool?",
    "options": [
      "A) Number of programmable qubits, number of operations, and throughput (speed).",
      "B) Temperature (cryogenics), Chandelier physical size, and Cloud latency.",
      "C) Modularity, Barren plateaus occurrence, and Error rate.",
      "D) Number of photons, Number of ions, and Number of superconducting circuits."
    ],
    "answer": "A) Number of programmable qubits, number of operations, and throughput (speed).",
    "explanation": "The most important metrics are the number of programmable qubits (register size), the number of operations you can run accurately (quality), and how quickly they run (throughput). One of the most promising applications for machines scoring high on these metrics is advanced optimization."
  },
  {
    "id": 20,
    "context": "Classical solvers have been refined over decades to handle a vast array of business problems, but they aren't perfect for all highly complex scenarios.",
    "question": "Which of the following is mentioned as an existing, well-tested classical optimization solver?",
    "options": [
      "A) QAOA",
      "B) Qiskit",
      "C) CPLEX",
      "D) Grover's"
    ],
    "answer": "C) CPLEX",
    "explanation": "CPLEX and IPOPT are cited as well-tested classical solvers that do a great job at approximating many standard optimization problems. However, because many combinatorial problems remain hard to solve optimally, researchers are aggressively exploring both AI and quantum alternatives."
  },
  {
    "id": 21,
    "context": "To truly understand quantum optimization, one must first discard popular science fiction myths about how quantum computers actually process solutions.",
    "question": "What is highlighted as a major misconception about how quantum optimization inherently works?",
    "options": [
      "A) Quantum computers evaluate all possible solutions at the exact same time.",
      "B) Quantum optimization uses iterative algorithms like QAOA.",
      "C) Quantum computers can provide a quadratic speedup using Grover's algorithm.",
      "D) Quantum optimization algorithms are very often heuristic in nature."
    ],
    "answer": "A) Quantum computers evaluate all possible solutions at the exact same time.",
    "explanation": "The idea that a quantum computer simply evaluates every possible solution simultaneously is a misunderstanding of how quantum mechanics is leveraged. Instead of blanket parallel evaluation, quantum speedups rely on specific algorithmic proofs and different mathematical classes."
  },
  {
    "id": 22,
    "context": "Complexity theory maps out different types of quantum algorithms based on their theoretical performance guarantees and potential speedups.",
    "question": "Which category of quantum optimization algorithms provides a guaranteed global optimal solution, typically yielding at most a quadratic speedup for NP-hard problems?",
    "options": [
      "A) Provably Approximate Algorithms",
      "B) Provably Exact Algorithms",
      "C) Heuristic Algorithms",
      "D) Geometric Neural Networks"
    ],
    "answer": "B) Provably Exact Algorithms",
    "explanation": "Provably Exact Algorithms, like Grover's search, mathematically guarantee a global optimal solution and offer up to a quadratic speedup. However, because executing these exactly on near-term noisy devices is difficult, much of the current industry focus is on heuristic approaches."
  },
  {
    "id": 23,
    "context": "Just as classical heuristics are widely used in business practice despite lacking theoretical guarantees, quantum heuristics are a major focus for finding near-term advantage.",
    "question": "Why is rigorous benchmarking considered absolutely crucial for quantum heuristic algorithms?",
    "options": [
      "A) Because they provably collapse the NP space into the P space.",
      "B) Because their performance is highly problem instance-dependent and not known upfront.",
      "C) Because they only execute on CPUs, not QPUs.",
      "D) Because they require exactly 12,000 logical qubits to function."
    ],
    "answer": "B) Because their performance is highly problem instance-dependent and not known upfront.",
    "explanation": "Heuristics lack a priori mathematical performance guarantees, making rigorous empirical benchmarking necessary to discover where they actually outperform classical algorithms. A prominent example of such a quantum heuristic algorithm is QAOA."
  },
  {
    "id": 24,
    "context": "One of the best-known methods for quantum combinatorial optimization is inspired by the continuous quantum adiabatic algorithm, discretized into rounds.",
    "question": "What does the acronym QAOA stand for?",
    "options": [
      "A) Quantum Application Optimization Approach",
      "B) Quantum Approximate Optimization Algorithm",
      "C) Quantified Artificial Optimization Array",
      "D) Quadratic Algorithmic Operations Architecture"
    ],
    "answer": "B) Quantum Approximate Optimization Algorithm",
    "explanation": "QAOA stands for Quantum Approximate Optimization Algorithm. While theoretically powerful in the limit of infinite rounds, implementing QAOA on today's noisy, limited hardware presents several distinct practical challenges."
  },
  {
    "id": 25,
    "context": "Current quantum hardware limitations directly impact the size of the real-world problems QAOA can tackle natively via direct encoding.",
    "question": "How does the scale of current near-term quantum devices (around 100 qubits) limit QAOA for combinatorial optimization?",
    "options": [
      "A) It restricts the hardware to strictly linear optimization problems.",
      "B) It usually limits direct encoding to problems with roughly 100 binary variables.",
      "C) It forces the system to run thousands of times faster than classical CPUs.",
      "D) It prevents the system from running any quantum error correction ever."
    ],
    "answer": "B) It usually limits direct encoding to problems with roughly 100 binary variables.",
    "explanation": "Current ~100-qubit devices restrict direct problem encoding to about 100 binary variables, a size that classical solvers handle very well already. Furthermore, when these variables are highly interconnected, another hardware challenge arises: noise."
  },
  {
    "id": 26,
    "context": "The mathematical structure of the problem matrix greatly influences the feasibility of running QAOA on near-term quantum hardware.",
    "question": "Why are dense QUBO (Quadratic Unconstrained Binary Optimization) matrices particularly challenging for current QAOA hardware implementations?",
    "options": [
      "A) They require a sampling rate of over 10 GHz.",
      "B) They cause the classical post-processing compiler to crash.",
      "C) They result in deep circuits, making the algorithm highly susceptible to hardware noise.",
      "D) They can only be solved using Shor's algorithm."
    ],
    "answer": "C) They result in deep circuits, making the algorithm highly susceptible to hardware noise.",
    "explanation": "Dense matrices require dense qubit connectivity, which creates deep quantum circuits, and current hardware noise limits the practical depth of these circuits. Overcoming this requires algorithms that require fewer iterations, addressing the fundamental issue of sampling speed."
  },
  {
    "id": 27,
    "context": "QAOA requires variational training, which relies heavily on sampling the quantum state repeatedly, making physical hardware speed a bottleneck.",
    "question": "How does the sampling rate (flywheel speed) of the fastest superconducting quantum computers compare to modern classical CPUs?",
    "options": [
      "A) QPUs are about 100 times faster.",
      "B) QPUs and CPUs have roughly the exact same sampling rate.",
      "C) QPUs are on the order of 100 to 1000 times slower (kilohertz to 10 kHz range).",
      "D) QPUs are exactly a million times slower."
    ],
    "answer": "C) QPUs are on the order of 100 to 1000 times slower (kilohertz to 10 kHz range).",
    "explanation": "The sampling rate of current superconducting quantum computers is in the kHz range, making them significantly slower than the GHz frequencies of classical CPUs. To validate if QAOA can overcome this speed deficit via algorithmic efficiency, the community needs standard benchmarks."
  },
  {
    "id": 28,
    "context": "To explicitly define what quantum advantage in optimization looks like, the global research community has established standardized datasets.",
    "question": "What is QOBLIB, as introduced in the lecture?",
    "options": [
      "A) A proprietary IBM quantum hardware component.",
      "B) An open-source, community-driven Quantum Optimization Benchmarking Library.",
      "C) A new error-correcting code for fault-tolerant computers.",
      "D) An AI-based optimal power flow solver."
    ],
    "answer": "B) An open-source, community-driven Quantum Optimization Benchmarking Library.",
    "explanation": "QOBLIB is an open-source benchmarking library designed to track progress and advance toward quantum advantage collectively. Researchers use these libraries to tackle complex graph problems, such as those faced in the global energy sector."
  },
  {
    "id": 29,
    "context": "Energy utility companies are actively exploring quantum methods to optimize complex network exchanges and peer-to-peer distribution.",
    "question": "What specific problem did E.ON and STFC tackle using a QAOA-based model on quantum hardware?",
    "options": [
      "A) Designing new aircraft wings.",
      "B) Predicting mRNA secondary structures.",
      "C) Multi-objective portfolio optimization.",
      "D) Minimum Birkhoff Decomposition for peer-to-peer energy exchange."
    ],
    "answer": "D) Minimum Birkhoff Decomposition for peer-to-peer energy exchange.",
    "explanation": "E.ON and STFC applied QAOA to the Minimum Birkhoff Decomposition problem to optimize peer-to-peer energy exchanges on a weighted graph. Another area showing high promise for near-term advantage across industries is multi-objective optimization."
  },
  {
    "id": 30,
    "context": "Many real-world business problems require balancing competing goals, such as maximizing return while simultaneously minimizing risk in finance.",
    "question": "What is the primary goal of Multi-Objective Optimization (MOO)?",
    "options": [
      "A) To find a single absolute minimum value regardless of constraints.",
      "B) To find the Pareto front, representing optimal trade-offs between competing objectives.",
      "C) To convert a non-linear problem into a linear one.",
      "D) To simulate the Hamiltonian dynamics of a chemical system."
    ],
    "answer": "B) To find the Pareto front, representing optimal trade-offs between competing objectives.",
    "explanation": "The goal of MOO is to map out the Pareto front—the set of optimal trade-offs among multiple competing objectives. Quantum computers are particularly suited for this because of their unique rapid sampling capabilities."
  },
  {
    "id": 31,
    "context": "Classical algorithms often struggle to map out the entire Pareto front efficiently for highly complex multi-objective problems.",
    "question": "Why is quantum computing viewed as a promising tool for finding the Pareto front faster in Multi-Objective Optimization?",
    "options": [
      "A) It can evaluate all possible points on the Pareto front simultaneously.",
      "B) It uses exact algorithms to definitively solve NP-hard problems in polynomial time.",
      "C) It can rapidly sample a large number of diverse, high-quality potential answers to feed into classical optimizers.",
      "D) It entirely bypasses the need for classical pre-processing and post-processing."
    ],
    "answer": "C) It can rapidly sample a large number of diverse, high-quality potential answers to feed into classical optimizers.",
    "explanation": "Quantum computing can rapidly sample a wide variety of good solutions, allowing a hybrid quantum-classical system to map the Pareto front much faster than purely classical methods alone. A practical application of this hybrid approach was demonstrated in the finance industry."
  },
  {
    "id": 32,
    "context": "The financial sector involves optimizing asset selection while managing complex constraints and replication quality against market indexes.",
    "question": "What complex optimization problem did Vanguard explore using quantum-classical hybrid algorithms?",
    "options": [
      "A) Decrypting asymmetric blockchain keys.",
      "B) Routing vehicles for cash transportation.",
      "C) Portfolio optimization for fixed-income assets.",
      "D) Simulating the molecular structure of new currency materials."
    ],
    "answer": "C) Portfolio optimization for fixed-income assets.",
    "explanation": "Vanguard utilized a hybrid quantum-classical sampling approach for portfolio construction of fixed-income assets, testing up to 109 bonds. Similar complex optimization challenges exist in life sciences, as demonstrated by Moderna."
  },
  {
    "id": 33,
    "context": "In life sciences, determining the physical, folded shape of molecules based on sequence data is a massive combinatorial optimization problem.",
    "question": "What goal did Moderna pursue by partnering with IBM to use quantum optimization techniques?",
    "options": [
      "A) Optimizing the global logistics routing for vaccine delivery.",
      "B) Predicting mRNA secondary structures with greater scale and accuracy.",
      "C) Minimizing the energy grid usage of their manufacturing plants.",
      "D) Simulating thousands of interacting lipid nanoparticles simultaneously."
    ],
    "answer": "B) Predicting mRNA secondary structures with greater scale and accuracy.",
    "explanation": "Moderna used the CVaR-VQA algorithm to predict mRNA secondary structures, successfully matching classical solvers' results for sequences of up to 42 nucleotides. While quantum explores these combinatorial challenges, AI is making massive leaps in continuous, non-linear optimization."
  },
  {
    "id": 34,
    "context": "Quantum and AI represent two different approaches to solving optimization bottlenecks, each suited for different mathematical problem classes.",
    "question": "According to the presentation, while AI solvers aim to speed up large-scale continuous and non-linear programs, what type of optimization is quantum computing currently heavily focused on?",
    "options": [
      "A) Single and multi-objective combinatorial optimization.",
      "B) Purely continuous gradient descent.",
      "C) Training massive Large Language Models (LLMs).",
      "D) Translating natural languages in real-time."
    ],
    "answer": "A) Single and multi-objective combinatorial optimization.",
    "explanation": "Quantum computing focuses heavily on single and multi-objective combinatorial optimization, while AI focuses on speeding up continuous, non-linear problems. An excellent example of an AI application is optimizing electrical grids."
  },
  {
    "id": 35,
    "context": "Ensuring power grids run economically while meeting stringent physical and load constraints is a highly complex, non-convex network flow problem.",
    "question": "What makes the Optimal Power Flow (OPF) problem so challenging to solve classically in near real-time operational settings?",
    "options": [
      "A) It requires factoring extremely large prime numbers.",
      "B) It is a highly non-convex, non-linear optimization problem over a large-scale graph network.",
      "C) Energy grids only process binary arithmetic.",
      "D) Classical computers cannot perform matrix multiplication."
    ],
    "answer": "B) It is a highly non-convex, non-linear optimization problem over a large-scale graph network.",
    "explanation": "OPF is a non-convex network flow problem that is numerically challenging for near-real-time operations on large grids. To overcome this bottleneck, IBM Research applied advanced AI architectures."
  },
  {
    "id": 36,
    "context": "Traditional classical solvers like IPOPT take too long for real-time grid adjustments, prompting the need for AI-driven solutions trained on historical data.",
    "question": "What specific AI model architecture was used to achieve a 35x speedup over state-of-the-art classical optimizers for the OPF problem?",
    "options": [
      "A) A Transformer-based Large Language Model.",
      "B) A basic Support Vector Machine.",
      "C) A Geometric Neural Corrective Optimizer (Heterogeneous Graph Neural Network).",
      "D) A standard Convolutional Neural Network (CNN)."
    ],
    "answer": "C) A Geometric Neural Corrective Optimizer (Heterogeneous Graph Neural Network).",
    "explanation": "Researchers used a Heterogeneous Graph Neural Network with a novel corrective step (Geometric Neural Corrective Optimizer) to achieve massive speedups with sub-0.2% optimality gaps. Deciding when to use this AI approach versus a quantum approach is a key strategic decision for data scientists."
  },
  {
    "id": 37,
    "context": "Data scientists now have multiple advanced tools at their disposal, requiring careful selection based on problem characteristics and data availability.",
    "question": "When is an AI-based optimization approach generally favored over a near-term quantum approach?",
    "options": [
      "A) When dealing with combinatorial problems that blow up exponentially with a small number of variables.",
      "B) When there is a need to guarantee absolute, provable global optimality mathematically.",
      "C) When the problem is computationally heavy, near-real-time speed is critical, and there is an abundance of reliable historical or synthetic training data.",
      "D) When the system involves simulating quantum entanglement directly."
    ],
    "answer": "C) When the problem is computationally heavy, near-real-time speed is critical, and there is an abundance of reliable historical or synthetic training data.",
    "explanation": "AI is best when you have extensive training data, a heavy computational load, and need near-optimal answers incredibly fast (like grid management). Conversely, quantum is better suited for specific combinatorial scenarios where exact states are modeled."
  },
  {
    "id": 38,
    "context": "Current quantum hardware cannot handle millions of variables natively, so target problems for near-term advantage must be chosen wisely.",
    "question": "Which characteristic makes an optimization problem a good candidate for near-term quantum approaches?",
    "options": [
      "A) Problems that have virtually no constraints.",
      "B) Problems that classical solvers can easily approximate up to a million variables.",
      "C) Problems that 'blow up' computationally at a relatively small number of variables, where even a tiny percentage improvement is highly valuable.",
      "D) Problems that purely involve natural language generation."
    ],
    "answer": "C) Problems that 'blow up' computationally at a relatively small number of variables, where even a tiny percentage improvement is highly valuable.",
    "explanation": "Ideal near-term quantum targets are combinatorial problems (like Market Split or specific graph routing) that become classically intractable even at a small number of variables, and where slight improvements yield high business value. However, users must be aware of hardware differences, such as the speed of different qubit modalities."
  },
  {
    "id": 39,
    "context": "The 'flywheel' or clock speed of a quantum computer varies drastically depending on the underlying physics of the qubits being utilized.",
    "question": "Which qubit modality is currently noted as having the fastest 'flywheel' (sampling rate), operating in the 100ns to 1000ns range?",
    "options": [
      "A) Trapped Ions",
      "B) Superconducting Qubits",
      "C) Neutral Atoms",
      "D) Photonic Qubits"
    ],
    "answer": "B) Superconducting Qubits",
    "explanation": "Superconducting qubits currently have the fastest operation speeds (100-1000ns), making them roughly 100-1000 times slower than CPUs, whereas modalities like trapped ions are much slower. Beyond speed, manufacturability is the next major hurdle for these modalities."
  },
  {
    "id": 40,
    "context": "Building a commercial quantum computer requires not just isolating quantum states, but massive, scalable engineering that can be consistently manufactured.",
    "question": "Why does IBM heavily favor silicon manufacturing-based approaches (like superconducting qubits)?",
    "options": [
      "A) Because silicon operates optimally at room temperature.",
      "B) Because it is natively immune to all quantum noise without error correction.",
      "C) Because they believe it is much more manufacturable and modular for building large-scale systems.",
      "D) Because silicon naturally exhibits perfect coherence times of several days."
    ],
    "answer": "C) Because they believe it is much more manufacturable and modular for building large-scale systems.",
    "explanation": "Silicon-based manufacturing is preferred because it leverages existing semiconductor fabrication techniques, making large-scale modular systems much more feasible. Understanding these hardware nuances is part of becoming a quantum professional."
  },
  {
    "id": 41,
    "context": "With AI tools now capable of writing basic code easily, the value of a professional shifts from syntax memorization to structural problem-solving.",
    "question": "According to Scott Crowder, what skill is becoming *more* important than writing line-by-line Qiskit code for future quantum professionals?",
    "options": [
      "A) Memorizing binary ASCII tables.",
      "B) Understanding the underlying math, algorithmic implementations, and specific industry domains.",
      "C) Building physical cryogenic refrigerators.",
      "D) Translating quantum circuits into C++ manually."
    ],
    "answer": "B) Understanding the underlying math, algorithmic implementations, and specific industry domains.",
    "explanation": "With AI assistants capable of writing basic Qiskit code rapidly, the real value lies in domain expertise, understanding the mathematical structures, and knowing how to map them to quantum algorithms. This art of problem mapping is what makes quantum discovery possible today."
  },
  {
    "id": 42,
    "context": "We are currently in an era where theoretical physics is actively meeting empirical computer science on real hardware.",
    "question": "What is meant by the takeaway that 'Today's quantum computers are tools for algorithmic discovery'?",
    "options": [
      "A) They are completely autonomous and discover new algorithms without human input.",
      "B) The hardware is now ready to support empirical trial-and-error research, synergizing with classical systems to test and refine heuristics.",
      "C) They are exclusively used to discover new prime numbers for the internet.",
      "D) They have already discovered the ultimate replacement for classical computing."
    ],
    "answer": "B) The hardware is now ready to support empirical trial-and-error research, synergizing with classical systems to test and refine heuristics.",
    "explanation": "State-of-the-art quantum computers are capable enough to run real experiments, meaning researchers can test, benchmark, and discover how heuristics perform empirically rather than just theoretically. This discovery phase constantly challenges theoretical boundaries like P vs NP."
  },
  {
    "id": 43,
    "context": "A major question in computer science is whether quantum computers fundamentally change the theoretical boundaries of complexity classes like P vs NP.",
    "question": "Does quantum computing theoretically help to collapse the NP-hard space into the P space (i.e., solve all NP problems easily in polynomial time)?",
    "options": [
      "A) Yes, Shor's algorithm proved this mathematically.",
      "B) Yes, by using infinite superposition.",
      "C) No, quantum computing does not collapse the NP space to P.",
      "D) It is currently unknown and the main focus of IBM's 2029 roadmap."
    ],
    "answer": "C) No, quantum computing does not collapse the NP space to P.",
    "explanation": "When asked directly if quantum collapses the NP space to P, Scott Crowder answered with a definitive 'No'. Instead of magically solving NP-hard problems exactly, we look for approximate or heuristic advantages, while being mindful of physical limitations like speedups."
  },
  {
    "id": 44,
    "context": "Grover's algorithm offers a provable quadratic speedup theoretically, but physical hardware speeds severely impact its practical utility.",
    "question": "Why might a quadratic speedup not yield practical advantage on slower quantum modalities like trapped ions?",
    "options": [
      "A) Because trapped ions cannot mathematically execute Grover's algorithm.",
      "B) Because if the quantum computer's 'flywheel' is a million times slower than a CPU, a quadratic algorithmic speedup may never overcome the massive hardware time deficit.",
      "C) Because trapped ions lose coherence instantly when running search algorithms.",
      "D) Because quadratic speedups only apply to continuous, non-linear AI problems."
    ],
    "answer": "B) Because if the quantum computer's 'flywheel' is a million times slower than a CPU, a quadratic algorithmic speedup may never overcome the massive hardware time deficit.",
    "explanation": "A quantum computer must overcome its natively slower clock speed; if a modality is a million times slower than a classical CPU, a mere quadratic speedup isn't enough to beat classical runtimes in practical scenarios. Therefore, deep algorithmic advantages or comparing against different quantum architectures like annealers is preferred."
  },
  {
    "id": 45,
    "context": "Different hardware approaches exist for solving Ising Hamiltonians and QUBOs, each with their own architectures.",
    "question": "While not extensively detailed in the transcript, the lecture slides highlight utility-scale demonstrations comparing gate-model quantum computers running QAOA against what other type of quantum technology?",
    "options": [
      "A) Classical abacuses",
      "B) Quantum Annealers",
      "C) Photonic AI Transformers",
      "D) DNA computers"
    ],
    "answer": "B) Quantum Annealers",
    "explanation": "The slides reference utility-scale demonstrations comparing gate-model IBM quantum computers (running QAOA) against Quantum Annealers for nontrivial binary optimization problems. To make utilizing these gate models easier for developers, IBM provides high-level cloud services."
  },
  {
    "id": 46,
    "context": "To abstract away the deep complexities of individual quantum circuits, cloud services provide higher-level APIs for developers.",
    "question": "What cloud services are offered on top of the IBM Quantum Platform to allow users to tackle optimization problems with high-level problem definitions?",
    "options": [
      "A) IBM Watson",
      "B) Qiskit Functions (e.g., Optimization Solver, Iskay Quantum Optimizer)",
      "C) Azure Quantum",
      "D) AWS Braket"
    ],
    "answer": "B) Qiskit Functions (e.g., Optimization Solver, Iskay Quantum Optimizer)",
    "explanation": "Qiskit Functions, such as Q-CTRL's Optimization Solver and Kipu Quantum's Iskay Quantum Optimizer, are cloud services designed to solve utility-scale optimization problems abstractly without deep circuit knowledge. This ease of use dramatically accelerates the number of active users and papers."
  },
  {
    "id": 47,
    "context": "The adoption of quantum technology and open ecosystems is driving a massive growth in educational and research output globally.",
    "question": "According to the presentation slides, roughly how many documents on arXiv referenced IBM's quantum hardware and/or software by 2026?",
    "options": [
      "A) Under 1,000",
      "B) ~2,100",
      "C) Nearly 6,000 (5954)",
      "D) Over 100,000"
    ],
    "answer": "C) Nearly 6,000 (5954)",
    "explanation": "The slides indicate 5,954 arXiv documents reference IBM's quantum hardware/software, highlighting the rapid growth of the ecosystem. Because this ecosystem is growing so fast, the timeline to cryptography threats is becoming a reality."
  },
  {
    "id": 48,
    "context": "The intersection of IBM's hardware roadmap scaling and Shor's algorithm creates a definitive deadline for global cybersecurity protocols.",
    "question": "What necessary global action is driven by the projection that quantum computers will reach cryptographic relevance around 2035?",
    "options": [
      "A) The abandonment of all cloud computing architectures.",
      "B) The transition to post-quantum cryptography standards.",
      "C) The physical isolation of all data centers.",
      "D) The halting of all quantum hardware development."
    ],
    "answer": "B) The transition to post-quantum cryptography standards.",
    "explanation": "Because large-scale quantum computers could break today's asymmetric cryptography by ~2035, the world must transition to post-quantum cryptography standards well before then. Until then, hardware scaling continues rapidly along specific processor milestones."
  },
  {
    "id": 49,
    "context": "IBM's roadmap involves massive scaling jumps in capability, marked by specific chip architectures named after birds.",
    "question": "According to the development roadmap, which processor iteration is slated for 2029 to deliver the first fault-tolerant computer capable of 100 million gates?",
    "options": [
      "A) Heron",
      "B) Eagle",
      "C) Starling",
      "D) Blue Jay"
    ],
    "answer": "C) Starling",
    "explanation": "The 'Starling' processor is targeted for 2029, capable of 100 million quantum gates, marking the shift to large-scale fault tolerance. Beyond 2029, the target expands even further into the 2030s."
  },
  {
    "id": 50,
    "context": "The long-term hardware vision pushes quantum systems into the realm of billions of operations, unlocking the ultimate theoretical potential of quantum algorithms.",
    "question": "What processor system does IBM's roadmap project for the 2033+ timeframe, aiming for 1 billion quantum gates?",
    "options": [
      "A) Falcon",
      "B) Condor",
      "C) Starling",
      "D) Blue Jay"
    ],
    "answer": "D) Blue Jay",
    "explanation": "The roadmap shows the 'Blue Jay' system in the 2033+ timeframe, supporting 2000 logical qubits and 1 billion quantum gates. This scale will unlock the full theoretical power of quantum computing across industries."
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