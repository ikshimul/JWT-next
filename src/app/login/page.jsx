"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();

  let [formValue, setFormValue] = useState({
    email: "ikshimuluits@gmail.com",
    password: "123",
  });

  const handleChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { method: "POST", body: JSON.stringify(formValue) };
    const response = await fetch("/api/login", config);
    const json = await response.json();
    if (json["status"] === true) {
      toast("আপনার লগিন সফলভাবে সম্পন্ন হয়েছে");
      router.refresh("/dashboard");
      router.push("/dashboard");
    } else {
      alert(json["message"]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-no-repeat bg-cover bg-center relative login-background">
          <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start hidden lg:flex flex-col  text-white">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-5xl">
                  ফিরে আসার জন্য স্বাগতম
                </h1>
                <p className="pr-3">
                  জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে
                  অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার
                  পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে।
                  জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।
                  মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা
                  শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে
                  স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে
                  দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য।
                  পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি
                  হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি
                  যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে। মানুষকে
                  দেখতে হল খুব ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। এবারকার
                  জীবযাত্রার পালায় বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায়
                  জন্তু ছিল প্রকাণ্ড একলা, মানুষ হল দূরপ্রসারিত অনেক।
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-white mx-auto rounded-2xl w-100 z-50">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    সাইন-ইন করুন
                  </h3>
                  <p className="text-gray-500">
                    আপনার অ্যাকাউন্টে সাইন ইন করুন।
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 tracking-wide font-semibold">
                      ইমেইল
                    </label>
                    <input
                      value={formValue.email}
                      onChange={(e) => {
                        handleChange("email", e.target.value);
                      }}
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="email"
                      placeholder="ইমেইল দিন"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-semibold text-gray-700 tracking-wide">
                      পাসওয়ার্ড
                    </label>
                    <input
                      value={formValue.password}
                      onChange={(e) => {
                        handleChange("password", e.target.value);
                      }}
                      type="password"
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="পাসওয়ার্ড দিন"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        মনে রাখবেন
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-green-400 hover:text-green-500"
                      >
                        পাসওয়ার্ড ভুলে গিয়েছি
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      লগিন করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
