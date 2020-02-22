import { Component } from "../core/component";
import {apiService} from "../services/api.service";
import { renderPost } from "../templates/post.template";

export class FavoriteComponent extends Component{
    constructor(id, options){
        super(id);
        this.loader = options.loader;
    }

    init() {
        this.$el.addEventListener("click", onFavoriteClick.bind(this));
    }
    onShow() {        
        const list = JSON.parse(localStorage.getItem('favorites'));
        this.loader.show();
        const response = renderList(list);
        this.$el.insertAdjacentHTML('afterbegin', response);
        this.loader.hide();
    }

    onHide() {
        this.$el.innerHTML = '';
    }
}

function renderList(list = []) {
    if (list.length){
        return `
            <ul>
                ${list.map(i => `<li> <a href="#" class="favorite-link">${i}</li></a>`).join(' ')}
            <ul>
            `;
    }
    return `Извините, но данных нет`;
}

async function onFavoriteClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("favorite-link")){
        this.$el.innerHTML = '';
        const postId = event.target.textContent;
        const post = await apiService.fetchPostById(postId);
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withButton: false}))

    }
}
