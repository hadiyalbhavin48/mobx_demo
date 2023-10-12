    import { CounterStore } from "./CountStore";
import { GithubUserDetailsStore } from "./GithubUserDetailsStore";

    export interface IRootStore{
        counterStore: CounterStore;
        githubUserDetails: GithubUserDetailsStore;
    }

    export class RootStore implements IRootStore{
        counterStore: CounterStore;
        githubUserDetails: GithubUserDetailsStore;

        constructor(){
            this.counterStore = new CounterStore(this)
            this.githubUserDetails = new GithubUserDetailsStore(this)
        }
    }