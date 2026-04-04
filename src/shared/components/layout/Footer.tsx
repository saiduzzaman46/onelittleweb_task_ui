import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Works", href: "/#works" },
    { name: "Career", href: "/#career" },
  ];

  const helpLinks = [
    { name: "Customer Support", href: "/#support" },
    { name: "Delivery Details", href: "/#delivery" },
    { name: "Terms & Conditions", href: "/#terms" },
    { name: "Privacy Policy", href: "/#privacy" },
  ];

  const resourceLinks = [
    { name: "Free eBooks", href: "/#ebooks" },
    { name: "Development Tutorial", href: "/#tutorial" },
    { name: "How to - Blog", href: "/#blog" },
    { name: "Youtube Playlist", href: "/#youtube" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "/icons/twitter.svg",
      width: 16,
      height: 13,
    },
    {
      name: "Facebook",
      href: "/icons/facebook.svg",
      width: 10,
      height: 18,
    },
    {
      name: "Instagram",
      href: "/icons/instagram.svg",
      width: 20,
      height: 20,
    },
    {
      name: "Github",
      href: "/icons/github.svg",
      width: 19,
      height: 19,
    },
  ];

  return (
    <footer className="w-full bg-white border-t-1 border-[#D6D6D6]">
      <div className="max-w-[1440px] mx-auto px-[104px] py-[80px]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[396px_1fr_1fr_1fr] gap-20 2xl:gap-30">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo/google-logo.png"
                alt="Logo"
                width={124}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-[#52525B]! text-[14px] leading-[1.6]  font-regular!">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex items-center gap-6 mt-2">
              {socialLinks.map((social) => (
                <Image
                  key={social.name}
                  src={social.href}
                  alt={social.name}
                  width={social.width}
                  height={social.height}
                  style={{ width: "auto", height: "auto" }}
                />
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[16px] font-bold tracking-wider">Company</h4>
            <ul className="flex flex-col gap-[20px]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#18181B] text-[14px] font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[16px] font-bold tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#18181B] text-[14px] font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[16px] font-bold tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-[20px]">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#18181B] text-[14px] font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#230B41] py-5">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-[100px] flex justify-center items-center">
          <p className="text-white! font-regular!">
            © Copyright {currentYear}, All Rights Reserved by XYZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
