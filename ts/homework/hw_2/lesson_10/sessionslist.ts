document.addEventListener('DOMContentLoaded', (e) => {
  const sessions = getSessions();

  displaySessions(sessions);
});

function getSessions(): number[] {
  let sessions: number[] = [];
  const storedSessions = localStorage.getItem('sessionsList');

  if (storedSessions) {
    sessions = JSON.parse(storedSessions) as number[];
  }

  return sessions;
}

function displaySessions(sessions: number[]) {
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
