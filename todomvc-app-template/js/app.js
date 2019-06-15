const app = new Vue({
	el : '#app',
	data : {
		index : '',
		inputText:'',
		todos : [
			{id:1,title:'吃饭',completed:false},
			{id:1,title:'笑',completed:true},
			{id:1,title:'大笑',completed:true},
			{id:1,title:'傻笑',completed:false},
		]
	},
	methods : {
		handleAdd() {
			let input = this.inputText.trim();
			if(!input.length) {
				return;
			};
			this.todos.push({
				id: Math.random(),
				title : input,
				completed : false
			});
			this.inputText = '';
		},
		handleDelete(index) {
			this.todos.splice(index,1);
		}
	}

});