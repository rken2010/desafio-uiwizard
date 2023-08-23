import { error } from "console";
import { title } from "process";

const db:string = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`

export const api = {
    getId: fetch(db)
        .then(res => res.json() as Promise<number[]>),
    getPost: 
        async(id:number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(res => res.json() as Promise<{title:string; url:string; by:string}>)
            
}