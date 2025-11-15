// Quiz questions data — Embedded Systems (2025-2026)
const QUESTIONS = [
  {
    question:
      "Imagine an automotive safety feature that prevents wheel lockup during braking by rapidly modulating pressure via sensors and an ECU. This exemplifies an embedded system's purpose in:",
    options: [
      "Monitoring variables without imposing any control actions",
      "Controlling physical variables based on input changes to maintain stability",
      "Storing and representing data for long-term analysis only",
      "Data communication over wireless networks for entertainment",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the evolution of integrated circuits, a VLSI chip with millions of transistors enables wide functionality in embedded devices. This advancement most directly benefits systems by allowing:",
    options: [
      "Dependence on external vacuum tubes for basic arithmetic",
      "Larger physical sizes for better configurability during design",
      "Elimination of all software layers in favor of hardware-only control",
      "Integration of complex operations like signal processing in compact forms",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Embedded systems classified as fourth-generation, incorporating reconfigurable processors, are primarily aimed at achieving miniaturization and tight integration, as seen in modern smartphones.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In the context of non-functional requirements, power consumption in embedded designs is often irrelevant for wall-plugged devices, allowing unrestricted energy use without impacting usability.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "During the design process of a navigation device that updates position in under 0.25 seconds, the architecture phase must evaluate tradeoffs. A key consideration here would be balancing functional requirements like GPS data processing with non-functional ones such as:",
    options: [
      "Focusing solely on software components without hardware integration",
      "Prioritizing manufacturing cost and power consumption for portability",
      "Allowing unlimited battery life without constraints",
      "Ignoring user interface for purely backend operations",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "A system-on-chip (SoC) offers superior configurability during the design phase compared to a system board, making it ideal for iterative changes in hardware layout.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "The Apollo Guidance Computer, as the first recognized embedded system, utilized a user interface resembling a calculator, demonstrating early integration of hardware and software for mission-critical tasks.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'A "Hard Real-Time" system is fundamentally characterized by:',
    options: [
      "The ability to run multiple operating systems simultaneously.",
      "Using only CISC processor architecture.",
      "The catastrophic consequences of missing a timing deadline.",
      "Having a very fast processor.",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "In a scenario where a household appliance must regulate environmental conditions based on sensor input while minimizing power usage, which component of an embedded system is primarily responsible for interpreting the firmware to adjust mechanical outputs like coolant release?",
    options: [
      "The chassis and outlet for physical support",
      "The chip holding the software that drives controls and monitoring",
      "The ALU within the processor",
      "The infrared sensors for data collection",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "When designing a system-on-chip (SoC) for a high-performance application like graphics-intensive deep learning, the inclusion of secondary processors such as GPU or DSP primarily serves to:",
    options: [
      "Replace the need for memory and I/O peripherals entirely",
      "Offload specific computations from the primary processor to enhance efficiency",
      "Simplify the instruction set by reducing the role of the control unit",
      "Increase the overall size and cost without performance gains",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Any computing system must consist of three main things:",
    options: [
      "Processor, Memory, I/O",
      "Processor, ALU, I/O",
      "ALU, CU, RF",
      "None of the above",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Embedded system Challenges are:",
    options: [
      "power, cost, speed/ time, size",
      "power, cost, speed",
      "power, time, size",
      "power, cost, size",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "It is used to connect electronic components, such as wires, and processor, memory, and I/O preferences, to conduct various projects.",
    options: ["SB", "SoC", "Both a & b", "None of the above"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "......... assist MP in deep learning operations.",
    options: ["DSP", "GPU", "Soc", "SB"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "SoC deals with:",
    options: [
      "BareMetal SW",
      "OS Applications",
      "Both a & b",
      "None of the above",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "RISC takes time in:",
    options: ["Searching", "Conversion", "Both a & b", "None of the above"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "CISC takes time in:",
    options: ["Searching", "Conversion", "Both a & b", "None of the above"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "a hardware device that takes input from the environment and provides it to the system by converting it.",
    options: ["Actuator", "Sensor", "Both a & b", "None of the above"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of the following statements about the different types of buses in a computer system is correct?",
    options: [
      "The address bus stores the contents that have been read or written in memory",
      "The address bus determines the location in memory where data is to be written or read",
      "The data bus contains control signals that manage information flow between components",
      "The control bus holds the data being transferred to and from memory.",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Embedded systems are designed to have high power consumption.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Transistors are smaller than vacuum tubes",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Sensors take input from the system and give output to the environment.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Sensors that takes the input from environment and gives to the system by converting it.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Actuator is a device that converts the electrical signals into the physical events.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Sensor is a device used for the conversion of physical events into the electrical signals.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "CISC is a high-performance architecture for computers",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "CISC is used in embedded systems",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "PC is a small register that stores the memory address of the last data element added to the stack.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "PSW is a set of flags, where each flag is a bit and serves a specific function",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "ID manufacturing methods vary depending on ISA.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Instruction Decoder (ID), is the hardware that understand the instruction",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "A stack is a special data structure in a computer processor that stores memory addresses (locations) of program instructions to be executed.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Assembly language varies depending on the microprocessor.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "A D Flip-Flop is a small circuit that can store one bit of data. Each 8 D-flip flops construct 8-bit register.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'DRAM performance is described as "slower".',
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'SRAM has "Lower" power consumption than DRAM.',
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'The "Size" of SRAM is "High density".',
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "a refreshment circuit contributes to DRAM's higher power consumption.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "SRAM and DRAM are two types of Volatile Memory.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'SRAM has "faster" performance.',
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'DRAM has a "low" cost.',
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'SRAM has a "higher" power consumption.',
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      'The "Cost" and "Size" of SRAM are both described with the word "Low" or "Lower".',
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'which memory type has a "High density" size?',
    options: ["SRAM", "DRAM", "Both", "Neither"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "How is the cost of SRAM described?",
    options: ["low", "high", "slower", "Lower"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'Which memory type is listed as "faster" in performance?',
    options: ["DRAM", "SRAM", "Volatile Memory", "ES Challenges"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "What is the power consumption of DRAM stated to be?",
    options: ["Lower", "Higher", "Low", "faster"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Why does DRAM have higher power consumption?",
    options: [
      'Because it is "low" cost.',
      'Because it has a "High density".',
      'Because it needs a "refreshment circuit" and its "capacitor consume power".',
      'Because it is "slower".',
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'What is the "Size" of SRAM listed as?',
    options: ["Low", "High density", "high", "Lower"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'Which of the following is described as "low" cost?',
    options: ["SRAM", "DRAM", "Both", "The slide does not say."],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "How is the performance of DRAM characterized?",
    options: ["faster", "slower", "high", "Low"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'Which memory type has "Lower" power consumption?',
    options: [
      "SRAM",
      "DRAM",
      "The one with the refreshment circuit",
      'The one with "High density"',
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The first recognized embedded system is:",
    options: [
      "Intel 4004",
      "ENIAC",
      "Apollo Guidance Computer (AGC)",
      "IBM PC",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The AGC used approximately how many ICs?",
    options: ["50", "500", "5000", "50,000"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The UI of the AGC was called:",
    options: ["LCD Panel", "DSKY", "AGUI", "MKUI"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The Intel 4004 microprocessor was introduced in:",
    options: ["1969", "1971", "1975", "1980"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The Intel 4004 was originally designed for:",
    options: [
      "Robotics",
      "Military systems",
      "Busicom calculators",
      "Industrial control",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The architecture size of Intel 4004 was:",
    options: ["4-bit", "8-bit", "16-bit", "32-bit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "First-generation embedded systems were built around:",
    options: [
      "32-bit processors",
      "8-bit microprocessors",
      "64-bit ARM processors",
      "Multicore SoCs",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "An example of a first-generation embedded system is:",
    options: [
      "Smartphone",
      "Robotics",
      "Digital telephone keypad",
      "Industrial CNC machine",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "SCADA is an example of which generation of embedded systems?",
    options: ["First", "Second", "Third", "Fourth"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "ASIC is best described as:",
    options: [
      "A general-purpose processor",
      "A reconfigurable processor",
      "A custom-designed IC for a specific task",
      "A low-cost embedded memory unit",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Third-generation embedded systems include:",
    options: [
      "SoCs and multicore systems",
      "8-bit microcontrollers",
      "DSPs and ASICs",
      "None of the above",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Fourth-generation embedded systems mainly include:",
    options: [
      "4-bit controllers",
      "System-on-Chip (SoC) devices",
      "Analog computers",
      "Mechanical processors",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "An example of a fourth-generation embedded device is:",
    options: [
      "SCADA system",
      "Digital telephone keypad",
      "Smart phone",
      "Basic calculator",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Small-scale embedded systems are characterized by:",
    options: [
      "High complexity and real-time response",
      "Simple applications and low cost",
      "Multicore processors",
      "High-performance DSPs",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Medium-scale embedded systems typically include:",
    options: [
      "No operating system",
      "Simple toy circuits",
      "An operating system and medium performance",
      "Very high-end processors",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "A large-scale embedded system typically has:",
    options: [
      "Simple firmware",
      "Non-critical timing",
      "Time-critical response",
      "Low complexity",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Missing a deadline in a soft real-time system:",
    options: [
      "Is catastrophic",
      "Cannot be tolerated",
      "Is acceptable to some degree",
      "Causes system shutdown",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Hard real-time systems are those where missing a deadline may cause:",
    options: [
      "No issues",
      "Only minor delays",
      "Catastrophic consequences",
      "Nothing significant",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Event-triggered systems execute tasks based on:",
    options: [
      "Fixed time schedule",
      "Occurrence of events",
      "Temperature variations",
      "External interrupts only",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Time-triggered systems operate based on:",
    options: [
      "Random events",
      "Dynamic scheduling",
      "Pre-computed static time slots",
      "Keyboard input",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of the following is an example of a consumer-electronics embedded system?",
    options: ["Engine control unit", "Camera", "ATM", "Printer"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Washing machines and refrigerators fall under which application area of embedded systems?",
    options: [
      "Telecom",
      "Household appliances",
      "Computer networking",
      "Security systems",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The Anti-lock Braking System (ABS) is mainly used in:",
    options: [
      "Medical devices",
      "Automotive industry",
      "Home automation",
      "Telecom networks",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The main purpose of ABS is to:",
    options: [
      "Improve fuel economy",
      "Prevent wheel lock during braking",
      "Enhance engine horsepower",
      "Reduce tire wear only",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "When ABS is working, the driver typically feels:",
    options: [
      "Smooth continuous braking",
      "Pulsing or vibration in the brake pedal",
      "No change at all",
      "Sudden engine cutoff",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Fire alarms and sprinklers are examples of embedded systems used in:",
    options: ["Telecom", "Home automation & security", "Healthcare", "Retail"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Cellular phones and telephone switches belong to which embedded domain?",
    options: ["Automotive systems", "Telecom", "Home automation", "Banking"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Printers and scanners are examples of:",
    options: [
      "Network communication devices",
      "Computer peripherals",
      "Healthcare systems",
      "Industrial robots",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Routers and switches are used in:",
    options: [
      "Household appliances",
      "Banking machines",
      "Computer networking systems",
      "Healthcare systems",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "ECG and EEG machines belong to which application area?",
    options: [
      "Consumer electronics",
      "Household appliances",
      "Healthcare",
      "Retail",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "ATMs and POS systems belong to which category?",
    options: [
      "Banking & Retail",
      "Home automation",
      "Automotive systems",
      "Consumer electronics",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Barcode scanners and smart card readers fall under:",
    options: [
      "Data processing devices",
      "Card reader systems",
      "Home appliances",
      "Networking systems",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Which of the following is NOT a purpose of embedded systems?",
    options: [
      "Data collection",
      "Monitoring",
      "Application-specific UI",
      "Advertising",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Data collection in embedded systems may involve:",
    options: [
      "Analog data only",
      "Digital data only",
      "Both analog and digital data",
      "Neither analog nor digital",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The collected data in embedded systems may be:",
    options: ["Stored", "Transmitted", "Processed", "All the above"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Data communication embedded systems can use:",
    options: [
      "Wired interfaces",
      "Wireless interfaces",
      "Both A and B",
      "Mechanical interfaces",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Routers and modems are examples of:",
    options: [
      "Data collection systems",
      "Monitoring devices",
      "Dedicated data communication systems",
      "Home appliances",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Embedded systems used for speech coding or video codecs mainly fall under:",
    options: [
      "Data collection systems",
      "Signal processing systems",
      "Monitoring systems",
      "Control systems",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Signal processing embedded systems generally use:",
    options: ["ASICs", "DSPs", "Microcontrollers", "Event timers"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Monitoring systems:",
    options: [
      "Can control variables",
      "Cannot control variables",
      "Always include actuators",
      "Are always wireless",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of the following is a typical monitoring-only embedded system?",
    options: ["ABS", "Washing machine", "ECG machine", "ATM"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Embedded systems with control functionality must include:",
    options: [
      "Only sensors",
      "Only actuators",
      "Both sensors and actuators",
      "Neither sensors nor actuators",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "In a control-based embedded system, sensors are mainly used to:",
    options: [
      "Generate heat",
      "Capture changes in environmental variables",
      "Store data permanently",
      "Provide power to actuators",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The actuator in a control embedded system is responsible for:",
    options: [
      "Measuring input changes",
      "Delivering control action to maintain the required range",
      "Filtering noise signals",
      "Performing user interface functions",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which of the following is a typical example of a control-functionality embedded system?",
    options: ["ECG machine", "Router", "Air conditioner", "Printer"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "In an air conditioner system, the actuator is the:",
    options: [
      "Thermistor",
      "Control buttons",
      "Compressor unit",
      "LCD display",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Application-Specific User Interface embedded systems:",
    options: [
      "Are meant for all types of users",
      "Use generic interface devices only",
      "Are designed for specific target groups",
      "Do not contain input/output devices",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Which is an example of an Application-Specific UI embedded system?",
    options: [
      "Home refrigerator",
      "Mobile handset",
      "Traditional PC",
      "Fan regulator",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "The design of an embedded system starts with:",
    options: [
      "Hardware assembly",
      "Selecting the microcontroller",
      "Writing the firmware",
      "Requirements gathering",
    ],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question:
      "Requirements are refined into a ________, which is used to design the architecture.",
    options: [
      "Schematic diagram",
      "Specification",
      "Circuit board",
      "Prototype",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Functional requirements describe:",
    options: [
      "What the system should do",
      "Cost and size limitations",
      "Power consumption limits",
      "Physical appearance",
    ],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Performance, cost, and power consumption fall under:",
    options: [
      "Functional requirements",
      "Non-functional requirements",
      "Optional requirements",
      "Unnecessary constraints",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Soft performance metrics refer to:",
    options: [
      "Rigid deadlines",
      "Approximate time to perform a user-level function",
      "Physical dimension limits",
      "Manufacturing price range",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Hard performance deadlines must be:",
    options: [
      "Completed only when possible",
      "Completed within allowable delay",
      "Completed within strict timing limits",
      "Ignored during design",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Manufacturing cost includes:",
    options: [
      "Cost of hardware components only",
      "Only the assembly cost",
      "Components + assembly costs",
      "Cost of software licenses",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Non-Recurring Engineering (NRE) cost includes:",
    options: [
      "Hardware materials",
      "Long-term operational cost",
      "Personnel and design development cost",
      "Maintenance cost",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Power consumption requirements are MOST important in:",
    options: [
      "Desktop computers",
      "Devices always plugged into the wall",
      "Battery-powered devices",
      "Industrial mainframes",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Physical size and weight are more critical in:",
    options: [
      "Rack-mounted industrial systems",
      "Giant server rooms",
      "Handheld devices",
      "Underwater fiber cables",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: 'In the sample requirements form, the "Purpose" field should be:',
    options: [
      "A detailed technical document",
      "One or two lines summarizing the system",
      "A list of hardware components",
      "An algorithm description",
    ],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null,
  },
  {
    question: "Inputs/Outputs in the requirements form describe:",
    options: [
      "Only the sensors used",
      "Only the user interface",
      "Types of data and devices used for input/output",
      "The final manufacturing steps",
    ],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null,
  },
];

// app.js — من غير تبعيات خارجية
(function () {
  const quizArea = document.getElementById("quiz-area");
  const shuffleBtn = document.getElementById("shuffle-btn");
  const resetBtn = document.getElementById("reset-btn");
  const statsElement = document.getElementById("stats");

  function createCard(q, i) {
    const card = document.createElement("div");
    card.className = "card";

    const head = document.createElement("div");
    head.className = "card-head";
    head.textContent = `question ${i + 1}`;

    const qText = document.createElement("p");
    qText.className = "question-text";
    qText.textContent = q.question;

    const optionsBox = document.createElement("div");
    optionsBox.className = "options-box";

    q.options.forEach((opt, idx) => {
      const label = document.createElement("label");
      label.className = "option";
      label.tabIndex = 0;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${i}`;
      radio.value = idx;

      const span = document.createElement("span");
      span.textContent = opt;

      label.appendChild(radio);
      label.appendChild(span);

      const choose = () => {
        if (q.userAnswer !== null) return;

        q.userAnswer = idx;
        const correct = q.correctAnswer;

        if (idx === correct) {
          label.classList.add("correct");
          q.isCorrect = true;
          showFeedback(card, true);
        } else {
          label.classList.add("wrong");
          // highlight correct option
          const correctLabel = optionsBox.querySelectorAll(".option")[correct];
          if (correctLabel) correctLabel.classList.add("correct");
          showFeedback(card, false);
        }

        updateStats();
      };

      label.addEventListener("click", () => choose());
      label.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          choose();
        }
      });

      optionsBox.appendChild(label);
    });

    card.appendChild(head);
    card.appendChild(qText);
    card.appendChild(optionsBox);

    return card;
  }

  function showFeedback(card, ok) {
    // Remove existing feedback if any
    const existingFeedback = card.querySelector(".feedback");
    if (existingFeedback) {
      existingFeedback.remove();
    }

    const fb = document.createElement("div");
    fb.className = "feedback " + (ok ? "success" : "error");
    fb.textContent = ok ? "Correct answer " : "Wrong answer ";
    card.appendChild(fb);
  }

  function updateStats() {
    const total = QUESTIONS.length;
    const answered = QUESTIONS.filter((q) => q.userAnswer !== null).length;
    const correct = QUESTIONS.filter((q) => q.isCorrect === true).length;

    statsElement.textContent = `Answered ${answered} out of ${total} questions | Correct answers: ${correct}`;
  }

  function render(questions) {
    quizArea.innerHTML = "";
    if (!questions || !questions.length) {
      const empty = document.createElement("div");
      empty.className = "card";
      empty.innerHTML =
        '<p class="small">The questions array is empty. Open the <code>questions.js</code> file, add your questions, and reload the page.</p>';

      quizArea.appendChild(empty);
      return;
    }

    questions.forEach((q, i) => {
      const card = createCard(q, i);
      quizArea.appendChild(card);
    });

    updateStats();
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // initial render
  render(QUESTIONS);

  shuffleBtn.addEventListener("click", () => {
    const copy = JSON.parse(JSON.stringify(QUESTIONS || []));
    render(shuffle(copy));
  });

  resetBtn.addEventListener("click", () => {
    QUESTIONS.forEach((q) => {
      q.userAnswer = null;
      q.isCorrect = null;
    });
    render(QUESTIONS);
  });
})();
