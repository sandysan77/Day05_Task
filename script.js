class Movie{

    constructor(title,studio,rating){
            this.title = title;
            this.studio = studio;
            if(rating==null){
                this.rating ='PG';
            }else{this.rating =rating;
            }
            
    }


getPG(){
    return `${this.title} and ${this.studio} and ${this.rating}`
}


}
var access = new Movie('Casino Royale','Eon Productions','PG13');

console.log(access.getPG());