import React from "react";
import { X } from "lucide-react";

const NoteCard = ({ note, idx, deleteNote }) => {
  return (
    <div className='relative min-h-70 w-55 rounded-2xl text-black bg-cover bg-no-repeat bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFUxpp7A6jYOhP1JWWtFBxZ8ULMzz7cRIkYMbikEmLeUQ9v2e4xfLZdke&s=10")]'>

      <button
        onClick={() => deleteNote(idx)}
        className="absolute top-3 right-3 bg-pink-400 p-1 rounded-full"
      >
        <X />
      </button>

      <h2 className="leading-tight text-2xl font-bold pt-6 pl-5 break-all">
        {note.title}
      </h2>

      <p className="leading-tight px-4 py-2 text-lg">
        {note.details}
      </p>

    </div>
  );
};

export default NoteCard;