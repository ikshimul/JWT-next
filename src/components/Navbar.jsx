"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsCookie from "js-cookie";

const Navbar = () => {
  const currentRoute = usePathname();
  const router = useRouter();
  const Logout = async () => {
    const response = await fetch("/api/logout");
    const json = await response.json();
    if (json["status"] === true) {
      jsCookie.remove("isLoging");
      toast("আপনার লগআউট সফলভাবে সম্পন্ন হয়েছে");
      router.refresh("/");
      router.push("/");
    }
  };
  const isLoging = jsCookie.get("isLoging");
  console.log(isLoging);
  return (
    <div className="navbar fixed top-0 z-50 shadow bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/"
                className={
                  currentRoute === "/" ? "active-link" : "pending-link"
                }
              >
                হোম
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={
                  currentRoute === "/dashboard" ? "active-link" : "pending-link"
                }
              >
                ড্যাশবোর্ড
              </Link>
            </li>
            {!isLoging ? (
              <li>
                <Link
                  href="/registration"
                  className={
                    currentRoute === "/registration"
                      ? "active-link"
                      : "pending-link"
                  }
                  replace
                >
                  নিবন্ধন করুন
                  {/* সাইন-ইন করুন */}
                </Link>
              </li>
            ) : (
              ""
            )}
            {/* <li>
              <Link
                href="/login"
                className={
                  currentRoute === "/login" ? "active-link" : "pending-link"
                }
                replace
              >
                লগইন
              </Link>
            </li> */}
            {isLoging ? (
              <li>
                <a onClick={Logout}>লগআউট</a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-green-500"
        >
          ওয়েব অ্যাপ
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className={currentRoute === "/" ? "active-link" : "pending-link"}
            >
              হোম
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={
                currentRoute === "/dashboard" ? "active-link" : "pending-link"
              }
            >
              ড্যাশবোর্ড
            </Link>
          </li>
          {!isLoging ? (
            <li>
              <Link
                href="/registration"
                className={
                  currentRoute === "/registration"
                    ? "active-link"
                    : "pending-link"
                }
                replace
              >
                নিবন্ধন করুন
                {/* সাইন-ইন করুন */}
              </Link>
            </li>
          ) : (
            ""
          )}
          {/* <li>
            <Link
              href="/login"
              className={
                currentRoute === "/login" ? "active-link" : "pending-link"
              }
              replace
            >
              লগইন
            </Link>
          </li> */}
          {isLoging ? (
            <li>
              <a onClick={Logout}>লগআউট</a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
