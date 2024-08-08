export default function reducer(state, {type, payload:{item}}) {
    switch(type) {
      case "remove_item": {
        return state.filter((s)=>s.id !==id);
      }
    }
    
    
}