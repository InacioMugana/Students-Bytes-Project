import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-screen  justify-center text-center items-center bg-slate-600 text-white h-35 px-8 text-lg absolute bottom-0">
      <p>© 2024 Bytes Students. Todos os direitos reservados.</p>

      <div className="flex justify-center items-center top-6 right-72 gap-4">
        <WhatsappLogo size={25} className="" />
        <FacebookLogo size={25} className="" />
        <XLogo size={25} className="" />
        <YoutubeLogo size={25} className="" />
        <InstagramLogo size={25} className="" />
      </div>
    </footer>
  );
};
