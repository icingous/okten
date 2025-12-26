document.addEventListener('DOMContentLoaded', (e) => {
  const sessions = getSessions();

  displaySessions(sessions);
});

function getSessions() {
  return JSON.parse(localStorage.getItem('sessionsList'));
}

function displaySessions(sessions) {
  const el = document.getElementById('sessions_list');

  if (!el) return;

  const sl = localStorage.getItem('sessionsList');

  if (!sl) return;

  const items = sessions?.map((item) => {
    const li = document.createElement('li');

    li.innerText = new Date(item).toISOString();

    return li;
  });

  el.append(...items);
}
