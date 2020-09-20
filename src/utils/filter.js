
export function paginationFilter(list, activePage) {
   // Filtering is for showing only 5 items in the page by the pagination changes
  let linkListFiltered = list.filter((e,i) => i >= (activePage - 1) * 5);
  return linkListFiltered.filter((e,i) => i < 5); 
}