export function refresh(parent, page){
    while(parent.firstChild) parent.removeChild(parent.lastChild);
    parent.appendChild(page)
}