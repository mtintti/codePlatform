import { useState } from 'react';
import { LANG_VERSION } from '../../../constraits';

const langs = Object.entries(LANG_VERSION);
const CURR_COLOR = "text-blue-400";

const LanguageSelect = ({lang, onSelect}) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    }

    return (
        /*<div>
            <p className='font-lg mb-2'>Language:</p>
            <div className='relative inline-block'>
                <button className='bg-gray-100 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-200'
                onClick={toggle}>
                    Java
                </button>
                <div className={`${ open ? "block" : "hidden" } hidden absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg`}>
                    <div className='py-1'>
                        {lang.map(([lang, vers]) => (
                            <span className=' px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg'
                                key={lang}>{lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>*/

        <div>
            <div className="relative inline-block">
                <button
                    className="bg-gray-100 mb-4 font-medium rounded-md px-4 py-2 text-gray-700 hover:bg-slate-300  hover:scale-110"
                    onClick={toggle}
                >
                    {lang}
                </button>

                <div
                    className={`${open ? "block" : "hidden"
                        } absolute z-20 w-48 bg-white border border-gray-200 rounded-lg shadow-lg`}
                >
                    <div className="py-1">
                        {langs.map(([langs, vers]) => (
                            <div
                                key={langs}
                                onClick={() => {onSelect(langs);
                                    setOpen(false);
                                }}
                                //className={`px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer ${lang === langs ? CURR_COLOR + "bg-gray-900" : "text"}
                                className={`px-4 py-2 font-medium cursor-pointer 
                                    ${lang === langs ? CURR_COLOR + " bg-slate-300 text-white" : "text-gray-700"}
                                   hover:bg-slate-100 hover:text-blue-400`}
                            >
                                {langs} <span className="text-slate-400 text-sm">({vers})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LanguageSelect;
/* <Menu>
                <MenuButton as={Button}>
                    java
                </MenuButton>
                <MenuList>
                    {lang.map(([lang,vers]) => (
                        <MenuItem key={lang}>{lang}
                        &nbsp;
                        <span className='font-sm text-slate-400'>{vers}</span>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu> */