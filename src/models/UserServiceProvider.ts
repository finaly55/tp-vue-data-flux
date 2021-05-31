class Todo {
    private readonly title: string
    private isDone: boolean

    constructor(label: string, isDone = false) {
        this.title = label
        this.isDone = isDone
    }

    public get label(): string {
        return this.title
    }

    public toggle(): void {
        this.isDone = !this.isDone
    }
}

class TodoList {
    private readonly items: Array<Todo>

    constructor() {
        this.items = []
    }

    public length(): number {
        return this.items.length
    }

    public add(todo: Todo): void {
        this.items.push(todo)
    }

    public toggle(todo: Todo): void {
        for (const item of this.items) {
            if (todo.label === item.label) {
                item.toggle()
            }
        }
    }
}

export default class UserServiceProvider {
    public login?: string
    public avatarURL?: string
    public todoList?: TodoList
    public darkMode?: boolean
    public lang?: string

    constructor(login: string, avatarURL: string) {
        this.login = login
        this.avatarURL = avatarURL
        this.todoList = new TodoList()
        this.darkMode = false
        this.lang = 'fr'
    }
}

export { Todo, TodoList }