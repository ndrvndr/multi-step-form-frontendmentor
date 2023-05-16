import { useRouteError } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout";
import NavigationButton from "../components/Elements/NavigationButton";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <AuthLayout>
      <div className="relative -top-16 flex h-fit w-[90%] flex-col items-center justify-center rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
        <h1 className="text-3xl font-bold">Oops</h1>
        <p className="my-5 text-center text-xl">
          Sorry, an unexpected error has occured
        </p>
        <p className="text-lg">{error.statusText || error.message}</p>
      </div>
      <div className="fixed bottom-0 flex h-20 w-full items-center justify-end bg-white px-5">
        <NavigationButton
          label="Home"
          bgColor="bg-primary-marine-blue"
          textColor="text-neutral-white"
          fontStyle="font-normal"
          path="/"
        />
      </div>
    </AuthLayout>
  );
};

export default ErrorPage;
