const TodoItem = (props) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
                {props.completed ? (
                    <input type='checkbox' disabled />
                ) : (
                    <input type='checkbox' />
                )}
                {props.completed ? (
                    <p className='font-semibold line-through'>{props.text}</p>
                ) : (
                    <p className='font-semibold'>{props.text}</p>
                )}
            </div>
            <p className='text-2xl pb-2 cursor-pointer'>...</p>
        </div>
    );
};

export default TodoItem;
