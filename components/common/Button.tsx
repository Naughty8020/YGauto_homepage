type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      /* bg-[#359BCE] : 指定されたあの色
         hover:brightness-110 : ホバー時に少し明るくして「押せる感」を出す
         shadow-[0_4px_0_0_#287ba6] : 立体的な影（整備会社っぽい力強さ）
      */
      className={`
        px-8 py-3 bg-[#359BCE] text-white font-bold rounded-lg
        shadow-[0_4px_0_0_#287ba6] hover:translate-y-1 hover:shadow-none
        transition-all duration-100 ${className}
      `}
    >
      {text}
    </button>
  );
}
