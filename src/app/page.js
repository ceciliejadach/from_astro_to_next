import Image from "next/image";
import MemberList from "@/components/MemberList";
import Header from "@/components/Header";
import SignuoForm from "@/components/SignupForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-6">
        <Header />
        <SignuoForm />
        <MemberList />
      </div>
    </div>
  );
}
