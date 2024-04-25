import { signIn } from "@junobuild/core";
import { Button } from "./Button";

export const Login = () => {
  return (
    <>
      <h1 className="dark:text-white text-5xl md:text-6xl mt-20 font-bold tracking-tight md:pt-24">
        Block Marked
      </h1>
      <p className="dark:text-white py-4 text-2xl md:max-w-2xl leading-relaxed">
        Save Your Website Book Marks On Blockchain and Access Them On Any
        Device.<br></br>
        Your book marks saved securly on blockchain and forever.<br></br>
        No More Hassle In Surfing Your Favourite Website
      </p>
      <h1 className="text-4xl text-white font-black mb-10">
        Use Internet Identity To Login
      </h1>
      <Button onClick={signIn}>Launch App</Button>;
    </>
  );
};
