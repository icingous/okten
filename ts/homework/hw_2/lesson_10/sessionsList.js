document.addEventListener('DOMContentLoaded', function (e) {
    var sessions = getSessions();
    displaySessions(sessions);
});
function getSessions() {
    var sessions = [];
    var storedSessions = localStorage.getItem('sessionsList');
    if (storedSessions) {
        sessions = JSON.parse(storedSessions);
    }
    return sessions;
}
function displaySessions(sessions) {
    var el = document.getElementById('sessions_list');
    if (!el)
        return;
    var sl = localStorage.getItem('sessionsList');
    if (!sl)
        return;
    var items = sessions === null || sessions === void 0 ? void 0 : sessions.map(function (item) {
        var li = document.createElement('li');
        li.innerText = new Date(item).toISOString();
        return li;
    });
    el.append.apply(el, items);
}
