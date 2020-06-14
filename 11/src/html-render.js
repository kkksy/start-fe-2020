import {saveData} from './data-manager';
const $result = document.querySelector('#result');



export function render(data) {
   
    saveData(data);
    const html = todos.map((todo, index) => {
        return `<li data=index="${index}"> 
        <button class="delete">×</button>
        <input type="checkbox" class="toggle-checked" ${
            todo.isDone ? 'checkded':''
        }/>
        <span class="text">${todo.text}</span>
      </li>`;
    });

    
$result.innerHTML = `<ul>${html.join('')}</ul>`;

}

export { render };