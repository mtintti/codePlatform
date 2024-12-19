
export default function Output({ output }) {
  return (

    <div>
      <div className="rounded-lg border-white border">
        <p className="font-lg py-1 pl-2">Output</p>
        <div className="rounded-md bg-white min-h-48 pt-2 px-4 text-gray-700">

          <div className="pt-2">
            <p className="font-bold">Return:</p>
            {output ? <pre className=" px-2 py-1 rounded-md bg-slate-200">{output}</pre> : null}
          </div>
        </div>
      </div>
    </div>

  )
}