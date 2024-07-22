import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-slate-600 text-white text-lg py-4">
      <p className="mb-2">
        © 2024 Bytes Students. Todos os direitos reservados.
      </p>

      <div className="flex gap-4">
        <WhatsappLogo size={25} />
        <FacebookLogo size={25} />
        <XLogo size={25} />
        <YoutubeLogo size={25} />
        <InstagramLogo size={25} />
      </div>
    </footer>
  );
};
