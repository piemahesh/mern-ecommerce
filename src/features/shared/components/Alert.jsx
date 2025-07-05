export const Alert = (props) => {
  const { message, onClose, isOpen } = props;
  if (!isOpen) return;

  return (
    <div className="fixed top-0 flex items-center justify-center flex-col gap-2 left-0 h-full w-full bg-slate-500/40 backdrop-blur-2xl">
      {message}
      <button
        onClick={onClose}
        className="border active:scale-95 p-2 px-4 rounded-3xl text-transparent bg-clip-text 
      from-slate-400 from-25% border-violet-600 to-violet-500 font-bold bg-gradient-to-br"
      >
        Close
      </button>
    </div>
  );
};
