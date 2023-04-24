export default function useSubcriber(callbackOnTrue:Function, callbackOnFalse:Function) {
    
    return (result: boolean, data: any = null) => {
        (result) ? callbackOnTrue(data) : callbackOnFalse(data);    
    }
}