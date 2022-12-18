import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthShowcase } from ".";

const GoalsPage: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if(!sessionData) {
      router.push('/')
    }
  }, [sessionData])

    return (
        <>
            <Head>
                <title>Goals</title>
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <p className="text-center text-3xl font-bold text-white">Daily Goals</p>
                <AuthShowcase />
            </main>
        </>
    )
};

export default GoalsPage;