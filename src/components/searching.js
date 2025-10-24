import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(
        ['skipEmptyTargetValues'], 
        [rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)] 
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        if (action && action.name === 'reset') {
            const searchInput = document.querySelector(`[data-name="${searchField}"]`);
            if (searchInput) {
                searchInput.value = '';
            }
            state[searchField] = '';
        }
        
        return data.filter(row => compare(row, state));
    }
}