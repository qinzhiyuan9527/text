const app = new Vue({
	el: '#app',
	data: {
		index: '',
		inputText: '',
		todos: [
			{ id: 1, title: '吃饭', completed: false },
			{ id: 2, title: '笑', completed: true },
			{ id: 3, title: '大笑', completed: true },
			{ id: 4, title: '傻笑', completed: false },
		],
		currentEdit:null
	},
	methods: {
		handleAdd() {
			let input = this.inputText.trim();
			if (!input.length) {
				return;
			};
			this.todos.push({
				id: Math.random(),
				title: input,
				completed: false
			});
			this.inputText = '';
		},

		handleDelete(index) {
			this.todos.splice(index, 1);
		},

		// 删除所有已完成任务项
		handleClearanceCompleted() {
			let todos = this.todos;
			for(let i = 0; i < todos.length; i++) {
				if(todos[i].completed) {
					todos.splice(i,1);
					i--;
				}
			}
		},

		//显示所有未完成项
		handleAllUncompletedItems() {
			return this.todos.filter(item => item.completed === false).length;
			
		},

		//保存编辑
		handleSaveEdit(item,e) {
			item.title = e.target.value;
			this.currentEdit = null
		},

		//退出编辑
		handleCancelEdit() {
			this.currentEdit = null
		}




	}

});