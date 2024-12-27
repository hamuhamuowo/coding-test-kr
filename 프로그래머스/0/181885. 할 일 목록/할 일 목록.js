function solution(todo_list, finished) {
    return todo_list.map((todo, i) => (
        todo = finished[i] ? "" : todo
    )).filter(todo => todo !== "");
}