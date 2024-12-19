import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { green } from '@mui/material/colors';
export default function runButton({ runCodeOn }) {
    return (
        <div>
            <div className="relative inline-block">
                <button
                    className=" flex items-center bg-gray-100 mb-4 font-medium rounded-md px-4 py-1.5 text-gray-700 hover:bg-slate-300 hover:scale-110"
                    onClick={runCodeOn}
                >
                    <p>Run Code</p>
                <PlayArrowOutlinedIcon sx={{ color: green[400], fontSize:[30]}}/>
                </button>
            </div>
        </div>
    )
}
