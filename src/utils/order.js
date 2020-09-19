
export function orderByDate(list) {
  // Last added is on top
  return list.sort((a, b) => (a.date < b.date) ? 1 : -1);
}

export function orderByVote(list, type) {
  if ( type === 'most') {
    // Most voted is on top and if votes are equal then last vote date is on top
    return list.sort((a, b) => (a.vote < b.vote) ? 1 : (a.vote === b.vote) ? ((a.lastVoteDate < b.lastVoteDate) ? 1 : -1) : -1 );
  } else {
    // Less voted is on top and if votes are equal then last vote date is on top
    return list.sort((a, b) => (a.vote > b.vote) ? 1 : (a.vote === b.vote) ? ((a.lastVoteDate < b.lastVoteDate) ? 1 : -1) : -1 );
  }
}

