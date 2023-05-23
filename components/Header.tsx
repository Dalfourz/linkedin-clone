import Image from "next/image";

function Header() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image
            src={"https://tinyurl.com/bdzf9y8f"}
            fill
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
