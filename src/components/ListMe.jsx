export default function ListMe() {
    const users = ['John', 'Joe', 'Jane', 'Jill', 'Jack'];

    //Array map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //Reminder that map() creates a new array populated with the results of calling a provided function on every element in the calling array.
    //https://react.dev/learn/rendering-lists

    const listItems = users.map((user, index) => {
        return <li key={index}>{user}</li>;
        //The reason you need to include a key attribute is that it helps React identify which items have changed, are added, or are removed. 
        // This improves the efficiency of the rendering process and helps maintain the state of components.
    })
    
    return (
        <>
        {listItems}
        </>
    );
}