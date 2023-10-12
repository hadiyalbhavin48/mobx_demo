import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

export const Count = observer(() =>{
    const {
        rootStore: {counterStore}
    } = useStore();

    // increment
    const onIncrement = () =>{
        counterStore.increment();
    };

    // decrement

    const onDecrement = () =>{
        counterStore.decrement();
    }
    return (
        <div>
            Count: {counterStore.getCounterValue}
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    )
});