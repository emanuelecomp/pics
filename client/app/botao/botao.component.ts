import { Component, Input, EventEmitter , Output} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})

export class BotaoComponent{

    @Input() nome: string = 'OK';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    
    executaAcao(){
        if(confirm('Deseja excluir?')){
            this.acao.emit(null);
        }
    }
}