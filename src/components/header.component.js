import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id){
        super(id);
    }

    init(){
       const btn = document.querySelector(".js-header-start");
       btn.addEventListener("click", btnHandler.bind(this));
       if (localStorage.getItem("visited")){
            this.hide();
       }

    }

}

function btnHandler(){
    localStorage.setItem("visited", JSON.stringify(true));
    this.hide();
}

function btnHandldsfer(){
    localStorage.setItem("visited", JSON.stringify(true));
    this.hide();
}