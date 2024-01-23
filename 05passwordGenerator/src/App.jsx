import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  

  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberallowed) str += "0123456789";
    if(characterallowed) str += "!@#$%^&*()_+";
    for(let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberallowed, characterallowed]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length,characterallowed,numberallowed,generatePassword]);

  return (
    
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='djfjsbdfhbvhj'
          ref={passwordRef}
          />
          <button
            onClick={copyPasswordtoClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input
          type="range"
          value={length}
          className='cursor-pointer'
          min={8}
          max={40}
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          checked={numberallowed}
          onChange={() => setNumberallowed((prev) => !prev)} //Just check after finishing if this code works with e.target.value
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          checked={characterallowed}
          onChange={() => setCharacterallowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
        </div>
        
      </div>
    </> 
  );
}

export default App