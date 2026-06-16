export type Project = {
    name: string
    points: string[]
    emphasized?: boolean
}

export type Book = {
    title: string
    author: string
}

export const HOME_LEAD = 'Hi This is Kenny Kim!'

export const NEWS_ITEMS = ['Deciding Graduate School for MSCS, hehehehe']

export const PROJECTS: Project[] = [
    {
        name: 'SSA form IR Compiler',
        emphasized: true,
        points: ['Compiler Stuff for SSA form IR Compiler'],
    },
    {
        name: 'Project1:',
        points: ['Do something something'],
    },
]

export const BOOKS: Book[] = [
    { title: 'Rust Atomics and Locks', author: 'Mara Bos' },
]
