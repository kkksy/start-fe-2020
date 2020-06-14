import { render } from './html-render';
import formInput from './form-input';
import './todos.css';
import { loadData } from './data-manager';

const $result = document.querySelector('#result');

loadData((todos) => {

    $result.addEventListener('click', (event) =>{
        const { className } = event.target;
        if(className === 'delete') {
            
            const { index } = event.target.parentElment.dataset.index;
            todos.splice(index, 1);
            render(todos);
          
        }
    
        else if(className === 'target-checked'){
    
            const { index } = event.target.parentElment.dataset.index;
            todos[index].isDone = !todos[index].isDone;
            render(todos);
        }
    });
    
    
    formInput.init(todos);
    render(todos);
});



