import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import { GithubUserDetails } from "../Components/GithubUserDetails";

export class CounterStore{
    count : number = 1;
    rootStore : IRootStore;

    constructor(rootStore: IRootStore){
        makeObservable(this, {
            count : observable,
            increment : action,
            decrement : action,
            getCounterValue : computed
        });
        this.rootStore = rootStore;
    }
   
    // Action
    increment = () =>{
        this.count++;
    }

    decrement = () =>{
        console.log(this.rootStore.githubUserDetails);
        this.count--;
    }

    // Computed Value
    get getCounterValue(){
        return this.count;
    }

}