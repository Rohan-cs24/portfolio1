// Todo App JavaScript
class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.nextId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
        
        this.initializeElements();
        this.attachEventListeners();
        this.render();
    }

    initializeElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.taskCount = document.getElementById('taskCount');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        this.clearAllBtn = document.getElementById('clearAll');
    }

    attachEventListeners() {
        // Add todo
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Clear buttons
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());

        // Focus input on page load
        this.todoInput.focus();
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            this.showNotification('Please enter a task!', 'error');
            return;
        }

        if (text.length > 100) {
            this.showNotification('Task is too long! Max 100 characters.', 'error');
            return;
        }

        const todo = {
            id: this.nextId++,
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(todo); // Add to beginning
        this.todoInput.value = '';
        this.saveTodos();
        this.render();
        this.showNotification('Task added successfully!', 'success');
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
            
            const message = todo.completed ? 'Task completed!' : 'Task marked as active!';
            this.showNotification(message, 'success');
        }
    }

    deleteTodo(id) {
        const todoElement = document.querySelector(`[data-id="${id}"]`);
        if (todoElement) {
            todoElement.classList.add('removing');
            
            setTimeout(() => {
                this.todos = this.todos.filter(t => t.id !== id);
                this.saveTodos();
                this.render();
                this.showNotification('Task deleted!', 'success');
            }, 300);
        }
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const todoElement = document.querySelector(`[data-id="${id}"]`);
        const textElement = todoElement.querySelector('.todo-text');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'todo-text editing';
        input.value = todo.text;
        input.maxLength = 100;
        
        textElement.replaceWith(input);
        input.focus();
        input.select();

        const saveEdit = () => {
            const newText = input.value.trim();
            
            if (newText === '') {
                this.showNotification('Task cannot be empty!', 'error');
                input.focus();
                return;
            }

            if (newText.length > 100) {
                this.showNotification('Task is too long! Max 100 characters.', 'error');
                input.focus();
                return;
            }

            todo.text = newText;
            this.saveTodos();
            this.render();
            this.showNotification('Task updated!', 'success');
        };

        const cancelEdit = () => {
            this.render();
        };

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') cancelEdit();
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear!', 'info');
            return;
        }

        if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveTodos();
            this.render();
            this.showNotification(`${completedCount} completed task(s) deleted!`, 'success');
        }
    }

    clearAll() {
        if (this.todos.length === 0) {
            this.showNotification('No tasks to clear!', 'info');
            return;
        }

        if (confirm(`Are you sure you want to delete all ${this.todos.length} task(s)?`)) {
            this.todos = [];
            this.saveTodos();
            this.render();
            this.showNotification('All tasks deleted!', 'success');
        }
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const filteredTodos = this.getFilteredTodos();
        const activeTodos = this.todos.filter(t => !t.completed);
        
        // Update task count
        const count = activeTodos.length;
        this.taskCount.textContent = count;
        
        // Clear todo list
        this.todoList.innerHTML = '';
        
        if (filteredTodos.length === 0) {
            this.renderEmptyState();
            return;
        }

        // Render todos
        filteredTodos.forEach(todo => {
            const todoElement = this.createTodoElement(todo);
            this.todoList.appendChild(todoElement);
        });
    }

    renderEmptyState() {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        
        let message, icon;
        switch (this.currentFilter) {
            case 'active':
                icon = 'fa-check-circle';
                message = 'No active tasks! Great job!';
                break;
            case 'completed':
                icon = 'fa-tasks';
                message = 'No completed tasks yet.';
                break;
            default:
                icon = 'fa-clipboard-list';
                message = 'No tasks yet. Add one above!';
        }
        
        emptyState.innerHTML = `
            <i class="fas ${icon}"></i>
            <h3>${message}</h3>
            <p>Your tasks will appear here</p>
        `;
        
        this.todoList.appendChild(emptyState);
    }

    createTodoElement(todo) {
        const todoElement = document.createElement('div');
        todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        todoElement.dataset.id = todo.id;
        
        todoElement.innerHTML = `
            <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" 
                 onclick="todoApp.toggleTodo(${todo.id})"></div>
            <div class="todo-text" onclick="todoApp.editTodo(${todo.id})">${this.escapeHtml(todo.text)}</div>
            <div class="todo-actions">
                <button class="action-btn edit-btn" onclick="todoApp.editTodo(${todo.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="todoApp.deleteTodo(${todo.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        return todoElement;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideInNotification 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        
        // Colors based on type
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';
                break;
            case 'info':
                notification.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
                break;
            default:
                notification.style.background = 'linear-gradient(45deg, #95a5a6, #7f8c8d)';
        }
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInNotification {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutNotification {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        if (!document.querySelector('style[data-notification]')) {
            style.setAttribute('data-notification', 'true');
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutNotification 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.todoApp = new TodoApp();
});

// Add some keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to add todo
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        todoApp.addTodo();
    }
    
    // Escape to clear input
    if (e.key === 'Escape' && document.activeElement === todoApp.todoInput) {
        todoApp.todoInput.value = '';
    }
});
