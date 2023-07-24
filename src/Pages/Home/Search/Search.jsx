import React from 'react';

const Search = () => {
    return (
         <div className='text-center py-24'>
            <input type="text" name='collegeName' id='' placeholder='Search the College Name ' className='mr-2 md:px-20 border-collapse py-2 rounded-lg' />
            <button className='bg-yellow-600 px-5 py-2 rounded-lg'><input type="submit" value="search" /></button>
         </div>
    );
};

export default Search;