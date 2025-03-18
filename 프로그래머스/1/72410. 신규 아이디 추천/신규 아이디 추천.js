function solution(new_id) {
    let confirmId = new_id;
    // 1
    confirmId = confirmId.toLowerCase();
    // 2
    confirmId = confirmId.replace(/[^a-z0-9._-]/g, '');
    // 3
    confirmId = confirmId.replace(/\.\.+/g, '.');
    // 4
    confirmId = confirmId.replace(/(^\.)|(\.$)/, '');
    // 5
    confirmId = confirmId === '' ? 'a' : confirmId;
    // 6
    if(confirmId.length >= 16) {
        confirmId = confirmId.slice(0, 15);
    }
    confirmId = confirmId.replace(/(^\.)|(\.$)/, '');
    // 7
    if(confirmId.length <= 2) {
        while(confirmId.length !== 3) {
            confirmId += confirmId[confirmId.length-1];
        }
    }
    return confirmId;
}