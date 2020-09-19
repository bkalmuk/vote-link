
export function orderByDate(list) {
  // Last added is on top
  return list.sort((a, b) => (a.date < b.date) ? 1 : -1);
}

export function orderByVote(list, type) {
  if (type === 'most') {
    // Most voted is on top
    return list.sort((a, b) => (a.vote < b.vote) ? 1 : -1);
  } else if (type === 'less') {
    // Less voted is on top
    return list.sort((a, b) => (a.vote > b.vote) ? 1 : -1);
  } else return list;
}
