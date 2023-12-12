import React from 'react';
import lang from '../hooks/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].serachPlaceholder} />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg m-4 col-span-3">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
