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
   {
    question: "Application-Specific UI systems contain standard, general-purpose interfaces.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The design process of an embedded system begins with defining requirements.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Functional requirements include cost and performance constraints.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Non-functional requirements describe how well the system must perform.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard performance deadlines cannot be violated.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "NRE cost refers to the cost of repeated production.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Battery-powered systems usually require strict power constraints.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The system specification acts mainly as:",
    options: ["A rough design document for programmers", "A contract between the customer and the architects", "A replacement for testing", "A debugging tool"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A good system specification must be:",
    options: ["Complex and difficult for customers to understand", "Very short and vague", "Precise and understandable for verification", "Only written by programmers"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not part of a GPS system specification?",
    options: ["Data from GPS satellites", "Internal CPU temperature logs", "Map data", "User interface operations"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Architecture design determines:",
    options: ["Only the software components", "Only the hardware components", "Major hardware and software components", "Only data flow between satellites"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In architecture design, trade-offs are made between:",
    options: ["Software vs. weather conditions", "Hardware vs. software", "Map data vs. screen brightness", "Customer vs. satellite"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In the GPS moving map system, which component converts map data into pixels?",
    options: ["GPS Receiver", "Database", "Renderer", "Timer"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The GPS Receiver is mainly responsible for:",
    options: ["Drawing maps", "Determining current location", "Managing user input", "Rendering pixels"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which component stores the image before it appears on the screen?",
    options: ["Panel I/O", "Frame buffer", "CPU", "Map database"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In the software architecture, the database search module receives input from:",
    options: ["Renderer", "User Interface", "Position module", "Display"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The timer in the GPS system is mainly used to:",
    options: ["Update or refresh map data periodically", "Draw pixel colors", "Replace the GPS signal", "Handle satellite communication"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System integration is important because:",
    options: ["It guarantees no bugs", "Bugs often appear only after integrating components", "It replaces testing", "It eliminates the need for specification"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A microprocessor is:",
    options: ["An independent device with built-in memory", "A general-purpose device requiring external memory", "Designed only for GPS applications", "Always faster than a microcontroller"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A microcontroller is:",
    options: ["A dependent device needing external chips", "A general-purpose device", "An independent device with built-in memory and peripherals", "Only used in laptops"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which device typically includes power-saving features?",
    options: ["Microprocessor", "Microcontroller", "Both"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is NOT a component of the GPS hardware architecture?",
    options: ["CPU", "Frame buffer", "GPS Receiver", "Compiler"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "PSW is a set of flags; each flag is a bit and has a specific function.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Instruction Register (IR): stores instruction inside it, after fetch from memory.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Accumulator (ACC): store results from ALU temporarily- nowadays it is unavailable",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Program Counter (PC) Placed in ROM and Hold the address(location) of next instruction",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Stack Pointer (SP) It is a small register that stores the memory address of the last data element added to the stack.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "ID manufacturing methods vary depending on ISA.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In Embedded systems we use CISC.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The assembly language varies depending on different microprocessors.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A stack is a special register in a computer processor that contains the memory address(location) of the next program instruction to be executed.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "PC is a small register that stores the memory address of the last data element added to the stack.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Write (w) access time is bigger than read (r) access time.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "........... is a hardware device that takes the input from the environment and gives it to the system by converting it.",
    options: ["Actuator", "Sensor"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: ".............is a device that converts the electrical signals into the physical events. It takes the input from the system and gives output to the environment",
    options: ["Actuator", "Sensor"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC deals with...",
    options: ["BareMetal SW", "OS Applications"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC takes time in.........",
    options: ["Conversion", "Search"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC takes time in.........",
    options: ["Conversion", "Search"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC is a high performance like computers.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC is a high performance like computers",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Sensor is a device used for the conversion of physical events into the electrical signals.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Sensors takes the input from the system and gives output to the environment.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Transistor is smaller than vacuum tubes.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC is a high performance MCU.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "MPU (Microprocessor Unit) is a part of MCU (Microcontroller Unit)",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "MCU is a part of MPU",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "............used to connect electronic components, such as wires, and processor, memory, and I/O preferences, to conduct various projects.",
    options: ["SoC", "SB"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "............. assist MP in deep learning operations.",
    options: ["DSP", "GPU"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: ".............. deals with complex computations",
    options: ["DSP", "GPU"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Any computing system must consist of three main things:",
    options: ["ALU, CU, RF", "Processor, Memory, I/O", "Processor, ALU, I/O"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC deals with............",
    options: ["OS Applications", "BareMetal SW"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Embedded system Challenges are:",
    options: ["power, cost, speed/ time, size", "power, cost, speed", "power, cost, size.", "power, time, size."],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Any computing system must consist of three main things: Processor, Memory, and I/O.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "General-purpose computing systems can run multiple applications on the same hardware resources.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the three main components of a computing system?",
    options: ["ALU, CU, RF", "Processor, Memory, I/O", "CPU, GPU, DSP"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of computing system is used for a single purpose, like a fridge or microwave?",
    options: ["General-purpose", "Specific-purpose", "Hybrid", "Multi-purpose"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Embedded systems must have constraints in power, cost, speed, and size.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is NOT a challenge in embedded systems?",
    options: ["Power", "Cost", "Flexibility", "Size"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two types of computing systems?",
    options: ["General purpose and Specific purpose", "General purpose and Hybrid purpose", "Specific purpose and Hybrid purpose"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of computing system can install many applications?",
    options: ["General purpose", "Specific purpose", "Hybrid purpose"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of computing system is used for a single purpose?",
    options: ["General purpose", "Specific purpose", "Hybrid purpose"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Computing systems are divided into two types: General purpose and Specific purpose.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "General purpose systems are used for a single purpose.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Specific purpose systems are used for a single purpose.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is an example of a general-purpose system?",
    options: ["Laptop", "Fridge", "Microwave"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is an example of a specific-purpose system?",
    options: ["Laptop", "Smartphone", "Microwave"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a constraint for embedded systems?",
    options: ["Power", "Color", "Shape"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a constraint for embedded systems?",
    options: ["Cost", "Speed", "Color"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a challenge for embedded systems?",
    options: ["Size", "Weight", "Color"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Color is a constraint for embedded systems.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Size is a challenge for embedded systems.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a breadboard used for?",
    options: ["Connecting electronic components", "Baking bread", "Writing software code"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a component connected on a breadboard?",
    options: ["Wires", "Processor", "Hard Disk"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the purpose of a breadboard in embedded systems?",
    options: ["To connect electronic components for various projects", "To bake bread", "To write software code"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A System Board is used to connect electronic components such as wires, processors, memory, and I/O preferences.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A breadboard is used to write software code.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does SoC stand for?",
    options: ["System on Chip", "System on Circuit", "System on Computer"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an Integrated Circuit (IC)?",
    options: ["A single chip combining many high-level function elements", "A separate component mounted to a motherboard", "A type of breadboard"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a characteristic of an SoC?",
    options: ["Larger size", "Less expensive", "High performance"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An Integrated Circuit (IC) combines many or all high-level function elements of an electronic device onto a single chip.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An SoC is larger in size compared to a system board.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An SoC is less expensive compared to a system board.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is less expensive?",
    options: ["System board", "System on Chip"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following consumes more power?",
    options: ["System board", "System on Chip"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System boards are larger in size compared to System on Chips.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System boards consume more power compared to System on Chips.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System on Chips are more expensive compared to System boards.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is configurable?",
    options: ["System board", "System on Chip"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not configurable?",
    options: ["System board", "System on Chip"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following can be edited during the system's design phase?",
    options: ["System board", "System on Chip"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System boards can be edited during the system's design phase.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "System on Chips can be edited during the system's design phase.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Configurability is a characteristic of system boards.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of an Integrated Circuit (IC)?",
    options: ["Timer 555", "Breadboard", "Hard Disk"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the 555 timer IC used for?",
    options: ["Baking bread", "Timer, delay, and pulse generation applications", "Writing software code"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is the 555 timer IC popular?",
    options: ["Flexibility and price", "Size and color", "Speed and weight"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The 555 timer IC is used in many applications of timer, delay, and pulse generation.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The 555 timer IC is not popular due to its flexibility and price.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The 555 timer IC is an example of an Integrated Circuit (IC).",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does VLSI stand for?",
    options: ["Very Large-Scale Integration", "Very Large-Scale Integrated Circuit", "Very Large-Scale Interface"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a characteristic of VLSI?",
    options: ["Small size", "Large size", "Medium size"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a benefit of VLSI?",
    options: ["Wide range functionality", "High cost", "Limited functionality"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "VLSI stands for Very Large-Scale Integrated Circuit.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "VLSI has a small size and wide range functionality.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "VLSI is not an Integrated Circuit (IC).",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is an IC?",
    options: ["Microprocessor", "Hard Disk", "Breadboard"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not an IC?",
    options: ["Microcontroller", "RAM", "Hard Disk"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is an example of an IC?",
    options: ["SoC", "Breadboard", "Hard Disk"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Microprocessors, Microcontrollers, and SoCs are examples of ICs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard Disks are examples of ICs.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RAMs and ROMs are examples of ICs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Microprocessors, Microcontrollers, SoC, RAMs, Rom are ICs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does MPU stand for?",
    options: ["Microprocessor Unit", "Memory Processing Unit", "Microcontroller Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an MPU?",
    options: ["A processor in the computing system", "A type of memory", "A type of I/O device"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a name for MPU?",
    options: ["Processor", "Microprocessor", "CPU", "All of them"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a name for MPU in old?",
    options: ["Processor", "Microprocessor", "CPU"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a name for MPU in new?",
    options: ["Processor", "Microprocessor", "CPU"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An MPU is a processor in the computing system.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A Hard Disk is a name for MPU.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Processor and Microprocessor are names for MPU.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Transistor is smaller than vacuum tubes.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the primary (Master) processor in a system called?",
    options: ["GPU", "DSP", "CPU"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a secondary (Slave) processor?",
    options: ["CPU", "GPU", "RAM"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the CPU in a system with multiple microprocessors?",
    options: ["Primary processor", "Secondary processor", "Memory unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CPU is the master processor, and other microprocessors like GPU and DSP are secondary processors.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The system can have multiple CPUs.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The GPU is a secondary processor.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "if the system has many microprocessors, so the primary one is the CPU",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an MCU?",
    options: ["Microcontroller Unit", "Memory Control Unit", "Microprocessor Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does an MCU consist of?",
    options: ["Processor, Memory, I/O", "Processor, Storage, Network", "Memory, Storage, Network"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a component of an MCU?",
    options: ["Processor", "Hard Disk", "Network"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An MCU is a small computer on a single IC.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An MCU consists of a processor, memory, and I/O.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An MCU consists of a processor, storage, and network.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "MPU (Microprocessor Unit) is a part of MCU (Microcontroller Unit)",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "MCU is a part of MPU",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the GPU in a system?",
    options: ["Assist in graphics operations", "Primary processor", "Memory unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does GPU stand for?",
    options: ["Graphics Processing Unit", "General Processing Unit", "Graphics Performance Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a role of the GPU?",
    options: ["Assist in graphics operations", "Primary processor", "Occasionally called Visual Processing Unit"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The GPU assists the primary processor in graphics operations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The GPU is occasionally called Visual Processing Unit.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The GPU is the primary processor in a system.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does DSP stand for?",
    options: ["Digital Signal Processor", "Digital System Processor", "Data Signal Processor"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the DSP in a system?",
    options: ["Deal with complex computations", "Primary processor", "Memory unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a role of the DSP?",
    options: ["Deal with complex computations", "Primary processor", "Assist in graphics operations"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP deals with complex computations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP is the primary processor in a system.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP assists in graphics operations.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a part of the MP?",
    options: ["ALU (Arithmetic and Logic Unit)", "CU (Control Unit)", "RF (Register Files)", "All of them"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a part of the MP?",
    options: ["ALU", "CU", "Hard Disk"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does ALU stand for?",
    options: ["Arithmetic and Logic Unit", "Arithmetic and Linear Unit", "Arithmetic and Logical Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the ALU in a system?",
    options: ["Perform arithmetic and logical operations", "Control unit operations", "Manage memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU is responsible for arithmetic and logical operations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CU is responsible for arithmetic and logical operations.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU is a part of the MP inside MP.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the benefit of having a DSP in a system?",
    options: ["Decrease load on the primary processor", "Increase load on the primary processor", "Decrease memory usage"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "for computations like (Fourier transform),.......... deal with the computations.",
    options: ["GPU", "DSP", "CPU"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a role of the DSP?",
    options: ["Deal with complex computations", "Primary processor", "Assist in graphics operations"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP deals with complex computations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP decreases the load on the primary processor.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The DSP is the primary processor in a system.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a System on Chip (SoC)?",
    options: ["A high-performance MCU", "A type of breadboard", "A type of memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a characteristic of an SoC?",
    options: ["High performance", "Large size", "High cost"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of an SoC in a system?",
    options: ["Integrate multiple components into a single chip", "Serve as a primary processor", "Manage memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A System on Chip (SoC) is a high-performance MCU.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An SoC integrates multiple components into a single chip.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An SoC is larger in size compared to a system board.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two types of applications for embedded systems?",
    options: ["BareMetal SW and OS Applications", "Cloud Computing and OS Applications", "BareMetal SW and Cloud Computing"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of application deals with hardware directly?",
    options: ["BareMetal SW", "OS Applications", "Cloud Computing"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of application requires a microcontroller with high performance?",
    options: ["OS Applications", "BareMetal SW", "Cloud Computing"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "BareMetal SW deals with hardware directly.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "OS Applications require a microcontroller with high performance.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of application does SoC deal with?",
    options: ["OS Applications", "BareMetal SW", "Cloud Computing"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why does SoC deal with OS Applications?",
    options: ["Because we need a microcontroller with high performance", "Because we need a microcontroller with low performance", "Because we need a microcontroller with medium performance"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a reason for SoC dealing with OS Applications?",
    options: ["High performance", "Low performance", "High configurability"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC deals with OS Applications because we need a microcontroller with high performance.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC deals with Non BareMetal SW because we need a microcontroller with high performance.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC deals with BareMetal SW because we need a microcontroller with high performance.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "High performance is a reason for SoC dealing with OS Applications.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a type of application for embedded systems?",
    options: ["BareMetal SW", "OS Applications", "Cloud Computing"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "BareMetal SW not require a microcontroller with high performance.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Cloud Computing is a type of application for embedded systems.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of application does BareMetal SW deal with?",
    options: ["Not highly performance microcontroller", "High performance microcontroller", "Medium performance microcontroller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of application does OS Applications deal with?",
    options: ["High performance microcontroller", "Not highly performance microcontroller", "Medium performance microcontroller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "BareMetal SW deals with not highly performance microcontroller.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "OS Applications deal with high performance microcontroller.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a component of an SoC?",
    options: ["GPU", "DSP", "Hard Disk"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Arduino kit is an example of a kit used in embedded systems.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SoC stands for System on Chip.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard Disk is a component of an SoC.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an ECU?",
    options: ["Electrical Control Unit", "Electronic Control Unit", "Embedded Control Unit"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How many ECUs can a large system like a car consist of?",
    options: ["At least 100", "At least 200", "At least 300"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of sensors in an embedded system?",
    options: ["Convert physical events into electrical signals", "Convert electrical signals into physical events", "Manage memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An ECU stands for Electronic Control Unit.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A large system like a car can consist of at least 200 ECUs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Sensors convert electrical signals into physical events.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of an actuator in an embedded system?",
    options: ["Convert electrical signals into physical events", "Convert physical events into electrical signals", "Manage memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is an example of an actuator?",
    options: ["Motor", "Temperature sensor", "Light sensor"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of sensors in an embedded system?",
    options: ["Convert physical events into electrical signals", "Convert electrical signals into physical events", "Manage memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An actuator converts electrical signals into physical events.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A motor is an example of an actuator.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Sensors convert electrical signals into physical events.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a component of an embedded system?",
    options: ["IC", "Hard Disk", "MCU"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does MCU stand for?",
    options: ["Microcontroller Unit", "Memory Control Unit", "Microprocessor Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is a component of an embedded system?",
    options: ["IC", "Hard Disk", "Network"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An IC is a component of an embedded system.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A Hard Disk is a component of an embedded system.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An MCU stands for Microcontroller Unit.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the CPU in a computing system?",
    options: ["Primary processor", "Memory unit", "I/O device"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Control Processing Unit", "Compute Processing Unit"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a component of a computing system?",
    options: ["CPU", "Memory", "Hard Disk"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CPU is the primary processor in a computing system.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CPU stands for Central Processing Unit.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A Hard Disk is a component of a computing system.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU is a part of the processor.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the processor in a computing system?",
    options: ["Fetch, Decode, Execute", "Store, Retrieve, Delete", "Manage memory, I/O, Network"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does PC stand for in the context of a processor?",
    options: ["Program Counter", "Personal Computer", "Processing Core"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is not a part of the instruction life cycle?",
    options: ["Fetch", "Decode", "Store"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The role of the processor includes fetching, decoding, and executing instructions.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Program Counter (PC) is a register in the register files.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Storing is a part of the instruction life cycle.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is stored in ROM?",
    options: ["Instructions in 0,1 format", "Data in hexadecimal format", "Programs in assembly language"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the program counter contain?",
    options: ["The memory address of the next instruction", "The value of the current instruction", "The result of the last computation"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Instructions are stored in ROM in 0,1 format.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The program counter contains the memory address of the next instruction to be executed.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the first step in the instruction life cycle?",
    options: ["Fetch", "Decode", "Execute"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the CPU reference before fetching an instruction from memory?",
    options: ["Program counter", "Instruction register", "Memory address register"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What happens to the program counter after the CPU fetches an instruction?",
    options: ["It is increased by 1", "It is reset to 0", "It is decreased by 1"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The first step in the instruction life cycle is Fetch.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CPU references the instruction register before fetching an instruction from memory.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "After fetching an instruction, the program counter is increased by 1.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the program counter in the instruction life cycle?",
    options: ["To contain the memory address of the next instruction", "To store the current instruction", "To execute the instruction"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the next instruction referred to in the instruction life cycle?",
    options: ["The instruction to be executed after the current one", "The current instruction being executed", "The previous instruction that was executed"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the CPU do after fetching an instruction?",
    options: ["Increases the program counter by 1", "Decreases the program counter by 1", "Resets the program counter to 0"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The program counter contains the memory address of the next instruction.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The next instruction is the one to be executed after the current one.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "After the CPU fetches the instruction, it increases the program counter by 1 so it points to the next instruction in the program's sequence.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "After the CPU fetches the instruction, it increases the program counter by 1 so it points to the Current instruction in the program's sequence.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "After fetching an instruction, the CPU decreases the program counter by 1.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Who fetches the instruction in a microprocessor?",
    options: ["Arithmetic and Logic Unit (ALU)", "Control Unit (CU)", "Memory Unit"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "From where does the CU fetch the instruction?",
    options: ["RAM", "ROM", "Hard Disk"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Where is the instruction stored after being fetched by the CU?",
    options: ["Instruction Register (IR)", "Program Counter (PC)", "Memory Address Register (MAR)"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Control Unit (CU) fetches the instruction from ROM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The fetched instruction is stored in the Program Counter (PC).",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Register (IR) is inside the microprocessor.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is it hard to deal with the Bus directly?",
    options: ["Because it is slow", "Because it is complex", "Because it is expensive"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the easy way to fetch instructions?",
    options: ["Fetch from memory to register inside CPU", "Fetch directly from the Bus", "Fetch from I/O devices"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Instruction Decoder (ID) inside the CU?",
    options: ["Decode the instruction", "Execute the instruction", "Store the instruction"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The connection between the memory and CPU is using the Bus.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "It is easy to deal with the Bus directly.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Decoder (ID) decodes the instruction to send it to execution.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is meant by decoding the instruction?",
    options: ["Understanding the instruction to send it to execution", "Storing the instruction in memory", "Fetching the instruction from memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What signal does the CU send to the ALU after decoding the instruction?",
    options: ["Add, Subtract, etc.", "Fetch, Decode, Execute", "Store, Retrieve, Delete"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two pieces of information needed to decode the instruction?",
    options: ["Instruction Set and Instruction Format", "Instruction Code and Instruction Address", "Instruction Data and Instruction Type"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Decoding the instruction means understanding it to send it to execution.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CU sends a signal to the ALU after decoding the instruction.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two pieces of information needed to decode the instruction are Instruction Code and Instruction Address.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the second step in the instruction life cycle?",
    options: ["Decode", "Fetch", "Execute"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The second step in the instruction life cycle is Decode.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two pieces of information needed to decode the instruction are Instruction Set and Instruction Format.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Decoder (ID) executes the instruction.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Control Unit (CU) in the instruction life cycle?",
    options: ["Fetch the instruction", "Execute the instruction", "Store the instruction"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Where are the results of the ALU stored in old processors?",
    options: ["Accumulator", "General purpose registers", "Memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Where are the results of the ALU stored in new microprocessors?",
    options: ["Any empty register in general purpose registers", "Accumulator", "Memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU executes the results of operations such as ADD.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In old processors, the results of the ALU are stored in the Accumulator.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "In new microprocessors, the results of the ALU are stored in memory.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the purpose of the Instruction Set?",
    options: ["To understand that the instruction contains an ADD operation", "To store the instruction in memory", "To fetch the instruction from memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the Instruction Decoder (ID) do after decoding the instruction?",
    options: ["Sends a signal to the ALU", "Stores the instruction in memory", "Fetches the instruction from memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Set helps understand that the instruction contains an ADD operation.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Decoder (ID) stores the instruction in memory after decoding it.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two pieces of information needed to decode the instruction are Instruction Set and Instruction Format.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is using C language better than using assembly language?",
    options: ["Because assembly language varies depending on different microprocessors", "Because C language is faster", "Because assembly language is easier to understand"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Using assembly language is better than using C language because it is faster.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What happens if the instruction is * in Microprocessor?",
    options: ["The compiler converts it into many add operations", "The instruction is executed directly", "The instruction is ignored"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "If the instruction is * in Microprocessor 1, the compiler converts it into many add operations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Each microprocessor has different machine language to understand.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "the assembly language will vary depending on different microprocessors.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "C language is better than using assembly language.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two main types of Instruction Set Architecture (ISA)?",
    options: ["RISC and CISC", "RICS and CICS", "RISC and CICS"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does RISC stand for?",
    options: ["Reduced Instruction Set Computing", "Reduced Instruction Set Compiler", "Reduced Instruction Set Controller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does CISC stand for?",
    options: ["Complex Instruction Set Computing", "Complex Instruction Set Compiler", "Complex Instruction Set Controller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC stands for Reduced Instruction Set Computing.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC stands for Complex Instruction Set Computing.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC and CISC are the same types of ISA.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of ISA has a smaller number of instructions?",
    options: ["RISC", "CISC", "Both", "None of the above"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of ISA requires a more complex compiler?",
    options: ["RISC", "CISC", "Both", "None of the above"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why does RISC need a strong compiler?",
    options: ["To convert complex instructions into simpler ones", "To convert simple instructions into complex ones", "To optimize code for performance", "To manage memory efficiently"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which of the following is true about CISC ISAs?",
    options: ["They have a smaller number of instructions compared to RISC.", "They require simpler compilers compared to RISC.", "They execute instructions faster than RISC.", "They are more power-efficient than RISC."],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the primary difference between RISC and CISC ISAs in terms of instruction complexity?",
    options: ["RISC uses complex instructions, while CISC uses simple instructions.", "RISC uses fixed-length instructions, while CISC uses variable-length instructions.", "RISC uses less instructions, while CISC uses many instructions.", "RISC uses more addressing modes than CISC."],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC ISAs have a larger number of instructions compared to CISC ISAs.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC ISAs require more complex compilers compared to RISC ISAs.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC ISAs rely on hardware for instruction execution, while CISC ISAs rely on software.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC ISAs aim to reduce the number of instructions per program.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC ISAs are more suitable for applications with limited memory resources.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Instruction Decoder (ID)?",
    options: ["To understand the instruction", "To execute the instruction", "To store the instruction"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two ways for ID manufacturing?",
    options: ["Hard-Wired and Memory-Mapped", "Software and Hardware", "RISC and CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC needs a strong compiler to convert complex instructions into simpler ones.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Decoder (ID) is responsible for executing the instruction.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The two ways for ID manufacturing are Hard-Wired and Memory-Mapped.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a characteristic of Hard-Wired ID?",
    options: ["Consists of a set of logic gates", "Stores instructions in memory", "Takes time to search for instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a characteristic of Memory-Mapped ID?",
    options: ["Stores instructions in memory", "Consists of a set of logic gates", "Needs a strong compiler"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of ISA uses Hard-Wired ID?",
    options: ["RISC", "CISC", "Both RISC and CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard-Wired ID consists of a set of logic gates.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard-Wired consists of set of logic gates, so ID is fast.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hard-Wired consists of set of logic gates, so ID is slow.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Memory-Mapped ID stores instructions in memory.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC uses Memory-Mapped ID.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the size of the Instruction Decoder (ID) in RISC?",
    options: ["Bigger", "Smaller", "Same as CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the size of the ALU in CISC?",
    options: ["Big", "Small", "Same as RISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the cost of the software (compiler) in RISC?",
    options: ["High", "Low", "Same as CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Decoder (ID) in RISC is bigger than in CISC.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU in CISC is small.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The cost of the software (compiler) in RISC is high.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the performance time in RISC?",
    options: ["Time in conversion", "Time in search", "Time in execution"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the power consumption of the ALU in RISC?",
    options: ["Less", "High", "Same as CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the power consumption of the ID in CISC?",
    options: ["Less", "High", "Same as RISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The performance time in RISC is time in conversion.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The power consumption of the ALU in RISC is high.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The power consumption of the ID in CISC is less.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of ISA is used in embedded systems?",
    options: ["RISC", "CISC", "Both RISC and CISC"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which type of ISA is used in high-performance computers?",
    options: ["RISC", "CISC", "Both RISC and CISC"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is RISC used in embedded systems?",
    options: ["Because it needs less number of instructions", "Because it is high performance", "Because it is cheaper"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC is used in embedded systems.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CISC is used in high-performance computers.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RISC is used in embedded systems because it is high performance.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two types of Register files?",
    options: ["General Purpose Registers (GPR) and Special Purpose Registers (SPR)", "General Purpose Registers (GPR) and Specific Purpose Registers (SPR)", "General Purpose Registers (GPR) and Special Functions Registers (SFR)"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of General-Purpose Registers (GPR)?",
    options: ["To store data temporarily", "To store instructions permanently", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of data stored in GPR?",
    options: ["ALU results", "Program instructions", "Memory addresses"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "There are two types of Register files: General Purpose Registers (GPR) and Special Purpose Registers (SPR).",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "General Purpose Registers (GPR) store data temporarily.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Program instructions are stored in General Purpose Registers (GPR).",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Program Counter (PC)?",
    options: ["To hold the address of the next instruction", "To store data temporarily", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Stack Pointer (SP)?",
    options: ["To store the memory address of the last data element added to the stack", "To store the address of the next instruction", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the stack used for?",
    options: ["To store temporary data in a LIFO manner", "To store instructions permanently", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Program Counter (PC) holds the address of the next instruction.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Stack Pointer (SP) stores the memory address of the last data element added to the stack.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The stack is used to store instructions permanently.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Accumulator (ACC)?",
    options: ["To store results from the ALU temporarily", "To store instructions permanently", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Instruction Register (IR)?",
    options: ["To store instructions after fetching from memory", "To store data temporarily", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Process Status Word (PSW)?",
    options: ["To store flags representing the status of the last ALU operation", "To store instructions permanently", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Accumulator (ACC) stores results from the ALU temporarily.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Instruction Register (IR) stores instructions after fetching from memory.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Process Status Word (PSW) stores instructions permanently.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of jump instructions like JMP?",
    options: ["To alter the flow of execution", "To perform arithmetic computations", "To store data temporarily"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the Program Counter (PC) in jump instructions?",
    options: ["To point to a new address in memory", "To store the result of the last ALU operation", "To execute the instruction"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the increment instruction (INC)?",
    options: ["To subtract 1 from a register or memory location", "To add 1 to a register or memory location", "To multiply a register or memory location by 2"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Jump instructions like JMP alter the flow of execution.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The Program Counter (PC) points to a new address in memory in jump instructions.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The increment instruction (INC) subtracts 1 from a register or memory location.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the increment instruction (INC) in certain processor designs?",
    options: ["To add 1 to a register without invoking the ALU", "To subtract 1 from a register without invoking the ALU", "To multiply a register by 2 without invoking the ALU"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of specialized hardware in certain processor designs?",
    options: ["To perform simple operations like incrementing a register without invoking the ALU", "To perform complex operations like multiplication without invoking the ALU", "To store data temporarily"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the ALU in certain processor designs?",
    options: ["To perform complex computations", "To store data temporarily", "To execute instructions"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The increment instruction (INC) adds 1 to a register without invoking the ALU in certain processor designs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Specialized hardware performs simple operations like incrementing a register without invoking the ALU in certain processor designs.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The ALU performs simple operations like incrementing a register in certain processor designs.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of memory in a computing system?",
    options: ["To store data and instructions", "To execute instructions", "To perform arithmetic computations"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the width of the memory register in an 8-bit architecture?",
    options: ["8 bits", "16 bits", "32 bits"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the maximum size of operands in the ALU in an 8-bit architecture?",
    options: ["8 bits", "16 bits", "32 bits"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Memory stores data and instructions in a computing system.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The width of the memory register in an 8-bit architecture is 16 bits.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The maximum size of operands in the ALU in an 8-bit architecture is 8 bits.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the solution if the two operands are larger than 8 bits in an 8-bit architecture?",
    options: ["Slicing", "Multiplication", "Division"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the size of each location in an 8-bit architecture?",
    options: ["1 byte", "2 bytes", "4 bytes"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What value does each bit hold in an 8-bit architecture?",
    options: ["0 or 1", "0 or 2", "1 or 2"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Slicing is the solution if the two operands are larger than 8 bits in an 8-bit architecture.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Each location in an 8-bit architecture is 2 bytes.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Each bit holds a value of 0 or 1 in an 8-bit architecture.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does accessing the memory mean?",
    options: ["Reading or writing on it", "Executing instructions", "Performing arithmetic computations"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is access time in memory?",
    options: ["The time it takes to read or write on memory", "The time it takes to execute instructions", "The time it takes to perform arithmetic computations"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Which access time is bigger, write or read?",
    options: ["Write access time", "Read access time", "Both are the same"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Accessing the memory means reading or writing on it.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Access time is the time it takes to execute instructions.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Write access time is bigger than read access time.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How does the clock work with a D Flip-Flop?",
    options: ["It stores multiple bits of data", "It decides when to store data", "It deletes data", "It increases voltage"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How are CPU and memory connected?",
    options: ["Using a bus set", "Using a single wire", "Using a direct connection", "Using a wireless connection"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the components of the bus set?",
    options: ["Data bus, power bus, control bus", "Data bus, address bus, control bus", "Data bus, signal bus, control bus", "Data bus, voltage bus, control bus"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of the address bus?",
    options: ["To transfer data", "To determine the location in memory", "To control the flow of information", "To manage power consumption"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "CPU and memory are connected using a single wire.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The bus set includes a data bus, address bus, and control bus.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The address bus determines the location in memory that the processor will read from or write to.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the data bus contain?",
    options: ["The address of the memory location", "The contents read from or written to the memory location", "The control signals", "The power supply"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the control bus manage?",
    options: ["The data transfer speed", "The power consumption", "The information flow between components", "The voltage levels"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the control bus indicate?",
    options: ["The data transfer speed", "The power consumption", "Whether the operation is a read or a write", "The voltage levels"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The data bus contains the address of the memory location.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The control bus manages the information flow between components.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The control bus indicates whether the operation is a read or a write.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the bus size?",
    options: ["The number of wires in the bus", "The length of the bus", "The number of data bits transferred at once", "The voltage level of the bus"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How many wires can a bus have?",
    options: ["8 or 16", "16 or 32", "32 or 64", "64 or 128"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the bus size determine?",
    options: ["The voltage level", "The power consumption", "The amount of data transferred at once", "The length of the bus"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The bus size is the number of wires in the bus.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A bus can have 16 or 32 wires.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The bus size determines the amount of data transferred at once.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of a bus size?",
    options: ["8-bit", "32-bit", "64-bit"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does a 32-bit bus size indicate?",
    options: ["The bus has 8 wires", "The bus has 16 wires", "The bus can transfer 32 bits of data at once", "The bus can transfer 64 bits of data at once"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does a 64-bit bus size indicate?",
    options: ["The bus has 8 wires", "The bus has 16 wires", "The bus can transfer 32 bits of data", "The bus can transfer 64 bits of data at once"],
    correctAnswer: 3,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A 32-bit bus size means the bus can transfer 32 bits of data at once.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A 64-bit bus size means the bus can transfer 32 bits of data at once.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The bus size is unrelated to the amount of data transferred.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of a load operation?",
    options: ["Reading data from memory", "Writing data to memory", "Increasing voltage", "Decreasing current"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of a store operation?",
    options: ["Reading data from memory", "Writing data to memory", "Increasing voltage", "Decreasing current"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is read time generally less than write time?",
    options: ["Read operation is just reading", "Write operation is just writing", "Read operation increases voltage", "Write operation decreases current"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Read time is generally less than write time.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Write operation may have to clear data in memory first.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Read operation is more complex than write operation.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What determines memory size?",
    options: ["Data bus", "Control bus", "Address line in address bus", "Power supply"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the three key advantages of memory?",
    options: ["Voltage, current, heat", "Capacity, speed, organization", "Size, weight, color", "Power, efficiency, cost"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How can memory be organized if you have only 4K memory but need 16K?",
    options: ["Increase voltage", "Decrease current", "Connect four 4K memories", "Generate heat"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Address line in address bus determines memory size.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The three key advantages of memory are capacity, speed, and organization.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Memory cannot be organized to increase capacity.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the role of a port in a microcontroller?",
    options: ["Increase voltage", "Decrease current", "Deal with the external world", "Generate heat"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does the CPU need to deal with the external world?",
    options: ["Port", "Bus", "Memory", "Clock"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of a device that a port can deal with?",
    options: ["LED", "Capacitor", "Resistor", "Inductor"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A port in a microcontroller allows it to deal with the external world.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CPU does not need a port to deal with the external world.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "An LED is an example of a device that a port can deal with.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is a transistor (MOSFET) used for?",
    options: ["Increase voltage", "Decrease current", "Logic operations", "Generate heat"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How many pins does a MOSFET have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the pins of a MOSFET called?",
    options: ["Source, Gate, Drain", "Source, Gate, Drain", "Source, Gate, Base", "Source, Gate, Emitter"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A MOSFET is used for logic operations.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A MOSFET has 3 pins.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The pins of a MOSFET are called Source, Gate, Base.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the three types of memory?",
    options: ["Volatile, Non-Volatile, Hybrid", "Static, Dynamic, Hybrid", "Read, Write, Hybrid", "Fast, Slow, Hybrid"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of volatile memory?",
    options: ["RAM", "ROM", "Hybrid", "Flash"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is an example of non-volatile memory?",
    options: ["RAM", "ROM", "Hybrid", "Flash"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Volatile memory retains data when power is disconnected.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Non-volatile memory retains data when power is disconnected.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hybrid memory is a mix between RAM and ROM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is RAM also known as?",
    options: ["Read& Write Memory", "Read-Only Memory", "Static Memory", "Dynamic Memory"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is RAM faster than ROM?",
    options: ["Because of the components it consists of", "Because it uses more power", "Because it generates more heat", "Because it is smaller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the primary function of RAM?",
    options: ["Increase voltage", "Decrease current", "Store data temporarily", "Generate heat"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RAM is also known as Read& Write Memory.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RAM is slower than ROM.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "RAM stores data temporarily.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the two types of RAM?",
    options: ["SRAM and DRAM", "Static and Dynamic", "Read and Write"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is DRAM based on?",
    options: ["Transistor", "Capacitor", "Resistor", "Inductor"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is SRAM based on?",
    options: ["Transistor", "Capacitor", "Resistor", "Inductor"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "There are two types of RAM: SRAM and DRAM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DRAM is based on capacitors.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SRAM is based on capacitors.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the primary issue with using capacitors in DRAM?",
    options: ["They lose capacitance over time", "They increase voltage", "They decrease current", "They generate heat"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is needed to prevent charge leakage in DRAM?",
    options: ["Voltage regulator", "Refreshment circuit", "Current limiter", "Heat sink"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Who has the highest priority to access memory in DRAM?",
    options: ["Refreshment circuit", "CPU", "Data bus"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Capacitors in DRAM lose capacitance over time.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A refreshment circuit is needed to prevent charge leakage in DRAM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "The CPU has the highest priority to access memory in DRAM.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is DRAM slower than SRAM?",
    options: ["Because DRAM has higher priority to access memory than CPU", "Because DRAM uses more power", "Because DRAM generates more heat", "Because DRAM is smaller"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the advantages of DRAM?",
    options: ["High cost, low density, high power consumption", "Low cost, high density, low power consumption", "High cost, high density, high power consumption", "Low cost, low density, low power consumption"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What are the disadvantages of SRAM?",
    options: ["Low cost per bit", "High density", "High cost per bit", "Low power consumption"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DRAM is slower than SRAM because it has higher priority to access memory than CPU.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "DRAM has low cost per bit and high density.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SRAM has low cost per bit.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the primary advantage of SRAM over DRAM?",
    options: ["Lower cost per bit", "Higher density", "Faster speed", "Lower power consumption"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Why is SRAM used in embedded systems despite its high cost?",
    options: ["Because it is faster", "Because it is cheaper", "Because it consumes more power", "Because it generates more heat"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "How many transistors does a flip-flop in SRAM use?",
    options: ["2 transistors", "4 transistors", "6 transistors", "8 transistors"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SRAM is faster than DRAM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "SRAM is used in embedded systems because it is cheaper.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "A flip-flop in SRAM uses 6 transistors.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What type of memory retains data when power is disconnected?",
    options: ["Volatile memory", "Non-volatile memory", "Hybrid memory", "Dynamic memory"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What type of memory does not retain data when power is disconnected?",
    options: ["Non-volatile memory", "Hybrid memory", "Volatile memory", "Static memory"],
    correctAnswer: 2,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Volatile memory retains data when power is disconnected.",
    options: ["True", "False"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Non-volatile memory retains data when power is disconnected.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "Hybrid memory combines characteristics of both RAM and ROM.",
    options: ["True", "False"],
    correctAnswer: 0,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Read& Write Memory", "Random Access Memory"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What type of memory is ROM?",
    options: ["Volatile memory", "Non-volatile memory", "Temporary memory", "Cache memory"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  },
  {
    question: "What is the access time of ROM compared to RAM?",
    options: ["Faster", "Slower", "Same", "Variable"],
    correctAnswer: 1,
    userAnswer: null,
    isCorrect: null
  }
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
