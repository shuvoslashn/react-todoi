import { useState } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import TodoButton from './components/TodoButton';
import TodoItem from './components/TodoItem';

const App = () => {

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div className='w-96 md:w-1/2 lg:w-1/3 p-8 shadow-xl bg-white'>
                <Counter />
                <Header />
                <TodoItem text='wake up' />
                <TodoItem completed={true} text='eat' />
                <TodoItem text='read' />
                <TodoItem text='code' />
                <TodoItem text='sleep' />
                <TodoButton />
            </div>
        </div>
    );
};

export default App;
