class GerenciadorTarefa {
    constructor() {
        this.campo = document.querySelector('.campo');
        this.botaoAdd = document.querySelector('.btn-adicionar');
        this.tarefas = [];
    }

    eventos() {
        document.addEventListener('click', (event) => {
            const el = event.target;

            console.log(el)
            if(el.classList.contains('btn-adicionar')) {
                this.addTarefa();
            }
            if(el.classList.contains('btn-apagar')) {        
                this.apagaTarefa(el);             
            }
        })

        document.addEventListener('keypress', (event) => {
            const el = event.target;
            const keyName = event.key;

            if(keyName == 'Enter'){
                this.addTarefa();
            }
        })
        
    }

    addTarefa() {
        if(this.campo.value == "") {
            return alert('Campo está em branco.');
        }

        this.tarefas.push(this.campo.value);   
        this.createElement(this.tarefas);
    }

    apagaTarefa(el) {
        el.parentNode.remove();

        this.tarefas = [];
        for(let tarefa of document.querySelectorAll('.lista')) {
            this.tarefas.push(tarefa.innerText);
        }

        console.log(this.tarefas)
    }


    createElement(tarefa) {
        const section = document.querySelector('section');
        const button = document.createElement('button');
        const span = document.createElement('span')
        const div = document.createElement('div');      

        span.innerText = this.campo.value;
        div.appendChild(span)
        span.classList.add('lista');

        button.innerText = 'Remover'
        button.classList.add('btn-apagar');
        div.appendChild(button);

        section.appendChild(div);
    }
}
const gerenciaTf = new GerenciadorTarefa();
gerenciaTf.eventos();