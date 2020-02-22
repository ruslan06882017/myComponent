import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {CreateComponent}  from './components/create.component'
import {PostsComponent} from './components/posts.component'
import {FavoriteComponent} from './components/favorite.component'
import {LoaderComponent} from './components/loader.component';

new HeaderComponent('header');
const loader = new LoaderComponent('loader');
const nav = new NavigationComponent('navigation');
const posts = new PostsComponent('posts', {loader});
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite'); 

nav.registerTabs([
    {name: "create", component: create},
    {name: "posts", component: posts},
    {name: "favorite", component: favorite}
])
