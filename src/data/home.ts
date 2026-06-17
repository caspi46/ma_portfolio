export type Project = {
    name: string
    points: string[]
    emphasized?: boolean
}

export type Book = {
    title: string
    author: string
}

export type Experience = {
    role: string
    company: string
    period: string
    points: string[]
}

export const HOME_LEAD = 'Hi This is Kenny Kim!'

export const NEWS_ITEMS = ['Decided to stay in UC Irvine for MS degree in CS']

export const EXPERIENCE: Experience[] = [
    {
        role: 'Undergraduate Research Assistant',
        company: 'UC Irvine — PL & Systems Lab',
        period: 'Apr 2025 – Present',
        points: [
            'Developed a source-to-source C-to-Rust translation framework focusing on ownership and mutability inference',
            'Designed the constraint-based architecture for mutability detection analysis across MIR/HIR representation', 
        ],
    },
    {
        role: 'Student Software Engineer',
        company: 'SoundEthics',
        period: 'Sep 2025 – Mar 2026',
        points: [
            'Implemented authentication and (single/multiple) audio file upload workflows using RESTful APIs',
            'Designed PostgreSQL schemas (users, audio files, and folders) on Google Cloud SQL',
        ],
    },
]

export const PROJECTS: Project[] = [
    {
        name: 'SSA form IR Compiler',
        emphasized: true,
        points: ['Designed and implemented SSA IR construction with automatic phi-function insertion at control flow join points',
            'Build recursive descent parser handling full expression grammar, function declarations, and nested control flow',
            'Implemented common subexpression elimination and copy propagation optimizations using per-block instruction storage tables and graph dominator analysis',
        ],
    },
    {
        name: 'Crux-To-x86 Compiler',
        points: ['Designed a typed intermediate representation (IR), bridging high-level Crux sematics and x86 assembly',
            'Lowered control flow, expressions, and function calls into IR for analysis and code generation',
            'Generated x86 assemmbly with stack frame management and register allocation',
        ],
    },
    {
        name: 'Sports Scout App Generator',
        points: ['Architected a multi-agent orchestration pipeline using MCP for automated code analysis, generation, and testing',
            'Implemented analyzer-developer-tester agent feedback loops to iteratively refine generated applications',
        ],
    },
]

export const BOOKS: Book[] = [
    { title: 'Rust Atomics and Locks', author: 'Mara Bos' },
]
